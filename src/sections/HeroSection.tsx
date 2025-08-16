import { ArrowLeftIcon } from "lucide-react";
import { Button } from "@/components/ui/button";

export default function HeroSection() {
  return (
    <section className="text-center mb-16 min-h-[820px] bg-[#00040D] mx-auto overflow-hidden mt-[80px] max-w-[1961px] relative flex justify-center items-center">
      <div
        className="absolute inset-0 bg-cover bg-center w-[55%] h-full"
        style={{
          backgroundImage: "url('/assets/hero-section/instructors.png')",
          backgroundSize: "cover",
          backgroundPosition: "center",
          backgroundRepeat: "no-repeat",
        }}
      ></div>
      <div
        className="absolute inset-0 bg-cover bg-center w-full h-full"
        style={{
          backgroundImage: "url('/assets/hero-section/overlay.png')",
          backgroundSize: "cover",
          backgroundPosition: "center",
          backgroundRepeat: "no-repeat",
        }}
      ></div>
      <div className="absolute left-1/2 -top-12 bg-[#7F60F9] -translate-x-1/2 -translate-y-1/2 w-[400px] rounded-full h-[400px] blur-3xl opacity-30"></div>
      <div
        className="absolute right-0 bg-cover bg-center w-[40%] h-[740px] bottom-0"
        style={{
          backgroundImage: "url('/assets/hero-section/hero-model.png')",
          backgroundSize: "cover",
          backgroundPosition: "center",
          backgroundRepeat: "no-repeat",
        }}
      ></div>
      <div
        className="absolute bottom-0 bg-cover bg-center w-full h-[192px]"
        style={{
          backgroundImage: "url('/assets/hero-section/hero-footer.png')",
          backgroundSize: "cover",
          backgroundPosition: "center",
          backgroundRepeat: "no-repeat",
        }}
      ></div>

      <div className="relative z-10 flex flex-col gap-4 items-center justify-center h-full w-[569px] px-[68px]">
        <h1 dir="rtl" className="text-[80px] font-bold leading-[94px] bg-gradient-to-r from-[#FFFFFF] to-[#71717A] bg-clip-text text-[#00000000]">
          <span className="pl-1">30</span>
          <span>يومًا</span>
        </h1>
        <p className="text-[48px] whitespace-nowrap font-bold leading-[94px] bg-gradient-to-r from-[#FFFFFF] to-[#71717A] bg-clip-text text-[#00000000]">
          كافية لتحقيق أهدافك
        </p>
        <p className="text-[18px] font-normal leading-[30px] text-white">
          منصة تدرب الرائدة في مجال التدريب في الخليج و الوطن <br /> العربي منذ
          أكثر من 10 سنوات في مجال التعلم عن بعد
        </p>
        <Button className="text-[16px] font-extrabold leading-[24px] bg-[#BE1622] h-[56px] py-3 px-10 rounded-[12px] flex items-center gap-2">
          <ArrowLeftIcon className="w-6 h-6" />
          ابدأ التعلم الآن
        </Button>
      </div>
    </section>
  );
}
