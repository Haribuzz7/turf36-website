import { createClient } from '@/utils/supabase/server'
import Header from "@/components/Header";
import HeroSection from "@/components/HeroSection";
import BookingSection from "@/components/BookingSection";
import LiveMatchSection from "@/components/LiveMatchSection";
import AchievementsSection from "@/components/AchievementsSection";
import GallerySection from "@/components/GallerySection";
import HighlightsSection from "@/components/HighlightsSection";
import HallOfFameSection from "@/components/HallOfFameSection";
import TeamsSection from "@/components/TeamsSection";
import FacilitiesSection from "@/components/FacilitiesSection";
import EventsSection from "@/components/EventsSection";
import TestimonialsSection from "@/components/TestimonialsSection";
import MemorySection from "@/components/MemorySection";
import Footer from "@/components/Footer";

export default async function Home() {
  const supabase = await createClient();

  // Fetch Live Match
  const { data: liveMatch } = await supabase.from('live_match').select('*').limit(1).single();

  // Fetch Events
  const { data: events } = await supabase.from('events').select('*').order('event_date', { ascending: true });

  // Fetch Hall of Fame
  const { data: hallOfFame } = await supabase.from('hall_of_fame').select('*').order('order_index', { ascending: true });

  // Fetch Highlights
  const { data: highlights } = await supabase.from('highlights').select('*').order('created_at', { ascending: false });

  // Fetch Gallery Images
  const { data: galleryFiles } = await supabase.storage.from('gallery').list();
  
  // Filter out hidden files, folders (no extension), and generate public URLs
  const gallery = galleryFiles?.filter(file => !file.name.startsWith('.') && file.name.includes('.')).map(file => {
    return supabase.storage.from('gallery').getPublicUrl(file.name).data.publicUrl;
  }) || [];

  return (
    <main>
      <Header />
      <HeroSection />
      <BookingSection />
      <LiveMatchSection liveMatch={liveMatch} />
      <AchievementsSection />
      <GallerySection images={gallery} />
      <HighlightsSection highlights={highlights || []} />
      <HallOfFameSection hallOfFame={hallOfFame || []} />
      <TeamsSection />
      <FacilitiesSection />
      <EventsSection events={events || []} />
      <TestimonialsSection />
      <MemorySection />
      <Footer />
    </main>
  );
}
