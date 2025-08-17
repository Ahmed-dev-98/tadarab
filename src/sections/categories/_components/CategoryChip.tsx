import { cn } from "@/lib/utils";
import { Category } from "@/types/category";
import React from "react";
import { ReactSVG } from "react-svg";

const CategoryChip = ({ category }: { category: Category }) => {
  const staticIcons = [
    "/assets/categories-section/art.svg",
    "/assets/categories-section/business.svg",
    "/assets/categories-section/family-and-educational-skills.svg",
    "/assets/categories-section/home.svg",
    "/assets/categories-section/language-and-sciences.svg",
    "/assets/categories-section/self-development.svg",
    "/assets/categories-section/technology.svg",
  ];
  const getRandomIcon = () => {
    return staticIcons[Math.floor(Math.random() * staticIcons.length)];
  };
  return (
    <div className="relative flex-shrink-0" key={category.id}>
      <button
        className={cn(
          "p-[1px] rounded-[10px] sm:rounded-[12px] md:rounded-[14px] bg-gradient-to-b from-[#6DDCFF] via-[#7F60F9] to-[#00040D] shadow-[0_0_10px_rgba(59,130,246,0.3)]",
          category.title.length > 15
            ? "min-w-[200px] sm:min-w-[240px] md:min-w-[280px]"
            : category.title.length > 10
            ? "min-w-[160px] sm:min-w-[190px] md:min-w-[220px]"
            : "min-w-[140px] sm:min-w-[160px] md:min-w-[180px]"
        )}
      >
        <div className="bg-[#272A31] rounded-xl sm:rounded-2xl px-3 py-2 sm:px-4 sm:py-2.5 md:px-6 md:py-3 flex items-center gap-2 sm:gap-3 md:gap-4">
          <span className="text-white font-extrabold text-sm sm:text-lg md:text-xl lg:text-[30.83px] leading-tight">
            {category.title}
          </span>
          <ReactSVG
            src={getRandomIcon()}
            className="h-[40px] sm:h-[60px] md:h-[70px] lg:h-[80px] w-auto"
          />
        </div>
      </button>
    </div>
  );
};

export default CategoryChip;
