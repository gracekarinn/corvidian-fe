/** @jsxImportSource react */
"use client"
import React from 'react'
import Image from 'next/image'
import { Button } from "@/components/ui/button";
import Link from 'next/link';
import { useRouter } from 'next/navigation';

interface ProdukSolusiLayananProps {
  onLinkClick?: () => void;
}

const ProdukSolusiLayanan = ({ onLinkClick }: ProdukSolusiLayananProps) => {
  const router = useRouter()

  const handleNavClick = (href: string) => (event: React.MouseEvent<HTMLAnchorElement>) => {
    event.preventDefault()
    onLinkClick?.()
    const [path, hash] = href.split('#')
    const currentPath = typeof window !== 'undefined' ? window.location.pathname : ''

    // navigate to path (no scroll) then force hash update so same-page clicks retrigger
    router.push(href, { scroll: false })

    if (hash && currentPath === path) {
      requestAnimationFrame(() => {
        window.location.hash = hash
        window.dispatchEvent(new HashChangeEvent('hashchange'))
      })
    }
  }

    // IT Infrastructure services
  const itInfraServices = [
    {
      icon: "/navbar/produk/pembuatan-instalasi-jaringan.png",
      title: "Pembuatan & Instalasi Jaringan",
      description: "(LAN/WAN, Wireless, dan VLAN)",
      link: "/it-infrastructure#infrastructure-details",
    },
    {
      icon: "/navbar/produk/pengaturan-keamanan-perangkat-jaringan.png",
      title: "Pengaturan & Keamanan Perangkat Jaringan",
      description: "(Router, Switch, dan Firewall)",
      link: "/it-infrastructure#security-details",
    },
    {
      icon: "/navbar/produk/pemeliharaan-pemantauan-jaringan.png",
      title: "Pemeliharaan & Pemantauan Jaringan",
      description: "Monitoring dan maintenance",
      link: "/it-infrastructure#operations-details",
    },
  ];

  // Web Design & Development services
  const webServices = [
    {
      icon: "/navbar/produk/pembuatan-website.png",
      title: "Pembuatan Website",
      description: "(Company Profile, Landing Page)",
      link: "/web-design-development#web-creation-details",
    },
    {
      icon: "/navbar/produk/ui-ux-website.png",
      title: "Desain UI/UX",
      description: "(UI/UX Website)",
      link: "/web-design-development#web-uiux-details",
    },
    {
      icon: "/navbar/produk/pemeliharaan-optimalisasi-website.png",
      title: "Pemeliharaan & Optimalisasi Website",
      description: "(Maintenance dan Konsultasi)",
      link: "/web-design-development#web-maintenance-details",
    },
  ];

  // Digital Software Solutions services
  const digitalServices = [
    {
      icon: "/navbar/produk/pengembangan-aplikasi.png",
      title: "Pengembangan Aplikasi",
      description: "(Web, Mobile, Integrated Systems)",
      link: "/digital-software-solution#app-development-details",
    },
    {
      icon: "/navbar/produk/ui-ux-aplikasi.png",
      title: "Desain UI/UX",
      description: "(UI/UX Aplikasi)",
      link: "/digital-software-solution#app-uiux-details",
    },
    {
      icon: "/navbar/produk/pemeliharaan-sistem-manajemen-data.png",
      title: "Pemeliharaan Sistem & Manajemen Data",
      description: "(Perawatan & Manajemen Data)",
      link: "/digital-software-solution#data-management-details",
    },
  ];

  return (
    <div className="flex flex-row w-full justify-between">
                      {/* IT Infrastructure Services */}
                      <div className="mt-6 space-y-4 flex flex-col gap-[10px]">
                        <div className="h-[40px] w-[130px] rounded-4xl flex items-center justify-center" style={{background:"linear-gradient(to right, #02C2B3, #1D1F26, #1D1F26, #1578CB)"}}>
                          <Button variant="outline" size="sm" className=" text-[12px] text-black font-bold w-fit rounded-2xl">
                            <Link href='/it-infrastructure' className='pointer' onClick={handleNavClick('/it-infrastructure')}>IT Infrastructure</Link>
                          </Button>
                        </div>
    
                        {itInfraServices.map((service, index) => (
                          <Link href={service.link} key={index} scroll={false} onClick={handleNavClick(service.link)}>
                            <div className="flex items-start gap-3 cursor-pointer hover:opacity-80 transition-opacity">
                              <div className="flex-shrink-0">
                                <Image 
                                  src={service.icon} 
                                  alt={service.title}
                                  width={18}
                                  height={18}
                                  className="object-contain"
                                />
                              </div>
                              <div className="flex-1">
                                <h3 className="text-[12px] font-bold text-white leading-tight">
                                  {service.title}
                                </h3>
                                <p className="text-[12px] text-gray-300 leading-tight mt-1">
                                  {service.description}
                                </p>
                              </div>
                            </div>
                          </Link>
                        ))}
                      </div>
    
                      {/* Web Design & Development Services */}
                      <div className="mt-6 space-y-4 flex flex-col gap-[10px]">
                        <div className="h-[40px] w-fit px-[7px] rounded-4xl flex items-center justify-center" style={{background:"linear-gradient(to right, #02C2B3, #1D1F26, #1D1F26, #1578CB)"}}>
                          <Button variant="outline" size="sm" className="text-[12px] text-black font-bold w-fit rounded-2xl">
                            <Link href='/web-design-development' className='pointer' onClick={handleNavClick('/web-design-development')}>Web Design</Link>
                          </Button>
                        </div>
    
                        {webServices.map((service, index) => (
                          <Link href={service.link} key={index} scroll={false} onClick={handleNavClick(service.link)}>
                            <div className="flex items-start gap-3 cursor-pointer hover:opacity-80 transition-opacity">
                              <div className="flex-shrink-0">
                                <Image 
                                  src={service.icon} 
                                  alt={service.title}
                                  width={18}
                                  height={18}
                                  className="object-contain"
                                />
                              </div>
                              <div className="flex-1">
                                <h3 className="text-[12px] font-bold text-white leading-tight">
                                  {service.title}
                                </h3>
                                <p className="text-[12px] text-gray-300 leading-tight mt-1">
                                  {service.description}
                                </p>
                              </div>
                            </div>
                          </Link>
                        ))}
                      </div>
    
                      {/* Digital Software Solutions Services */}
                      <div className="mt-6 space-y-4 flex flex-col gap-[10px]">
                        <div className="h-[40px] w-[130px] rounded-4xl flex items-center justify-center" style={{background:"linear-gradient(to right, #02C2B3, #1D1F26, #1D1F26, #1578CB)"}}>
                          <Button variant="outline" size="sm" className="text-[12px] text-black font-bold w-fit rounded-2xl">
                            <Link href='/digital-software-solution' className='pointer' onClick={handleNavClick('/digital-software-solution')}>Digital Software</Link>
                          </Button>
                        </div>
    
                        {digitalServices.map((service, index) => (
                          <Link href={service.link} key={index} scroll={false} onClick={handleNavClick(service.link)}>
                            <div className="flex items-start gap-3 cursor-pointer hover:opacity-80 transition-opacity">
                              <div className="flex-shrink-0">
                                <Image 
                                  src={service.icon} 
                                  alt={service.title}
                                  width={18}
                                  height={18}
                                  className="object-contain"
                                />
                              </div>
                              <div className="flex-1">
                                <h3 className="text-[12px] font-bold text-white leading-tight">
                                  {service.title}
                                </h3>
                                <p className="text-[12px] text-gray-300 leading-tight mt-1">
                                  {service.description}
                                </p>
                              </div>
                            </div>
                          </Link>
                        ))}
                      </div>
                    </div>
  )
}

export default ProdukSolusiLayanan
