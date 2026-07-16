import { createClient } from '@/utils/supabase/server'
import { updateLiveMatch, addEvent, deleteEvent, addHighlight, deleteHighlight, uploadGalleryImage, deleteGalleryImage, addHallOfFame, deleteHallOfFame, updateBookingStatus, updateSiteSettings } from './actions'
import PremiumIcon from '@/components/PremiumIcon'
import Link from 'next/link'
import Image from 'next/image'

export default async function AdminDashboard(props: { searchParams: Promise<{ tab?: string }> }) {
  const supabase = await createClient()
  const searchParams = await props.searchParams;
  const currentTab = searchParams?.tab || 'overview';
  
  // Fetch all necessary data
  const { data: liveMatch } = await supabase.from('live_match').select('*').single()
  const { data: events } = await supabase.from('events').select('*').order('event_date', { ascending: true })
  const { data: highlights } = await supabase.from('highlights').select('*').order('created_at', { ascending: false })
  const { data: hallOfFame } = await supabase.from('hall_of_fame').select('*').order('order_index', { ascending: true })
  const { data: galleryFiles } = await supabase.from('gallery').select('*').order('created_at', { ascending: false });
  const gallery = galleryFiles || [];
  
  const { data: siteSettings } = await supabase.from('site_settings').select('*').eq('id', 1).single();
  const { data: bookings } = await supabase.from('bookings').select('*').order('created_at', { ascending: false });

  const pendingBookings = bookings?.filter(b => b.status === 'pending') || [];
  const confirmedBookings = bookings?.filter(b => b.status === 'confirmed') || [];
  const cancelledBookings = bookings?.filter(b => b.status === 'cancelled') || [];

  return (
    <div className="flex min-h-screen bg-[var(--color-void)] text-white">
      {/* Sidebar Navigation */}
      <div className="w-[280px] border-r border-[var(--color-card-stroke)] bg-[var(--color-charcoal)] p-6 flex flex-col gap-8 sticky top-0 h-screen">
        <div>
          <h1 className="font-bebas text-4xl text-[var(--color-gold-hot)] tracking-widest">TURF 36</h1>
          <div className="text-[10px] text-[var(--color-muted)] font-space uppercase tracking-widest mt-1">Management System</div>
        </div>

        <nav className="flex flex-col gap-2">
          <Link href="?tab=overview" className={`flex items-center gap-3 px-4 py-3 rounded-lg font-space text-[13px] tracking-wide transition-colors ${currentTab === 'overview' ? 'bg-[var(--color-gold)]/10 text-[var(--color-gold-hot)] border border-[var(--color-gold)]/20' : 'text-gray-400 hover:bg-white/5 hover:text-white'}`}>
            <PremiumIcon name="sun" noContainer size="sm" /> Overview & Settings
          </Link>
          <Link href="?tab=crm" className={`flex items-center gap-3 px-4 py-3 rounded-lg font-space text-[13px] tracking-wide transition-colors ${currentTab === 'crm' ? 'bg-[var(--color-gold)]/10 text-[var(--color-gold-hot)] border border-[var(--color-gold)]/20' : 'text-gray-400 hover:bg-white/5 hover:text-white'}`}>
            <div className="relative">
              <PremiumIcon name="info" noContainer size="sm" />
              {pendingBookings.length > 0 && (
                <span className="absolute -top-1 -right-1 w-2 h-2 bg-red-500 rounded-full animate-pulse"></span>
              )}
            </div>
            Booking CRM
          </Link>
          <Link href="?tab=content" className={`flex items-center gap-3 px-4 py-3 rounded-lg font-space text-[13px] tracking-wide transition-colors ${currentTab === 'content' ? 'bg-[var(--color-gold)]/10 text-[var(--color-gold-hot)] border border-[var(--color-gold)]/20' : 'text-gray-400 hover:bg-white/5 hover:text-white'}`}>
            <PremiumIcon name="camera" noContainer size="sm" /> Content Manager
          </Link>
          <Link href="/" className="flex items-center gap-3 px-4 py-3 rounded-lg font-space text-[13px] tracking-wide text-gray-400 hover:bg-white/5 hover:text-white mt-8 border border-transparent hover:border-[var(--color-card-stroke)]">
            <PremiumIcon name="moon" noContainer size="sm" /> View Live Site
          </Link>
        </nav>
      </div>

      {/* Main Content Area */}
      <div className="flex-1 p-10 overflow-y-auto">
        
        {/* OVERVIEW TAB */}
        {currentTab === 'overview' && (
          <div className="animate-[fade-in_0.3s_ease-out]">
            <h2 className="font-bebas text-[36px] mb-8">System Overview</h2>
            
            <div className="grid grid-cols-1 xl:grid-cols-2 gap-8">
              {/* Site Settings (Announcements & Maintenance) */}
              <div className="bg-[var(--color-card)] border border-[var(--color-card-stroke)] rounded-[16px] p-6 shadow-xl">
                <div className="font-bebas text-[28px] mb-2 flex items-center gap-3">
                  <PremiumIcon name="info" size="md" /> 
                  Live Site Controls
                </div>
                <p className="text-[var(--color-muted)] text-[13.5px] mb-6">Manage global announcements and block off facilities for maintenance.</p>

                <form action={updateSiteSettings} className="flex flex-col gap-6">
                  {/* Announcement */}
                  <div className="p-4 bg-black/40 border border-[var(--color-card-stroke)] rounded-xl">
                    <h3 className="font-space text-[12px] text-[var(--color-gold)] uppercase tracking-wider mb-4">Live Announcement Banner</h3>
                    <textarea 
                      name="announcement_text"
                      defaultValue={siteSettings?.announcement_text || ''}
                      placeholder="e.g. ⚡ Flash Sale! ₹100 off tonight!"
                      className="w-full bg-[#0a0a0a] border border-[var(--color-card-stroke)] rounded-lg p-3 text-[13px] font-sans text-white focus:outline-none focus:border-[var(--color-gold)] min-h-[80px]"
                    ></textarea>
                    <div className="flex items-center gap-3 mt-3">
                      <input type="checkbox" name="announcement_active" id="announcement_active" defaultChecked={siteSettings?.announcement_active} className="w-4 h-4 accent-[var(--color-gold)] rounded cursor-pointer" />
                      <label htmlFor="announcement_active" className="text-[13px] cursor-pointer select-none text-white">Enable Banner on Homepage</label>
                    </div>
                  </div>

                  {/* Maintenance Toggles */}
                  <div className="p-4 bg-black/40 border border-[var(--color-card-stroke)] rounded-xl">
                    <h3 className="font-space text-[12px] text-[var(--color-gold)] uppercase tracking-wider mb-4">Facility Maintenance Mode</h3>
                    <div className="flex flex-col gap-3">
                      <div className="flex items-center gap-3">
                        <input type="checkbox" name="pitch1_maintenance" id="pitch1_maintenance" defaultChecked={siteSettings?.pitch1_maintenance} className="w-4 h-4 accent-red-500 rounded cursor-pointer" />
                        <label htmlFor="pitch1_maintenance" className="text-[13px] cursor-pointer select-none text-white">Main Pitch Under Maintenance</label>
                      </div>
                      <div className="flex items-center gap-3">
                        <input type="checkbox" name="pickleball_maintenance" id="pickleball_maintenance" defaultChecked={siteSettings?.pickleball_maintenance} className="w-4 h-4 accent-red-500 rounded cursor-pointer" />
                        <label htmlFor="pickleball_maintenance" className="text-[13px] cursor-pointer select-none text-white">Pickleball Court Under Maintenance</label>
                      </div>
                      <div className="flex items-center gap-3">
                        <input type="checkbox" name="boardgames_maintenance" id="boardgames_maintenance" defaultChecked={siteSettings?.boardgames_maintenance} className="w-4 h-4 accent-red-500 rounded cursor-pointer" />
                        <label htmlFor="boardgames_maintenance" className="text-[13px] cursor-pointer select-none text-white">Board Games Shed Under Maintenance</label>
                      </div>
                    </div>
                  </div>

                  <button type="submit" className="bg-[var(--color-gold)]/10 hover:bg-[var(--color-gold)] text-[var(--color-gold-hot)] hover:text-black border border-[var(--color-gold)]/30 font-space text-[12.5px] uppercase tracking-[.1em] py-[14px] rounded-lg transition-all duration-300">
                    Save Site Settings
                  </button>
                </form>
              </div>

              {/* Live Match Card */}
              <div className="bg-[var(--color-card)] border border-[var(--color-card-stroke)] rounded-[16px] p-6 shadow-xl relative overflow-hidden">
                <div className="absolute top-0 right-0 w-[150px] h-[150px] bg-[radial-gradient(circle_at_top_right,rgba(201,162,39,0.1),transparent_70%)] pointer-events-none"></div>
                
                <div className="font-bebas text-[28px] mb-2 flex items-center gap-3">
                  <PremiumIcon name="live" size="md" /> Live Match Center
                </div>
                <p className="text-[var(--color-muted)] text-[13.5px] mb-6">Paste the CricHeroes Iframe code to show it on the homepage.</p>

                <form action={updateLiveMatch} className="flex flex-col gap-4 relative z-10">
                  <div>
                    <label className="block text-[11px] font-space text-[var(--color-gold)] mb-2 uppercase tracking-[.05em]">CricHeroes Iframe Code</label>
                    <textarea name="iframe_url" defaultValue={liveMatch?.iframe_url || ''} className="w-full bg-[#0a0a0a] border border-[var(--color-card-stroke)] rounded-lg p-3 text-[13px] font-mono text-white focus:outline-none focus:border-[var(--color-gold)] min-h-[140px]"></textarea>
                  </div>
                  <div className="flex items-center gap-3 p-3 bg-black/50 border border-[var(--color-card-stroke)] rounded-lg">
                    <input type="checkbox" name="is_active" id="is_active" defaultChecked={liveMatch?.is_active} className="w-5 h-5 accent-[var(--color-gold)] rounded cursor-pointer" />
                    <label htmlFor="is_active" className="text-[14px] cursor-pointer select-none font-medium text-white">Enable Live Match Section</label>
                  </div>
                  <button type="submit" className="mt-2 bg-white/5 hover:bg-[var(--color-gold)] hover:text-black border border-[var(--color-card-stroke)] font-space text-[12.5px] uppercase tracking-[.1em] py-[14px] rounded-lg transition-all">Save & Publish</button>
                </form>
              </div>
            </div>
          </div>
        )}

        {/* CRM TAB */}
        {currentTab === 'crm' && (
          <div className="animate-[fade-in_0.3s_ease-out] h-full flex flex-col">
            <h2 className="font-bebas text-[36px] mb-8 flex items-center gap-4">
              Booking Requests CRM
              <span className="font-space text-[12px] bg-[var(--color-gold)]/20 text-[var(--color-gold-hot)] px-3 py-1 rounded-full">{pendingBookings.length} Pending</span>
            </h2>

            <div className="grid grid-cols-1 md:grid-cols-3 gap-6 flex-1">
              {/* Pending Column */}
              <div className="bg-[rgba(255,255,255,0.02)] border border-white/5 rounded-2xl p-4 flex flex-col gap-4">
                <h3 className="font-space text-[14px] uppercase tracking-wider text-yellow-500 border-b border-white/10 pb-3">Pending Requests</h3>
                {pendingBookings.map(booking => (
                  <div key={booking.id} className="bg-black/40 border border-yellow-500/30 rounded-xl p-4 shadow-lg">
                    <div className="flex justify-between items-start mb-2">
                      <div className="font-space text-[15px] text-white">{booking.name}</div>
                      <div className="text-[10px] bg-yellow-500/20 text-yellow-500 px-2 py-1 rounded">{booking.sport}</div>
                    </div>
                    <div className="text-[12px] text-gray-400 mb-1">📞 {booking.phone}</div>
                    <div className="text-[12px] text-gray-400 mb-4">📅 {booking.booking_date} | ⏰ {booking.time_slot}</div>
                    <div className="flex gap-2">
                      <form action={updateBookingStatus} className="flex-1">
                        <input type="hidden" name="id" value={booking.id} />
                        <input type="hidden" name="status" value="confirmed" />
                        <button type="submit" className="w-full bg-green-500/20 hover:bg-green-500 text-green-400 hover:text-black py-2 rounded text-[11px] font-space uppercase transition-colors">Confirm</button>
                      </form>
                      <form action={updateBookingStatus} className="flex-1">
                        <input type="hidden" name="id" value={booking.id} />
                        <input type="hidden" name="status" value="cancelled" />
                        <button type="submit" className="w-full bg-red-500/20 hover:bg-red-500 text-red-400 hover:text-black py-2 rounded text-[11px] font-space uppercase transition-colors">Cancel</button>
                      </form>
                    </div>
                  </div>
                ))}
                {pendingBookings.length === 0 && <div className="text-[12px] text-gray-500 text-center py-10">No pending bookings.</div>}
              </div>

              {/* Confirmed Column */}
              <div className="bg-[rgba(255,255,255,0.02)] border border-white/5 rounded-2xl p-4 flex flex-col gap-4">
                <h3 className="font-space text-[14px] uppercase tracking-wider text-green-500 border-b border-white/10 pb-3">Confirmed</h3>
                {confirmedBookings.map(booking => (
                  <div key={booking.id} className="bg-black/40 border border-green-500/20 rounded-xl p-4 opacity-75 hover:opacity-100 transition-opacity">
                    <div className="font-space text-[15px] text-white mb-1">{booking.name}</div>
                    <div className="text-[11px] text-gray-400">📅 {booking.booking_date} | {booking.sport}</div>
                    <form action={updateBookingStatus} className="mt-3">
                      <input type="hidden" name="id" value={booking.id} />
                      <input type="hidden" name="status" value="cancelled" />
                      <button type="submit" className="text-[10px] text-red-500/50 hover:text-red-500 uppercase font-space">Revoke to Cancelled</button>
                    </form>
                  </div>
                ))}
              </div>

              {/* Cancelled Column */}
              <div className="bg-[rgba(255,255,255,0.02)] border border-white/5 rounded-2xl p-4 flex flex-col gap-4">
                <h3 className="font-space text-[14px] uppercase tracking-wider text-red-500 border-b border-white/10 pb-3">Cancelled</h3>
                {cancelledBookings.map(booking => (
                  <div key={booking.id} className="bg-black/40 border border-red-500/20 rounded-xl p-4 opacity-50">
                    <div className="font-space text-[13px] text-gray-400 mb-1 line-through">{booking.name}</div>
                    <div className="text-[11px] text-gray-600">📅 {booking.booking_date} | {booking.sport}</div>
                  </div>
                ))}
              </div>
            </div>
          </div>
        )}

        {/* CONTENT MANAGER TAB */}
        {currentTab === 'content' && (
          <div className="animate-[fade-in_0.3s_ease-out] flex flex-col gap-12">
            <div>
              <h2 className="font-bebas text-[36px] mb-8">Gallery (Team Extreme)</h2>
              <div className="bg-[var(--color-card)] border border-[var(--color-card-stroke)] rounded-[16px] p-6 shadow-xl mb-8">
                <form action={uploadGalleryImage} className="flex flex-col gap-4">
                  <div className="grid grid-cols-1 sm:grid-cols-3 gap-4">
                    <div>
                      <label className="block text-[11px] font-space text-[var(--color-gold)] mb-2 uppercase tracking-[.05em]">Select Image(s)</label>
                      <input required multiple type="file" name="image" accept="image/*" className="w-full bg-[#0a0a0a] border border-[var(--color-card-stroke)] rounded-lg p-[9px] text-[13px] text-[var(--color-muted)] file:bg-[var(--color-gold)] file:text-black hover:file:bg-white cursor-pointer" />
                    </div>
                    <div>
                      <label className="block text-[11px] font-space text-[var(--color-gold)] mb-2 uppercase tracking-[.05em]">Subtitle</label>
                      <input type="text" name="subtitle" placeholder="e.g. Final match winning moment!" className="w-full bg-[#0a0a0a] border border-[var(--color-card-stroke)] rounded-lg p-3 text-[13px] text-white focus:outline-none focus:border-[var(--color-gold)]" />
                    </div>
                    <div>
                      <label className="block text-[11px] font-space text-[var(--color-gold)] mb-2 uppercase tracking-[.05em]">Event Date</label>
                      <input required type="date" name="event_date" className="w-full bg-[#0a0a0a] border border-[var(--color-card-stroke)] rounded-lg p-3 text-[13px] text-white focus:outline-none focus:border-[var(--color-gold)]" />
                    </div>
                  </div>
                  <button type="submit" className="bg-white/5 hover:bg-[var(--color-gold)] hover:text-black border border-[var(--color-card-stroke)] text-white font-space text-[12.5px] uppercase tracking-[.1em] py-[14px] rounded-lg transition-all">Upload to Gallery</button>
                </form>
              </div>

              <div className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 lg:grid-cols-5 gap-4">
                {gallery.map((img) => (
                  <div key={img.id} className="relative group rounded-xl overflow-hidden aspect-square border border-[var(--color-card-stroke)]">
                    <Image src={img.image_url} alt="Gallery image" fill className="object-cover" />
                    <div className="absolute inset-0 bg-black/80 opacity-0 group-hover:opacity-100 transition-opacity flex flex-col justify-center items-center p-4 text-center">
                      <p className="text-white text-[11px] mb-3 line-clamp-2">{img.subtitle}</p>
                      <form action={deleteGalleryImage}>
                        <input type="hidden" name="id" value={img.id} />
                        <input type="hidden" name="filename" value={img.image_url.split('/').pop()} />
                        <button type="submit" className="bg-red-600 hover:bg-red-500 text-white text-[10px] px-3 py-1.5 rounded uppercase font-bold tracking-wider">Delete</button>
                      </form>
                    </div>
                  </div>
                ))}
              </div>
            </div>

            {/* Other content sections like Hall of Fame and Highlights can be added below similarly */}
          </div>
        )}
      </div>
    </div>
  )
}
