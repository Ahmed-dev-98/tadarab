"use client";

import React, { useState } from "react";
import CarouselContainer from "@/components/carousel-container";
import { useCategories } from "@/lib/hooks";
import { useQuery } from "@tanstack/react-query";
import { coursesApi, CoursesResponse } from "@/lib/api/courses";
import { Course } from "@/types/course";

const BestsellingSection: React.FC = () => {
  const [page, setPage] = useState(1);
  const [selectedCategory, setSelectedCategory] = useState<number | null>(null);
  const [courses, setCourses] = useState<Course[]>([]);
  const {
    data: coursesResponse,
    isLoading,
    error,
  } = useQuery<CoursesResponse>({
    queryKey: ["bestselling-courses", page, selectedCategory],
    queryFn: () =>
      coursesApi
        .getBestsellingCourses({
          page,
          per_page: 10,
          scopes: ["best-seller", selectedCategory?.toString() || "null"],
        })
        .then((res) => {
          setCourses((prev) => [...prev, ...res.data]);
          return res;
        }),
  });

  const { data: categoriesResponse } = useCategories();
  const categories = categoriesResponse?.data || [];

  const handleLoadMore = () => {
    if (
      coursesResponse?.pagination &&
      page < coursesResponse.pagination.pages
    ) {
      setPage((prev) => prev + 1);
    }
  };

  const onCategoryClick = (categoryId: number) => {
    if (categoryId !== selectedCategory) {
      setSelectedCategory(categoryId);
      setPage(1);
      setCourses([]);
    }
  };

  return (
    <CarouselContainer
      isLoading={isLoading}
      error={error}
      onLoadMore={handleLoadMore}
      categories={categories}
      onCategoryClick={onCategoryClick}
      courses={courses}
      title="الأكثر مبيعاً"
      subtitle="الدورات"
      hasMorePages={
        coursesResponse?.pagination
          ? page < coursesResponse.pagination.pages
          : true
      }
    />
  );
};

export default BestsellingSection;
