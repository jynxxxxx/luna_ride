
# Ribon Chauffeur Service

## Environment Setup

### Naver Maps API Setup

1. Go to the [Naver Cloud Platform](https://www.ncloud.com/)
2. Create an account and register a new application
3. Enable the Maps API for your application
4. Create a new Client ID for the application
5. Set up environment variables:

Create a `.env` file in the root directory with the following content:

```
VITE_NAVER_MAPS_CLIENT_ID=your_naver_maps_client_id
```

Replace `your_naver_maps_client_id` with the actual Client ID from Naver Cloud Platform.

### Make.com (Integromat) Webhook Setup

1. Create a free account on [Make.com](https://www.make.com/)
2. Create a new scenario starting with a "Webhook" module
3. Configure the webhook to receive JSON data
4. Add a Slack module to send messages to your desired channel
5. Map the incoming data fields to your Slack message format
6. Deploy the scenario and copy the webhook URL
7. Update the `makeWebhookUrl` variable in `CustomerReservation.tsx` with your webhook URL

### Supabase Table Setup

Create the following table in your Supabase project:

```sql
CREATE TABLE reservations (
  id SERIAL PRIMARY KEY,
  created_at TIMESTAMP WITH TIME ZONE DEFAULT NOW(),
  name TEXT NOT NULL,
  email TEXT NOT NULL,
  phone TEXT NOT NULL,
  pickup_location TEXT NOT NULL,
  dropoff_location TEXT NOT NULL,
  reservation_date DATE NOT NULL,
  time_window TEXT NOT NULL,
  consent_given BOOLEAN NOT NULL
);
```

## Development

1. Install dependencies:

```bash
npm install
```

2. Run the development server:

```bash
npm run dev
```

The application will be available at http://localhost:8080
