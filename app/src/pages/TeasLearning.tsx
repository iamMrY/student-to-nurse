import React from 'react';
import { Link, useNavigate } from 'react-router-dom';
import { ArrowLeft, BookOpen, Brain, CheckCircle2 } from 'lucide-react';
import { PageLayout } from '../components/PageLayout';

export default function TeasLearning() {
  const navigate = useNavigate();
  const sections = [
    {
      name: 'Reading',
      path: '/teas/reading',
      topics: [
        'Key Ideas and Details',
        'Craft and Structure',
        'Integration of Knowledge',
        'Pre-Test Activity'
      ],
      progress: 0,
      weight: '31%'
    },
    {
      name: 'Math',
      path: '/teas/math',
      topics: [
        'Numbers and Algebra',
        'Measurement and Data',
        'Pre-Test Activity'
      ],
      progress: 0,
      weight: '22%'
    },
    {
      name: 'Science',
      path: '/teas/science',
      topics: [
        'Human Anatomy & Physiology',
        'Life & Physical Sciences',
        'Scientific Reasoning',
        'Pre-Test Activity'
      ],
      progress: 0,
      weight: '31%'
    },
    {
      name: 'English and Language Usage',
      path: '/teas/english',
      topics: [
        'Conventions of Standard English',
        'Knowledge of Language',
        'Vocabulary Acquisition',
        'Pre-Test Activity'
      ],
      progress: 0,
      weight: '16%'
    }
  ];

  return (
    <PageLayout>
      <div className="min-h-screen bg-gradient-to-br from-purple-50 to-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
          <Link
            to="/hesi-teas"
            className="inline-flex items-center text-purple-600 hover:text-purple-700 mb-8 transition-colors duration-200"
          >
            <ArrowLeft className="w-5 h-5 mr-2" />
            Back to TEAS Overview
          </Link>

          <div className="text-center mb-16">
            <h1 className="text-4xl font-extrabold text-gray-900 sm:text-5xl mb-4">
              TEAS Learning Center
            </h1>
            <p className="text-xl text-gray-600 max-w-3xl mx-auto">
              Master each section of the TEAS exam with our comprehensive study materials.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
            {sections.map((section, index) => (
              <div key={index} className="bg-white rounded-xl shadow-lg overflow-hidden">
                <div className="p-6">
                  <div className="flex justify-between items-start mb-4">
                    <h2 className="text-2xl font-bold text-gray-900">{section.name}</h2>
                    <span className="px-3 py-1 bg-purple-100 text-purple-700 rounded-full text-sm">
                      {section.weight}
                    </span>
                  </div>
                  
                  <div className="mb-4">
                    <div className="flex justify-between text-sm text-gray-600 mb-1">
                      <span>Progress</span>
                      <span>{section.progress}%</span>
                    </div>
                    <div className="h-2 bg-gray-200 rounded-full">
                      <div 
                        className="h-full bg-purple-600 rounded-full"
                        style={{ width: `${section.progress}%` }}
                      ></div>
                    </div>
                  </div>

                  <div className="space-y-2">
                    {section.topics.map((topic, topicIndex) => (
                      <div 
                        key={topicIndex}
                        className="flex items-center p-2 rounded-lg hover:bg-purple-50 transition-colors duration-200"
                      >
                        <CheckCircle2 className="w-5 h-5 text-gray-300 mr-2" />
                        <span className="text-gray-700">{topic}</span>
                      </div>
                    ))}
                  </div>
                </div>

                <div className="px-6 py-4 bg-gray-50">
                  <button 
                    onClick={() => navigate(section.path)}
                    className="w-full px-4 py-2 bg-purple-600 text-white rounded-lg hover:bg-purple-700 transition-colors duration-200 flex items-center justify-center"
                  >
                    <BookOpen className="w-5 h-5 mr-2" />
                    Start Learning
                  </button>
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </PageLayout>
  );
}