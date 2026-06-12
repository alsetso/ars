'use client'

import { useEffect, useState, useCallback, useRef } from 'react'
import { createClient } from '@/lib/supabase/client'
import { insertLeadMedia, deleteLeadMedia } from './actions'
import { Upload, X, ImageIcon, Loader2, ZoomIn } from 'lucide-react'

interface MediaItem {
  id: string
  storage_path: string
  file_name: string
  file_size: number | null
  mime_type: string | null
  created_at: string
  signedUrl?: string
}

const MAX_FILE_SIZE = 20 * 1024 * 1024
const ALLOWED_TYPES = ['image/jpeg', 'image/png', 'image/webp', 'image/gif', 'image/heic', 'image/heif']

function formatBytes(bytes: number | null) {
  if (!bytes) return ''
  if (bytes < 1024 * 1024) return `${(bytes / 1024).toFixed(0)} KB`
  return `${(bytes / 1024 / 1024).toFixed(1)} MB`
}

export function LeadMedia({ leadId }: { leadId: string }) {
  const supabase = createClient()
  const fileInputRef = useRef<HTMLInputElement>(null)

  const [media, setMedia] = useState<MediaItem[]>([])
  const [loading, setLoading] = useState(true)
  const [uploading, setUploading] = useState<string[]>([])
  const [dragOver, setDragOver] = useState(false)
  const [error, setError] = useState<string | null>(null)
  const [lightbox, setLightbox] = useState<MediaItem | null>(null)

  useEffect(() => {
    loadMedia()
  // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [leadId])

  async function loadMedia() {
    setLoading(true)
    const { data, error: fetchError } = await supabase
      .from('lead_media')
      .select('*')
      .eq('lead_id', leadId)
      .order('created_at', { ascending: true })

    if (fetchError || !data) {
      setLoading(false)
      return
    }

    const withUrls = await Promise.all(
      data.map(async (item) => {
        const { data: urlData } = await supabase.storage
          .from('lead-media')
          .createSignedUrl(item.storage_path, 3600)
        return { ...item, signedUrl: urlData?.signedUrl }
      })
    )

    setMedia(withUrls)
    setLoading(false)
  }

  async function uploadFiles(files: File[]) {
    setError(null)
    for (const file of files) {
      if (!ALLOWED_TYPES.includes(file.type)) {
        setError(`"${file.name}" is not a supported image type.`)
        continue
      }
      if (file.size > MAX_FILE_SIZE) {
        setError(`"${file.name}" exceeds the 20 MB limit.`)
        continue
      }

      const safeName = file.name.replace(/[^a-zA-Z0-9._-]/g, '_')
      const storagePath = `${leadId}/${crypto.randomUUID()}-${safeName}`

      setUploading((prev) => [...prev, file.name])
      try {
        const { error: uploadError } = await supabase.storage
          .from('lead-media')
          .upload(storagePath, file, { contentType: file.type })

        if (uploadError) {
          setError(`Upload failed: ${uploadError.message}`)
        } else {
          await insertLeadMedia(leadId, storagePath, file.name, file.size, file.type)
          await loadMedia()
        }
      } catch (err) {
        setError(err instanceof Error ? err.message : 'Upload failed.')
      } finally {
        setUploading((prev) => prev.filter((n) => n !== file.name))
      }
    }
  }

  async function handleDelete(item: MediaItem) {
    try {
      await deleteLeadMedia(item.id, item.storage_path)
      setMedia((prev) => prev.filter((m) => m.id !== item.id))
      if (lightbox?.id === item.id) setLightbox(null)
    } catch {
      setError('Failed to delete image.')
    }
  }

  const onDrop = useCallback(
    (e: React.DragEvent) => {
      e.preventDefault()
      setDragOver(false)
      uploadFiles(Array.from(e.dataTransfer.files))
    },
    // eslint-disable-next-line react-hooks/exhaustive-deps
    [leadId]
  )

  return (
    <>
      {/* Lightbox */}
      {lightbox && (
        <div
          className="fixed inset-0 z-50 flex items-center justify-center bg-black/80 p-4"
          onClick={() => setLightbox(null)}
        >
          <button
            className="absolute right-4 top-4 rounded-full bg-white/10 p-2 text-white hover:bg-white/20"
            onClick={() => setLightbox(null)}
          >
            <X className="h-5 w-5" />
          </button>
          {lightbox.signedUrl && (
            <img
              src={lightbox.signedUrl}
              alt={lightbox.file_name}
              className="max-h-[85vh] max-w-[90vw] rounded-lg object-contain shadow-2xl"
              onClick={(e) => e.stopPropagation()}
            />
          )}
          <div className="absolute bottom-4 left-1/2 -translate-x-1/2 rounded-full bg-black/60 px-3 py-1 text-xs text-white">
            {lightbox.file_name}
            {lightbox.file_size ? ` · ${formatBytes(lightbox.file_size)}` : ''}
          </div>
        </div>
      )}

      <div className="mt-4">
        {/* Section header */}
        <p className="mb-2.5 flex items-center gap-1.5 text-xs font-semibold uppercase tracking-wide text-gray-400">
          <ImageIcon className="h-3.5 w-3.5" />
          Media
          {media.length > 0 && (
            <span className="ml-1 rounded-full bg-gray-200 px-1.5 py-px text-[10px] font-bold text-gray-500">
              {media.length}
            </span>
          )}
        </p>

        {/* Drop zone */}
        <div
          onDragOver={(e) => { e.preventDefault(); setDragOver(true) }}
          onDragLeave={() => setDragOver(false)}
          onDrop={onDrop}
          onClick={() => fileInputRef.current?.click()}
          className={`flex cursor-pointer flex-col items-center justify-center gap-2 rounded-lg border-2 border-dashed px-6 py-5 text-center transition-all ${
            dragOver
              ? 'border-brand-primary bg-brand-primary/5 scale-[1.01]'
              : 'border-gray-200 bg-gray-50 hover:border-brand-primary/40 hover:bg-gray-100'
          }`}
        >
          <div className={`flex h-9 w-9 items-center justify-center rounded-full transition-colors ${
            dragOver ? 'bg-brand-primary/10' : 'bg-gray-200'
          }`}>
            <Upload className={`h-4 w-4 ${dragOver ? 'text-brand-primary' : 'text-gray-500'}`} />
          </div>
          <div>
            <p className="text-sm font-medium text-gray-700">
              Drop images here or{' '}
              <span className="text-brand-primary underline underline-offset-2">browse</span>
            </p>
            <p className="mt-0.5 text-xs text-gray-400">JPEG · PNG · WEBP · GIF · HEIC · Max 20 MB each</p>
          </div>
          <input
            ref={fileInputRef}
            type="file"
            multiple
            accept="image/*"
            className="hidden"
            onChange={(e) => {
              if (e.target.files) uploadFiles(Array.from(e.target.files))
              e.target.value = ''
            }}
          />
        </div>

        {/* Error */}
        {error && (
          <p className="mt-2 flex items-center gap-1.5 text-xs text-red-600">
            <X className="h-3 w-3 shrink-0" />
            {error}
          </p>
        )}

        {/* Upload progress pills */}
        {uploading.length > 0 && (
          <div className="mt-2 flex flex-wrap gap-1.5">
            {uploading.map((name) => (
              <div
                key={name}
                className="flex items-center gap-1 rounded-full bg-brand-primary/10 px-2.5 py-1 text-xs font-medium text-brand-primary"
              >
                <Loader2 className="h-3 w-3 animate-spin" />
                {name}
              </div>
            ))}
          </div>
        )}

        {/* Carousel */}
        {loading ? (
          <div className="mt-3 flex items-center gap-1.5 text-xs text-gray-400">
            <Loader2 className="h-3 w-3 animate-spin" />
            Loading media…
          </div>
        ) : media.length > 0 ? (
          <div className="mt-3 flex gap-3 overflow-x-auto pb-2 [-ms-overflow-style:none] [scrollbar-width:none] [&::-webkit-scrollbar]:hidden">
            {media.map((item) => (
              <div key={item.id} className="group relative shrink-0">
                {/* Thumbnail */}
                <button
                  onClick={() => setLightbox(item)}
                  className="block h-24 w-24 overflow-hidden rounded-lg border border-gray-200 bg-gray-100 focus:outline-none focus:ring-2 focus:ring-brand-primary"
                >
                  {item.signedUrl ? (
                    <img
                      src={item.signedUrl}
                      alt={item.file_name}
                      className="h-full w-full object-cover transition-transform duration-200 group-hover:scale-105"
                    />
                  ) : (
                    <div className="flex h-full w-full items-center justify-center">
                      <ImageIcon className="h-6 w-6 text-gray-300" />
                    </div>
                  )}

                  {/* Zoom overlay */}
                  <div className="absolute inset-0 flex items-center justify-center rounded-lg bg-black/0 transition-colors group-hover:bg-black/20">
                    <ZoomIn className="h-5 w-5 text-white opacity-0 transition-opacity group-hover:opacity-100" />
                  </div>
                </button>

                {/* Delete button */}
                <button
                  onClick={(e) => { e.stopPropagation(); handleDelete(item) }}
                  title="Delete image"
                  className="absolute -right-1.5 -top-1.5 flex h-5 w-5 items-center justify-center rounded-full bg-red-500 text-white opacity-0 shadow-sm transition-opacity group-hover:opacity-100 hover:bg-red-600"
                >
                  <X className="h-3 w-3" />
                </button>

                {/* Filename */}
                <p className="mt-1 w-24 truncate text-center text-[10px] text-gray-400">
                  {item.file_name}
                </p>
              </div>
            ))}
          </div>
        ) : null}
      </div>
    </>
  )
}
