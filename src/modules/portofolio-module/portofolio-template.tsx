"use client"
import React, { useEffect, useState, useCallback } from 'react'
import Image from 'next/image'

// Interface untuk Technology Environment
export interface TechnologyEnvironment {
  name: string
  icon: string
  width: number
  height: number
}

// Interface untuk Portofolio Images
export interface PortofolioImage {
  src: string
  alt: string
  width: number
  height: number
}

// Interface untuk Props Component
export interface PortofolioTemplateProps {
  titleLine1: string
  titleLine2: string
  description: string
  mainImage?: string // Optional, default ke laptop.png
  technologies: TechnologyEnvironment[]
  portfolioImages: PortofolioImage[]
}

// Data constants untuk environment technologies yang tersedia
export const AVAILABLE_TECHNOLOGIES = {
  PHP: {
    name: 'PHP',
    icon: '/portofolio/php.png',
    width: 74,
    height: 39,
  },
  LARAVEL: {
    name: 'Laravel',
    icon: '/portofolio/Laravel.png',
    width: 61,
    height: 53,
  },
  MYSQL: {
    name: 'MySQL',
    icon: '/portofolio/MySQL.png',
    width: 70,
    height: 36,
  },
  BOOTSTRAP: {
    name: 'Bootstrap',
    icon: '/portofolio/Bootstrap.png',
    width: 47,
    height: 37,
  },
} as const

const PortofolioTemplate: React.FC<PortofolioTemplateProps> = ({
  titleLine1,
  titleLine2,
  description,
  mainImage = '/portofolio/laptop.png',
  technologies,
  portfolioImages,
}) => {
  // Modal state: src gambar yang sedang dibuka
  const [modalSrc, setModalSrc] = useState<string | null>(null)
  const [modalAlt, setModalAlt] = useState<string>('')

  const openModal = (src: string, alt = '') => {
    setModalSrc(src)
    setModalAlt(alt)
  }
  const closeModal = useCallback(() => {
    setModalSrc(null)
    setModalAlt('')
  }, [])

  // disable body scroll saat modal terbuka
  useEffect(() => {
    if (modalSrc) {
      const original = document.body.style.overflow
      document.body.style.overflow = 'hidden'
      return () => {
        document.body.style.overflow = original
      }
    }
  }, [modalSrc])

  // close modal on Esc
  useEffect(() => {
    const onKey = (e: KeyboardEvent) => {
      if (e.key === 'Escape') closeModal()
    }
    if (modalSrc) document.addEventListener('keydown', onKey)
    return () => document.removeEventListener('keydown', onKey)
  }, [modalSrc, closeModal])

  return (
    <section className="w-full relative">
      <div className="flex flex-row mb-[100px]">
        <div className="flex flex-col w-1/2">
          {/* Judul Section */}
          <div 
            className="relative" 
            style={{
              backgroundImage: 'url(/tentangkami/shape.png)', 
              backgroundSize: 'cover', 
              height: '550.84px'
            }}
          >
            <div className="relative top-[70px] flex flex-col ms-[100px]">
              <p className="text-xl max-sm:max-w-[330px] md:text-3xl font-extrabold text-white leading-tight max-[350px]:text-2xl max-[350px]:!max-w-[250px]">
                {titleLine1}
              </p>
              <p className="text-xl max-sm:max-w-[330px] md:text-3xl font-extrabold text-corvidian-3 leading-tight max-[350px]:text-2xl max-[350px]:!max-w-[250px]">
                {titleLine2}
              </p>
            </div>
            <Image
              src={mainImage}
              alt="Portfolio Main Image"
              width={650}
              height={481.84}
              style={{zIndex: 0}}
              className="absolute object-contain ms-[100px] top-[120px]"
            />
          </div>
        </div>

        <div className="relative flex flex-col w-1/2 pe-[50px] top-[70px] gap-[25px]">
          <div className="flex flex-row justify-between">
            <h1 className="text-xl max-sm:max-w-[330px] md:text-3xl font-extrabold text-corvidian-1 leading-tight max-[350px]:text-2xl max-[350px]:!max-w-[250px]">
              Gambaran Umum
            </h1>
            {/* Foto Environment - Fixed/Tidak dapat diganti */}
            <div className="flex flex-row gap-3 items-center">
              {technologies.map((tech, index) => (
                <Image
                  key={`${tech.name}-${index}`}
                  src={tech.icon}
                  alt={tech.name}
                  width={tech.width}
                  height={tech.height}
                  style={{zIndex: 0}}
                  className="object-contain"
                />
              ))}
            </div>
          </div>

          {/* Deskripsi Section */}
          <p className='text-[14px] pt-4 text-justify text-black'>
            {description}
          </p>
        </div>
      </div>

      <div className="relative flex flex-col w-full top-[40px] gap-[25px] justify-center items-center mb-[170px]">
        {/* Foto Portofolio - Dapat diganti */}
        <div className="flex flex-row gap-[10px] items-center">
          {portfolioImages.map((image, index) => (
            <button
              key={`portfolio-${index}`}
              onClick={() => openModal(image.src, image.alt)}
              className="rounded overflow-hidden focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-corvidian-3"
              aria-label={`Buka gambar portofolio ${image.alt || index}`}
              type="button"
            >
              <Image
                src={image.src}
                alt={image.alt}
                width={image.width}
                height={image.height}
                style={{zIndex: 0}}
                className="object-contain"
              />
            </button>
          ))}
        </div>
      </div>

      {/* Modal */}
      {modalSrc && (
        <div
          role="dialog"
          aria-modal="true"
          className="fixed inset-0 z-50 flex items-center justify-center bg-black/60 backdrop-blur-md transition-opacity cursor-pointer"
          onClick={() => closeModal()} // klik sekali pada overlay (atau gambar) akan menutup modal
        >
          <div className="max-w-[90vw] max-h-[90vh] p-4">
            <div className="w-full h-full rounded shadow-lg bg-transparent flex items-center justify-center">
              <Image
                src={modalSrc}
                alt={modalAlt || 'Gambar portofolio'}
                width={1200}
                height={800}
                style={{ objectFit: 'contain', maxWidth: '100%', maxHeight: '80vh' }}
                className="rounded"
                priority
              />
            </div>
          </div>
          {/* close button removed */}
        </div>
      )}
    </section>
  )
}

export default PortofolioTemplate