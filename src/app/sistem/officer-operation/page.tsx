import { Metadata } from "next";
import SistemHero from "@/modules/sistem/sistem-hero";
import ConsultationSection from "@/modules/homepage-module/section/consultation-section";
import ScheduleConsultationSection from "@/modules/homepage-module/section/schedule-consultation-section";
import { sistemDataList } from "@/modules/sistem/sistem-data";

// Fix: Ganti 'officer-operations' menjadi 'office-operations'
const data = sistemDataList['office-operations'];

export const metadata: Metadata = {
  title: data.metaTitle,
  description: data.metaDescription,
  keywords: ["office operations", "office management", "meeting room booking", "inventory management", "facility management", "corvidian"],
  openGraph: {
    title: data.metaTitle,
    description: data.metaDescription,
    type: "website",
  },
};

export default function OfficeOperationsPage() {
  return (
    <main className="flex min-h-screen flex-col items-center">
      <SistemHero {...data} />
      <ConsultationSection />
      <ScheduleConsultationSection />
    </main>
  );
}