import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import { 
  ArrowLeft, 
  Plane, 
  FileCheck, 
  Globe2, 
  Clock, 
  Briefcase,
  GraduationCap,
  BookOpen,
  ExternalLink,
  CheckCircle2,
  AlertCircle,
  DollarSign
} from 'lucide-react';
import { PageLayout } from '../components/PageLayout';

type Tab = 'international' | 'f1';

export default function ImmigrationVisa() {
  const [activeTab, setActiveTab] = useState<Tab>('international');

  const resources = {
    international: {
      official: [
        {
          name: "USCIS - Working in the U.S.",
          url: "https://www.uscis.gov/working-in-the-united-states",
          description: "Official immigration information for foreign workers"
        },
        {
          name: "Department of State - Visas",
          url: "https://travel.state.gov/content/travel/en/us-visas/employment.html",
          description: "Employment-based visa information"
        },
        {
          name: "NCSBN - International Nurses",
          url: "https://www.ncsbn.org/nurse-licensure-guidance.htm",
          description: "Nursing licensure guidance for international nurses"
        }
      ],
      requirements: [
        {
          category: "Educational",
          items: [
            "Nursing degree evaluation",
            "CGFNS certification",
            "English proficiency (IELTS/TOEFL)",
            "NCLEX-RN examination",
            "State licensure requirements"
          ]
        },
        {
          category: "Professional",
          items: [
            "Valid nursing license",
            "Work experience documentation",
            "Skills assessment",
            "Reference letters",
            "Resume/CV"
          ]
        },
        {
          category: "Immigration",
          items: [
            "Valid passport",
            "Visa screen certificate",
            "Employment contract",
            "Sponsorship documentation",
            "Background check"
          ]
        }
      ],
      timeline: [
        {
          phase: "Preparation",
          duration: "6-12 months",
          tasks: [
            "Complete CGFNS evaluation",
            "Pass NCLEX-RN exam",
            "Obtain VisaScreen certificate",
            "Secure job offer",
            "Prepare documentation"
          ]
        },
        {
          phase: "Application",
          duration: "3-6 months",
          tasks: [
            "File visa petition",
            "Submit supporting documents",
            "Attend visa interview",
            "Complete medical exam",
            "Receive visa approval"
          ]
        },
        {
          phase: "Arrival & Setup",
          duration: "1-2 months",
          tasks: [
            "Enter United States",
            "Complete orientation",
            "Obtain Social Security number",
            "Set up banking",
            "Find housing"
          ]
        }
      ]
    },
    f1: {
      official: [
        {
          name: "USCIS - Students and Employment",
          url: "https://www.uscis.gov/working-in-the-united-states/students-and-exchange-visitors",
          description: "Official information about student employment"
        },
        {
          name: "SEVP - Student Portal",
          url: "https://studyinthestates.dhs.gov/",
          description: "Student and Exchange Visitor Program resources"
        },
        {
          name: "OPT Hub - Employment Guide",
          url: "https://www.ice.gov/sevis/practical-training",
          description: "Practical training information for F-1 students"
        }
      ],
      optInfo: {
        types: [
          {
            name: "Pre-Completion OPT",
            features: [
              "Available before graduation",
              "Part-time during school",
              "Full-time during breaks",
              "Counts against total OPT time",
              "Requires EAD card"
            ]
          },
          {
            name: "Post-Completion OPT",
            features: [
              "12 months total duration",
              "Must be related to nursing",
              "Full-time employment",
              "90-day unemployment limit",
              "Must maintain status"
            ]
          }
        ],
        timeline: [
          {
            phase: "Application Window",
            description: "90 days before program end date to 60 days after"
          },
          {
            phase: "Processing Time",
            description: "3-5 months average"
          },
          {
            phase: "Employment Period",
            description: "Up to 12 months total"
          }
        ]
      },
      transitionPaths: [
        {
          path: "H-1B Visa",
          steps: [
            "Find employer willing to sponsor",
            "Prepare for H-1B lottery",
            "File petition if selected",
            "Maintain F-1 status during process",
            "Use cap-gap if applicable"
          ]
        },
        {
          path: "Employment-Based Green Card",
          steps: [
            "Secure qualifying position",
            "Complete PERM process",
            "File I-140 petition",
            "File I-485 adjustment",
            "Maintain status during process"
          ]
        }
      ],
      requirements: [
        {
          category: "OPT Eligibility",
          items: [
            "Full academic year completed",
            "Currently in F-1 status",
            "Good academic standing",
            "Valid passport and I-20",
            "No unauthorized employment"
          ]
        },
        {
          category: "Documentation",
          items: [
            "Form I-765",
            "OPT recommendation I-20",
            "Academic transcripts",
            "Passport photos",
            "Previous EAD cards (if any)"
          ]
        }
      ]
    }
  };

  return (
    <PageLayout>
      <div className="min-h-screen bg-gradient-to-br from-green-50 to-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
          <Link
            to="/"
            className="inline-flex items-center text-green-600 hover:text-green-700 mb-8 transition-colors duration-200"
          >
            <ArrowLeft className="w-5 h-5 mr-2" />
            Back to Home
          </Link>

          <div className="text-center mb-16">
            <h1 className="text-4xl font-extrabold text-gray-900 sm:text-5xl mb-4">
              Immigration & Visa Guide
            </h1>
            <p className="text-xl text-gray-600 max-w-3xl mx-auto">
              Complete guide for both international nurses and F-1 student pathways
            </p>
          </div>

          {/* Important Notice */}
          <div className="bg-yellow-50 border-l-4 border-yellow-500 p-4 mb-8 rounded-lg">
            <div className="flex items-start">
              <AlertCircle className="w-5 h-5 text-yellow-500 mr-2 mt-0.5" />
              <div>
                <p className="font-medium text-yellow-800">Important Notice</p>
                <p className="text-sm text-yellow-700 mt-1">
                  Immigration laws and visa requirements are complex and subject to change. Always verify current requirements with official government sources and qualified immigration attorneys.
                </p>
              </div>
            </div>
          </div>

          {/* Tabs */}
          <div className="flex space-x-4 mb-8">
            <button
              onClick={() => setActiveTab('international')}
              className={`flex-1 py-3 px-6 rounded-lg font-medium transition-colors ${
                activeTab === 'international'
                  ? 'bg-green-600 text-white'
                  : 'bg-gray-100 text-gray-600 hover:bg-gray-200'
              }`}
            >
              International Nurses
            </button>
            <button
              onClick={() => setActiveTab('f1')}
              className={`flex-1 py-3 px-6 rounded-lg font-medium transition-colors ${
                activeTab === 'f1'
                  ? 'bg-green-600 text-white'
                  : 'bg-gray-100 text-gray-600 hover:bg-gray-200'
              }`}
            >
              F-1 Visa Nurses
            </button>
          </div>

          {activeTab === 'international' ? (
            <div className="space-y-8">
              {/* Official Resources */}
              <div className="bg-white rounded-xl shadow-lg p-8">
                <h2 className="text-2xl font-bold text-gray-900 mb-6 flex items-center">
                  <Globe2 className="w-6 h-6 mr-2 text-green-600" />
                  Official Resources
                </h2>
                <div className="grid grid-cols-1 gap-4">
                  {resources.international.official.map((resource, index) => (
                    <a
                      key={index}
                      href={resource.url}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="block bg-gray-50 p-4 rounded-lg hover:bg-green-50 transition-colors duration-200"
                    >
                      <div className="flex items-start">
                        <ExternalLink className="w-5 h-5 text-green-600 mr-3 mt-1" />
                        <div>
                          <h3 className="font-medium text-gray-900">{resource.name}</h3>
                          <p className="text-sm text-gray-600 mt-1">{resource.description}</p>
                        </div>
                      </div>
                    </a>
                  ))}
                </div>
              </div>

              {/* Requirements */}
              <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
                {resources.international.requirements.map((category, index) => (
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

              {/* Timeline */}
              <div className="bg-white rounded-xl shadow-lg p-8">
                <h2 className="text-2xl font-bold text-gray-900 mb-6 flex items-center">
                  <Clock className="w-6 h-6 mr-2 text-green-600" />
                  Immigration Timeline
                </h2>
                <div className="space-y-6">
                  {resources.international.timeline.map((phase, index) => (
                    <div key={index} className="relative pl-8 pb-8 last:pb-0">
                      <div className="absolute left-0 top-0 h-full w-px bg-green-200" />
                      <div className="absolute left-0 top-2 w-2 h-2 rounded-full bg-green-600 -translate-x-1/2" />
                      <h3 className="font-semibold text-gray-900">{phase.phase}</h3>
                      <p className="text-sm font-medium text-green-600 my-1">Duration: {phase.duration}</p>
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
          ) : (
            <div className="space-y-8">
              {/* Official F-1 Resources */}
              <div className="bg-white rounded-xl shadow-lg p-8">
                <h2 className="text-2xl font-bold text-gray-900 mb-6 flex items-center">
                  <Globe2 className="w-6 h-6 mr-2 text-green-600" />
                  Official F-1 Resources
                </h2>
                <div className="grid grid-cols-1 gap-4">
                  {resources.f1.official.map((resource, index) => (
                    <a
                      key={index}
                      href={resource.url}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="block bg-gray-50 p-4 rounded-lg hover:bg-green-50 transition-colors duration-200"
                    >
                      <div className="flex items-start">
                        <ExternalLink className="w-5 h-5 text-green-600 mr-3 mt-1" />
                        <div>
                          <h3 className="font-medium text-gray-900">{resource.name}</h3>
                          <p className="text-sm text-gray-600 mt-1">{resource.description}</p>
                        </div>
                      </div>
                    </a>
                  ))}
                </div>
              </div>

              {/* OPT Information */}
              <div className="bg-white rounded-xl shadow-lg p-8">
                <h2 className="text-2xl font-bold text-gray-900 mb-6 flex items-center">
                  <GraduationCap className="w-6 h-6 mr-2 text-green-600" />
                  Optional Practical Training (OPT)
                </h2>
                <div className="space-y-6">
                  <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                    {resources.f1.optInfo.types.map((type, index) => (
                      <div key={index} className="bg-gray-50 p-4 rounded-lg">
                        <h3 className="font-medium text-gray-900 mb-4">{type.name}</h3>
                        <ul className="space-y-2">
                          {type.features.map((feature, featureIndex) => (
                            <li key={featureIndex} className="flex items-start">
                              <CheckCircle2 className="w-4 h-4 text-green-500 mr-2 mt-1" />
                              <span className="text-gray-600 text-sm">{feature}</span>
                            </li>
                          ))}
                        </ul>
                      </div>
                    ))}
                  </div>

                  <div className="bg-gray-50 p-4 rounded-lg">
                    <h3 className="font-medium text-gray-900 mb-4">Timeline</h3>
                    <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
                      {resources.f1.optInfo.timeline.map((item, index) => (
                        <div key={index} className="flex items-start">
                          <Clock className="w-5 h-5 text-green-600 mr-2 mt-1" />
                          <div>
                            <h4 className="font-medium text-gray-900">{item.phase}</h4>
                            <p className="text-sm text-gray-600">{item.description}</p>
                          </div>
                        </div>
                      ))}
                    </div>
                  </div>
                </div>
              </div>

              {/* Transition Paths */}
              <div className="bg-white rounded-xl shadow-lg p-8">
                <h2 className="text-2xl font-bold text-gray-900 mb-6 flex items-center">
                  <Briefcase className="w-6 h-6 mr-2 text-green-600" />
                  Transition Paths
                </h2>
                <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                  {resources.f1.transitionPaths.map((path, index) => (
                    <div key={index} className="bg-gray-50 p-4 rounded-lg">
                      <h3 className="font-medium text-gray-900 mb-4">{path.path}</h3>
                      <ul className="space-y-2">
                        {path.steps.map((step, stepIndex) => (
                          <li key={stepIndex} className="flex items-start">
                            <CheckCircle2 className="w-4 h-4 text-green-500 mr-2 mt-1" />
                            <span className="text-gray-600 text-sm">{step}</span>
                          </li>
                        ))}
                      </ul>
                    </div>
                  ))}
                </div>
              </div>

              {/* Requirements */}
              <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
                {resources.f1.requirements.map((category, index) => (
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
            </div>
          )}

          {/* CTA Section */}
          <div className="grid grid-cols-1 md:grid-cols-2 gap-8 mt-8">
            <div className="bg-gradient-to-br from-green-600 to-teal-600 rounded-xl shadow-xl text-white p-8">
              <h3 className="text-2xl font-bold mb-4">Need Immigration Help?</h3>
              <p className="mb-6">
                Connect with our immigration experts for personalized guidance through the visa process.
              </p>
              <button className="w-full px-6 py-3 bg-white text-green-600 rounded-lg hover:bg-green-50 transition-all duration-200 font-semibold">
                Schedule Consultation
              </button>
            </div>

            <div className="bg-white rounded-xl shadow-xl p-8">
              <h3 className="text-2xl font-bold text-gray-900 mb-4">For Employers</h3>
              <p className="text-gray-600 mb-6">
                Looking to hire qualified nursing professionals? Post your opportunities here.
              </p>
              <button className="w-full px-6 py-3 bg-gradient-to-r from-green-600 to-teal-600 text-white rounded-lg hover:from-green-700 hover:to-teal-700 transition-all duration-200">
                Post Jobs
              </button>
            </div>
          </div>
        </div>
      </div>
    </PageLayout>
  );
}