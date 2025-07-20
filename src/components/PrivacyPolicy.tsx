import React from 'react';
import { Helmet } from 'react-helmet-async';
import { Shield, Eye, Cookie, Database } from 'lucide-react';

const PrivacyPolicy: React.FC = () => {
  return (
    <>
      <Helmet>
        <title>Privacy Policy - QuoteMood</title>
        <meta name="description" content="QuoteMood Privacy Policy - Learn how we protect your privacy and handle your data. We value your trust and transparency." />
        <meta name="keywords" content="privacy policy, data protection, quotemood privacy, user privacy" />
      </Helmet>

      <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
        {/* Header */}
        <div className="text-center mb-12">
          <div className="flex items-center justify-center mb-6">
            <div className="bg-gradient-to-r from-blue-500 to-indigo-600 p-4 rounded-3xl">
              <Shield className="h-12 w-12 text-white" />
            </div>
          </div>
          <h1 className="text-5xl font-bold text-gray-800 mb-6">
            Privacy{' '}
            <span className="bg-gradient-to-r from-blue-600 to-indigo-600 bg-clip-text text-transparent">
              Policy
            </span>
          </h1>
          <p className="text-xl text-gray-600 leading-relaxed">
            Your privacy is important to us. This policy explains how we handle your information.
          </p>
          <p className="text-sm text-gray-500 mt-4">
            Last updated: January 2025
          </p>
        </div>

        {/* Content */}
        <div className="prose max-w-none">
          {/* Information We Collect */}
          <section className="bg-white rounded-2xl shadow-md p-8 mb-8">
            <div className="flex items-center mb-4">
              <div className="bg-blue-100 p-2 rounded-lg mr-3">
                <Database className="h-6 w-6 text-blue-600" />
              </div>
              <h2 className="text-2xl font-bold text-gray-800">Information We Collect</h2>
            </div>
            
            <div className="space-y-4 text-gray-600">
              <div>
                <h3 className="text-lg font-semibold text-gray-800 mb-2">Personal Information</h3>
                <p>We do not collect personal information unless voluntarily provided through our contact form. This may include:</p>
                <ul className="list-disc list-inside ml-4 mt-2 space-y-1">
                  <li>Name and email address (only when you contact us)</li>
                  <li>Message content (only when you contact us)</li>
                </ul>
              </div>

              <div>
                <h3 className="text-lg font-semibold text-gray-800 mb-2">Automatically Collected Information</h3>
                <p>Like most websites, we automatically collect certain information:</p>
                <ul className="list-disc list-inside ml-4 mt-2 space-y-1">
                  <li>Browser type and version</li>
                  <li>Operating system</li>
                  <li>Pages visited and time spent</li>
                  <li>Referring website</li>
                  <li>IP address (anonymized)</li>
                </ul>
              </div>
            </div>
          </section>

          {/* How We Use Information */}
          <section className="bg-white rounded-2xl shadow-md p-8 mb-8">
            <div className="flex items-center mb-4">
              <div className="bg-green-100 p-2 rounded-lg mr-3">
                <Eye className="h-6 w-6 text-green-600" />
              </div>
              <h2 className="text-2xl font-bold text-gray-800">How We Use Your Information</h2>
            </div>
            
            <div className="text-gray-600 space-y-3">
              <p>We use the information we collect to:</p>
              <ul className="list-disc list-inside ml-4 space-y-2">
                <li>Respond to your inquiries and provide customer support</li>
                <li>Improve our website functionality and user experience</li>
                <li>Analyze website traffic and usage patterns</li>
                <li>Ensure website security and prevent abuse</li>
                <li>Comply with legal obligations</li>
              </ul>
            </div>
          </section>

          {/* Cookies and Tracking */}
          <section className="bg-white rounded-2xl shadow-md p-8 mb-8">
            <div className="flex items-center mb-4">
              <div className="bg-orange-100 p-2 rounded-lg mr-3">
                <Cookie className="h-6 w-6 text-orange-600" />
              </div>
              <h2 className="text-2xl font-bold text-gray-800">Cookies and Tracking</h2>
            </div>
            
            <div className="text-gray-600 space-y-4">
              <div>
                <h3 className="text-lg font-semibold text-gray-800 mb-2">Essential Cookies</h3>
                <p>We use essential cookies that are necessary for the website to function properly. These cannot be disabled.</p>
              </div>

              <div>
                <h3 className="text-lg font-semibold text-gray-800 mb-2">Analytics Cookies</h3>
                <p>We use Google Analytics to understand how visitors use our site. This helps us improve our content and user experience.</p>
              </div>

              <div>
                <h3 className="text-lg font-semibold text-gray-800 mb-2">Advertising Cookies</h3>
                <p>We use Google AdSense to display relevant advertisements. AdSense may use cookies to show you personalized ads based on your interests.</p>
              </div>
            </div>
          </section>

          {/* Data Sharing */}
          <section className="bg-white rounded-2xl shadow-md p-8 mb-8">
            <h2 className="text-2xl font-bold text-gray-800 mb-4">Data Sharing and Disclosure</h2>
            <div className="text-gray-600 space-y-3">
              <p>We do not sell, rent, or share your personal information with third parties except:</p>
              <ul className="list-disc list-inside ml-4 space-y-2">
                <li>With your explicit consent</li>
                <li>To comply with legal requirements</li>
                <li>To protect our rights, property, or safety</li>
                <li>With service providers who help operate our website (under strict confidentiality agreements)</li>
              </ul>
            </div>
          </section>

          {/* Data Security */}
          <section className="bg-white rounded-2xl shadow-md p-8 mb-8">
            <h2 className="text-2xl font-bold text-gray-800 mb-4">Data Security</h2>
            <div className="text-gray-600 space-y-3">
              <p>We implement appropriate security measures to protect your information:</p>
              <ul className="list-disc list-inside ml-4 space-y-2">
                <li>SSL encryption for data transmission</li>
                <li>Regular security updates and monitoring</li>
                <li>Limited access to personal information</li>
                <li>Secure hosting infrastructure</li>
              </ul>
            </div>
          </section>

          {/* Your Rights */}
          <section className="bg-white rounded-2xl shadow-md p-8 mb-8">
            <h2 className="text-2xl font-bold text-gray-800 mb-4">Your Rights</h2>
            <div className="text-gray-600 space-y-3">
              <p>You have the right to:</p>
              <ul className="list-disc list-inside ml-4 space-y-2">
                <li>Access the personal information we have about you</li>
                <li>Request correction of inaccurate information</li>
                <li>Request deletion of your personal information</li>
                <li>Opt-out of non-essential cookies</li>
                <li>Contact us with privacy-related questions</li>
              </ul>
            </div>
          </section>

          {/* Children's Privacy */}
          <section className="bg-white rounded-2xl shadow-md p-8 mb-8">
            <h2 className="text-2xl font-bold text-gray-800 mb-4">Children's Privacy</h2>
            <p className="text-gray-600">
              Our website is not intended for children under 13 years of age. We do not knowingly collect 
              personal information from children under 13. If you are a parent or guardian and believe 
              your child has provided us with personal information, please contact us immediately.
            </p>
          </section>

          {/* Changes to Policy */}
          <section className="bg-white rounded-2xl shadow-md p-8 mb-8">
            <h2 className="text-2xl font-bold text-gray-800 mb-4">Changes to This Policy</h2>
            <p className="text-gray-600">
              We may update this Privacy Policy from time to time. We will notify you of any changes 
              by posting the new Privacy Policy on this page and updating the "Last updated" date. 
              Your continued use of our website after any changes constitutes acceptance of the new policy.
            </p>
          </section>

          {/* Contact Information */}
          <section className="bg-gradient-to-r from-blue-50 to-indigo-50 rounded-2xl p-8">
            <h2 className="text-2xl font-bold text-gray-800 mb-4">Contact Us</h2>
            <p className="text-gray-600 mb-4">
              If you have any questions about this Privacy Policy or our data practices, please contact us:
            </p>
            <div className="bg-white rounded-xl p-4">
              <p className="text-gray-600">
                <strong>Email:</strong> s87661954@gmail.com<br />
                <strong>Website:</strong> Use our contact form for general inquiries
              </p>
            </div>
          </section>
        </div>
      </div>
    </>
  );
};

export default PrivacyPolicy;