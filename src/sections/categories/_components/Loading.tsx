import React from "react";

const Loading = () => {
  return (
    <section className="text-white bg-[#00040D] py-8 sm:py-12 md:py-16 px-4 sm:px-6 md:px-8 lg:px-20">
      <div className="relative">
        <div className="absolute left-2 sm:left-4 md:left-0 top-1/2 -translate-y-1/2 z-10 w-[40px] h-[40px] sm:w-[50px] sm:h-[50px] md:w-[58px] md:h-[58px] bg-gray-700 rounded-full animate-pulse" />
        <div className="absolute right-2 sm:right-4 md:right-0 top-1/2 -translate-y-1/2 z-10 w-[40px] h-[40px] sm:w-[50px] sm:h-[50px] md:w-[58px] md:h-[58px] bg-gray-700 rounded-full animate-pulse" />

        <div className="space-y-4 sm:space-y-5 md:space-y-6">
          {/* Skeleton First row */}
          <div className="overflow-hidden">
            <div className="flex gap-2 sm:gap-3 md:gap-4">
              {Array.from({ length: 10 }).map((_, index) => (
                <div
                  key={index}
                  className="flex-shrink-0 w-24 sm:w-28 md:w-32 h-12 sm:h-14 md:h-16 bg-gray-700 rounded-full animate-pulse"
                />
              ))}
            </div>
          </div>

          {/* Skeleton Second row */}
          <div className="overflow-hidden">
            <div className="flex gap-2 sm:gap-3 md:gap-4">
              {Array.from({ length: 10 }).map((_, index) => (
                <div
                  key={index}
                  className="flex-shrink-0 w-24 sm:w-28 md:w-32 h-12 sm:h-14 md:h-16 bg-gray-700 rounded-full animate-pulse"
                />
              ))}
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Loading;
