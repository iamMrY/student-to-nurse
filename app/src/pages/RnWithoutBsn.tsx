import React from 'react';
import { Link } from 'react-router-dom';
import { ArrowLeft, Stethoscope, Clock, BookOpen, Award, CheckCircle2 } from 'lucide-react';
import { PageLayout } from '../components/PageLayout';

export default function RnWithoutBsn() {
  const pathways = [
    {
      title: "Associate Degree in Nursing (ADN)",
      duration: "2 years",
      description: "Traditional pathway through community college",
      requirements: [
        "High school diploma or GED",
        "Prerequisites in science and math",
        "Minimum GPA requirements"
      ],
      benefits: [
        "Shorter duration",
        "Lower cost",
        "Faster entry to workforce"
      ]
    },
    {
      title: "LPN to RN Bridge",
      duration: "12-18 months",
      description: "For Licensed Practical Nurses seeking RN licensure",
      requirements: [
        "Active LPN license",
        "Work experience",
        "Prerequisite courses"
      ],
      benefits: [
        "Built on existing knowledge",
        "Shorter program length",
        "Work while studying"
      ]
    },
    {
      title: "Hospital-Based Diploma",
      duration: "2-3 years",
      description: "Traditional hospital-based nursing education",
      requirements: [
        "High school diploma",
        "Basic science courses",
        "Entrance exam"
      ],
      benefits: [
        "Clinical experience focus",
        "Hospital employment potential",
        "Hands-on training"
      ]
    }
  ];

  const successStories = [
    {
      name: "Sarah Johnson",
      role: "ER Nurse",
      path: "ADN Graduate",
      quote: "I started as an ADN nurse and now work in a level 1 trauma center. The hands-on experience was invaluable.",
      image: "https://images.unsplash.com/photo-1494790108377-be9c29b29330?ixlib=rb-1.2.1&auto=format&fit=crop&w=256&q=80"
    },
    {
      name: "Michael Chen",
      role: "ICU Nurse",
      path: "LPN to RN Bridge",
      quote: "The bridge program allowed me to advance my career while continuing to work. It was challenging but worth it.",
      image: "https://images.unsplash.com/photo-1472099645785-5658abf4ff4e?ixlib=rb-1.2.1&auto=format&fit=crop&w=256&q=80"
    }
  ];

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
            Become an RN Without a BSN
          </h1>
          <p className="text-xl text-gray-600 max-w-3xl mx-auto">
            Explore alternative pathways to becoming a Registered Nurse without pursuing a traditional BSN degree.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-8 mb-16">
          {pathways.map((pathway, index) => (
            <div key={index} className="bg-white rounded-xl shadow-lg p-6 hover:shadow-xl transition-all duration-300">
              <div className="flex items-center mb-4">
                <div className="p-3 bg-green-100 rounded-lg text-green-600">
                  {index === 0 ? <BookOpen className="w-8 h-8" /> :
                   index === 1 ? <Award className="w-8 h-8" /> :
                   <Stethoscope className="w-8 h-8" />}
                </div>
                <div className="ml-4">
                  <h3 className="text-xl font-bold text-gray-900">{pathway.title}</h3>
                  <div className="flex items-center text-gray-500">
                    <Clock className="w-4 h-4 mr-1" />
                    <span>{pathway.duration}</span>
                  </div>
                </div>
              </div>

              <p className="text-gray-600 mb-4">{pathway.description}</p>

              <div className="space-y-4">
                <div>
                  <h4 className="font-semibold text-gray-700 mb-2">Requirements:</h4>
                  <ul className="space-y-2">
                    {pathway.requirements.map((req, i) => (
                      <li key={i} className="flex items-center text-gray-600">
                        <CheckCircle2 className="w-4 h-4 text-green-500 mr-2" />
                        {req}
                      </li>
                    ))}
                  </ul>
                </div>

                <div>
                  <h4 className="font-semibold text-gray-700 mb-2">Benefits:</h4>
                  <ul className="space-y-2">
                    {pathway.benefits.map((benefit, i) => (
                      <li key={i} className="flex items-center text-gray-600">
                        <CheckCircle2 className="w-4 h-4 text-green-500 mr-2" />
                        {benefit}
                      </li>
                    ))}
                  </ul>
                </div>
              </div>

              <button className="w-full mt-6 px-4 py-2 bg-green-600 text-white rounded-lg hover:bg-green-700 transition-colors duration-200">
                Learn More
              </button>
            </div>
          ))}
        </div>

        <div className="bg-white rounded-xl shadow-lg p-8 mb-16">
          <h2 className="text-2xl font-bold text-gray-900 mb-8">Success Stories</h2>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
            {successStories.map((story, index) => (
              <div key={index} className="flex space-x-4">
                <img
                  src={story.image}
                  alt={story.name}
                  className="w-16 h-16 rounded-full object-cover"
                />
                <div>
                  <h3 className="text-lg font-semibold text-gray-900">{story.name}</h3>
                  <p className="text-green-600">{story.role}</p>
                  <p className="text-sm text-gray-500">{story.path}</p>
                  <p className="mt-2 text-gray-600 italic">"{story.quote}"</p>
                </div>
              </div>
            ))}
          </div>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
          <div className="bg-gradient-to-br from-green-600 to-teal-600 rounded-xl shadow-xl text-white p-8">
            <h3 className="text-2xl font-bold mb-4">Ready to Start Your Journey?</h3>
            <p className="mb-6">
              Get personalized guidance on choosing the right pathway for your nursing career.
            </p>
            <button className="w-full px-6 py-3 bg-white text-green-600 rounded-lg hover:bg-green-50 transition-all duration-200 font-semibold">
              Get Started
            </button>
          </div>

          <div className="bg-white rounded-xl shadow-xl p-8">
            <h3 className="text-2xl font-bold text-gray-900 mb-4">Have Questions?</h3>
            <p className="text-gray-600 mb-6">
              Connect with our advisors to learn more about alternative pathways to becoming an RN.
            </p>
            <button className="w-full px-6 py-3 bg-gradient-to-r from-green-600 to-teal-600 text-white rounded-lg hover:from-green-700 hover:to-teal-700 transition-all duration-200">
              Contact an Advisor
            </button>
          </div>
        </div>
      </div>
    </div>
    </PageLayout>
  );
}