import React from "react";
import { Button } from "@/components/ui/button";
import { ReactSVG } from "react-svg";
import Image from "next/image";

const SupportSection = () => {
  return (
    <div className="w-full h-[460px] relative bg-[#0D1119]">
      <div className="bg-cover bg-center bg-no-repeat right-[80px] absolute top-[-89px]">
        <Image
          src="/assets/support-section/support.png"
          alt="support"
          width={519}
          height={560}
        />
      </div>
      <div className="w-[45%] h-full flex flex-col gap-6 justify-center items-end px-10">
        <h1 className="text-[32px] font-extrabold leading-[48px] text-white">
          تحتاج مساعدة أو استفسار؟
        </h1>
        <p className="text-[16px] font-normal leading-[24px] text-[#FFFFFFD9] mb-4">
          WhatsApp قم بالتواصل معنا عبر
        </p>
        <Button className="bg-[#BE1622] px-10 py-3 h-12 gap-2 rounded-[12px]">
          <span className="text-[16px] font-bold">تواصل معنا</span>
          <ReactSVG src="/assets/icons/whatsapp.svg" />
        </Button>
      </div>
    </div>
  );
};

export default SupportSection;
