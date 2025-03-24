import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import { ArrowLeft, Share2, Building } from 'lucide-react';
import { PageLayout } from '../components/PageLayout';
import { supabase } from '../lib/supabase';
import toast from 'react-hot-toast';

const VISA_TYPES = ['H1B', 'OPT', 'Green Card', 'TN', 'Day 1 CPT'];
const US_STATES = [
  'Alabama', 'Alaska', 'Arizona', 'Arkansas', 'California', 'Colorado', 'Connecticut', 
  'Delaware', 'Florida', 'Georgia', 'Hawaii', 'Idaho', 'Illinois', 'Indiana', 'Iowa', 
  'Kansas', 'Kentucky', 'Louisiana', 'Maine', 'Maryland', 'Massachusetts', 'Michigan', 
  'Minnesota', 'Mississippi', 'Missouri', 'Montana', 'Nebraska', 'Nevada', 'New Hampshire', 
  'New Jersey', 'New Mexico', 'New York', 'North Carolina', 'North Dakota', 'Ohio', 
  'Oklahoma', 'Oregon', 'Pennsylvania', 'Rhode Island', 'South Carolina', 'South Dakota', 
  'Tennessee', 'Texas', 'Utah', 'Vermont', 'Virginia', 'Washington', 'West Virginia', 
  'Wisconsin', 'Wyoming'
];

export default function ShareEmployers() {
  // Form state
  const [employerName, setEmployerName] = useState('');
  const [city, setCity] = useState('');
  const [state, setState] = useState('');
  const [position, setPosition] = useState('');
  const [selectedVisaTypes, setSelectedVisaTypes] = useState<string[]>([]);
  const [isSubmitting, setIsSubmitting] = useState(false);

  const handleVisaTypeToggle = (visaType: string) => {
    setSelectedVisaTypes(prev => 
      prev.includes(visaType)
        ? prev.filter(type => type !== visaType)
        : [...prev, visaType]
    );
  };

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setIsSubmitting(true);

    try {
      if (selectedVisaTypes.length === 0) {
        throw new Error('Please select at least one visa sponsorship type');
      }

      const { error } = await supabase
        .from('employers')
        .insert({
          name: employerName,
          location: `${city}, ${state}`,
          state: state,
          sponsorship_programs: selectedVisaTypes,
          salary_range_start: 0, // These would be added in a more complete form
          salary_range_end: 0,
          benefits: [],
          career_link: '' // This would be added in a more complete form
        });

      if (error) throw error;

      toast.success('Thank you for sharing! Your submission will help other nurses.');
      
      // Reset form
      setEmployerName('');
      setCity('');
      setState('');
      setPosition('');
      setSelectedVisaTypes([]);
    } catch (error) {
      toast.error(error instanceof Error ? error.message : 'Failed to submit employer information');
    } finally {
      setIsSubmitting(false);
    }
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
              Share Employer Information
            </h1>
            <p className="text-xl text-gray-600 max-w-3xl mx-auto">
              Help other nurses find visa sponsorship opportunities by sharing employer information.
            </p>
          </div>

          <div className="bg-white rounded-xl shadow-lg p-8 mb-12">
            <div className="flex items-center mb-6">
              <Building className="w-8 h-8 text-red-500 mr-3" />
              <h2 className="text-2xl font-bold text-gray-900">Share Employer Details</h2>
            </div>

            <form onSubmit={handleSubmit} className="space-y-6">
              <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                <div>
                  <label className="block text-sm font-medium text-gray-700 mb-2">
                    Employer Name
                  </label>
                  <input
                    type="text"
                    value={employerName}
                    onChange={(e) => setEmployerName(e.target.value)}
                    className="w-full px-4 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-red-500 focus:border-transparent"
                    placeholder="Enter employer name"
                    required
                  />
                </div>

                <div>
                  <label className="block text-sm font-medium text-gray-700 mb-2">
                    Position
                  </label>
                  <input
                    type="text"
                    value={position}
                    onChange={(e) => setPosition(e.target.value)}
                    className="w-full px-4 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-red-500 focus:border-transparent"
                    placeholder="Your position"
                    required
                  />
                </div>
              </div>

              <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                <div>
                  <label className="block text-sm font-medium text-gray-700 mb-2">
                    City
                  </label>
                  <input
                    type="text"
                    value={city}
                    onChange={(e) => setCity(e.target.value)}
                    className="w-full px-4 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-red-500 focus:border-transparent"
                    placeholder="Enter city"
                    required
                  />
                </div>

                <div>
                  <label className="block text-sm font-medium text-gray-700 mb-2">
                    State
                  </label>
                  <select
                    value={state}
                    onChange={(e) => setState(e.target.value)}
                    className="w-full px-4 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-red-500 focus:border-transparent"
                    required
                  >
                    <option value="">Select a state</option>
                    {US_STATES.map((state) => (
                      <option key={state} value={state}>{state}</option>
                    ))}
                  </select>
                </div>
              </div>

              <div>
                <label className="block text-sm font-medium text-gray-700 mb-2">
                  Visa Sponsorship Types
                </label>
                <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-5 gap-3">
                  {VISA_TYPES.map((visaType) => (
                    <button
                      key={visaType}
                      type="button"
                      onClick={() => handleVisaTypeToggle(visaType)}
                      className={`px-4 py-2 rounded-lg border ${
                        selectedVisaTypes.includes(visaType)
                          ? 'bg-red-600 text-white border-red-600'
                          : 'bg-white text-gray-700 border-gray-300 hover:border-red-500'
                      } transition-colors duration-200`}
                    >
                      {visaType}
                    </button>
                  ))}
                </div>
              </div>

              <button
                type="submit"
                disabled={isSubmitting}
                className="w-full px-6 py-3 bg-gradient-to-r from-red-600 to-pink-600 text-white rounded-lg hover:from-red-700 hover:to-pink-700 transition-all duration-200 disabled:opacity-50"
              >
                {isSubmitting ? 'Submitting...' : 'Share Employer with Community'}
              </button>
            </form>
          </div>
        </div>
      </div>
    </PageLayout>
  );
}