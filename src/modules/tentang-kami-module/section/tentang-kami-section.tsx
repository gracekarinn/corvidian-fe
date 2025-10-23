import React from 'react'
import { Header } from '../components/header'
import { ArtikelKami } from '../components/artikel-kami'
import { ImageSection } from '../components/image';
import MengapaRekamJejak from '../components/mengapa-rekam-jejak';
import Solusi from '../components/solusi';
import TimKami from '../components/tim-kami';
import CaraKamiBekerja from '../components/cara-kami-bekerja';
import ConsultationSection from '@/modules/homepage-module/section/consultation-section';
import ConsultationSchedule from '@/modules/homepage-module/section/schedule-consultation-section';


const TentangKamiSection = () => {
  return (
    <section>
      <Header />
      <ImageSection />
      <MengapaRekamJejak />
      <Solusi />
      <TimKami />
      <CaraKamiBekerja />
      <ArtikelKami />
      <ConsultationSection />
      <ConsultationSchedule />
    </section>
  );
}

export default TentangKamiSection
