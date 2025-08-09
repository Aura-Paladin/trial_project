import React from 'react';
import { FileText, Calendar, Shield, AlertCircle } from 'lucide-react';
import { Card, CardContent } from '../components/ui/card';

interface TermsPageProps {
  onNavigate: (page: string) => void;
}

export const TermsPage: React.FC<TermsPageProps> = ({ onNavigate }) => {
  return (
    <div className="min-h-screen bg-white">
      <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 py-8">
        {/* Header */}
        <div className="text-center mb-12">
          <div className="w-16 h-16 bg-[#65E856] rounded-full flex items-center justify-center mx-auto mb-6">
            <FileText className="w-8 h-8 text-white" />
          </div>
          <h1 className="text-4xl lg:text-5xl font-bold text-gray-900 mb-4">
            Terms of Service
          </h1>
          <div className="flex items-center justify-center space-x-2 text-gray-600">
            <Calendar className="w-4 h-4" />
            <span>Last updated: March 1, 2024</span>
          </div>
        </div>

        {/* Important Notice */}
        <Card className="mb-8 border-orange-200 bg-orange-50">
          <CardContent className="p-6">
            <div className="flex items-start space-x-3">
              <AlertCircle className="w-6 h-6 text-orange-600 flex-shrink-0 mt-0.5" />
              <div>
                <h3 className="font-semibold text-orange-900 mb-2">
                  Important Notice
                </h3>
                <p className="text-orange-800 text-sm leading-relaxed">
                  Please read these Terms of Service carefully before using Freely. 
                  By accessing or using our service, you agree to be bound by these terms. 
                  If you disagree with any part of these terms, you may not access the service.
                </p>
              </div>
            </div>
          </CardContent>
        </Card>

        {/* Terms Content */}
        <div className="prose prose-gray max-w-none">
          <Card className="mb-8">
            <CardContent className="p-8">
              <h2 className="text-2xl font-bold text-gray-900 mb-4">1. Acceptance of Terms</h2>
              <p className="text-gray-700 leading-relaxed mb-4">
                By accessing and using Freely ("the Service"), you accept and agree to be bound by the terms 
                and provision of this agreement. If you do not agree to abide by the above, please do not use this service.
              </p>
              <p className="text-gray-700 leading-relaxed">
                These Terms of Service ("Terms") govern your use of our website located at freely.com 
                (the "Service") operated by Freely Inc. ("us", "we", or "our").
              </p>
            </CardContent>
          </Card>

          <Card className="mb-8">
            <CardContent className="p-8">
              <h2 className="text-2xl font-bold text-gray-900 mb-4">2. Description of Service</h2>
              <p className="text-gray-700 leading-relaxed mb-4">
                Freely is a platform that connects users with brands offering free products in exchange for honest reviews. 
                Our service allows you to:
              </p>
              <ul className="list-disc list-inside text-gray-700 space-y-2 mb-4">
                <li>Browse and discover free products from verified brands</li>
                <li>Claim products at no cost, including free shipping</li>
                <li>Receive products directly from brands or their authorized distributors</li>
                <li>Write and share reviews about products you've received</li>
                <li>Participate in our community of product reviewers</li>
              </ul>
            </CardContent>
          </Card>

          <Card className="mb-8">
            <CardContent className="p-8">
              <h2 className="text-2xl font-bold text-gray-900 mb-4">3. User Eligibility and Registration</h2>
              <p className="text-gray-700 leading-relaxed mb-4">
                To use our Service, you must:
              </p>
              <ul className="list-disc list-inside text-gray-700 space-y-2 mb-4">
                <li>Be at least 18 years of age</li>
                <li>Provide accurate, current, and complete information during registration</li>
                <li>Maintain and update your information to keep it accurate and current</li>
                <li>Have a valid shipping address within the United States</li>
                <li>Agree to write honest reviews for products you receive</li>
              </ul>
              <p className="text-gray-700 leading-relaxed">
                You are responsible for safeguarding your account credentials and for all activities 
                that occur under your account.
              </p>
            </CardContent>
          </Card>

          <Card className="mb-8">
            <CardContent className="p-8">
              <h2 className="text-2xl font-bold text-gray-900 mb-4">4. Product Claims and Limitations</h2>
              <p className="text-gray-700 leading-relaxed mb-4">
                When claiming products through our Service:
              </p>
              <ul className="list-disc list-inside text-gray-700 space-y-2 mb-4">
                <li>Most products are limited to one claim per household</li>
                <li>Products are subject to availability and may be discontinued at any time</li>
                <li>We reserve the right to limit or restrict claims based on various factors</li>
                <li>False information in claims may result in account suspension</li>
                <li>Products cannot be resold or transferred to others</li>
              </ul>
            </CardContent>
          </Card>

          <Card className="mb-8">
            <CardContent className="p-8">
              <h2 className="text-2xl font-bold text-gray-900 mb-4">5. Review Requirements</h2>
              <p className="text-gray-700 leading-relaxed mb-4">
                By claiming a product, you agree to:
              </p>
              <ul className="list-disc list-inside text-gray-700 space-y-2 mb-4">
                <li>Write an honest, detailed review within 30 days of receiving the product</li>
                <li>Base your review on your actual experience with the product</li>
                <li>Not accept compensation from brands for positive reviews</li>
                <li>Disclose any relationships with brands when relevant</li>
                <li>Follow our community guidelines when writing reviews</li>
              </ul>
              <p className="text-gray-700 leading-relaxed">
                Failure to provide required reviews may result in restrictions on future claims.
              </p>
            </CardContent>
          </Card>

          <Card className="mb-8">
            <CardContent className="p-8">
              <h2 className="text-2xl font-bold text-gray-900 mb-4">6. Prohibited Uses</h2>
              <p className="text-gray-700 leading-relaxed mb-4">
                You may not use our Service:
              </p>
              <ul className="list-disc list-inside text-gray-700 space-y-2 mb-4">
                <li>For any unlawful purpose or to solicit others to perform unlawful acts</li>
                <li>To violate any international, federal, provincial, or state regulations, rules, laws, or local ordinances</li>
                <li>To infringe upon or violate our intellectual property rights or the intellectual property rights of others</li>
                <li>To harass, abuse, insult, harm, defame, slander, disparage, intimidate, or discriminate</li>
                <li>To submit false or misleading information</li>
                <li>To create multiple accounts to circumvent claim limitations</li>
                <li>To resell or redistribute claimed products</li>
              </ul>
            </CardContent>
          </Card>

          <Card className="mb-8">
            <CardContent className="p-8">
              <h2 className="text-2xl font-bold text-gray-900 mb-4">7. Intellectual Property Rights</h2>
              <p className="text-gray-700 leading-relaxed mb-4">
                The Service and its original content, features, and functionality are and will remain the exclusive 
                property of Freely Inc. and its licensors. The Service is protected by copyright, trademark, and 
                other laws. Our trademarks and trade dress may not be used in connection with any product or 
                service without our prior written consent.
              </p>
            </CardContent>
          </Card>

          <Card className="mb-8">
            <CardContent className="p-8">
              <h2 className="text-2xl font-bold text-gray-900 mb-4">8. Privacy Policy</h2>
              <p className="text-gray-700 leading-relaxed mb-4">
                Your privacy is important to us. Please review our Privacy Policy, which also governs your use 
                of the Service, to understand our practices.
              </p>
              <button
                onClick={() => onNavigate('privacy')}
                className="text-[#65E856] hover:underline font-medium"
              >
                View Privacy Policy →
              </button>
            </CardContent>
          </Card>

          <Card className="mb-8">
            <CardContent className="p-8">
              <h2 className="text-2xl font-bold text-gray-900 mb-4">9. Disclaimers and Limitation of Liability</h2>
              <p className="text-gray-700 leading-relaxed mb-4">
                The information on this website is provided on an "as is" basis. To the fullest extent permitted by law, 
                this Company:
              </p>
              <ul className="list-disc list-inside text-gray-700 space-y-2 mb-4">
                <li>Excludes all representations and warranties relating to this website and its contents</li>
                <li>Does not guarantee the quality, safety, or legality of products offered by brands</li>
                <li>Is not responsible for any damages arising from your use of claimed products</li>
                <li>Limits liability to the maximum extent permitted by applicable law</li>
              </ul>
            </CardContent>
          </Card>

          <Card className="mb-8">
            <CardContent className="p-8">
              <h2 className="text-2xl font-bold text-gray-900 mb-4">10. Termination</h2>
              <p className="text-gray-700 leading-relaxed mb-4">
                We may terminate or suspend your account and bar access to the Service immediately, without prior notice 
                or liability, under our sole discretion, for any reason whatsoever and without limitation, including but 
                not limited to a breach of the Terms.
              </p>
              <p className="text-gray-700 leading-relaxed">
                If you wish to terminate your account, you may simply discontinue using the Service or contact us 
                to request account deletion.
              </p>
            </CardContent>
          </Card>

          <Card className="mb-8">
            <CardContent className="p-8">
              <h2 className="text-2xl font-bold text-gray-900 mb-4">11. Changes to Terms</h2>
              <p className="text-gray-700 leading-relaxed mb-4">
                We reserve the right, at our sole discretion, to modify or replace these Terms at any time. 
                If a revision is material, we will provide at least 30 days notice prior to any new terms taking effect.
              </p>
              <p className="text-gray-700 leading-relaxed">
                What constitutes a material change will be determined at our sole discretion. By continuing to access 
                or use our Service after any revisions become effective, you agree to be bound by the revised terms.
              </p>
            </CardContent>
          </Card>

          <Card className="mb-8">
            <CardContent className="p-8">
              <h2 className="text-2xl font-bold text-gray-900 mb-4">12. Contact Information</h2>
              <p className="text-gray-700 leading-relaxed mb-4">
                If you have any questions about these Terms of Service, please contact us:
              </p>
              <div className="bg-gray-50 rounded-lg p-4 space-y-2">
                <p className="text-gray-700"><strong>Email:</strong> legal@freely.com</p>
                <p className="text-gray-700"><strong>Address:</strong> 123 Main Street, San Francisco, CA 94102</p>
                <p className="text-gray-700"><strong>Phone:</strong> +1 (555) 123-4567</p>
              </div>
            </CardContent>
          </Card>
        </div>

        {/* Footer */}
        <div className="text-center mt-12 pt-8 border-t border-gray-200">
          <div className="flex items-center justify-center space-x-2 text-gray-500 mb-4">
            <Shield className="w-4 h-4" />
            <span className="text-sm">These terms are legally binding</span>
          </div>
          <p className="text-sm text-gray-600">
            By using Freely, you acknowledge that you have read and understood these Terms of Service.
          </p>
        </div>
      </div>
    </div>
  );
};