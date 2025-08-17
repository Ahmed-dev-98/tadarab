"use client";

import React, { useState } from "react";
import { Course } from "@/types/course";
import CarouselContainer from "@/components/carousel-container";
import { useLazyQuery } from "@/lib/hooks";
import { coursesApi, CoursesResponse } from "@/lib/api/courses";

const NewCoursesSection: React.FC = () => {
  const [page, setPage] = useState(1);
  const [courses, setCourses] = useState<Course[]>([]);

  const {
    data: coursesResponse,
    isLoading,
    error,
    ref,
  } = useLazyQuery<CoursesResponse, Error>({
    queryKey: ["new-courses", page],
    queryFn: () =>
      coursesApi
        .getBestsellingCourses({
          page,
          per_page: 10,
          scopes: ["new"],
        })
        .then((res) => {
          setCourses((prev) => [...prev, ...res.data]);
          return res;
        }),
  });

  const handleLoadMore = () => {
    if (
      coursesResponse?.pagination &&
      page < coursesResponse.pagination.pages
    ) {
      setPage((prev) => prev + 1);
    }
  };

  return (
    <section ref={ref}>
      <CarouselContainer
        isLoading={isLoading}
        error={error}
        onLoadMore={handleLoadMore}
        courses={courses}
        title="الجديدة"
        subtitle="الدورات"
        hasMorePages={
          coursesResponse?.pagination
            ? page < coursesResponse.pagination.pages
            : true
        }
      />
    </section>
  );
};

export default NewCoursesSection;
