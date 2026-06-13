import Link from 'next/link';
import { ArrowRightIcon, ShoppingBagIcon, MapPinIcon, DevicePhoneMobileIcon } from '@heroicons/react/24/outline';

export default function Home() {
  return (
    <div className="bg-gradient-to-b from-blue-50 to-white">
      <section className="relative min-h-screen overflow-hidden">
        {/* Background Video */}
        <video
          autoPlay
          muted
          loop
          className="absolute inset-0 w-full h-full object-cover"
        >
          <source src="https://player.vimeo.com/external/434045526.sd.mp4?s=c27eecc69fabf212b2e2c7b8b8c7e6c5a2d5a3e7&profile_id=164&oauth2_token_id=57447761" type="video/mp4" />
          <source src="https://videos.pexels.com/video-files/3209828/3209828-uhd_2560_1440_25fps.mp4" type="video/mp4" />
        </video>

        {/* Overlay */}
        <div className="absolute inset-0 bg-black bg-opacity-60"></div>

        {/* Content */}
        <div className="relative z-10 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-20 min-h-screen flex items-center">
          <div className="text-center w-full">
            <h1 className="text-4xl md:text-6xl font-bold text-white mb-6 drop-shadow-lg">
              Welcome to <span className="text-blue-400 glow">TechHub</span>
            </h1>
            <p className="text-xl text-gray-200 mb-8 max-w-2xl mx-auto drop-shadow-md">
              Discover the latest electronics, gadgets, and tech accessories at unbeatable prices.
              Quality products with fast shipping and excellent customer service.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <Link
                href="/products"
                className="bg-blue-600 text-white px-8 py-3 rounded-lg hover:bg-blue-700 transition-all duration-300 flex items-center justify-center group shadow-lg hover:shadow-xl transform hover:scale-105"
              >
                Shop Now
                <ArrowRightIcon className="ml-2 h-5 w-5 group-hover:translate-x-1 transition-transform" />
              </Link>
              <Link
                href="/categories"
                className="border-2 border-white text-white px-8 py-3 rounded-lg hover:bg-white hover:text-gray-900 transition-all duration-300 shadow-lg backdrop-blur-sm"
              >
                Browse Categories
              </Link>
            </div>
          </div>
        </div>
      </section>

      <section className="bg-white/95 backdrop-blur-sm py-20">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-3xl font-bold text-gray-900 mb-4">Why Choose TechHub?</h2>
            <p className="text-lg text-gray-600 max-w-2xl mx-auto">
              Experience the future of technology shopping with our premium features and services
            </p>
          </div>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            <div className="text-center p-8 rounded-xl bg-gradient-to-br from-blue-50 to-indigo-100 hover:from-blue-100 hover:to-indigo-200 transition-all duration-300 transform hover:scale-105 shadow-lg">
              <div className="bg-gradient-to-r from-blue-500 to-indigo-600 w-16 h-16 rounded-full flex items-center justify-center mx-auto mb-6 shadow-lg">
                <ShoppingBagIcon className="h-8 w-8 text-white" />
              </div>
              <h3 className="text-xl font-semibold text-gray-900 mb-3">Wide Selection</h3>
              <p className="text-gray-700">
                Browse thousands of products across multiple categories with detailed specifications and reviews.
              </p>
            </div>

            <div className="text-center p-8 rounded-xl bg-gradient-to-br from-purple-50 to-pink-100 hover:from-purple-100 hover:to-pink-200 transition-all duration-300 transform hover:scale-105 shadow-lg">
              <div className="bg-gradient-to-r from-purple-500 to-pink-600 w-16 h-16 rounded-full flex items-center justify-center mx-auto mb-6 shadow-lg">
                <DevicePhoneMobileIcon className="h-8 w-8 text-white" />
              </div>
              <h3 className="text-xl font-semibold text-gray-900 mb-3">Latest Technology</h3>
              <p className="text-gray-700">
                Stay ahead with the newest smartphones, laptops, and cutting-edge tech accessories.
              </p>
            </div>

            <div className="text-center p-8 rounded-xl bg-gradient-to-br from-green-50 to-emerald-100 hover:from-green-100 hover:to-emerald-200 transition-all duration-300 transform hover:scale-105 shadow-lg">
              <div className="bg-gradient-to-r from-green-500 to-emerald-600 w-16 h-16 rounded-full flex items-center justify-center mx-auto mb-6 shadow-lg">
                <MapPinIcon className="h-8 w-8 text-white" />
              </div>
              <h3 className="text-xl font-semibold text-gray-900 mb-3">Store Locations</h3>
              <p className="text-gray-700">
                Visit our physical stores for hands-on experience and expert advice from our team.
              </p>
            </div>
          </div>
        </div>
      </section>

      <section className="relative bg-gradient-to-r from-gray-900 via-blue-900 to-indigo-900 text-white py-20 overflow-hidden">
        <div className="absolute inset-0 bg-black/30"></div>
        <div className="relative z-10 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <h2 className="text-4xl font-bold mb-6 bg-gradient-to-r from-blue-400 to-purple-400 bg-clip-text text-transparent">
            Ready to Find Your Perfect Device?
          </h2>
          <p className="text-xl text-gray-200 mb-10 max-w-3xl mx-auto">
            Join thousands of satisfied customers who trust TechHub for their technology needs.
            Experience the future of shopping today.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <Link
              href="/products"
              className="bg-gradient-to-r from-blue-600 to-purple-600 text-white px-10 py-4 rounded-lg hover:from-blue-700 hover:to-purple-700 transition-all duration-300 inline-flex items-center group shadow-xl transform hover:scale-105"
            >
              Start Shopping
              <ArrowRightIcon className="ml-2 h-5 w-5 group-hover:translate-x-1 transition-transform" />
            </Link>
            <Link
              href="/stores"
              className="border-2 border-white/50 text-white px-10 py-4 rounded-lg hover:bg-white hover:text-gray-900 transition-all duration-300 backdrop-blur-sm shadow-xl"
            >
              Find Stores
            </Link>
          </div>
        </div>

        {/* Decorative elements */}
        <div className="absolute top-0 left-0 w-full h-full opacity-10">
          <div className="absolute top-10 left-10 w-20 h-20 bg-blue-400 rounded-full blur-xl"></div>
          <div className="absolute bottom-10 right-10 w-32 h-32 bg-purple-400 rounded-full blur-xl"></div>
          <div className="absolute top-1/2 left-1/4 w-16 h-16 bg-indigo-400 rounded-full blur-xl"></div>
        </div>
      </section>
    </div>
  );
}
