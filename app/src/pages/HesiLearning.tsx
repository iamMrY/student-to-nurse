import React from 'react';
import { Link, useNavigate } from 'react-router-dom';
import { ArrowLeft, BookOpen, Brain, CheckCircle2 } from 'lucide-react';
import { PageLayout } from '../components/PageLayout';

export default function HesiLearning() {
  const navigate = useNavigate();
  const sections = [
    {
      name: 'Mathematics 🧮',
      path: '/hesi/mathematics',
      topics: [
        'Basic Addition, Subtraction, Multiplication, and Division',
        'Decimals and Fractions',
        'Ratios and Proportions',
        'Percentages',
        'Word Problems',
        'Roman Numerals',
        'Measurements and Conversions',
        'Military Time',
        'Dosage Calculations'
      ],
      progress: 0
    },
    {
      name: 'Reading Comprehension 📖',
      path: '/hesi/reading',
      topics: [
        'Main Idea Identification',
        'Supporting Details',
        'Inferences and Conclusions',
        'Context Clues for Vocabulary',
        'Finding the Author\'s Purpose and Tone',
        'Understanding Logical Organization'
      ],
      progress: 0
    },
    {
      name: 'Grammar ✍️',
      path: '/hesi/grammar',
      topics: [
        'Parts of Speech',
        'Subject-Verb Agreement',
        'Sentence Structure',
        'Punctuation',
        'Capitalization Rules',
        'Commonly Confused Words',
        'Spelling Rules'
      ],
      progress: 0
    },
    {
      name: 'Vocabulary 📚',
      path: '/hesi/vocabulary',
      topics: [
        'Medical Terminology',
        'Common Nursing Vocabulary',
        'Everyday English Vocabulary',
        'Synonyms & Antonyms'
      ],
      progress: 0
    },
    {
      name: 'Biology 🧬',
      path: '/hesi/biology',
      topics: [
        'Cell Structure and Function',
        'DNA, RNA, and Genetics',
        'Metabolism and Cellular Respiration',
        'Biological Macromolecules',
        'Homeostasis and Basic Body Functions',
        'Ecosystem and Environmental Biology'
      ],
      progress: 0
    },
    {
      name: 'Chemistry ⚗️',
      path: '/hesi/chemistry',
      topics: [
        'Atomic Structure',
        'Periodic Table and Chemical Bonds',
        'Acids and Bases',
        'Chemical Reactions and Equations',
        'Solutions and Solubility',
        'Molarity and Concentration',
        'Gas Laws'
      ],
      progress: 0
    },
    {
      name: 'Anatomy & Physiology 🏥',
      path: '/hesi/anatomy',
      topics: [
        'Body Systems',
        'Organ Functions',
        'Homeostasis & Feedback Mechanisms',
        'Basic Medical Terminology Related to A&P',
        'Common Diseases and Disorders'
      ],
      progress: 0
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
            Back to HESI Overview
          </Link>

          <div className="text-center mb-16">
            <h1 className="text-4xl font-extrabold text-gray-900 sm:text-5xl mb-4">
              HESI A2 Learning Center
            </h1>
            <p className="text-xl text-gray-600 max-w-3xl mx-auto">
              Master each section of the HESI A2 exam with our comprehensive study materials.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
            {sections.map((section, index) => (
              <div key={index} className="bg-white rounded-xl shadow-lg overflow-hidden">
                <div className="p-6">
                  <h2 className="text-2xl font-bold text-gray-900 mb-4">{section.name}</h2>
                  
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