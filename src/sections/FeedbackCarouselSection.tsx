"use client";

import React, { useCallback } from "react";
import useEmblaCarousel from "embla-carousel-react";
import { ChevronLeft } from "lucide-react";
import FeedbackCard from "@/components/feedback-card";

const FeedbackCarouselSection = () => {
  const mockFeedbackData = [
    {
      id: 1,
      isVideo: false,
      quote:
        "دورة وافية وشاملة تعلمك على روتين يساعدك على إبقاء بيتك نظيف عن طريق خطوات بسيطة قد تغير نمط حياتك داخل المنزل، وتحتوي على جداول تنظم أعمالك المنزلية",
      authorName: "فاطمة",
      courseTitle: "دورة أساسيات التنظيف في المنزل",
      fullName: "فاطمة القلاف",
    },
    {
      id: 2,
      isVideo: true,
      videoThumbnail: "/assets/feedback-section/img-2.jpg",
      videoTitle: "دورة أسراري في تربية الأبناء",
      instructorName: "عفاف الجاسم",
    },
    {
      id: 3,
      isVideo: false,
      quote:
        "دورة ممتازة ساعدتني في تطوير مهاراتي في مجال التكنولوجيا، المحتوى منظم ومفيد جداً، أنصح الجميع بالتسجيل فيها",
      authorName: "أحمد",
      courseTitle: "مقدمة في البرمجة",
      fullName: "أحمد محمد",
    },
    {
      id: 4,
      isVideo: true,
      videoThumbnail: "/assets/feedback-section/img-1.jpg",
      videoTitle: "أسرار النجاح في العمل",
      instructorName: "سارة أحمد",
    },
    {
      id: 5,
      isVideo: false,
      quote:
        "محتوى رائع ومفيد جداً، الدورة ساعدتني في فهم أساسيات التسويق الرقمي وتطبيقها في عملي",
      authorName: "نورا",
      courseTitle: "التسويق الرقمي للمبتدئين",
      fullName: "نورا السعيد",
    },
    {
      id: 6,
      isVideo: true,
      videoThumbnail: "/assets/feedback-section/img-2.jpg",
      videoTitle: "فن إدارة الوقت",
      instructorName: "محمد علي",
    },
  ];

  const [emblaRef, emblaApi] = useEmblaCarousel({
    align: "start",
    loop: false,
    skipSnaps: false,
    dragFree: true,
    containScroll: "trimSnaps",
  });

  const scrollPrev = useCallback(() => {
    if (emblaApi) emblaApi.scrollPrev();
  }, [emblaApi]);

  const scrollNext = useCallback(() => {
    if (emblaApi) emblaApi.scrollNext();
  }, [emblaApi]);

  return (
    <section className="text-white py-16 bg-[#00040D] px-[20px]">
      <div className="w-full mx-auto ">
        <div className="flex justify-between items-start mb-12 ">
          <button className="text-white hover:text-gray-300 transition-colors text-[24px] font-bold hover:underline flex items-center gap-1">
            <ChevronLeft className="w-7 h-7 text-white" />
            <span>المزيد</span>
          </button>
          <h2 className="text-4xl md:text-5xl font-bold text-red-600 flex items-center gap-2">
            <span>في تدرب</span>
            <span className="text-white">أراء المتعلمين</span>
          </h2>
        </div>

        <div className="relative">
          <button
            onClick={scrollPrev}
            className="absolute left-0 top-1/2 -translate-y-1/2 z-10 w-[60px] h-[60px] bg-[#FFFFFF1A] backdrop-blur-[1px] rounded-full flex items-center justify-center hover:bg-gray-700 transition-colors shadow-lg nav-button"
          >
            <ChevronLeft className="w-7 h-7 text-white" />
          </button>

          <div className="overflow-hidden" ref={emblaRef}>
            <div className="flex gap-6">
              {mockFeedbackData.map((item) => (
                <div key={item.id} className="flex-shrink-0">
                  <FeedbackCard
                    isVideo={item.isVideo}
                    quote={item.quote}
                    authorName={item.authorName}
                    courseTitle={item.courseTitle}
                    fullName={item.fullName}
                    videoThumbnail={item.videoThumbnail}
                    videoTitle={item.videoTitle}
                    instructorName={item.instructorName}
                  />
                </div>
              ))}
            </div>
          </div>

          <button
            onClick={scrollNext}
            className="absolute right-0 top-1/2 -translate-y-1/2 z-10 w-[60px] h-[60px] bg-[#FFFFFF1A] backdrop-blur-[1px] rounded-full flex items-center justify-center hover:bg-gray-700 transition-colors shadow-lg nav-button"
          >
            <ChevronLeft className="w-7 h-7 text-white rotate-180" />
          </button>
        </div>
      </div>
    </section>
  );
};

export default FeedbackCarouselSection;
