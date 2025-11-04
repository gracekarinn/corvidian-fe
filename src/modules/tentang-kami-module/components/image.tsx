import React from 'react'
import Image from 'next/image'

export const ImageSection = () => {
  return (
    <section className="w-full relative">
        {/* Desktop Version */}
        <div className="hidden lg:block">
          <Image
            src="/tentangkami/shape.png"
            alt="Cable Image"
            width={650}
            height={481.84}
            style={{zIndex:3}}
            className="absolute object-contain top-[0px]"
          />
          <div 
            className="absolute top-[40px] w-full" 
            style={{
              backgroundImage: 'url(/tentangkami/hero.png)',
              zIndex: 1,
              backgroundSize: 'cover', 
              backgroundPosition: 'center', 
              height: '550.84px', 
              position: 'relative'
            }}>
          </div>
        </div>

        {/* Mobile Version */}
        <div className="block lg:hidden">
          <Image
            src="/tentangkami/shape.png"
            alt="Cable Image"
            width={200}
            height={90}
            style={{zIndex:3}}
            className="absolute object-contain top-[0px] "
          />
          <div 
            className="absolute top-[20px] w-full" 
            style={{
              backgroundImage: 'url(/tentangkami/hero.png)',
              zIndex: 1,
              backgroundSize: 'cover', 
              backgroundPosition: 'center', 
              height: '300px', 
              position: 'relative'
            }}>
          </div>
        </div>
    </section>
  )
}
