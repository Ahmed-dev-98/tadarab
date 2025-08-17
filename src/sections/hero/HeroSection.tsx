import { ArrowLeftIcon } from "lucide-react";
import { Button } from "@/components/ui/button";
import Image from "next/image";

export default function HeroSection() {
  return (
    <section className="text-center mb-16 min-h-[500px] sm:min-h-[600px] md:min-h-[700px] lg:min-h-[820px] bg-[#00040D] mx-auto overflow-hidden mt-[80px] max-w-[1961px] relative flex justify-center items-center">
      <div className="absolute inset-0 w-full sm:w-[70%] md:w-[60%] lg:w-[55%] h-full">
        <Image
          src="/assets/hero-section/instructors.webp"
          alt="Instructors background"
          fill
          priority
          className="object-cover"
          sizes="(max-width: 640px) 100vw, (max-width: 768px) 70vw, (max-width: 1024px) 60vw, 55vw"
        />
      </div>
      <div className="absolute inset-0 bg-gradient-to-r from-[#000000] to-[#0000007D] w-full h-full"></div>
      <div className="absolute left-1/2 -top-6 sm:-top-8 md:-top-10 lg:-top-12 bg-[#7F60F9] -translate-x-1/2 -translate-y-1/2 w-[200px] h-[200px] sm:w-[250px] sm:h-[250px] md:w-[300px] md:h-[300px] lg:w-[400px] lg:h-[400px] rounded-full blur-3xl opacity-30"></div>
      <div className="absolute hidden md:block right-0 w-full sm:w-[50%] md:w-[45%] lg:w-[40%] h-[400px] sm:h-[500px] md:h-[600px] lg:h-[740px] bottom-0">
        <Image
          src="/assets/hero-section/hero-model.webp"
          alt="Hero model"
          fill
          className="object-cover"
          sizes="(max-width: 768px) 50vw, (max-width: 1024px) 45vw, 40vw"
        />
      </div>
      <div className="absolute bottom-0 bg-gradient-to-t from-[#00040D] to-[#00040D00] w-full h-[100px] sm:h-[120px] md:h-[150px] lg:h-[192px]"></div>

      <div className="relative z-10 flex flex-col gap-2 sm:gap-3 md:gap-4 items-center justify-center h-full w-full sm:w-[400px] md:w-[500px] lg:w-[569px] px-4 sm:px-6 md:px-8 lg:px-[68px]">
        <h1
          dir="rtl"
          className="text-[40px] sm:text-[50px] md:text-[60px] lg:text-[80px] font-bold leading-[1.1] sm:leading-[1.15] md:leading-[1.2] lg:leading-[94px] bg-gradient-to-r from-[#FFFFFF] to-[#71717A] bg-clip-text text-[#00000000]"
        >
          <span className="pl-1">30</span>
          <span>يومًا</span>
        </h1>
        <p className="text-[24px] sm:text-[30px] md:text-[36px] lg:text-[48px] font-bold leading-[1.1] sm:leading-[1.15] md:leading-[1.2] lg:leading-[94px] bg-gradient-to-r from-[#FFFFFF] to-[#71717A] bg-clip-text text-[#00000000] whitespace-normal sm:whitespace-nowrap">
          كافية لتحقيق أهدافك
        </p>
        <p className="text-[14px] sm:text-[16px] md:text-[17px] lg:text-[18px] font-normal leading-[1.4] sm:leading-[1.5] md:leading-[1.6] lg:leading-[30px] text-white px-2 sm:px-0">
          منصة تدرب الرائدة في مجال التدريب في الخليج و الوطن{" "}
          <br className="hidden sm:block" /> العربي منذ أكثر من 10 سنوات في مجال
          التعلم عن بعد
        </p>
        <Button className="text-[14px] sm:text-[15px] lg:text-[16px] font-extrabold leading-[1.4] sm:leading-[1.5] lg:leading-[24px] bg-[#BE1622] h-[48px] sm:h-[52px] lg:h-[56px] py-2 sm:py-2.5 lg:py-3 px-6 sm:px-8 lg:px-10 rounded-[12px] flex items-center gap-2">
          <ArrowLeftIcon className="w-5 h-5 sm:w-5.5 sm:h-5.5 lg:w-6 lg:h-6" />
          ابدأ التعلم الآن
        </Button>
      </div>
    </section>
  );
}
