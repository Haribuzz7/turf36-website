import { createClient } from '@/utils/supabase/server'
import { redirect } from 'next/navigation'
import { logout } from '@/app/login/actions'
import Link from 'next/link'

export default async function AdminLayout({ children }: { children: React.ReactNode }) {
  const supabase = await createClient()

  const { data: { user }, error } = await supabase.auth.getUser()
  
  if (error || !user) {
    redirect('/login')
  }

  return (
    <div className="min-h-screen bg-[var(--color-bg)] text-[var(--color-white)]">
      <header className="border-b border-[var(--color-line)] bg-[var(--color-card)] p-4 flex justify-between items-center sticky top-0 z-50 backdrop-blur-md">
        <div className="flex items-center gap-6">
          <Link href="/admin" className="font-bebas text-[24px] tracking-[.02em]">TURF<span className="text-[var(--color-gold-hot)]">36</span> ADMIN</Link>
          <Link href="/" target="_blank" className="text-[12px] text-[var(--color-muted)] hover:text-white transition-colors">View Live Site ↗</Link>
        </div>
        <div className="flex items-center gap-4">
          <span className="text-[12px] text-[var(--color-muted)] font-space hidden sm:inline-block">{user.email}</span>
          <form action={logout}>
            <button className="text-[11px] font-space border border-[var(--color-card-stroke)] px-4 py-2 rounded hover:bg-white/5 transition-colors uppercase tracking-[.05em]">Logout</button>
          </form>
        </div>
      </header>
      <main className="p-4 sm:p-8 max-w-[1200px] mx-auto">
        {children}
      </main>
    </div>
  )
}
