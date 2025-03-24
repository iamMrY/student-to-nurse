import React from 'react';
import { Link } from 'react-router-dom';
import { 
  ArrowLeft, HandshakeIcon, Building, MapPin, DollarSign,
  FileCheck, Clock, AlertCircle, CheckCircle2, ExternalLink
} from 'lucide-react';
import { PageLayout } from '../components/PageLayout';

export default function VisaSponsorship() {
  const sponsors = [
    {
      name: "Memorial Healthcare System",
      location: "Florida",
      positions: ["ICU", "ER", "Med-Surg"],
      benefits: ["Relocation assistance", "Housing stipend", "Sign-on bonus"],
      visaTypes: ["H-1B", "Green Card"]
    },
    {
      name: "Cleveland Clinic",
      location: "Ohio",
      positions: ["Critical Care", "OR", "Pediatrics"],
      benefits: ["Comprehensive benefits", "Career development", "Education assistance"],
      visaTypes: ["H-1B", "TN", "Green Card"]
    },
    {
      name: "Kaiser Permanente",
      location: "California",
      positions: ["Telemetry", "Labor & Delivery", "Mental Health"],
      benefits: ["Competitive salary", "Retirement plan", "Family benefits"],
      visaTypes: ["H-1B", "Green Card"]
    }
  ];

  const resources = {
    official: [
      {
        name: "USCIS - H-1B Program",
        url: "https://www.uscis.gov/working-in-the-united-states/h-1b-specialty-occupations",
        description: "Official H-1B visa information from U.S. Citizenship and Immigration Services"
      },
      {
        name: "USCIS - Employment-Based Immigration",
        url: "https://www.uscis.gov/working-in-the-united-states/permanent-workers",
        description: "Information about employment-based green cards"
      },
      {
        name: "Department of Labor - PERM",
        url: "https://www.dol.gov/agencies/eta/foreign-labor/programs/permanent",
        description: "Permanent Labor Certification Program details"
      }
    ],
    costs: [
      {
        category: "H-1B Visa",
        items: [
          {
            name: "Basic Filing Fee",
            cost: "$460"
          },
          {
            name: "ACWIA Fee",
            cost: "$750-$1,500"
          },
          {
            name: "Fraud Prevention Fee",
            cost: "$500"
          },
          {
            name: "Premium Processing (Optional)",
            cost: "$2,500"
          }
        ]
      },
      {
        category: "Green Card",
        items: [
          {
            name: "PERM Filing",
            cost: "No filing fee"
          },
          {
            name: "I-140 Petition",
            cost: "$700"
          },
          {
            name: "I-485 Adjustment",
            cost: "$1,225"
          },
          {
            name: "Legal Fees (Typical Range)",
            cost: "$5,000-$10,000"
          }
        ]
      }
    ],
    timeline: [
      {
        phase: "Preparation",
        duration: "3-6 months",
        tasks: [
          "Obtain CGFNS certification",
          "Pass NCLEX-RN exam",
          "Obtain state license",
          "Prepare required documents",
          "Find sponsoring employer"
        ]
      },
      {
        phase: "H-1B Filing",
        duration: "2-4 months",
        tasks: [
          "LCA filing and approval",
          "H-1B petition preparation",
          "Premium processing option",
          "USCIS adjudication",
          "Visa interview if abroad"
        ]
      },
      {
        phase: "Green Card Process",
        duration: "12-18 months",
        tasks: [
          "PERM labor certification",
          "I-140 petition filing",
          "I-485 adjustment of status",
          "Employment authorization",
          "Advance parole travel document"
        ]
      }
    ]
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
              Visa Sponsorship Opportunities
            </h1>
            <p className="text-xl text-gray-600 max-w-3xl mx-auto">
              Connect with healthcare facilities offering visa sponsorship for international nurses.
            </p>
          </div>

          {/* Important Notice */}
          <div className="bg-yellow-50 border-l-4 border-yellow-500 p-4 mb-8 rounded-lg">
            <div className="flex items-start">
              <AlertCircle className="w-5 h-5 text-yellow-500 mr-2 mt-0.5" />
              <div>
                <p className="font-medium text-yellow-800">Important Notice</p>
                <p className="text-sm text-yellow-700 mt-1">
                  Immigration laws and visa requirements are complex and subject to change. The information provided here is for general guidance only. Always consult with qualified immigration attorneys and potential employers for the most current requirements and processes.
                </p>
              </div>
            </div>
          </div>

          {/* Official Resources */}
          <div className="bg-white rounded-xl shadow-lg p-8 mb-8">
            <h2 className="text-2xl font-bold text-gray-900 mb-6">Official Resources</h2>
            <div className="grid grid-cols-1 gap-4">
              {resources.official.map((resource, index) => (
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
                      <h3 className="font-medium text-gray-900">{resource.name}</h3>
                      <p className="text-sm text-gray-600 mt-1">{resource.description}</p>
                    </div>
                  </div>
                </a>
              ))}
            </div>
          </div>

          {/* Sponsoring Facilities */}
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8 mb-16">
            {sponsors.map((sponsor, index) => (
              <div key={index} className="bg-white rounded-xl shadow-lg overflow-hidden hover:shadow-xl transition-all duration-300">
                <div className="p-6">
                  <div className="flex items-center mb-4">
                    <Building className="w-8 h-8 text-purple-500" />
                    <div className="ml-3">
                      <h3 className="text-xl font-bold text-gray-900">{sponsor.name}</h3>
                      <div className="flex items-center text-gray-500">
                        <MapPin className="w-4 h-4 mr-1" />
                        <span>{sponsor.location}</span>
                      </div>
                    </div>
                  </div>

                  <div className="space-y-4">
                    <div>
                      <h4 className="font-semibold text-gray-700">Open Positions:</h4>
                      <div className="flex flex-wrap gap-2 mt-2">
                        {sponsor.positions.map((position, i) => (
                          <span
                            key={i}
                            className="px-3 py-1 bg-purple-100 text-purple-700 rounded-full text-sm"
                          >
                            {position}
                          </span>
                        ))}
                      </div>
                    </div>

                    <div>
                      <h4 className="font-semibold text-gray-700">Benefits:</h4>
                      <ul className="mt-2 space-y-1">
                        {sponsor.benefits.map((benefit, i) => (
                          <li key={i} className="flex items-center text-gray-600">
                            <DollarSign className="w-4 h-4 text-green-500 mr-2" />
                            {benefit}
                          </li>
                        ))}
                      </ul>
                    </div>

                    <div>
                      <h4 className="font-semibold text-gray-700">Visa Sponsorship:</h4>
                      <div className="flex flex-wrap gap-2 mt-2">
                        {sponsor.visaTypes.map((visa, i) => (
                          <span
                            key={i}
                            className="px-3 py-1 bg-green-100 text-green-700 rounded-full text-sm"
                          >
                            {visa}
                          </span>
                        ))}
                      </div>
                    </div>
                  </div>
                </div>

                <div className="px-6 py-4 bg-gray-50">
                  <button className="w-full px-4 py-2 bg-purple-600 text-white rounded-lg hover:bg-purple-700 transition-colors duration-200">
                    View Opportunities
                  </button>
                </div>
              </div>
            ))}
          </div>

          {/* Timeline */}
          <div className="bg-white rounded-xl shadow-lg p-8 mb-8">
            <h2 className="text-2xl font-bold text-gray-900 mb-6">Immigration Timeline</h2>
            <div className="space-y-8">
              {resources.timeline.map((phase, index) => (
                <div key={index} className="relative pl-8">
                  <div className="absolute left-0 top-0 h-full w-px bg-purple-200" />
                  <div className="absolute left-0 top-2 w-2 h-2 rounded-full bg-purple-600 -translate-x-1/2" />
                  <h3 className="font-semibold text-gray-900">{phase.phase}</h3>
                  <p className="text-sm font-medium text-purple-600 my-1">Duration: {phase.duration}</p>
                  <ul className="mt-4 space-y-2">
                    {phase.tasks.map((task, taskIndex) => (
                      <li key={taskIndex} className="flex items-center text-gray-600">
                        <CheckCircle2 className="w-4 h-4 text-purple-500 mr-2" />
                        {task}
                      </li>
                    ))}
                  </ul>
                </div>
              ))}
            </div>
          </div>

          {/* Costs */}
          <div className="bg-white rounded-xl shadow-lg p-8 mb-8">
            <h2 className="text-2xl font-bold text-gray-900 mb-6">Immigration Costs</h2>
            <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
              {resources.costs.map((category, index) => (
                <div key={index} className="bg-gray-50 p-6 rounded-lg">
                  <h3 className="text-lg font-semibold text-gray-900 mb-4">{category.category}</h3>
                  <ul className="space-y-3">
                    {category.items.map((item, itemIndex) => (
                      <li key={itemIndex} className="flex justify-between items-center">
                        <span className="text-gray-600">{item.name}</span>
                        <span className="font-medium text-purple-600">{item.cost}</span>
                      </li>
                    ))}
                  </ul>
                </div>
              ))}
            </div>
          </div>

          {/* CTA Section */}
          <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
            <div className="bg-gradient-to-br from-purple-600 to-indigo-600 rounded-xl shadow-xl text-white p-8">
              <HandshakeIcon className="w-12 h-12 mb-6" />
              <h3 className="text-2xl font-bold mb-4">Looking for Sponsorship?</h3>
              <p className="mb-6">
                Let us help you connect with healthcare facilities that match your career goals.
              </p>
              <button className="w-full px-6 py-3 bg-white text-purple-600 rounded-lg hover:bg-purple-50 transition-all duration-200 font-semibold">
                Create Profile
              </button>
            </div>

            <div className="bg-white rounded-xl shadow-xl p-8">
              <h3 className="text-2xl font-bold text-gray-900 mb-4">For Employers</h3>
              <p className="text-gray-600 mb-6">
                Are you a healthcare facility looking to sponsor international nurses?
              </p>
              <button className="w-full px-6 py-3 bg-gradient-to-r from-purple-600 to-indigo-600 text-white rounded-lg hover:from-purple-700 hover:to-indigo-700 transition-all duration-200">
                Post Opportunities
              </button>
            </div>
          </div>
        </div>
      </div>
    </PageLayout>
  );
}