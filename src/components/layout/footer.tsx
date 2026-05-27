import Link from 'next/link';

export default function Footer() {
  return (
    <footer className="bg-gray-900 text-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
        <div className="grid grid-cols-1 md:grid-cols-4 gap-8">
          <div>
            <h3 className="text-2xl font-bold text-blue-400 mb-4">TechHub</h3>
            <p className="text-gray-300 mb-4">
              Your premier destination for cutting-edge electronics and tech accessories.
            </p>
            <div className="flex space-x-4">
              <a href="#" className="text-gray-400 hover:text-white transition-colors">
                Facebook
              </a>
              <a href="#" className="text-gray-400 hover:text-white transition-colors">
                Twitter
              </a>
              <a href="#" className="text-gray-400 hover:text-white transition-colors">
                Instagram
              </a>
            </div>
          </div>

          <div>
            <h4 className="text-lg font-semibold mb-4">Shop</h4>
            <ul className="space-y-2">
              <li><Link href="/products" className="text-gray-300 hover:text-white transition-colors">All Products</Link></li>
              <li><Link href="/categories" className="text-gray-300 hover:text-white transition-colors">Categories</Link></li>
              <li><Link href="/deals" className="text-gray-300 hover:text-white transition-colors">Deals</Link></li>
              <li><Link href="/new-arrivals" className="text-gray-300 hover:text-white transition-colors">New Arrivals</Link></li>
            </ul>
          </div>

          <div>
            <h4 className="text-lg font-semibold mb-4">Support</h4>
            <ul className="space-y-2">
              <li><Link href="/contact" className="text-gray-300 hover:text-white transition-colors">Contact Us</Link></li>
              <li><Link href="/shipping" className="text-gray-300 hover:text-white transition-colors">Shipping Info</Link></li>
              <li><Link href="/returns" className="text-gray-300 hover:text-white transition-colors">Returns</Link></li>
              <li><Link href="/faq" className="text-gray-300 hover:text-white transition-colors">FAQ</Link></li>
            </ul>
          </div>

          <div>
            <h4 className="text-lg font-semibold mb-4">Store Locations</h4>
            <ul className="space-y-2">
              <li><Link href="/stores" className="text-gray-300 hover:text-white transition-colors">Find a Store</Link></li>
              <li><Link href="/stores" className="text-gray-300 hover:text-white transition-colors">Store Hours</Link></li>
              <li><Link href="/stores" className="text-gray-300 hover:text-white transition-colors">Services</Link></li>
            </ul>
          </div>
        </div>

        <div className="border-t border-gray-800 mt-8 pt-8 text-center">
          <p className="text-gray-400">
            &copy; 2024 TechHub. All rights reserved.
          </p>
        </div>
      </div>
    </footer>
  );
}