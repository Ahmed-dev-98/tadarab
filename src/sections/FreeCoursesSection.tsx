import CarouselContainer from "@/components/carousel-container";
import { Course } from "@/types/course";
import { useLazyQuery } from "@/lib/hooks";
import React, { useState } from "react";
import { coursesApi, CoursesResponse } from "@/lib/api/courses";

const FreeCoursesSection = () => {
  const [page, setPage] = useState(1);
  const [courses, setCourses] = useState<Course[]>([]);

  const {
    data: coursesResponse,
    isLoading,
    error,
    ref,
  } = useLazyQuery<CoursesResponse, Error>({
    queryKey: ["free-courses", page],
    queryFn: () =>
      coursesApi
        .getBestsellingCourses({
          page,
          per_page: 10,
          scopes: ["free"],
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
        hasMorePages={
          coursesResponse?.pagination
            ? page < coursesResponse.pagination.pages
            : true
        }
        title="المجانية"
        subtitle="الدورات"
      />
    </section>
  );
};

export default FreeCoursesSection;
