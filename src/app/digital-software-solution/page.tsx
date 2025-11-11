import React from "react";
import ConsultationSchedule from "@/modules/homepage-module/section/schedule-consultation-section";
import ConsultationSection from "@/modules/homepage-module/section/consultation-section";
import OurPromotionSection from "@/modules/homepage-module/section/our-promotion-section";
import HeroSectionDigital from "@/modules/digital-service/section/hero-section-digital";


export default function DigitalSoftwareSolutionPage() {
  return (
    <div className="w-screen flex justify-center">
      
    <div className="w-full max-w-[1550px] min-h-screen">
      <HeroSectionDigital/>
      <ConsultationSection/>
      <ConsultationSchedule/>
      <OurPromotionSection/>
    </div>
    </div>
    
  );
}
