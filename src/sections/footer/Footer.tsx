import { ReactSVG } from "react-svg";
import ChatbotSection from "./_components/ChatbotSection";
import FooterLinks from "./_components/FooterLinks";
import PaymentMethods from "./_components/PaymentMethods";

export default function Footer() {
  const socialLinks = [
    { src: "/assets/footer/youtube.svg", alt: "YouTube" },
    { src: "/assets/footer/linked-in.svg", alt: "LinkedIn" },
    { src: "/assets/footer/snapchat.svg", alt: "Snapchat" },
    { src: "/assets/footer/tick-tok.svg", alt: "TikTok" },
    { src: "/assets/footer/insta.svg", alt: "Instagram" },
    { src: "/assets/footer/facebook.svg", alt: "Facebook" },
  ];
  return (
    <footer className="w-full px-4 sm:px-6 md:px-8 lg:px-16 xl:px-24 pt-16 sm:pt-20 md:pt-22 lg:pt-24 text-white">
      <div className="mx-auto grid grid-cols-1  md:grid-cols-3 gap-4 pt-4 sm:pt-5">
        <ChatbotSection />

        <FooterLinks />

        <div className="flex flex-col items-center sm:items-end gap-4 sm:gap-5 w-full sm:w-auto">
          <div className="flex flex-col items-center sm:items-end gap-2 text-center sm:text-right">
            <ReactSVG src="/assets/footer/tadarab-white.svg" />
            <p className="pt-2 text-center sm:text-end text-sm sm:text-base text-[#B0B0BA] max-w-[280px] sm:max-w-none">
              منصة تدرب التعليمية للدورات الأون لاين في الوطن العربي
            </p>
          </div>
          <PaymentMethods />
          <div className="flex flex-col items-center sm:items-end gap-2 text-center sm:text-right">
            <p className="text-sm sm:text-base text-[#B0B0BA]">
              قريباً تطبيق تدرب
            </p>
            <p className="flex items-center gap-2 text-white text-sm sm:text-base">
              على الأيفون والأندرويد
            </p>
          </div>
        </div>
      </div>

      <hr className="my-4 sm:my-6 md:my-8 lg:my-10 border-transparent lg:border-white/10" />

      <div className="flex flex-col-reverse items-center justify-between gap-4 sm:gap-5 pb-4 sm:pb-6 lg:flex-row lg:items-end">
        <div className="flex items-center gap-3 sm:gap-4 md:gap-5">
          {socialLinks.map((social, index) => (
            <ReactSVG
              key={index}
              src={social.src}
              className="w-6 h-6 sm:w-7 sm:h-7 md:w-8 md:h-8 hover:opacity-80 transition-opacity cursor-pointer"
            />
          ))}
        </div>
        <p className="text-[#B0B0BA] text-xs sm:text-sm md:text-[14px] text-center lg:text-right">
          جميع الحقوق محفوظة © 2024 تدرب
        </p>
      </div>
    </footer>
  );
}
