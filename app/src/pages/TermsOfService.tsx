import React from 'react';
import { Link } from 'react-router-dom';
import { ArrowLeft, FileText, AlertCircle, Shield, Scale } from 'lucide-react';
import { PageLayout } from '../components/PageLayout';

export default function TermsOfService() {
  const sections = [
    {
      title: "1. Terms",
      content: `By accessing this website, you are agreeing to be bound by these terms of service, all applicable laws and regulations, and agree that you are responsible for compliance with any applicable local laws. If you do not agree with any of these terms, you are prohibited from using or accessing this site.`
    },
    {
      title: "2. Use License",
      content: `Permission is granted to temporarily download one copy of the materials (information or software) on Student To RN's website for personal, non-commercial transitory viewing only. This is the grant of a license, not a transfer of title, and under this license you may not:
        • Modify or copy the materials
        • Use the materials for any commercial purpose
        • Attempt to decompile or reverse engineer any software contained on the site
        • Remove any copyright or other proprietary notations from the materials
        • Transfer the materials to another person or "mirror" the materials on any other server`
    },
    {
      title: "3. Disclaimer",
      content: `The materials on Student To RN's website are provided on an 'as is' basis. Student To RN makes no warranties, expressed or implied, and hereby disclaims and negates all other warranties including, without limitation, implied warranties or conditions of merchantability, fitness for a particular purpose, or non-infringement of intellectual property or other violation of rights.`
    },
    {
      title: "4. Limitations",
      content: `In no event shall Student To RN or its suppliers be liable for any damages (including, without limitation, damages for loss of data or profit, or due to business interruption) arising out of the use or inability to use the materials on Student To RN's website, even if Student To RN or a Student To RN authorized representative has been notified orally or in writing of the possibility of such damage.`
    }
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
              Terms of Service
            </h1>
            <p className="text-xl text-gray-600 max-w-3xl mx-auto">
              Last updated: March 2024
            </p>
          </div>

          {/* Introduction */}
          <div className="bg-white rounded-xl shadow-lg p-8 mb-16">
            <div className="max-w-3xl mx-auto">
              <div className="flex items-center mb-6">
                <Scale className="w-8 h-8 text-blue-600 mr-3" />
                <h2 className="text-2xl font-bold text-gray-900">Agreement to Terms</h2>
              </div>
              <p className="text-gray-600">
                These Terms of Service govern your use of the website located at studenttorn.com and any 
                related services provided by Student To RN. By accessing or using our website, you agree 
                to be bound by these Terms.
              </p>
            </div>
          </div>

          {/* Main Sections */}
          <div className="space-y-8 mb-16">
            {sections.map((section, index) => (
              <div key={index} className="bg-white rounded-xl shadow-lg p-8">
                <h2 className="text-2xl font-bold text-gray-900 mb-4">{section.title}</h2>
                <div className="prose max-w-none text-gray-600">
                  <p className="whitespace-pre-line">{section.content}</p>
                </div>
              </div>
            ))}
          </div>

          {/* Important Notice */}
          <div className="bg-yellow-50 border-l-4 border-yellow-500 p-6 rounded-lg mb-16">
            <div className="flex">
              <AlertCircle className="w-6 h-6 text-yellow-500 mr-3" />
              <div>
                <h3 className="text-lg font-medium text-yellow-800">Important Notice</h3>
                <p className="mt-2 text-yellow-700">
                  By using our service, you acknowledge that you have read and understood these Terms 
                  of Service and agree to be bound by them. If you do not agree to these terms, please 
                  do not use our service.
                </p>
              </div>
            </div>
          </div>

          {/* Contact Section */}
          <div className="bg-gradient-to-r from-blue-600 to-indigo-600 rounded-2xl shadow-xl overflow-hidden">
            <div className="px-8 py-12 text-center text-white">
              <h2 className="text-3xl font-bold mb-4">Questions About Our Terms?</h2>
              <p className="text-lg mb-8">
                If you have any questions about these Terms of Service, please contact us.
              </p>
              <button className="bg-white text-blue-600 px-8 py-3 rounded-lg font-semibold hover:bg-blue-50 transition-all duration-200">
                Contact Legal Team
              </button>
            </div>
          </div>
        </div>
      </div>
    </PageLayout>
  );
}