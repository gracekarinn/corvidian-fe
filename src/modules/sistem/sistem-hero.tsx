import React from 'react'
import Image from 'next/image'

interface SistemHeroProps {
  title: string[]; // Hero title (panjang)
  cardTitle: string[]; // Card title (pendek)
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
  imagePosition: 'left' | 'right' | 'top' | 'bottom' | 'center';
  imageHeight: string;
  textPosition: 'top-left' | 'top-right' | 'bottom-left' | 'bottom-right';
}

const SistemHero: React.FC<SistemHeroProps> = ({
  title,
  cardTitle,
  highlightedWord,
  subtitle,
  description,
  features,
  imageSrc,
  imageAlt,
  bgGradient,
  textColor,
  imagePosition,
  imageHeight,
  textPosition
}) => {
  return (
    <div className='w-full max-w-[1550px] relative overflow-hidden'>
      {/* Background elements - Desktop */}
      <div className="hidden lg:block w-screen">
        <div 
          className="absolute top-[420px] w-screen rounded-tr-[110px] h-full bg-[#f4f4f4]" 
          style={{ zIndex: 3, clipPath: 'polygon(0% 0%, 100% 0%, 100% 100%, 0% 100%)'}}
        />
      </div>

      {/* Background elements - Mobile */}
      <div className="block lg:hidden w-screen">
        <div 
          className="absolute top-[280px] w-screen rounded-tr-[55px] h-full bg-[#f4f4f4]" 
          style={{ zIndex: 3, clipPath: 'polygon(0% 0%, 100% 0%, 100% 100%, 0% 100%)'}}
        />
      </div>
      
      {/* Main hero content - Menggunakan title (panjang) */}
      <div className="container relative mt-[40px] lg:mt-[100px] mx-auto px-6 lg:px-8 py-8 lg:py-20 z-10 mb-[20px] lg:mb-[40px]">
        <div className="space-y-3 lg:space-y-6">
          <h1 className="text-[24px] lg:text-5xl font-extrabold text-corvidian-1 leading-tight max-w-[350px] lg:max-w-5xl">
            {title.map((line, i) => (
              <span key={i}>
                {line}{' '}
              </span>
            ))}
            <span className="text-corvidian-1">{highlightedWord}</span>
          </h1>

          <div className="text-[12px] md:text-base lg:text-lg text-corvidian-1 leading-relaxed max-w-[250px] lg:max-w-2xl font-medium">
            <p>{subtitle}</p>
          </div>
        </div>
      </div>
      
      {/* Content Section */}
      <div className="relative z-10 mt-[40px] lg:mt-[60px] mb-[80px] lg:mb-[120px]">
        <div className="max-w-[1400px] mx-auto px-6 lg:px-8">
          <div className="flex flex-col lg:flex-row gap-8 lg:gap-16 items-start">
            {/* Image Card - Menggunakan cardTitle (pendek) */}
            <div className="w-[280px] flex-shrink-0 mx-auto lg:mx-0">
              <div 
                className="rounded-3xl shadow-lg overflow-hidden relative h-[500px]"
                style={{ background: bgGradient }}
              >
                {/* Image positioning - sama seperti card-full.tsx */}
                <div
                  className={`absolute ${
                    imagePosition === 'left'
                      ? 'left-0 top-0'
                      : imagePosition === 'right'
                      ? 'right-0 top-0'
                      : imagePosition === 'top'
                      ? 'top-0 left-0 w-full'
                      : imagePosition === 'bottom'
                      ? 'bottom-0 left-0 w-full'
                      : 'inset-0'
                  } ${imageHeight}`}
                >
                  <Image
                    src={imageSrc}
                    alt={imageAlt}
                    width={350}
                    height={500}
                    quality={100}
                    className={`${
                      imagePosition === 'left' ? 'h-full w-auto object-cover object-left' :
                      imagePosition === 'bottom' || imagePosition === 'top' ? 'w-full h-full object-cover object-bottom' :
                      imagePosition === 'center' ? 'h-auto w-full object-cover object-right translate-y-11' :
                      'w-full h-full object-cover'
                    }`}
                  />
                </div>

                {/* Text positioning - Menggunakan cardTitle (pendek) */}
                <div
                  className={`absolute ${
                    textPosition === 'top-left'
                      ? 'top-6 left-6'
                      : textPosition === 'top-right'
                      ? 'top-6 right-6'
                      : textPosition === 'bottom-left'
                      ? 'bottom-6 left-6'
                      : 'bottom-6 right-6'
                  } ${textPosition.includes('right') ? 'text-right' : 'text-left'} z-10`}
                >
                  <h3 className={`${textColor === 'light' ? 'text-white' : 'text-corvidian-1'} font-extrabold text-xl leading-tight mb-2`}>
                    {cardTitle.map((line, i) => (
                      <span key={i}>
                        {line}
                        <br />
                      </span>
                    ))}
                    <span className={textColor === 'light' ? 'text-white' : 'text-corvidian-1'}>{highlightedWord}</span>
                  </h3>
                  <p className={`${textColor === 'light' ? 'text-white' : 'text-corvidian-1'} text-xs underline`}>
                    Pelajari lebih lanjut
                  </p>
                </div>
              </div>
            </div>

            {/* Description & Features */}
            <div className="flex-1 space-y-6 w-full">
              <div className="bg-white rounded-2xl p-6 lg:p-8 shadow-sm">
                <h2 className="text-xl lg:text-3xl font-extrabold text-corvidian-1 mb-4">
                  {cardTitle.join(' ')} {highlightedWord} – {subtitle}
                </h2>
                
                <div className="space-y-4 text-corvidian-1">
                  {description.map((paragraph, index) => (
                    <p key={index} className="text-sm lg:text-base leading-relaxed">
                      {paragraph}
                    </p>
                  ))}
                </div>

                {/* Features List */}
                <div className="mt-6 space-y-4">
                  {features.map((feature, index) => (
                    <div key={index} className="pl-0">
                      <h3 className="font-bold text-corvidian-1 text-base lg:text-lg mb-2">
                        • {feature.title}
                      </h3>
                      <p className="text-sm lg:text-base text-corvidian-1 leading-relaxed">
                        {feature.description}
                      </p>
                    </div>
                  ))}
                </div>

                <div className="mt-8">
                  <p className="text-sm lg:text-base text-corvidian-1 font-medium">
                    Dengan {cardTitle.join(' ')} {highlightedWord} kami, perusahaan tidak hanya mengelola operasional, 
                    tetapi juga membangun fondasi yang kokoh untuk pertumbuhan jangka panjang. 
                    Solusi ini membantu Anda mengurangi beban administrasi, meningkatkan produktivitas, 
                    dan menciptakan lingkungan kerja yang lebih profesional.
                  </p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  )
}

export default SistemHero