'use client';

import { useInfiniteQuery } from '@tanstack/react-query';
import { api } from '@/lib/api/products';

export function useInfiniteProducts(category?: string) {
  return useInfiniteQuery({
    queryKey: ['products', 'infinite', category],
    queryFn: ({ pageParam = 0 }) => {
      if (category) {
        return api.getProductsByCategory(category, 20, pageParam);
      }
      return api.getProducts(20, pageParam);
    },
    getNextPageParam: (lastPage) => {
      const nextSkip = lastPage.skip + lastPage.limit;
      return nextSkip < lastPage.total ? nextSkip : undefined;
    },
    initialPageParam: 0,
  });
}