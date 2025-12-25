# 📊 Analytics System - Setup Guide

## Overview
Sistem analytics internal yang terintegrasi dengan dashboard admin untuk melacak pengunjung website secara real-time.

## ✅ Bug Prevention & Safety Features

### 1. **AnalyticsTracker Component**
- ✅ Mencegah infinite loop dengan tracking deduplication
- ✅ Menghindari tracking di halaman admin (`/admin/*`)
- ✅ Dynamic import untuk optimasi bundle size
- ✅ Graceful error handling (silent fail di production)
- ✅ Timeout untuk menghindari blocking render
- ✅ Development mode logging untuk debugging

### 2. **Dashboard Chart Component**
- ✅ Division by zero prevention
- ✅ Empty data array handling
- ✅ Percentage capping (max 100%)
- ✅ Minimum value enforcement untuk `Math.max()`
- ✅ Null/undefined checks untuk semua data

### 3. **Database Security**
- ✅ Row Level Security (RLS) enabled
- ✅ Proper permission policies (anon, authenticated, service_role)
- ✅ SECURITY DEFINER functions untuk bypass RLS saat tracking
- ✅ Indexes untuk performa query optimal

## 🚀 Setup Instructions

### Step 1: Run SQL Script
1. Buka **Supabase Dashboard** → **SQL Editor**
2. Copy paste isi file `scripts/setup-analytics.sql`
3. Klik **Run** untuk execute script
4. Verifikasi dengan query test (ada di bagian bawah SQL file)

### Step 2: Verify Installation
Jalankan query berikut di SQL Editor untuk memastikan setup berhasil:

\`\`\`sql
-- Check if table exists
SELECT * FROM analytics LIMIT 5;

-- Test tracking function
SELECT increment_page_view('/test');

-- View summary
SELECT * FROM get_analytics_summary(7);
\`\`\`

### Step 3: Test Tracking
1. Buka website Anda di production (bukan localhost)
2. Navigate ke beberapa halaman
3. Buka **Admin Dashboard** → lihat grafik analytics
4. Data akan muncul setelah beberapa page views tercatat

## 📁 File Structure

\`\`\`
├── components/
│   └── analytics-tracker.tsx       # Tracking component (auto-injected)
├── app/
│   ├── layout.tsx                  # Tracker dipasang di sini
│   └── admin/
│       └── page.tsx                # Dashboard dengan chart
└── scripts/
    └── setup-analytics.sql         # Database setup script
\`\`\`

## 🔧 Configuration

### Disable Tracking di Development
Tracking otomatis disabled di `NODE_ENV=development`. Untuk enable:

\`\`\`tsx
// components/analytics-tracker.tsx
// Hapus atau comment line ini:
if (process.env.NODE_ENV === 'development') {
  return
}
\`\`\`

### Custom Tracking Paths
Untuk exclude path tertentu dari tracking:

\`\`\`tsx
// Tambahkan kondisi di analytics-tracker.tsx
if (pathname.startsWith('/admin') || pathname.startsWith('/api')) {
  return
}
\`\`\`

## 📊 Dashboard Features

### Current (Mock Data)
- ✅ Interactive bar chart dengan animasi
- ✅ 7-day visitor trends
- ✅ Hover tooltips
- ✅ Responsive design

### Future (Real Data)
Setelah SQL script dijalankan, Anda bisa:
1. Fetch data real dari `analytics` table
2. Replace `VISITOR_DATA` dengan query Supabase
3. Implementasi date range selector
4. Export data ke CSV/Excel

## 🐛 Troubleshooting

### "Analytics setup required" warning
**Cause:** SQL script belum dijalankan di Supabase
**Fix:** Jalankan `scripts/setup-analytics.sql` di Supabase SQL Editor

### Data tidak muncul di dashboard
**Cause:** Masih menggunakan mock data
**Fix:** Update `app/admin/page.tsx` untuk fetch dari Supabase (coming soon)

### Tracking tidak jalan di localhost
**Expected:** Tracking disabled di development mode untuk testing
**Fix:** Deploy ke production atau ubah config (lihat Configuration)

## 🔐 Security Notes

- ✅ RLS enabled untuk protect data
- ✅ Anon users hanya bisa INSERT (tracking)
- ✅ Authenticated users bisa SELECT (view stats)
- ✅ Service role punya full access
- ✅ No PII (Personally Identifiable Information) collected
- ✅ Only path tracking, no user tracking

## 📈 Next Steps

1. ✅ Setup database (run SQL script)
2. ⏳ Test tracking di production
3. ⏳ Integrate real data ke dashboard
4. ⏳ Add more analytics features (top pages, referrers, etc.)

## 💡 Tips

- Tracking hanya jalan di production (bukan localhost)
- Data terakumulasi per hari (daily aggregation)
- Chart update otomatis saat ada data baru
- Bisa extend dengan Google Analytics untuk data lebih lengkap

---

**Status:** ✅ Code Ready | ⏳ Database Setup Required

Jika ada pertanyaan atau issue, silakan check troubleshooting section atau contact developer.
