import React, { useState } from 'react';
import { Search, Filter, Grid, List } from 'lucide-react';
import { Button } from '../components/ui/button';
import { Input } from '../components/ui/input';
import { CategoryCard } from '../components/common/CategoryCard';
import { Badge } from '../components/ui/badge';

interface CategoriesPageProps {
  onNavigate: (page: string) => void;
}

export const CategoriesPage: React.FC<CategoriesPageProps> = ({ onNavigate }) => {
  const [searchQuery, setSearchQuery] = useState('');
  const [viewMode, setViewMode] = useState<'grid' | 'list'>('grid');
  const [selectedFilter, setSelectedFilter] = useState('all');

  const categories = [
    {
      name: 'Electronics',
      icon: '📱',
      productCount: 156,
      image: 'https://images.pexels.com/photos/356056/pexels-photo-356056.jpeg?auto=compress&cs=tinysrgb&w=400&h=300&fit=crop',
      description: 'Smartphones, headphones, gadgets, and tech accessories',
      trending: true,
    },
    {
      name: 'Beauty & Health',
      icon: '💄',
      productCount: 89,
      image: 'https://images.pexels.com/photos/3685530/pexels-photo-3685530.jpeg?auto=compress&cs=tinysrgb&w=400&h=300&fit=crop',
      description: 'Skincare, makeup, wellness products, and health supplements',
      trending: true,
    },
    {
      name: 'Home & Garden',
      icon: '🏠',
      productCount: 124,
      image: 'https://images.pexels.com/photos/1080721/pexels-photo-1080721.jpeg?auto=compress&cs=tinysrgb&w=400&h=300&fit=crop',
      description: 'Home decor, kitchen items, gardening tools, and furniture',
      trending: false,
    },
    {
      name: 'Food & Beverages',
      icon: '🍕',
      productCount: 67,
      image: 'https://images.pexels.com/photos/1640777/pexels-photo-1640777.jpeg?auto=compress&cs=tinysrgb&w=400&h=300&fit=crop',
      description: 'Snacks, beverages, organic foods, and gourmet items',
      trending: false,
    },
    {
      name: 'Fashion & Accessories',
      icon: '👕',
      productCount: 92,
      image: 'https://images.pexels.com/photos/996329/pexels-photo-996329.jpeg?auto=compress&cs=tinysrgb&w=400&h=300&fit=crop',
      description: 'Clothing, shoes, jewelry, bags, and fashion accessories',
      trending: true,
    },
    {
      name: 'Sports & Fitness',
      icon: '⚽',
      productCount: 78,
      image: 'https://images.pexels.com/photos/40751/running-runner-long-distance-fitness-40751.jpeg?auto=compress&cs=tinysrgb&w=400&h=300&fit=crop',
      description: 'Fitness equipment, sportswear, supplements, and gear',
      trending: false,
    },
    {
      name: 'Books & Education',
      icon: '📚',
      productCount: 45,
      image: 'https://images.pexels.com/photos/159711/books-bookstore-book-reading-159711.jpeg?auto=compress&cs=tinysrgb&w=400&h=300&fit=crop',
      description: 'Books, educational materials, courses, and learning tools',
      trending: false,
    },
    {
      name: 'Baby & Kids',
      icon: '🧸',
      productCount: 56,
      image: 'https://images.pexels.com/photos/1148998/pexels-photo-1148998.jpeg?auto=compress&cs=tinysrgb&w=400&h=300&fit=crop',
      description: 'Baby products, toys, kids clothing, and educational items',
      trending: true,
    },
    {
      name: 'Pet Supplies',
      icon: '🐕',
      productCount: 34,
      image: 'https://images.pexels.com/photos/1108099/pexels-photo-1108099.jpeg?auto=compress&cs=tinysrgb&w=400&h=300&fit=crop',
      description: 'Pet food, toys, accessories, and care products',
      trending: false,
    },
    {
      name: 'Automotive',
      icon: '🚗',
      productCount: 29,
      image: 'https://images.pexels.com/photos/3806288/pexels-photo-3806288.jpeg?auto=compress&cs=tinysrgb&w=400&h=300&fit=crop',
      description: 'Car accessories, tools, maintenance products, and gadgets',
      trending: false,
    },
  ];

  const filters = [
    { id: 'all', name: 'All Categories', count: categories.length },
    { id: 'trending', name: 'Trending', count: categories.filter(c => c.trending).length },
    { id: 'most-products', name: 'Most Products', count: categories.filter(c => c.productCount > 80).length },
  ];

  const filteredCategories = categories.filter(category => {
    const matchesSearch = category.name.toLowerCase().includes(searchQuery.toLowerCase()) ||
                         category.description.toLowerCase().includes(searchQuery.toLowerCase());
    
    const matchesFilter = selectedFilter === 'all' ||
                         (selectedFilter === 'trending' && category.trending) ||
                         (selectedFilter === 'most-products' && category.productCount > 80);

    return matchesSearch && matchesFilter;
  });

  const handleCategoryClick = (categoryName: string) => {
    // Navigate to browse page with category filter
    onNavigate('browse');
  };

  return (
    <div className="min-h-screen bg-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-8">
        {/* Header */}
        <div className="text-center mb-12">
          <h1 className="text-4xl lg:text-5xl font-bold text-gray-900 mb-4">
            Browse Categories
          </h1>
          <p className="text-xl text-gray-600 max-w-3xl mx-auto">
            Discover free products organized by category. Find exactly what you're looking for 
            from electronics to beauty, home goods to fashion.
          </p>
        </div>

        {/* Search and Filters */}
        <div className="mb-8">
          <div className="flex flex-col lg:flex-row gap-4 items-center justify-between mb-6">
            {/* Search Bar */}
            <div className="relative flex-1 max-w-md">
              <Search className="absolute left-3 top-1/2 transform -translate-y-1/2 text-gray-400 w-4 h-4" />
              <Input
                type="text"
                placeholder="Search categories..."
                value={searchQuery}
                onChange={(e) => setSearchQuery(e.target.value)}
                className="pl-10"
              />
            </div>

            {/* View Mode Toggle */}
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

          {/* Filter Tabs */}
          <div className="flex flex-wrap gap-2 mb-6">
            {filters.map((filter) => (
              <Button
                key={filter.id}
                variant={selectedFilter === filter.id ? 'default' : 'outline'}
                size="sm"
                onClick={() => setSelectedFilter(filter.id)}
                className={`${
                  selectedFilter === filter.id 
                    ? 'bg-[#65E856] hover:bg-[#55d846] text-white' 
                    : 'border-gray-300 hover:border-[#65E856] hover:text-[#65E856]'
                }`}
              >
                {filter.name}
                <Badge variant="secondary" className="ml-2 text-xs">
                  {filter.count}
                </Badge>
              </Button>
            ))}
          </div>
        </div>

        {/* Categories Grid/List */}
        <div className={`grid gap-6 ${
          viewMode === 'grid' 
            ? 'grid-cols-1 md:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4' 
            : 'grid-cols-1'
        }`}>
          {filteredCategories.map((category) => (
            <div key={category.name} className="relative">
              {viewMode === 'grid' ? (
                <div 
                  className="group cursor-pointer transition-all duration-300 hover:shadow-lg hover:-translate-y-1"
                  onClick={() => handleCategoryClick(category.name)}
                >
                  <div className="relative overflow-hidden rounded-t-lg">
                    <img
                      src={category.image}
                      alt={category.name}
                      className="w-full h-48 object-cover transition-transform duration-300 group-hover:scale-105"
                    />
                    <div className="absolute inset-0 bg-gradient-to-t from-black/60 to-transparent" />
                    {category.trending && (
                      <div className="absolute top-3 right-3">
                        <Badge className="bg-[#65E856] text-white">
                          Trending
                        </Badge>
                      </div>
                    )}
                    <div className="absolute bottom-4 left-4 text-white">
                      <div className="flex items-center space-x-2 mb-2">
                        <span className="text-2xl">{category.icon}</span>
                        <h3 className="text-xl font-semibold">{category.name}</h3>
                      </div>
                      <p className="text-sm opacity-90 mb-2">{category.productCount} products</p>
                    </div>
                  </div>
                  <div className="bg-white border border-gray-200 border-t-0 rounded-b-lg p-4">
                    <p className="text-gray-600 text-sm">{category.description}</p>
                  </div>
                </div>
              ) : (
                <div 
                  className="flex items-center space-x-6 p-6 bg-white border border-gray-200 rounded-lg cursor-pointer hover:shadow-md transition-shadow"
                  onClick={() => handleCategoryClick(category.name)}
                >
                  <img
                    src={category.image}
                    alt={category.name}
                    className="w-20 h-20 object-cover rounded-lg"
                  />
                  <div className="flex-1">
                    <div className="flex items-center space-x-3 mb-2">
                      <span className="text-2xl">{category.icon}</span>
                      <h3 className="text-xl font-semibold text-gray-900">{category.name}</h3>
                      {category.trending && (
                        <Badge className="bg-[#65E856] text-white text-xs">
                          Trending
                        </Badge>
                      )}
                    </div>
                    <p className="text-gray-600 mb-2">{category.description}</p>
                    <p className="text-sm text-gray-500">{category.productCount} products available</p>
                  </div>
                  <div className="text-right">
                    <Button
                      variant="outline"
                      size="sm"
                      className="border-gray-300 hover:border-[#65E856] hover:text-[#65E856]"
                    >
                      Browse
                    </Button>
                  </div>
                </div>
              )}
            </div>
          ))}
        </div>

        {/* No Results */}
        {filteredCategories.length === 0 && (
          <div className="text-center py-12">
            <div className="text-6xl mb-4">🔍</div>
            <h3 className="text-xl font-semibold text-gray-900 mb-2">
              No categories found
            </h3>
            <p className="text-gray-600 mb-6">
              Try adjusting your search or filter to find what you're looking for.
            </p>
            <Button
              variant="outline"
              onClick={() => {
                setSearchQuery('');
                setSelectedFilter('all');
              }}
              className="border-gray-300 hover:border-[#65E856] hover:text-[#65E856]"
            >
              Clear Filters
            </Button>
          </div>
        )}

        {/* Stats Section */}
        <div className="mt-16 bg-gray-50 rounded-2xl p-8">
          <div className="text-center mb-8">
            <h2 className="text-2xl font-bold text-gray-900 mb-2">
              Categories at a Glance
            </h2>
            <p className="text-gray-600">
              Explore our diverse range of product categories
            </p>
          </div>
          <div className="grid grid-cols-2 md:grid-cols-4 gap-6">
            <div className="text-center">
              <div className="text-3xl font-bold text-[#65E856] mb-1">
                {categories.length}
              </div>
              <div className="text-sm text-gray-600">Total Categories</div>
            </div>
            <div className="text-center">
              <div className="text-3xl font-bold text-[#65E856] mb-1">
                {categories.reduce((sum, cat) => sum + cat.productCount, 0)}
              </div>
              <div className="text-sm text-gray-600">Total Products</div>
            </div>
            <div className="text-center">
              <div className="text-3xl font-bold text-[#65E856] mb-1">
                {categories.filter(c => c.trending).length}
              </div>
              <div className="text-sm text-gray-600">Trending Categories</div>
            </div>
            <div className="text-center">
              <div className="text-3xl font-bold text-[#65E856] mb-1">
                {Math.round(categories.reduce((sum, cat) => sum + cat.productCount, 0) / categories.length)}
              </div>
              <div className="text-sm text-gray-600">Avg Products/Category</div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};