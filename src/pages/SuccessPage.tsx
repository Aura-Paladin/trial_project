import React from 'react';
import { CheckCircle, Mail, Truck, Calendar, ArrowRight, Share2 } from 'lucide-react';
import { Button } from '../components/ui/button';
import { Card, CardContent } from '../components/ui/card';

interface SuccessPageProps {
  onNavigate: (page: string) => void;
}

export const SuccessPage: React.FC<SuccessPageProps> = ({ onNavigate }) => {
  const claimDetails = {
    confirmationNumber: 'FL-2024-001234',
    product: {
      title: 'Premium Wireless Headphones',
      brand: 'AudioTech',
      image: 'https://images.pexels.com/photos/3394650/pexels-photo-3394650.jpeg?auto=compress&cs=tinysrgb&w=300&h=300&fit=crop',
    },
    estimatedDelivery: 'March 15-20, 2024',
    trackingAvailable: 'March 12, 2024',
  };

  const nextSteps = [
    {
      icon: <Mail className="w-6 h-6" />,
      title: 'Confirmation Email',
      description: 'Check your email for detailed confirmation and tracking information.',
      status: 'completed',
    },
    {
      icon: <Truck className="w-6 h-6" />,
      title: 'Processing & Shipping',
      description: 'Your product will be processed and shipped within 2-3 business days.',
      status: 'pending',
    },
    {
      icon: <Calendar className="w-6 h-6" />,
      title: 'Delivery',
      description: `Expected delivery: ${claimDetails.estimatedDelivery}`,
      status: 'pending',
    },
  ];

  const handleShare = () => {
    if (navigator.share) {
      navigator.share({
        title: 'I just claimed a free product on Freely!',
        text: `Check out Freely - I just got ${claimDetails.product.title} for free!`,
        url: window.location.origin,
      });
    }
  };

  return (
    <div className="min-h-screen bg-gray-50">
      <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 py-8">
        {/* Success Header */}
        <div className="text-center mb-8">
          <div className="w-20 h-20 bg-[#65E856] rounded-full flex items-center justify-center mx-auto mb-6">
            <CheckCircle className="w-12 h-12 text-white" />
          </div>
          <h1 className="text-3xl lg:text-4xl font-bold text-gray-900 mb-4">
            Claim Successful! 🎉
          </h1>
          <p className="text-xl text-gray-600">
            Your free product is on its way to you
          </p>
        </div>

        {/* Confirmation Details */}
        <Card className="mb-8">
          <CardContent className="p-6">
            <div className="flex flex-col lg:flex-row items-start lg:items-center space-y-4 lg:space-y-0 lg:space-x-6">
              <img
                src={claimDetails.product.image}
                alt={claimDetails.product.title}
                className="w-24 h-24 object-cover rounded-lg"
              />
              <div className="flex-1">
                <h2 className="text-2xl font-semibold text-gray-900 mb-2">
                  {claimDetails.product.title}
                </h2>
                <p className="text-gray-600 mb-2">{claimDetails.product.brand}</p>
                <div className="flex flex-col sm:flex-row sm:items-center sm:space-x-6 space-y-2 sm:space-y-0">
                  <div>
                    <span className="text-sm text-gray-500">Confirmation #:</span>
                    <span className="ml-2 font-mono font-medium text-gray-900">
                      {claimDetails.confirmationNumber}
                    </span>
                  </div>
                  <div>
                    <span className="text-sm text-gray-500">Estimated Delivery:</span>
                    <span className="ml-2 font-medium text-gray-900">
                      {claimDetails.estimatedDelivery}
                    </span>
                  </div>
                </div>
              </div>
            </div>
          </CardContent>
        </Card>

        {/* Next Steps */}
        <Card className="mb-8">
          <CardContent className="p-6">
            <h3 className="text-xl font-semibold text-gray-900 mb-6">What Happens Next?</h3>
            <div className="space-y-6">
              {nextSteps.map((step, index) => (
                <div key={index} className="flex items-start space-x-4">
                  <div
                    className={`w-12 h-12 rounded-full flex items-center justify-center ${
                      step.status === 'completed'
                        ? 'bg-[#65E856] text-white'
                        : 'bg-gray-100 text-gray-400'
                    }`}
                  >
                    {step.icon}
                  </div>
                  <div className="flex-1">
                    <h4 className="font-medium text-gray-900 mb-1">{step.title}</h4>
                    <p className="text-gray-600">{step.description}</p>
                  </div>
                  {step.status === 'completed' && (
                    <CheckCircle className="w-5 h-5 text-[#65E856]" />
                  )}
                </div>
              ))}
            </div>
          </CardContent>
        </Card>

        {/* Important Information */}
        <Card className="mb-8">
          <CardContent className="p-6">
            <h3 className="text-xl font-semibold text-gray-900 mb-4">Important Information</h3>
            <div className="space-y-3 text-gray-700">
              <div className="flex items-start space-x-3">
                <div className="w-2 h-2 bg-[#65E856] rounded-full mt-2"></div>
                <p>
                  <strong>Tracking Information:</strong> You'll receive tracking details via email on {claimDetails.trackingAvailable}
                </p>
              </div>
              <div className="flex items-start space-x-3">
                <div className="w-2 h-2 bg-[#65E856] rounded-full mt-2"></div>
                <p>
                  <strong>Review Requirement:</strong> Please provide a review within 30 days of receiving your product
                </p>
              </div>
              <div className="flex items-start space-x-3">
                <div className="w-2 h-2 bg-[#65E856] rounded-full mt-2"></div>
                <p>
                  <strong>Support:</strong> Contact us at support@freely.com if you have any questions
                </p>
              </div>
            </div>
          </CardContent>
        </Card>

        {/* Action Buttons */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-4 mb-8">
          <Button
            variant="outline"
            onClick={() => onNavigate('browse')}
            className="flex items-center justify-center space-x-2 border-gray-300 hover:border-[#65E856] hover:text-[#65E856]"
          >
            <span>Browse More Products</span>
            <ArrowRight className="w-4 h-4" />
          </Button>
          
          <Button
            variant="outline"
            onClick={() => onNavigate('claimed')}
            className="flex items-center justify-center space-x-2 border-gray-300 hover:border-[#65E856] hover:text-[#65E856]"
          >
            <span>View My Claims</span>
          </Button>
          
          <Button
            onClick={handleShare}
            className="bg-[#65E856] hover:bg-[#55d846] text-white flex items-center justify-center space-x-2"
          >
            <Share2 className="w-4 h-4" />
            <span>Share with Friends</span>
          </Button>
        </div>

        {/* Promotional Section */}
        <Card className="bg-gradient-to-r from-[#65E856] to-[#55d846] text-white">
          <CardContent className="p-6 text-center">
            <h3 className="text-xl font-semibold mb-2">
              Love Free Products? Invite Your Friends!
            </h3>
            <p className="mb-4 opacity-90">
              Share Freely with your friends and help them discover amazing free products too.
            </p>
            <Button
              variant="secondary"
              className="bg-white text-[#65E856] hover:bg-gray-100"
              onClick={handleShare}
            >
              Invite Friends
            </Button>
          </CardContent>
        </Card>
      </div>
    </div>
  );
};