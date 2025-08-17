import React from "react";
import { ReactSVG } from "react-svg";
import Image from "next/image";

const SponsorSection = () => {
  return (
    <div className="w-[95%] sm:w-[92%] md:w-[90%] mx-auto rounded-[12px] sm:rounded-[16px] md:rounded-[20px] overflow-hidden">
      <div className="w-full h-[300px] sm:h-[400px] md:h-[450px] lg:h-[500px] bg-cover bg-center bg-no-repeat relative rounded-[12px] sm:rounded-[16px] md:rounded-[20px]">
        <div className="absolute inset-0 bg-[#25D5AB1A]"></div>
        <Image
          src="/assets/sponsor-section/BG.webp"
          alt="sponsor"
          className="w-full h-full object-cover"
          width={1920}
          height={500}
        />

        <div className="absolute inset-0 flex items-center justify-center px-4 sm:px-6 md:px-8">
          <div className="text-center text-white max-w-full sm:max-w-[350px] md:max-w-[400px] lg:max-w-[487.6px] mx-auto">
            <h2 className="text-xl sm:text-2xl md:text-3xl lg:text-[32px] font-bold mb-4 sm:mb-5 md:mb-6 leading-tight">
              ابدأ رحلة التعلم مع
            </h2>

            <div className="mb-4 sm:mb-5 md:mb-6 flex justify-start w-full items-center">
              <ReactSVG
                src="/assets/sponsor-section/Tadarab Green.svg"
                className="w-[40px] h-[40px] sm:h-auto sm:w-[140px] md:w-[160px] lg:w-auto"
              />
            </div>

            <p className="text-sm sm:text-base md:text-lg lg:text-[20px] font-normal mb-6 sm:mb-8 md:mb-[42px] text-center leading-relaxed sm:leading-[28px] md:leading-[30px] lg:leading-[33px]">
              تعلم مع أكثر من 1000 دورة تدريبية في مختلف المجالات باشتراك واحد
              فقط
            </p>

            <p className="text-xs sm:text-sm md:text-base lg:text-[16px] font-normal mb-4 sm:mb-5 md:mb-6 text-center leading-relaxed">
              اشتراكات بتبدأ من 10.000 دك شهرياً
            </p>

            <button className="bg-[#60D2B4] rounded-[8px] sm:rounded-[10px] md:rounded-[12px] w-full sm:w-[280px] md:w-[295px] py-3 sm:py-3.5 md:py-4 px-3 sm:px-[8px] md:px-[10px] hover:bg-[#20B894] transition-colors text-[#00040D] duration-300 font-bold text-sm sm:text-[15px] md:text-[16px] shadow-lg hover:shadow-xl">
              أشترك الآن
            </button>
          </div>
        </div>
      </div>
    </div>
  );
};

export default SponsorSection;
