import React, { useRef } from "react";
import type { Swiper as SwiperType } from "swiper";
import "swiper/css";
import "swiper/css/effect-coverflow";
import "swiper/css/navigation";
import { Tutor } from "@/types/tutor";
import { Swiper, SwiperSlide } from "swiper/react";
import { ChevronLeft, ChevronRight } from "lucide-react";

import "swiper/css";
import "swiper/css/effect-coverflow";
import "swiper/css/navigation";
import Image from "next/image";

import { EffectCoverflow, Pagination, Navigation } from "swiper/modules";
interface InstructorsCarouselProps {
  instructors: Tutor[];
  isLoading: boolean;
  error: Error | null;
  hasMorePages: boolean;
  onLoadMore?: () => void;
}

const InstructorsCarousel: React.FC<InstructorsCarouselProps> = ({
  instructors,
  isLoading,
  error,
  hasMorePages,
  onLoadMore,
}) => {
  const swiperRef = useRef<SwiperType | null>(null);
  const isLoadingMoreRef = useRef(false);
  const prevButtonRef = useRef<HTMLButtonElement>(null);
  const nextButtonRef = useRef<HTMLButtonElement>(null);

  const handlePrev = () => {
    if (swiperRef.current) {
      swiperRef.current.slidePrev();
    }
  };

  const handleNext = () => {
    if (swiperRef.current) {
      const swiper = swiperRef.current;

      const totalSlides = swiper.slides.length;
      const currentSlide = swiper.realIndex;
      const progress = currentSlide / totalSlides;

      if (
        progress > 0.7 &&
        !isLoadingMoreRef.current &&
        hasMorePages &&
        !isLoading
      ) {
        console.log("instructors carousel near end - next button");
        isLoadingMoreRef.current = true;
        onLoadMore?.();
        setTimeout(() => {
          isLoadingMoreRef.current = false;
        }, 1000);
      }

      swiper.slideNext();
    }
  };

  const onSwiper = (swiper: SwiperType) => {
    swiperRef.current = swiper;

    if (prevButtonRef.current && nextButtonRef.current) {
      swiper.navigation.init();
      swiper.navigation.update();
    }
  };

  const onSlideChange = (swiper: SwiperType) => {
    const totalSlides = swiper.slides.length;
    const currentSlide = swiper.realIndex;
    const progress = currentSlide / totalSlides;

    if (
      progress > 0.7 &&
      !isLoadingMoreRef.current &&
      hasMorePages &&
      !isLoading
    ) {
      console.log("instructors carousel near end - drag/swipe");
      isLoadingMoreRef.current = true;
      onLoadMore?.();
      setTimeout(() => {
        isLoadingMoreRef.current = false;
      }, 1000);
    }
  };

  const onReachEnd = () => {
    if (!isLoadingMoreRef.current && hasMorePages && !isLoading) {
      console.log("instructors carousel reached end - drag/swipe");
      isLoadingMoreRef.current = true;
      onLoadMore?.();
      setTimeout(() => {
        isLoadingMoreRef.current = false;
      }, 1000);
    }
  };

  return (
    <div className="w-full overflow-hidden mx-auto px-4 relative">
      <Swiper
        effect={"coverflow"}
        grabCursor={true}
        centeredSlides={true}
        loop={true}
        slidesPerView={"auto"}
        coverflowEffect={{
          rotate: 0,
          stretch: 0,
          depth: 100,
          modifier: 2.5,
          slideShadows: true,
        }}
        navigation={{
          nextEl: nextButtonRef.current,
          prevEl: prevButtonRef.current,
        }}
        modules={[EffectCoverflow, Pagination, Navigation]}
        onSwiper={onSwiper}
        onSlideChange={onSlideChange}
        onReachEnd={onReachEnd}
      >
        {isLoading &&
          Array.from({ length: 7 }).map((_, index) => (
            <SwiperSlide
              key={`skeleton-${index}`}
              className="trainer-slide h-[400px] w-[273px]"
            >
              <div className="w-full h-full bg-[#1b1f2a] rounded-[15.6px] overflow-hidden shadow-2xl">
                <div className="w-full h-full bg-gray-300 rounded-[15.6px]"></div>
              </div>
            </SwiperSlide>
          ))}

        {instructors.map((instructor) => (
          <SwiperSlide
            key={instructor.id}
            style={{
              width: "273px",
              height: "400px",
              margin: "0 10px",
            }}
          >
            <div className="relative w-full h-full bg-[#1b1f2a] rounded-[15.6px] overflow-hidden shadow-2xl">
              <div className="w-full h-full overflow-hidden">
                <Image
                  src={
                    instructor.avatar_url ||
                    "/assets/bussniess-section/tadarab-red.svg"
                  }
                  alt={instructor.name}
                  width={273}
                  height={400}
                  className="w-full h-full object-cover"
                />
              </div>
              <div className="bg-gradient-to-b from-[#13141E00] to-[#13141E] absolute bottom-0 left-0 right-0 h-[273px] z-10" />
              <div className="p-6 text-right absolute bottom-0 left-0 right-0 z-20">
                <h3 className="text-xl font-medium text-white mb-2 font-almarai">
                  {instructor.name}
                </h3>
                <p className="text-sm text-gray-300 mb-4 font-almarai">
                  {instructor.title}
                </p>
              </div>
            </div>
          </SwiperSlide>
        ))}

        {isLoading &&
          Array.from({ length: 3 }).map((_, index) => (
            <SwiperSlide
              key={`loading-skeleton-${index}`}
              className="trainer-slide h-[400px] w-[273px]"
            >
              <div className="w-full h-full bg-[#1b1f2a] rounded-[15.6px] overflow-hidden shadow-2xl">
                <div className="w-full h-full bg-gray-300 rounded-[15.6px]"></div>
              </div>
            </SwiperSlide>
          ))}
      </Swiper>

      {isLoading && (
        <div className="flex justify-center items-center py-8">
          <div className="animate-spin rounded-full h-8 w-8 border-b-2 border-red-600"></div>
        </div>
      )}

      {error && (
        <div className="flex justify-center items-center py-8">
          <p className="text-red-500 text-center">
            حدث خطأ في تحميل البيانات. يرجى المحاولة مرة أخرى.
          </p>
        </div>
      )}

      <button
        ref={prevButtonRef}
        onClick={handlePrev}
        type="button"
        className="absolute top-1/2 left-4 z-10 flex h-12 w-12 -translate-y-1/2 items-center justify-center rounded-full bg-white/10 text-white backdrop-blur-sm transition-all hover:scale-110 hover:bg-white/20"
      >
        <ChevronLeft className="w-6 h-6" />
      </button>
      <button
        ref={nextButtonRef}
        onClick={handleNext}
        type="button"
        className="absolute top-1/2 right-4 z-10 flex h-12 w-12 -translate-y-1/2 items-center justify-center rounded-full bg-white/10 text-white backdrop-blur-sm transition-all hover:scale-110 hover:bg-white/20"
      >
        <ChevronRight className="w-6 h-6" />
      </button>
    </div>
  );
};

export default InstructorsCarousel;
