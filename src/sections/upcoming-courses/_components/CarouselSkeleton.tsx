import { cn } from "@/lib/utils";

export const CarouselSkeleton = () => (
  <div className="relative w-full min-h-[400px] sm:min-h-[500px] md:min-h-[600px] lg:h-screen bg-[#00040D] overflow-hidden">
    <div className="relative h-full flex flex-col lg:flex-row items-center justify-between px-4 sm:px-6 md:px-8 lg:px-5 gap-6 lg:gap-0">
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
