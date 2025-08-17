import dynamic from "next/dynamic";

const LoadingSkeleton = () => (
  <div className="h-96 bg-transparent w-[90%] mx-auto animate-pulse rounded-lg" />
);
export const NewCoursesSection = dynamic(
  () => import("@/sections/new-courses/NewCoursesSection"),
  {
    loading: LoadingSkeleton,
    ssr: false,
  }
);

export const FadeCarouselSection = dynamic(
  () => import("@/sections/upcoming-courses/UpcomingCarouselSection"),
  {
    loading: LoadingSkeleton,
    ssr: false,
  }
);

export const CourseCategoriesSection = dynamic(
  () => import("@/sections/categories/CourseCategoriesSection"),
  {
    loading: LoadingSkeleton,
    ssr: false,
  }
);

export const FreeCoursesSection = dynamic(
  () => import("@/sections/free-courses/FreeCoursesSection"),
  {
    loading: LoadingSkeleton,
    ssr: false,
  }
);

export const FeedbackCarouselSection = dynamic(
  () => import("@/sections/testimonial/FeedbackCarouselSection"),
  {
    loading: LoadingSkeleton,
    ssr: false,
  }
);

export const SponsorSection = dynamic(
  () => import("@/sections/tadarab-pro/TadarabProSection"),
  {
    loading: LoadingSkeleton,
    ssr: false,
  }
);

export const StatisticsMap = dynamic(
  () => import("@/sections/statistics-map/StatisticsMap"),
  {
    loading: LoadingSkeleton,
    ssr: false,
  }
);

export const BussniessSection = dynamic(
  () => import("@/sections/tadarab-bussniess/BussniessSection"),
  {
    loading: LoadingSkeleton,
    ssr: false,
  }
);

export const InstructosSection = dynamic(
  () => import("@/sections/tadarab-instructors/InstructorsSection"),
  {
    loading: LoadingSkeleton,
    ssr: false,
  }
);

export const SupportSection = dynamic(
  () => import("@/sections/support/SupportSection"),
  {
    loading: LoadingSkeleton,
    ssr: false,
  }
);

export const FAQ = dynamic(() => import("@/sections/FAQ/FAQ"), {
  loading: LoadingSkeleton,
  ssr: false,
});
