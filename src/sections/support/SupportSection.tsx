import React from "react";
import { Button } from "@/components/ui/button";
import { ReactSVG } from "react-svg";
import Image from "next/image";

const SupportSection = () => {
  return (
    <div className="w-full h-[300px] sm:h-[350px] md:h-[400px] lg:h-[460px] relative bg-[#0D1119] ">
      <div className="bg-cover bg-center bg-no-repeat absolute top-[-40px] sm:top-[-60px] md:top-[-70px] lg:top-[-89px] right-1/2 transform translate-x-1/2 sm:translate-x-0 sm:right-8 md:right-12 lg:right-[80px]">
        <Image
          src="/assets/support-section/support.png"
          alt="support"
          width={519}
          height={560}
          className="w-[200px] h-auto sm:w-[250px] md:w-[300px] lg:w-[400px] xl:w-[519px] object-contain"
        />
      </div>

      <div className="w-full lg:w-[45%] h-full flex flex-col gap-4 sm:gap-5 md:gap-6 justify-center items-center lg:items-end px-4 sm:px-6 md:px-8 lg:px-10 relative z-10">
        <h1 className="text-xl sm:text-2xl md:text-3xl lg:text-[32px] font-extrabold leading-tight lg:leading-[48px] text-white text-center lg:text-right max-w-[280px] sm:max-w-[320px] md:max-w-[400px] lg:max-w-none">
          تحتاج مساعدة أو استفسار؟
        </h1>

        <p className="text-sm sm:text-base md:text-lg lg:text-[16px] font-normal leading-relaxed lg:leading-[24px] text-[#FFFFFFD9] mb-3 sm:mb-4 text-center lg:text-right max-w-[250px] sm:max-w-[300px] md:max-w-[350px] lg:max-w-none">
          WhatsApp قم بالتواصل معنا عبر
        </p>

        <Button className="bg-[#BE1622] px-6 sm:px-8 md:px-10 py-2.5 sm:py-3 h-10 sm:h-11 lg:h-12 gap-2 rounded-[8px] sm:rounded-[10px] lg:rounded-[12px] hover:bg-[#A0151E] transition-colors w-full sm:w-auto">
          <span className="text-sm sm:text-base lg:text-[16px] font-bold">
            تواصل معنا
          </span>
          <ReactSVG
            src="/assets/icons/whatsapp.svg"
            className="w-4 h-4 sm:w-5 sm:h-5 lg:w-6 lg:h-6"
          />
        </Button>
      </div>
    </div>
  );
};

export default SupportSection;
