
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

// Define time window options
const TIME_WINDOWS = [
  "오전 9시-10시", "오전 10시-11시", "오전 11시-오후 12시", 
  "오후 12시-1시", "오후 1시-2시", "오후 2시-3시", "오후 3시-4시", 
  "오후 4시-5시", "오후 5시-6시", "오후 6시-7시", "오후 7시-8시", 
  "오후 8시-9시", "오후 9시-10시", "오후 10시-11시", "오후 11시-12시"
];

const CustomerReservation = () => {
  const { toast } = useToast();
  const [name, setName] = useState("");
  const [phone, setPhone] = useState("");
  const [pickupLocation, setPickupLocation] = useState("");
  const [dropoffLocation, setDropoffLocation] = useState("");
  const [popoverOpen, setPopoverOpen] = useState(false);
  const [date, setDate] = useState<Date | undefined>(undefined);
  const [timeWindow, setTimeWindow] = useState<string>("");
  const [checked, setChecked] = useState(false);
  const [isSubmitting, setIsSubmitting] = useState(false);

  const formatPhoneNumber = (value: string) => {
    // Remove all non-numeric characters
    const numbers = value.replace(/\D/g, "");
    
    // Format as Korean phone number (010-1234-5678)
    if (numbers.length <= 3) {
      return numbers;
    } else if (numbers.length <= 7) {
      return `${numbers.slice(0, 3)}-${numbers.slice(3)}`;
    } else {
      return `${numbers.slice(0, 3)}-${numbers.slice(3, 7)}-${numbers.slice(7, 11)}`;
    }
  };

  const handlePhoneChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    const formatted = formatPhoneNumber(e.target.value);
    setPhone(formatted);
  };

  const sendToMake = async (reservationData) => {
    try {
      // Replace with your Make.com webhook URL
      const webhookUrl = "YOUR_MAKE_WEBHOOK_URL";
      
      await fetch(webhookUrl, {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify(reservationData),
        mode: "no-cors",
      });
      
      console.log("Notification sent to Make.com");
      return true;
    } catch (error) {
      console.error("Error sending to Make.com:", error);
      return false;
    }
  };

  const handleSubmit = async (event: React.FormEvent) => {
    event.preventDefault();

    // Form validation
    if (!name || !phone || !pickupLocation || !dropoffLocation || !date || !timeWindow) {
      toast({
        title: "모든 필드를 입력해주세요",
        description: "모든 필수 정보를 입력해주세요.",
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
      // Format date for database
      const formattedDate = format(date, "yyyy-MM-dd");
      
      const reservationData = {
        name,
        phone,
        pickup_location: pickupLocation,
        dropoff_location: dropoffLocation,
        reservation_date: formattedDate,
        time_window: timeWindow,
        consent_given: checked
      };

      // Save to Supabase
      const { error } = await supabase
        .from('reservations')
        .insert([reservationData]);
      
      if (error) {
        console.error("Error submitting reservation:", error);
        toast({
          title: "예약 오류",
          description: "예약 중 오류가 발생했습니다. 잠시 후 다시 시도해주세요.",
          variant: "destructive",
        });
      } else {
        // Send to Make.com for Slack notification
        await sendToMake(reservationData);
        
        toast({
          title: "예약이 완료되었습니다",
          description: "빠른 시간 내에 연락드리겠습니다.",
        });
        
        // Reset form
        setName("");
        setPhone("");
        setPickupLocation("");
        setDropoffLocation("");
        setDate(undefined);
        setTimeWindow("");
        setChecked(false);
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
      <div className={reservationStyles.title}>
        mobl <span className={reservationStyles.titlekr}>대리 서비스 예약</span> 
      </div>
    
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
          <p style={{ fontSize: "0.8rem", color: "#666", marginTop: "4px" }}>
            아직 정확한 위치를 모를 경우, 동네 적어주세요.
          </p>
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
          <p style={{ fontSize: "0.8rem", color: "#666", marginTop: "4px" }}>
            아직 정확한 위치를 모를 경우, 동네 적어주세요.
          </p>
          </div>
        </div>

        <div className={reservationStyles.card}>
          <Label className={reservationStyles.label}>날짜: </Label>
          <Popover open={popoverOpen} onOpenChange={setPopoverOpen}>
            <PopoverTrigger asChild>
              <Button
                variant={"outline"}
                className={`w-full justify-start text-left font-normal ${!date && "text-muted-foreground"}`}
              >
                <CalendarIcon className="mr-2 h-4 w-4" />
                {date ? format(date, "PPP", { locale: ko }) : "날짜 선택"}
              </Button>
            </PopoverTrigger>
            <PopoverContent className="bg-white w-auto p-0">
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
            required
          >
            <option value="">시간대 선택</option>
            {TIME_WINDOWS.map((time) => (
              <option key={time} value={time}>{time}</option>
            ))}
          </select>
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
