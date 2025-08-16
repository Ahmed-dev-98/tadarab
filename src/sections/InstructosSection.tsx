import React, { useState } from "react";
import { ChevronLeft } from "lucide-react";
import { Button } from "@/components/ui/button";
import InstructorsCarousel from "@/components/instructors-carousel";
import { useQuery } from "@tanstack/react-query";
import { instructorsApi } from "@/lib/api/instructors";
import { Tutor } from "@/types/tutor";

const InstructosSection = () => {
  const [page, setPage] = useState(1);
  const [instructors, setInstructors] = useState<Tutor[]>([]);
  const {
    data: instructorsResponse,
    isLoading,
    error,
  } = useQuery({
    queryKey: ["instructors", page],
    queryFn: () =>
      instructorsApi
        .getInstructors({
          page,
          per_page: 10,
        })
        .then((res) => {
          setInstructors((prev) => [...prev, ...res.data]);
          return res;
        }),
  });
  const handleLoadMore = () => {
    if (
      instructorsResponse?.pagination &&
      page < instructorsResponse.pagination.pages
    ) {
      setPage((prev) => prev + 1);
    }
  };

  return (
    <section className="text-white py-16 px-4 bg-[#00040D]">
      <div className="w-full mx-auto">
        <div className="flex justify-between items-start mb-8">
          <a
            href="#"
            className="text-white hover:text-gray-300 transition-colors text-lg hover:underline"
          >
            المزيد &gt;
          </a>
          <h2 className="text-4xl md:text-5xl font-bold text-red-600 flex items-center gap-2">
            <span>الوطن العربي</span>
            <span className="text-white">نخبة من مدربي</span>
          </h2>
        </div>

        <div className="my-12">
          <InstructorsCarousel
            onLoadMore={handleLoadMore}
            instructors={instructors}
            isLoading={isLoading}
            error={error}
            hasMorePages={
              instructorsResponse?.pagination
                ? page < instructorsResponse.pagination.pages
                : true
            }
          />
        </div>

        <p className="text-center text-[16px] text-[#FFFFFF99] mb-[30px]">
          هل تريد الإنضمام إلى منصة تدرب التعليمية كمدرب؟
        </p>
        <Button className="text-[16px] font-bold leading-[24px] bg-[#FFFFFF1A] py-[13px] px-10 w-[220px] mx-auto text-white h-[48px] rounded-[12px] flex items-center gap-2">
          <ChevronLeft className="w-6 h-6 text-white" />
          قدم كمدرب الآن
        </Button>
      </div>
    </section>
  );
};

export default InstructosSection;
