"use client";

import { useState } from "react";
import { cn } from "@/lib/utils";
import { useLazyQuery } from "@/lib/hooks";
import { mostPopularApi } from "@/lib/api";
import Image from "next/image";
import { CoursesResponse } from "@/lib/api/courses";
import { Course } from "@/types/course";

// Skeleton component for the carousel
const CarouselSkeleton = () => (
  <div className="relative w-full min-h-[400px] sm:min-h-[500px] md:min-h-[600px] lg:h-screen bg-[#00040D] overflow-hidden">
    <div className="relative h-full flex flex-col lg:flex-row items-center justify-between px-4 sm:px-6 md:px-8 lg:px-5 gap-6 lg:gap-0">
      {/* Image Section Skeleton */}
      <div className="flex-shrink-0 w-full lg:w-[50%] order-2 lg:order-1">
        <div className="relative w-full h-[300px] sm:h-[400px] md:h-[450px] lg:h-[500px]">
          <div className="absolute top-0 h-[50px] sm:h-[70px] md:h-[80px] lg:h-[98px] w-full bg-gradient-to-b from-[#00040D] to-[#00040D00] z-10" />
          <div className="absolute bottom-0 h-[50px] sm:h-[70px] md:h-[80px] lg:h-[98px] w-full bg-gradient-to-t from-[#00040D] to-[#00040D00] z-10" />
          <div className="absolute left-0 w-[50px] sm:w-[70px] md:w-[80px] lg:w-[100px] h-full bg-gradient-to-r from-[#00040D] to-[#00040D00] z-10" />
          <div className="absolute right-0 w-[50px] sm:w-[70px] md:w-[80px] lg:w-[100px] h-full bg-gradient-to-l from-[#00040D] to-[#00040D00] z-10" />

          <div className="w-full h-full bg-gradient-to-br from-gray-700 via-gray-600 to-gray-700 animate-pulse" />
          <div className="absolute inset-0 bg-gradient-to-t from-black/20 to-transparent" />
        </div>
      </div>

      <div className="flex-1 text-center lg:text-right order-1 lg:order-2 w-full lg:w-auto">
        <div className="flex flex-col gap-3 sm:gap-4 md:gap-5 lg:gap-6">
          <div className="bg-gray-700 w-24 h-8 mx-auto lg:ms-auto rounded-[8px] animate-pulse" />

          <div className="space-y-2">
            <div className="h-8 bg-gray-700 rounded animate-pulse w-3/4 mx-auto lg:ms-auto" />
            <div className="h-8 bg-gray-700 rounded animate-pulse w-full mx-auto lg:ms-auto" />
            <div className="h-8 bg-gray-700 rounded animate-pulse w-2/3 mx-auto lg:ms-auto" />
          </div>

          <div className="h-[2px] sm:h-[2.5px] md:h-[3px] w-[15px] sm:w-[18px] md:w-[20px] bg-gray-600 ms-auto mt-[-8px] sm:mt-[-12px] md:mt-[-16px] lg:mt-[-22px]" />

          <div className="h-6 bg-gray-700 rounded animate-pulse w-32 mx-auto lg:ms-auto" />
        </div>
      </div>
    </div>

    <div className="absolute bottom-4 sm:bottom-6 md:bottom-8 lg:bottom-0 left-1/2 transform -translate-x-1/2 z-20">
      <div className="flex gap-1 sm:gap-1.5 md:gap-2">
        {Array.from({ length: 5 }).map((_, index) => (
          <div
            key={index}
            className={cn(
              "h-[4px] sm:h-[4.5px] md:h-[5px] rounded-[3px] sm:rounded-[4px] bg-gray-600 animate-pulse",
              index === 0 ? "w-20" : "w-8"
            )}
          />
        ))}
      </div>
    </div>
  </div>
);

const FadeCarouselSection = () => {
  const [currentSlide, setCurrentSlide] = useState(0);
  const [isTransitioning, setIsTransitioning] = useState(false);

  const {
    data: mostPopularCourses,
    ref,
    isLoading,
  } = useLazyQuery<CoursesResponse, Error>({
    queryKey: ["most-popular-courses"],
    queryFn: () =>
      mostPopularApi.getMostPopularCourses({
        page: 1,
        per_page: 10,
      }),
  });

  const handleDotClick = (index: number) => {
    if (index === currentSlide || isTransitioning) return;

    setIsTransitioning(true);

    setTimeout(() => {
      setCurrentSlide(index);
      setTimeout(() => {
        setIsTransitioning(false);
      }, 300);
    }, 300);
  };

  const getDotStyles = (index: number) => {
    const totalDots = mostPopularCourses?.data.length || 0;
    const centerIndex = (totalDots - 1) / 2;
    const distanceFromCenter = Math.abs(index - centerIndex);
    const maxDistance = Math.floor(totalDots / 2);

    const normalizedDistance = distanceFromCenter / maxDistance;
    const scale = 1 - normalizedDistance * 0.6;
    const opacity = 1 - normalizedDistance * 0.7;

    const isActive = index === currentSlide;
    const finalScale = isActive ? 1 : scale;
    const finalOpacity = isActive ? 1 : opacity;

    const baseWidth =
      window.innerWidth < 768 ? 60 : window.innerWidth < 1024 ? 70 : 80;
    const minWidth =
      window.innerWidth < 768 ? 30 : window.innerWidth < 1024 ? 35 : 40;
    const dynamicWidth = minWidth + (baseWidth - minWidth) * finalScale;

    return {
      transform: `scale(${finalScale})`,
      opacity: finalOpacity,
      width: `${dynamicWidth}px`,
    };
  };

  const currentSlideData = mostPopularCourses?.data[currentSlide];

  return (
    <section
      ref={ref}
      className="text-white bg-[#00040D] px-4 sm:px-6 md:px-8 lg:px-20"
    >
      <h2 className="text-2xl sm:text-3xl md:text-4xl lg:text-5xl font-bold text-red-600 flex flex-col sm:flex-row items-center sm:items-end justify-start sm:justify-end gap-1 sm:gap-2 mb-6 sm:mb-8 md:mb-10">
        <span className="order-2 sm:order-1">تدريبية قادمة</span>
        <span className="text-white order-1 sm:order-2">دورات و ورش</span>
      </h2>

      {isLoading || !mostPopularCourses?.data ? (
        <CarouselSkeleton />
      ) : (
        <div className="relative w-full min-h-[400px] sm:min-h-[500px] md:min-h-[600px] lg:h-screen bg-[#00040D] overflow-hidden">
          <div className="relative h-full flex flex-col lg:flex-row items-center justify-between px-4 sm:px-6 md:px-8 lg:px-5 gap-6 lg:gap-0">
            <div className="flex-shrink-0 w-full lg:w-[50%] order-2 lg:order-1">
              <div
                className={cn(
                  "transition-all duration-600 ease-in-out",
                  isTransitioning
                    ? "opacity-0 scale-95"
                    : "opacity-100 scale-100"
                )}
              >
                <div className="relative w-full h-[300px] sm:h-[400px] md:h-[450px] lg:h-[500px]">
                  <div className="absolute top-0 h-[50px] sm:h-[70px] md:h-[80px] lg:h-[98px] w-full bg-gradient-to-b from-[#00040D] to-[#00040D00] z-10" />
                  <div className="absolute bottom-0 h-[50px] sm:h-[70px] md:h-[80px] lg:h-[98px] w-full bg-gradient-to-t from-[#00040D] to-[#00040D00] z-10" />
                  <div className="absolute left-0 w-[50px] sm:w-[70px] md:w-[80px] lg:w-[100px] h-full bg-gradient-to-r from-[#00040D] to-[#00040D00] z-10" />
                  <div className="absolute right-0 w-[50px] sm:w-[70px] md:w-[80px] lg:w-[100px] h-full bg-gradient-to-l from-[#00040D] to-[#00040D00] z-10" />

                  <Image
                    src={
                      currentSlideData?.image_url ||
                      "/assets/feedback-section/img-1.jpg"
                    }
                    alt={currentSlideData?.title || "course image"}
                    className="w-full h-full object-cover"
                    width={500}
                    height={500}
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-black/20 to-transparent" />
                </div>
              </div>
            </div>

            {/* Text Content Section */}
            <div className="flex-1 text-center lg:text-right order-1 lg:order-2 w-full lg:w-auto">
              <div
                className={cn(
                  "transition-all duration-600 ease-in-out flex flex-col gap-3 sm:gap-4 md:gap-5 lg:gap-6",
                  isTransitioning
                    ? "opacity-0 translate-y-8"
                    : "opacity-100 translate-y-0"
                )}
              >
                {currentSlideData?.labels?.[1] && (
                  <div className="bg-white w-fit mx-auto lg:ms-auto py-1.5 sm:py-2 px-2 sm:px-3 rounded-[8px]">
                    <p className="text-black text-sm sm:text-base md:text-lg lg:text-[18px] leading-tight font-bold">
                      {currentSlideData?.labels?.[1]?.ar}
                    </p>
                  </div>
                )}

                <h1 className="text-white text-center lg:text-right text-xl sm:text-2xl md:text-3xl lg:text-4xl xl:text-[48px] leading-tight sm:leading-snug md:leading-normal lg:leading-[60px] xl:leading-[72px] font-bold">
                  {currentSlideData?.title}
                </h1>

                <div className="h-[2px] sm:h-[2.5px] md:h-[3px] w-[15px] sm:w-[18px] md:w-[20px] bg-[#F2F2F2] ms-auto mt-[-8px] sm:mt-[-12px] md:mt-[-16px] lg:mt-[-22px]" />

                <p className="text-gray-300 text-base sm:text-lg md:text-xl lg:text-2xl xl:text-[30px] font-normal">
                  {currentSlideData?.tutor?.name}
                </p>
              </div>
            </div>
          </div>

          {/* Navigation Dots */}
          <div className="absolute bottom-4 sm:bottom-6 md:bottom-8 lg:bottom-0 left-1/2 transform -translate-x-1/2 z-20">
            <div className="flex gap-1 sm:gap-1.5 md:gap-2">
              {mostPopularCourses?.data.map((_: Course, index: number) => (
                <button
                  key={index}
                  onClick={() => handleDotClick(index)}
                  className={cn(
                    "transition-all duration-300 ease-in-out h-[4px] sm:h-[4.5px] md:h-[5px] rounded-[3px] sm:rounded-[4px]",
                    "hover:scale-110 bg-white/40 hover:bg-white",
                    index === currentSlide ? "bg-white" : "bg-[#FFFFFF33]"
                  )}
                  style={getDotStyles(index)}
                />
              ))}
            </div>
          </div>
        </div>
      )}
    </section>
  );
};

export default FadeCarouselSection;
