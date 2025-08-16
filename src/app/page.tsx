"use client";
import {
  Header,
  HeroSection,
  BestsellingSection,
  Footer,
  NewCoursesSection,
  FadeCarouselSection,
  CourseCategoriesSection,
  FreeCoursesSection,
  FeedbackCarouselSection,
  SponsorSection,
  StatisticsMap,
  BussniessSection,
  InstructosSection,
  SupportSection,
  FAQ,
} from "@/sections";

export default function Home() {
  return (
    <div className="min-h-screen bg-[#00040D]">
      <Header />

      <HeroSection />
      <main className="max-w-[1961px] mx-auto flex flex-col gap-[80px] bg-[#00040D]">
        <BestsellingSection />
        <NewCoursesSection />
        <FadeCarouselSection />
        <CourseCategoriesSection />
        <FreeCoursesSection />
        <FeedbackCarouselSection />
        <SponsorSection />
        <StatisticsMap />
        <BussniessSection />
        <InstructosSection />
        <SupportSection />
        <FAQ />
      </main>

      <Footer />
    </div>
  );
}
