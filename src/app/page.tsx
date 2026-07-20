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
import TurfMapSection from "@/components/TurfMapSection";
import FacilitiesSection from "@/components/FacilitiesSection";
import DayNightSliderSection from "@/components/DayNightSliderSection";
import EventsSection from "@/components/EventsSection";
import EventPlannerSection from "@/components/EventPlannerSection";
import TestimonialsSection from "@/components/TestimonialsSection";
import MemorySection from "@/components/MemorySection";
import Footer from "@/components/Footer";
import PanoramaViewer from "@/components/PanoramaViewer";

export default async function Home() {
  const supabase = await createClient();

  // Fetch all data in parallel for much faster load times
  const [
    { data: liveMatch },
    { data: hallOfFame },
    { data: highlights },
    { data: galleryFiles },
    { data: siteSettings }
  ] = await Promise.all([
    supabase.from('live_match').select('*').limit(1).single(),
    supabase.from('hall_of_fame').select('*').order('order_index', { ascending: true }),
    supabase.from('highlights').select('*').order('created_at', { ascending: false }),
    supabase.from('gallery').select('*').order('created_at', { ascending: false }),
    supabase.from('site_settings').select('*').eq('id', 1).single()
  ]);

  const gallery = galleryFiles || [];

  return (
    <main>
      <Header announcementText={siteSettings?.announcement_active ? siteSettings?.announcement_text : null} />
      <HeroSection />
      <BookingSection />
      <DayNightSliderSection />
      <LiveMatchSection liveMatch={liveMatch} />
      <AchievementsSection />
      <GallerySection images={gallery} />
      <HighlightsSection highlights={highlights || []} />
      <HallOfFameSection hallOfFame={hallOfFame || []} />
      <TeamsSection />
      <TurfMapSection maintenanceSettings={siteSettings} />
      <PanoramaViewer />
      <FacilitiesSection />
      <EventsSection />
      <EventPlannerSection />
      <TestimonialsSection />
      <MemorySection />
      <Footer />
    </main>
  );
}
