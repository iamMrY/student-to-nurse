import React from 'react';
import { Link } from 'react-router-dom';
import {
  ArrowLeft,
  Briefcase,
  Users,
  Heart,
  Coffee,
  Sun,
  Award,
  CheckCircle2,
} from 'lucide-react';
import { PageLayout } from '../components/PageLayout';

export default function Careers() {
  {
    /*} const positions = [
    {
      title: "Senior Nursing Education Specialist",
      department: "Education",
      location: "Remote",
      type: "Full-time",
      description: "Lead the development of nursing education content and curriculum."
    },
    {
      title: "Full Stack Developer",
      department: "Engineering",
      location: "Remote",
      type: "Full-time",
      description: "Build and maintain our educational platform and tools."
    },
    {
      title: "Content Marketing Manager",
      department: "Marketing",
      location: "Remote",
      type: "Full-time",
      description: "Create engaging content for nursing students and educators."
    }
  ]; */
  }

  {
    /*
  const benefits = [
    {
      icon: <Heart className="w-8 h-8 text-red-500" />,
      title: 'Health & Wellness',
      items: [
        'Comprehensive health insurance',
        'Mental health support',
        'Wellness programs',
      ],
    },
    {
      icon: <Coffee className="w-8 h-8 text-brown-500" />,
      title: 'Work-Life Balance',
      items: ['Flexible working hours', 'Remote work options', 'Unlimited PTO'],
    },
    {
      icon: <Sun className="w-8 h-8 text-yellow-500" />,
      title: 'Growth & Development',
      items: ['Learning stipend', 'Conference budget', 'Career mentorship'],
    },
  ]; */
  }

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

          {/* Hero Section */}
          <div className="text-center mb-16">
            <h1 className="text-4xl font-extrabold text-gray-900 sm:text-5xl mb-4">
              Join Our Team
            </h1>
            <p className="text-xl text-gray-600 max-w-3xl mx-auto">
              Help us transform nursing education and make a difference in
              healthcare.
            </p>
          </div>

          {/* Mission Statement */}
          <div className="bg-white rounded-xl shadow-lg p-8 mb-16">
            <div className="max-w-3xl mx-auto text-center">
              <Users className="w-16 h-16 text-indigo-600 mx-auto mb-6" />
              <h2 className="text-3xl font-bold text-gray-900 mb-4">
                Why Work With Us?
              </h2>
              <p className="text-lg text-gray-600">
                Join a team passionate about revolutionizing nursing education.
                We're building the future of healthcare education while creating
                an amazing workplace where you can grow and thrive.
              </p>
            </div>
          </div>

          {/* Open Positions 
          <div className="mb-16">
            <h2 className="text-3xl font-bold text-gray-900 text-center mb-12">
              Open Positions
            </h2>
            <div className="grid grid-cols-1 gap-6">
              {positions.map((position, index) => (
                <div key={index} className="bg-white rounded-xl shadow-lg p-6">
                  <div className="flex items-start justify-between">
                    <div>
                      <h3 className="text-xl font-bold text-gray-900">
                        {position.title}
                      </h3>
                      <div className="flex items-center gap-4 mt-2">
                        <span className="text-indigo-600">
                          {position.department}
                        </span>
                        <span className="text-gray-500">•</span>
                        <span className="text-gray-600">
                          {position.location}
                        </span>
                        <span className="text-gray-500">•</span>
                        <span className="text-gray-600">{position.type}</span>
                      </div>
                      <p className="mt-4 text-gray-600">
                        {position.description}
                      </p>
                    </div>
                    <button className="px-6 py-2 bg-indigo-600 text-white rounded-lg hover:bg-indigo-700 transition-colors duration-200">
                      Apply Now
                    </button>
                  </div>
                </div>
              ))}
            </div>
          </div> */}

          {/* Benefits
          <div className="mb-16">
            <h2 className="text-3xl font-bold text-gray-900 text-center mb-12">
              Benefits & Perks
            </h2>
            <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
              {benefits.map((benefit, index) => (
                <div key={index} className="bg-white rounded-xl shadow-lg p-6">
                  <div className="flex justify-center mb-4">{benefit.icon}</div>
                  <h3 className="text-xl font-bold text-gray-900 text-center mb-4">
                    {benefit.title}
                  </h3>
                  <ul className="space-y-2">
                    {benefit.items.map((item, itemIndex) => (
                      <li
                        key={itemIndex}
                        className="flex items-center text-gray-600"
                      >
                        <CheckCircle2 className="w-5 h-5 text-green-500 mr-2" />
                        {item}
                      </li>
                    ))}
                  </ul>
                </div>
              ))}
            </div>
          </div>  */}

          {/* Values */}
          <div className="bg-white rounded-xl shadow-lg p-8 mb-16">
            <div className="max-w-3xl mx-auto text-center">
              <Award className="w-16 h-16 text-indigo-600 mx-auto mb-6" />
              <h2 className="text-3xl font-bold text-gray-900 mb-4">
                Our Values
              </h2>
              <p className="text-lg text-gray-600">
                We believe in fostering a culture of innovation, inclusivity,
                and continuous learning. Our team members are empowered to make
                meaningful contributions while growing professionally and
                personally.
              </p>
            </div>
          </div>

          {/* CTA Section */}
          <div className="bg-gradient-to-r from-indigo-600 to-purple-600 rounded-2xl shadow-xl overflow-hidden">
            <div className="px-8 py-12 text-center text-white">
              <h2 className="text-3xl font-bold mb-4">
                Ready to Make an Impact?
              </h2>
              <p className="text-lg mb-8">
                Join our mission to transform nursing education and healthcare.
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
