
export type Reservation = {
  id: number;
  created_at: string;
  name: string;
  email: string;
  phone: string;
  pickup_location: string;
  dropoff_location: string;
  reservation_date: string;
  time_window: string;
  consent_given: boolean;
}
