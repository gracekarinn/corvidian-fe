type FooterLink = {
  label: string;
  href: string;
  scroll?: boolean;
  target?: string;
  rel?: string;
};

export const CONTACT = {
  email: "ask@corvidian.io",
  phoneDesktop: "+62 812-2191-5478",
  phoneMobile: "+62 812-2191-5478",
};

const WHATSAPP_NUMBER = CONTACT.phoneDesktop.replace(/\D/g, "");
const WHATSAPP_LINK = `https://wa.me/${WHATSAPP_NUMBER}`;

export const primaryLinks: FooterLink[] = [
  { label: "Produk & Layanan", href: "?openDropdown=produk", scroll: false },
  { label: "Solusi", href: "/tentang-kami#solusi" },
  { label: "Sumber Daya", href: "/tentang-kami/wawasan" },
  {
    label: "Harga",
    href: WHATSAPP_LINK,
    target: "_blank",
    rel: "noopener noreferrer",
  },
  { label: "Tentang Kami", href: "/tentang-kami" },
];

export const secondaryLinks: FooterLink[] = [
  { label: "Testimoni Klien", href: "/#konsultasi" },
  {
    label: "Telpon Resmi",
    href: WHATSAPP_LINK,
    target: "_blank",
    rel: "noopener noreferrer",
  },
  { label: "Klien Kami", href: "/#clients" },
  { label: "Portofolio Kami", href: "/portofolio" },
];

export const SOCIAL_ICONS = [
  {
    src: "/footer/Instagram.png",
    alt: "Instagram",
    label: "Instagram",
    href: "https://www.instagram.com/corvidian.io",
  },
  {
    src: "/footer/LinkedIn.png",
    alt: "LinkedIn",
    label: "LinkedIn",
    href: "https://www.linkedin.com/company/corvidianindonesia/about",
  },
];

export const SUBSCRIBE = {
  placeholder: "Email",
  errorEmpty: "Email tidak boleh kosong",
  errorFail: "Gagal berlangganan. Silakan coba lagi.",
  successMessage: "Terima kasih! Anda telah berlangganan newsletter kami.",
};
