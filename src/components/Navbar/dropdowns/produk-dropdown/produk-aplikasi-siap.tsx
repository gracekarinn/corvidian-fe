import React from 'react'
import Image from 'next/image'
import Link from 'next/link'

const ProdukAplikasiSiap = () => {

    const operationsGeneral = [
    {
      icon: "/navbar/produk/business-travel-system.png",
      title: "Operations & General",
      description: "Business Travel System",
      link: "/sistem/businnes-trip",
    },
    {
      icon: "/navbar/produk/office-operations-system.png",
      title: "Operations & General",
      description: "Office Operations System",
      link: "/sistem/officer-operation",
    },
    {
      icon: "/navbar/produk/document-print-management.png",
      title: "Operations & General",
      description: "Document Print Management System",
      link: "/sistem/dokumen-print",
    },
  ];

  // Aplikasi Siap Pakai - Human Capital
  const humanCapital = [
    {
      icon: "/navbar/produk/timesheet-system.png",
      title: "Human Capital",
      description: "Timesheet System",
      link: "/sistem/timesheet",
    },
    {
      icon: "/navbar/produk/recruitment-system.png",
      title: "Human Capital",
      description: "Recruitment System",
      link: "/sistem/recruitment-system",
    },
    {
      icon: "/navbar/produk/human-capital-internal-system.png",
      title: "Human Capital",
      description: "Human Capital Internal System",
      link: "/sistem/human-capital",
    },
  ];

  // Aplikasi Siap Pakai - Information
  const information = [
    {
      icon: "/navbar/produk/project-management.png",
      title: "Information",
      description: "Project Management",
      link: "/sistem/project-management",
    },
    {
      icon: "/navbar/produk/library-system.png",
      title: "Information",
      description: "Library System",
      link: "/sistem/library-system",
    },
  ];

  // Aplikasi Siap Pakai - Design System
  const designSystem = [
    {
      icon: "/navbar/produk/desain-sistem.png",
      title: "Design System",
      description: "E-Sign System",
      link: "/sistem/e-sign",
    },
  ];


  return (
    <div className="flex flex-row w-full mt-[10px] justify-between gap-4">
    {/* Column 1 - Operations & General */}
                  <div className="mt-6 space-y-4 flex flex-col gap-[10px]">
                    {operationsGeneral.map((service, index) => (
                      <Link href={service.link} key={index} className="cursor-pointer hover:opacity-80 transition-opacity">
                        <div className="flex items-start gap-3">
                          <div className="flex-shrink-0">
                            <Image 
                              src={service.icon} 
                              alt={service.description}
                              width={18}
                              height={18}
                              className="object-contain"
                            />
                          </div>
                          <div className="flex-1">
                            <h3 className="text-[12px] font-bold leading-tight" style={{ color: '#0D99FF' }}>
                              {service.title}
                            </h3>
                            <p className="text-[12px] text-white leading-tight mt-1">
                              {service.description}
                            </p>
                          </div>
                        </div>
                      </Link>
                    ))}
                  </div>

                  {/* Column 2 - Human Capital */}
                  <div className="mt-6 space-y-4 flex flex-col gap-[10px]">
                    {humanCapital.map((service, index) => (
                      <Link href={service.link} key={index} className="cursor-pointer hover:opacity-80 transition-opacity">
                        <div className="flex items-start gap-3">
                          <div className="flex-shrink-0">
                            <Image 
                              src={service.icon} 
                              alt={service.description}
                              width={18}
                              height={18}
                              className="object-contain"
                            />
                          </div>
                          <div className="flex-1">
                            <h3 className="text-[12px] font-bold leading-tight" style={{ color: '#0D99FF' }}>
                              {service.title}
                            </h3>
                            <p className="text-[12px] text-white leading-tight mt-1">
                              {service.description}
                            </p>
                          </div>
                        </div>
                      </Link>
                    ))}
                  </div>

                  {/* Column 3 - Information */}
                  <div className="mt-6 space-y-4 flex flex-col gap-[10px]">
                    {information.map((service, index) => (
                      <Link href={service.link} key={index} className="cursor-pointer hover:opacity-80 transition-opacity">
                        <div className="flex items-start gap-3">
                          <div className="flex-shrink-0">
                            <Image 
                              src={service.icon} 
                              alt={service.description}
                              width={18}
                              height={18}
                              className="object-contain"
                            />
                          </div>
                          <div className="flex-1">
                            <h3 className="text-[12px] font-bold leading-tight" style={{ color: '#0D99FF' }}>
                              {service.title}
                            </h3>
                            <p className="text-[12px] text-white leading-tight mt-1">
                              {service.description}
                            </p>
                          </div>
                        </div>
                      </Link>
                    ))}
                  </div>

                  {/* Column 4 - Design System */}
                  <div className="mt-6 space-y-4 flex flex-col gap-[10px]">
                    {designSystem.map((service, index) => (
                      <Link href={service.link} key={index} className="cursor-pointer hover:opacity-80 transition-opacity">
                        <div className="flex items-start gap-3">
                          <div className="flex-shrink-0">
                            <Image 
                              src={service.icon} 
                              alt={service.description}
                              width={18}
                              height={18}
                              className="object-contain"
                            />
                          </div>
                          <div className="flex-1">
                            <h3 className="text-[12px] font-bold leading-tight" style={{ color: '#0D99FF' }}>
                              {service.title}
                            </h3>
                            <p className="text-[12px] text-white leading-tight mt-1">
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

export default ProdukAplikasiSiap
