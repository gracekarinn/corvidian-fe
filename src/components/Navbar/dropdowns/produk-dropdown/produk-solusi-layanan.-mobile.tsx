/** @jsxImportSource react */
"use client"
import React from 'react'
import Link from 'next/link'
import { Button } from '@/components/ui/button'
import { useRouter } from 'next/navigation'

interface ServiceItem {
  title: string;
  description: string;
  link: string;
}

interface ServiceCategory {
  title: string;
  link: string;
  items: ServiceItem[];
}

interface ProdukSolusiLayananMobileProps {
  onLinkClick?: () => void;
}

const ProdukSolusiLayananMobile = ({ onLinkClick }: ProdukSolusiLayananMobileProps) => {
  const router = useRouter()

  const scrollToHashWithOffset = (hash: string) => {
    const element = document.getElementById(hash)
    if (!element) return

    const navbarHeight = Array.from(
      document.querySelectorAll<HTMLElement>("[data-navbar]")
    ).reduce((max, el) => {
      const height = el.getBoundingClientRect().height
      return height > max ? height : max
    }, 0)
    const top = element.getBoundingClientRect().top + window.scrollY - navbarHeight - 8

    window.scrollTo({
      top: Math.max(top, 0),
      left: 0,
      behavior: "smooth",
    })
  }

  const handleNavClick = (href: string) => (event: React.MouseEvent<HTMLAnchorElement>) => {
    event.preventDefault()
    onLinkClick?.()
    const [path, hash] = href.split('#')
    const currentPath = typeof window !== 'undefined' ? window.location.pathname : ''
    const shouldScrollToTop = currentPath !== path || !hash

    router.push(href, { scroll: shouldScrollToTop })

    if (hash && currentPath === path) {
      requestAnimationFrame(() => {
        if (document.getElementById(hash)) {
          scrollToHashWithOffset(hash)
        } else {
          window.location.hash = hash
        }
        window.dispatchEvent(new HashChangeEvent('hashchange'))
      })
    }
  }

  const serviceCategories: ServiceCategory[] = [
    {
      title: "IT Infrastructure",
      link: "/it-infrastructure",
      items: [
        {
          title: "Pembuatan & Instalasi Jaringan",
          description: "(LAN/WAN, Wireless, dan VLAN)",
          link: "/it-infrastructure#infrastructure-details",
        },
        {
          title: "Pengaturan & Keamanan Perangkat Jaringan",
          description: "(Router, Switch, dan Firewall)",
          link: "/it-infrastructure#security-details",
        },
        {
          title: "Pemeliharaan & Pemantauan Jaringan",
          description: "Monitoring dan maintenance",
          link: "/it-infrastructure#operations-details",
        },
      ],
    },
    {
      title: "Web Design & Development",
      link: "/web-design-development",
      items: [
        {
          title: "Pembuatan Website",
          description: "(Company Profile, Landing Page)",
          link: "/web-design-development#web-creation-details",
        },
        {
          title: "Desain UI/UX",
          description: "(UI/UX Website)",
          link: "/web-design-development#web-uiux-details",
        },
        {
          title: "Pemeliharaan & Optimalisasi Website",
          description: "(Maintenance dan Konsultasi)",
          link: "/web-design-development#web-maintenance-details",
        },
      ],
    },
    {
      title: "Digital Software Solutions",
      link: "/digital-software-solution",
      items: [
        {
          title: "Pengembangan Aplikasi",
          description: "(Mobile & Desktop App)",
          link: "/digital-software-solution#app-development-details",
        },
        {
          title: "Desain UI/UX",
          description: "(UI/UX Aplikasi)",
          link: "/digital-software-solution#app-uiux-details",
        },
        {
          title: "Pemeliharaan Sistem & Manajemen Data",
          description: "(Perawatan & Manajemen Data)",
          link: "/digital-software-solution#data-management-details",
        },
      ],
    },
  ];

  return (
    <div>
      {serviceCategories.map((category, idx) => (
        <div key={idx} className="mb-6">
          <div 
            className="h-[40px] mb-4 w-fit rounded-full flex items-center justify-center p-[2px]" 
            style={{background:"linear-gradient(to right, #02C2B3, #1D1F26, #1D1F26, #1578CB)"}}
          >
            <Button 
              variant="outline" 
              size="sm" 
              className="text-[12px] text-black font-bold w-fit rounded-full bg-white hover:bg-gray-50 px-4"
            >
              <Link 
                href={category.link} 
                className='pointer' 
                onClick={handleNavClick(category.link)}
              >
                {category.title}
              </Link>
            </Button>
          </div>
          
          <div className="space-y-2 pl-3">
            {category.items.map((item, itemIdx) => (
              <div key={itemIdx}>
                <Link
                  href={item.link}
                  className="text-sm text-black hover:text-[#02C2B3] block transition-colors font-semibold"
                  onClick={handleNavClick(item.link)}
                >
                  {item.title}
                </Link>
                <p className="text-xs text-gray-400">
                  {item.description}
                </p>
              </div>
            ))}
          </div>
        </div>
      ))}
    </div>
  )
}

export default ProdukSolusiLayananMobile
