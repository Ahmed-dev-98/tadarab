import React from "react";

const CarouselSkeleton = () => {
  return (
    <div className="flex-shrink-0 w-80 md:w-80 bg-gray-900 rounded-2xl overflow-hidden shadow-xl flex flex-col animate-pulse">
      <div className="relative h-48 bg-gradient-to-br from-gray-700 to-gray-800">
        <div className="absolute inset-0 bg-gradient-to-t from-black/50 to-transparent" />
        <div className="absolute top-3 right-3 rounded-[6px] h-4 w-16 bg-gray-600 animate-pulse" />
        <div className="w-full h-full bg-gray-600 animate-pulse" />
      </div>

      <div className="p-5 flex flex-col flex-1">
        <div className="flex-1">
          <div className="h-4 bg-gray-600 rounded mb-2 animate-pulse" />
          <div className="h-4 bg-gray-600 rounded w-3/4 mb-2 animate-pulse" />

          <div className="flex items-end mb-4 flex-col gap-2">
            <div className="h-3 bg-gray-600 rounded w-24 ml-auto animate-pulse" />
            <div className="h-1 bg-gray-600 w-5 ml-auto animate-pulse" />
          </div>

          <div className="flex items-center justify-end gap-5 mb-4">
            <div className="flex items-center gap-1 justify-end">
              <div className="h-3 bg-gray-600 rounded w-16 animate-pulse" />
              <div className="w-4 h-4 bg-gray-600 rounded animate-pulse" />
            </div>
            <div className="flex items-center gap-1">
              <div className="h-3 bg-gray-600 rounded w-12 animate-pulse" />
              <span className="text-gray-600">:</span>
              <div className="h-3 bg-gray-600 rounded w-12 animate-pulse" />
              <div className="w-4 h-4 bg-gray-600 rounded animate-pulse" />
            </div>
          </div>
        </div>

        <div className="w-full h-[40px] bg-gray-600 rounded-[12px] animate-pulse mt-auto" />
      </div>
    </div>
  );
};

export default CarouselSkeleton;
