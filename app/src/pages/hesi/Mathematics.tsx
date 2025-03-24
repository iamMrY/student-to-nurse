import React from 'react';
import { Link, useNavigate } from 'react-router-dom';
import { ArrowLeft, Calculator, BookOpen, Brain, CheckCircle2 } from 'lucide-react';
import { PageLayout } from '../../components/PageLayout';

export default function Mathematics() {
  const navigate = useNavigate();
  const topics = [
    {
      title: 'Basic Operations',
      path: '/hesi/mathematics/basic-operations',
      subtopics: [
        'Addition and Subtraction',
        'Multiplication and Division',
        'Order of Operations',
        'Properties of Numbers'
      ]
    },
    {
      title: 'Fractions and Decimals',
      path: '/hesi/mathematics/fractions-decimals',
      subtopics: [
        'Converting Between Fractions and Decimals',
        'Adding and Subtracting Fractions',
        'Multiplying and Dividing Fractions',
        'Decimal Operations'
      ]
    },
    {
      title: 'Ratios and Proportions',
      path: '/hesi/mathematics/ratios-proportions',
      subtopics: [
        'Setting Up Ratios',
        'Solving Proportions',
        'Unit Conversions',
        'Scale Factors'
      ]
    },
    {
      title: 'Percentages',
      path: '/hesi/mathematics/percentages',
      subtopics: [
        'Converting to Percentages',
        'Finding Percentages',
        'Percentage Increase/Decrease',
        'Applications'
      ]
    },
    {
      title: 'Measurements and Conversions',
      path: '/hesi/mathematics/measurements',
      subtopics: [
        'Metric System (mm, cm, m, km)',
        'U.S. Standard System (in, ft, yd, mi)',
        'Weight and Mass Conversions',
        'Volume and Capacity Conversions',
        'Temperature Conversions (°F to °C)'
      ]
    },
    {
      title: 'Time and Roman Numerals',
      path: '/hesi/mathematics/time-numerals',
      subtopics: [
        'Military Time Conversion',
        'Time Zone Calculations',
        'Roman Numeral System (I to M)',
        'Converting Between Number Systems'
      ]
    },
    {
      title: 'Dosage Calculations',
      path: '/hesi/mathematics/dosage',
      subtopics: [
        'Basic Drug Calculations',
        'IV Flow Rates',
        'Medication Administration',
        'Weight-Based Dosing',
        'Unit Conversions for Medications'
      ]
    },
    {
      title: 'Word Problems',
      path: '/hesi/mathematics/word-problems',
      subtopics: [
        'Reading and Understanding',
        'Identifying Key Information',
        'Setting Up Equations',
        'Checking Solutions'
      ]
    }
  ];

  return (
    <PageLayout>
      <div className="min-h-screen bg-gradient-to-br from-blue-50 to-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
          <Link
            to="/hesi-learning"
            className="inline-flex items-center text-blue-600 hover:text-blue-700 mb-8 transition-colors duration-200"
          >
            <ArrowLeft className="w-5 h-5 mr-2" />
            Back to Learning Center
          </Link>

          <div className="text-center mb-16">
            <h1 className="text-4xl font-extrabold text-gray-900 sm:text-5xl mb-4">
              Mathematics
            </h1>
            <p className="text-xl text-gray-600 max-w-3xl mx-auto">
              Master the mathematical concepts and skills needed for the HESI A2 exam.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
            {topics.map((topic, index) => (
              <div key={index} className="bg-white rounded-xl shadow-lg overflow-hidden">
                <div className="p-6">
                  <h2 className="text-2xl font-bold text-gray-900 mb-4">{topic.title}</h2>
                  
                  <div className="space-y-2">
                    {topic.subtopics.map((subtopic, subtopicIndex) => (
                      <div 
                        key={subtopicIndex}
                        className="flex items-center p-2 rounded-lg hover:bg-blue-50 transition-colors duration-200"
                      >
                        <CheckCircle2 className="w-5 h-5 text-gray-300 mr-2" />
                        <span className="text-gray-700">{subtopic}</span>
                      </div>
                    ))}
                  </div>
                </div>

                <div className="px-6 py-4 bg-gray-50">
                  <button 
                    onClick={() => navigate(topic.path)}
                    className="w-full px-4 py-2 bg-blue-600 text-white rounded-lg hover:bg-blue-700 transition-colors duration-200 flex items-center justify-center"
                  >
                    <BookOpen className="w-5 h-5 mr-2" />
                    Start Topic
                  </button>
                </div>
              </div>
            ))}
          </div>

          {/* Practice Section */}
          <div className="mt-12 bg-white rounded-xl shadow-lg p-8">
            <h2 className="text-2xl font-bold text-gray-900 mb-6">Practice Problems</h2>
            <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
              <button className="p-4 bg-blue-50 rounded-lg hover:bg-blue-100 transition-colors duration-200">
                <Calculator className="w-8 h-8 text-blue-600 mx-auto mb-2" />
                <span className="block text-blue-900 font-medium">Quick Practice</span>
              </button>
              <button className="p-4 bg-blue-50 rounded-lg hover:bg-blue-100 transition-colors duration-200">
                <Brain className="w-8 h-8 text-blue-600 mx-auto mb-2" />
                <span className="block text-blue-900 font-medium">Full Quiz</span>
              </button>
              <button className="p-4 bg-blue-50 rounded-lg hover:bg-blue-100 transition-colors duration-200">
                <BookOpen className="w-8 h-8 text-blue-600 mx-auto mb-2" />
                <span className="block text-blue-900 font-medium">Study Guide</span>
              </button>
            </div>
          </div>
        </div>
      </div>
    </PageLayout>
  );
}