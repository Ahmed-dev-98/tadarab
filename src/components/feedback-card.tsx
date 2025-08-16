import React from "react";
import { ReactSVG } from "react-svg";
import Image from "next/image";

interface FeedbackCardProps {
  isVideo?: boolean;
  quote?: string;
  authorName?: string;
  courseTitle?: string;
  fullName?: string;
  videoThumbnail?: string;
  videoTitle?: string;
  instructorName?: string;
}

const FeedbackCard: React.FC<FeedbackCardProps> = ({
  isVideo = false,
  quote,
  authorName,
  courseTitle,
  fullName,
  videoThumbnail,
  videoTitle,
  instructorName,
}) => {
  if (isVideo) {
    return (
      <div className="w-[352px] h-[400px] rounded-[24px] border border-gray-700/50 overflow-hidden shadow-xl relative">
        <div className="absolute inset-0 bg-[#00000033]  select-none">
          {videoThumbnail ? (
            <Image
              src={videoThumbnail}
              alt={videoTitle || "Video thumbnail"}
              className="w-full h-full object-cover"
              width={352}
              height={400}
            />
          ) : (
            <div className="w-full h-full bg-gradient-to-br from-gray-600 to-gray-800" />
          )}
        </div>

        <div className="absolute h-[45%] bottom-0 left-0 right-0 bg-gradient-to-b from-[#13141E00] to-[#13141E]" />

        <div className="absolute inset-0 flex items-center justify-center">
          <div className="w-16 h-16 bg-transparent  rounded-full flex items-center justify-center cursor-pointer">
            <ReactSVG src="/assets/icons/play-vid.svg" />
          </div>
        </div>

        <div className="absolute bottom-0 left-0 right-0 p-6 text-white">
          <h3 className="text-[16px] font-bold mb-2 text-right">
            {videoTitle || "دورة أسراري في تربية الأبناء"}
          </h3>
          <div className="w-5 h-[3px] bg-[#ccccccd0] mb-2 ml-auto" />

          <p className="text-[16px] font-normal text-white text-right">
            {instructorName || "عفاف الجاسم"}
          </p>
        </div>
      </div>
    );
  }

  return (
    <div className="w-[352px] h-[400px] bg-transparent border-[#FFFFFF33] py-10 px-6 pb-[27px] rounded-[24px] shadow-xl border flex flex-col justify-between relative">
      <div className="pr-4 flex-1">
        <div className="w-full flex justify-end mb-3">
          <ReactSVG src={"/assets/icons/qoutation.svg"} color="#ccccccd0" />
        </div>
        <p className="text-[#ccccccd0] text-[18px] leading-[28px] font-bold text-right">
          {quote}
        </p>
      </div>

      <div className="text-right">
        <h4 className="text-[#ccccccd0] mb-1 text-[20px] font-extrabold">
          {authorName}
        </h4>
        <div className="w-5 h-[3px] bg-[#ccccccd0] mb-2 ml-auto" />
        <p className="text-[#ccccccd0] text-[16px] font-bold mb-1">
          {courseTitle}
        </p>
        <p className="text-[#ccccccd0] text-[16px] leading-[24px] font-normal">
          {fullName}
        </p>
      </div>
    </div>
  );
};

export default FeedbackCard;
