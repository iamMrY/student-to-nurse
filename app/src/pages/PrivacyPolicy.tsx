import React from 'react';
import { Link } from 'react-router-dom';
import { ArrowLeft, Shield, Lock, Eye, UserCheck } from 'lucide-react';
import { PageLayout } from '../components/PageLayout';

export default function PrivacyPolicy() {
  const sections = [
    {
      icon: <Shield className="w-8 h-8 text-blue-500" />,
      title: 'Information We Collect',
      content: `We collect information that you provide directly to us, including:
        • Personal information (name, email address, etc.)
        • Account credentials
        • Profile information
        • Study progress and performance data`,
    },
    {
      icon: <Lock className="w-8 h-8 text-green-500" />,
      title: 'How We Protect Your Data',
      content: `We implement appropriate technical and organizational security measures to protect your personal information, including:
        • Encryption of sensitive data
        • Regular security assessments
        • Secure data storage
        • Access controls and authentication
        • Regular security updates`,
    },
    {
      icon: <Eye className="w-8 h-8 text-purple-500" />,
      title: 'How We Use Your Information',
      content: `We use your information to:
        • Provide and improve our services
        • Personalize your learning experience
        • Send important updates and notifications
        • Analyze and improve our platform
        • Comply with legal obligations`,
    },
    {
      icon: <UserCheck className="w-8 h-8 text-red-500" />,
      title: 'Your Rights and Choices',
      content: `You have the right to:
        • Access your personal information
        • Correct inaccurate data
        • Request deletion of your data
        • Opt-out of marketing communications
        • Export your data`,
    },
  ];

  return (
    <PageLayout>
      <div className="min-h-screen bg-gradient-to-br from-gray-50 to-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
          <Link
            to="/"
            className="inline-flex items-center text-blue-600 hover:text-blue-700 mb-8 transition-colors duration-200"
          >
            <ArrowLeft className="w-5 h-5 mr-2" />
            Back to Home
          </Link>

          {/* Header */}
          <div className="text-center mb-16">
            <h1 className="text-4xl font-extrabold text-gray-900 sm:text-5xl mb-4">
              Privacy Policy
            </h1>
            <p className="text-xl text-gray-600 max-w-3xl mx-auto">
              Last updated: March 2025
            </p>
          </div>

          {/* Introduction */}
          <div className="bg-white rounded-xl shadow-lg p-8 mb-16">
            <div className="max-w-3xl mx-auto">
              <p className="text-gray-600 mb-4">
                At Student To RN, we take your privacy seriously. This Privacy
                Policy explains how we collect, use, disclose, and safeguard
                your information when you use our website and services.
              </p>
              <p className="text-gray-600">
                Please read this privacy policy carefully. If you do not agree
                with the terms of this privacy policy, please do not access the
                site.
              </p>
            </div>
          </div>

          {/* Main Sections */}
          <div className="space-y-8 mb-16">
            {sections.map((section, index) => (
              <div key={index} className="bg-white rounded-xl shadow-lg p-8">
                <div className="flex items-start">
                  <div className="flex-shrink-0">{section.icon}</div>
                  <div className="ml-6">
                    <h2 className="text-2xl font-bold text-gray-900 mb-4">
                      {section.title}
                    </h2>
                    <div className="prose max-w-none text-gray-600">
                      <p className="whitespace-pre-line">{section.content}</p>
                    </div>
                  </div>
                </div>
              </div>
            ))}
          </div>

          {/* Additional Information */}
          <div className="bg-white rounded-xl shadow-lg p-8 mb-16">
            <h2 className="text-2xl font-bold text-gray-900 mb-4">
              Changes to This Privacy Policy
            </h2>
            <p className="text-gray-600 mb-4">
              We reserve the right to update or change our Privacy Policy at any
              time. If we make significant changes, we will notify you through
              the email address you have provided or by placing a prominent
              notice on our website.
            </p>
            <p className="text-gray-600">
              Your continued use of our service after we make changes is deemed
              to be acceptance of those changes, so please check the policy
              periodically for updates.
            </p>
          </div>

          {/* Contact Section */}
          <div className="bg-gradient-to-r from-blue-600 to-indigo-600 rounded-2xl shadow-xl overflow-hidden">
            <div className="px-8 py-12 text-center text-white">
              <h2 className="text-3xl font-bold mb-4">
                Questions About Our Privacy Policy?
              </h2>
              <p className="text-lg mb-8">
                If you have any questions about this Privacy Policy, please
                contact us.
              </p>
              <button className="bg-white text-blue-600 px-8 py-3 rounded-lg font-semibold hover:bg-blue-50 transition-all duration-200">
                Contact Privacy Team
              </button>
            </div>
          </div>
        </div>
      </div>
    </PageLayout>
  );
}
