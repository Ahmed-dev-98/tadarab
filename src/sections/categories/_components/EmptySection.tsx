import React from "react";

const EmptySection = () => {
  return (
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
  );
};

export default EmptySection;
