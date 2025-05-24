
import { useState, useEffect, useRef } from "react";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import { Calendar } from "@/components/ui/calendar";
import { Popover, PopoverContent, PopoverTrigger } from "@/components/ui/popover";
import { useToast } from "@/hooks/use-toast";
import { supabase } from "@/integrations/supabase/client";
import { format } from "date-fns";
import { ko } from "date-fns/locale";
import { CalendarIcon } from "lucide-react";
import reservationStyles from "@/styles/reservation.module.scss";
import { formatPhoneNumber } from "@/functions/formatPhoneNumber";

// Define time window options
const TIME_WINDOWS = [
  "오전 12시-1시", "오전 1시-2시", "오전 2시-3시", "오전 3시-4시", "오전 4시-5시", "오전 5시-6시",
  "오전 6시-7시", "오전 7시-8시", "오전 8시-9시", "오전 9시-10시", "오전 10시-11시", "오전 11시-오후 12시",
  "오후 12시-1시", "오후 1시-2시", "오후 2시-3시", "오후 3시-4시", "오후 4시-5시", "오후 5시-6시",
  "오후 6시-7시", "오후 7시-8시", "오후 8시-9시", "오후 9시-10시", "오후 10시-11시", "오후 11시-12시"
];

const CustomerReservation = ({setShowForm}) => {
  const { toast } = useToast();
  const [name, setName] = useState("");
  const [phone, setPhone] = useState("");
  const [pickupLocation, setPickupLocation] = useState("");
  const [dropoffLocation, setDropoffLocation] = useState("");
  const [reservationType, setReservationType] = useState<"즉시" | "예약">("즉시");
  const [popoverOpen, setPopoverOpen] = useState(false);
  const [date, setDate] = useState<Date | undefined>(undefined);
  const [timeWindow, setTimeWindow] = useState<string>("");
  const [request, setRequest] = useState("");
  const [checked, setChecked] = useState(false);
  const [isSubmitting, setIsSubmitting] = useState(false);

  const handlePhoneChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    const formatted = formatPhoneNumber(e.target.value);
    setPhone(formatted);
  };

  const handleSubmit = async (event: React.FormEvent) => {
    event.preventDefault();

    // Form validation
    if (!name || !phone || !pickupLocation || !dropoffLocation) {
      toast({
        title: "모든 필드를 입력해주세요",
        description: "모든 필수 정보를 입력해주세요.",
        variant: "destructive",
      });
      return;
    }

    if (reservationType === "예약" && (!date || !timeWindow)) {
      toast({
        title: "예약 날짜와 시간을 선택해주세요",
        description: "예약 시 날짜와 시간을 선택해야 합니다.",
        variant: "destructive",
      });
      return;
    }

    if (!checked) {
      toast({
        title: "개인정보 수집 동의 필요",
        description: "개인정보 수집 동의에 체크하셔야 합니다.",
        variant: "destructive",
      });
      return;
    }

    setIsSubmitting(true);
    
    try {
      let finalDate = date;
      let finalTimeWindow = timeWindow;

      if (reservationType === "즉시") {
        finalDate = new Date();
        finalTimeWindow = finalDate.toISOString().split("T")[1].slice(0, 5)
      }
      // Format date for database
      const formattedDate = format(finalDate, "yyyy-MM-dd");
      
      const reservationData = {
        name,
        phone,
        pickup_location: pickupLocation,
        dropoff_location: dropoffLocation,
        reservation_type: reservationType,
        reservation_date: formattedDate,
        time_window: finalTimeWindow,
        request: request,
        consent_given: checked
      };

      // Save to Supabase
      const { error } = await supabase
        .from('reservations')
        .insert([reservationData]);
      
      if (error) {
        console.error("Error submitting reservation:", error);
        toast({
          className: "bg-white text-black",
          title: "예약 오류",
          description: "예약 중 오류가 발생했습니다. 잠시 후 다시 시도해주세요.",
          variant: "destructive",
        });
      } else {
        
        toast({
          className: "bg-white text-black",
          title: "예약이 완료되었습니다",
          description: "빠른 시간 내에 연락드리겠습니다.",
        });
        
        // Reset form
        setName("");
        setPhone("");
        setPickupLocation("");
        setDropoffLocation("");
        setReservationType("즉시")
        setDate(undefined);
        setTimeWindow("");
        setRequest("")
        setChecked(false);

        setShowForm(false)
      }
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
      <form onSubmit={handleSubmit} className={reservationStyles.formctn}>
        <div className={reservationStyles.card}>
          <Label className={reservationStyles.label} htmlFor="name">이름: </Label>
          <Input 
            id="name"
            type="text" 
            placeholder="이름을 입력해주세요"
            value={name}
            onChange={(e) => setName(e.target.value)}
            disabled={isSubmitting}
            required
          />
        </div>

        <div className={reservationStyles.card}>
          <Label className={reservationStyles.label} htmlFor="phone">전화번호: </Label>
          <Input 
            id="phone"
            type="tel" 
            placeholder="010-0000-0000" 
            value={phone}
            onChange={handlePhoneChange}
            disabled={isSubmitting}
            required
          />
        </div>

        <div className={reservationStyles.card}>
          <Label className={reservationStyles.label} htmlFor="pickupLocation">출발 위치: </Label>
          <div>
            <Input 
              id="pickupLocation"
              type="text" 
              placeholder="출발 위치를 입력해주세요" 
              value={pickupLocation}
              onChange={(e) => setPickupLocation(e.target.value)}
              disabled={isSubmitting}
              required
            />
          </div>
        </div>

        <div className={reservationStyles.card}>
          <Label className={reservationStyles.label} htmlFor="dropoffLocation">도착 위치: </Label>
          <div>
            <Input 
              id="dropoffLocation"
              type="text" 
              placeholder="도착 위치를 입력해주세요" 
              value={dropoffLocation}
              onChange={(e) => setDropoffLocation(e.target.value)}
              disabled={isSubmitting}
              required
            />
          </div>
        </div>

        <div className={reservationStyles.card}>
          <Label className={reservationStyles.label}>예약 유형: </Label>
          <div style={{ display: "flex", gap: "1rem" }}>
            <label>
              <input
                type="radio"
                name="reservationType"
                value="즉시"
                checked={reservationType === "즉시"}
                onChange={() => {
                  setReservationType("즉시");
                  setDate(undefined);
                  setTimeWindow("");
                }}
                disabled={isSubmitting}
              />
              즉시 호출
            </label>
            <label>
              <input
                type="radio"
                name="reservationType"
                value="예약"
                checked={reservationType === "예약"}
                onChange={() => setReservationType("예약")}
                disabled={isSubmitting}
              />
              예약
            </label>
          </div>
        </div>
        {reservationType === "예약" && (
          <>
            <div className={reservationStyles.card}>
              <Label className={reservationStyles.label}>날짜: </Label>
              <Popover open={popoverOpen} onOpenChange={setPopoverOpen}>
                <PopoverTrigger asChild>
                  <Button
                    variant={"outline"}
                    className={`w-full justify-start text-left font-normal ${!date && "text-muted-foreground"}`}
                  >
                    <CalendarIcon className="mr-2 h-4 w-4 z" />
                    {date ? format(date, "PPP", { locale: ko }) : "날짜 선택"}
                  </Button>
                </PopoverTrigger>
                <PopoverContent className="bg-white w-auto p-0 z-[9999]">
                  <Calendar
                    mode="single"
                    selected={date}
                    onSelect={(selectedDate) => {
                      setDate(selectedDate);
                      setPopoverOpen(false); // close on selection
                    }}
                    initialFocus
                    classNames={{
                      day: "rounded-md hover:font-bold hover:bg-accent hover:text-accent-foreground focus:outline-none focus:ring-2 ring-ring",
                    }}
                    disabled={(date) => date < new Date(new Date().setHours(0, 0, 0, 0))}
                  />
                </PopoverContent>
              </Popover>
            </div>

            <div className={reservationStyles.card}>
              <Label className={reservationStyles.label}>시간대: </Label>
              <select
                className="flex h-10 w-full rounded-md border border-input bg-background px-3 py-2 text-sm ring-offset-background focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-ring focus-visible:ring-offset-2"
                value={timeWindow}
                onChange={(e) => setTimeWindow(e.target.value)}
                disabled={isSubmitting}
              >
                <option value="">시간대 선택</option>
                {TIME_WINDOWS.map((time) => (
                  <option key={time} value={time}>{time}</option>
                ))}
              </select>
            </div>
          </>
        )}

        <div className={reservationStyles.card}>
          <Label className={reservationStyles.label} htmlFor="name">기타 요청 사항: </Label>
          <Input 
            id="request"
            type="text" 
            placeholder="조용히 가기 등"
            value={request}
            onChange={(e) => setRequest(e.target.value)}
            disabled={isSubmitting}
          />
        </div>

        <div className={reservationStyles.consentctn}>
          <h4>개인정보 수집 및 이용 동의</h4>
          <p>
            1. 수집 목적: 대리운전 서비스 예약 및 제공
            <br />2. 수집 항목: 이름, 전화번호, 출발/도착 위치, 예약 일시
            <br />3. 보유 및 이용 기간: 서비스 제공 완료 후 6개월
          </p>
          <div className={reservationStyles.consentbox}>
            <input
              type="checkbox"
              id="consent"
              name="consent"
              checked={checked}
              onChange={() => setChecked(!checked)}
              disabled={isSubmitting}
              className="w-4 h-4 rounded border-gray-300"
              required
            />
            <Label htmlFor="consent" className="font-normal">
              개인정보 수집 및 이용에 동의합니다
            : </Label>
          </div>
        </div>

        <Button 
          type="submit" 
          className={reservationStyles.formbtn}
          disabled={isSubmitting}
        >
          {isSubmitting ? "예약 중..." : "예약하기"}
        </Button>
      </form>
    </div>
  );
};

export default CustomerReservation;
