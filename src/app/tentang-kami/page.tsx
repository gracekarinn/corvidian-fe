import React from "react";
import HeroSectionTentangKami from "@/modules/tentang-kami/section/hero-section-tentang-kami";
import { ImageSection } from "@/modules/tentang-kami/section/image";
import MengapaRekamJejak from "@/modules/tentang-kami/section/mengapa-rekam-jejak";
import Solusi from "@/modules/tentang-kami/section/solusi";
import TimKami from "@/modules/tentang-kami/section/tim-kami";
import CaraKamiBekerja from "@/modules/tentang-kami/section/cara-kami-bekerja";
import ConsultationSchedule from "@/modules/homepage-module/section/schedule-consultation-section";
import ConsultationSection from "@/modules/homepage-module/section/consultation-section";
import Footer from "@/modules/homepage-module/section/footer";

export default function TentangKami() {
  return (
    <div className="w-screen h-screen">
      <HeroSectionTentangKami />
      <ImageSection />
      <MengapaRekamJejak />
      <Solusi />
      <TimKami />
      <CaraKamiBekerja />
      <ConsultationSection/>
      <ConsultationSchedule />
      <Footer />
    </div>
  );
};
