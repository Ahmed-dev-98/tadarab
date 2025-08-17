"use client";

import React, { useState, useCallback, useRef, useEffect } from "react";
import useEmblaCarousel from "embla-carousel-react";
import { ChevronLeft } from "lucide-react";
import MainCourseCard from "./main-course-card";
import CarouselSkeleton from "@/components/carousel-skeleton";
import { Category } from "@/types/category";
import { Course } from "@/types/course";

const CarouselContainer = ({
  categories = [],
  courses = [],
  title = "",
  subtitle = "",
  onCategoryClick,
  isLoading = false,
  error = null,
  onLoadMore = () => {},
  hasMorePages = true,
}: {
  categories?: Category[];
  courses: Course[];
  title: string;
  subtitle: string;
  isLoading?: boolean;
  onCategoryClick?: (categoryId: number) => void;
  error?: Error | null;
  onLoadMore?: () => void;
  hasMorePages?: boolean;
}) => {
  const [selectedCategory, setSelectedCategory] = useState(0);
  const categoriesRef = useRef<HTMLDivElement>(null);
  const isLoadingMoreRef = useRef(false);

  const [emblaRef, emblaApi] = useEmblaCarousel({
    align: "start",
    loop: false,
    skipSnaps: false,
    dragFree: true,
    containScroll: "trimSnaps",
  });

  useEffect(() => {
    if (!emblaApi) return;

    let timeoutId: NodeJS.Timeout;

    const handleScroll = () => {
      const scrollProgress = emblaApi.scrollProgress();
      if (
        scrollProgress > 0.7 &&
        !isLoadingMoreRef.current &&
        hasMorePages &&
        !isLoading
      ) {
        console.log("drag near end");
        isLoadingMoreRef.current = true;

        clearTimeout(timeoutId);

        timeoutId = setTimeout(() => {
          onLoadMore();
          setTimeout(() => {
            isLoadingMoreRef.current = false;
          }, 1000);
        }, 300);
      }
    };

    emblaApi.on("scroll", handleScroll);

    return () => {
      emblaApi.off("scroll", handleScroll);
      clearTimeout(timeoutId);
    };
  }, [emblaApi, onLoadMore, hasMorePages, isLoading]);

  const scrollPrev = useCallback(() => {
    if (emblaApi) emblaApi.scrollPrev();
  }, [emblaApi]);

  const scrollNext = useCallback(() => {
    if (emblaApi) {
      console.log("clicked");

      const isNearEnd = emblaApi.scrollProgress() > 0.7;
      if (
        isNearEnd &&
        !isLoadingMoreRef.current &&
        hasMorePages &&
        !isLoading
      ) {
        console.log("near end");
        isLoadingMoreRef.current = true;
        onLoadMore();
        setTimeout(() => {
          isLoadingMoreRef.current = false;
        }, 1000);
      }
      emblaApi.scrollNext();
    }
  }, [emblaApi, onLoadMore, hasMorePages, isLoading]);

  const handleCategoryClick = (categoryId: number) => {
    setSelectedCategory(categoryId);
    onCategoryClick?.(categoryId);
  };

  const scrollCategoriesLeft = useCallback(() => {
    if (categoriesRef.current) {
      categoriesRef.current.scrollBy({ left: -200, behavior: "smooth" });
    }
  }, []);

  const scrollCategoriesRight = useCallback(() => {
    if (categoriesRef.current) {
      categoriesRef.current.scrollBy({ left: 200, behavior: "smooth" });
    }
  }, []);

  return (
    <section className="text-white py-8 sm:py-12 md:py-16 px-4 sm:px-6 md:px-[20px] bg-[#00040D]">
      <div className="w-full mx-auto">
        <div className="flex flex-col sm:flex-row sm:justify-between sm:items-start gap-4 sm:gap-0 mb-6 sm:mb-8">
          <button className="text-white hover:text-gray-300 transition-colors text-lg sm:text-xl md:text-[24px] font-bold hover:underline flex items-center gap-1 order-2 sm:order-1">
            <ChevronLeft className="w-5 h-5 sm:w-6 sm:h-6 md:w-7 md:h-7 text-white" />
            <span>المزيد</span>
          </button>
          <h2 className="text-2xl sm:text-3xl md:text-4xl lg:text-5xl font-bold text-red-600 flex flex-col sm:flex-row sm:items-center gap-1 sm:gap-2 order-1 sm:order-2 text-center sm:text-right">
            <span>{title}</span>
            <span className="text-white">{subtitle}</span>
          </h2>
        </div>

        {categories.length > 0 && (
          <div className="relative mb-8 sm:mb-10 md:mb-12">
            <div className="flex items-center gap-2 sm:gap-3 md:gap-4">
              <button
                onClick={scrollCategoriesLeft}
                className="flex-shrink-0 w-[40px] h-[40px] sm:w-[50px] sm:h-[50px] md:w-[60px] md:h-[60px] bg-[#FFFFFF1A] py-[2px] px-[6px] rounded-full flex items-center justify-center hover:bg-gray-700 transition-colors nav-button"
              >
                <ChevronLeft className="w-4 h-4 sm:w-5 sm:h-5 md:w-7 md:h-7 text-white" />
              </button>

              <div
                ref={categoriesRef}
                className="flex items-center gap-2 sm:gap-3 md:gap-4 overflow-x-auto scrollbar-hide flex-1"
              >
                {categories.map((category) => (
                  <button
                    key={category.id}
                    onClick={() => handleCategoryClick(category.id)}
                    className={`flex-shrink-0 h-[36px] sm:h-[38px] md:h-[40px] py-2 sm:py-2.5 md:py-3 rounded-[12px] flex justify-center items-center px-3 sm:px-3.5 md:px-4 border border-[#333A47] text-xs sm:text-sm md:text-[14px] font-bold transition-all category-button ${
                      category.id === selectedCategory
                        ? "bg-white text-black shadow-lg"
                        : "bg-[#191D2500] text-white hover:bg-white hover:text-black"
                    }`}
                  >
                    {category.title}
                  </button>
                ))}
              </div>

              <button
                onClick={scrollCategoriesRight}
                className="flex-shrink-0 w-[40px] h-[40px] sm:w-[50px] sm:h-[50px] md:w-[60px] md:h-[60px] bg-[#FFFFFF1A] py-[2px] px-[6px] rounded-full flex items-center justify-center hover:bg-gray-700 transition-colors nav-button"
              >
                <ChevronLeft className="w-4 h-4 sm:w-5 sm:h-5 md:w-7 md:h-7 text-white rotate-180" />
              </button>
            </div>
          </div>
        )}

        <div className="relative">
          {courses.length > 10 && (
            <button
              onClick={scrollPrev}
              className="absolute left-0 top-1/2 -translate-y-1/2 z-10 w-[40px] h-[40px] sm:w-[50px] sm:h-[50px] md:w-[60px] md:h-[60px] bg-[#FFFFFF1A] backdrop-blur-[1px] rounded-full flex items-center justify-center hover:bg-gray-700 transition-colors shadow-lg nav-button"
            >
              <ChevronLeft className="w-4 h-4 sm:w-5 sm:h-5 md:w-7 md:h-7 text-white" />
            </button>
          )}

          <div className="overflow-hidden relative" ref={emblaRef}>
            <div className="flex gap-3 sm:gap-4 md:gap-6 relative">
              <div className="absolute top-0 left-0 w-[100px] sm:w-[150px] md:w-[200px] h-full bg-gradient-to-r from-[#00040D] to-[#00040D00] z-10" />
              {courses.length > 0
                ? courses.map((course) => (
                    <MainCourseCard key={course.id} course={course} />
                  ))
                : isLoading &&
                  courses.length === 0 &&
                  Array.from({ length: 4 }).map((_, index) => (
                    <CarouselSkeleton key={`skeleton-${index}`} />
                  ))}
            </div>
          </div>

          {error && (
            <div className="flex justify-center items-center py-6 sm:py-8">
              <p className="text-red-500 text-center text-sm sm:text-base px-4">
                حدث خطأ في تحميل البيانات. يرجى المحاولة مرة أخرى.
              </p>
            </div>
          )}

          <button
            onClick={scrollNext}
            className="absolute right-0 top-1/2 -translate-y-1/2 z-10 w-[40px] h-[40px] sm:w-[50px] sm:h-[50px] md:w-[60px] md:h-[60px] bg-[#FFFFFF1A] backdrop-blur-[1px] rounded-full flex items-center justify-center hover:bg-gray-700 transition-colors shadow-lg nav-button"
          >
            <ChevronLeft className="w-4 h-4 sm:w-5 sm:h-5 md:w-7 md:h-7 text-white rotate-180" />
          </button>
        </div>
      </div>
    </section>
  );
};

export default CarouselContainer;
