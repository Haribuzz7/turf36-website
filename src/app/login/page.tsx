import { login } from './actions'

export default async function LoginPage({ searchParams }: { searchParams: Promise<{ error: string }> }) {
  const { error } = await searchParams;
  
  return (
    <div className="min-h-screen bg-[var(--color-bg)] flex items-center justify-center p-6">
      <div className="w-full max-w-md p-8 bg-[var(--color-card)] border border-[var(--color-card-stroke)] rounded-[16px] shadow-2xl relative before:content-[''] before:absolute before:inset-0 before:bg-[radial-gradient(circle_at_50%_0%,rgba(201,162,39,0.1),transparent_70%)] before:pointer-events-none">
        <h1 className="font-bebas text-[36px] text-center mb-1 tracking-[.02em]">Admin Login</h1>
        <p className="text-[var(--color-muted)] text-center text-[12px] mb-8 font-space tracking-[.1em] uppercase">Turf 36 Control Panel</p>
        
        {error && (
          <div className="p-3 mb-6 bg-red-500/10 border border-red-500/30 rounded text-red-500 text-sm text-center">
            {error}
          </div>
        )}

        <form action={login} className="flex flex-col gap-4 relative z-10">
          <div>
            <label className="block text-[11px] font-space text-[var(--color-gold)] mb-2 tracking-[.1em] uppercase">Admin ID (Email)</label>
            <input 
              id="email" 
              name="email" 
              type="email" 
              required 
              className="w-full bg-[#0a0a0a] border border-[var(--color-card-stroke)] rounded-lg p-3 text-white text-[14px] focus:outline-none focus:border-[var(--color-gold)] transition-colors"
              placeholder="admin@turf36.com"
            />
          </div>
          <div className="mb-4">
            <label className="block text-[11px] font-space text-[var(--color-gold)] mb-2 tracking-[.1em] uppercase">Password</label>
            <input 
              id="password" 
              name="password" 
              type="password" 
              required 
              className="w-full bg-[#0a0a0a] border border-[var(--color-card-stroke)] rounded-lg p-3 text-white text-[14px] focus:outline-none focus:border-[var(--color-gold)] transition-colors"
              placeholder="••••••••"
            />
          </div>
          <button 
            type="submit" 
            className="w-full bg-[var(--color-gold)] text-black font-bebas text-[20px] tracking-[.02em] p-[12px] rounded-lg hover:bg-[var(--color-gold-hot)] transition-colors"
          >
            Enter Dashboard
          </button>
        </form>
      </div>
    </div>
  )
}
