"use client"
import React, { useEffect, useState, useCallback } from 'react'
import Image from 'next/image'

export interface TechnologyEnvironment {
  name: string
  icon: string
  width: number
  height: number
}

export interface PortofolioImage {
  src: string
  alt: string
  width: number
  height: number
  modalWidth?: number
  modalHeight?: number
}

export interface PortofolioTemplateMobileProps {
  titleLine1: string
  titleLine2: string
  description: string
  mainImage?: string
  technologies: TechnologyEnvironment[]
  portfolioImages: PortofolioImage[]
}

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

const PortofolioTemplateMobile: React.FC<PortofolioTemplateMobileProps> = ({
  titleLine1,
  titleLine2,
  description,
  mainImage = '/portofolio/laptop.png',
  technologies,
  portfolioImages,
}) => {
  const [modalImage, setModalImage] = useState<PortofolioImage | null>(null)
  const [zoomLevel, setZoomLevel] = useState(1)

  const resetZoom = () => setZoomLevel(1)
  const adjustZoom = (delta: number) => {
    setZoomLevel((prev) => {
      const next = Math.min(3, Math.max(1, parseFloat((prev + delta).toFixed(2))))
      return next
    })
  }

  const openModal = (image: PortofolioImage) => {
    setModalImage(image)
    resetZoom()
  }
  const closeModal = useCallback(() => {
    setModalImage(null)
    resetZoom()
  }, [])

  useEffect(() => {
    if (modalImage) {
      const original = document.body.style.overflow
      document.body.style.overflow = 'hidden'
      return () => {
        document.body.style.overflow = original
      }
    }
  }, [modalImage])

  useEffect(() => {
    const onKey = (e: KeyboardEvent) => {
      if (e.key === 'Escape') closeModal()
    }
    if (modalImage) document.addEventListener('keydown', onKey)
    return () => document.removeEventListener('keydown', onKey)
  }, [modalImage, closeModal])

  return (
    <section className="w-full px-4 mb-16">
      <div className="flex flex-col gap-6">
        <div className="text-center">
          <h2 className="text-2xl font-extrabold text-corvidian-1 leading-tight">
            {titleLine1}
          </h2>
          <h2 className="text-2xl font-extrabold text-corvidian-3 leading-tight">
            {titleLine2}
          </h2>
        </div>

        <div className="w-full flex justify-center">
          <Image
            src={mainImage}
            alt="Portfolio Main Image"
            width={400}
            height={300}
            quality={100}
            priority
            className="object-contain w-full max-w-md"
          />
        </div>

        <div className="flex flex-col gap-4">
          <div className="flex justify-between items-center">
            <h3 className="text-xl font-extrabold text-corvidian-1">
              Gambaran Umum
            </h3>
            <div className="flex gap-2 items-center">
              {technologies.map((tech, index) => (
                <Image
                  key={`${tech.name}-${index}`}
                  src={tech.icon}
                  alt={tech.name}
                  width={tech.width * 0.7}
                  height={tech.height * 0.7}
                  quality={100}
                  className="object-contain"
                />
              ))}
            </div>
          </div>

          <p className="text-sm text-justify text-black">
            {description}
          </p>
        </div>

        <div className="flex flex-col gap-3">
          {portfolioImages.map((image, index) => (
            <button
              key={`portfolio-mobile-${index}`}
              onClick={() => openModal(image)}
              className="w-full rounded overflow-hidden focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-corvidian-3"
              aria-label={`Buka gambar portofolio ${image.alt || index}`}
              type="button"
            >
              <Image
                src={image.src}
                alt={image.alt}
                width={image.width}
                height={image.height}
                quality={100}
                priority={index === 0}
                className="object-contain w-full"
              />
            </button>
          ))}
        </div>
      </div>

      {modalImage && (
        <div
          role="dialog"
          aria-modal="true"
          className="fixed inset-0 z-50 flex items-center justify-center bg-black/60 backdrop-blur-md transition-opacity cursor-pointer"
          onClick={() => closeModal()}
        >
          <div
            className="max-w-[95vw] max-h-[90vh] p-4"
            onClick={(event) => event.stopPropagation()}
          >
            <div className="w-full h-full rounded shadow-lg bg-transparent flex items-center justify-center relative overflow-hidden">
              <div className="overflow-hidden max-h-[85vh] max-w-[95vw] flex items-center justify-center">
                <Image
                  src={modalImage.src}
                  alt={modalImage.alt || 'Gambar portofolio'}
                  width={modalImage.modalWidth ?? modalImage.width}
                  height={modalImage.modalHeight ?? modalImage.height}
                  quality={100}
                  priority
                  className="rounded object-contain max-h-[85vh] max-w-[95vw]"
                  style={{ 
                    transform: `scale(${zoomLevel})`, 
                    transformOrigin: 'center center' 
                  }}
                />
              </div>
              <div className="absolute bottom-4 right-4 flex gap-2">
                <button
                  type="button"
                  aria-label="Perkecil gambar"
                  onClick={() => adjustZoom(-0.25)}
                  disabled={zoomLevel <= 1}
                  className="px-3 py-2 rounded bg-white/80 text-black text-sm font-semibold shadow disabled:opacity-40"
                >
                  -
                </button>
                <button
                  type="button"
                  aria-label="Perbesar gambar"
                  onClick={() => adjustZoom(0.25)}
                  disabled={zoomLevel >= 3}
                  className="px-3 py-2 rounded bg-white/80 text-black text-sm font-semibold shadow disabled:opacity-40"
                >
                  +
                </button>
              </div>
            </div>
          </div>
        </div>
      )}
    </section>
  )
}

export default PortofolioTemplateMobile
