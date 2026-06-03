'use client';

import { Suspense, lazy, use } from 'react';
import { useInfiniteQuery } from '@tanstack/react-query';
import { useInView } from 'react-intersection-observer';
import { useEffect } from 'react';
import { api } from '@/lib/api/products';

const ProductCard = lazy(() => import('@/components/product/product-card'));

interface CategoryPageProps {
  params: Promise<{ slug: string }>;
}

function ProductsSkeleton() {
  return (
    <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-6">
      {[...Array(8)].map((_, i) => (
        <div key={i} className="animate-pulse">
          <div className="bg-gray-300 h-64 rounded-lg mb-4"></div>
          <div className="h-4 bg-gray-300 rounded mb-2"></div>
          <div className="h-4 bg-gray-300 rounded w-2/3 mb-2"></div>
          <div className="h-4 bg-gray-300 rounded w-1/3"></div>
        </div>
      ))}
    </div>
  );
}

export default function CategoryPage({ params }: CategoryPageProps) {
  const { slug } = use(params);

  const {
    data,
    fetchNextPage,
    hasNextPage,
    isFetchingNextPage,
    isLoading,
    error
  } = useInfiniteQuery({
    queryKey: ['products', 'category', slug],
    queryFn: ({ pageParam = 0 }) => api.getProductsByCategory(slug, 20, pageParam),
    getNextPageParam: (lastPage) => {
      const nextSkip = lastPage.skip + lastPage.limit;
      return nextSkip < lastPage.total ? nextSkip : undefined;
    },
    initialPageParam: 0,
  });

  const { ref, inView } = useInView({
    threshold: 0,
  });

  useEffect(() => {
    if (inView && hasNextPage && !isFetchingNextPage) {
      fetchNextPage();
    }
  }, [inView, hasNextPage, isFetchingNextPage, fetchNextPage]);

  const formatCategoryName = (slug: string) => {
    return slug
      .split('-')
      .map(word => word.charAt(0).toUpperCase() + word.slice(1))
      .join(' ');
  };

  if (isLoading) {
    return (
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-8">
        <div className="mb-8">
          <h1 className="text-3xl font-bold text-gray-900 mb-2">
            {formatCategoryName(slug)}
          </h1>
          <div className="h-4 bg-gray-300 rounded w-64 animate-pulse"></div>
        </div>
        <ProductsSkeleton />
      </div>
    );
  }

  if (error) {
    return (
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-8">
        <h1 className="text-3xl font-bold text-gray-900 mb-8">
          {formatCategoryName(slug)}
        </h1>
        <div className="text-center py-12">
          <p className="text-red-600 text-lg">Failed to load products. Please try again.</p>
        </div>
      </div>
    );
  }

  const allProducts = data?.pages.flatMap(page => page.products) ?? [];

  return (
    <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-8">
      <div className="mb-8">
        <nav className="flex" aria-label="Breadcrumb">
          <ol className="flex items-center space-x-4">
            <li>
              <a href="/categories" className="text-gray-500 hover:text-gray-700">
                Categories
              </a>
            </li>
            <li>
              <span className="text-gray-500">{'>'}</span>
            </li>
            <li>
              <span className="text-gray-900 font-medium">
                {formatCategoryName(slug)}
              </span>
            </li>
          </ol>
        </nav>

        <h1 className="text-3xl font-bold text-gray-900 mt-4 mb-2">
          {formatCategoryName(slug)}
        </h1>
        <p className="text-gray-600">
          {allProducts.length > 0
            ? `Showing ${allProducts.length} of ${data?.pages[0]?.total || 0} products`
            : 'Loading products...'
          }
        </p>
      </div>

      {allProducts.length === 0 && !isLoading ? (
        <div className="text-center py-12">
          <p className="text-gray-500 text-lg">No products found in this category.</p>
        </div>
      ) : (
        <>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-6">
            {allProducts.map((product) => (
              <Suspense key={product.id} fallback={
                <div className="animate-pulse">
                  <div className="bg-gray-300 h-64 rounded-lg mb-4"></div>
                  <div className="h-4 bg-gray-300 rounded mb-2"></div>
                  <div className="h-4 bg-gray-300 rounded w-2/3"></div>
                </div>
              }>
                <ProductCard product={product} />
              </Suspense>
            ))}
          </div>

          {hasNextPage && (
            <div ref={ref} className="flex justify-center py-8">
              {isFetchingNextPage ? (
                <div className="animate-spin rounded-full h-8 w-8 border-b-2 border-blue-600"></div>
              ) : (
                <div className="h-8"></div>
              )}
            </div>
          )}

          {!hasNextPage && allProducts.length > 0 && (
            <div className="text-center py-8">
              <p className="text-gray-500">You&apos;ve reached the end of this category!</p>
            </div>
          )}
        </>
      )}
    </div>
  );
}