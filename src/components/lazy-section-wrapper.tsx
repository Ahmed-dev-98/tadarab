import React, { ReactNode } from "react";
import { useIntersectionObserver } from "@/lib/hooks/useIntersectionObserver";

interface LazySectionWrapperProps {
  children: ReactNode;
  onIntersect?: () => void;
  threshold?: number;
  rootMargin?: string;
  triggerOnce?: boolean;
  className?: string;
}

const LazySectionWrapper: React.FC<LazySectionWrapperProps> = ({
  children,
  onIntersect,
  threshold = 0.1,
  rootMargin = "100px",
  triggerOnce = true,
  className = "",
}) => {
  const { ref, hasTriggered } = useIntersectionObserver({
    threshold,
    rootMargin,
    triggerOnce,
  });

  // Call onIntersect when the section comes into view
  React.useEffect(() => {
    if (hasTriggered && onIntersect) {
      onIntersect();
    }
  }, [hasTriggered, onIntersect]);

  return (
    <section ref={ref} className={className}>
      {children}
    </section>
  );
};

export default LazySectionWrapper;
