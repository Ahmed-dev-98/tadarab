import React from "react";

const ErrorSection = () => {
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
          <div className="text-center">
            <p className="text-red-400 text-base sm:text-lg mb-3 sm:mb-4">
              حدث خطأ في تحميل الأقسام
            </p>
            <button
              onClick={() => window.location.reload()}
              className="px-3 py-2 sm:px-4 sm:py-2 bg-red-600 hover:bg-red-700 rounded-lg transition-colors text-sm sm:text-base"
            >
              إعادة المحاولة
            </button>
          </div>
        </div>
      </div>
    </section>
  );
};

export default ErrorSection;
