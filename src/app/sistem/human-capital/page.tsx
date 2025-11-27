import { Metadata } from "next";
import SistemHero from "@/modules/sistem/sistem-hero";
import ConsultationSection from "@/modules/homepage-module/section/consultation-section";
import ScheduleConsultationSection from "@/modules/homepage-module/section/schedule-consultation-section";
import { sistemDataList } from "@/modules/sistem/sistem-data";

const data = sistemDataList['human-capital'];

export const metadata: Metadata = {
  title: data.metaTitle,
  description: data.metaDescription,
  keywords: ["human capital", "HR system", "recruitment", "timesheet", "employee management", "corvidian"],
  openGraph: {
    title: data.metaTitle,
    description: data.metaDescription,
    type: "website",
  },
};

export default function HumanCapitalPage() {
  return (
    <main className="flex min-h-screen flex-col items-center">
      <SistemHero {...data} />
      <ConsultationSection />
      <ScheduleConsultationSection />
    </main>
  );
}