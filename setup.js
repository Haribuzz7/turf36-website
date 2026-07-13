// eslint-disable-next-line @typescript-eslint/no-require-imports
const { Client } = require('pg');

const sql = `
-- 1. Create a table for Live Matches
CREATE TABLE IF NOT EXISTS public.live_match (
  id SERIAL PRIMARY KEY,
  iframe_url TEXT,
  is_active BOOLEAN DEFAULT true,
  updated_at TIMESTAMP WITH TIME ZONE DEFAULT timezone('utc'::text, now())
);

INSERT INTO public.live_match (id, iframe_url, is_active) 
VALUES (1, '', false) 
ON CONFLICT (id) DO NOTHING;

-- 2. Create a table for Events/Tournaments
CREATE TABLE IF NOT EXISTS public.events (
  id UUID DEFAULT gen_random_uuid() PRIMARY KEY,
  title TEXT NOT NULL,
  subtitle TEXT NOT NULL,
  event_date DATE NOT NULL,
  created_at TIMESTAMP WITH TIME ZONE DEFAULT timezone('utc'::text, now())
);

-- 3. Create a table for the Hall of Fame
CREATE TABLE IF NOT EXISTS public.hall_of_fame (
  id UUID DEFAULT gen_random_uuid() PRIMARY KEY,
  role TEXT NOT NULL,
  name TEXT NOT NULL,
  metadata TEXT NOT NULL,
  image_url TEXT,
  order_index INTEGER DEFAULT 0,
  created_at TIMESTAMP WITH TIME ZONE DEFAULT timezone('utc'::text, now())
);

INSERT INTO public.hall_of_fame (role, name, metadata, order_index)
VALUES 
  ('MVP', 'TBD Season 2', 'TSL SP', 1),
  ('Top Scorer', 'TBD Season 2', 'TSL SP', 2),
  ('Best Bowler', 'TBD Season 2', 'TSL SP', 3),
  ('Champions', 'Cream & Craze', 'First Serve · 2026', 4)
ON CONFLICT DO NOTHING;

-- 4. Enable Row Level Security (RLS)
ALTER TABLE public.live_match ENABLE ROW LEVEL SECURITY;
ALTER TABLE public.events ENABLE ROW LEVEL SECURITY;
ALTER TABLE public.hall_of_fame ENABLE ROW LEVEL SECURITY;

-- 5. Create policies so anyone can READ data (publicly visible on the website)
DROP POLICY IF EXISTS "Allow public read access on live_match" ON public.live_match;
CREATE POLICY "Allow public read access on live_match" ON public.live_match FOR SELECT USING (true);

DROP POLICY IF EXISTS "Allow public read access on events" ON public.events;
CREATE POLICY "Allow public read access on events" ON public.events FOR SELECT USING (true);

DROP POLICY IF EXISTS "Allow public read access on hall_of_fame" ON public.hall_of_fame;
CREATE POLICY "Allow public read access on hall_of_fame" ON public.hall_of_fame FOR SELECT USING (true);

-- 6. Create policies so ONLY authenticated admins can INSERT/UPDATE/DELETE
DROP POLICY IF EXISTS "Allow admin all access on live_match" ON public.live_match;
CREATE POLICY "Allow admin all access on live_match" ON public.live_match FOR ALL USING (auth.role() = 'authenticated');

DROP POLICY IF EXISTS "Allow admin all access on events" ON public.events;
CREATE POLICY "Allow admin all access on events" ON public.events FOR ALL USING (auth.role() = 'authenticated');

DROP POLICY IF EXISTS "Allow admin all access on hall_of_fame" ON public.hall_of_fame;
CREATE POLICY "Allow admin all access on hall_of_fame" ON public.hall_of_fame FOR ALL USING (auth.role() = 'authenticated');

-- 7. Set up Storage for Gallery Images (and Hall of fame avatars)
INSERT INTO storage.buckets (id, name, public) VALUES ('gallery', 'gallery', true) ON CONFLICT (id) DO NOTHING;

-- Storage Policies
DROP POLICY IF EXISTS "Public Access" ON storage.objects;
CREATE POLICY "Public Access" ON storage.objects FOR SELECT USING (bucket_id = 'gallery');

DROP POLICY IF EXISTS "Admin Upload Access" ON storage.objects;
CREATE POLICY "Admin Upload Access" ON storage.objects FOR INSERT WITH CHECK (bucket_id = 'gallery' AND auth.role() = 'authenticated');

DROP POLICY IF EXISTS "Admin Delete Access" ON storage.objects;
CREATE POLICY "Admin Delete Access" ON storage.objects FOR DELETE USING (bucket_id = 'gallery' AND auth.role() = 'authenticated');
`;

const regions = [
  'ap-south-1',
  'ap-southeast-1',
  'us-east-1',
  'eu-central-1',
  'us-west-1',
  'eu-west-1',
  'eu-west-2',
  'ap-northeast-1',
  'ap-northeast-2',
  'sa-east-1',
  'ca-central-1',
  'ap-southeast-2'
];

async function run() {
  for (const region of regions) {
    const connectionString = "postgresql://postgres.qrtrxwbhvclhfkwvrcwc:Turf36haribuzz@aws-0-" + region + ".pooler.supabase.com:6543/postgres";
    const client = new Client({ connectionString, connectionTimeoutMillis: 5000 });
    
    try {
      console.log("Trying " + region + "...");
      await client.connect();
      console.log("Connected successfully on " + region + "!");
      await client.query(sql);
      console.log("SQL executed successfully.");
      await client.end();
      return; // Exit loop on success
    } catch (err) {
      console.log("Failed on " + region + ": " + err.message);
    }
  }
  console.log("Failed to connect to any region pooler.");
}

run();
