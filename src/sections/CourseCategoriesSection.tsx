"use client";

import { useCallback } from "react";
import { cn } from "@/lib/utils";
import { ChevronLeft, ChevronRight } from "lucide-react";
import { useCategories } from "@/lib/hooks";
import useEmblaCarousel from "embla-carousel-react";
import { ReactSVG } from "react-svg";
import LazySectionWrapper from "@/components/lazy-section-wrapper";

const CourseCategoriesSection = () => {
  const staticIcons = [
    "/assets/categories-section/art.svg",
    "/assets/categories-section/business.svg",
    "/assets/categories-section/family-and-educational-skills.svg",
    "/assets/categories-section/home.svg",
    "/assets/categories-section/language-and-sciences.svg",
    "/assets/categories-section/self-development.svg",
    "/assets/categories-section/technology.svg",
  ];
  const getRandomIcon = () => {
    return staticIcons[Math.floor(Math.random() * staticIcons.length)];
  };
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
        <section className="text-white bg-[#00040D] py-8 sm:py-12 md:py-16 px-4 sm:px-6 md:px-8 lg:px-16">
          <div className="max-w-7xl mx-auto">
            <div className="flex items-center justify-between mb-8 sm:mb-10 md:mb-12">
              <div className="text-right w-full">
                <h2 className="text-2xl sm:text-3xl md:text-4xl lg:text-5xl font-bold text-red-600 mb-2">
                  أقسام الدورات
                </h2>
              </div>
            </div>
            <div className="flex justify-center items-center h-32 sm:h-48 md:h-64">
              <div className="animate-spin rounded-full h-8 w-8 sm:h-10 sm:w-10 md:h-12 md:w-12 border-b-2 border-red-600"></div>
            </div>
          </div>
        </section>
      </LazySectionWrapper>
    );
  }

  if (error) {
    return (
      <LazySectionWrapper>
        <section className="text-white bg-[#00040D] py-8 sm:py-12 md:py-16 px-4 sm:px-6 md:px-8 lg:px-16">
          <div className="max-w-7xl mx-auto">
            <div className="flex items-center justify-between mb-8 sm:mb-10 md:mb-12">
              <div className="text-right w-full">
                <h2 className="text-2xl sm:text-3xl md:text-4xl lg:text-5xl font-bold text-red-600 mb-2">
                  أقسام الدورات
                </h2>
              </div>
            </div>
            <div className="flex justify-center items-center h-32 sm:h-48 md:h-64">
              <div className="text-center">
                <p className="text-red-400 text-base sm:text-lg mb-3 sm:mb-4">
                  حدث خطأ في تحميل الأقسام
                </p>
                <button
                  onClick={() => window.location.reload()}
                  className="px-3 py-2 sm:px-4 sm:py-2 bg-red-600 hover:bg-red-700 rounded-lg transition-colors text-sm sm:text-base"
                >
                  إعادة المحاولة
                </button>
              </div>
            </div>
          </div>
        </section>
      </LazySectionWrapper>
    );
  }

  if (categoriesData?.length === 0) {
    return (
      <LazySectionWrapper>
        <section className="text-white bg-[#00040D] py-8 sm:py-12 md:py-16 px-4 sm:px-6 md:px-8 lg:px-16">
          <div className="max-w-7xl mx-auto">
            <div className="flex items-center justify-between mb-8 sm:mb-10 md:mb-12">
              <div className="text-right w-full">
                <h2 className="text-2xl sm:text-3xl md:text-4xl lg:text-5xl font-bold text-red-600 mb-2">
                  أقسام الدورات
                </h2>
              </div>
            </div>
            <div className="flex justify-center items-center h-32 sm:h-48 md:h-64">
              <p className="text-gray-400 text-base sm:text-lg">
                لا توجد أقسام متاحة حالياً
              </p>
            </div>
          </div>
        </section>
      </LazySectionWrapper>
    );
  }

  return (
    <LazySectionWrapper>
      <section className="text-white bg-[#00040D] py-8 sm:py-12 md:py-16 px-4 sm:px-6 md:px-8 lg:px-20">
        <div className="relative">
          {/* Responsive gradient overlay */}
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
            {/* Navigation buttons - responsive sizing and positioning */}
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
                    <div className="relative flex-shrink-0" key={category.id}>
                      <button
                        className={cn(
                          "p-[1px] rounded-[10px] sm:rounded-[12px] md:rounded-[14px] bg-gradient-to-b from-[#6DDCFF] via-[#7F60F9] to-[#00040D] shadow-[0_0_10px_rgba(59,130,246,0.3)]",
                          category.title.length > 15
                            ? "min-w-[200px] sm:min-w-[240px] md:min-w-[280px]"
                            : category.title.length > 10
                            ? "min-w-[160px] sm:min-w-[190px] md:min-w-[220px]"
                            : "min-w-[140px] sm:min-w-[160px] md:min-w-[180px]"
                        )}
                      >
                        <div className="bg-[#272A31] rounded-xl sm:rounded-2xl px-3 py-2 sm:px-4 sm:py-2.5 md:px-6 md:py-3 flex items-center gap-2 sm:gap-3 md:gap-4">
                          <span className="text-white font-extrabold text-sm sm:text-lg md:text-xl lg:text-[30.83px] leading-tight">
                            {category.title}
                          </span>
                          <ReactSVG
                            src={getRandomIcon()}
                            className="h-[40px] sm:h-[60px] md:h-[70px] lg:h-[80px] w-auto"
                          />
                        </div>
                      </button>
                    </div>
                  ))}
                </div>
              </div>

              {/* Second row */}
              <div className="overflow-hidden" ref={emblaRef2}>
                <div className="flex gap-2 sm:gap-3 md:gap-4">
                  {secondRow.map((category) => (
                    <div className="relative flex-shrink-0" key={category.id}>
                      <button
                        className={cn(
                          "p-[1px] rounded-[10px] sm:rounded-[12px] md:rounded-[14px] bg-gradient-to-b from-[#6DDCFF] via-[#7F60F9] to-[#00040D] shadow-[0_0_10px_rgba(59,130,246,0.3)]",
                          category.title.length > 15
                            ? "min-w-[200px] sm:min-w-[240px] md:min-w-[280px]"
                            : category.title.length > 10
                            ? "min-w-[160px] sm:min-w-[190px] md:min-w-[220px]"
                            : "min-w-[140px] sm:min-w-[160px] md:min-w-[180px]"
                        )}
                      >
                        <div className="bg-[#272A31] rounded-xl sm:rounded-2xl px-3 py-2 sm:px-4 sm:py-2.5 md:px-6 md:py-3 flex items-center gap-2 sm:gap-3 md:gap-4">
                          <span className="text-white font-extrabold text-sm sm:text-lg md:text-xl lg:text-[30.83px] leading-tight">
                            {category.title}
                          </span>
                          <ReactSVG
                            src={getRandomIcon()}
                            className="h-[40px] sm:h-[60px] md:h-[70px] lg:h-[80px] w-auto"
                          />
                        </div>
                      </button>
                    </div>
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
