import React from "react";
import { ReactSVG } from "react-svg";
import Image from "next/image";

const SponsorSection = () => {
  return (
    <div className="w-[90%] mx-auto rounded-[20px] overflow-hidden">
      <div className="w-full h-[500px] bg-cover bg-center bg-no-repeat relative rounded-[20px]">
        <div className="absolute inset-0 bg-[#25D5AB1A]"></div>
        <Image
          src="/assets/sponsor-section/BG.webp"
          alt="sponsor"
          className="w-full h-full "
          width={1920}
          height={500}
        />

        <div className="absolute inset-0 flex items-center justify-center">
          <div className="text-center text-white max-w-[487.6px] mx-auto px-6">
            <h2 className="text-[32px] font-bold mb-6">ابدأ رحلة التعلم مع</h2>

            <div className="mb-6 flex justify-center">
              <ReactSVG src="/assets/sponsor-section/Tadarab Green.svg" />
            </div>

            <p className="text-lg md:text-[20px] font-normal mb-[42px] text-center leading-[33px]">
              تعلم مع أكثر من 1000 دورة تدريبية في مختلف المجالات باشتراك واحد
              فقط
            </p>

            <p className="text-base md:text-[16px] font-normal mb-6 text-center">
              اشتراكات بتبدأ من 10.000 دك شهرياً
            </p>

            <button className="bg-[#60D2B4] rounded-[12px] w-[295px] py-4 px-[10px] hover:bg-[#20B894] transition-colors text-[#00040D] duration-300 font-bold text-[16px] shadow-lg hover:shadow-xl">
              أشترك الآن
            </button>
          </div>
        </div>
      </div>
    </div>
  );
};

export default SponsorSection;
