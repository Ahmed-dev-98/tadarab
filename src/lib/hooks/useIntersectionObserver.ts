import { useEffect, useRef, useState, useCallback } from 'react';

interface UseIntersectionObserverOptions {
    threshold?: number;
    rootMargin?: string;
    freezeOnceVisible?: boolean;
}

export function useIntersectionObserver<T extends HTMLElement = HTMLElement>(
    options: UseIntersectionObserverOptions = {}
) {
    const { threshold = 0.1, rootMargin = '300px', freezeOnceVisible = true } = options;
    const [isIntersecting, setIsIntersecting] = useState(false);
    const [hasIntersected, setHasIntersected] = useState(false);
    const elementRef = useRef<T>(null);

    const callback = useCallback(
        (entries: IntersectionObserverEntry[]) => {
            entries.forEach((entry) => {
                if (entry.isIntersecting) {
                    setIsIntersecting(true);
                    if (freezeOnceVisible) {
                        setHasIntersected(true);
                    }
                } else if (!freezeOnceVisible) {
                    setIsIntersecting(false);
                }
            });
        },
        [freezeOnceVisible]
    );

    useEffect(() => {
        const element = elementRef.current;
        if (!element) return;

        const observer = new IntersectionObserver(callback, {
            threshold,
            rootMargin,
        });

        observer.observe(element);

        return () => {
            observer.disconnect();
        };
    }, [callback, threshold, rootMargin]);

    return { elementRef, isIntersecting: hasIntersected || isIntersecting };
}
