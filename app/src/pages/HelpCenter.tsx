import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import { 
  ArrowLeft, Search, HelpCircle, Book, 
  MessageCircle, FileText, ChevronRight, Mail 
} from 'lucide-react';
import { PageLayout } from '../components/PageLayout';

export default function HelpCenter() {
  const [searchQuery, setSearchQuery] = useState('');

  const categories = [
    {
      icon: <Book className="w-8 h-8 text-blue-500" />,
      title: "Getting Started",
      description: "New to Student To RN? Start here!",
      articles: [
        "How to create an account",
        "Setting up your profile",
        "Navigating the platform"
      ]
    },
    {
      icon: <FileText className="w-8 h-8 text-green-500" />,
      title: "Study Resources",
      description: "Learn about our study materials",
      articles: [
        "Accessing study guides",
        "Practice tests overview",
        "Using flashcards"
      ]
    },
    {
      icon: <MessageCircle className="w-8 h-8 text-purple-500" />,
      title: "Community",
      description: "Connect with other students",
      articles: [
        "Joining study groups",
        "Forum guidelines",
        "Mentorship program"
      ]
    }
  ];

  const faqs = [
    {
      question: "How do I reset my password?",
      answer: "You can reset your password by clicking the 'Forgot Password' link on the login page and following the instructions sent to your email."
    },
    {
      question: "Can I access the platform on mobile devices?",
      answer: "Yes! Our platform is fully responsive and works on all devices including smartphones and tablets."
    },
    {
      question: "How do I track my study progress?",
      answer: "Your study progress is automatically tracked in your dashboard. You can view detailed analytics and progress reports there."
    }
  ];

  return (
    <PageLayout>
      <div className="min-h-screen bg-gradient-to-br from-blue-50 to-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
          <Link
            to="/"
            className="inline-flex items-center text-blue-600 hover:text-blue-700 mb-8 transition-colors duration-200"
          >
            <ArrowLeft className="w-5 h-5 mr-2" />
            Back to Home
          </Link>

          {/* Hero Section */}
          <div className="text-center mb-16">
            <h1 className="text-4xl font-extrabold text-gray-900 sm:text-5xl mb-4">
              How can we help you?
            </h1>
            <div className="max-w-2xl mx-auto">
              <div className="relative">
                <Search className="absolute left-3 top-1/2 transform -translate-y-1/2 text-gray-400 w-5 h-5" />
                <input
                  type="text"
                  placeholder="Search for help articles..."
                  value={searchQuery}
                  onChange={(e) => setSearchQuery(e.target.value)}
                  className="w-full pl-10 pr-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-transparent"
                />
              </div>
            </div>
          </div>

          {/* Help Categories */}
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8 mb-16">
            {categories.map((category, index) => (
              <div key={index} className="bg-white rounded-xl shadow-lg p-6">
                <div className="flex items-center mb-4">
                  {category.icon}
                  <h2 className="text-xl font-bold text-gray-900 ml-3">{category.title}</h2>
                </div>
                <p className="text-gray-600 mb-4">{category.description}</p>
                <ul className="space-y-2">
                  {category.articles.map((article, articleIndex) => (
                    <li key={articleIndex}>
                      <a
                        href="#"
                        className="flex items-center text-blue-600 hover:text-blue-700 transition-colors duration-200"
                      >
                        <ChevronRight className="w-4 h-4 mr-1" />
                        {article}
                      </a>
                    </li>
                  ))}
                </ul>
              </div>
            ))}
          </div>

          {/* FAQs */}
          <div className="bg-white rounded-xl shadow-lg p-8 mb-16">
            <div className="max-w-3xl mx-auto">
              <h2 className="text-2xl font-bold text-gray-900 mb-8 flex items-center">
                <HelpCircle className="w-6 h-6 mr-2 text-blue-600" />
                Frequently Asked Questions
              </h2>
              <div className="space-y-6">
                {faqs.map((faq, index) => (
                  <div key={index} className="border-b border-gray-200 pb-6 last:border-0">
                    <h3 className="text-lg font-semibold text-gray-900 mb-2">{faq.question}</h3>
                    <p className="text-gray-600">{faq.answer}</p>
                  </div>
                ))}
              </div>
            </div>
          </div>

          {/* Contact Support */}
          <div className="bg-gradient-to-r from-blue-600 to-indigo-600 rounded-2xl shadow-xl overflow-hidden">
            <div className="px-8 py-12 text-center text-white">
              <Mail className="w-16 h-16 mx-auto mb-6" />
              <h2 className="text-3xl font-bold mb-4">Still Need Help?</h2>
              <p className="text-lg mb-8">
                Our support team is available 24/7 to assist you with any questions.
              </p>
              <button className="bg-white text-blue-600 px-8 py-3 rounded-lg font-semibold hover:bg-blue-50 transition-all duration-200">
                Contact Support
              </button>
            </div>
          </div>
        </div>
      </div>
    </PageLayout>
  );
}