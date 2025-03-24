import React from 'react';
import { Link } from 'react-router-dom';
import { ArrowLeft, Calculator, BookOpen, Brain, CheckCircle2 } from 'lucide-react';
import { PageLayout } from '../../../components/PageLayout';

export default function DosageCalculations() {
  const subtopics = [
    {
      title: 'Basic Drug Calculations',
      content: [
        'Tablet dosage calculations',
        'Liquid medication dosages',
        'Concentration calculations',
        'Conversion factors'
      ]
    },
    {
      title: 'IV Flow Rates',
      content: [
        'Drops per minute',
        'mL per hour',
        'IV pump settings',
        'Time duration calculations'
      ]
    },
    {
      title: 'Medication Administration',
      content: [
        'Oral medications',
        'Injectable medications',
        'Topical medications',
        'Multiple dose calculations'
      ]
    },
    {
      title: 'Weight-Based Dosing',
      content: [
        'Pediatric dosing',
        'Adult dosing',
        'Body surface area calculations',
        'Weight conversions'
      ]
    },
    {
      title: 'Unit Conversions',
      content: [
        'Metric to household',
        'Weight-based conversions',
        'Volume conversions',
        'Concentration conversions'
      ]
    }
  ];

  return (
    <PageLayout>
      <div className="min-h-screen bg-gradient-to-br from-blue-50 to-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
          <Link
            to="/hesi/mathematics"
            className="inline-flex items-center text-blue-600 hover:text-blue-700 mb-8 transition-colors duration-200"
          >
            <ArrowLeft className="w-5 h-5 mr-2" />
            Back to Mathematics
          </Link>

          <div className="text-center mb-16">
            <h1 className="text-4xl font-extrabold text-gray-900 sm:text-5xl mb-4">
              Dosage Calculations
            </h1>
            <p className="text-xl text-gray-600 max-w-3xl mx-auto">
              Master medication dosage calculations for the HESI A2 exam.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
            {subtopics.map((subtopic, index) => (
              <div key={index} className="bg-white rounded-xl shadow-lg overflow-hidden">
                <div className="p-6">
                  <h2 className="text-2xl font-bold text-gray-900 mb-4">{subtopic.title}</h2>
                  
                  <div className="space-y-2">
                    {subtopic.content.map((item, itemIndex) => (
                      <div 
                        key={itemIndex}
                        className="flex items-center p-2 rounded-lg hover:bg-blue-50 transition-colors duration-200"
                      >
                        <CheckCircle2 className="w-5 h-5 text-gray-300 mr-2" />
                        <span className="text-gray-700">{item}</span>
                      </div>
                    ))}
                  </div>
                </div>

                <div className="px-6 py-4 bg-gray-50">
                  <button className="w-full px-4 py-2 bg-blue-600 text-white rounded-lg hover:bg-blue-700 transition-colors duration-200 flex items-center justify-center">
                    <BookOpen className="w-5 h-5 mr-2" />
                    Start Learning
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