import { useQuery, UseQueryOptions, } from '@tanstack/react-query';
import { useIntersectionObserver } from './useIntersectionObserver';

interface UseLazyQueryOptions<TData, TError> extends Omit<UseQueryOptions<TData, TError>, 'enabled'> {
    threshold?: number;
    rootMargin?: string;
    freezeOnceVisible?: boolean;
}

export const useLazyQuery = <TData, TError>(
    options: UseLazyQueryOptions<TData, TError>
) => {
    const {
        threshold = 0.1,
        rootMargin = '100px',
        freezeOnceVisible = true,
        ...queryOptions
    } = options;

    const { elementRef, isIntersecting } = useIntersectionObserver({
        threshold,
        rootMargin,
        freezeOnceVisible,
    });

    const queryResult = useQuery<TData, TError>({
        ...queryOptions,
        enabled: isIntersecting, // Only enable the query when the section is visible
    });

    return {
        ...queryResult,
        ref: elementRef,
        hasTriggered: isIntersecting,
    };
};
