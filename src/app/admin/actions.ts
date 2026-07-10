'use server'

import { createClient } from '@/utils/supabase/server'
import { revalidatePath } from 'next/cache'

export async function updateLiveMatch(formData: FormData) {
  const supabase = await createClient()
  
  const iframe_url = formData.get('iframe_url') as string
  const is_active = formData.get('is_active') === 'on'

  const { error } = await supabase
    .from('live_match')
    .update({ iframe_url, is_active, updated_at: new Date().toISOString() })
    .eq('id', 1)

  if (error) {
    console.error("Error updating live match:", error)
    return { error: error.message }
  }

  // Revalidate the homepage so the new iframe shows up instantly for all visitors
  revalidatePath('/')
  return { success: true }
}
