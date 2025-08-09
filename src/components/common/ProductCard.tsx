import React from 'react';
import { Heart, Clock, Users, Star } from 'lucide-react';
import { Button } from '../ui/button';
import { Badge } from '../ui/badge';
import { Card, CardContent } from '../ui/card';

interface ProductCardProps {
  id: string;
  title: string;
  brand: string;
  image: string;
  category: string;
  rating: number;
  reviewCount: number;
  claimedCount: number;
  timeLeft?: string;
  isWishlisted?: boolean;
  onClaim: (id: string) => void;
  onWishlist: (id: string) => void;
  onViewDetails: (id: string) => void;
}

export const ProductCard: React.FC<ProductCardProps> = ({
  id,
  title,
  brand,
  image,
  category,
  rating,
  reviewCount,
  claimedCount,
  timeLeft,
  isWishlisted = false,
  onClaim,
  onWishlist,
  onViewDetails,
}) => {
  return (
    <Card className="group cursor-pointer transition-all duration-300 hover:shadow-lg hover:-translate-y-1 border-gray-200">
      <div className="relative overflow-hidden rounded-t-lg">
        <img
          src={image}
          alt={title}
          className="w-full h-48 object-cover transition-transform duration-300 group-hover:scale-105"
          onClick={() => onViewDetails(id)}
        />
        <div className="absolute top-3 left-3">
          <Badge variant="free" className="text-xs font-bold">
            FREE
          </Badge>
        </div>
        <div className="absolute top-3 right-3">
          <Button
            variant="ghost"
            size="icon"
            className={`w-8 h-8 rounded-full bg-white/90 backdrop-blur-sm hover:bg-white transition-colors ${
              isWishlisted ? 'text-red-500' : 'text-gray-600'
            }`}
            onClick={(e) => {
              e.stopPropagation();
              onWishlist(id);
            }}
          >
            <Heart className={`w-4 h-4 ${isWishlisted ? 'fill-current' : ''}`} />
          </Button>
        </div>
        {timeLeft && (
          <div className="absolute bottom-3 left-3">
            <div className="flex items-center space-x-1 bg-black/70 text-white px-2 py-1 rounded-full text-xs">
              <Clock className="w-3 h-3" />
              <span>{timeLeft}</span>
            </div>
          </div>
        )}
      </div>
      
      <CardContent className="p-4" onClick={() => onViewDetails(id)}>
        <div className="space-y-2">
          <div className="flex items-center justify-between">
            <Badge variant="outline" className="text-xs">
              {category}
            </Badge>
            <div className="flex items-center space-x-1">
              <Star className="w-3 h-3 fill-yellow-400 text-yellow-400" />
              <span className="text-xs text-gray-600">{rating}</span>
              <span className="text-xs text-gray-400">({reviewCount})</span>
            </div>
          </div>
          
          <div>
            <h3 className="font-semibold text-gray-900 line-clamp-2 group-hover:text-[#65E856] transition-colors">
              {title}
            </h3>
            <p className="text-sm text-gray-600 mt-1">{brand}</p>
          </div>
          
          <div className="flex items-center justify-between pt-2">
            <div className="flex items-center space-x-1 text-xs text-gray-500">
              <Users className="w-3 h-3" />
              <span>{claimedCount} claimed</span>
            </div>
            
            <Button
              size="sm"
              className="bg-[#65E856] hover:bg-[#55d846] text-white font-medium px-4"
              onClick={(e) => {
                e.stopPropagation();
                onClaim(id);
              }}
            >
              Claim Now
            </Button>
          </div>
        </div>
      </CardContent>
    </Card>
  );
};