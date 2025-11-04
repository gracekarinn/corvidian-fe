import React from 'react'
import Image from 'next/image'
import Link from 'next/link'

const ProdukAplikasiSiapMobile = () => {

  const operationsGeneral = [
    {
      icon: "/navbar/produk/business-travel-system.png",
      title: "Operations & General",
      description: "Business Travel System",
      link: "/aplikasi/business-travel"
    },
    {
      icon: "/navbar/produk/office-operations-system.png",
      title: "Operations & General",
      description: "Office Operations System",
      link: "/aplikasi/office-operations"
    },
    {
      icon: "/navbar/produk/document-print-management.png",
      title: "Operations & General",
      description: "Document Print Management System",
      link: "/aplikasi/document-print"
    },
  ];

  const humanCapital = [
    {
      icon: "/navbar/produk/timesheet-system.png",
      title: "Human Capital",
      description: "Timesheet System",
      link: "/aplikasi/timesheet"
    },
    {
      icon: "/navbar/produk/recruitment-system.png",
      title: "Human Capital",
      description: "Recruitment System",
      link: "/aplikasi/recruitment"
    },
    {
      icon: "/navbar/produk/human-capital-internal-system.png",
      title: "Human Capital",
      description: "Human Capital Internal System",
      link: "/aplikasi/hr-internal"
    },
  ];

  const information = [
    {
      icon: "/navbar/produk/project-management.png",
      title: "Information",
      description: "Project Management",
      link: "/aplikasi/project-management"
    },
    {
      icon: "/navbar/produk/library-system.png",
      title: "Information",
      description: "Library System",
      link: "/aplikasi/library"
    },
  ];

  const designSystem = [
    {
      icon: "/navbar/produk/desain-sistem.png",
      title: "Design System",
      description: "Design System",
      link: "/aplikasi/design-system"
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
            <p className="text-[12px] text-gray-700 leading-tight mt-1">
              {service.description}
            </p>
          </div>
        </Link>
      ))}
    </div>
  )
}

export default ProdukAplikasiSiapMobile