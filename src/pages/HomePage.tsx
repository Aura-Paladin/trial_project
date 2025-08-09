import React from 'react';
import { ArrowRight, Gift, Shield, Zap, Star, TrendingUp, Users } from 'lucide-react';
import { Button } from '../components/ui/button';
import { ProductCard } from '../components/common/ProductCard';
import { CategoryCard } from '../components/common/CategoryCard';

interface HomePageProps {
  onNavigate: (page: string) => void;
}

export const HomePage: React.FC<HomePageProps> = ({ onNavigate }) => {
  const featuredProducts = [
    {
      id: '1',
      title: 'Premium Wireless Headphones',
      brand: 'AudioTech',
      image: 'https://images.pexels.com/photos/3394650/pexels-photo-3394650.jpeg?auto=compress&cs=tinysrgb&w=400&h=300&fit=crop',
      category: 'Electronics',
      rating: 4.8,
      reviewCount: 124,
      claimedCount: 89,
      timeLeft: '2d 14h',
    },
    {
      id: '2',
      title: 'Organic Skincare Set',
      brand: 'NaturalGlow',
      image: 'https://images.pexels.com/photos/3685530/pexels-photo-3685530.jpeg?auto=compress&cs=tinysrgb&w=400&h=300&fit=crop',
      category: 'Beauty',
      rating: 4.9,
      reviewCount: 87,
      claimedCount: 156,
      timeLeft: '1d 8h',
    },
    {
      id: '3',
      title: 'Smart Fitness Tracker',
      brand: 'FitLife',
      image: 'https://images.pexels.com/photos/437037/pexels-photo-437037.jpeg?auto=compress&cs=tinysrgb&w=400&h=300&fit=crop',
      category: 'Health',
      rating: 4.7,
      reviewCount: 203,
      claimedCount: 234,
      timeLeft: '3d 2h',
    },
    {
      id: '4',
      title: 'Artisan Coffee Beans',
      brand: 'RoastMaster',
      image: 'https://images.pexels.com/photos/894695/pexels-photo-894695.jpeg?auto=compress&cs=tinysrgb&w=400&h=300&fit=crop',
      category: 'Food',
      rating: 4.6,
      reviewCount: 67,
      claimedCount: 98,
      timeLeft: '5d 12h',
    },
  ];

  const categories = [
    {
      name: 'Electronics',
      icon: <Zap className="w-5 h-5" />,
      productCount: 156,
      image: 'https://images.pexels.com/photos/356056/pexels-photo-356056.jpeg?auto=compress&cs=tinysrgb&w=300&h=200&fit=crop',
    },
    {
      name: 'Beauty',
      icon: <Star className="w-5 h-5" />,
      productCount: 89,
      image: 'https://images.pexels.com/photos/3685530/pexels-photo-3685530.jpeg?auto=compress&cs=tinysrgb&w=300&h=200&fit=crop',
    },
    {
      name: 'Health',
      icon: <Shield className="w-5 h-5" />,
      productCount: 124,
      image: 'https://images.pexels.com/photos/40751/running-runner-long-distance-fitness-40751.jpeg?auto=compress&cs=tinysrgb&w=300&h=200&fit=crop',
    },
    {
      name: 'Food',
      icon: <Gift className="w-5 h-5" />,
      productCount: 67,
      image: 'https://images.pexels.com/photos/1640777/pexels-photo-1640777.jpeg?auto=compress&cs=tinysrgb&w=300&h=200&fit=crop',
    },
  ];

  const handleClaim = (id: string) => {
    console.log('Claiming product:', id);
    onNavigate('claim');
  };

  const handleWishlist = (id: string) => {
    console.log('Adding to wishlist:', id);
  };

  const handleViewDetails = (id: string) => {
    console.log('Viewing product:', id);
    onNavigate('product');
  };

  return (
    <div className="min-h-screen bg-white">
      {/* Hero Section */}
      <section className="relative bg-gradient-to-br from-gray-50 to-white py-20 lg:py-32">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
            <div className="space-y-8">
              <div className="space-y-4">
                <h1 className="text-4xl lg:text-6xl font-bold text-gray-900 leading-tight">
                  Get Amazing
                  <span className="text-[#65E856] block">Products Free</span>
                </h1>
                <p className="text-xl text-gray-600 leading-relaxed">
                  Discover thousands of free products from trusted brands. No catch, no hidden fees - just amazing products waiting for you.
                </p>
              </div>
              
              <div className="flex flex-col sm:flex-row gap-4">
                <Button 
                  size="lg" 
                  className="bg-[#65E856] hover:bg-[#55d846] text-white px-8 py-4 text-lg font-semibold"
                  onClick={() => onNavigate('browse')}
                >
                  Start Browsing
                  <ArrowRight className="ml-2 w-5 h-5" />
                </Button>
                <Button 
                  variant="outline" 
                  size="lg"
                  className="px-8 py-4 text-lg font-semibold border-gray-300 hover:border-[#65E856] hover:text-[#65E856]"
                  onClick={() => onNavigate('about')}
                >
                  How It Works
                </Button>
              </div>

              <div className="flex items-center space-x-8 pt-4">
                <div className="text-center">
                  <div className="text-2xl font-bold text-gray-900">10K+</div>
                  <div className="text-sm text-gray-600">Products</div>
                </div>
                <div className="text-center">
                  <div className="text-2xl font-bold text-gray-900">50K+</div>
                  <div className="text-sm text-gray-600">Happy Users</div>
                </div>
                <div className="text-center">
                  <div className="text-2xl font-bold text-gray-900">100+</div>
                  <div className="text-sm text-gray-600">Brands</div>
                </div>
              </div>
            </div>
            
            <div className="relative">
              <div className="relative z-10">
                <img
                  src="https://images.pexels.com/photos/5632402/pexels-photo-5632402.jpeg?auto=compress&cs=tinysrgb&w=600&h=800&fit=crop"
                  alt="Happy person with free products"
                  className="rounded-2xl shadow-2xl"
                />
              </div>
              <div className="absolute -top-4 -right-4 w-72 h-72 bg-[#65E856]/10 rounded-full blur-3xl"></div>
              <div className="absolute -bottom-4 -left-4 w-72 h-72 bg-[#65E856]/5 rounded-full blur-3xl"></div>
            </div>
          </div>
        </div>
      </section>

      {/* Features Section */}
      <section className="py-20 bg-gray-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-3xl lg:text-4xl font-bold text-gray-900 mb-4">
              Why Choose Freely?
            </h2>
            <p className="text-xl text-gray-600 max-w-3xl mx-auto">
              We've made it simple and safe to discover and claim amazing free products from trusted brands.
            </p>
          </div>
          
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            <div className="text-center space-y-4">
              <div className="w-16 h-16 bg-[#65E856] rounded-full flex items-center justify-center mx-auto">
                <Shield className="w-8 h-8 text-white" />
              </div>
              <h3 className="text-xl font-semibold text-gray-900">100% Verified</h3>
              <p className="text-gray-600">
                All products are verified by our team. No scams, no fake offers - just genuine free products.
              </p>
            </div>
            
            <div className="text-center space-y-4">
              <div className="w-16 h-16 bg-[#65E856] rounded-full flex items-center justify-center mx-auto">
                <Zap className="w-8 h-8 text-white" />
              </div>
              <h3 className="text-xl font-semibold text-gray-900">Instant Claims</h3>
              <p className="text-gray-600">
                Claim products instantly with just one click. No lengthy forms or complicated processes.
              </p>
            </div>
            
            <div className="text-center space-y-4">
              <div className="w-16 h-16 bg-[#65E856] rounded-full flex items-center justify-center mx-auto">
                <Users className="w-8 h-8 text-white" />
              </div>
              <h3 className="text-xl font-semibold text-gray-900">Community Driven</h3>
              <p className="text-gray-600">
                Join thousands of users sharing reviews and discovering the best free products together.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* Featured Products */}
      <section className="py-20">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex items-center justify-between mb-12">
            <div>
              <h2 className="text-3xl lg:text-4xl font-bold text-gray-900 mb-4">
                Featured Products
              </h2>
              <p className="text-xl text-gray-600">
                Hand-picked free products that are trending right now
              </p>
            </div>
            <Button 
              variant="outline"
              onClick={() => onNavigate('browse')}
              className="hidden md:flex items-center space-x-2 border-gray-300 hover:border-[#65E856] hover:text-[#65E856]"
            >
              <span>View All</span>
              <ArrowRight className="w-4 h-4" />
            </Button>
          </div>
          
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
            {featuredProducts.map((product) => (
              <ProductCard
                key={product.id}
                {...product}
                onClaim={handleClaim}
                onWishlist={handleWishlist}
                onViewDetails={handleViewDetails}
              />
            ))}
          </div>
          
          <div className="text-center mt-8 md:hidden">
            <Button 
              variant="outline"
              onClick={() => onNavigate('browse')}
              className="border-gray-300 hover:border-[#65E856] hover:text-[#65E856]"
            >
              View All Products
              <ArrowRight className="ml-2 w-4 h-4" />
            </Button>
          </div>
        </div>
      </section>

      {/* Categories */}
      <section className="py-20 bg-gray-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-12">
            <h2 className="text-3xl lg:text-4xl font-bold text-gray-900 mb-4">
              Browse by Category
            </h2>
            <p className="text-xl text-gray-600">
              Find exactly what you're looking for in our organized categories
            </p>
          </div>
          
          <div className="grid grid-cols-2 lg:grid-cols-4 gap-6">
            {categories.map((category) => (
              <CategoryCard
                key={category.name}
                {...category}
                onClick={() => onNavigate('categories')}
              />
            ))}
          </div>
        </div>
      </section>

      {/* Stats Section */}
      <section className="py-20">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="bg-gradient-to-r from-[#65E856] to-[#55d846] rounded-2xl p-8 lg:p-16 text-white">
            <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
              <div className="space-y-6">
                <h2 className="text-3xl lg:text-4xl font-bold">
                  Join the Freely Community
                </h2>
                <p className="text-xl opacity-90">
                  Thousands of users have already saved money and discovered amazing products. Be part of the movement!
                </p>
                <Button 
                  size="lg"
                  variant="secondary"
                  className="bg-white text-[#65E856] hover:bg-gray-100 px-8 py-4 text-lg font-semibold"
                  onClick={() => onNavigate('register')}
                >
                  Join Now - It's Free!
                </Button>
              </div>
              
              <div className="grid grid-cols-2 gap-8">
                <div className="text-center">
                  <div className="text-4xl font-bold mb-2">$2.5M+</div>
                  <div className="opacity-90">Money Saved</div>
                </div>
                <div className="text-center">
                  <div className="text-4xl font-bold mb-2">98%</div>
                  <div className="opacity-90">Satisfaction Rate</div>
                </div>
                <div className="text-center">
                  <div className="text-4xl font-bold mb-2">24/7</div>
                  <div className="opacity-90">Support</div>
                </div>
                <div className="text-center">
                  <div className="text-4xl font-bold mb-2">500+</div>
                  <div className="opacity-90">New Products Weekly</div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
};