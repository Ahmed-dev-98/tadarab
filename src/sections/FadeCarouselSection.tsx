"use client";

import { useState } from "react";
import { cn } from "@/lib/utils";
import { useQuery } from "@tanstack/react-query";
import { mostPopularApi } from "@/lib/api";
import Image from "next/image";

const FadeCarouselSection = () => {
  const [currentSlide, setCurrentSlide] = useState(0);
  const [isTransitioning, setIsTransitioning] = useState(false);
  const { data: mostPopularCourses } = useQuery({
    queryKey: ["most-popular-courses"],
    queryFn: () =>
      mostPopularApi.getMostPopularCourses({
        page: 1,
        per_page: 10,
      }),
  });
  console.log(mostPopularCourses?.data);

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

    const baseWidth = 80;
    const minWidth = 40;
    const dynamicWidth = minWidth + (baseWidth - minWidth) * finalScale;

    return {
      transform: `scale(${finalScale})`,
      opacity: finalOpacity,
      width: `${dynamicWidth}px`,
    };
  };

  const currentSlideData = mostPopularCourses?.data[currentSlide];

  return (
    <section className="text-white  bg-[#00040D] px-[20px]">
      <h2 className="text-4xl md:text-5xl font-bold text-red-600 flex items-end justify-end gap-2 mb-10">
        <span>تدريبية قادمة</span>
        <span className="text-white">دورات و ورش</span>
      </h2>
      <div className="relative w-full h-screen bg-[#00040D] overflow-hidden">
        <div className="relative h-full flex items-center justify-between px-8 lg:px-5">
          <div className="flex-shrink-0 w-[50%]">
            <div
              className={cn(
                "transition-all duration-600 ease-in-out",
                isTransitioning ? "opacity-0 scale-95" : "opacity-100 scale-100"
              )}
            >
              <div className="relative w-full h-[500px]">
                <div className="absolute top-0 h-[98px] w-full bg-gradient-to-b from-[#00040D] to-[#00040D00] z-10" />
                <div className="absolute bottom-0 h-[98px] w-full bg-gradient-to-t from-[#00040D] to-[#00040D00] z-10" />
                <div className="absolute left-0 w-[100px] h-full bg-gradient-to-r from-[#00040D] to-[#00040D00] z-10" />
                <div className="absolute right-0 w-[100px] h-full bg-gradient-to-l from-[#00040D] to-[#00040D00] z-10" />

                <Image
                  src={currentSlideData?.image_url || "/placeholder.svg"}
                  alt={currentSlideData?.title || "course image"}
                  className="w-full h-full object-cover"
                  width={500}
                  height={500}
                />
                <div className="absolute inset-0 bg-gradient-to-t from-black/20 to-transparent " />
              </div>
            </div>
          </div>{" "}
          <div className="flex-1 text-right">
            <div
              className={cn(
                "transition-all duration-600 ease-in-out flex flex-col gap-6",
                isTransitioning
                  ? "opacity-0 translate-y-8"
                  : "opacity-100 translate-y-0"
              )}
            >
              {currentSlideData?.labels?.[1] && (
                <div className=" bg-white w-fit ms-auto py-2 px-3 rounded-[8px]">
                  <p className="text-black text-[18px] leading-[16px] font-bold">
                    {currentSlideData?.labels?.[1]?.ar}
                  </p>
                </div>
              )}
              <h1 className="text-white text-[48px] leading-[72px]  font-bold">
                {currentSlideData?.title}
              </h1>
              <div className="h-[3px] w-[20px] bg-[#F2F2F2] ms-auto mt-[-22px]" />
              <p className="text-gray-300 text-[30px] font-normal">
                {currentSlideData?.tutor?.name}
              </p>
            </div>
          </div>
        </div>

        <div className="absolute bottom-0 left-1/2 transform -translate-x-1/2 z-20">
          <div className="flex">
            {mostPopularCourses?.data.map((_, index) => (
              <button
                key={index}
                onClick={() => handleDotClick(index)}
                className={cn(
                  "transition-all duration-300 ease-in-out h-[5px] rounded-[4px]",
                  "hover:scale-110 bg-white/40 hover:bg-white",
                  index === currentSlide ? "bg-white" : "bg-[#FFFFFF33]"
                )}
                style={getDotStyles(index)}
              />
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};

export default FadeCarouselSection;
