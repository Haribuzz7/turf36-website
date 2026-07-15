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
import DayNightSliderSection from "@/components/DayNightSliderSection";
import EventsSection from "@/components/EventsSection";
import TestimonialsSection from "@/components/TestimonialsSection";
import MemorySection from "@/components/MemorySection";
import Footer from "@/components/Footer";

export default async function Home() {
  const supabase = await createClient();

  // Fetch Live Match
  const { data: liveMatch } = await supabase.from('live_match').select('*').limit(1).single();



  // Fetch Hall of Fame
  const { data: hallOfFame } = await supabase.from('hall_of_fame').select('*').order('order_index', { ascending: true });

  // Fetch Highlights
  const { data: highlights } = await supabase.from('highlights').select('*').order('created_at', { ascending: false });

  // Fetch Gallery Images
  const { data: galleryFiles } = await supabase.from('gallery').select('*').order('created_at', { ascending: false });
  const gallery = galleryFiles || [];

  return (
    <main>
      <Header />
      <HeroSection />
      <BookingSection />
      <DayNightSliderSection />
      <LiveMatchSection liveMatch={liveMatch} />
      <AchievementsSection />
      <GallerySection images={gallery} />
      <HighlightsSection highlights={highlights || []} />
      <HallOfFameSection hallOfFame={hallOfFame || []} />
      <TeamsSection />
      <FacilitiesSection />
      <EventsSection />
      <TestimonialsSection />
      <MemorySection />
      <Footer />
    </main>
  );
}
