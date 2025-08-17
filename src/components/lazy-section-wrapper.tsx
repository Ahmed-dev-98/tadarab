import React, { Suspense } from "react";
import { useIntersectionObserver } from "@/lib/hooks/useIntersectionObserver";

interface LazySectionWrapperProps {
  children: React.ReactNode;
  fallback?: React.ReactNode;
  threshold?: number;
  rootMargin?: string;
  className?: string;
}

export default function LazySectionWrapper({
  children,
  fallback = <div className="h-96 bg-transparent animate-pulse rounded-lg" />,
  threshold = 0.1,
  rootMargin = "300px",
  className = "",
}: LazySectionWrapperProps) {
  const { elementRef, isIntersecting } =
    useIntersectionObserver<HTMLDivElement>({
      threshold,
      rootMargin,
      freezeOnceVisible: true,
    });

  return (
    <div ref={elementRef} className={className}>
      {isIntersecting ? (
        <Suspense fallback={fallback}>{children}</Suspense>
      ) : (
        fallback
      )}
    </div>
  );
}
