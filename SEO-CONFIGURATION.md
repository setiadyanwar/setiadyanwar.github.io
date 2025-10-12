# SEO Configuration untuk Vercel Deployment

## Masalah
Website menggunakan domain `vercel.app` yang menyebabkan Google Search Console tidak bisa mengindeks dengan baik karena:
1. Canonical URL yang tidak jelas
2. Duplikat konten antara domain `setiadyanwar.github.io` dan `setiadyanwar-github-io.vercel.app`
3. Tidak ada X-Robots-Tag untuk mencegah indexing domain vercel.app

## Solusi Implementasi

### 1. Canonical URLs
**File yang dimodifikasi**: `app/layout.tsx`, `app/*/page.tsx`

- Menambahkan `metadataBase: new URL("https://setiadyanwar.github.io")` di root layout
- Menambahkan `alternates.canonical` di setiap page metadata
- Semua canonical URL mengarah ke domain produksi `setiadyanwar.github.io`

### 2. X-Robots-Tag Header
**File yang dimodifikasi**: `next.config.mjs`

```javascript
async headers() {
    return [
        {
            source: '/:path*',
            has: [
                {
                    type: 'host',
                    value: 'setiadyanwar-github-io.vercel.app'
                }
            ],
            headers: [
                {
                    key: 'X-Robots-Tag',
                    value: 'noindex'
                }
            ]
        },
        // Tambahan untuk variasi domain vercel.app lainnya jika ada
        {
            source: '/:path*',
            has: [
                {
                    type: 'host',
                    value: '*.vercel.app'
                }
            ],
            headers: [
                {
                    key: 'X-Robots-Tag',
                    value: 'noindex'
                }
            ]
        }
    ];
}
```

### 3. Site Configuration
**File yang dimodifikasi**: `lib/site-config.ts`

- Menambahkan `vercelUrl` untuk referensi domain Vercel
- Memastikan semua URL canonical menggunakan domain produksi

### 4. Server/Client Component Fix
**File yang dimodifikasi**: `components/enhanced-section-header.tsx`, halaman-halaman

- Memisahkan client components yang menggunakan state dari server components
- Mengubah icon props menjadi string-based untuk menghindari function serialization
- Membuat `ContactForm` component terpisah untuk form yang memerlukan state

## Hasil

✅ **Canonical URLs**: Semua halaman memiliki canonical URL yang mengarah ke `https://setiadyanwar.github.io`
✅ **X-Robots-Tag**: Domain `*.vercel.app` akan memiliki header `noindex`
✅ **metadataBase**: Mengatasi warning metadata base URL
✅ **Build Success**: Aplikasi berhasil build tanpa error
✅ **SEO Ready**: Siap untuk indexing yang optimal di Google Search Console

## Langkah Selanjutnya

1. **Deploy ke Vercel**: Push ke repository untuk deployment
2. **Test Headers**: Verify X-Robots-Tag dengan `curl -I https://setiadyanwar-github-io.vercel.app`
3. **Google Search Console**: 
   - Submit sitemap: `https://setiadyanwar.github.io/sitemap.xml`
   - Request indexing untuk halaman utama
   - Monitor indexing status
4. **Optional**: Setup WAF redirect rule di Vercel dashboard untuk redirect `vercel.app` → `github.io`

## Verifikasi

Untuk memverifikasi implementasi:

1. **Check canonical URLs**:
   ```bash
   curl -s https://setiadyanwar.github.io | grep "canonical"
   ```

2. **Check X-Robots-Tag**:
   ```bash
   curl -I https://setiadyanwar-github-io.vercel.app
   ```

3. **Google Search Console URL Inspection**: 
   - Test URL: `https://setiadyanwar.github.io`
   - Pastikan canonical URL detected correctly
   - Pastikan no duplicate content issues

## Files Modified

- `app/layout.tsx` - Added metadataBase and canonical
- `app/about/page.tsx` - Added metadata with canonical
- `app/contact/page.tsx` - Added metadata with canonical, separated client component
- `app/experience/page.tsx` - Added metadata with canonical
- `app/portfolio/page.tsx` - Added metadata with canonical
- `next.config.mjs` - Added X-Robots-Tag headers
- `lib/site-config.ts` - Added vercelUrl configuration
- `components/enhanced-section-header.tsx` - Fixed client/server component issues
- `components/contact-form.tsx` - New separated client component
- `lib/canonical-url.ts` - New utility for canonical URL generation