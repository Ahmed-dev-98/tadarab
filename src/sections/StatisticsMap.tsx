import React, { useState, useEffect, useRef } from "react";
import Image from "next/image";

const StatisticsMap = () => {
  const [counts, setCounts] = useState({
    years: 0,
    experts: 0,
    courses: 0,
    hours: 0,
  });

  const [hasAnimated, setHasAnimated] = useState(false);
  const componentRef = useRef<HTMLDivElement>(null);

  const targetCounts = {
    years: 10,
    experts: 600,
    courses: 1100,
    hours: 4000,
  };

  useEffect(() => {
    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting && !hasAnimated) {
            setHasAnimated(true);
            const startTime = Date.now();
            const duration = 2000;

            const updateCounts = () => {
              const currentTime = Date.now();
              const elapsed = currentTime - startTime;
              const progress = Math.min(elapsed / duration, 1);

              const easeOutQuart = 1 - Math.pow(1 - progress, 4);

              setCounts({
                years: Math.floor(targetCounts.years * easeOutQuart),
                experts: Math.floor(targetCounts.experts * easeOutQuart),
                courses: Math.floor(targetCounts.courses * easeOutQuart),
                hours: Math.floor(targetCounts.hours * easeOutQuart),
              });

              if (progress < 1) {
                requestAnimationFrame(updateCounts);
              } else {
                setCounts(targetCounts);
              }
            };

            requestAnimationFrame(updateCounts);
          }
        });
      },
      {
        threshold: 0.3,
        rootMargin: "0px 0px -100px 0px",
      }
    );

    if (componentRef.current) {
      observer.observe(componentRef.current);
    }

    return () => {
      if (componentRef.current) {
        observer.unobserve(componentRef.current);
      }
    };
  }, [hasAnimated]);

  return (
    <div
      className="w-[95%] sm:w-[92%] md:w-[90%] mx-auto rounded-[12px] sm:rounded-[16px] md:rounded-[20px] overflow-hidden"
      ref={componentRef}
    >
      <div className="w-full h-[300px] sm:h-[400px] md:h-[450px] lg:h-[500px] bg-cover bg-center bg-no-repeat relative rounded-[12px] sm:rounded-[16px] md:rounded-[20px]">
        <Image
          src="/assets/statistics/map.png"
          alt="statistics map"
          className="w-full h-full object-cover"
          width={1920}
          height={500}
        />

        <div className="absolute inset-0 flex items-center justify-center px-4 sm:px-6 md:px-8">
          <div className="text-center text-white w-full">
            <h2 className="text-xl sm:text-2xl md:text-3xl lg:text-[40px] font-extrabold mb-4 sm:mb-5 md:mb-6 leading-tight">
              أكثر من
            </h2>

            <div className="mb-4 sm:mb-5 md:mb-6 flex justify-center">
              <h1 className="text-2xl sm:text-3xl md:text-4xl lg:text-[60px] font-extrabold text-[#BE1622] leading-tight">
                300,000 متعلم
              </h1>
            </div>

            <p className="text-base sm:text-lg md:text-2xl lg:text-[40px] font-extrabold mb-6 sm:mb-8 md:mb-[42px] text-center leading-relaxed sm:leading-[28px] md:leading-[30px] lg:leading-[33px]">
              في الوطن العربي
            </p>

            <p className="text-xs sm:text-sm md:text-base lg:text-[16px] font-normal mb-4 sm:mb-5 md:mb-6 text-center text-[#FFFFFF99] leading-relaxed max-w-[280px] sm:max-w-[350px] md:max-w-[400px] lg:max-w-none mx-auto">
              منصة تدرب الرائدة في مجال التدريب في الخليج والوطن العربي منذ أكثر
              من 10 سنوات في مجال التعلم من بعد
            </p>

            <div className="grid grid-cols-2 md:grid-cols-4 gap-2 sm:gap-3 md:gap-4 mt-6 sm:mt-7 md:mt-8 w-full max-w-[320px] sm:max-w-[400px] md:max-w-none mx-auto">
              {[
                {
                  title: "سنوات خبرة",
                  value: counts.years,
                },
                {
                  title: "خبير ومدرب",
                  value: counts.experts,
                },
                {
                  title: "دورة تدريبية",
                  value: counts.courses,
                },
                {
                  title: "ساعة تدريبية",
                  value: counts.hours,
                },
              ].map((item, index) => (
                <div className="text-center" key={index}>
                  <div className="text-lg sm:text-xl md:text-2xl lg:text-[32px] font-extrabold text-[#BE1622] mb-1 sm:mb-1.5 md:mb-2 leading-tight">
                    {item.value}+
                  </div>
                  <div className="text-xs sm:text-sm md:text-base lg:text-[20px] font-normal text-white leading-tight">
                    {item.title}
                  </div>
                </div>
              ))}
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default StatisticsMap;
