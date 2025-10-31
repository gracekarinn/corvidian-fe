import React from 'react'
import ConsultationSchedule from '@/modules/homepage-module/section/schedule-consultation-section'
import ConsultationSection from '@/modules/homepage-module/section/consultation-section'
import OurPromotionSection from '@/modules/homepage-module/section/our-promotion-section'
import Footer from '@/modules/homepage-module/section/footer'
import HeroSectionWeb from '@/modules/web-service-module/section/hero-section-web'

export default function WebDesignDevelopmentPage() {
  return (
    <div className="w-screen flex justify-center">
    <div className="w-[1512px] min-h-screen">
      <HeroSectionWeb/>
      <ConsultationSection/>
      <ConsultationSchedule/>
      <OurPromotionSection/>
      <Footer/>
    </div>
    </div>
  )
}

