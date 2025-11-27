export interface SistemData {
  id: string;
  title: string[]; // Untuk hero title (panjang)
  cardTitle: string[]; // Untuk card title (pendek)
  highlightedWord: string;
  subtitle: string;
  description: string[];
  features: {
    title: string;
    description: string;
  }[];
  imageSrc: string;
  imageAlt: string;
  bgGradient: string;
  textColor: 'dark' | 'light';
  metaTitle: string;
  metaDescription: string;
  imagePosition: 'left' | 'right' | 'top' | 'bottom' | 'center';
  imageHeight: string;
  textPosition: 'top-left' | 'top-right' | 'bottom-left' | 'bottom-right';
}

export const sistemDataList: Record<string, SistemData> = {
  'human-capital': {
    id: 'human-capital',
    title: ['Kelola SDM Lebih Mudah dengan Human Capital System Terintegrasi'],
    cardTitle: ['Human', 'Capital', 'Internal'],
    highlightedWord: 'System',
    subtitle: 'Solusi Cerdas Mengelola SDM dari Rekrutmen hingga Produktivitas',
    description: [
      'Kelola sumber daya manusia secara lebih efisien, transparan, dan strategis dengan Human Capital System kami. Dirancang untuk kebutuhan bisnis modern, sistem ini mengintegrasikan proses rekrutmen, manajemen data karyawan, hingga pengelolaan waktu kerja dalam satu platform terpadu.',
    ],
    features: [
      {
        title: 'Recruitment Service',
        description: 'Permudah proses rekrutmen dengan sistem proses rekrutmen yang cepat, terstruktur, dan minim kesalahan. Mulai dari penyaringan awal, penjadwalan wawancara, hingga onboarding karyawan baru—semua dapat dilakukan secara efisien dan meningkatkan kualitas kandidat yang direkrut.',
      },
      {
        title: 'Human Capital Information System',
        description: 'Kelola seluruh data karyawan dalam satu sistem terpusat. Dari profil personal, riwayat pekerjaan, penilaian kinerja, hingga benefit dan kompensasi—semuanya terintegrasi aman dan dapat diakses kapan saja. Sistem ini menjadikan proses SDM jauh lebih transparan dan akurat.',
      },
      {
        title: 'Timesheet & Attendance System',
        description: 'Pantau kehadiran dan jam kerja karyawan secara real-time. Sistem ini membantu manajer membuat keputusan berbasis data, mempermudah perhitungan lembur, dan memastikan efisiensi dalam manajemen waktu kerja.',
      },
    ],
    imageSrc: '/project/orang.png',
    imageAlt: 'Human Capital System',
    bgGradient: 'linear-gradient(360deg, #FFFFFF 0%, #C5CED5 100%)',
    textColor: 'dark',
    imagePosition: 'left',
    imageHeight: 'h-full',
    textPosition: 'bottom-right',
    metaTitle: 'Human Capital Internal System | Corvidian',
    metaDescription: 'Kelola SDM lebih mudah dengan Human Capital System terintegrasi. Solusi modern untuk recruitment, manajemen data karyawan, dan timesheet.',
  },
  'recruitment': {
    id: 'recruitment',
    title: ['Permudah Proses Rekrutmen dengan Sistem Terintegrasi'],
    cardTitle: ['Recruitment'],
    highlightedWord: 'System',
    subtitle: 'Sistem Rekrutmen Modern untuk Proses Hiring yang Lebih Cepat',
    description: [
      'Recruitment System kami dirancang untuk mempercepat dan menyederhanakan seluruh proses rekrutmen. Dari posting lowongan, screening kandidat, hingga onboarding karyawan baru—semua dalam satu platform yang efisien dan terstruktur.',
    ],
    features: [
      {
        title: 'Applicant Tracking System (ATS)',
        description: 'Kelola semua aplikasi kandidat dalam satu dashboard. Filter, sort, dan track progress setiap kandidat dengan mudah.',
      },
      {
        title: 'Interview Scheduling',
        description: 'Jadwalkan wawancara dengan kandidat secara otomatis, terintegrasi dengan kalender tim HR dan interviewer.',
      },
      {
        title: 'Candidate Assessment',
        description: 'Lakukan penilaian kandidat dengan scoring system yang transparan dan objektif untuk keputusan yang lebih akurat.',
      },
    ],
    imageSrc: '/project/duduk.png',
    imageAlt: 'Recruitment System',
    bgGradient: 'linear-gradient(198.08deg, #02C2B3 -19.55%, #1D1F26 17.7%, #1D1F26 46.65%, #1578CB 95.15%)',
    textColor: 'light',
    imagePosition: 'bottom',
    imageHeight: 'h-[75%]',
    textPosition: 'top-left',
    metaTitle: 'Recruitment System | Corvidian',
    metaDescription: 'Sistem rekrutmen modern untuk mempercepat proses hiring. ATS, scheduling, dan assessment terintegrasi.',
  },
  'library': {
    id: 'library',
    title: ['Sistem Manajemen Perpustakaan Digital Modern'],
    cardTitle: ['Library'],
    highlightedWord: 'System',
    subtitle: 'Kelola Perpustakaan dengan Teknologi Digital',
    description: [
      'Library System yang memudahkan pengelolaan koleksi buku, peminjaman, dan pengembalian secara digital. Dengan fitur pencarian canggih dan tracking otomatis, perpustakaan Anda menjadi lebih efisien dan modern.',
    ],
    features: [
      {
        title: 'Catalog Management',
        description: 'Kelola katalog buku dengan mudah. Tambah, edit, dan kategorikan koleksi perpustakaan dengan sistem yang intuitif.',
      },
      {
        title: 'Borrowing & Return Tracking',
        description: 'Track peminjaman dan pengembalian buku secara real-time. Sistem otomatis mengirim reminder untuk menghindari keterlambatan.',
      },
      {
        title: 'Digital Library Access',
        description: 'Akses koleksi digital (e-book, jurnal) kapan saja, di mana saja melalui portal online yang user-friendly.',
      },
    ],
    imageSrc: '/project/library.png',
    imageAlt: 'Library System',
    bgGradient: 'linear-gradient(90deg, #FFFFFF 0%, #C5CED5 100%)',
    textColor: 'dark',
    imagePosition: 'top',
    imageHeight: 'h-[55%]',
    textPosition: 'bottom-left',
    metaTitle: 'Library System | Corvidian',
    metaDescription: 'Sistem perpustakaan digital untuk manajemen koleksi, peminjaman, dan akses e-library yang modern.',
  },
  'project-management': {
    id: 'project-management',
    title: ['Kelola Proyek dengan Efisien dan Terstruktur'],
    cardTitle: ['Project', 'Management'],
    highlightedWord: 'System',
    subtitle: 'Sistem Manajemen Proyek untuk Tim yang Produktif',
    description: [
      'Project Management System yang membantu tim Anda merencanakan, melacak, dan menyelesaikan proyek tepat waktu. Dengan fitur kolaborasi real-time dan reporting otomatis.',
    ],
    features: [
      {
        title: 'Task & Milestone Tracking',
        description: 'Buat task, assign ke anggota tim, dan track progress dengan timeline yang jelas dan terstruktur.',
      },
      {
        title: 'Resource Management',
        description: 'Kelola alokasi sumber daya (tim, budget, tools) secara optimal untuk menghindari over-allocation.',
      },
      {
        title: 'Real-time Collaboration',
        description: 'Kolaborasi dengan tim secara real-time. Share files, comments, dan updates langsung di dalam platform.',
      },
    ],
    imageSrc: '/project/management.png',
    imageAlt: 'Project Management System',
    bgGradient: 'linear-gradient(142.7deg, #02C2B3 -28.02%, #1D1F26 17.75%, #1D1F26 62.27%, #1578CB 124.5%)',
    textColor: 'light',
    imagePosition: 'bottom',
    imageHeight: 'h-[70%]',
    textPosition: 'top-left',
    metaTitle: 'Project Management System | Corvidian',
    metaDescription: 'Sistem manajemen proyek untuk tracking task, resource management, dan kolaborasi tim real-time.',
  },
  'e-sign': {
    id: 'e-sign',
    title: ['Tanda Tangan Digital yang Aman dan Legal'],
    cardTitle: ['E-Sign'],
    highlightedWord: 'System',
    subtitle: 'Solusi Tanda Tangan Digital untuk Dokumen Bisnis',
    description: [
      'E-Sign System yang memungkinkan Anda menandatangani dokumen secara digital dengan keamanan tinggi dan legally binding. Hemat waktu dan biaya operasional.',
    ],
    features: [
      {
        title: 'Secure Digital Signature',
        description: 'Tanda tangan digital dengan enkripsi tingkat tinggi yang legally compliant dan aman dari pemalsuan.',
      },
      {
        title: 'Multi-party Signing',
        description: 'Kirim dokumen untuk ditandatangani oleh multiple parties dengan workflow approval yang terstruktur.',
      },
      {
        title: 'Audit Trail',
        description: 'Track setiap aktivitas signing dengan audit trail lengkap untuk compliance dan legal purposes.',
      },
    ],
    imageSrc: '/project/esign.png',
    imageAlt: 'E-Sign System',
    bgGradient: 'linear-gradient(142.7deg, #02C2B3 -28.02%, #1D1F26 17.75%, #1D1F26 62.27%, #1578CB 124.5%)',
    textColor: 'light',
    imagePosition: 'bottom',
    imageHeight: 'h-[70%]',
    textPosition: 'top-left',
    metaTitle: 'E-Sign System | Corvidian',
    metaDescription: 'Sistem tanda tangan digital yang aman, legal, dan efisien untuk dokumen bisnis Anda.',
  },
  'office-operations': {
    id: 'office-operations',
    title: ['Otomatisasi Operasional Kantor yang Efisien'],
    cardTitle: ['Officer', 'Operations'],
    highlightedWord: 'System',
    subtitle: 'Sistem Operasional untuk Kantor yang Lebih Produktif',
    description: [
      'Office Operations System untuk mengelola seluruh aktivitas operasional kantor. Dari booking ruang meeting, inventory, hingga facility management dalam satu platform.',
    ],
    features: [
      {
        title: 'Meeting Room Booking',
        description: 'Book ruang meeting dengan mudah, lihat ketersediaan real-time, dan terima notifikasi otomatis.',
      },
      {
        title: 'Inventory Management',
        description: 'Kelola stok inventaris kantor (ATK, peralatan) dengan tracking otomatis dan alert untuk restock.',
      },
      {
        title: 'Facility Request',
        description: 'Submit dan track permintaan fasilitas (IT support, maintenance) dengan system ticketing terintegrasi.',
      },
    ],
    imageSrc: '/project/office.png',
    imageAlt: 'Office Operations System',
    bgGradient: 'linear-gradient(360deg, #FFFFFF 0%, #C5CED5 100%)',
    textColor: 'dark',
    imagePosition: 'center',
    imageHeight: 'h-auto',
    textPosition: 'top-left',
    metaTitle: 'Office Operations System | Corvidian',
    metaDescription: 'Sistem operasional kantor untuk booking, inventory, dan facility management yang terintegrasi.',
  },
  'business-trip': {
    id: 'business-trip',
    title: ['Kelola Perjalanan Dinas dengan Mudah'],
    cardTitle: ['Business', 'Trip'],
    highlightedWord: 'System',
    subtitle: 'Sistem Perjalanan Dinas yang Terintegrasi',
    description: [
      'Business Trip System yang mempermudah planning, booking, dan expense tracking perjalanan dinas karyawan. Semua dalam satu platform yang efisien.',
    ],
    features: [
      {
        title: 'Trip Planning & Approval',
        description: 'Submit rencana perjalanan dinas dengan workflow approval yang terstruktur dan transparan.',
      },
      {
        title: 'Booking Integration',
        description: 'Terintegrasi dengan sistem booking tiket dan hotel untuk kemudahan reservasi.',
      },
      {
        title: 'Expense Tracking',
        description: 'Track semua pengeluaran perjalanan dinas dan generate expense report otomatis untuk reimbursement.',
      },
    ],
    imageSrc: '/project/bus.png',
    imageAlt: 'Business Trip System',
    bgGradient: 'linear-gradient(142.7deg, #02C2B3 -28.02%, #1D1F26 17.75%, #1D1F26 62.27%, #1578CB 124.5%)',
    textColor: 'light',
    imagePosition: 'bottom',
    imageHeight: 'h-[70%]',
    textPosition: 'top-left',
    metaTitle: 'Business Trip System | Corvidian',
    metaDescription: 'Sistem perjalanan dinas untuk planning, booking, dan expense tracking yang terintegrasi.',
  },
  'timesheet': {
    id: 'timesheet',
    title: ['Tracking Waktu Kerja yang Akurat dan Efisien'],
    cardTitle: ['Timesheet'],
    highlightedWord: 'System',
    subtitle: 'Sistem Tracking Waktu Kerja Terintegrasi dengan Payroll',
    description: [
      'Timesheet System untuk tracking jam kerja karyawan secara real-time. Dengan fitur auto-calculation dan integration dengan payroll system.',
    ],
    features: [
      {
        title: 'Time Tracking',
        description: 'Track jam kerja harian, lembur, dan cuti dengan sistem yang akurat dan mudah digunakan.',
      },
      {
        title: 'Project Time Allocation',
        description: 'Alokasikan waktu kerja ke project tertentu untuk visibility biaya dan resource allocation.',
      },
      {
        title: 'Payroll Integration',
        description: 'Terintegrasi dengan sistem payroll untuk perhitungan gaji dan lembur yang otomatis.',
      },
    ],
    imageSrc: '/project/timesheet.png',
    imageAlt: 'Timesheet System',
    bgGradient: 'linear-gradient(360deg, #FFFFFF 0%, #C5CED5 100%)',
    textColor: 'dark',
    imagePosition: 'bottom',
    imageHeight: 'h-[65%]',
    textPosition: 'top-left',
    metaTitle: 'Timesheet System | Corvidian',
    metaDescription: 'Sistem tracking waktu kerja dengan fitur auto-calculation dan integrasi payroll.',
  },
  'document-print': {
    id: 'document-print',
    title: ['Kelola Pencetakan Dokumen Secara Terpusat'],
    cardTitle: ['Document Print', 'Management'],
    highlightedWord: 'System',
    subtitle: 'Sistem Manajemen Pencetakan untuk Efisiensi Biaya',
    description: [
      'Document Print Management System untuk mengelola dan memonitor seluruh aktivitas pencetakan dokumen di kantor. Hemat biaya dan kurangi waste.',
    ],
    features: [
      {
        title: 'Print Queue Management',
        description: 'Kelola antrian pencetakan dengan prioritas dan alokasi printer yang optimal.',
      },
      {
        title: 'Cost Tracking',
        description: 'Monitor biaya pencetakan per departemen atau user untuk kontrol budget yang lebih baik.',
      },
      {
        title: 'Secure Printing',
        description: 'Fitur secure print yang memastikan dokumen confidential hanya bisa diambil oleh user yang bersangkutan.',
      },
    ],
    imageSrc: '/project/print.png',
    imageAlt: 'Document Print Management System',
    bgGradient: 'linear-gradient(360deg, #FFFFFF 0%, #C5CED5 100%)',
    textColor: 'dark',
    imagePosition: 'bottom',
    imageHeight: 'h-[65%]',
    textPosition: 'top-left',
    metaTitle: 'Document Print Management System | Corvidian',
    metaDescription: 'Sistem manajemen pencetakan dokumen untuk cost tracking dan secure printing.',
  },
};