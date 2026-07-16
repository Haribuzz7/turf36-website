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
    
    const { error: uploadError } = await supabase.storage
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

export async function addHighlight(formData: FormData): Promise<void> {
  const supabase = await createClient()
  
  const title = formData.get('title') as string
  const subtitle = formData.get('subtitle') as string
  const video_url = formData.get('video_url') as string
  const thumbnail = formData.get('thumbnail') as File | null
  
  let thumbnail_url = null
  
  if (thumbnail && thumbnail.size > 0) {
    const fileExt = thumbnail.name.split('.').pop()
    const fileName = `${Date.now()}_thumb.${fileExt}`
    
    const { error: uploadError } = await supabase.storage
      .from('gallery')
      .upload(`highlights/${fileName}`, thumbnail)
      
    if (uploadError) {
      console.error("Error uploading thumbnail:", uploadError)
      throw new Error(uploadError.message)
    }
    
    const { data: publicUrlData } = supabase.storage
      .from('gallery')
      .getPublicUrl(`highlights/${fileName}`)
      
    thumbnail_url = publicUrlData.publicUrl
  }

  const { error } = await supabase
    .from('highlights')
    .insert([{ title, subtitle, video_url, thumbnail_url }])

  if (error) {
    console.error("Error adding highlight:", error)
    throw new Error(error.message)
  }

  revalidatePath('/')
  revalidatePath('/admin')
}

export async function deleteHighlight(formData: FormData): Promise<void> {
  const supabase = await createClient()
  const id = formData.get('id') as string
  
  const { error } = await supabase
    .from('highlights')
    .delete()
    .eq('id', id)

  if (error) {
    console.error("Error deleting highlight:", error)
    throw new Error(error.message)
  }

  revalidatePath('/')
  revalidatePath('/admin')
}

export async function uploadGalleryImage(formData: FormData): Promise<void> {
  const supabase = await createClient()
  const images = formData.getAll('image') as File[]
  const event_date = formData.get('event_date') as string
  const subtitle = formData.get('subtitle') as string || ''
  
  const validImages = images.filter(img => img.size > 0)
  if (validImages.length === 0) {
    throw new Error("No images provided")
  }
  
  for (const image of validImages) {
    const fileExt = image.name.split('.').pop()
    const fileName = `${Date.now()}_${Math.random().toString(36).substring(2,9)}_gallery.${fileExt}`
    
    const { error: uploadError } = await supabase.storage
      .from('gallery')
      .upload(fileName, image)
      
    if (uploadError) {
      console.error("Error uploading gallery image:", uploadError)
      continue
    }

    const { data: publicUrlData } = supabase.storage
      .from('gallery')
      .getPublicUrl(fileName)
      
    const image_url = publicUrlData.publicUrl

    const { error: dbError } = await supabase
      .from('gallery')
      .insert([{ image_url, file_name: fileName, event_date, subtitle }])

    if (dbError) {
      console.error("Error saving gallery metadata:", dbError)
    }
  }

  revalidatePath('/')
  revalidatePath('/admin')
}

export async function deleteGalleryImage(formData: FormData): Promise<void> {
  const supabase = await createClient()
  const filename = formData.get('filename') as string
  const id = formData.get('id') as string
  
  if (!filename) {
    throw new Error("No filename provided")
  }
  
  const { error } = await supabase.storage
    .from('gallery')
    .remove([filename])

  if (error) {
    console.error("Error deleting gallery image from storage:", error)
  }

  if (id) {
    const { error: dbError } = await supabase
      .from('gallery')
      .delete()
      .eq('id', id)
      
    if (dbError) {
      console.error("Error deleting gallery metadata from DB:", dbError)
    }
  }

  revalidatePath('/')
  revalidatePath('/admin')
}

export async function addHallOfFame(formData: FormData): Promise<void> {
  const supabase = await createClient()
  
  const name = formData.get('name') as string
  const role = formData.get('role') as string
  const metadata = formData.get('metadata') as string
  const image = formData.get('image') as File | null
  
  let image_url = null
  
  if (image && image.size > 0) {
    const fileExt = image.name.split('.').pop()
    const fileName = `${Date.now()}_hof.${fileExt}`
    
    const { error: uploadError } = await supabase.storage
      .from('gallery')
      .upload(`hof/${fileName}`, image)
      
    if (uploadError) {
      console.error("Error uploading HOF image:", uploadError)
      throw new Error(uploadError.message)
    }
    
    const { data: publicUrlData } = supabase.storage
      .from('gallery')
      .getPublicUrl(`hof/${fileName}`)
      
    image_url = publicUrlData.publicUrl
  }

  const { error } = await supabase
    .from('hall_of_fame')
    .insert([{ name, role, metadata, image_url }])

  if (error) {
    console.error("Error adding to Hall of Fame:", error)
    throw new Error(error.message)
  }

  revalidatePath('/')
  revalidatePath('/admin')
}

export async function deleteHallOfFame(formData: FormData): Promise<void> {
  const supabase = await createClient()
  const id = formData.get('id') as string
  
  const { error } = await supabase
    .from('hall_of_fame')
    .delete()
    .eq('id', id)

  if (error) {
    console.error("Error deleting from Hall of Fame:", error)
    throw new Error(error.message)
  }

  revalidatePath('/')
  revalidatePath('/admin')
}

export async function createBooking(name: string, phone: string, date: string, timeSlot: string, sport: string): Promise<void> {
  const supabase = await createClient()
  
  const { error } = await supabase
    .from('bookings')
    .insert([{ name, phone, booking_date: date, time_slot: timeSlot, sport, status: 'pending' }])

  if (error) {
    console.error("Error creating booking:", error)
    throw new Error(error.message)
  }
}

export async function updateBookingStatus(formData: FormData): Promise<void> {
  const supabase = await createClient()
  const id = formData.get('id') as string
  const status = formData.get('status') as string
  
  const { error } = await supabase
    .from('bookings')
    .update({ status })
    .eq('id', id)

  if (error) {
    console.error("Error updating booking status:", error)
    throw new Error(error.message)
  }
  revalidatePath('/admin')
}

export async function updateSiteSettings(formData: FormData): Promise<void> {
  const supabase = await createClient()
  
  const announcement_text = formData.get('announcement_text') as string
  const announcement_active = formData.get('announcement_active') === 'on'
  const pitch1_maintenance = formData.get('pitch1_maintenance') === 'on'
  const pickleball_maintenance = formData.get('pickleball_maintenance') === 'on'
  const boardgames_maintenance = formData.get('boardgames_maintenance') === 'on'
  
  const { error } = await supabase
    .from('site_settings')
    .upsert({
      id: 1,
      announcement_text,
      announcement_active,
      pitch1_maintenance,
      pickleball_maintenance,
      boardgames_maintenance
    })

  if (error) {
    console.error("Error updating site settings:", error)
    throw new Error(error.message)
  }

  revalidatePath('/')
  revalidatePath('/admin')
}
