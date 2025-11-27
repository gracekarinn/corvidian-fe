import React from 'react'
import Image from 'next/image'
import Link from 'next/link'

interface ProdukAplikasiSiapMobileProps {
  onLinkClick?: () => void
}

const ProdukAplikasiSiapMobile = ({ onLinkClick }: ProdukAplikasiSiapMobileProps) => {

  const operationsGeneral = [
    {
      icon: "/navbar/produk/business-travel-system.png",
      title: "Operations & General",
      description: "Business Travel System",
      link: "/sistem/businnes-trip"
    },
    {
      icon: "/navbar/produk/office-operations-system.png",
      title: "Operations & General",
      description: "Office Operations System",
      link: "/sistem/officer-operations"
    },
    {
      icon: "/navbar/produk/document-print-management.png",
      title: "Operations & General",
      description: "Document Print Management System",
      link: "/sistem/dokumen-print"
    },
  ];

  const humanCapital = [
    {
      icon: "/navbar/produk/timesheet-system.png",
      title: "Human Capital",
      description: "Timesheet System",
      link: "/sistem/timesheet"
    },
    {
      icon: "/navbar/produk/recruitment-system.png",
      title: "Human Capital",
      description: "Recruitment System",
      link: "/sistem/recruitment-system"
    },
    {
      icon: "/navbar/produk/human-capital-internal-system.png",
      title: "Human Capital",
      description: "Human Capital Internal System",
      link: "/sistem/human-capital"
    },
  ];

  const information = [
    {
      icon: "/navbar/produk/project-management.png",
      title: "Information",
      description: "Project Management",
      link: "/sistem/project-management"
    },
    {
      icon: "/navbar/produk/library-system.png",
      title: "Information",
      description: "Library System",
      link: "/sistem/library-system"
    },
  ];

  const designSystem = [
    {
      icon: "/navbar/produk/desain-sistem.png",
      title: "Design System",
      description: "E-Sign System",
      link: "/sistem/e-sign"
    },
  ];

  const allApps = [
    ...operationsGeneral,
    ...humanCapital,
    ...information,
    ...designSystem
  ];

  return (
    <div className="flex flex-col w-full mt-[10px] gap-4">
      {allApps.map((service, index) => (
        <Link
          key={index}
          href={service.link}
          onClick={onLinkClick}
          className="flex items-start gap-3 hover:bg-gray-50 p-2 rounded-lg transition-colors"
        >
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
        </Link>
      ))}
    </div>
  )
}

export default ProdukAplikasiSiapMobile
