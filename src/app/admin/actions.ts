'use server'

import { createClient } from '@/utils/supabase/server'
import { revalidatePath } from 'next/cache'

export async function updateLiveMatch(formData: FormData): Promise<void> {
  const supabase = await createClient()
  
  const iframe_url = formData.get('iframe_url') as string
  const is_active = formData.get('is_active') === 'on'

  const { error } = await supabase
    .from('live_match')
    .update({ iframe_url, is_active, updated_at: new Date().toISOString() })
    .eq('id', 1)

  if (error) {
    console.error("Error updating live match:", error)
    throw new Error(error.message)
  }

  // Revalidate the homepage so the new iframe shows up instantly for all visitors
  revalidatePath('/')
}

export async function addEvent(formData: FormData): Promise<void> {
  const supabase = await createClient()
  
  const title = formData.get('title') as string
  const subtitle = formData.get('subtitle') as string
  const event_date = formData.get('event_date') as string
  const poster = formData.get('poster') as File | null
  
  let poster_url = null
  
  if (poster && poster.size > 0) {
    const fileExt = poster.name.split('.').pop()
    const fileName = `${Date.now()}.${fileExt}`
    
    const { data, error: uploadError } = await supabase.storage
      .from('gallery')
      .upload(`posters/${fileName}`, poster)
      
    if (uploadError) {
      console.error("Error uploading poster:", uploadError)
      throw new Error(uploadError.message)
    }
    
    const { data: publicUrlData } = supabase.storage
      .from('gallery')
      .getPublicUrl(`posters/${fileName}`)
      
    poster_url = publicUrlData.publicUrl
  }

  const { error } = await supabase
    .from('events')
    .insert([{ title, subtitle, event_date, poster_url }])

  if (error) {
    console.error("Error adding event:", error)
    throw new Error(error.message)
  }

  revalidatePath('/')
  revalidatePath('/admin')
}

export async function deleteEvent(formData: FormData): Promise<void> {
  const supabase = await createClient()
  const id = formData.get('id') as string
  
  const { error } = await supabase
    .from('events')
    .delete()
    .eq('id', id)

  if (error) {
    console.error("Error deleting event:", error)
    throw new Error(error.message)
  }

  revalidatePath('/')
  revalidatePath('/admin')
}
