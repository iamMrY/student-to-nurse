import React from 'react';
import { Link } from 'react-router-dom';
import { ArrowLeft, ThumbsUp, BookOpen, Target, Compass } from 'lucide-react';
import { PageLayout } from '../components/PageLayout';

export default function Recommendations() {
  const pathways = [
    {
      title: "Traditional BSN Route",
      description: "4-year Bachelor of Science in Nursing program",
      requirements: ["High school diploma", "Prerequisites", "SAT/ACT scores"],
      timeline: "4 years",
      icon: <BookOpen className="w-8 h-8" />
    },
    {
      title: "Accelerated BSN",
      description: "Fast-track program for those with a bachelor's in another field",
      requirements: ["Bachelor's degree", "Prerequisites", "GPA 3.0+"],
      timeline: "12-18 months",
      icon: <Target className="w-8 h-8" />
    },
    {
      title: "ADN to BSN",
      description: "Bridge program for ADN holders to earn BSN",
      requirements: ["ADN degree", "RN license", "Work experience"],
      timeline: "2 years",
      icon: <Compass className="w-8 h-8" />
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

          <div className="text-center mb-16">
            <h1 className="text-4xl font-extrabold text-gray-900 sm:text-5xl mb-4">
              Personalized Career Recommendations
            </h1>
            <p className="text-xl text-gray-600 max-w-3xl mx-auto">
              Discover the best path to achieve your nursing career goals based on your background and preferences.
            </p>
          </div>

          <div className="bg-white rounded-xl shadow-lg p-8 mb-16">
            <h2 className="text-2xl font-bold text-gray-900 mb-6">Career Path Assessment</h2>
            <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
              <div className="space-y-4">
                <div className="space-y-2">
                  <label className="block text-sm font-medium text-gray-700">
                    Current Education Level
                  </label>
                  <select className="w-full px-3 py-2 border border-gray-300 rounded-md focus:ring-2 focus:ring-blue-500 focus:border-transparent">
                    <option>High School Diploma</option>
                    <option>Associate's Degree</option>
                    <option>Bachelor's Degree (Non-Nursing)</option>
                    <option>RN License</option>
                  </select>
                </div>
                <div className="space-y-2">
                  <label className="block text-sm font-medium text-gray-700">
                    Years of Healthcare Experience
                  </label>
                  <select className="w-full px-3 py-2 border border-gray-300 rounded-md focus:ring-2 focus:ring-blue-500 focus:border-transparent">
                    <option>None</option>
                    <option>1-2 years</option>
                    <option>3-5 years</option>
                    <option>5+ years</option>
                  </select>
                </div>
              </div>
              <div className="space-y-4">
                <div className="space-y-2">
                  <label className="block text-sm font-medium text-gray-700">
                    Preferred Specialty
                  </label>
                  <select className="w-full px-3 py-2 border border-gray-300 rounded-md focus:ring-2 focus:ring-blue-500 focus:border-transparent">
                    <option>Critical Care</option>
                    <option>Emergency</option>
                    <option>Pediatrics</option>
                    <option>Labor & Delivery</option>
                    <option>Other</option>
                  </select>
                </div>
                <div className="space-y-2">
                  <label className="block text-sm font-medium text-gray-700">
                    Timeline Goal
                  </label>
                  <select className="w-full px-3 py-2 border border-gray-300 rounded-md focus:ring-2 focus:ring-blue-500 focus:border-transparent">
                    <option>As soon as possible</option>
                    <option>Within 2 years</option>
                    <option>2-4 years</option>
                    <option>Flexible</option>
                  </select>
                </div>
              </div>
            </div>
            <button className="mt-8 w-full px-6 py-3 bg-gradient-to-r from-blue-600 to-indigo-600 text-white rounded-lg hover:from-blue-700 hover:to-indigo-700 transition-all duration-200">
              Get Personalized Recommendations
            </button>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-8 mb-16">
            {pathways.map((pathway, index) => (
              <div key={index} className="bg-white rounded-xl shadow-lg p-6 hover:shadow-xl transition-all duration-300">
                <div className="flex items-center mb-4">
                  <div className="p-3 bg-blue-100 rounded-lg text-blue-600">
                    {pathway.icon}
                  </div>
                  <div className="ml-4">
                    <h3 className="text-xl font-bold text-gray-900">{pathway.title}</h3>
                    <span className="text-blue-600">{pathway.timeline}</span>
                  </div>
                </div>
                <p className="text-gray-600 mb-4">{pathway.description}</p>
                <div>
                  <h4 className="font-semibold text-gray-700 mb-2">Requirements:</h4>
                  <ul className="space-y-2">
                    {pathway.requirements.map((req, i) => (
                      <li key={i} className="flex items-center text-gray-600">
                        <ThumbsUp className="w-4 h-4 text-blue-500 mr-2" />
                        {req}
                      </li>
                    ))}
                  </ul>
                </div>
              </div>
            ))}
          </div>

          <div className="bg-gradient-to-r from-blue-600 to-indigo-600 rounded-2xl shadow-xl overflow-hidden">
            <div className="px-8 py-12 text-center text-white">
              <h2 className="text-3xl font-bold mb-4">Need More Guidance?</h2>
              <p className="text-lg mb-8">
                Schedule a one-on-one consultation with our career advisors.
              </p>
              <button className="bg-white text-blue-600 px-8 py-3 rounded-lg font-semibold hover:bg-blue-50 transition-all duration-200">
                Book Consultation
              </button>
            </div>
          </div>
        </div>
      </div>
    </PageLayout>
  );
}