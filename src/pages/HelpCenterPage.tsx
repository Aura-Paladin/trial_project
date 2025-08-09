import React, { useState } from 'react';
import { Search, MessageCircle, Mail, Phone, ChevronDown, ChevronUp, HelpCircle } from 'lucide-react';
import { Button } from '../components/ui/button';
import { Input } from '../components/ui/input';
import { Card, CardContent } from '../components/ui/card';
import { Tabs, TabsContent, TabsList, TabsTrigger } from '../components/ui/tabs';

interface HelpCenterPageProps {
  onNavigate: (page: string) => void;
}

export const HelpCenterPage: React.FC<HelpCenterPageProps> = ({ onNavigate }) => {
  const [searchQuery, setSearchQuery] = useState('');
  const [expandedFaq, setExpandedFaq] = useState<string | null>(null);
  const [contactForm, setContactForm] = useState({
    name: '',
    email: '',
    subject: '',
    message: '',
    category: 'general',
  });

  const faqCategories = [
    {
      id: 'getting-started',
      title: 'Getting Started',
      questions: [
        {
          id: 'what-is-freely',
          question: 'What is Freely and how does it work?',
          answer: 'Freely is a platform that connects users with brands offering genuine free products. Brands provide free products in exchange for honest reviews from real users. Simply browse, claim, and receive products at no cost.',
        },
        {
          id: 'how-to-sign-up',
          question: 'How do I sign up for Freely?',
          answer: 'Click the "Sign Up" button in the top right corner or on our homepage. Fill out the registration form with your basic information, verify your email address, and you\'re ready to start claiming free products!',
        },
        {
          id: 'is-it-really-free',
          question: 'Are the products really free?',
          answer: 'Yes! All products on Freely are completely free, including shipping. There are no hidden fees, subscriptions, or catches. Brands offer these products to get authentic reviews from real users.',
        },
      ],
    },
    {
      id: 'claiming-products',
      title: 'Claiming Products',
      questions: [
        {
          id: 'how-to-claim',
          question: 'How do I claim a product?',
          answer: 'Find a product you like, click "Claim Now," fill out the simple form with your shipping information, and submit. You\'ll receive a confirmation email with tracking details once your product ships.',
        },
        {
          id: 'claim-limits',
          question: 'How many products can I claim?',
          answer: 'Most products have a limit of one per household to ensure fair distribution. Some high-value items may have additional restrictions. Check each product\'s details for specific limitations.',
        },
        {
          id: 'claim-requirements',
          question: 'What are the requirements to claim products?',
          answer: 'You must be 18+ years old, have a valid shipping address, and agree to write an honest review within 30 days of receiving the product. Some products may have additional requirements.',
        },
      ],
    },
    {
      id: 'shipping-delivery',
      title: 'Shipping & Delivery',
      questions: [
        {
          id: 'shipping-cost',
          question: 'Do I have to pay for shipping?',
          answer: 'No, shipping is completely free on all products. There are no shipping fees, handling charges, or any other costs.',
        },
        {
          id: 'delivery-time',
          question: 'How long does delivery take?',
          answer: 'Most products are delivered within 5-10 business days. You\'ll receive tracking information via email once your product ships, and you can track its progress in your account.',
        },
        {
          id: 'shipping-locations',
          question: 'Where do you ship?',
          answer: 'We currently ship to all 50 US states. International shipping is not available at this time, but we\'re working to expand our reach.',
        },
      ],
    },
    {
      id: 'reviews-feedback',
      title: 'Reviews & Feedback',
      questions: [
        {
          id: 'review-requirement',
          question: 'Do I have to write a review?',
          answer: 'Yes, writing an honest review within 30 days of receiving your product is required. This helps other users make informed decisions and allows brands to improve their products.',
        },
        {
          id: 'review-guidelines',
          question: 'What should I include in my review?',
          answer: 'Write an honest, detailed review about your experience with the product. Include what you liked, didn\'t like, and how you used it. Photos are encouraged but not required.',
        },
        {
          id: 'negative-reviews',
          question: 'Can I write a negative review?',
          answer: 'Absolutely! We encourage honest feedback, whether positive or negative. Brands value authentic reviews to improve their products and services.',
        },
      ],
    },
  ];

  const contactOptions = [
    {
      icon: <Mail className="w-6 h-6" />,
      title: 'Email Support',
      description: 'Get help via email within 24 hours',
      contact: 'support@freely.com',
      action: 'Send Email',
    },
    {
      icon: <MessageCircle className="w-6 h-6" />,
      title: 'Live Chat',
      description: 'Chat with our support team',
      contact: 'Available 9 AM - 6 PM EST',
      action: 'Start Chat',
    },
    {
      icon: <Phone className="w-6 h-6" />,
      title: 'Phone Support',
      description: 'Speak directly with our team',
      contact: '+1 (555) 123-4567',
      action: 'Call Now',
    },
  ];

  const filteredFaqs = faqCategories.map(category => ({
    ...category,
    questions: category.questions.filter(q =>
      q.question.toLowerCase().includes(searchQuery.toLowerCase()) ||
      q.answer.toLowerCase().includes(searchQuery.toLowerCase())
    ),
  })).filter(category => category.questions.length > 0);

  const handleFaqToggle = (questionId: string) => {
    setExpandedFaq(expandedFaq === questionId ? null : questionId);
  };

  const handleContactFormChange = (field: string, value: string) => {
    setContactForm(prev => ({ ...prev, [field]: value }));
  };

  const handleContactFormSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    // Handle form submission
    console.log('Contact form submitted:', contactForm);
    // Reset form
    setContactForm({
      name: '',
      email: '',
      subject: '',
      message: '',
      category: 'general',
    });
  };

  return (
    <div className="min-h-screen bg-white">
      <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8 py-8">
        {/* Header */}
        <div className="text-center mb-12">
          <div className="w-16 h-16 bg-[#65E856] rounded-full flex items-center justify-center mx-auto mb-6">
            <HelpCircle className="w-8 h-8 text-white" />
          </div>
          <h1 className="text-4xl lg:text-5xl font-bold text-gray-900 mb-4">
            Help Center
          </h1>
          <p className="text-xl text-gray-600 max-w-3xl mx-auto">
            Find answers to common questions, get support, and learn how to make the most of Freely
          </p>
        </div>

        {/* Search Bar */}
        <div className="max-w-2xl mx-auto mb-12">
          <div className="relative">
            <Search className="absolute left-4 top-1/2 transform -translate-y-1/2 text-gray-400 w-5 h-5" />
            <Input
              type="text"
              placeholder="Search for help articles, FAQs, and more..."
              value={searchQuery}
              onChange={(e) => setSearchQuery(e.target.value)}
              className="pl-12 pr-4 py-4 text-lg border-2 border-gray-200 focus:border-[#65E856] rounded-xl"
            />
          </div>
        </div>

        <Tabs defaultValue="faq" className="w-full">
          <TabsList className="grid w-full grid-cols-3 mb-8">
            <TabsTrigger value="faq">Frequently Asked Questions</TabsTrigger>
            <TabsTrigger value="contact">Contact Support</TabsTrigger>
            <TabsTrigger value="guides">User Guides</TabsTrigger>
          </TabsList>

          {/* FAQ Tab */}
          <TabsContent value="faq">
            <div className="space-y-8">
              {filteredFaqs.length === 0 ? (
                <div className="text-center py-12">
                  <div className="text-4xl mb-4">🔍</div>
                  <h3 className="text-xl font-semibold text-gray-900 mb-2">
                    No results found
                  </h3>
                  <p className="text-gray-600 mb-6">
                    Try adjusting your search terms or browse our categories below.
                  </p>
                  <Button
                    variant="outline"
                    onClick={() => setSearchQuery('')}
                    className="border-gray-300 hover:border-[#65E856] hover:text-[#65E856]"
                  >
                    Clear Search
                  </Button>
                </div>
              ) : (
                filteredFaqs.map((category) => (
                  <div key={category.id}>
                    <h2 className="text-2xl font-bold text-gray-900 mb-6">
                      {category.title}
                    </h2>
                    <div className="space-y-4">
                      {category.questions.map((faq) => (
                        <Card key={faq.id} className="border-gray-200">
                          <CardContent className="p-0">
                            <button
                              onClick={() => handleFaqToggle(faq.id)}
                              className="w-full text-left p-6 flex items-center justify-between hover:bg-gray-50 transition-colors"
                            >
                              <h3 className="text-lg font-medium text-gray-900 pr-4">
                                {faq.question}
                              </h3>
                              {expandedFaq === faq.id ? (
                                <ChevronUp className="w-5 h-5 text-gray-500 flex-shrink-0" />
                              ) : (
                                <ChevronDown className="w-5 h-5 text-gray-500 flex-shrink-0" />
                              )}
                            </button>
                            {expandedFaq === faq.id && (
                              <div className="px-6 pb-6">
                                <p className="text-gray-700 leading-relaxed">
                                  {faq.answer}
                                </p>
                              </div>
                            )}
                          </CardContent>
                        </Card>
                      ))}
                    </div>
                  </div>
                ))
              )}
            </div>
          </TabsContent>

          {/* Contact Tab */}
          <TabsContent value="contact">
            <div className="grid grid-cols-1 lg:grid-cols-2 gap-12">
              {/* Contact Options */}
              <div>
                <h2 className="text-2xl font-bold text-gray-900 mb-6">
                  Get in Touch
                </h2>
                <div className="space-y-6">
                  {contactOptions.map((option, index) => (
                    <Card key={index} className="border-gray-200">
                      <CardContent className="p-6">
                        <div className="flex items-start space-x-4">
                          <div className="w-12 h-12 bg-[#65E856] rounded-lg flex items-center justify-center text-white">
                            {option.icon}
                          </div>
                          <div className="flex-1">
                            <h3 className="text-lg font-semibold text-gray-900 mb-1">
                              {option.title}
                            </h3>
                            <p className="text-gray-600 mb-2">{option.description}</p>
                            <p className="text-sm text-gray-500 mb-4">{option.contact}</p>
                            <Button
                              variant="outline"
                              size="sm"
                              className="border-gray-300 hover:border-[#65E856] hover:text-[#65E856]"
                            >
                              {option.action}
                            </Button>
                          </div>
                        </div>
                      </CardContent>
                    </Card>
                  ))}
                </div>
              </div>

              {/* Contact Form */}
              <div>
                <h2 className="text-2xl font-bold text-gray-900 mb-6">
                  Send us a Message
                </h2>
                <Card className="border-gray-200">
                  <CardContent className="p-6">
                    <form onSubmit={handleContactFormSubmit} className="space-y-6">
                      <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                        <div>
                          <label className="block text-sm font-medium text-gray-700 mb-2">
                            Name *
                          </label>
                          <Input
                            type="text"
                            value={contactForm.name}
                            onChange={(e) => handleContactFormChange('name', e.target.value)}
                            placeholder="Your name"
                            required
                          />
                        </div>
                        <div>
                          <label className="block text-sm font-medium text-gray-700 mb-2">
                            Email *
                          </label>
                          <Input
                            type="email"
                            value={contactForm.email}
                            onChange={(e) => handleContactFormChange('email', e.target.value)}
                            placeholder="your@email.com"
                            required
                          />
                        </div>
                      </div>

                      <div>
                        <label className="block text-sm font-medium text-gray-700 mb-2">
                          Category
                        </label>
                        <select
                          value={contactForm.category}
                          onChange={(e) => handleContactFormChange('category', e.target.value)}
                          className="w-full px-3 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-[#65E856] focus:border-transparent"
                        >
                          <option value="general">General Question</option>
                          <option value="technical">Technical Issue</option>
                          <option value="account">Account Problem</option>
                          <option value="product">Product Issue</option>
                          <option value="shipping">Shipping Question</option>
                          <option value="review">Review Issue</option>
                        </select>
                      </div>

                      <div>
                        <label className="block text-sm font-medium text-gray-700 mb-2">
                          Subject *
                        </label>
                        <Input
                          type="text"
                          value={contactForm.subject}
                          onChange={(e) => handleContactFormChange('subject', e.target.value)}
                          placeholder="Brief description of your issue"
                          required
                        />
                      </div>

                      <div>
                        <label className="block text-sm font-medium text-gray-700 mb-2">
                          Message *
                        </label>
                        <textarea
                          value={contactForm.message}
                          onChange={(e) => handleContactFormChange('message', e.target.value)}
                          placeholder="Please provide as much detail as possible..."
                          rows={6}
                          className="w-full px-3 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-[#65E856] focus:border-transparent resize-none"
                          required
                        />
                      </div>

                      <Button
                        type="submit"
                        className="w-full bg-[#65E856] hover:bg-[#55d846] text-white font-semibold py-3"
                      >
                        Send Message
                      </Button>
                    </form>
                  </CardContent>
                </Card>
              </div>
            </div>
          </TabsContent>

          {/* Guides Tab */}
          <TabsContent value="guides">
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
              <Card className="border-gray-200 hover:shadow-md transition-shadow cursor-pointer">
                <CardContent className="p-6">
                  <div className="w-12 h-12 bg-[#65E856] rounded-lg flex items-center justify-center mb-4">
                    <span className="text-white text-xl">🚀</span>
                  </div>
                  <h3 className="text-lg font-semibold text-gray-900 mb-2">
                    Getting Started Guide
                  </h3>
                  <p className="text-gray-600 mb-4">
                    Learn how to set up your account and claim your first free product.
                  </p>
                  <Button variant="outline" size="sm">
                    Read Guide
                  </Button>
                </CardContent>
              </Card>

              <Card className="border-gray-200 hover:shadow-md transition-shadow cursor-pointer">
                <CardContent className="p-6">
                  <div className="w-12 h-12 bg-[#65E856] rounded-lg flex items-center justify-center mb-4">
                    <span className="text-white text-xl">📦</span>
                  </div>
                  <h3 className="text-lg font-semibold text-gray-900 mb-2">
                    Claiming Products
                  </h3>
                  <p className="text-gray-600 mb-4">
                    Step-by-step instructions on how to claim and track your products.
                  </p>
                  <Button variant="outline" size="sm">
                    Read Guide
                  </Button>
                </CardContent>
              </Card>

              <Card className="border-gray-200 hover:shadow-md transition-shadow cursor-pointer">
                <CardContent className="p-6">
                  <div className="w-12 h-12 bg-[#65E856] rounded-lg flex items-center justify-center mb-4">
                    <span className="text-white text-xl">⭐</span>
                  </div>
                  <h3 className="text-lg font-semibold text-gray-900 mb-2">
                    Writing Reviews
                  </h3>
                  <p className="text-gray-600 mb-4">
                    Tips for writing helpful reviews that benefit the community.
                  </p>
                  <Button variant="outline" size="sm">
                    Read Guide
                  </Button>
                </CardContent>
              </Card>

              <Card className="border-gray-200 hover:shadow-md transition-shadow cursor-pointer">
                <CardContent className="p-6">
                  <div className="w-12 h-12 bg-[#65E856] rounded-lg flex items-center justify-center mb-4">
                    <span className="text-white text-xl">🔒</span>
                  </div>
                  <h3 className="text-lg font-semibold text-gray-900 mb-2">
                    Account Security
                  </h3>
                  <p className="text-gray-600 mb-4">
                    Keep your account safe with our security best practices.
                  </p>
                  <Button variant="outline" size="sm">
                    Read Guide
                  </Button>
                </CardContent>
              </Card>

              <Card className="border-gray-200 hover:shadow-md transition-shadow cursor-pointer">
                <CardContent className="p-6">
                  <div className="w-12 h-12 bg-[#65E856] rounded-lg flex items-center justify-center mb-4">
                    <span className="text-white text-xl">🎯</span>
                  </div>
                  <h3 className="text-lg font-semibold text-gray-900 mb-2">
                    Maximizing Savings
                  </h3>
                  <p className="text-gray-600 mb-4">
                    Tips and tricks to find the best free products and save more money.
                  </p>
                  <Button variant="outline" size="sm">
                    Read Guide
                  </Button>
                </CardContent>
              </Card>

              <Card className="border-gray-200 hover:shadow-md transition-shadow cursor-pointer">
                <CardContent className="p-6">
                  <div className="w-12 h-12 bg-[#65E856] rounded-lg flex items-center justify-center mb-4">
                    <span className="text-white text-xl">🤝</span>
                  </div>
                  <h3 className="text-lg font-semibold text-gray-900 mb-2">
                    Community Guidelines
                  </h3>
                  <p className="text-gray-600 mb-4">
                    Learn about our community standards and how to be a great member.
                  </p>
                  <Button variant="outline" size="sm">
                    Read Guide
                  </Button>
                </CardContent>
              </Card>
            </div>
          </TabsContent>
        </Tabs>
      </div>
    </div>
  );
};