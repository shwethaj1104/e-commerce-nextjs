import { notFound } from 'next/navigation';
import Image from 'next/image';
import { api } from '@/lib/api/products';
import { StarIcon, ShoppingCartIcon, HeartIcon } from '@heroicons/react/24/solid';
import { StarIcon as StarOutlineIcon, HeartIcon as HeartOutlineIcon } from '@heroicons/react/24/outline';

interface ProductPageProps {
  params: Promise<{ id: string }>;
}

export default async function ProductPage({ params }: ProductPageProps) {
  const { id } = await params;

  try {
    const product = await api.getProduct(id);
    const discountedPrice = product.price * (1 - product.discountPercentage / 100);
    const fullStars = Math.floor(product.rating);
    const hasHalfStar = product.rating % 1 !== 0;

    return (
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-8">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12">
          <div className="space-y-4">
            <div className="aspect-square bg-gray-100 rounded-lg overflow-hidden">
              <Image
                src={product.images[0] || product.thumbnail}
                alt={product.title}
                width={600}
                height={600}
                className="w-full h-full object-cover"
                priority
              />
            </div>

            {product.images.length > 1 && (
              <div className="grid grid-cols-4 gap-4">
                {product.images.slice(1, 5).map((image, index) => (
                  <div key={index} className="aspect-square bg-gray-100 rounded-lg overflow-hidden">
                    <Image
                      src={image}
                      alt={`${product.title} view ${index + 2}`}
                      width={150}
                      height={150}
                      className="w-full h-full object-cover hover:scale-105 transition-transform cursor-pointer"
                    />
                  </div>
                ))}
              </div>
            )}
          </div>

          <div className="space-y-6">
            <div>
              <h1 className="text-3xl font-bold text-gray-900 mb-2">{product.title}</h1>
              <p className="text-gray-600 mb-4">{product.brand}</p>

              <div className="flex items-center mb-4">
                <div className="flex items-center">
                  {[...Array(5)].map((_, i) => {
                    if (i < fullStars) {
                      return <StarIcon key={i} className="h-5 w-5 text-yellow-400" />;
                    } else if (i === fullStars && hasHalfStar) {
                      return <StarIcon key={i} className="h-5 w-5 text-yellow-400" />;
                    } else {
                      return <StarOutlineIcon key={i} className="h-5 w-5 text-gray-300" />;
                    }
                  })}
                </div>
                <span className="text-gray-600 ml-2">({product.rating})</span>
              </div>
            </div>

            <div className="border-t border-gray-200 pt-6">
              <div className="flex items-center space-x-4 mb-4">
                <span className="text-3xl font-bold text-gray-900">
                  ${discountedPrice.toFixed(2)}
                </span>
                {product.discountPercentage > 0 && (
                  <>
                    <span className="text-xl text-gray-500 line-through">
                      ${product.price.toFixed(2)}
                    </span>
                    <span className="bg-red-100 text-red-800 px-2 py-1 rounded-md text-sm font-semibold">
                      Save {Math.round(product.discountPercentage)}%
                    </span>
                  </>
                )}
              </div>

              <div className="mb-6">
                <span className={`text-sm font-medium ${product.stock > 0 ? 'text-green-600' : 'text-red-600'}`}>
                  {product.stock > 0 ? `${product.stock} in stock` : 'Out of stock'}
                </span>
              </div>
            </div>

            <div className="border-t border-gray-200 pt-6">
              <h3 className="text-lg font-semibold text-gray-900 mb-3">Description</h3>
              <p className="text-gray-600 leading-relaxed">{product.description}</p>
            </div>

            <div className="border-t border-gray-200 pt-6">
              <div className="flex space-x-4">
                <button
                  className="flex-1 bg-blue-600 text-white py-3 px-6 rounded-lg hover:bg-blue-700 transition-colors disabled:bg-gray-400 disabled:cursor-not-allowed flex items-center justify-center space-x-2"
                  disabled={product.stock === 0}
                >
                  <ShoppingCartIcon className="h-5 w-5" />
                  <span>{product.stock === 0 ? 'Out of Stock' : 'Add to Cart'}</span>
                </button>

                <button className="p-3 border border-gray-300 rounded-lg hover:bg-gray-50 transition-colors">
                  <HeartOutlineIcon className="h-6 w-6 text-gray-600" />
                </button>
              </div>
            </div>

            <div className="border-t border-gray-200 pt-6">
              <div className="grid grid-cols-2 gap-4 text-sm">
                <div>
                  <span className="font-medium text-gray-900">Category:</span>
                  <span className="text-gray-600 ml-1">{product.category}</span>
                </div>
                <div>
                  <span className="font-medium text-gray-900">Brand:</span>
                  <span className="text-gray-600 ml-1">{product.brand}</span>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    );
  } catch (error) {
    notFound();
  }
}