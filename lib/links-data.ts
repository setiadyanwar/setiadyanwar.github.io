export interface LinkItem {
  id: string
  title: string
  url: string
  description?: string
  icon?: string // Nama icon dari lucide-react: github, palette, linkedin, instagram, book, code, file, video, globe
  section?: string // Section title untuk grouping (contoh: "Proposal Magang", "Materi Kuliah", dll)
  sectionOrder?: number // Urutan section (semakin kecil semakin atas)
  linkOrder?: number // Urutan link di dalam section
  color?: string // Warna custom untuk card (tidak digunakan di simple version)
  preview?: {
    image?: string // URL gambar preview (optional)
    text?: string // Text preview singkat (optional)
    domain?: string // Domain name untuk ditampilkan (optional, auto-detect jika kosong)
  }
}

/**
 * Data link kini disimpan di tabel `links` pada Supabase.
 * Kolom yang dibutuhkan:
 * - id (text, primary key)
 * - title (text)
 * - url (text)
 * - icon (text, optional)
 * - section (text, optional)
 * - section_order (int, optional)
 * - link_order (int, optional)
 * - preview_text (text, optional)
 * - preview_domain (text, optional)
 * - preview_image (text, optional)
 *
 * Semua operasi CRUD dilakukan melalui Supabase lewat API routes di `app/api/links/route.ts`.
 */

