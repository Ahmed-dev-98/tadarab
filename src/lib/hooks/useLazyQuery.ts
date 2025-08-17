import { useQuery, UseQueryOptions, UseQueryResult } from '@tanstack/react-query';
import { useIntersectionObserver } from './useIntersectionObserver';

interface UseLazyQueryOptions<TData, TError> extends Omit<UseQueryOptions<TData, TError>, 'enabled'> {
    threshold?: number;
    rootMargin?: string;
    triggerOnce?: boolean;
}

export const useLazyQuery = <TData, TError>(
    options: UseLazyQueryOptions<TData, TError>
) => {
    const {
        threshold = 0.1,
        rootMargin = '100px',
        triggerOnce = true,
        ...queryOptions
    } = options;

    const { ref, hasTriggered } = useIntersectionObserver({
        threshold,
        rootMargin,
        triggerOnce,
    });

    const queryResult = useQuery<TData, TError>({
        ...queryOptions,
        enabled: hasTriggered, // Only enable the query when the section is visible
    });

    return {
        ...queryResult,
        ref,
        hasTriggered,
    };
};
