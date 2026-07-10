import { createClient } from '@/utils/supabase/server'
import { updateLiveMatch } from './actions'

export default async function AdminDashboard() {
  const supabase = await createClient()
  
  // Fetch the current live match state
  const { data: liveMatch } = await supabase.from('live_match').select('*').single()

  return (
    <div>
      <h1 className="font-bebas text-[36px] mb-8">Dashboard Overview</h1>
      
      <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
        {/* Live Match Card */}
        <div className="bg-[var(--color-card)] border border-[var(--color-card-stroke)] rounded-[16px] p-6 shadow-xl relative overflow-hidden">
          <div className="absolute top-0 right-0 w-[150px] h-[150px] bg-[radial-gradient(circle_at_top_right,rgba(201,162,39,0.1),transparent_70%)] pointer-events-none"></div>
          
          <div className="font-bebas text-[28px] mb-2 flex items-center gap-3">
            <span className="w-3 h-3 rounded-full bg-red-500 animate-pulse"></span> 
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
        
        {/* Placeholder Cards */}
        <div className="flex flex-col gap-5">
          <div className="bg-[var(--color-card)] border border-[var(--color-card-stroke)] rounded-[16px] p-6 opacity-60 grayscale hover:grayscale-0 transition-all duration-300">
            <div className="font-bebas text-[24px] mb-2 flex items-center gap-2">📸 Gallery Manager <span className="text-[10px] bg-white/10 px-2 py-1 rounded font-space tracking-wider ml-auto">SOON</span></div>
            <p className="text-[var(--color-muted)] text-[13px]">Upload and delete photos directly from your phone. Database & Storage are already configured.</p>
          </div>
          <div className="bg-[var(--color-card)] border border-[var(--color-card-stroke)] rounded-[16px] p-6 opacity-60 grayscale hover:grayscale-0 transition-all duration-300">
            <div className="font-bebas text-[24px] mb-2 flex items-center gap-2">🏆 Hall of Fame <span className="text-[10px] bg-white/10 px-2 py-1 rounded font-space tracking-wider ml-auto">SOON</span></div>
            <p className="text-[var(--color-muted)] text-[13px]">Add MVPs, best bowlers, and champions dynamically. Database table is already configured.</p>
          </div>
          <div className="bg-[var(--color-card)] border border-[var(--color-card-stroke)] rounded-[16px] p-6 opacity-60 grayscale hover:grayscale-0 transition-all duration-300">
            <div className="font-bebas text-[24px] mb-2 flex items-center gap-2">📅 Events Manager <span className="text-[10px] bg-white/10 px-2 py-1 rounded font-space tracking-wider ml-auto">SOON</span></div>
            <p className="text-[var(--color-muted)] text-[13px]">Schedule tournaments to automatically update the homepage countdown.</p>
          </div>
        </div>
      </div>
    </div>
  )
}
