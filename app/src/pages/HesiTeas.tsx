import React, { useState } from 'react';
import { Link, useNavigate } from 'react-router-dom';
import { 
  ArrowLeft, BookOpen, CheckCircle2, Brain, Clock, 
  BookOpenCheck, FileCheck, Target, AlertCircle, ExternalLink,
  LogIn
} from 'lucide-react';
import { PageLayout } from '../components/PageLayout';
import { useAuth } from '../contexts/AuthContext';

type ExamType = 'HESI' | 'TEAS';

export default function HesiTeas() {
  const [activeTab, setActiveTab] = useState<ExamType>('HESI');
  const { user } = useAuth();
  const navigate = useNavigate();

  const handleGetStarted = () => {
    if (!user) {
      navigate('/auth');
    } else {
      // Navigate to the appropriate learning page based on the active tab
      if (activeTab === 'HESI') {
        navigate('/hesi-learning');
      } else {
        navigate('/teas-learning');
      }
    }
  };

  const faqs = {
    hesi: [
      {
        question: 'What is the HESI A2 Exam?',
        answer:
          'The HESI A2 (Health Education Systems, Inc. Admission Assessment) is an entrance exam for nursing programs. It assesses key academic skills in Math, Reading, Grammar, Vocabulary, and Science.',
      },
      {
        question: 'What is the passing score for the HESI A2?',
        answer:
          'Each nursing school sets its own passing score, but generally, a 75%–80% is required to pass. Competitive programs may require 85% or higher.',
      },
      {
        question: 'Can I use a calculator on the HESI A2?',
        answer:
          'Yes, but only the built-in calculator provided in the testing software. Personal calculators are not allowed.',
      },
      {
        question: 'How much time is given for the exam?',
        answer:
          'The maximum time limit is typically 4–5 hours, depending on the school\'s requirements.',
      },
      {
        question: 'Can I retake the HESI A2 if I fail?',
        answer:
          'Yes! Most schools allow 2-3 attempts per year, but there may be a required waiting period (usually 30-60 days) between retakes.',
      },
      {
        question: 'How can I prepare for the HESI A2?',
        answer:
          'Use study guides, take practice tests, focus on weak subjects, and familiarize yourself with medical vocabulary and math conversions.',
      },
    ],
    teas: [],
  };

  const resources = {
    hesiOfficial: [
      {
        name: 'HESI Practice Tests - Evolve',
        url: 'https://evolve.elsevier.com/studentlife/hesi.html',
        description: 'Official practice tests and study materials',
      },
    ],
    teasOfficial: [
      {
        name: 'ATI TEAS Official Website',
        url: 'https://www.atitesting.com/teas',
        description: 'Official TEAS exam information and registration',
      },
      {
        name: 'ATI TEAS SmartPrep',
        url: 'https://www.atitesting.com/teas/smart-prep',
        description: 'Official study package with practice assessments',
      },
      {
        name: 'ATI TEAS Study Manual',
        url: 'https://www.atitesting.com/teas/study-manual',
        description: 'Official study manual with practice questions',
      },
    ],
  };

  const examContent = {
    hesi: {
      sections: [
        {
          name: 'Mathematics 🧮',
          topics: [
            'Basic Addition, Subtraction, Multiplication, and Division',
            'Decimals and Fractions',
            'Ratios and Proportions',
            'Percentages',
            'Word Problems',
            'Roman Numerals',
            'Measurements and Conversions (Metric & U.S. Standard)',
            'Military Time',
            'Dosage Calculations',
          ],
          weight: '50 Questions',
        },
        {
          name: 'Reading Comprehension 📖',
          topics: [
            'Main Idea Identification',
            'Supporting Details',
            'Inferences and Conclusions',
            'Context Clues for Vocabulary',
            'Finding the Author\'s Purpose and Tone',
            'Understanding Logical Organization',
          ],
          weight: '47 Questions',
        },
        {
          name: 'Grammar ✍️',
          topics: [
            'Parts of Speech (Nouns, Verbs, Adjectives, Adverbs, Pronouns)',
            'Subject-Verb Agreement',
            'Sentence Structure (Run-on Sentences, Fragments)',
            'Punctuation (Commas, Apostrophes, Quotation Marks, Colons, Semicolons)',
            'Capitalization Rules',
            'Commonly Confused Words (e.g., Their/There/They\'re)',
            'Spelling Rules',
          ],
          weight: '50 Questions',
        },
        {
          name: 'Vocabulary  📚',
          topics: [
            'Medical Terminology (e.g., Prefixes, Suffixes, Root Words)',
            'Common Nursing Vocabulary',
            'Everyday English Vocabulary',
            'Synonyms & Antonyms',
          ],
          weight: '50 Questions',
        },
        {
          name: 'Biology 🧬',
          topics: [
            'Cell Structure and Function',
            'DNA, RNA, and Genetics',
            'Metabolism and Cellular Respiration',
            'Biological Macromolecules (Proteins, Carbs, Lipids, Nucleic Acids)',
            'Homeostasis and Basic Body Functions',
            'Ecosystem and Environmental Biology',
          ],
          weight: '25 Questions',
        },
        {
          name: 'Chemistry ⚗️',
          topics: [
            'Atomic Structure',
            'Periodic Table and Chemical Bonds',
            'Acids and Bases (pH Scale)',
            'Chemical Reactions and Equations',
            'Solutions and Solubility',
            'Molarity and Concentration',
            'Gas Laws',
          ],
          weight: '25 Questions',
        },
        {
          name: 'Anatomy & Physiology 🏥',
          topics: [
            'Body Systems (Cardiovascular, Respiratory, Nervous, Digestive, etc.)',
            'Organ Functions',
            'Homeostasis & Feedback Mechanisms',
            'Basic Medical Terminology Related to A&P',
            'Common Diseases and Disorders',
          ],
          weight: '25 Questions',
        },
      ],
      timing: '4 to 5 Hours. Some schools may give 6 hours',
      questions: '326 questions total',
      scoring: 'Scored on a scale of 0-100%',
    },
    teas: {
      sections: [
        {
          name: 'Reading',
          topics: [
            'Key Ideas and Details',
            'Craft and Structure',
            'Integration of Knowledge',
            'Pre-Test Activity',
          ],
          weight: '31%',
        },
        {
          name: 'Math',
          topics: [
            'Numbers and Algebra',
            'Measurement and Data',
            'Pre-Test Activity',
          ],
          weight: '22%',
        },
        {
          name: 'Science',
          topics: [
            'Human Anatomy & Physiology',
            'Life & Physical Sciences',
            'Scientific Reasoning',
            'Pre-Test Activity',
          ],
          weight: '31%',
        },
        {
          name: 'English and Language Usage',
          topics: [
            'Conventions of Standard English',
            'Knowledge of Language',
            'Vocabulary Acquisition',
            'Pre-Test Activity',
          ],
          weight: '16%',
        },
      ],
      timing: '209 minutes total',
      questions: ' 170 questions (150 scored + 20 unscored)',
      scoring: 'Adjusted individual score',
    },
  };

  return (
    <PageLayout>
      <div className="min-h-screen bg-gradient-to-br from-purple-50 to-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
          <Link
            to="/"
            className="inline-flex items-center text-purple-600 hover:text-purple-700 mb-8 transition-colors duration-200"
          >
            <ArrowLeft className="w-5 h-5 mr-2" />
            Back to Home
          </Link>

          <div className="text-center mb-16">
            <h1 className="text-4xl font-extrabold text-gray-900 sm:text-5xl mb-4">
              HESI & TEAS Exam Preparation
            </h1>
            <p className="text-xl text-gray-600 max-w-3xl mx-auto">
              Master your nursing entrance exams with our comprehensive
              Information.
            </p>
          </div>

          {/* Important Notice */}
          <div className="bg-yellow-50 border-l-4 border-yellow-500 p-4 mb-8 rounded-lg">
            <div className="flex items-start">
              <AlertCircle className="w-5 h-5 text-yellow-500 mr-2 mt-0.5" />
              <div>
                <p className="font-medium text-yellow-800">Important Notice</p>
                <p className="text-sm text-yellow-700 mt-1">
                  Exam content and requirements may vary by institution. Always
                  verify current exam information with your school and testing
                  provider.
                </p>
              </div>
            </div>
          </div>

          {/* Exam Selection Tabs */}
          <div className="flex space-x-4 mb-8">
            <button
              onClick={() => setActiveTab('HESI')}
              className={`flex-1 py-4 px-6 rounded-lg font-semibold transition-colors duration-200 ${
                activeTab === 'HESI'
                  ? 'bg-purple-600 text-white'
                  : 'bg-white text-gray-600 hover:bg-purple-50'
              }`}
            >
              HESI A2 Exam
            </button>
            <button
              onClick={() => setActiveTab('TEAS')}
              className={`flex-1 py-4 px-6 rounded-lg font-semibold transition-colors duration-200 ${
                activeTab === 'TEAS'
                  ? 'bg-purple-600 text-white'
                  : 'bg-white text-gray-600 hover:bg-purple-50'
              }`}
            >
              TEAS Exam
            </button>
          </div>

          {/* Exam Content */}
          <div className="bg-white rounded-xl shadow-lg p-8 mb-8">
            <h2 className="text-2xl font-bold text-gray-900 mb-6 flex items-center">
              <BookOpenCheck className="w-6 h-6 mr-2 text-purple-600" />
              {activeTab === 'HESI' ? 'HESI A2' : 'TEAS'} Exam Overview
            </h2>

            <div className="grid grid-cols-1 md:grid-cols-3 gap-4 mb-8">
              <div className="bg-purple-50 p-4 rounded-lg">
                <div className="flex items-center">
                  <Clock className="w-5 h-5 text-purple-600 mr-2" />
                  <span className="text-purple-900">
                    {activeTab === 'HESI'
                      ? examContent.hesi.timing
                      : examContent.teas.timing}
                  </span>
                </div>
              </div>
              <div className="bg-purple-50 p-4 rounded-lg">
                <div className="flex items-center">
                  <FileCheck className="w-5 h-5 text-purple-600 mr-2" />
                  <span className="text-purple-900">
                    {activeTab === 'HESI'
                      ? examContent.hesi.questions
                      : examContent.teas.questions}
                  </span>
                </div>
              </div>
              <div className="bg-purple-50 p-4 rounded-lg">
                <div className="flex items-center">
                  <Brain className="w-5 h-5 text-purple-600 mr-2" />
                  <span className="text-purple-900">
                    {activeTab === 'HESI'
                      ? examContent.hesi.scoring
                      : examContent.teas.scoring}
                  </span>
                </div>
              </div>
            </div>

            <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
              {(activeTab === 'HESI'
                ? examContent.hesi.sections
                : examContent.teas.sections
              ).map((section, index) => (
                <div key={index} className="bg-gray-50 p-6 rounded-lg">
                  <h3 className="text-lg font-semibold text-gray-900 mb-3">
                    {section.name}{' '}
                    <span className="text-purple-600">({section.weight})</span>
                  </h3>
                  <ul className="space-y-2">
                    {section.topics.map((topic, topicIndex) => (
                      <li
                        key={topicIndex}
                        className="flex items-center text-gray-700"
                      >
                        <CheckCircle2 className="w-4 h-4 text-purple-600 mr-2" />
                        {topic}
                      </li>
                    ))}
                  </ul>
                </div>
              ))}
            </div>
          </div>

          {/* Official Resources */}
          <div className="bg-white rounded-xl shadow-lg p-8 mb-8">
            <h2 className="text-2xl font-bold text-gray-900 mb-6">
              Official Resources
            </h2>
            <div className="grid grid-cols-1 gap-4">
              {(activeTab === 'HESI'
                ? resources.hesiOfficial
                : resources.teasOfficial
              ).map((resource, index) => (
                <a
                  key={index}
                  href={resource.url}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="block bg-gray-50 p-4 rounded-lg hover:bg-purple-50 transition-colors duration-200"
                >
                  <div className="flex items-start">
                    <ExternalLink className="w-5 h-5 text-purple-600 mr-3 mt-1" />
                    <div>
                      <h3 className="font-medium text-gray-900">
                        {resource.name}
                      </h3>
                      <p className="text-sm text-gray-600 mt-1">
                        {resource.description}
                      </p>
                    </div>
                  </div>
                </a>
              ))}
            </div>
          </div>

          {/* FAQs Section*/}
          <div className="bg-white rounded-xl shadow-lg p-8 mb-8">
            <h2 className="text-2xl font-bold text-gray-900 mb-6">
              Frequently Asked Questions
            </h2>
            <div className="grid grid-cols-1 gap-4">
              {(activeTab === 'HESI' ? faqs.hesi : faqs.teas).map((faqs) => (
                <div className="flex items-start">
                  <ExternalLink className="w-5 h-5 text-purple-600 mr-3 mt-1" />
                  <div>
                    <h3 className="font-medium text-gray-900">
                      {faqs.question}
                    </h3>
                    <p className="text-sm text-gray-600 mt-1">{faqs.answer}</p>
                  </div>
                </div>
              ))}
            </div>
          </div>

          {/* CTA Section */}
          <div className="bg-gradient-to-r from-purple-600 to-pink-600 rounded-2xl shadow-xl overflow-hidden">
            <div className="px-8 py-12 text-center text-white">
              <h2 className="text-3xl font-bold mb-4">Ready to Learn?</h2>
              <p className="text-lg mb-8">
                Begin your {activeTab === 'HESI' ? 'HESI A2' : 'TEAS'} preparation journey with our comprehensive study program.
              </p>
              <button 
                onClick={handleGetStarted}
                className="bg-white text-purple-600 px-8 py-3 rounded-lg font-semibold hover:bg-purple-50 transition-all duration-200 flex items-center justify-center mx-auto"
              >
                {!user ? (
                  <>
                    <LogIn className="w-5 h-5 mr-2" />
                    Sign In to Start
                  </>
                ) : (
                  <>
                    <BookOpen className="w-5 h-5 mr-2" />
                    Start Learning
                  </>
                )}
              </button>
            </div>
          </div>
        </div>
      </div>
    </PageLayout>
  );
}