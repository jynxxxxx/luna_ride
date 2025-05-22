
import { useState, useEffect, useRef } from "react";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import { useToast } from "@/components/ui/use-toast";
import { supabase } from "@/integrations/supabase/client";
import reservationStyles from "@/styles/reservation.module.scss";
import { useForm, Controller } from "react-hook-form";
import { z } from "zod";
import { zodResolver } from "@hookform/resolvers/zod";
import DatePicker from "react-datepicker";
import "react-datepicker/dist/react-datepicker.css";

declare global {
  interface Window {
    naver: any;
  }
}

const timeWindows = [
  "오후 7시-8시",
  "오후 8시-9시",
  "오후 9시-10시",
  "오후 10시-11시",
  "오후 11시-12시",
  "오전 12시-1시",
  "오전 1시-2시",
  "오전 2시-3시",
];

const formSchema = z.object({
  email: z.string().email("유효한 이메일 주소를 입력해주세요."),
  name: z.string().min(1, "이름을 입력해주세요."),
  phone: z.string().min(10, "유효한 전화번호를 입력해주세요."),
  pickupLocation: z.string().min(1, "출발지를 입력해주세요."),
  dropoffLocation: z.string().min(1, "도착지를 입력해주세요."),
  date: z.date({ required_error: "날짜를 선택해주세요." }),
  timeWindow: z.string({ required_error: "시간대를 선택해주세요." }),
  consent: z.literal(true, {
    errorMap: () => ({ message: "개인정보 수집 동의가 필요합니다." }),
  }),
});

type FormValues = z.infer<typeof formSchema>;

const CustomerReservation = () => {
  const { toast } = useToast();
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [naverMapsLoaded, setNaverMapsLoaded] = useState(false);

  const pickupInputRef = useRef<HTMLInputElement>(null);
  const dropoffInputRef = useRef<HTMLInputElement>(null);
  
  const {
    register,
    handleSubmit,
    control,
    setValue,
    formState: { errors },
  } = useForm<FormValues>({
    resolver: zodResolver(formSchema),
    defaultValues: {
      email: "",
      name: "",
      phone: "",
      pickupLocation: "",
      dropoffLocation: "",
      timeWindow: timeWindows[0],
      consent: false,
    },
  });

  const loadNaverMapsScript = () => {
    // In production we would use process.env.NAVER_MAPS_API_KEY here
    // For demo purposes, using a placeholder
    const NAVER_MAPS_CLIENT_ID = "YOUR_NAVER_MAPS_CLIENT_ID";
    
    const script = document.createElement("script");
    script.type = "text/javascript";
    script.src = `https://openapi.map.naver.com/openapi/v3/maps.js?ncpClientId=${NAVER_MAPS_CLIENT_ID}&submodules=geocoder`;
    script.async = true;
    script.onload = () => {
      setNaverMapsLoaded(true);
    };
    document.head.appendChild(script);
  };

  useEffect(() => {
    loadNaverMapsScript();
  }, []);

  useEffect(() => {
    if (naverMapsLoaded && window.naver && window.naver.maps) {
      // Setup autocomplete for pickup location
      const pickupSearchBox = new window.naver.maps.places.AutoComplete({
        inputElement: pickupInputRef.current,
        options: {
          language: "ko",
          filter: "countries:kr",
        },
      });

      // Setup autocomplete for dropoff location
      const dropoffSearchBox = new window.naver.maps.places.AutoComplete({
        inputElement: dropoffInputRef.current,
        options: {
          language: "ko",
          filter: "countries:kr",
        },
      });

      // Event listeners for selection
      window.naver.maps.Event.addListener(
        pickupSearchBox, 
        "select", 
        (selection: any) => {
          setValue("pickupLocation", selection.address.jibunAddress || selection.address.roadAddress);
        }
      );

      window.naver.maps.Event.addListener(
        dropoffSearchBox, 
        "select", 
        (selection: any) => {
          setValue("dropoffLocation", selection.address.jibunAddress || selection.address.roadAddress);
        }
      );
    }
  }, [naverMapsLoaded, setValue]);

  const onSubmit = async (data: FormValues) => {
    setIsSubmitting(true);
    
    try {
      // Store in Supabase
      const { error } = await supabase
        .from('reservations')
        .insert([{ 
          name: data.name,
          email: data.email,
          phone: data.phone,
          pickup_location: data.pickupLocation,
          dropoff_location: data.dropoffLocation,
          reservation_date: data.date.toISOString().split('T')[0],
          time_window: data.timeWindow,
          consent_given: data.consent
        }]);
      
      if (error) {
        console.error("Error submitting reservation:", error);
        toast({
          title: "오류가 발생했습니다",
          description: "잠시 후 다시 시도해주세요.",
          variant: "destructive",
        });
        return;
      }
      
      // Send data to Make webhook
      // This would be your Make webhook URL
      const makeWebhookUrl = "https://hook.make.com/your-webhook-id";
      
      await fetch(makeWebhookUrl, {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify({
          name: data.name,
          email: data.email,
          phone: data.phone,
          pickup_location: data.pickupLocation,
          dropoff_location: data.dropoffLocation,
          reservation_date: data.date.toISOString().split('T')[0],
          time_window: data.timeWindow,
        }),
        mode: "no-cors"
      });

      toast({
        title: "예약 신청이 완료되었습니다",
        description: "곧 기사님이 연락드릴 예정입니다.",
      });
    } catch (error) {
      console.error("Error:", error);
      toast({
        title: "오류가 발생했습니다",
        description: "잠시 후 다시 시도해주세요.",
        variant: "destructive",
      });
    } finally {
      setIsSubmitting(false);
    }
  };

  return (
    <div className={reservationStyles.ctn}>
      <div className={reservationStyles.title}>
        ribon <span className={reservationStyles.titlekr}>대리 서비스 예약</span> 
      </div>
    
      <form onSubmit={handleSubmit(onSubmit)} className={reservationStyles.formctn}>
        <div className="space-y-1">
          <Label className={reservationStyles.label} htmlFor="name">이름</Label>
          <Input
            id="name"
            type="text"
            placeholder="이름"
            className={errors.name ? "border-red-500" : ""}
            {...register("name")}
          />
          {errors.name && <p className={reservationStyles.errorText}>{errors.name.message}</p>}
        </div>

        <div className="space-y-1">
          <Label className={reservationStyles.label} htmlFor="phone">전화번호</Label>
          <Input
            id="phone"
            type="tel"
            placeholder="010-0000-0000"
            className={errors.phone ? "border-red-500" : ""}
            {...register("phone")}
          />
          {errors.phone && <p className={reservationStyles.errorText}>{errors.phone.message}</p>}
        </div>

        <div className="space-y-1">
          <Label className={reservationStyles.label} htmlFor="email">이메일</Label>
          <Input
            id="email"
            type="email"
            placeholder="이메일 주소"
            className={errors.email ? "border-red-500" : ""}
            {...register("email")}
          />
          {errors.email && <p className={reservationStyles.errorText}>{errors.email.message}</p>}
        </div>

        <div className="space-y-1">
          <Label className={reservationStyles.label} htmlFor="pickupLocation">출발지</Label>
          <Input
            id="pickupLocation"
            type="text"
            placeholder="출발지 주소를 입력해주세요"
            className={errors.pickupLocation ? "border-red-500" : ""}
            ref={(e: HTMLInputElement | null) => {
              register("pickupLocation").ref(e);
              pickupInputRef.current = e;
            }}
          />
          {errors.pickupLocation && <p className={reservationStyles.errorText}>{errors.pickupLocation.message}</p>}
        </div>

        <div className="space-y-1">
          <Label className={reservationStyles.label} htmlFor="dropoffLocation">도착지</Label>
          <Input
            id="dropoffLocation"
            type="text"
            placeholder="도착지 주소를 입력해주세요"
            className={errors.dropoffLocation ? "border-red-500" : ""}
            ref={(e: HTMLInputElement | null) => {
              register("dropoffLocation").ref(e);
              dropoffInputRef.current = e;
            }}
          />
          {errors.dropoffLocation && <p className={reservationStyles.errorText}>{errors.dropoffLocation.message}</p>}
        </div>

        <div className="space-y-1">
          <Label className={reservationStyles.label} htmlFor="date">날짜</Label>
          <Controller
            control={control}
            name="date"
            render={({ field }) => (
              <DatePicker
                selected={field.value}
                onChange={(date: Date) => field.onChange(date)}
                className={`flex h-10 w-full rounded-md border px-3 py-2 text-sm ${errors.date ? "border-red-500" : "border-input"}`}
                placeholderText="날짜 선택"
                dateFormat="yyyy-MM-dd"
                minDate={new Date()}
                id="date"
              />
            )}
          />
          {errors.date && <p className={reservationStyles.errorText}>{errors.date.message}</p>}
        </div>

        <div className="space-y-1">
          <Label className={reservationStyles.label} htmlFor="timeWindow">시간대</Label>
          <select
            id="timeWindow"
            className={`flex h-10 w-full rounded-md border border-input bg-background px-3 py-2 text-sm ${
              errors.timeWindow ? "border-red-500" : ""
            }`}
            {...register("timeWindow")}
          >
            {timeWindows.map((window) => (
              <option key={window} value={window}>
                {window}
              </option>
            ))}
          </select>
          {errors.timeWindow && <p className={reservationStyles.errorText}>{errors.timeWindow.message}</p>}
        </div>

        <div className={reservationStyles.consentctn}>
          <h4>개인정보 수집 및 이용 동의</h4>
          <p>
            1. 수집 목적: 대리운전 예약 서비스 제공
            <br />2. 수집 항목: 이름, 전화번호, 이메일, 위치 정보
            <br />3. 보유 및 이용 기간: 서비스 제공 후 6개월
          </p>
          <div className={reservationStyles.consentbox}>
            <input
              type="checkbox"
              id="consent"
              className="w-4 h-4 rounded border-gray-300"
              disabled={isSubmitting}
              {...register("consent")}
            />
            <Label htmlFor="consent" className="font-normal">
              개인정보 수집 및 이용에 동의합니다
            </Label>
          </div>
          {errors.consent && <p className={reservationStyles.errorText}>{errors.consent.message}</p>}
        </div>

        <Button 
          type="submit" 
          className={reservationStyles.formbtn}
          disabled={isSubmitting}
        >
          {isSubmitting ? "예약 중..." : "예약 신청하기"}
        </Button>
      </form>
    </div>
  );
};

export default CustomerReservation;
