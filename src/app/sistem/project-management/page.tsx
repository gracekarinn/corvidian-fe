import { Metadata } from "next";
import SistemHero from "@/modules/sistem/sistem-hero";
import ConsultationSection from "@/modules/homepage-module/section/consultation-section";
import ScheduleConsultationSection from "@/modules/homepage-module/section/schedule-consultation-section";
import { sistemDataList } from "@/modules/sistem/sistem-data";

const data = sistemDataList['project-management'];

export const metadata: Metadata = {
  title: data.metaTitle,
  description: data.metaDescription,
  keywords: ["project management", "project tracking", "task management", "team collaboration", "project planning", "corvidian"],
  openGraph: {
    title: data.metaTitle,
    description: data.metaDescription,
    type: "website",
  },
};

export default function ProjectManagementPage() {
  return (
    <main className="flex min-h-screen flex-col items-center">
      <SistemHero {...data} />
      <ConsultationSection />
      <ScheduleConsultationSection />
    </main>
  );
}