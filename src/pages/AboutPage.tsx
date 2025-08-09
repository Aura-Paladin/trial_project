import React from 'react';
import { CheckCircle, Users, Shield, Zap, ArrowRight, Star } from 'lucide-react';
import { Button } from '../components/ui/button';
import { Card, CardContent } from '../components/ui/card';

interface AboutPageProps {
  onNavigate: (page: string) => void;
}

export const AboutPage: React.FC<AboutPageProps> = ({ onNavigate }) => {
  const steps = [
    {
      step: 1,
      title: 'Browse Products',
      description: 'Discover thousands of free products from trusted brands across various categories.',
      icon: <Zap className="w-8 h-8" />,
    },
    {
      step: 2,
      title: 'Claim Instantly',
      description: 'Click claim and fill out a simple form with your shipping information.',
      icon: <CheckCircle className="w-8 h-8" />,
    },
    {
      step: 3,
      title: 'Receive & Review',
      description: 'Get your free product delivered and share your honest review with the community.',
      icon: <Star className="w-8 h-8" />,
    },
  ];

  const features = [
    {
      title: '100% Free Products',
      description: 'No hidden fees, no subscriptions. All products are completely free.',
      icon: <Shield className="w-6 h-6" />,
    },
    {
      title: 'Verified Brands',
      description: 'All brands are verified and products are authentic.',
      icon: <CheckCircle className="w-6 h-6" />,
    },
    {
      title: 'Community Driven',
      description: 'Real reviews from real users help everyone make better choices.',
      icon: <Users className="w-6 h-6" />,
    },
  ];

  const stats = [
    { number: '50K+', label: 'Happy Users' },
    { number: '10K+', label: 'Free Products' },
    { number: '100+', label: 'Trusted Brands' },
    { number: '$2.5M+', label: 'Money Saved' },
  ];

  return (
    <div className="min-h-screen bg-white">
      {/* Hero Section */}
      <section className="bg-gradient-to-br from-gray-50 to-white py-16">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <h1 className="text-4xl lg:text-5xl font-bold text-gray-900 mb-6">
            How Freely Works
          </h1>
          <p className="text-xl text-gray-600 mb-8 max-w-3xl mx-auto">
            Freely connects users with brands offering genuine free products. 
            It's simple, safe, and completely free - no catch, no hidden fees.
          </p>
          <Button
            size="lg"
            className="bg-[#65E856] hover:bg-[#55d846] text-white px-8 py-4 text-lg font-semibold"
            onClick={() => onNavigate('register')}
          >
            Get Started Free
            <ArrowRight className="ml-2 w-5 h-5" />
          </Button>
        </div>
      </section>

      {/* How It Works Steps */}
      <section className="py-20">
        <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-3xl lg:text-4xl font-bold text-gray-900 mb-4">
              Three Simple Steps
            </h2>
            <p className="text-xl text-gray-600">
              Getting free products has never been easier
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {steps.map((step, index) => (
              <div key={step.step} className="text-center relative">
                <div className="w-20 h-20 bg-[#65E856] rounded-full flex items-center justify-center mx-auto mb-6 text-white">
                  {step.icon}
                </div>
                <div className="absolute top-8 left-1/2 transform -translate-x-1/2 w-8 h-8 bg-[#65E856] rounded-full flex items-center justify-center text-white font-bold text-sm -mt-2">
                  {step.step}
                </div>
                <h3 className="text-xl font-semibold text-gray-900 mb-4">
                  {step.title}
                </h3>
                <p className="text-gray-600 leading-relaxed">
                  {step.description}
                </p>
                {index < steps.length - 1 && (
                  <div className="hidden md:block absolute top-10 left-full w-full">
                    <ArrowRight className="w-6 h-6 text-gray-300 mx-auto" />
                  </div>
                )}
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Features Section */}
      <section className="py-20 bg-gray-50">
        <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-3xl lg:text-4xl font-bold text-gray-900 mb-4">
              Why Choose Freely?
            </h2>
            <p className="text-xl text-gray-600">
              We're committed to providing a safe, reliable platform for free products
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {features.map((feature, index) => (
              <Card key={index} className="text-center border-gray-200">
                <CardContent className="p-8">
                  <div className="w-16 h-16 bg-[#65E856] rounded-full flex items-center justify-center mx-auto mb-6 text-white">
                    {feature.icon}
                  </div>
                  <h3 className="text-xl font-semibold text-gray-900 mb-4">
                    {feature.title}
                  </h3>
                  <p className="text-gray-600 leading-relaxed">
                    {feature.description}
                  </p>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>
      </section>

      {/* Stats Section */}
      <section className="py-20">
        <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-3xl lg:text-4xl font-bold text-gray-900 mb-4">
              Trusted by Thousands
            </h2>
            <p className="text-xl text-gray-600">
              Join our growing community of smart shoppers
            </p>
          </div>

          <div className="grid grid-cols-2 md:grid-cols-4 gap-8">
            {stats.map((stat, index) => (
              <div key={index} className="text-center">
                <div className="text-4xl lg:text-5xl font-bold text-[#65E856] mb-2">
                  {stat.number}
                </div>
                <div className="text-gray-600 font-medium">
                  {stat.label}
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* FAQ Section */}
      <section className="py-20 bg-gray-50">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-3xl lg:text-4xl font-bold text-gray-900 mb-4">
              Frequently Asked Questions
            </h2>
          </div>

          <div className="space-y-6">
            <Card>
              <CardContent className="p-6">
                <h3 className="text-lg font-semibold text-gray-900 mb-2">
                  Are the products really free?
                </h3>
                <p className="text-gray-600">
                  Yes! All products on Freely are completely free. Brands offer these products 
                  in exchange for honest reviews and feedback from real users.
                </p>
              </CardContent>
            </Card>

            <Card>
              <CardContent className="p-6">
                <h3 className="text-lg font-semibold text-gray-900 mb-2">
                  Do I have to pay for shipping?
                </h3>
                <p className="text-gray-600">
                  No, shipping is completely free. There are no hidden costs or fees whatsoever.
                </p>
              </CardContent>
            </Card>

            <Card>
              <CardContent className="p-6">
                <h3 className="text-lg font-semibold text-gray-900 mb-2">
                  What's the catch?
                </h3>
                <p className="text-gray-600">
                  There's no catch! Brands simply want honest reviews from real users. 
                  After receiving your product, you'll be asked to write a review within 30 days.
                </p>
              </CardContent>
            </Card>

            <Card>
              <CardContent className="p-6">
                <h3 className="text-lg font-semibold text-gray-900 mb-2">
                  How many products can I claim?
                </h3>
                <p className="text-gray-600">
                  Most products have a limit of one per household. This ensures fair distribution 
                  and gives more people the opportunity to try free products.
                </p>
              </CardContent>
            </Card>
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-20">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <div className="bg-gradient-to-r from-[#65E856] to-[#55d846] rounded-2xl p-8 lg:p-16 text-white">
            <h2 className="text-3xl lg:text-4xl font-bold mb-4">
              Ready to Start Saving?
            </h2>
            <p className="text-xl mb-8 opacity-90">
              Join thousands of users who are already enjoying free products from top brands.
            </p>
            <Button
              size="lg"
              variant="secondary"
              className="bg-white text-[#65E856] hover:bg-gray-100 px-8 py-4 text-lg font-semibold"
              onClick={() => onNavigate('register')}
            >
              Sign Up Now - It's Free!
            </Button>
          </div>
        </div>
      </section>
    </div>
  );
};