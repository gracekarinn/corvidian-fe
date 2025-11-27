import { Metadata } from "next";
import SistemHero from "@/modules/sistem/sistem-hero";
import ConsultationSection from "@/modules/homepage-module/section/consultation-section";
import ScheduleConsultationSection from "@/modules/homepage-module/section/schedule-consultation-section";
import { sistemDataList } from "@/modules/sistem/sistem-data";

const data = sistemDataList['business-trip'];

export const metadata: Metadata = {
  title: data.metaTitle,
  description: data.metaDescription,
  keywords: ["business trip", "travel management", "expense tracking", "itinerary planning", "corporate travel", "corvidian"],
  openGraph: {
    title: data.metaTitle,
    description: data.metaDescription,
    type: "website",
  },
};

export default function BusinessTripPage() {
  return (
    <main className="flex min-h-screen flex-col items-center">
      <SistemHero {...data} />
      <ConsultationSection />
      <ScheduleConsultationSection />
    </main>
  );
}