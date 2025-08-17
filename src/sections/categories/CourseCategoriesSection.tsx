"use client";

import { useCallback } from "react";
import { ChevronLeft, ChevronRight } from "lucide-react";
import { useCategories } from "@/lib/hooks";
import useEmblaCarousel from "embla-carousel-react";
import LazySectionWrapper from "@/components/lazy-section-wrapper";
import CategoryChip from "./_components/CategoryChip";
import EmptySection from "./_components/EmptySection";
import ErrorSection from "./_components/ErrorSection";
import Loading from "./_components/Loading";

const CourseCategoriesSection = () => {
  const { data: categoriesResponse, isLoading, error } = useCategories();
  const categoriesData = categoriesResponse?.data || [];

  const [emblaRef1, emblaApi1] = useEmblaCarousel({
    align: "start",
    loop: false,
    skipSnaps: false,
    dragFree: true,
    containScroll: "trimSnaps",
  });

  const [emblaRef2, emblaApi2] = useEmblaCarousel({
    align: "start",
    loop: false,
    skipSnaps: false,
    dragFree: true,
    containScroll: "trimSnaps",
  });

  const scrollPrev = useCallback(() => {
    if (emblaApi1) {
      emblaApi1.scrollPrev();
    }
    if (emblaApi2) {
      emblaApi2.scrollPrev();
    }
  }, [emblaApi1, emblaApi2]);

  const scrollNext = useCallback(() => {
    if (emblaApi1) {
      emblaApi1.scrollNext();
    }
    if (emblaApi2) {
      emblaApi2.scrollNext();
    }
  }, [emblaApi1, emblaApi2]);

  const currentCategories = categoriesData;

  const firstRow = currentCategories?.slice(
    0,
    Math.ceil(categoriesData?.length / 2)
  );
  const secondRow = currentCategories?.slice(
    Math.ceil(categoriesData?.length / 2),
    categoriesData?.length
  );

  if (isLoading) {
    return (
      <LazySectionWrapper>
        <Loading />
      </LazySectionWrapper>
    );
  }

  if (error) {
    return (
      <LazySectionWrapper>
        <ErrorSection />
      </LazySectionWrapper>
    );
  }

  if (categoriesData?.length === 0) {
    return (
      <LazySectionWrapper>
        <EmptySection />
      </LazySectionWrapper>
    );
  }

  return (
    <LazySectionWrapper>
      <section className="text-white bg-[#00040D] py-8 sm:py-12 md:py-16 px-4 sm:px-6 md:px-8 lg:px-20">
        <div className="relative">
          <div className="absolute top-0 left-0 w-[100px] sm:w-[150px] md:w-[200px] lg:w-[235px] h-full bg-gradient-to-r from-[#00040D] to-[#00040D00] z-10" />

          <div className="flex flex-col sm:flex-row justify-between items-center sm:items-center gap-4 sm:gap-0 mb-6 sm:mb-8 relative z-[11]">
            <button className="text-white hover:text-gray-300 transition-colors text-sm sm:text-base md:text-lg hover:underline flex items-center gap-1 order-2 sm:order-1">
              <ChevronLeft className="w-5 h-5 sm:w-6 sm:h-6 md:w-7 md:h-7 text-white" />
              <span>جميع الدورات</span>
            </button>
            <h2 className="text-2xl sm:text-3xl md:text-4xl lg:text-5xl font-bold text-red-600 flex items-center gap-1 sm:gap-2 order-1 sm:order-2 text-center sm:text-right">
              <span>الدورات</span>
              <span className="text-white">أقسام</span>
            </h2>
          </div>

          <div className="relative">
            <button
              onClick={scrollPrev}
              className="absolute left-2 sm:left-4 md:left-0 top-1/2 -translate-y-1/2 z-10 w-[40px] h-[40px] sm:w-[50px] sm:h-[50px] md:w-[58px] md:h-[58px] bg-[#FFFFFF1A] backdrop-blur-[1px] rounded-full flex items-center justify-center hover:bg-gray-700 transition-colors shadow-lg"
            >
              <ChevronLeft className="w-4 h-4 sm:w-5 sm:h-5 md:w-7 md:h-7 text-white" />
            </button>

            <button
              onClick={scrollNext}
              className="absolute right-2 sm:right-4 md:right-0 top-1/2 -translate-y-1/2 z-10 w-[40px] h-[40px] sm:w-[50px] sm:h-[50px] md:w-[58px] md:h-[58px] bg-[#FFFFFF1A] backdrop-blur-[1px] rounded-full flex items-center justify-center hover:bg-gray-700 transition-colors shadow-lg"
            >
              <ChevronRight className="w-4 h-4 sm:w-5 sm:h-5 md:w-7 md:h-7 text-white" />
            </button>

            <div className="space-y-4 sm:space-y-5 md:space-y-6">
              {/* First row */}
              <div className="overflow-hidden" ref={emblaRef1}>
                <div className="flex gap-2 sm:gap-3 md:gap-4">
                  {firstRow.map((category) => (
                    <CategoryChip key={category.id} category={category} />
                  ))}
                </div>
              </div>

              {/* Second row */}
              <div className="overflow-hidden" ref={emblaRef2}>
                <div className="flex gap-2 sm:gap-3 md:gap-4">
                  {secondRow.map((category) => (
                    <CategoryChip key={category.id} category={category} />
                  ))}
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>
    </LazySectionWrapper>
  );
};

export default CourseCategoriesSection;
