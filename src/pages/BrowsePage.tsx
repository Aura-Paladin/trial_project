import React, { useState } from 'react';
import { Filter, Grid, List, SlidersHorizontal } from 'lucide-react';
import { Button } from '../components/ui/button';
import { Input } from '../components/ui/input';
import { ProductCard } from '../components/common/ProductCard';
import { Badge } from '../components/ui/badge';

interface BrowsePageProps {
  onNavigate: (page: string) => void;
}

export const BrowsePage: React.FC<BrowsePageProps> = ({ onNavigate }) => {
  const [viewMode, setViewMode] = useState<'grid' | 'list'>('grid');
  const [selectedCategory, setSelectedCategory] = useState<string>('all');
  const [sortBy, setSortBy] = useState<string>('newest');
  const [showFilters, setShowFilters] = useState(false);

  const categories = [
    { id: 'all', name: 'All Categories', count: 436 },
    { id: 'electronics', name: 'Electronics', count: 156 },
    { id: 'beauty', name: 'Beauty & Health', count: 89 },
    { id: 'home', name: 'Home & Garden', count: 67 },
    { id: 'food', name: 'Food & Beverages', count: 45 },
    { id: 'fashion', name: 'Fashion', count: 79 },
  ];

  const products = [
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
    {
      id: '5',
      title: 'Eco-Friendly Water Bottle',
      brand: 'GreenLife',
      image: 'https://images.pexels.com/photos/1000084/pexels-photo-1000084.jpeg?auto=compress&cs=tinysrgb&w=400&h=300&fit=crop',
      category: 'Home',
      rating: 4.5,
      reviewCount: 156,
      claimedCount: 78,
      timeLeft: '4d 6h',
    },
    {
      id: '6',
      title: 'Luxury Hand Cream',
      brand: 'SkinCare Pro',
      image: 'https://images.pexels.com/photos/4465124/pexels-photo-4465124.jpeg?auto=compress&cs=tinysrgb&w=400&h=300&fit=crop',
      category: 'Beauty',
      rating: 4.8,
      reviewCount: 92,
      claimedCount: 134,
      timeLeft: '6d 18h',
    },
    {
      id: '7',
      title: 'Bluetooth Speaker',
      brand: 'SoundWave',
      image: 'https://images.pexels.com/photos/1649771/pexels-photo-1649771.jpeg?auto=compress&cs=tinysrgb&w=400&h=300&fit=crop',
      category: 'Electronics',
      rating: 4.7,
      reviewCount: 178,
      claimedCount: 89,
      timeLeft: '2d 22h',
    },
    {
      id: '8',
      title: 'Organic Tea Sampler',
      brand: 'TeaTime',
      image: 'https://images.pexels.com/photos/1638280/pexels-photo-1638280.jpeg?auto=compress&cs=tinysrgb&w=400&h=300&fit=crop',
      category: 'Food',
      rating: 4.6,
      reviewCount: 45,
      claimedCount: 67,
      timeLeft: '7d 4h',
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
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-8">
        {/* Header */}
        <div className="mb-8">
          <h1 className="text-3xl lg:text-4xl font-bold text-gray-900 mb-4">
            Browse Free Products
          </h1>
          <p className="text-xl text-gray-600">
            Discover amazing free products from trusted brands
          </p>
        </div>

        {/* Filters and Controls */}
        <div className="flex flex-col lg:flex-row gap-6">
          {/* Sidebar Filters */}
          <div className={`lg:w-64 space-y-6 ${showFilters ? 'block' : 'hidden lg:block'}`}>
            <div className="bg-gray-50 rounded-lg p-6">
              <h3 className="font-semibold text-gray-900 mb-4">Categories</h3>
              <div className="space-y-2">
                {categories.map((category) => (
                  <button
                    key={category.id}
                    onClick={() => setSelectedCategory(category.id)}
                    className={`w-full text-left px-3 py-2 rounded-md text-sm transition-colors ${
                      selectedCategory === category.id
                        ? 'bg-[#65E856] text-white'
                        : 'text-gray-700 hover:bg-gray-200'
                    }`}
                  >
                    <div className="flex justify-between items-center">
                      <span>{category.name}</span>
                      <span className="text-xs opacity-75">({category.count})</span>
                    </div>
                  </button>
                ))}
              </div>
            </div>

            <div className="bg-gray-50 rounded-lg p-6">
              <h3 className="font-semibold text-gray-900 mb-4">Sort By</h3>
              <select
                value={sortBy}
                onChange={(e) => setSortBy(e.target.value)}
                className="w-full px-3 py-2 border border-gray-300 rounded-md text-sm focus:outline-none focus:ring-2 focus:ring-[#65E856]"
              >
                <option value="newest">Newest First</option>
                <option value="popular">Most Popular</option>
                <option value="ending">Ending Soon</option>
                <option value="rating">Highest Rated</option>
              </select>
            </div>
          </div>

          {/* Main Content */}
          <div className="flex-1">
            {/* Controls Bar */}
            <div className="flex flex-col sm:flex-row justify-between items-start sm:items-center gap-4 mb-6">
              <div className="flex items-center space-x-4">
                <Button
                  variant="outline"
                  size="sm"
                  onClick={() => setShowFilters(!showFilters)}
                  className="lg:hidden"
                >
                  <SlidersHorizontal className="w-4 h-4 mr-2" />
                  Filters
                </Button>
                <span className="text-sm text-gray-600">
                  Showing {products.length} of 436 products
                </span>
              </div>

              <div className="flex items-center space-x-2">
                <Button
                  variant={viewMode === 'grid' ? 'default' : 'outline'}
                  size="sm"
                  onClick={() => setViewMode('grid')}
                  className={viewMode === 'grid' ? 'bg-[#65E856] hover:bg-[#55d846]' : ''}
                >
                  <Grid className="w-4 h-4" />
                </Button>
                <Button
                  variant={viewMode === 'list' ? 'default' : 'outline'}
                  size="sm"
                  onClick={() => setViewMode('list')}
                  className={viewMode === 'list' ? 'bg-[#65E856] hover:bg-[#55d846]' : ''}
                >
                  <List className="w-4 h-4" />
                </Button>
              </div>
            </div>

            {/* Products Grid */}
            <div className={`grid gap-6 ${
              viewMode === 'grid' 
                ? 'grid-cols-1 md:grid-cols-2 xl:grid-cols-3' 
                : 'grid-cols-1'
            }`}>
              {products.map((product) => (
                <ProductCard
                  key={product.id}
                  {...product}
                  onClaim={handleClaim}
                  onWishlist={handleWishlist}
                  onViewDetails={handleViewDetails}
                />
              ))}
            </div>

            {/* Load More */}
            <div className="text-center mt-12">
              <Button
                variant="outline"
                size="lg"
                className="px-8 border-gray-300 hover:border-[#65E856] hover:text-[#65E856]"
              >
                Load More Products
              </Button>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};