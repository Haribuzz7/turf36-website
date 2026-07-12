import { createClient } from '@/utils/supabase/server'
import { updateLiveMatch, addEvent, deleteEvent, addHighlight, deleteHighlight, uploadGalleryImage, deleteGalleryImage, addHallOfFame, deleteHallOfFame } from './actions'
import PremiumIcon from '@/components/PremiumIcon'

export default async function AdminDashboard() {
  const supabase = await createClient()
  
  // Fetch the current live match state
  const { data: liveMatch } = await supabase.from('live_match').select('*').single()

  // Fetch all events
  const { data: events } = await supabase.from('events').select('*').order('event_date', { ascending: true })

  // Fetch all highlights
  const { data: highlights } = await supabase.from('highlights').select('*').order('created_at', { ascending: false })

  // Fetch Hall of Fame
  const { data: hallOfFame } = await supabase.from('hall_of_fame').select('*').order('order_index', { ascending: true })

  // Fetch Gallery Images
  const { data: galleryFiles } = await supabase.from('gallery').select('*').order('created_at', { ascending: false });
  const gallery = galleryFiles || [];

  return (
    <div>
      <h1 className="font-bebas text-[36px] mb-8">Dashboard Overview</h1>
      
      <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
        {/* Live Match Card */}
        <div className="bg-[var(--color-card)] border border-[var(--color-card-stroke)] rounded-[16px] p-6 shadow-xl relative overflow-hidden">
          <div className="absolute top-0 right-0 w-[150px] h-[150px] bg-[radial-gradient(circle_at_top_right,rgba(201,162,39,0.1),transparent_70%)] pointer-events-none"></div>
          
          <div className="font-bebas text-[28px] mb-2 flex items-center gap-3">
            <PremiumIcon name="cricket" size="md" /> 
            Live Match Center
          </div>
          <p className="text-[var(--color-muted)] text-[13.5px] mb-6 leading-relaxed">
            Paste the CricHeroes Iframe code or public URL to show it on the homepage. When a match ends, simply uncheck the box to hide the section.
          </p>

          <form action={updateLiveMatch} className="flex flex-col gap-4 relative z-10">
            <div>
              <label className="block text-[11px] font-space text-[var(--color-gold)] mb-2 uppercase tracking-[.05em]">CricHeroes Iframe Code</label>
              <textarea 
                name="iframe_url"
                defaultValue={liveMatch?.iframe_url || ''}
                className="w-full bg-[#0a0a0a] border border-[var(--color-card-stroke)] rounded-lg p-3 text-[13px] font-mono text-white focus:outline-none focus:border-[var(--color-gold)] min-h-[140px] transition-colors"
                placeholder='<iframe src="https://cricheroes.in/scorecard/..." width="100%" height="500" frameborder="0"></iframe>'
              ></textarea>
            </div>
            
            <div className="flex items-center gap-3 p-3 bg-black/50 border border-[var(--color-card-stroke)] rounded-lg">
              <input 
                type="checkbox" 
                name="is_active" 
                id="is_active"
                defaultChecked={liveMatch?.is_active}
                className="w-5 h-5 accent-[var(--color-gold)] rounded cursor-pointer"
              />
              <label htmlFor="is_active" className="text-[14px] cursor-pointer select-none font-medium text-white">
                Enable Live Match Section on Homepage
              </label>
            </div>

            <button 
              type="submit" 
              className="mt-2 bg-white/5 hover:bg-[var(--color-gold)] hover:text-black border border-[var(--color-card-stroke)] hover:border-transparent text-white font-space text-[12.5px] uppercase tracking-[.1em] py-[14px] rounded-lg transition-all duration-300"
            >
              Save & Publish to Live Site
            </button>
          </form>
        </div>
        
        {/* Match Memory */}
        <div className="flex flex-col gap-5">
          <div className="bg-[var(--color-card)] border border-[var(--color-card-stroke)] rounded-[16px] p-6 shadow-xl">
            <div className="font-bebas text-[28px] mb-2 flex items-center gap-3">
              <PremiumIcon name="camera" size="md" /> 
              Match Memory
            </div>
            <p className="text-[var(--color-muted)] text-[13.5px] mb-6 leading-relaxed">
              Upload photos directly to your turf's Match Memory section. Images will appear instantly on the homepage.
            </p>

            <form action={uploadGalleryImage} className="flex flex-col gap-4 mb-8">
              <div className="grid grid-cols-1 sm:grid-cols-3 gap-4">
                <div>
                  <label className="block text-[11px] font-space text-[var(--color-gold)] mb-2 uppercase tracking-[.05em]">Select Image(s)</label>
                  <input required multiple type="file" name="image" accept="image/*" className="w-full bg-[#0a0a0a] border border-[var(--color-card-stroke)] rounded-lg p-[9px] text-[13px] text-[var(--color-muted)] file:mr-4 file:py-[2px] file:px-3 file:rounded file:border-0 file:text-[11px] file:font-space file:bg-[var(--color-gold)] file:text-black hover:file:bg-white cursor-pointer" />
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

              <button type="submit" className="mt-2 bg-white/5 hover:bg-[var(--color-gold)] hover:text-black border border-[var(--color-card-stroke)] hover:border-transparent text-white font-space text-[12.5px] uppercase tracking-[.1em] py-[14px] rounded-lg transition-all duration-300">
                Upload Photo(s)
              </button>
            </form>

            <div className="space-y-3">
              <h3 className="font-space text-[11px] text-[var(--color-gold)] uppercase tracking-[.05em] mb-3">Live Match Memory</h3>
              <div className="grid grid-cols-2 gap-3">
                {gallery.length > 0 ? gallery.map((img: any) => (
                  <div key={img.id} className="relative group rounded-lg overflow-hidden border border-[var(--color-card-stroke)]">
                    <img src={img.image_url} alt="Gallery" className="w-full aspect-[16/9] object-cover" />
                    <div className="absolute top-2 left-2 bg-black/60 backdrop-blur-md px-2 py-1 rounded text-[10px] text-[var(--color-gold)] font-space uppercase tracking-wider">
                      {new Date(img.event_date).toLocaleDateString('en-US', { month: 'short', day: 'numeric', year: 'numeric' })}
                    </div>
                    <div className="absolute inset-0 bg-black/60 opacity-0 group-hover:opacity-100 transition-opacity flex items-center justify-center">
                      <form action={deleteGalleryImage}>
                        <input type="hidden" name="id" value={img.id} />
                        <input type="hidden" name="filename" value={img.file_name} />
                        <button type="submit" className="text-white text-[11px] font-space uppercase tracking-widest px-3 py-2 bg-red-600 rounded hover:bg-red-500 transition-colors shadow-lg">Delete</button>
                      </form>
                    </div>
                  </div>
                )) : (
                  <p className="text-[12px] text-[var(--color-muted)] p-3 bg-black/30 rounded border border-[var(--color-card-stroke)] col-span-2">No photos uploaded yet.</p>
                )}
              </div>
            </div>
          </div>

          {/* Hall of Fame Manager */}
          <div className="bg-[var(--color-card)] border border-[var(--color-card-stroke)] rounded-[16px] p-6 shadow-xl">
            <div className="font-bebas text-[28px] mb-2 flex items-center gap-3">
              <PremiumIcon name="trophy" size="md" /> 
              Tournament Winners (Hall of Fame)
            </div>
            <p className="text-[var(--color-muted)] text-[13.5px] mb-6 leading-relaxed">
              Add past tournament winners and champions to the Hall of Fame section.
            </p>

            <form action={addHallOfFame} className="flex flex-col gap-4 mb-8">
              <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                <div>
                  <label className="block text-[11px] font-space text-[var(--color-gold)] mb-2 uppercase tracking-[.05em]">Team Name</label>
                  <input required type="text" name="name" className="w-full bg-[#0a0a0a] border border-[var(--color-card-stroke)] rounded-lg p-3 text-[13px] text-white focus:outline-none focus:border-[var(--color-gold)]" placeholder="e.g. Spartans FC" />
                </div>
                <div>
                  <label className="block text-[11px] font-space text-[var(--color-gold)] mb-2 uppercase tracking-[.05em]">Tournament Name</label>
                  <input required type="text" name="role" className="w-full bg-[#0a0a0a] border border-[var(--color-card-stroke)] rounded-lg p-3 text-[13px] text-white focus:outline-none focus:border-[var(--color-gold)]" placeholder="e.g. TSL Summer Cup 2024" />
                </div>
              </div>
              
              <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                <div>
                  <label className="block text-[11px] font-space text-[var(--color-gold)] mb-2 uppercase tracking-[.05em]">Status / Extra Info</label>
                  <input type="text" name="metadata" className="w-full bg-[#0a0a0a] border border-[var(--color-card-stroke)] rounded-lg p-3 text-[13px] text-white focus:outline-none focus:border-[var(--color-gold)]" placeholder="e.g. Champions" defaultValue="Champions" />
                </div>
                <div>
                  <label className="block text-[11px] font-space text-[var(--color-gold)] mb-2 uppercase tracking-[.05em]">Team Logo / Photo (Optional)</label>
                  <input type="file" name="image" accept="image/*" className="w-full bg-[#0a0a0a] border border-[var(--color-card-stroke)] rounded-lg p-[9px] text-[13px] text-[var(--color-muted)] file:mr-4 file:py-[2px] file:px-3 file:rounded file:border-0 file:text-[11px] file:font-space file:bg-[var(--color-gold)] file:text-black hover:file:bg-white cursor-pointer" />
                </div>
              </div>

              <button type="submit" className="mt-2 bg-white/5 hover:bg-[var(--color-gold)] hover:text-black border border-[var(--color-card-stroke)] hover:border-transparent text-white font-space text-[12.5px] uppercase tracking-[.1em] py-[14px] rounded-lg transition-all duration-300">
                Add to Hall of Fame
              </button>
            </form>

            <div className="space-y-3">
              <h3 className="font-space text-[11px] text-[var(--color-gold)] uppercase tracking-[.05em] mb-3">Current Winners</h3>
              {hallOfFame && hallOfFame.length > 0 ? hallOfFame.map((item: any) => (
                <div key={item.id} className="flex flex-col sm:flex-row sm:items-center justify-between p-3 bg-black/50 border border-[var(--color-card-stroke)] rounded-lg gap-3">
                  <div className="flex items-center gap-3">
                    {item.image_url ? (
                      <img src={item.image_url} className="w-12 h-12 object-cover rounded-full bg-[#111] border border-[var(--color-card-stroke)]" alt="logo" />
                    ) : (
                      <div className="w-12 h-12 rounded-full bg-[#111] border border-[var(--color-card-stroke)] flex items-center justify-center font-bebas text-[20px] text-[var(--color-gold)]">{item.name.charAt(0)}</div>
                    )}
                    <div>
                      <h4 className="text-white text-[14px] font-bold">{item.name} <span className="text-[11px] text-[var(--color-gold)] font-normal ml-2">{item.metadata}</span></h4>
                      <p className="text-[var(--color-muted)] text-[12px]">{item.role}</p>
                    </div>
                  </div>
                  <form action={deleteHallOfFame}>
                    <input type="hidden" name="id" value={item.id} />
                    <button type="submit" className="text-red-400 hover:text-red-300 text-[12px] font-space uppercase tracking-widest px-3 py-2 bg-red-500/10 rounded transition-colors w-full sm:w-auto">Delete</button>
                  </form>
                </div>
              )) : (
                <p className="text-[12px] text-[var(--color-muted)] p-3 bg-black/30 rounded border border-[var(--color-card-stroke)]">No tournament winners added yet.</p>
              )}
            </div>
          </div>
          
          {/* Events Manager */}
          <div className="bg-[var(--color-card)] border border-[var(--color-card-stroke)] rounded-[16px] p-6 shadow-xl">
            <div className="font-bebas text-[28px] mb-2 flex items-center gap-3">
              <PremiumIcon name="calendar" size="md" /> 
              Events Manager
            </div>
            <p className="text-[var(--color-muted)] text-[13.5px] mb-6 leading-relaxed">
              Add upcoming tournaments to automatically update the countdown timer on the homepage.
            </p>

            <form action={addEvent} className="flex flex-col gap-4 mb-8">
              <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                <div>
                  <label className="block text-[11px] font-space text-[var(--color-gold)] mb-2 uppercase tracking-[.05em]">Event Title</label>
                  <input required type="text" name="title" className="w-full bg-[#0a0a0a] border border-[var(--color-card-stroke)] rounded-lg p-3 text-[13px] text-white focus:outline-none focus:border-[var(--color-gold)]" placeholder="e.g. Summer Cup 2024" />
                </div>
                <div>
                  <label className="block text-[11px] font-space text-[var(--color-gold)] mb-2 uppercase tracking-[.05em]">Subtitle / Info</label>
                  <input required type="text" name="subtitle" className="w-full bg-[#0a0a0a] border border-[var(--color-card-stroke)] rounded-lg p-3 text-[13px] text-white focus:outline-none focus:border-[var(--color-gold)]" placeholder="e.g. 5v5 Box Cricket Tournament" />
                </div>
              </div>
              
              <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                <div>
                  <label className="block text-[11px] font-space text-[var(--color-gold)] mb-2 uppercase tracking-[.05em]">Event Date</label>
                  <input required type="date" name="event_date" className="w-full bg-[#0a0a0a] border border-[var(--color-card-stroke)] rounded-lg p-3 text-[13px] text-white focus:outline-none focus:border-[var(--color-gold)]" />
                </div>
                <div>
                  <label className="block text-[11px] font-space text-[var(--color-gold)] mb-2 uppercase tracking-[.05em]">Poster Image (Optional)</label>
                  <input type="file" name="poster" accept="image/*" className="w-full bg-[#0a0a0a] border border-[var(--color-card-stroke)] rounded-lg p-[9px] text-[13px] text-[var(--color-muted)] file:mr-4 file:py-[2px] file:px-3 file:rounded file:border-0 file:text-[11px] file:font-space file:bg-[var(--color-gold)] file:text-black hover:file:bg-white cursor-pointer" />
                </div>
              </div>

              <button type="submit" className="mt-2 bg-white/5 hover:bg-[var(--color-gold)] hover:text-black border border-[var(--color-card-stroke)] hover:border-transparent text-white font-space text-[12.5px] uppercase tracking-[.1em] py-[14px] rounded-lg transition-all duration-300">
                Add Event
              </button>
            </form>

            {/* Event List */}
            <div className="space-y-3">
              <h3 className="font-space text-[11px] text-[var(--color-gold)] uppercase tracking-[.05em] mb-3">Scheduled Events</h3>
              {events && events.length > 0 ? events.map((evt: any) => (
                <div key={evt.id} className="flex flex-col sm:flex-row sm:items-center justify-between p-3 bg-black/50 border border-[var(--color-card-stroke)] rounded-lg gap-3">
                  <div className="flex items-center gap-3">
                    {evt.poster_url ? (
                      <img src={evt.poster_url} className="w-12 h-12 object-cover rounded bg-[#111] border border-[var(--color-card-stroke)]" alt="poster" />
                    ) : (
                      <PremiumIcon name="calendar" size="sm" containerClassName="!rounded" />
                    )}
                    <div>
                      <h4 className="text-white text-[14px] font-bold">{evt.title}</h4>
                      <p className="text-[var(--color-muted)] text-[12px]">{new Date(evt.event_date).toLocaleDateString()} · {evt.subtitle}</p>
                    </div>
                  </div>
                  <form action={deleteEvent}>
                    <input type="hidden" name="id" value={evt.id} />
                    <button type="submit" className="text-red-400 hover:text-red-300 text-[12px] font-space uppercase tracking-widest px-3 py-2 bg-red-500/10 rounded transition-colors w-full sm:w-auto">Delete</button>
                  </form>
                </div>
              )) : (
                <p className="text-[12px] text-[var(--color-muted)] p-3 bg-black/30 rounded border border-[var(--color-card-stroke)]">No events scheduled. Add one above!</p>
              )}
            </div>
          </div>

          {/* Highlights Manager */}
          <div className="bg-[var(--color-card)] border border-[var(--color-card-stroke)] rounded-[16px] p-6 shadow-xl">
            <div className="font-bebas text-[28px] mb-2 flex items-center gap-3">
              <PremiumIcon name="play" size="md" /> 
              Highlights Manager
            </div>
            <p className="text-[var(--color-muted)] text-[13.5px] mb-6 leading-relaxed">
              Add Instagram Reels or YouTube video links to show on the homepage.
            </p>

            <form action={addHighlight} className="flex flex-col gap-4 mb-8">
              <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                <div>
                  <label className="block text-[11px] font-space text-[var(--color-gold)] mb-2 uppercase tracking-[.05em]">Video Title</label>
                  <input required type="text" name="title" className="w-full bg-[#0a0a0a] border border-[var(--color-card-stroke)] rounded-lg p-3 text-[13px] text-white focus:outline-none focus:border-[var(--color-gold)]" placeholder="e.g. Last-over six to win it" />
                </div>
                <div>
                  <label className="block text-[11px] font-space text-[var(--color-gold)] mb-2 uppercase tracking-[.05em]">Subtitle</label>
                  <input required type="text" name="subtitle" className="w-full bg-[#0a0a0a] border border-[var(--color-card-stroke)] rounded-lg p-3 text-[13px] text-white focus:outline-none focus:border-[var(--color-gold)]" placeholder="e.g. TSL SP · 0:42" />
                </div>
              </div>
              
              <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                <div>
                  <label className="block text-[11px] font-space text-[var(--color-gold)] mb-2 uppercase tracking-[.05em]">Video URL (IG/YouTube)</label>
                  <input required type="url" name="video_url" className="w-full bg-[#0a0a0a] border border-[var(--color-card-stroke)] rounded-lg p-3 text-[13px] text-white focus:outline-none focus:border-[var(--color-gold)]" placeholder="https://instagram.com/reel/..." />
                </div>
                <div>
                  <label className="block text-[11px] font-space text-[var(--color-gold)] mb-2 uppercase tracking-[.05em]">Thumbnail (Optional)</label>
                  <input type="file" name="thumbnail" accept="image/*" className="w-full bg-[#0a0a0a] border border-[var(--color-card-stroke)] rounded-lg p-[9px] text-[13px] text-[var(--color-muted)] file:mr-4 file:py-[2px] file:px-3 file:rounded file:border-0 file:text-[11px] file:font-space file:bg-[var(--color-gold)] file:text-black hover:file:bg-white cursor-pointer" />
                </div>
              </div>

              <button type="submit" className="mt-2 bg-white/5 hover:bg-[var(--color-gold)] hover:text-black border border-[var(--color-card-stroke)] hover:border-transparent text-white font-space text-[12.5px] uppercase tracking-[.1em] py-[14px] rounded-lg transition-all duration-300">
                Add Highlight
              </button>
            </form>

            <div className="space-y-3">
              <h3 className="font-space text-[11px] text-[var(--color-gold)] uppercase tracking-[.05em] mb-3">Active Highlights</h3>
              {highlights && highlights.length > 0 ? highlights.map((hl: any) => (
                <div key={hl.id} className="flex flex-col sm:flex-row sm:items-center justify-between p-3 bg-black/50 border border-[var(--color-card-stroke)] rounded-lg gap-3">
                  <div className="flex items-center gap-3">
                    {hl.thumbnail_url ? (
                      <img src={hl.thumbnail_url} className="w-12 h-12 object-cover rounded bg-[#111] border border-[var(--color-card-stroke)]" alt="thumbnail" />
                    ) : (
                      <div className="w-12 h-12 rounded bg-[#111] border border-[var(--color-card-stroke)] flex items-center justify-center text-[12px]">▶️</div>
                    )}
                    <div>
                      <h4 className="text-white text-[14px] font-bold">{hl.title}</h4>
                      <p className="text-[var(--color-muted)] text-[12px]">{hl.subtitle}</p>
                    </div>
                  </div>
                  <form action={deleteHighlight}>
                    <input type="hidden" name="id" value={hl.id} />
                    <button type="submit" className="text-red-400 hover:text-red-300 text-[12px] font-space uppercase tracking-widest px-3 py-2 bg-red-500/10 rounded transition-colors w-full sm:w-auto">Delete</button>
                  </form>
                </div>
              )) : (
                <p className="text-[12px] text-[var(--color-muted)] p-3 bg-black/30 rounded border border-[var(--color-card-stroke)]">No highlights added yet.</p>
              )}
            </div>
          </div>
        </div>
      </div>
    </div>
  )
}
