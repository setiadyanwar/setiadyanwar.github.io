export interface LinkItem {
  id: string;
  title: string;
  url: string;
  description?: string;
  icon?: string; // Nama icon dari lucide-react: github, palette, linkedin, instagram, book, code, file, video, globe
  section?: string; // Section title untuk grouping (contoh: "Proposal Magang", "Materi Kuliah", dll)
  color?: string; // Warna custom untuk card (tidak digunakan di simple version)
  preview?: {
    image?: string; // URL gambar preview (optional)
    text?: string; // Text preview singkat (optional)
    domain?: string; // Domain name untuk ditampilkan (optional, auto-detect jika kosong)
  };
}

/**
 * CARA MENAMBAH/EDIT LINK:
 * 
 * 1. Untuk menambah link baru:
 *    - Copy salah satu object link di bawah
 *    - Paste di section yang sesuai
 *    - Edit id, title, url, dan preview sesuai kebutuhan
 * 
 * 2. Untuk edit link yang sudah ada:
 *    - Cari link berdasarkan id
 *    - Edit field yang ingin diubah (title, url, preview, dll)
 * 
 * 3. Untuk membuat section baru:
 *    - Tambahkan comment seperti: // Nama Section Baru
 *    - Tambahkan field section: "Nama Section Baru" pada link-link di section tersebut
 * 
 * 4. Icon yang tersedia:
 *    - github, palette, linkedin, instagram, book, code, file, video, globe
 *    - Jika tidak diisi, akan menggunakan icon default (ExternalLink)
 */

export const linksData: LinkItem[] = [
  // ============================================
  // PROPOSAL MAGANG
  // ============================================
  {
    id: "proposal-template",
    title: "Template Proposal Magang",
    url: "https://example.com/proposal-template",
    icon: "file",
    section: "Proposal Magang",
    preview: {
      text: "Template dan contoh proposal magang yang bisa digunakan",
      domain: "example.com",
    },
  },
  {
    id: "proposal-guideline",
    title: "Panduan Proposal Magang",
    url: "https://example.com/proposal-guideline",
    icon: "book",
    section: "Proposal Magang",
    preview: {
      text: "Panduan lengkap cara membuat proposal magang",
      domain: "example.com",
    },
  },

  // ============================================
  // MATERI KULIAH
  // ============================================
  {
    id: "materi-semester-7",
    title: "Materi Semester 7",
    url: "https://example.com/materi",
    icon: "book",
    section: "Materi Kuliah",
    preview: {
      text: "Kumpulan materi kuliah semester 7",
      domain: "example.com",
    },
  },
  {
    id: "slide-presentasi",
    title: "Slide Presentasi",
    url: "https://example.com/slides",
    icon: "file",
    section: "Materi Kuliah",
    preview: {
      text: "Slide presentasi dari semua mata kuliah",
      domain: "example.com",
    },
  },

  // ============================================
  // DEVELOPMENT & CODE
  // ============================================
  {
    id: "github",
    title: "GitHub",
    url: "https://github.com/setiadyanwar",
    icon: "github",
    section: "Development",
    preview: {
      text: "Repository kode dan project yang sedang dikerjakan",
      domain: "github.com",
    },
  },
  {
    id: "portfolio",
    title: "Portfolio Website",
    url: "https://setiadyanwar.github.io",
    icon: "globe",
    section: "Development",
    preview: {
      text: "Website portfolio pribadi dengan showcase project dan experience",
      domain: "setiadyanwar.github.io",
    },
  },
  
  // ============================================
  // DESIGN
  // ============================================
  {
    id: "behance",
    title: "Behance",
    url: "https://behance.net/setiadyanwar",
    icon: "palette",
    section: "Design",
    preview: {
      text: "Portfolio design dan case study UI/UX projects",
      domain: "behance.net",
    },
  },
  
  // ============================================
  // SOCIAL MEDIA
  // ============================================
  {
    id: "linkedin",
    title: "LinkedIn",
    url: "https://linkedin.com/in/setiadyanwar",
    icon: "linkedin",
    section: "Social Media",
    preview: {
      text: "Professional network untuk koneksi dan career opportunities",
      domain: "linkedin.com",
    },
  },
  {
    id: "instagram",
    title: "Instagram",
    url: "https://instagram.com/setiadyanwarr",
    icon: "instagram",
    section: "Social Media",
    preview: {
      text: "Follow perjalanan harian dan update terbaru",
      domain: "instagram.com",
    },
  },
  
  // ============================================
  // LEARNING RESOURCES
  // ============================================
  {
    id: "docs",
    title: "Documentation",
    url: "https://example.com/docs",
    icon: "file",
    section: "Learning Resources",
    preview: {
      text: "Dokumentasi penting dan catatan untuk pembelajaran",
      domain: "example.com",
    },
  },
  {
    id: "courses",
    title: "Online Courses",
    url: "https://example.com/courses",
    icon: "book",
    section: "Learning Resources",
    preview: {
      text: "Materi course dan tutorial untuk skill development",
      domain: "example.com",
    },
  },

  // ============================================
  // TAMBAHKAN LINK BARU DI SINI
  // ============================================
  // Copy format di bawah ini dan edit sesuai kebutuhan:
  //
  // {
  //   id: "unique-id-link",                    // ID unik (huruf kecil, pakai dash)
  //   title: "Nama Link",                       // Judul yang ditampilkan
  //   url: "https://example.com",              // URL link
  //   icon: "globe",                           // Icon: github, palette, linkedin, instagram, book, code, file, video, globe
  //   section: "Nama Section",                 // Section untuk grouping (contoh: "Proposal Magang")
  //   preview: {
  //     text: "Deskripsi singkat link ini",    // Text preview (optional)
  //     domain: "example.com",                 // Domain name (optional, auto-detect jika kosong)
  //     image: "https://example.com/img.jpg",  // Image preview (optional)
  //   },
  // },
];

