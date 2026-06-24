import Link from 'next/link';
import Image from 'next/image';
import { Product } from '@/lib/types';
import { StarIcon, MinusIcon, PlusIcon } from '@heroicons/react/24/solid';
import { StarIcon as StarOutlineIcon, ShoppingCartIcon as ShoppingCartOutlineIcon } from '@heroicons/react/24/outline';
import { useCart } from '@/contexts/cart-context';

interface ProductCardProps {
  product: Product;
}

export default function ProductCard({ product }: ProductCardProps) {
  const { addItem, isInCart, items, updateQuantity } = useCart();
  const discountedPrice = product.price * (1 - product.discountPercentage / 100);
  const fullStars = Math.floor(product.rating);
  const hasHalfStar = product.rating % 1 !== 0;
  const inCart = isInCart(product.id);
  const cartItem = items.find(item => item.id === product.id);
  const quantity = cartItem?.quantity ?? 0;

  const handleAddToCart = () => {
    if (!inCart) {
      addItem(product);
    }
  };

  const handleDecrement = (e: React.MouseEvent) => {
    e.preventDefault();
    updateQuantity(product.id, quantity - 1);
  };

  const handleIncrement = (e: React.MouseEvent) => {
    e.preventDefault();
    addItem(product);
  };

  return (
    <div className="bg-white rounded-lg shadow-md overflow-hidden hover:shadow-lg transition-shadow group">
      <Link href={`/products/${product.id}`}>
        <div className="relative h-64 bg-gray-100">
          <Image
            src={product.thumbnail}
            alt={product.title}
            fill
            className="object-cover group-hover:scale-105 transition-transform duration-300"
            sizes="(max-width: 768px) 100vw, (max-width: 1200px) 50vw, 25vw"
          />
          {product.discountPercentage > 0 && (
            <div className="absolute top-2 right-2 bg-red-500 text-white px-2 py-1 rounded-md text-sm font-semibold">
              -{Math.round(product.discountPercentage)}%
            </div>
          )}
        </div>
      </Link>

      <div className="p-4">
        <Link href={`/products/${product.id}`}>
          <h3 className="font-semibold text-gray-900 mb-2 line-clamp-2 hover:text-blue-600 transition-colors">
            {product.title}
          </h3>
        </Link>

        <div className="flex items-center mb-2">
          <div className="flex items-center">
            {[...Array(5)].map((_, i) => {
              if (i < fullStars) {
                return <StarIcon key={i} className="h-4 w-4 text-yellow-400" />;
              } else if (i === fullStars && hasHalfStar) {
                return <StarIcon key={i} className="h-4 w-4 text-yellow-400" />;
              } else {
                return <StarOutlineIcon key={i} className="h-4 w-4 text-gray-300" />;
              }
            })}
          </div>
          <span className="text-sm text-gray-600 ml-2">({product.rating})</span>
        </div>

        <div className="flex items-center justify-between mb-3">
          <div className="flex items-center space-x-2">
            <span className="text-lg font-bold text-gray-900">
              ${discountedPrice.toFixed(2)}
            </span>
            {product.discountPercentage > 0 && (
              <span className="text-sm text-gray-500 line-through">
                ${product.price.toFixed(2)}
              </span>
            )}
          </div>
          <span className="text-sm text-gray-600">{product.brand}</span>
        </div>

        <div className="flex items-center justify-between">
          <span className="text-sm text-gray-600">
            {product.stock > 0 ? `${product.stock} in stock` : 'Out of stock'}
          </span>
          {inCart ? (
            <div className="flex items-center gap-1 bg-green-600 rounded-lg shadow-lg overflow-hidden">
              <button
                onClick={handleDecrement}
                className="px-2 py-2 text-white hover:bg-green-700 transition-colors"
                title="Remove one"
              >
                <MinusIcon className="h-3 w-3" />
              </button>
              <span className="px-1 text-white text-sm font-semibold min-w-[20px] text-center">
                {quantity}
              </span>
              <button
                onClick={handleIncrement}
                className="px-2 py-2 text-white hover:bg-green-700 transition-colors"
                title="Add one more"
              >
                <PlusIcon className="h-3 w-3" />
              </button>
            </div>
          ) : (
            <button
              onClick={handleAddToCart}
              className={`p-2 rounded-lg transition-all duration-300 disabled:cursor-not-allowed ${
                product.stock === 0
                  ? 'bg-gray-400 text-white cursor-not-allowed'
                  : 'border-2 border-blue-600 text-blue-600 hover:bg-blue-600 hover:text-white'
              }`}
              disabled={product.stock === 0}
              title="Add to cart"
            >
              <ShoppingCartOutlineIcon className="h-4 w-4" />
            </button>
          )}
        </div>
      </div>
    </div>
  );
}