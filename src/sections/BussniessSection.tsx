import { Button } from "@/components/ui/button";
import { ChevronLeft } from "lucide-react";
import React from "react";
import { ReactSVG } from "react-svg";
import Image from "next/image";

const BussniessSection = () => {
  return (
    <div className="w-full overflow-hidden">
      <div className="w-full h-[540px] bg-cover bg-center bg-no-repeat relative rounded-[20px]">
        <Image
          src="/assets/bussniess-section/Image.png"
          alt="bussniess"
          className="w-full h-full"
          width={1920}
          height={540}
        />
        <div className="absolute inset-0 flex items-center h-full">
          <div className="text-right text-white max-w-[50%] ms-auto me-[5%] mb-[100px] w-[90%] ">
            <div className="mb-6 flex justify-end items-end gap-2">
              <ReactSVG src="/assets/bussniess-section/tadarab-red.svg" />
              <span className="text-[28.41px] leading-[28px]">
                for business
              </span>
            </div>

            <p className="text-lg md:text-[40px] font-extrabold mb-5 text-right leading-[33px]">
              اكتشف عالم تدرب للأعمال
            </p>

            <p className="text-base md:text-[20px] max-w-[75%] font-bold mb-5 ms-auto leading-[31px] text-[#B0B0BA]">
              تحديات سوق العمل لا تنتهي! طور مهارات مُوظفيك لتتناسب مع اقتصاد
              اليوم، اختر الخطة التدريبية التي تناسب أهداف عملك وتواصل معنا
              الآن.
            </p>

            <Button className="text-[16px] font-bold leading-[24px] bg-[#BE1622] w-[210px] ms-auto text-white h-[48px] py-4 px-5 rounded-[12px] flex items-center gap-2">
              <ChevronLeft className="w-6 h-6 text-white" />
              اعرف المزيد
            </Button>
          </div>
          <div className="flex flex-col gap-4 absolute bottom-0 bg-gradient-to-b to-[#00040D] from-[#00040D00] w-full">
            <div className="w-[90%] mx-auto">
              <h1 className="text-right text-[24px] font-extrabold leading-[37px] text-white mb-4">
                شركاء النجاح في تدرب للأعمال
              </h1>
              <div className="grid grid-cols-2 md:grid-cols-6 gap-4 w-full justify-center items-center">
                {[
                  {
                    title: "المركز الوطني للتعليم الالكتروني",
                    src: "/assets/bussniess-section/logo-1.png",
                  },
                  {
                    title: "الحسبة",
                    src: "/assets/bussniess-section/logo-2.png",
                  },
                  {
                    title: "سلطنة عمان",
                    src: "/assets/bussniess-section/logo-3.png",
                  },
                  {
                    title: "هيئة اسواق المال",
                    src: "/assets/bussniess-section/logo-4.png",
                  },
                  {
                    title: "كونا",
                    src: "/assets/bussniess-section/logo-5.png",
                  },
                  {
                    title: "كار",
                    src: "/assets/bussniess-section/logo-6.png",
                  },
                ].map((item, index) => (
                  <div className="text-center" key={index}>
                    <Image
                      src={item.src}
                      alt={item.title}
                      width={120}
                      height={120}
                    />
                  </div>
                ))}
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default BussniessSection;
