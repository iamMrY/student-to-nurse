import React from 'react';
import { Link, useNavigate } from 'react-router-dom';
import { ArrowLeft, Calculator, BookOpen, Brain, CheckCircle2 } from 'lucide-react';
import { PageLayout } from '../../../components/PageLayout';

export default function BasicOperations() {
  const navigate = useNavigate();
  const subtopics = [

    {
      title: 'Basic of Mathematics',
      path: '/hesi/mathematics/learning/basicoperations/basic-of-maths',
      content: [
        'Basic refreshing knowledge about Mathematics'
      ]
    },
    {
      title: 'Addition and Subtraction',
      path: '/hesi/mathematics/learning/basicoperations/addition-subtraction',
      content: [
        'Adding and subtracting whole numbers',
        'Adding and subtracting decimals',
        'Adding and subtracting fractions',
        'Working with negative numbers',
        'Mental math strategies',
        'Estimating sums and differences'
      ]
    },
    {
      title: 'Multiplication and Division',
      path: '/hesi/mathematics/learning/basicoperations/multiplication-division',
      content: [
        'Multiplying and dividing whole numbers',
        'Multiplying and dividing decimals',
        'Multiplying and dividing fractions',
        'Dividing with remainders',
        'Working with negative numbers',
        'Long division and shortcuts'
      ]
    },
    {
      title: 'Order of Operations',
      path: '/hesi/mathematics/learning/basicoperations/order-operations',
      content: [
        'PEMDAS rule',
        'Grouping symbols',
        'Multiple operations with decimals and fractions',
        'Evaluating complex expressions',
        'Working with negative numbers in expressions'
      ]
    },
    {
      title: 'Properties of Numbers',
      path: '/hesi/mathematics/learning/basicoperations/number-properties',
      content: [
        'Commutative property',
        'Associative property',
        'Distributive property',
        'Identity and inverse properties',
        'Applying properties to simplify expressions'
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
              Basic Operations
            </h1>
            <p className="text-xl text-gray-600 max-w-3xl mx-auto">
              The foundation of Maths which includes Addition, Substraction, Multiplication, and Division of: 
              Whole Numbers, Decimals, Fractions, Negative Numbers.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
            {subtopics.map((topic, index) => (
              <div key={index} className="bg-white rounded-xl shadow-lg overflow-hidden">
                <div className="p-6">
                  <h2 className="text-2xl font-bold text-gray-900 mb-4">{topic.title}</h2>
                  
                  <div className="space-y-2">
                    {topic.content.map((item, itemIndex) => (
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
                  <button 
                    onClick={() => navigate(topic.path)}
                    className="w-full px-4 py-2 bg-blue-600 text-white rounded-lg hover:bg-blue-700 transition-colors duration-200 flex items-center justify-center"
                  >
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