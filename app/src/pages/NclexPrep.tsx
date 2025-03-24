import React from 'react';
import { Link } from 'react-router-dom';
import { 
  ArrowLeft, BookOpen, CheckCircle2, Brain, Clock, 
  BookOpenCheck, FileCheck, Target, AlertCircle, ExternalLink 
} from 'lucide-react';
import { PageLayout } from '../components/PageLayout';

export default function NclexPrep() {
  const features = [
    {
      title: "Question Bank",
      description: "Access thousands of NCLEX-style questions with detailed explanations",
      icon: <BookOpen className="w-8 h-8" />,
      stats: "10,000+ Questions"
    },
    {
      title: "Practice Tests",
      description: "Take full-length practice exams in a simulated testing environment",
      icon: <CheckCircle2 className="w-8 h-8" />,
      stats: "12 Full Exams"
    },
    {
      title: "Study Plans",
      description: "Personalized study schedules based on your test date",
      icon: <Brain className="w-8 h-8" />,
      stats: "Customizable"
    },
    {
      title: "Performance Tracking",
      description: "Monitor your progress and identify areas for improvement",
      icon: <Clock className="w-8 h-8" />,
      stats: "Real-time Analytics"
    }
  ];

  const resources = {
    official: [
      {
        name: "NCSBN Learning Extension",
        url: "https://www.ncsbn.org/learning-extension.htm",
        description: "Official NCLEX review course and practice exams from the exam creators"
      },
      {
        name: "Pearson Vue NCLEX",
        url: "https://www.ncsbn.org/nclex.htm",
        description: "Official exam registration and candidate bulletin"
      }
    ],
    reviewCourses: [
      {
        name: "UWorld Nursing",
        url: "https://nursing.uworld.com/nclex-rn/",
        description: "Comprehensive question bank and self-assessments"
      },
      {
        name: "Kaplan NCLEX-RN Prep",
        url: "https://www.kaptest.com/nclex",
        description: "Live and on-demand courses with proven strategies"
      },
      {
        name: "ATI NCLEX Prep",
        url: "https://www.atitesting.com/nclex-prep",
        description: "Virtual-ATI with personal coaches and content review"
      },
      {
        name: "Archer Review NCLEX Study Manual",
        url: "https://www.archerreview.com/products/nclex-review",
        description: "Complete NCLEX preparation guide with practice questions, test strategies, and detailed rationales."
      }
    ],
    freeResources: [
      {
        name: "RegisteredNurseRN",
        url: "https://www.registerednursern.com/",
        description: "Free video content and study materials"
      },
      {
        name: "NCLEX Practice Questions",
        url: "https://www.nursingworld.org/practice-questions",
        description: "Practice questions from the American Nurses Association"
      },
      {
        name: "Nurse.com NCLEX Resources",
        url: "https://www.nurse.com/nclex",
        description: "Free articles and study guides"
      }
    ],
    mobileApps: [
      {
        name: "NCLEX RN Mastery",
        url: "https://www.nclexmastery.com/",
        description: "Mobile app with questions and rationales"
      },
      {
        name: "Nursing.com",
        url: "https://nursing.com/",
        description: "Visual learning with mnemonics and videos"
      }
    ]
  };

  const examContent = {
    sections: [
      {
        name: "Safe and Effective Care Environment",
        topics: [
          "Management of Care",
          "Safety and Infection Control"
        ],
      },
      {
        name: "Health Promotion and Maintenance",
        topics: [
          "Growth and Development",
          "Prevention and Early Detection of Disease"
        ],
      },
      {
        name: "Psychosocial Integrity",
        topics: [
          "Coping and Adaptation",
          "Mental Health Disorders"
        ],
      },
      {
        name: "Physiological Integrity",
        topics: [
          "Basic Care and Comfort",
          "Pharmacological and Parenteral Therapies",
          "Reduction of Risk Potential",
          "Physiological Adaptation"
        ],
      }
    ],
    timing: "Up to 5 hours total",
    questions: "75-145 questions (adaptive format)",
    scoring: "Pass/Fail based on ability estimation"
  };

  return (
    <PageLayout>
      <div className="min-h-screen bg-gradient-to-br from-red-50 to-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
          <Link
            to="/"
            className="inline-flex items-center text-red-600 hover:text-red-700 mb-8 transition-colors duration-200"
          >
            <ArrowLeft className="w-5 h-5 mr-2" />
            Back to Home
          </Link>

          <div className="text-center mb-16">
            <h1 className="text-4xl font-extrabold text-gray-900 sm:text-5xl mb-4">
              NCLEX-RN Exam Preparation
            </h1>
            <p className="text-xl text-gray-600 max-w-3xl mx-auto">
              Comprehensive study materials and practice tests to help you pass the NCLEX-RN exam.
            </p>
          </div>

          {/* Important Notice */}
          <div className="bg-yellow-50 border-l-4 border-yellow-500 p-4 mb-8 rounded-lg">
            <div className="flex items-start">
              <AlertCircle className="w-5 h-5 text-yellow-500 mr-2 mt-0.5" />
              <div>
                <p className="font-medium text-yellow-800">Important Notice</p>
                <p className="text-sm text-yellow-700 mt-1">
                  The NCLEX exam information provided here is for reference only. Test content, policies, and formats may change.
                  Always verify the latest exam details directly with the National Council of State Boards of Nursing (NCSBN)
                  and your state nursing board before beginning your preparation.
                </p>
              </div>
            </div>
          </div>

          {/* Features Grid */}
          <div className="grid grid-cols-1 md:grid-cols-2 gap-8 mb-16">
            {features.map((feature, index) => (
              <div key={index} className="bg-white rounded-xl shadow-lg overflow-hidden hover:shadow-xl transition-all duration-300">
                <div className="p-6">
                  <div className="flex items-center mb-4">
                    <div className="p-3 bg-red-100 rounded-lg text-red-600">
                      {feature.icon}
                    </div>
                    <div className="ml-4">
                      <h3 className="text-xl font-bold text-gray-900">{feature.title}</h3>
                      <span className="text-red-600 font-medium">{feature.stats}</span>
                    </div>
                  </div>
                  <p className="text-gray-600">{feature.description}</p>
                </div>
              </div>
            ))}
          </div>

          {/* Exam Content */}
          <div className="bg-white rounded-xl shadow-lg p-8 mb-16">
            <h2 className="text-2xl font-bold text-gray-900 mb-6 flex items-center">
              <BookOpenCheck className="w-6 h-6 mr-2 text-red-600" />
              Exam Content Overview
            </h2>
            <div className="grid grid-cols-1 md:grid-cols-3 gap-4 mb-8">
              <div className="bg-red-50 p-4 rounded-lg">
                <div className="flex items-center">
                  <Clock className="w-5 h-5 text-red-600 mr-2" />
                  <span className="text-red-900">{examContent.timing}</span>
                </div>
              </div>
              <div className="bg-red-50 p-4 rounded-lg">
                <div className="flex items-center">
                  <FileCheck className="w-5 h-5 text-red-600 mr-2" />
                  <span className="text-red-900">{examContent.questions}</span>
                </div>
              </div>
              <div className="bg-red-50 p-4 rounded-lg">
                <div className="flex items-center">
                  <Target className="w-5 h-5 text-red-600 mr-2" />
                  <span className="text-red-900">{examContent.scoring}</span>
                </div>
              </div>
            </div>
            <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
              {examContent.sections.map((section, index) => (
                <div key={index} className="bg-gray-50 p-6 rounded-lg">
                  <h3 className="text-lg font-semibold text-gray-900 mb-3">{section.name}</h3>
                  <ul className="space-y-2">
                    {section.topics.map((topic, topicIndex) => (
                      <li key={topicIndex} className="flex items-center text-gray-700">
                        <CheckCircle2 className="w-4 h-4 text-red-600 mr-2" />
                        {topic}
                      </li>
                    ))}
                  </ul>
                </div>
              ))}
            </div>
          </div>

          {/* Resources */}
          <div className="space-y-8 mb-16">
            {/* Official Resources */}
            <div className="bg-white rounded-xl shadow-lg p-8">
              <h2 className="text-2xl font-bold text-gray-900 mb-6">Official Resources</h2>
              <div className="grid grid-cols-1 gap-4">
                {resources.official.map((resource, index) => (
                  <a
                    key={index}
                    href={resource.url}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="block bg-gray-50 p-4 rounded-lg hover:bg-red-50 transition-colors duration-200"
                  >
                    <div className="flex items-start">
                      <ExternalLink className="w-5 h-5 text-red-600 mr-3 mt-1" />
                      <div>
                        <h3 className="font-medium text-gray-900">{resource.name}</h3>
                        <p className="text-sm text-gray-600 mt-1">{resource.description}</p>
                      </div>
                    </div>
                  </a>
                ))}
              </div>
            </div>

            {/* Review Courses */}
            <div className="bg-white rounded-xl shadow-lg p-8">
              <h2 className="text-2xl font-bold text-gray-900 mb-6">Review Courses</h2>
              <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                {resources.reviewCourses.map((course, index) => (
                  <a
                    key={index}
                    href={course.url}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="block bg-gray-50 p-4 rounded-lg hover:bg-red-50 transition-colors duration-200"
                  >
                    <div className="flex items-start">
                      <ExternalLink className="w-5 h-5 text-red-600 mr-3 mt-1" />
                      <div>
                        <h3 className="font-medium text-gray-900">{course.name}</h3>
                        <p className="text-sm text-gray-600 mt-1">{course.description}</p>
                      </div>
                    </div>
                  </a>
                ))}
              </div>
            </div>

            {/* Free Resources */}
            <div className="bg-white rounded-xl shadow-lg p-8">
              <h2 className="text-2xl font-bold text-gray-900 mb-6">Free Resources</h2>
              <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
                {resources.freeResources.map((resource, index) => (
                  <a
                    key={index}
                    href={resource.url}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="block bg-gray-50 p-4 rounded-lg hover:bg-red-50 transition-colors duration-200"
                  >
                    <div className="flex items-start">
                      <ExternalLink className="w-5 h-5 text-red-600 mr-3 mt-1" />
                      <div>
                        <h3 className="font-medium text-gray-900">{resource.name}</h3>
                        <p className="text-sm text-gray-600 mt-1">{resource.description}</p>
                      </div>
                    </div>
                  </a>
                ))}
              </div>
            </div>

            {/* Mobile Apps */}
            <div className="bg-white rounded-xl shadow-lg p-8">
              <h2 className="text-2xl font-bold text-gray-900 mb-6">Mobile Study Apps</h2>
              <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                {resources.mobileApps.map((app, index) => (
                  <a
                    key={index}
                    href={app.url}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="block bg-gray-50 p-4 rounded-lg hover:bg-red-50 transition-colors duration-200"
                  >
                    <div className="flex items-start">
                      <ExternalLink className="w-5 h-5 text-red-600 mr-3 mt-1" />
                      <div>
                        <h3 className="font-medium text-gray-900">{app.name}</h3>
                        <p className="text-sm text-gray-600 mt-1">{app.description}</p>
                      </div>
                    </div>
                  </a>
                ))}
              </div>
            </div>
          </div>

          {/* CTA Section */}
          <div className="bg-gradient-to-r from-red-600 to-pink-600 rounded-2xl shadow-xl overflow-hidden">
            <div className="px-8 py-12 text-center text-white">
              <h2 className="text-3xl font-bold mb-4">Ready to Start?</h2>
              <p className="text-lg mb-8">
                Begin your NCLEX preparation journey with our comprehensive study program.
              </p>
              <button className="bg-white text-red-600 px-8 py-3 rounded-lg font-semibold hover:bg-red-50 transition-all duration-200">
                Start Free Trial
              </button>
            </div>
          </div>
        </div>
      </div>
    </PageLayout>
  );
}