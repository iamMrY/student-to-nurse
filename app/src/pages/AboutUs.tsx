import React from 'react';
import { Link } from 'react-router-dom';
import { ArrowLeft, Users, Target, Globe, Award, Heart } from 'lucide-react';
import { PageLayout } from '../components/PageLayout';

export default function AboutUs() {
  {
    /*const mission = [
    {
      name: 'Dr. Sarah Johnson',
      role: 'Chief Executive Officer',
      image:
        'https://images.unsplash.com/photo-1494790108377-be9c29b29330?ixlib=rb-1.2.1&auto=format&fit=crop&w=256&q=80',
      bio: '20+ years experience in nursing education and healthcare administration',
    },
    {
      name: 'Michael Chen',
      role: 'Chief Technology Officer',
      image:
        'https://images.unsplash.com/photo-1472099645785-5658abf4ff4e?ixlib=rb-1.2.1&auto=format&fit=crop&w=256&q=80',
      bio: 'Former healthcare software architect with a passion for education technology',
    },
    {
      name: 'Dr. Emily Rodriguez',
      role: 'Director of Education',
      image:
        'https://images.unsplash.com/photo-1438761681033-6461ffad8d80?ixlib=rb-1.2.1&auto=format&fit=crop&w=256&q=80',
      bio: 'Nursing educator with expertise in curriculum development and student success',
    },
  ];
*/
  }

  const values = [
    {
      icon: <Heart className="w-12 h-12 text-red-500" />,
      title: 'Student Success First',
      description:
        'We prioritize the success and well-being of every nursing student on their educational journey.',
    },
    {
      icon: <Target className="w-12 h-12 text-blue-500" />,
      title: 'Excellence in Education',
      description:
        'We maintain the highest standards in educational resources and support services.',
    },
    {
      icon: <Globe className="w-12 h-12 text-green-500" />,
      title: 'Global Impact',
      description:
        "We're committed to improving healthcare education worldwide through accessible resources.",
    },
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

          {/* Hero Section */}
          <div className="text-center mb-16">
            <h1 className="text-4xl font-extrabold text-gray-900 sm:text-5xl mb-4">
              About Student To RN
            </h1>
            <p className="text-xl text-gray-600 max-w-3xl mx-auto">
              Empowering the next generation of nurses through comprehensive
              education and support.
            </p>
          </div>

          {/* Mission Statement */}
          <div className="bg-white rounded-xl shadow-lg p-8 mb-16">
            <div className="max-w-3xl mx-auto text-center">
              <Award className="w-16 h-16 text-blue-600 mx-auto mb-6" />
              <h2 className="text-3xl font-bold text-gray-900 mb-4">
                Our Mission
              </h2>
              <p className="text-lg text-gray-600">
                To provide accessible, high-quality nursing education resources
                and support services that empower students to achieve their
                dreams of becoming registered nurses. We believe in breaking
                down barriers to education and creating pathways to success for
                nursing students worldwide.
              </p>
            </div>
          </div>

          {/* Core Values */}
          <div className="mb-16">
            <h2 className="text-3xl font-bold text-gray-900 text-center mb-12">
              Our Core Values
            </h2>
            <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
              {values.map((value, index) => (
                <div
                  key={index}
                  className="bg-white rounded-xl shadow-lg p-6 text-center"
                >
                  <div className="flex justify-center mb-4">{value.icon}</div>
                  <h3 className="text-xl font-bold text-gray-900 mb-2">
                    {value.title}
                  </h3>
                  <p className="text-gray-600">{value.description}</p>
                </div>
              ))}
            </div>
          </div>

          {/* Leadership Team 
          <div className="mb-16">
            <h2 className="text-3xl font-bold text-gray-900 text-center mb-12">
              Our Leadership Team
            </h2>
            <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
              {mission.map((member, index) => (
                <div
                  key={index}
                  className="bg-white rounded-xl shadow-lg overflow-hidden"
                >
                  <img
                    src={member.image}
                    alt={member.name}
                    className="w-full h-64 object-cover"
                  />
                  <div className="p-6">
                    <h3 className="text-xl font-bold text-gray-900">
                      {member.name}
                    </h3>
                    <p className="text-blue-600 mb-2">{member.role}</p>
                    <p className="text-gray-600">{member.bio}</p>
                  </div>
                </div>
              ))}
            </div>
          </div> */}

          {/* CTA Section */}
          <div className="bg-gradient-to-r from-blue-600 to-indigo-600 rounded-2xl shadow-xl overflow-hidden">
            <div className="px-8 py-12 text-center text-white">
              <h2 className="text-3xl font-bold mb-4">Join Our Community</h2>
              <p className="text-lg mb-8">
                Be part of a growing community of future nurses and healthcare
                professionals.
              </p>
              <button className="bg-white text-blue-600 px-8 py-3 rounded-lg font-semibold hover:bg-blue-50 transition-all duration-200">
                Get Started Today
              </button>
            </div>
          </div>
        </div>
      </div>
    </PageLayout>
  );
}
