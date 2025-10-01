import React from 'react';
import { Star } from 'lucide-react';
import { Button } from '../../Button';
import { Card, CardContent } from '../../Card';
import { Avatar, AvatarImage, AvatarFallback } from '../../Avatar';

export interface VendorCardProps {
  name: string;
  rating: number;
  productCount: number;
  image?: string;
  onVisitStore?: (vendorName: string) => void;
  className?: string;
}

/**
 * Reusable vendor card component for displaying seller information
 * Used in vendor spotlight and seller directory sections
 */
export const VendorCard: React.FC<VendorCardProps> = ({
  name,
  rating,
  productCount,
  image,
  onVisitStore,
  className = '',
}) => {
  const handleVisitStore = () => {
    onVisitStore?.(name);
  };

  return (
    <Card className={`hover:shadow-lg transition-shadow ${className}`}>
      <CardContent className="p-6 text-center">
        <Avatar size="lg" className="mx-auto mb-4">
          <AvatarImage src={image} />
          <AvatarFallback>{name[0]}</AvatarFallback>
        </Avatar>
        <h3 className="font-semibold text-gray-900 mb-2">{name}</h3>
        <div className="flex items-center justify-center space-x-1 mb-2">
          <Star className="h-4 w-4 text-yellow-400 fill-current" />
          <span className="text-sm text-gray-600">{rating}</span>
        </div>
        <p className="text-sm text-gray-600 mb-4">{productCount} products</p>
        <Button variant="outline" size="sm" onClick={handleVisitStore}>
          Visit Store
        </Button>
      </CardContent>
    </Card>
  );
};