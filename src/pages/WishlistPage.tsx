import React, { useState } from 'react';
import { Heart, Trash2, ShoppingBag, Filter, Grid, List } from 'lucide-react';
import { Button } from '../components/ui/button';
import { ProductCard } from '../components/common/ProductCard';
import { Badge } from '../components/ui/badge';

interface WishlistPageProps {
  onNavigate: (page: string) => void;
}

export const WishlistPage: React.FC<WishlistPageProps> = ({ onNavigate }) => {
  const [viewMode, setViewMode] = useState<'grid' | 'list'>('grid');
  const [selectedCategory, setSelectedCategory] = useState('all');

  const wishlistItems = [
    {
      id: '1',
      title: 'Bluetooth Speaker',
      brand: 'SoundWave',
      image: 'https://images.pexels.com/photos/1649771/pexels-photo-1649771.jpeg?auto=compress&cs=tinysrgb&w=400&h=300&fit=crop',
      category: 'Electronics',
      rating: 4.7,
      reviewCount: 178,
      claimedCount: 89,
      timeLeft: '2d 22h',
      addedDate: '2024-03-12',
      isWishlisted: true,
    },
    {
      id: '2',
      title: 'Organic Tea Sampler',
      brand: 'TeaTime',
      image: 'https://images.pexels.com/photos/1638280/pexels-photo-1638280.jpeg?auto=compress&cs=tinysrgb&w=400&h=300&fit=crop',
      category: 'Food',
      rating: 4.6,
      reviewCount: 45,
      claimedCount: 67,
      timeLeft: '7d 4h',
      addedDate: '2024-03-11',
      isWishlisted: true,
    },
    {
      id: '3',
      title: 'Luxury Hand Cream',
      brand: 'SkinCare Pro',
      image: 'https://images.pexels.com/photos/4465124/pexels-photo-4465124.jpeg?auto=compress&cs=tinysrgb&w=400&h=300&fit=crop',
      category: 'Beauty',
      rating: 4.8,
      reviewCount: 92,
      claimedCount: 134,
      timeLeft: '6d 18h',
      addedDate: '2024-03-10',
      isWishlisted: true,
    },
    {
      id: '4',
      title: 'Eco-Friendly Water Bottle',
      brand: 'GreenLife',
      image: 'https://images.pexels.com/photos/1000084/pexels-photo-1000084.jpeg?auto=compress&cs=tinysrgb&w=400&h=300&fit=crop',
      category: 'Home',
      rating: 4.5,
      reviewCount: 156,
      claimedCount: 78,
      timeLeft: '4d 6h',
      addedDate: '2024-03-09',
      isWishlisted: true,
    },
    {
      id: '5',
      title: 'Fitness Resistance Bands',
      brand: 'FitPro',
      image: 'https://images.pexels.com/photos/4162449/pexels-photo-4162449.jpeg?auto=compress&cs=tinysrgb&w=400&h=300&fit=crop',
      category: 'Sports',
      rating: 4.4,
      reviewCount: 203,
      claimedCount: 145,
      timeLeft: '3d 12h',
      addedDate: '2024-03-08',
      isWishlisted: true,
    },
  ];

  const categories = [
    { id: 'all', name: 'All Items', count: wishlistItems.length },
    { id: 'Electronics', name: 'Electronics', count: wishlistItems.filter(item => item.category === 'Electronics').length },
    { id: 'Beauty', name: 'Beauty', count: wishlistItems.filter(item => item.category === 'Beauty').length },
    { id: 'Food', name: 'Food', count: wishlistItems.filter(item => item.category === 'Food').length },
    { id: 'Home', name: 'Home', count: wishlistItems.filter(item => item.category === 'Home').length },
    { id: 'Sports', name: 'Sports', count: wishlistItems.filter(item => item.category === 'Sports').length },
  ];

  const filteredItems = wishlistItems.filter(item => 
    selectedCategory === 'all' || item.category === selectedCategory
  );

  const handleClaim = (id: string) => {
    console.log('Claiming product:', id);
    onNavigate('claim');
  };

  const handleRemoveFromWishlist = (id: string) => {
    console.log('Removing from wishlist:', id);
    // Remove item from wishlist
  };

  const handleViewDetails = (id: string) => {
    console.log('Viewing product:', id);
    onNavigate('product');
  };

  const handleClearAll = () => {
    if (window.confirm('Are you sure you want to clear your entire wishlist?')) {
      // Clear all wishlist items
    }
  };

  return (
    <div className="min-h-screen bg-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-8">
        {/* Header */}
        <div className="flex flex-col md:flex-row justify-between items-start md:items-center mb-8">
          <div>
            <h1 className="text-3xl lg:text-4xl font-bold text-gray-900 mb-2">
              My Wishlist
            </h1>
            <p className="text-gray-600">
              {wishlistItems.length} {wishlistItems.length === 1 ? 'item' : 'items'} saved for later
            </p>
          </div>
          
          <div className="flex items-center space-x-4 mt-4 md:mt-0">
            <Button
              variant="outline"
              size="sm"
              onClick={handleClearAll}
              className="text-red-600 border-red-200 hover:bg-red-50"
              disabled={wishlistItems.length === 0}
            >
              <Trash2 className="w-4 h-4 mr-2" />
              Clear All
            </Button>
          </div>
        </div>

        {wishlistItems.length === 0 ? (
          /* Empty State */
          <div className="text-center py-16">
            <div className="w-24 h-24 bg-gray-100 rounded-full flex items-center justify-center mx-auto mb-6">
              <Heart className="w-12 h-12 text-gray-400" />
            </div>
            <h2 className="text-2xl font-semibold text-gray-900 mb-4">
              Your wishlist is empty
            </h2>
            <p className="text-gray-600 mb-8 max-w-md mx-auto">
              Start browsing and save products you're interested in to your wishlist. 
              You can claim them later when you're ready!
            </p>
            <Button
              size="lg"
              className="bg-[#65E856] hover:bg-[#55d846] text-white px-8"
              onClick={() => onNavigate('browse')}
            >
              <ShoppingBag className="w-5 h-5 mr-2" />
              Browse Products
            </Button>
          </div>
        ) : (
          <>
            {/* Filters and Controls */}
            <div className="flex flex-col lg:flex-row gap-6">
              {/* Sidebar Filters */}
              <div className="lg:w-64 space-y-6">
                <div className="bg-gray-50 rounded-lg p-6">
                  <h3 className="font-semibold text-gray-900 mb-4">Filter by Category</h3>
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
                  <h3 className="font-semibold text-gray-900 mb-4">Quick Actions</h3>
                  <div className="space-y-2">
                    <Button
                      variant="outline"
                      size="sm"
                      className="w-full justify-start"
                      onClick={() => onNavigate('browse')}
                    >
                      <ShoppingBag className="w-4 h-4 mr-2" />
                      Browse More
                    </Button>
                    <Button
                      variant="outline"
                      size="sm"
                      className="w-full justify-start"
                      onClick={() => onNavigate('claimed')}
                    >
                      <Heart className="w-4 h-4 mr-2" />
                      My Claims
                    </Button>
                  </div>
                </div>
              </div>

              {/* Main Content */}
              <div className="flex-1">
                {/* Controls Bar */}
                <div className="flex flex-col sm:flex-row justify-between items-start sm:items-center gap-4 mb-6">
                  <div className="flex items-center space-x-4">
                    <span className="text-sm text-gray-600">
                      Showing {filteredItems.length} of {wishlistItems.length} items
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
                  {filteredItems.map((item) => (
                    <div key={item.id} className="relative">
                      <ProductCard
                        {...item}
                        onClaim={handleClaim}
                        onWishlist={handleRemoveFromWishlist}
                        onViewDetails={handleViewDetails}
                      />
                      <div className="absolute top-2 left-2 z-10">
                        <Badge variant="outline" className="bg-white/90 text-xs">
                          Added {new Date(item.addedDate).toLocaleDateString()}
                        </Badge>
                      </div>
                    </div>
                  ))}
                </div>

                {/* No Results for Filter */}
                {filteredItems.length === 0 && selectedCategory !== 'all' && (
                  <div className="text-center py-12">
                    <div className="text-4xl mb-4">📂</div>
                    <h3 className="text-xl font-semibold text-gray-900 mb-2">
                      No items in this category
                    </h3>
                    <p className="text-gray-600 mb-6">
                      You don't have any {categories.find(c => c.id === selectedCategory)?.name.toLowerCase()} items in your wishlist yet.
                    </p>
                    <Button
                      variant="outline"
                      onClick={() => setSelectedCategory('all')}
                      className="border-gray-300 hover:border-[#65E856] hover:text-[#65E856]"
                    >
                      Show All Items
                    </Button>
                  </div>
                )}
              </div>
            </div>
          </>
        )}
      </div>
    </div>
  );
};