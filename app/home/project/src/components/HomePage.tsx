import React, { useState } from 'react';
import { Routes, Route, useNavigate } from 'react-router-dom';
import {
  Home,
  Info,
  LogIn,
  LogOut,
  Facebook,
  Twitter,
  Instagram,
  Linkedin,
  Mail,
  ClipboardList,
  GraduationCap,
  Award,
  BadgeCheck,
  Globe,
  Trophy,
  ClipboardCheck,
  HandshakeIcon,
  ThumbsUp,
  Search,
  Share2,
  X,
  Stethoscope,
  LayoutDashboard,
  Brain
} from 'lucide-react';
import { useAuth } from '../contexts/AuthContext';

function NavigationBar() {
  const navigate = useNavigate();
  const { user, signOut } = useAuth();
  
  const handleAuthAction = async () => {
    if (user) {
      await signOut();
    } else {
      navigate('/auth');
    }
  };

  return (
    <nav className="bg-white border-b">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex justify-between h-16">
          <div className="flex items-center">
            <div className="flex-shrink-0 flex items-center">
              <span 
                onClick={() => navigate('/')}
                className="text-2xl font-bold bg-gradient-to-r from-blue-600 to-indigo-600 bg-clip-text text-transparent cursor-pointer"
              >
                Student To RN
              </span>
            </div>
          </div>
          <div className="flex items-center space-x-4">
            <button
              onClick={() => navigate('/')}
              className="inline-flex items-center px-4 py-2 text-sm font-medium text-gray-700 hover:text-blue-600 focus:outline-none focus:text-blue-600 transition-colors duration-200"
            >
              <Home className="w-4 h-4 mr-2" />
              Home
            </button>

            {user && (
              <button
                onClick={() => navigate('/dashboard')}
                className="inline-flex items-center px-4 py-2 text-sm font-medium text-gray-700 hover:text-blue-600 focus:outline-none focus:text-blue-600 transition-colors duration-200"
              >
                <LayoutDashboard className="w-4 h-4 mr-2" />
                Dashboard
              </button>
            )}

            <button 
              onClick={handleAuthAction}
              className="inline-flex items-center px-4 py-2 border border-transparent text-sm font-medium rounded-md text-white bg-gradient-to-r from-blue-600 to-indigo-600 hover:from-blue-700 hover:to-indigo-700 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-blue-500 transition-all duration-200 shadow-sm"
            >
              {user ? (
                <>
                  <LogOut className="w-4 h-4 mr-2" />
                  Sign Out
                </>
              ) : (
                <>
                  <LogIn className="w-4 h-4 mr-2" />
                  Sign In
                </>
              )}
            </button>
          </div>
        </div>
      </div>
    </nav>
  );
}

function Footer() {
  return (
    <footer className="bg-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
        <div className="grid grid-cols-1 md:grid-cols-4 gap-8">
          <div className="col-span-1 md:col-span-2">
            <span className="text-2xl font-bold bg-gradient-to-r from-blue-600 to-indigo-600 bg-clip-text text-transparent">
              Student To RN
            </span>
            <p className="mt-4 text-gray-600 max-w-md">
              Your trusted partner in nursing education and career success.
            </p>
            <div className="mt-6 flex space-x-4">
              <a
                href="#"
                className="text-gray-400 hover:text-blue-600 transition-colors duration-200"
              >
                <Facebook className="w-6 h-6" />
              </a>
              <a
                href="#"
                className="text-gray-400 hover:text-blue-600 transition-colors duration-200"
              >
                <Twitter className="w-6 h-6" />
              </a>
              <a
                href="#"
                className="text-gray-400 hover:text-blue-600 transition-colors duration-200"
              >
                <Instagram className="w-6 h-6" />
              </a>
              <a
                href="#"
                className="text-gray-400 hover:text-blue-600 transition-colors duration-200"
              >
                <Linkedin className="w-6 h-6" />
              </a>
            </div>
          </div>

          <div>
            <h3 className="text-sm font-semibold text-gray-900 tracking-wider uppercase">
              Company
            </h3>
            <ul className="mt-4 space-y-3">
              <li>
                <a
                  href="/about"
                  className="text-gray-600 hover:text-blue-600 transition-colors duration-200"
                >
                  About Us
                </a>
              </li>
              <li>
                <a
                  href="/careers"
                  className="text-gray-600 hover:text-blue-600 transition-colors duration-200"
                >
                  Careers
                </a>
              </li>
              <li>
                <a
                  href="#"
                  className="text-gray-600 hover:text-blue-600 transition-colors duration-200"
                >
                  Blog
                </a>
              </li>
            </ul>
          </div>

          <div>
            <h3 className="text-sm font-semibold text-gray-900 tracking-wider uppercase">
              Support
            </h3>
            <ul className="mt-4 space-y-3">
              <li>
                <a
                  href="/help"
                  className="text-gray-600 hover:text-blue-600 transition-colors duration-200"
                >
                  Help Center
                </a>
              </li>
              <li>
                <a
                  href="/privacy"
                  className="text-gray-600 hover:text-blue-600 transition-colors duration-200"
                >
                  Privacy Policy
                </a>
              </li>
              <li>
                <a
                  href="/terms"
                  className="text-gray-600 hover:text-blue-600 transition-colors duration-200"
                >
                  Terms of Service
                </a>
              </li>
              <li>
                <a
                  href="/contact"
                  className="inline-flex items-center text-gray-600 hover:text-blue-600 transition-colors duration-200"
                >
                  <Mail className="w-4 h-4 mr-2" />
                  Contact Us
                </a>
              </li>
            </ul>
          </div>
        </div>

        <div className="mt-12 pt-8 border-t border-gray-200">
          <p className="text-center text-gray-500">
            © {new Date().getFullYear()} Student To RN. All rights reserved.
          </p>
        </div>
      </div>
    </footer>
  );
}

function StudentToRNCategories() {
  const navigate = useNavigate();
  const [selectedCategory, setSelectedCategory] = useState(null);

  const categories = [
    {
      icon: <ClipboardList className="w-12 h-12" />,
      name: 'HESI & TEAS',
      color: 'text-purple-500',
      description:
        'Comprehensive study and preparation guide for the HESI and TEAS exams, offering essential resources to help you succeed.',
      features: [
        'Test Information',
        'Study Guides',
        'Frequently Asked Questions (FAQs)',
        'HESI & TEAS Resources',
      ],
      path: '/hesi-teas',
    },
    {
      icon: <Brain className="w-12 h-12" />,
      name: 'Practice Quiz',
      color: 'text-blue-500',
      description:
        'Test your knowledge with comprehensive practice quizzes for both HESI and TEAS exams.',
      features: [
        'Subject-specific quizzes',
        'Progress tracking',
        'Detailed explanations',
        'Performance analytics',
      ],
      path: '/quiz',
    },
    {
      icon: <GraduationCap className="w-12 h-12" />,
      name: 'Nursing Schools',
      color: 'text-red-500',
      description:
        'Find and compare nursing schools, admission requirements, and program details.',
      features: [
        'School Directory',
        'Admission Guides',
        'Program Comparisons',
        'Application Tips',
      ],
      path: '/nursing-schools',
    },
    {
      icon: <Award className="w-12 h-12" />,
      name: 'State Licensing',
      color: 'text-blue-500',
      description:
        'State-by-state nursing license requirements and application processes.',
      features: [
        'Requirements by State',
        'Application Process',
        'Fee Information',
        'Timeline Guide',
      ],
      path: '/state-licensing',
    },
    {
      icon: <BadgeCheck className="w-12 h-12" />,
      name: 'CGFNS & Credentials',
      color: 'text-blue-500',
      description:
        'Guide to CGFNS certification and credential evaluation for international nurses.',
      features: [
        'Certification Guide',
        'Document Requirements',
        'Evaluation Process',
        'Timeline',
      ],
      path: '/cgfns-credentials',
    },
    {
      icon: <Globe className="w-12 h-12" />,
      name: 'Immigration & Visa',
      color: 'text-green-500',
      description:
        'Immigration information and visa application guidance for international nurses.',
      features: [
        'Visa Types',
        'Application Process',
        'Required Documents',
        'Legal Resources',
      ],
      path: '/immigration-visa',
    },
    {
      icon: <Trophy className="w-12 h-12" />,
      name: 'Success Stories',
      color: 'text-blue-500',
      description:
        'Real stories from nurses who successfully transitioned to practicing in the US.',
      features: [
        'Personal Stories',
        'Career Journeys',
        'Tips & Advice',
        'Inspiration',
      ],
      path: '/success-stories',
    },
    {
      icon: <ClipboardCheck className="w-12 h-12" />,
      name: 'NCLEX & Exam Prep',
      color: 'text-red-500',
      description:
        'Complete NCLEX-RN preparation resources and study materials.',
      features: [
        'Question Bank',
        'Study Plans',
        'Content Review',
        'Practice Tests',
      ],
      path: '/nclex-prep',
    },
    {
      icon: <HandshakeIcon className="w-12 h-12" />,
      name: 'Visa Sponsorship',
      color: 'text-purple-500',
      description:
        'Connect with healthcare facilities offering visa sponsorship opportunities.',
      features: [
        'Sponsor Directory',
        'Application Tips',
        'Interview Prep',
        'Contract Guide',
      ],
      path: '/visa-sponsorship',
    },
    {
      icon: <ThumbsUp className="w-12 h-12" />,
      name: 'Recommendations',
      color: 'text-blue-500',
      description:
        'Personalized recommendations for your nursing career journey.',
      features: [
        'Career Path',
        'Study Resources',
        'Job Opportunities',
        'Networking',
      ],
      path: '/recommendations',
    },
    {
      icon: <Search className="w-12 h-12" />,
      name: 'Search Employers',
      color: 'text-red-500',
      description:
        'Search and filter healthcare employers by location, specialty, and benefits.',
      features: [
        'Advanced Search',
        'Employer Profiles',
        'Salary Data',
        'Benefits Compare',
      ],
      path: '/search-employers',
    },
    {
      icon: <Share2 className="w-12 h-12" />,
      name: 'Share Employers',
      color: 'text-red-500',
      description:
        'Share and discover employer reviews and experiences with other nurses.',
      features: [
        'Employer Reviews',
        'Salary Reports',
        'Work Culture',
        'Benefits Info',
      ],
      path: '/share-employers',
    },
    {
      icon: <Stethoscope className="w-12 h-12" />,
      name: 'RN without BSN',
      color: 'text-green-500',
      description:
        'Alternative pathways to becoming an RN without a traditional BSN degree.',
      features: [
        'Career Paths',
        'Program Options',
        'Success Stories',
        'State Requirements',
      ],
      path: '/rn-without-bsn',
    },
  ];

  return (
    <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-16">
      <h2 className="text-4xl font-bold text-center text-gray-900 mb-12">
        Inspire, Learn, Heal
      </h2>
      <div className="grid grid-cols-2 md:grid-cols-4 gap-8">
        {categories.map((category, index) => (
          <div
            key={index}
            className="flex flex-col items-center text-center group cursor-pointer"
            onClick={() => setSelectedCategory(category)}
          >
            <div
              className={`p-4 rounded-lg transition-all duration-300 transform hover:scale-110 hover:shadow-xl
                ${category.color} bg-white
                hover:rotate-2 hover:-translate-y-1
                border border-gray-200
                style-3d`}
              style={{
                transform: 'perspective(1000px) rotateX(10deg)',
                boxShadow:
                  '0 4px 6px -1px rgba(0, 0, 0, 0.1), 0 2px 4px -1px rgba(0, 0, 0, 0.06)',
              }}
            >
              {category.icon}
            </div>
            <p className="mt-3 text-sm font-medium text-gray-900">
              {category.name}
            </p>
          </div>
        ))}
      </div>

      {/* Modal for category information */}
      {selectedCategory && (
        <div className="fixed inset-0 bg-black bg-opacity-50 flex items-center justify-center p-4 z-50">
          <div className="bg-white rounded-lg max-w-lg w-full p-6 relative">
            <button
              onClick={() => setSelectedCategory(null)}
              className="absolute top-4 right-4 text-gray-400 hover:text-gray-600"
            >
              <X className="w-6 h-6" />
            </button>

            <div
              className={`${selectedCategory.color} w-16 h-16 mx-auto mb-4 p-4 rounded-lg`}
            >
              {selectedCategory.icon}
            </div>

            <h3 className="text-2xl font-bold text-center mb-4">
              {selectedCategory.name}
            </h3>

            <p className="text-gray-600 mb-6 text-center">
              {selectedCategory.description}
            </p>

            <div className="grid grid-cols-2 gap-4">
              {selectedCategory.features.map((feature, index) => (
                <div
                  key={index}
                  className="bg-gray-50 p-3 rounded-lg text-center text-sm font-medium text-gray-800"
                >
                  {feature}
                </div>
              ))}
            </div>

            <button
              className="mt-6 w-full px-4 py-2 bg-gradient-to-r from-blue-600 to-indigo-600 text-white rounded-lg hover:from-blue-700 hover:to-indigo-700 transition-all duration-200"
              onClick={() => {
                setSelectedCategory(null);
                navigate(selectedCategory.path);
              }}
            >
              Learn More
            </button>
          </div>
        </div>
      )}
    </div>
  );
}

export default function HomePage() {
  const navigate = useNavigate();
  const { user } = useAuth();

  return (
    <div className="flex flex-col min-h-screen">
      <NavigationBar />
      <main
        className="flex-grow"
        style={{
          background: 'linear-gradient(90deg, #d9a7c7 0%, #fffcdc 100%)',
        }}
      >
        {/* Hero Section */}
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 pt-20 pb-16">
          <div className="text-center">
            <h1 className="text-5xl font-extrabold text-gray-900 sm:text-6xl">
              Your Journey to Success Starts Here
            </h1>
            <p className="mt-6 text-xl text-gray-700 max-w-3xl mx-auto">
              Your Complete Toolkit for Nursing School and Career.
            </p>
            {!user && (
              <div className="mt-10">
                <button 
                  onClick={() => navigate('/auth')}
                  className="px-8 py-3 border border-transparent text-base font-medium rounded-md text-white bg-gradient-to-r from-blue-600 to-indigo-600 hover:from-blue-700 hover:to-indigo-700 md:py-4 md:text-lg md:px-10 shadow-lg hover:shadow-xl transition-all duration-200"
                >
                  Get Started - It's Free
                </button>
              </div>
            )}
          </div>
        </div>

        {/* Student To RN Categories */}
        <StudentToRNCategories />

        {/* CTA Section */}
        <div className="py-16">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <div className="bg-gradient-to-r from-blue-600 to-indigo-600 rounded-2xl shadow-xl overflow-hidden">
              <div className="px-6 py-12 sm:px-12 sm:py-16 lg:flex lg:items-center lg:justify-between">
                <div>
                  <h2 className="text-3xl font-extrabold text-white sm:text-4xl">
                    Ready to start your Nursing Journey?
                    <span className="block text-xl mt-2 font-medium">
                      Join thousands of successful nursing student and nurses.
                    </span>
                  </h2>
                </div>
                {!user && (
                  <div className="mt-8 lg:mt-0 lg:ml-8">
                    <button 
                      onClick={() => navigate('/auth')}
                      className="w-full px-6 py-3 border border-transparent text-base font-medium rounded-md text-blue-600 bg-white hover:bg-gray-50 md:py-4 md:text-lg md:px-8 shadow-sm transition-all duration-200"
                    >
                      Join Community Now!
                    </button>
                  </div>
                )}
              </div>
            </div>
          </div>
        </div>
      </main>
      <Footer />
    </div>
  );
}