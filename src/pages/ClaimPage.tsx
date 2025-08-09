import React, { useState } from 'react';
import { CheckCircle, MapPin, User, Mail, Phone, Shield, Truck, Clock } from 'lucide-react';
import { Button } from '../components/ui/button';
import { Input } from '../components/ui/input';
import { Card, CardContent } from '../components/ui/card';
import { Badge } from '../components/ui/badge';

interface ClaimPageProps {
  onNavigate: (page: string) => void;
}

export const ClaimPage: React.FC<ClaimPageProps> = ({ onNavigate }) => {
  const [step, setStep] = useState(1);
  const [formData, setFormData] = useState({
    firstName: '',
    lastName: '',
    email: '',
    phone: '',
    address: '',
    city: '',
    state: '',
    zipCode: '',
    agreeToTerms: false,
    agreeToReview: false,
  });

  const product = {
    title: 'Premium Wireless Headphones',
    brand: 'AudioTech',
    image: 'https://images.pexels.com/photos/3394650/pexels-photo-3394650.jpeg?auto=compress&cs=tinysrgb&w=300&h=300&fit=crop',
    category: 'Electronics',
    timeLeft: '2d 14h',
  };

  const handleInputChange = (field: string, value: string | boolean) => {
    setFormData(prev => ({ ...prev, [field]: value }));
  };

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    if (step < 3) {
      setStep(step + 1);
    } else {
      // Process claim
      onNavigate('success');
    }
  };

  const isStepValid = () => {
    switch (step) {
      case 1:
        return formData.firstName && formData.lastName && formData.email && formData.phone;
      case 2:
        return formData.address && formData.city && formData.state && formData.zipCode;
      case 3:
        return formData.agreeToTerms && formData.agreeToReview;
      default:
        return false;
    }
  };

  return (
    <div className="min-h-screen bg-gray-50">
      <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 py-8">
        {/* Header */}
        <div className="text-center mb-8">
          <h1 className="text-3xl lg:text-4xl font-bold text-gray-900 mb-4">
            Claim Your Free Product
          </h1>
          <p className="text-xl text-gray-600">
            Just a few steps to get your free product delivered
          </p>
        </div>

        {/* Progress Bar */}
        <div className="mb-8">
          <div className="flex items-center justify-center space-x-4">
            {[1, 2, 3].map((stepNumber) => (
              <div key={stepNumber} className="flex items-center">
                <div
                  className={`w-10 h-10 rounded-full flex items-center justify-center font-semibold ${
                    step >= stepNumber
                      ? 'bg-[#65E856] text-white'
                      : 'bg-gray-200 text-gray-600'
                  }`}
                >
                  {step > stepNumber ? (
                    <CheckCircle className="w-6 h-6" />
                  ) : (
                    stepNumber
                  )}
                </div>
                {stepNumber < 3 && (
                  <div
                    className={`w-16 h-1 mx-2 ${
                      step > stepNumber ? 'bg-[#65E856]' : 'bg-gray-200'
                    }`}
                  />
                )}
              </div>
            ))}
          </div>
          <div className="flex justify-center mt-4">
            <div className="flex space-x-16 text-sm text-gray-600">
              <span className={step >= 1 ? 'text-[#65E856] font-medium' : ''}>
                Personal Info
              </span>
              <span className={step >= 2 ? 'text-[#65E856] font-medium' : ''}>
                Shipping
              </span>
              <span className={step >= 3 ? 'text-[#65E856] font-medium' : ''}>
                Confirmation
              </span>
            </div>
          </div>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-3 gap-8">
          {/* Product Summary */}
          <div className="lg:col-span-1">
            <Card className="sticky top-8">
              <CardContent className="p-6">
                <h3 className="font-semibold text-gray-900 mb-4">Product Summary</h3>
                <div className="space-y-4">
                  <div className="flex space-x-4">
                    <img
                      src={product.image}
                      alt={product.title}
                      className="w-16 h-16 object-cover rounded-lg"
                    />
                    <div className="flex-1">
                      <h4 className="font-medium text-gray-900">{product.title}</h4>
                      <p className="text-sm text-gray-600">{product.brand}</p>
                      <Badge variant="free" className="text-xs mt-1">
                        FREE
                      </Badge>
                    </div>
                  </div>
                  
                  <div className="border-t pt-4 space-y-3">
                    <div className="flex items-center space-x-3 text-sm">
                      <Shield className="w-4 h-4 text-[#65E856]" />
                      <span className="text-gray-700">100% Verified Product</span>
                    </div>
                    <div className="flex items-center space-x-3 text-sm">
                      <Truck className="w-4 h-4 text-[#65E856]" />
                      <span className="text-gray-700">Free Shipping Included</span>
                    </div>
                    <div className="flex items-center space-x-3 text-sm">
                      <Clock className="w-4 h-4 text-[#65E856]" />
                      <span className="text-gray-700">Delivery in 5-7 days</span>
                    </div>
                  </div>
                  
                  {product.timeLeft && (
                    <div className="bg-red-50 border border-red-200 rounded-lg p-3">
                      <div className="flex items-center space-x-2 text-red-700">
                        <Clock className="w-4 h-4" />
                        <span className="text-sm font-medium">
                          Offer expires in {product.timeLeft}
                        </span>
                      </div>
                    </div>
                  )}
                </div>
              </CardContent>
            </Card>
          </div>

          {/* Claim Form */}
          <div className="lg:col-span-2">
            <Card>
              <CardContent className="p-6">
                <form onSubmit={handleSubmit} className="space-y-6">
                  {/* Step 1: Personal Information */}
                  {step === 1 && (
                    <div className="space-y-6">
                      <div className="flex items-center space-x-3 mb-6">
                        <User className="w-6 h-6 text-[#65E856]" />
                        <h2 className="text-xl font-semibold text-gray-900">
                          Personal Information
                        </h2>
                      </div>
                      
                      <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                        <div>
                          <label className="block text-sm font-medium text-gray-700 mb-2">
                            First Name *
                          </label>
                          <Input
                            type="text"
                            value={formData.firstName}
                            onChange={(e) => handleInputChange('firstName', e.target.value)}
                            placeholder="Enter your first name"
                            required
                          />
                        </div>
                        <div>
                          <label className="block text-sm font-medium text-gray-700 mb-2">
                            Last Name *
                          </label>
                          <Input
                            type="text"
                            value={formData.lastName}
                            onChange={(e) => handleInputChange('lastName', e.target.value)}
                            placeholder="Enter your last name"
                            required
                          />
                        </div>
                      </div>
                      
                      <div>
                        <label className="block text-sm font-medium text-gray-700 mb-2">
                          Email Address *
                        </label>
                        <Input
                          type="email"
                          value={formData.email}
                          onChange={(e) => handleInputChange('email', e.target.value)}
                          placeholder="Enter your email address"
                          required
                        />
                      </div>
                      
                      <div>
                        <label className="block text-sm font-medium text-gray-700 mb-2">
                          Phone Number *
                        </label>
                        <Input
                          type="tel"
                          value={formData.phone}
                          onChange={(e) => handleInputChange('phone', e.target.value)}
                          placeholder="Enter your phone number"
                          required
                        />
                      </div>
                    </div>
                  )}

                  {/* Step 2: Shipping Information */}
                  {step === 2 && (
                    <div className="space-y-6">
                      <div className="flex items-center space-x-3 mb-6">
                        <MapPin className="w-6 h-6 text-[#65E856]" />
                        <h2 className="text-xl font-semibold text-gray-900">
                          Shipping Address
                        </h2>
                      </div>
                      
                      <div>
                        <label className="block text-sm font-medium text-gray-700 mb-2">
                          Street Address *
                        </label>
                        <Input
                          type="text"
                          value={formData.address}
                          onChange={(e) => handleInputChange('address', e.target.value)}
                          placeholder="Enter your street address"
                          required
                        />
                      </div>
                      
                      <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
                        <div>
                          <label className="block text-sm font-medium text-gray-700 mb-2">
                            City *
                          </label>
                          <Input
                            type="text"
                            value={formData.city}
                            onChange={(e) => handleInputChange('city', e.target.value)}
                            placeholder="City"
                            required
                          />
                        </div>
                        <div>
                          <label className="block text-sm font-medium text-gray-700 mb-2">
                            State *
                          </label>
                          <Input
                            type="text"
                            value={formData.state}
                            onChange={(e) => handleInputChange('state', e.target.value)}
                            placeholder="State"
                            required
                          />
                        </div>
                        <div>
                          <label className="block text-sm font-medium text-gray-700 mb-2">
                            ZIP Code *
                          </label>
                          <Input
                            type="text"
                            value={formData.zipCode}
                            onChange={(e) => handleInputChange('zipCode', e.target.value)}
                            placeholder="ZIP Code"
                            required
                          />
                        </div>
                      </div>
                    </div>
                  )}

                  {/* Step 3: Confirmation */}
                  {step === 3 && (
                    <div className="space-y-6">
                      <div className="flex items-center space-x-3 mb-6">
                        <CheckCircle className="w-6 h-6 text-[#65E856]" />
                        <h2 className="text-xl font-semibold text-gray-900">
                          Confirm Your Claim
                        </h2>
                      </div>
                      
                      <div className="bg-gray-50 rounded-lg p-6 space-y-4">
                        <h3 className="font-medium text-gray-900">Review Your Information</h3>
                        <div className="grid grid-cols-1 md:grid-cols-2 gap-4 text-sm">
                          <div>
                            <span className="text-gray-600">Name:</span>
                            <span className="ml-2 font-medium">
                              {formData.firstName} {formData.lastName}
                            </span>
                          </div>
                          <div>
                            <span className="text-gray-600">Email:</span>
                            <span className="ml-2 font-medium">{formData.email}</span>
                          </div>
                          <div>
                            <span className="text-gray-600">Phone:</span>
                            <span className="ml-2 font-medium">{formData.phone}</span>
                          </div>
                          <div>
                            <span className="text-gray-600">Address:</span>
                            <span className="ml-2 font-medium">
                              {formData.address}, {formData.city}, {formData.state} {formData.zipCode}
                            </span>
                          </div>
                        </div>
                      </div>
                      
                      <div className="space-y-4">
                        <label className="flex items-start space-x-3">
                          <input
                            type="checkbox"
                            checked={formData.agreeToTerms}
                            onChange={(e) => handleInputChange('agreeToTerms', e.target.checked)}
                            className="mt-1 w-4 h-4 text-[#65E856] border-gray-300 rounded focus:ring-[#65E856]"
                          />
                          <span className="text-sm text-gray-700">
                            I agree to the{' '}
                            <a href="#" className="text-[#65E856] hover:underline">
                              Terms of Service
                            </a>{' '}
                            and{' '}
                            <a href="#" className="text-[#65E856] hover:underline">
                              Privacy Policy
                            </a>
                          </span>
                        </label>
                        
                        <label className="flex items-start space-x-3">
                          <input
                            type="checkbox"
                            checked={formData.agreeToReview}
                            onChange={(e) => handleInputChange('agreeToReview', e.target.checked)}
                            className="mt-1 w-4 h-4 text-[#65E856] border-gray-300 rounded focus:ring-[#65E856]"
                          />
                          <span className="text-sm text-gray-700">
                            I agree to provide a review of this product within 30 days of receiving it
                          </span>
                        </label>
                      </div>
                    </div>
                  )}

                  {/* Navigation Buttons */}
                  <div className="flex justify-between pt-6 border-t">
                    {step > 1 && (
                      <Button
                        type="button"
                        variant="outline"
                        onClick={() => setStep(step - 1)}
                      >
                        Previous
                      </Button>
                    )}
                    
                    <Button
                      type="submit"
                      disabled={!isStepValid()}
                      className={`ml-auto bg-[#65E856] hover:bg-[#55d846] text-white ${
                        !isStepValid() ? 'opacity-50 cursor-not-allowed' : ''
                      }`}
                    >
                      {step === 3 ? 'Claim Product' : 'Continue'}
                    </Button>
                  </div>
                </form>
              </CardContent>
            </Card>
          </div>
        </div>
      </div>
    </div>
  );
};