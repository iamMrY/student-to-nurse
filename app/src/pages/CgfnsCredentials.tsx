import React from 'react';
import { Link } from 'react-router-dom';
import { 
  ArrowLeft, 
  ScrollText, 
  FileCheck, 
  Brain, 
  Target, 
  Clock, 
  CheckCircle2, 
  ExternalLink, 
  DollarSign, 
  AlertCircle 
} from 'lucide-react';
import { PageLayout } from '../components/PageLayout';

export default function CgfnsCredentials() {
  const resources = {
    official: [
      {
        name: "CGFNS Official Website",
        url: "https://www.cgfns.org/",
        description: "Official CGFNS International portal for credential evaluation"
      },
      {
        name: "CGFNS Certification Program",
        url: "https://www.cgfns.org/services/certification-program/",
        description: "Details about the CGFNS Certification Program requirements"
      },
      {
        name: "VisaScreen Program",
        url: "https://www.cgfns.org/services/visascreen/",
        description: "Information about VisaScreen certification for visa requirements"
      }
    ],
    requirements: [
      {
        category: "Educational Documents",
        items: [
          "Nursing diploma/degree",
          "Official transcripts",
          "Course descriptions",
          "Clinical practice records",
          "School catalog/syllabus"
        ]
      },
      {
        category: "Professional Documents",
        items: [
          "Nursing license/registration",
          "License verification",
          "Employment verification",
          "Reference letters",
          "Work experience documentation"
        ]
      },
      {
        category: "Personal Documents",
        items: [
          "Valid passport",
          "Birth certificate",
          "Marriage certificate (if applicable)",
          "Name change documents (if applicable)",
          "English translations of all documents"
        ]
      }
    ],
    fees: [
      {
        service: "Basic Credentials Evaluation",
        cost: "$350",
        description: "Standard evaluation of nursing education and licensure"
      },
      {
        service: "VisaScreen Certificate",
        cost: "$540",
        description: "Required for occupational visa applications"
      },
      {
        service: "Credential Verification",
        cost: "$90 per document",
        description: "Verification of educational and professional credentials"
      },
      {
        service: "Express Service",
        cost: "$250",
        description: "Expedited processing of applications"
      }
    ],
    timeline: [
      {
        phase: "Application Submission",
        duration: "1-2 weeks",
        tasks: [
          "Create CGFNS account",
          "Complete online application",
          "Submit required documents",
          "Pay application fees"
        ]
      },
      {
        phase: "Document Verification",
        duration: "6-8 weeks",
        tasks: [
          "Educational credentials verification",
          "License verification",
          "Employment verification",
          "Document translation review"
        ]
      },
      {
        phase: "Evaluation Process",
        duration: "4-6 weeks",
        tasks: [
          "Course-by-course evaluation",
          "Clinical practice assessment",
          "Comparability determination",
          "Final report preparation"
        ]
      }
    ]
  };

  return (
    <PageLayout>
      <div className="min-h-screen bg-gradient-to-br from-indigo-50 to-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
          <Link
            to="/"
            className="inline-flex items-center text-indigo-600 hover:text-indigo-700 mb-8 transition-colors duration-200"
          >
            <ArrowLeft className="w-5 h-5 mr-2" />
            Back to Home
          </Link>

          <div className="text-center mb-16">
            <h1 className="text-4xl font-extrabold text-gray-900 sm:text-5xl mb-4">
              CGFNS Certification & Credentials
            </h1>
            <p className="text-xl text-gray-600 max-w-3xl mx-auto">
              Complete guide to obtaining CGFNS certification and VisaScreen for international nurses
            </p>
          </div>

          {/* Important Notice */}
          <div className="bg-yellow-50 border-l-4 border-yellow-500 p-4 mb-8 rounded-lg">
            <div className="flex items-start">
              <AlertCircle className="w-5 h-5 text-yellow-500 mr-2 mt-0.5" />
              <div>
                <p className="font-medium text-yellow-800">Important Notice</p>
                <p className="text-sm text-yellow-700 mt-1">
                  Requirements, fees, and processes for CGFNS certification may change. Always verify current information directly with CGFNS International.
                </p>
              </div>
            </div>
          </div>

          {/* Official Resources */}
          <div className="bg-white rounded-xl shadow-lg p-8 mb-8">
            <h2 className="text-2xl font-bold text-gray-900 mb-6 flex items-center">
              <Target className="w-6 h-6 mr-2 text-indigo-600" />
              Official CGFNS Resources
            </h2>
            <div className="grid grid-cols-1 gap-4">
              {resources.official.map((resource, index) => (
                <a
                  key={index}
                  href={resource.url}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="block bg-gray-50 p-4 rounded-lg hover:bg-indigo-50 transition-colors duration-200"
                >
                  <div className="flex items-start">
                    <ExternalLink className="w-5 h-5 text-indigo-600 mr-3 mt-1" />
                    <div>
                      <h3 className="font-medium text-gray-900">{resource.name}</h3>
                      <p className="text-sm text-gray-600 mt-1">{resource.description}</p>
                    </div>
                  </div>
                </a>
              ))}
            </div>
          </div>

          {/* Required Documents */}
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8 mb-8">
            {resources.requirements.map((category, index) => (
              <div key={index} className="bg-white rounded-xl shadow-lg p-6">
                <h3 className="text-xl font-bold text-gray-900 mb-4">{category.category}</h3>
                <ul className="space-y-3">
                  {category.items.map((item, itemIndex) => (
                    <li key={itemIndex} className="flex items-start">
                      <CheckCircle2 className="w-5 h-5 text-green-500 mr-2 mt-0.5" />
                      <span className="text-gray-600">{item}</span>
                    </li>
                  ))}
                </ul>
              </div>
            ))}
          </div>

          {/* Fees and Timeline */}
          <div className="grid grid-cols-1 md:grid-cols-2 gap-8 mb-8">
            {/* Fees Section */}
            <div className="bg-white rounded-xl shadow-lg p-8">
              <h2 className="text-2xl font-bold text-gray-900 mb-6 flex items-center">
                <DollarSign className="w-6 h-6 mr-2 text-indigo-600" />
                Fees and Costs
              </h2>
              <div className="space-y-4">
                {resources.fees.map((fee, index) => (
                  <div key={index} className="border-b border-gray-200 pb-4 last:border-0">
                    <h3 className="font-semibold text-gray-900">{fee.service}</h3>
                    <p className="text-2xl font-bold text-indigo-600 my-1">{fee.cost}</p>
                    <p className="text-sm text-gray-600">{fee.description}</p>
                  </div>
                ))}
              </div>
            </div>

            {/* Timeline Section */}
            <div className="bg-white rounded-xl shadow-lg p-8">
              <h2 className="text-2xl font-bold text-gray-900 mb-6 flex items-center">
                <Clock className="w-6 h-6 mr-2 text-indigo-600" />
                Application Timeline
              </h2>
              <div className="space-y-6">
                {resources.timeline.map((phase, index) => (
                  <div key={index} className="relative pl-8 pb-8 last:pb-0">
                    <div className="absolute left-0 top-0 h-full w-px bg-indigo-200" />
                    <div className="absolute left-0 top-2 w-2 h-2 rounded-full bg-indigo-600 -translate-x-1/2" />
                    <h3 className="font-semibold text-gray-900">{phase.phase}</h3>
                    <p className="text-sm font-medium text-indigo-600 my-1">Duration: {phase.duration}</p>
                    <ul className="mt-2 space-y-2">
                      {phase.tasks.map((task, taskIndex) => (
                        <li key={taskIndex} className="flex items-center text-gray-600 text-sm">
                          <CheckCircle2 className="w-4 h-4 text-green-500 mr-2" />
                          {task}
                        </li>
                      ))}
                    </ul>
                  </div>
                ))}
              </div>
            </div>
          </div>

          {/* CTA Section */}
          <div className="bg-gradient-to-r from-indigo-600 to-purple-600 rounded-2xl shadow-xl overflow-hidden">
            <div className="px-8 py-12 text-center text-white">
              <h2 className="text-3xl font-bold mb-4">Need Assistance?</h2>
              <p className="text-lg mb-8">
                Get expert guidance through your CGFNS certification process.
              </p>
              <button className="bg-white text-indigo-600 px-8 py-3 rounded-lg font-semibold hover:bg-indigo-50 transition-all duration-200">
                Comming Soon !!
              </button>
            </div>
          </div>
        </div>
      </div>
    </PageLayout>
  );
}