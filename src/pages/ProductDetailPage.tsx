import React, { useState } from 'react';
import { Heart, Share2, Clock, Users, Star, Shield, Truck, Award, ChevronLeft } from 'lucide-react';
import { Button } from '../components/ui/button';
import { Badge } from '../components/ui/badge';
import { Tabs, TabsContent, TabsList, TabsTrigger } from '../components/ui/tabs';
import { Avatar, AvatarFallback, AvatarImage } from '../components/ui/avatar';

interface ProductDetailPageProps {
  onNavigate: (page: string) => void;
}

export const ProductDetailPage: React.FC<ProductDetailPageProps> = ({ onNavigate }) => {
  const [isWishlisted, setIsWishlisted] = useState(false);
  const [selectedImage, setSelectedImage] = useState(0);

  const product = {
    id: '1',
    title: 'Premium Wireless Headphones',
    brand: 'AudioTech',
    images: [
      'https://images.pexels.com/photos/3394650/pexels-photo-3394650.jpeg?auto=compress&cs=tinysrgb&w=600&h=600&fit=crop',
      'https://images.pexels.com/photos/205926/pexels-photo-205926.jpeg?auto=compress&cs=tinysrgb&w=600&h=600&fit=crop',
      'https://images.pexels.com/photos/1649771/pexels-photo-1649771.jpeg?auto=compress&cs=tinysrgb&w=600&h=600&fit=crop',
    ],
    category: 'Electronics',
    rating: 4.8,
    reviewCount: 124,
    claimedCount: 89,
    timeLeft: '2d 14h',
    description: 'Experience premium sound quality with these wireless headphones featuring active noise cancellation, 30-hour battery life, and premium comfort padding.',
    features: [
      'Active Noise Cancellation',
      '30-hour battery life',
      'Premium comfort padding',
      'Bluetooth 5.0 connectivity',
      'Quick charge (15 min = 3 hours)',
      'Built-in microphone',
    ],
    requirements: [
      'Must be 18+ years old',
      'Valid shipping address required',
      'One claim per household',
      'Review required after 30 days',
    ],
    brand_info: {
      name: 'AudioTech',
      verified: true,
      description: 'Leading audio technology company with 15+ years of experience in premium audio equipment.',
    }
  };

  const reviews = [
    {
      id: '1',
      user: 'Sarah Johnson',
      avatar: 'https://images.pexels.com/photos/1239291/pexels-photo-1239291.jpeg?auto=compress&cs=tinysrgb&w=100&h=100&fit=crop',
      rating: 5,
      date: '2 days ago',
      comment: 'Amazing sound quality! The noise cancellation works perfectly and the battery life is incredible.',
      verified: true,
    },
    {
      id: '2',
      user: 'Mike Chen',
      avatar: 'https://images.pexels.com/photos/91227/pexels-photo-91227.jpeg?auto=compress&cs=tinysrgb&w=100&h=100&fit=crop',
      rating: 4,
      date: '1 week ago',
      comment: 'Great headphones for the price. Comfortable to wear for long periods.',
      verified: true,
    },
    {
      id: '3',
      user: 'Emma Davis',
      avatar: 'https://images.pexels.com/photos/1181686/pexels-photo-1181686.jpeg?auto=compress&cs=tinysrgb&w=100&h=100&fit=crop',
      rating: 5,
      date: '2 weeks ago',
      comment: 'Perfect for work from home. The microphone quality is excellent for video calls.',
      verified: true,
    },
  ];

  const handleClaim = () => {
    onNavigate('claim');
  };

  const handleWishlist = () => {
    setIsWishlisted(!isWishlisted);
  };

  const handleShare = () => {
    if (navigator.share) {
      navigator.share({
        title: product.title,
        text: `Check out this free ${product.title} on Freely!`,
        url: window.location.href,
      });
    }
  };

  return (
    <div className="min-h-screen bg-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-8">
        {/* Back Button */}
        <Button
          variant="ghost"
          onClick={() => onNavigate('browse')}
          className="mb-6 -ml-2"
        >
          <ChevronLeft className="w-4 h-4 mr-2" />
          Back to Browse
        </Button>

        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12">
          {/* Product Images */}
          <div className="space-y-4">
            <div className="relative overflow-hidden rounded-lg bg-gray-100">
              <img
                src={product.images[selectedImage]}
                alt={product.title}
                className="w-full h-96 lg:h-[500px] object-cover"
              />
              <div className="absolute top-4 left-4">
                <Badge variant="free" className="text-sm font-bold">
                  FREE
                </Badge>
              </div>
              {product.timeLeft && (
                <div className="absolute bottom-4 left-4">
                  <div className="flex items-center space-x-2 bg-black/70 text-white px-3 py-2 rounded-full text-sm">
                    <Clock className="w-4 h-4" />
                    <span>{product.timeLeft} left</span>
                  </div>
                </div>
              )}
            </div>
            
            <div className="flex space-x-2 overflow-x-auto">
              {product.images.map((image, index) => (
                <button
                  key={index}
                  onClick={() => setSelectedImage(index)}
                  className={`flex-shrink-0 w-20 h-20 rounded-lg overflow-hidden border-2 transition-colors ${
                    selectedImage === index ? 'border-[#65E856]' : 'border-gray-200'
                  }`}
                >
                  <img
                    src={image}
                    alt={`${product.title} ${index + 1}`}
                    className="w-full h-full object-cover"
                  />
                </button>
              ))}
            </div>
          </div>

          {/* Product Info */}
          <div className="space-y-6">
            <div>
              <div className="flex items-center justify-between mb-2">
                <Badge variant="outline" className="text-sm">
                  {product.category}
                </Badge>
                <div className="flex items-center space-x-2">
                  <Button
                    variant="ghost"
                    size="icon"
                    onClick={handleWishlist}
                    className={`${isWishlisted ? 'text-red-500' : 'text-gray-600'}`}
                  >
                    <Heart className={`w-5 h-5 ${isWishlisted ? 'fill-current' : ''}`} />
                  </Button>
                  <Button
                    variant="ghost"
                    size="icon"
                    onClick={handleShare}
                    className="text-gray-600"
                  >
                    <Share2 className="w-5 h-5" />
                  </Button>
                </div>
              </div>
              
              <h1 className="text-3xl lg:text-4xl font-bold text-gray-900 mb-2">
                {product.title}
              </h1>
              
              <div className="flex items-center space-x-4 mb-4">
                <div className="flex items-center space-x-1">
                  <Star className="w-4 h-4 fill-yellow-400 text-yellow-400" />
                  <span className="font-medium">{product.rating}</span>
                  <span className="text-gray-500">({product.reviewCount} reviews)</span>
                </div>
                <div className="flex items-center space-x-1 text-gray-500">
                  <Users className="w-4 h-4" />
                  <span>{product.claimedCount} claimed</span>
                </div>
              </div>

              <p className="text-gray-600 text-lg leading-relaxed">
                {product.description}
              </p>
            </div>

            {/* Brand Info */}
            <div className="bg-gray-50 rounded-lg p-4">
              <div className="flex items-center space-x-3">
                <div className="w-12 h-12 bg-[#65E856] rounded-full flex items-center justify-center">
                  <span className="text-white font-bold text-lg">A</span>
                </div>
                <div>
                  <div className="flex items-center space-x-2">
                    <h3 className="font-semibold text-gray-900">{product.brand_info.name}</h3>
                    {product.brand_info.verified && (
                      <Shield className="w-4 h-4 text-[#65E856]" />
                    )}
                  </div>
                  <p className="text-sm text-gray-600">{product.brand_info.description}</p>
                </div>
              </div>
            </div>

            {/* Trust Indicators */}
            <div className="grid grid-cols-3 gap-4">
              <div className="text-center p-4 bg-gray-50 rounded-lg">
                <Shield className="w-6 h-6 text-[#65E856] mx-auto mb-2" />
                <div className="text-sm font-medium text-gray-900">Verified</div>
                <div className="text-xs text-gray-600">100% Authentic</div>
              </div>
              <div className="text-center p-4 bg-gray-50 rounded-lg">
                <Truck className="w-6 h-6 text-[#65E856] mx-auto mb-2" />
                <div className="text-sm font-medium text-gray-900">Free Shipping</div>
                <div className="text-xs text-gray-600">No Hidden Costs</div>
              </div>
              <div className="text-center p-4 bg-gray-50 rounded-lg">
                <Award className="w-6 h-6 text-[#65E856] mx-auto mb-2" />
                <div className="text-sm font-medium text-gray-900">Quality</div>
                <div className="text-xs text-gray-600">Premium Products</div>
              </div>
            </div>

            {/* Claim Button */}
            <div className="space-y-4">
              <Button
                size="lg"
                className="w-full bg-[#65E856] hover:bg-[#55d846] text-white font-semibold py-4 text-lg"
                onClick={handleClaim}
              >
                Claim This Product - FREE
              </Button>
              <p className="text-sm text-gray-500 text-center">
                No payment required • Free shipping • Limited time offer
              </p>
            </div>
          </div>
        </div>

        {/* Product Details Tabs */}
        <div className="mt-16">
          <Tabs defaultValue="features" className="w-full">
            <TabsList className="grid w-full grid-cols-4">
              <TabsTrigger value="features">Features</TabsTrigger>
              <TabsTrigger value="requirements">Requirements</TabsTrigger>
              <TabsTrigger value="reviews">Reviews</TabsTrigger>
              <TabsTrigger value="brand">Brand</TabsTrigger>
            </TabsList>
            
            <TabsContent value="features" className="mt-6">
              <div className="bg-gray-50 rounded-lg p-6">
                <h3 className="text-xl font-semibold text-gray-900 mb-4">Product Features</h3>
                <ul className="grid grid-cols-1 md:grid-cols-2 gap-3">
                  {product.features.map((feature, index) => (
                    <li key={index} className="flex items-center space-x-3">
                      <div className="w-2 h-2 bg-[#65E856] rounded-full"></div>
                      <span className="text-gray-700">{feature}</span>
                    </li>
                  ))}
                </ul>
              </div>
            </TabsContent>
            
            <TabsContent value="requirements" className="mt-6">
              <div className="bg-gray-50 rounded-lg p-6">
                <h3 className="text-xl font-semibold text-gray-900 mb-4">Claim Requirements</h3>
                <ul className="space-y-3">
                  {product.requirements.map((requirement, index) => (
                    <li key={index} className="flex items-start space-x-3">
                      <div className="w-2 h-2 bg-[#65E856] rounded-full mt-2"></div>
                      <span className="text-gray-700">{requirement}</span>
                    </li>
                  ))}
                </ul>
              </div>
            </TabsContent>
            
            <TabsContent value="reviews" className="mt-6">
              <div className="space-y-6">
                <div className="flex items-center justify-between">
                  <h3 className="text-xl font-semibold text-gray-900">Customer Reviews</h3>
                  <div className="flex items-center space-x-2">
                    <Star className="w-5 h-5 fill-yellow-400 text-yellow-400" />
                    <span className="font-medium">{product.rating}</span>
                    <span className="text-gray-500">({product.reviewCount} reviews)</span>
                  </div>
                </div>
                
                <div className="space-y-4">
                  {reviews.map((review) => (
                    <div key={review.id} className="bg-gray-50 rounded-lg p-6">
                      <div className="flex items-start space-x-4">
                        <Avatar className="w-10 h-10">
                          <AvatarImage src={review.avatar} />
                          <AvatarFallback>{review.user.split(' ').map(n => n[0]).join('')}</AvatarFallback>
                        </Avatar>
                        <div className="flex-1">
                          <div className="flex items-center justify-between mb-2">
                            <div className="flex items-center space-x-2">
                              <h4 className="font-medium text-gray-900">{review.user}</h4>
                              {review.verified && (
                                <Badge variant="outline" className="text-xs">
                                  Verified
                                </Badge>
                              )}
                            </div>
                            <span className="text-sm text-gray-500">{review.date}</span>
                          </div>
                          <div className="flex items-center space-x-1 mb-2">
                            {[...Array(5)].map((_, i) => (
                              <Star
                                key={i}
                                className={`w-4 h-4 ${
                                  i < review.rating
                                    ? 'fill-yellow-400 text-yellow-400'
                                    : 'text-gray-300'
                                }`}
                              />
                            ))}
                          </div>
                          <p className="text-gray-700">{review.comment}</p>
                        </div>
                      </div>
                    </div>
                  ))}
                </div>
              </div>
            </TabsContent>
            
            <TabsContent value="brand" className="mt-6">
              <div className="bg-gray-50 rounded-lg p-6">
                <div className="flex items-center space-x-4 mb-4">
                  <div className="w-16 h-16 bg-[#65E856] rounded-full flex items-center justify-center">
                    <span className="text-white font-bold text-2xl">A</span>
                  </div>
                  <div>
                    <div className="flex items-center space-x-2">
                      <h3 className="text-2xl font-semibold text-gray-900">{product.brand_info.name}</h3>
                      <Shield className="w-5 h-5 text-[#65E856]" />
                    </div>
                    <p className="text-gray-600">{product.brand_info.description}</p>
                  </div>
                </div>
                <div className="grid grid-cols-1 md:grid-cols-3 gap-4 mt-6">
                  <div className="text-center">
                    <div className="text-2xl font-bold text-gray-900">15+</div>
                    <div className="text-sm text-gray-600">Years Experience</div>
                  </div>
                  <div className="text-center">
                    <div className="text-2xl font-bold text-gray-900">1M+</div>
                    <div className="text-sm text-gray-600">Products Sold</div>
                  </div>
                  <div className="text-center">
                    <div className="text-2xl font-bold text-gray-900">4.8</div>
                    <div className="text-sm text-gray-600">Average Rating</div>
                  </div>
                </div>
              </div>
            </TabsContent>
          </Tabs>
        </div>
      </div>
    </div>
  );
};