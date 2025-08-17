import React from "react";
import Image from "next/image";

const OfferBanner = () => {
  return (
    <div className="flex justify-center gap-4 items-center h-12 relative">
      <div className="absolute inset-0 w-full h-full">
        <Image
          src="/assets/nav-bar/offer-bg.png"
          alt="Offer background"
          fill
          className="object-cover"
          sizes="100vw"
        />
      </div>
      <div className="flex-col-reverse md:flex-row flex gap-2 items-center justify-center relative">
        <button className="text-sm text-white hover:text-gray-200 transition-colors underline">
          اشترك الان
        </button>
        <span className="text-sm text-white">
          خصم 80% بمناسبة شهر رمضان الكريم لفترة محدودة
        </span>
      </div>
    </div>
  );
};

export default OfferBanner;
