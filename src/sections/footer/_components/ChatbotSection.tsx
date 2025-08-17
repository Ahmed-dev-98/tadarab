import Image from "next/image";
import { Button } from "@/components/ui/button";

export default function ChatbotSection() {
  return (
    <div className="flex flex-col w-[90%] mx-auto items-center sm:items-end gap-4 sm:gap-5 rounded-[20px] sm:rounded-[25px] md:rounded-[30px] px-6 sm:px-8 md:px-[32px] py-6 sm:py-8 md:py-[36px] bg-[#FFFFFF0A]">
      <div className="flex items-center gap-2 sm:gap-3">
        <div className="flex flex-col items-center sm:items-end gap-1">
          <p className="rounded-b-[16px] sm:rounded-b-[18px] md:rounded-b-[20px] rounded-tl-[16px] sm:rounded-tl-[18px] md:rounded-tl-[20px] rounded-tr-[4px] bg-white text-black px-2 sm:px-3 py-1.5 sm:py-2 text-xs">
            👋 أهلاً بك
          </p>
          <p className="rounded-b-[16px] sm:rounded-b-[18px] md:rounded-b-[20px] rounded-tl-[16px] sm:rounded-tl-[18px] md:rounded-tl-[20px] rounded-tr-[4px] rounded-br-xl bg-white text-black px-2 sm:px-3 py-1.5 sm:py-2 text-xs">
            هل لديك سؤال؟
          </p>
        </div>
        <div className="rounded-full overflow-hidden">
          <Image
            src={"/assets/footer/chatbot.png"}
            alt="women avatar"
            className="object-fill scale-110 sm:scale-125 object-top w-[50px] h-[50px] sm:w-[60px] sm:h-[60px]"
            width={60}
            height={60}
          />
        </div>
      </div>
      <p className="text-white/80 text-sm sm:text-base text-center sm:text-right">
        تحتاج مساعدة أو استفسار؟
      </p>
      <Button
        className="!rounded-xl sm:!rounded-2xl !bg-white/5 px-4 sm:px-5 py-2.5 sm:py-3 text-sm sm:text-base font-bold w-full sm:w-auto"
        aria-label="تواصل معنا عبر واتساب"
      >
        تواصل معنا
      </Button>
    </div>
  );
}
