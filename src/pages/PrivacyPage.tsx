import React from 'react';
import { Shield, Calendar, Eye, Lock, Database, UserCheck } from 'lucide-react';
import { Card, CardContent } from '../components/ui/card';

interface PrivacyPageProps {
  onNavigate: (page: string) => void;
}

export const PrivacyPage: React.FC<PrivacyPageProps> = ({ onNavigate }) => {
  return (
    <div className="min-h-screen bg-white">
      <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 py-8">
        {/* Header */}
        <div className="text-center mb-12">
          <div className="w-16 h-16 bg-[#65E856] rounded-full flex items-center justify-center mx-auto mb-6">
            <Shield className="w-8 h-8 text-white" />
          </div>
          <h1 className="text-4xl lg:text-5xl font-bold text-gray-900 mb-4">
            Privacy Policy
          </h1>
          <div className="flex items-center justify-center space-x-2 text-gray-600">
            <Calendar className="w-4 h-4" />
            <span>Last updated: March 1, 2024</span>
          </div>
        </div>

        {/* Privacy Commitment */}
        <Card className="mb-8 border-[#65E856] bg-green-50">
          <CardContent className="p-6">
            <div className="flex items-start space-x-3">
              <Lock className="w-6 h-6 text-[#65E856] flex-shrink-0 mt-0.5" />
              <div>
                <h3 className="font-semibold text-green-900 mb-2">
                  Our Privacy Commitment
                </h3>
                <p className="text-green-800 text-sm leading-relaxed">
                  At Freely, we are committed to protecting your privacy and personal information. 
                  This policy explains how we collect, use, and safeguard your data when you use our service.
                </p>
              </div>
            </div>
          </CardContent>
        </Card>

        {/* Privacy Content */}
        <div className="prose prose-gray max-w-none">
          <Card className="mb-8">
            <CardContent className="p-8">
              <h2 className="text-2xl font-bold text-gray-900 mb-4">1. Information We Collect</h2>
              
              <h3 className="text-lg font-semibold text-gray-900 mb-3">Personal Information</h3>
              <p className="text-gray-700 leading-relaxed mb-4">
                When you create an account or claim products, we collect:
              </p>
              <ul className="list-disc list-inside text-gray-700 space-y-2 mb-6">
                <li>Name and contact information (email, phone number)</li>
                <li>Shipping address for product delivery</li>
                <li>Account credentials (username, encrypted password)</li>
                <li>Profile information you choose to provide</li>
              </ul>

              <h3 className="text-lg font-semibold text-gray-900 mb-3">Usage Information</h3>
              <p className="text-gray-700 leading-relaxed mb-4">
                We automatically collect information about how you use our service:
              </p>
              <ul className="list-disc list-inside text-gray-700 space-y-2 mb-6">
                <li>Pages visited and features used</li>
                <li>Products viewed and claimed</li>
                <li>Reviews and ratings you provide</li>
                <li>Device information and IP address</li>
                <li>Browser type and operating system</li>
              </ul>

              <h3 className="text-lg font-semibold text-gray-900 mb-3">Cookies and Tracking</h3>
              <p className="text-gray-700 leading-relaxed">
                We use cookies and similar technologies to enhance your experience, remember your preferences, 
                and analyze site usage. You can control cookie settings through your browser.
              </p>
            </CardContent>
          </Card>

          <Card className="mb-8">
            <CardContent className="p-8">
              <h2 className="text-2xl font-bold text-gray-900 mb-4">2. How We Use Your Information</h2>
              <p className="text-gray-700 leading-relaxed mb-4">
                We use your information to:
              </p>
              <ul className="list-disc list-inside text-gray-700 space-y-2 mb-4">
                <li>Provide and maintain our service</li>
                <li>Process product claims and coordinate shipping</li>
                <li>Communicate with you about your account and claimed products</li>
                <li>Send notifications about new products and platform updates</li>
                <li>Improve our service through analytics and user feedback</li>
                <li>Prevent fraud and ensure platform security</li>
                <li>Comply with legal obligations</li>
              </ul>
            </CardContent>
          </Card>

          <Card className="mb-8">
            <CardContent className="p-8">
              <h2 className="text-2xl font-bold text-gray-900 mb-4">3. Information Sharing</h2>
              
              <h3 className="text-lg font-semibold text-gray-900 mb-3">With Brand Partners</h3>
              <p className="text-gray-700 leading-relaxed mb-4">
                When you claim a product, we share necessary information with the brand or their fulfillment partners:
              </p>
              <ul className="list-disc list-inside text-gray-700 space-y-2 mb-6">
                <li>Name and shipping address for product delivery</li>
                <li>Email address for shipping notifications</li>
                <li>Reviews you write about their products</li>
              </ul>

              <h3 className="text-lg font-semibold text-gray-900 mb-3">Service Providers</h3>
              <p className="text-gray-700 leading-relaxed mb-4">
                We work with trusted third-party service providers who help us operate our platform:
              </p>
              <ul className="list-disc list-inside text-gray-700 space-y-2 mb-6">
                <li>Cloud hosting and data storage providers</li>
                <li>Email and communication services</li>
                <li>Analytics and performance monitoring tools</li>
                <li>Customer support platforms</li>
              </ul>

              <h3 className="text-lg font-semibold text-gray-900 mb-3">Legal Requirements</h3>
              <p className="text-gray-700 leading-relaxed">
                We may disclose your information if required by law, court order, or to protect our rights, 
                property, or safety, or that of our users or the public.
              </p>
            </CardContent>
          </Card>

          <Card className="mb-8">
            <CardContent className="p-8">
              <h2 className="text-2xl font-bold text-gray-900 mb-4">4. Data Security</h2>
              <p className="text-gray-700 leading-relaxed mb-4">
                We implement appropriate security measures to protect your personal information:
              </p>
              <ul className="list-disc list-inside text-gray-700 space-y-2 mb-4">
                <li>Encryption of data in transit and at rest</li>
                <li>Regular security audits and vulnerability assessments</li>
                <li>Access controls and employee training</li>
                <li>Secure data centers with physical security measures</li>
                <li>Regular backups and disaster recovery procedures</li>
              </ul>
              <p className="text-gray-700 leading-relaxed">
                While we strive to protect your information, no method of transmission over the internet 
                or electronic storage is 100% secure. We cannot guarantee absolute security.
              </p>
            </CardContent>
          </Card>

          <Card className="mb-8">
            <CardContent className="p-8">
              <h2 className="text-2xl font-bold text-gray-900 mb-4">5. Your Privacy Rights</h2>
              <p className="text-gray-700 leading-relaxed mb-4">
                You have the following rights regarding your personal information:
              </p>
              
              <div className="grid grid-cols-1 md:grid-cols-2 gap-6 mb-6">
                <div className="bg-gray-50 rounded-lg p-4">
                  <div className="flex items-center space-x-2 mb-2">
                    <Eye className="w-5 h-5 text-[#65E856]" />
                    <h4 className="font-semibold text-gray-900">Access</h4>
                  </div>
                  <p className="text-sm text-gray-700">
                    Request a copy of the personal information we have about you
                  </p>
                </div>
                
                <div className="bg-gray-50 rounded-lg p-4">
                  <div className="flex items-center space-x-2 mb-2">
                    <UserCheck className="w-5 h-5 text-[#65E856]" />
                    <h4 className="font-semibold text-gray-900">Correction</h4>
                  </div>
                  <p className="text-sm text-gray-700">
                    Update or correct inaccurate personal information
                  </p>
                </div>
                
                <div className="bg-gray-50 rounded-lg p-4">
                  <div className="flex items-center space-x-2 mb-2">
                    <Database className="w-5 h-5 text-[#65E856]" />
                    <h4 className="font-semibold text-gray-900">Deletion</h4>
                  </div>
                  <p className="text-sm text-gray-700">
                    Request deletion of your personal information
                  </p>
                </div>
                
                <div className="bg-gray-50 rounded-lg p-4">
                  <div className="flex items-center space-x-2 mb-2">
                    <Lock className="w-5 h-5 text-[#65E856]" />
                    <h4 className="font-semibold text-gray-900">Portability</h4>
                  </div>
                  <p className="text-sm text-gray-700">
                    Receive your data in a portable format
                  </p>
                </div>
              </div>

              <p className="text-gray-700 leading-relaxed">
                To exercise these rights, please contact us at privacy@freely.com. We will respond to your 
                request within 30 days.
              </p>
            </CardContent>
          </Card>

          <Card className="mb-8">
            <CardContent className="p-8">
              <h2 className="text-2xl font-bold text-gray-900 mb-4">6. Data Retention</h2>
              <p className="text-gray-700 leading-relaxed mb-4">
                We retain your personal information for as long as necessary to:
              </p>
              <ul className="list-disc list-inside text-gray-700 space-y-2 mb-4">
                <li>Provide our services to you</li>
                <li>Comply with legal obligations</li>
                <li>Resolve disputes and enforce agreements</li>
                <li>Improve our services through analytics</li>
              </ul>
              <p className="text-gray-700 leading-relaxed">
                When you delete your account, we will delete or anonymize your personal information, 
                except where we are required to retain it for legal purposes.
              </p>
            </CardContent>
          </Card>

          <Card className="mb-8">
            <CardContent className="p-8">
              <h2 className="text-2xl font-bold text-gray-900 mb-4">7. Children's Privacy</h2>
              <p className="text-gray-700 leading-relaxed mb-4">
                Our service is not intended for children under 18 years of age. We do not knowingly collect 
                personal information from children under 18. If you are a parent or guardian and believe your 
                child has provided us with personal information, please contact us.
              </p>
              <p className="text-gray-700 leading-relaxed">
                If we discover that a child under 18 has provided us with personal information, we will 
                delete such information from our servers immediately.
              </p>
            </CardContent>
          </Card>

          <Card className="mb-8">
            <CardContent className="p-8">
              <h2 className="text-2xl font-bold text-gray-900 mb-4">8. International Data Transfers</h2>
              <p className="text-gray-700 leading-relaxed mb-4">
                Your information may be transferred to and processed in countries other than your own. 
                These countries may have different data protection laws than your jurisdiction.
              </p>
              <p className="text-gray-700 leading-relaxed">
                When we transfer your information internationally, we ensure appropriate safeguards are in place 
                to protect your privacy and rights.
              </p>
            </CardContent>
          </Card>

          <Card className="mb-8">
            <CardContent className="p-8">
              <h2 className="text-2xl font-bold text-gray-900 mb-4">9. Changes to This Policy</h2>
              <p className="text-gray-700 leading-relaxed mb-4">
                We may update this Privacy Policy from time to time. We will notify you of any changes by:
              </p>
              <ul className="list-disc list-inside text-gray-700 space-y-2 mb-4">
                <li>Posting the new Privacy Policy on this page</li>
                <li>Updating the "Last updated" date</li>
                <li>Sending you an email notification for material changes</li>
              </ul>
              <p className="text-gray-700 leading-relaxed">
                Your continued use of our service after any changes indicates your acceptance of the updated policy.
              </p>
            </CardContent>
          </Card>

          <Card className="mb-8">
            <CardContent className="p-8">
              <h2 className="text-2xl font-bold text-gray-900 mb-4">10. Contact Us</h2>
              <p className="text-gray-700 leading-relaxed mb-4">
                If you have any questions about this Privacy Policy or our privacy practices, please contact us:
              </p>
              <div className="bg-gray-50 rounded-lg p-4 space-y-2">
                <p className="text-gray-700"><strong>Privacy Officer:</strong> privacy@freely.com</p>
                <p className="text-gray-700"><strong>General Contact:</strong> support@freely.com</p>
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
            <span className="text-sm">Your privacy is our priority</span>
          </div>
          <p className="text-sm text-gray-600">
            We are committed to protecting your personal information and being transparent about our practices.
          </p>
        </div>
      </div>
    </div>
  );
};