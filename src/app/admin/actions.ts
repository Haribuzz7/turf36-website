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
    
    const { data, error: uploadError } = await supabase.storage
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
  const image = formData.get('image') as File | null
  
  if (!image || image.size === 0) {
    throw new Error("No image provided")
  }
  
  const fileExt = image.name.split('.').pop()
  const fileName = `${Date.now()}_gallery.${fileExt}`
  
  const { error: uploadError } = await supabase.storage
    .from('gallery')
    .upload(fileName, image)
    
  if (uploadError) {
    console.error("Error uploading gallery image:", uploadError)
    throw new Error(uploadError.message)
  }

  revalidatePath('/')
  revalidatePath('/admin')
}

export async function deleteGalleryImage(formData: FormData): Promise<void> {
  const supabase = await createClient()
  const filename = formData.get('filename') as string
  
  if (!filename) {
    throw new Error("No filename provided")
  }
  
  const { error } = await supabase.storage
    .from('gallery')
    .remove([filename])

  if (error) {
    console.error("Error deleting gallery image:", error)
    throw new Error(error.message)
  }

  revalidatePath('/')
  revalidatePath('/admin')
}
