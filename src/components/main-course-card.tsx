import Image from "next/image";
import React from "react";
import { Course } from "@/types/course";
import { ReactSVG } from "react-svg";
import { formatDuration } from "@/lib/utils";

const MainCourseCard = ({ course }: { course: Course }) => {
  if (!course) return null;

  return (
    <div
      key={course.id}
      className="flex-shrink-0 w-80 md:w-80 bg-gray-900 rounded-2xl overflow-hidden shadow-xl course-card flex flex-col"
    >
      <div className="relative h-48 bg-gradient-to-br from-gray-700 to-gray-800">
        <div className="absolute inset-0 bg-gradient-to-t from-black/50 to-transparent" />
        {course.labels?.[2] && (
          <div className="absolute top-3 right-3 rounded-[6px] leading-[16px] px-[6px] bg-[#FFFFFF52] backdrop-blur-md text-[10px] text-bold border border-white/30 text-white shadow-lg shadow-black/10">
            {course.labels?.[2]?.ar}
          </div>
        )}
        <Image
          src={
            course.image_url
              ? course.image_url
              : "/assets/bussniess-section/tadarab-red.svg"
          }
          alt={course?.title || "course image"}
          
          width={320}
          height={180}
          className="w-full h-full object-cover object-top select-none"
        />
      </div>

      <div className="p-5 flex flex-col flex-1">
        <div className="flex-1">
          <h3 className="text-[16px] font-extrabold text-right text-white mb-2 leading-tight line-clamp-2">
            {course.title}
          </h3>
          <div className="flex items-end mb-4 flex-col gap-2">
            <p className="text-white text-right font-normal text-[14px]">
              {course?.tutor?.name}
            </p>
            <div className="h-[4px] bg-white w-[20px] ml-auto" />
          </div>
          <div className="flex items-center justify-end gap-5  mb-4 text-sm text-gray-300">
            <div className="flex items-center gap-1 justify-end">
              <span className="whitespace-nowrap text-[#B0B0BA] font-light text-[12px]">
                {course.learners.toLocaleString()} متعلم
              </span>
              <ReactSVG src="/assets/icons/users.svg" />
            </div>
            <div className="flex items-center gap-1">
              <div className="whitespace-nowrap text-[#B0B0BA] font-light text-[12px] flex items-center gap-1">
                <span
                  className="text-white"
                  style={{ direction: "rtl", unicodeBidi: "embed" }}
                >
                  {formatDuration(course.video_duration).minutes + " "}د
                </span>
              </div>
              :
              <div className="whitespace-nowrap text-[#B0B0BA] font-light text-[12px] flex items-center gap-1">
                <span
                  className="text-white"
                  style={{ direction: "rtl", unicodeBidi: "embed" }}
                >
                  {formatDuration(course.video_duration).hours + " "}س
                </span>
              </div>
              <ReactSVG src="/assets/icons/time.svg" />
            </div>
            <div className="flex items-center gap-1">
              <span className="whitespace-nowrap text-[#B0B0BA] font-light text-[12px]">
                ({course.enrollments_count} تقييم) {course.reviews_average}
              </span>
              <ReactSVG src="/assets/icons/star.svg" />
            </div>
          </div>
        </div>

        <button className="w-full h-[40px] py-[2px] px-4 bg-[#FFFFFF14] backdrop-blur-md rounded-[12px] text-white text-[12px] font-bold flex items-center justify-center gap-2 transition-colors hover:bg-red-600 mt-auto">
          شاهد اعلان الدورة
          <ReactSVG src="/assets/icons/play.svg" />
        </button>
      </div>
    </div>
  );
};

export default MainCourseCard;
