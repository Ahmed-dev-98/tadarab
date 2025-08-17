"use client";
import LazySectionWrapper from "@/components/lazy-section-wrapper";
import { Header, HeroSection, BestsellingSection, Footer } from "@/sections";
import {
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
} from "@/lib/dynamic-imports";

export default function Home() {
  return (
    <div className="min-h-screen bg-[#00040D]">
      <Header />

      <HeroSection />
      <main className="max-w-[1961px] mx-auto flex flex-col gap-[80px] bg-[#00040D]">
        <BestsellingSection />

        <LazySectionWrapper>
          <NewCoursesSection />
        </LazySectionWrapper>

        <LazySectionWrapper>
          <FadeCarouselSection />
        </LazySectionWrapper>

        <LazySectionWrapper>
          <CourseCategoriesSection />
        </LazySectionWrapper>

        <LazySectionWrapper>
          <FreeCoursesSection />
        </LazySectionWrapper>

        <LazySectionWrapper>
          <FeedbackCarouselSection />
        </LazySectionWrapper>

        <LazySectionWrapper>
          <SponsorSection />
        </LazySectionWrapper>

        <LazySectionWrapper>
          <StatisticsMap />
        </LazySectionWrapper>

        <LazySectionWrapper>
          <BussniessSection />
        </LazySectionWrapper>

        <LazySectionWrapper>
          <InstructosSection />
        </LazySectionWrapper>

        <LazySectionWrapper>
          <SupportSection />
        </LazySectionWrapper>

        <LazySectionWrapper>
          <FAQ />
        </LazySectionWrapper>
      </main>

      <Footer />
    </div>
  );
}
