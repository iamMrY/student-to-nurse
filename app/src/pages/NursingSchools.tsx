import React, { useState, useEffect } from 'react';
import { Link } from 'react-router-dom';
import { 
  ArrowLeft, 
  GraduationCap, 
  MapPin, 
  Search, 
  Award, 
  BookOpen, 
  AlertCircle,
  ExternalLink 
} from 'lucide-react';
import { PageLayout } from '../components/PageLayout';
import { api } from '../api';
import type { NursingSchool } from '../types/database';

const US_STATES = [
  'Alabama', 'Alaska', 'Arizona', 'Arkansas', 'California', 'Colorado', 'Connecticut', 'Delaware',
  'Florida', 'Georgia', 'Hawaii', 'Idaho', 'Illinois', 'Indiana', 'Iowa', 'Kansas', 'Kentucky',
  'Louisiana', 'Maine', 'Maryland', 'Massachusetts', 'Michigan', 'Minnesota', 'Mississippi',
  'Missouri', 'Montana', 'Nebraska', 'Nevada', 'New Hampshire', 'New Jersey', 'New Mexico',
  'New York', 'North Carolina', 'North Dakota', 'Ohio', 'Oklahoma', 'Oregon', 'Pennsylvania',
  'Rhode Island', 'South Carolina', 'South Dakota', 'Tennessee', 'Texas', 'Utah', 'Vermont',
  'Virginia', 'Washington', 'West Virginia', 'Wisconsin', 'Wyoming'
];

export default function NursingSchools() {
  const [selectedState, setSelectedState] = useState('');
  const [programFilter, setProgramFilter] = useState('All Programs');
  const [schools, setSchools] = useState<NursingSchool[]>([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState<string | null>(null);

  useEffect(() => {
    fetchSchools();
  }, [selectedState]); // Refetch when state changes

  async function fetchSchools() {
    try {
      setLoading(true);
      const data = await api.getNursingSchools(selectedState || undefined);
      setSchools(data);
      setError(null);
    } catch (err) {
      setError(err instanceof Error ? err.message : 'An error occurred while fetching schools');
    } finally {
      setLoading(false);
    }
  }

  const handleSearch = () => {
    fetchSchools();
  };

  const filteredSchools = schools.filter(school => {
    const matchesProgram = 
      programFilter === 'All Programs' ||
      school.programs.includes(programFilter);

    return matchesProgram;
  });

  if (loading) {
    return (
      <PageLayout>
        <div className="min-h-screen bg-gradient-to-br from-red-50 to-white">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
            <div className="text-center">Loading...</div>
          </div>
        </div>
      </PageLayout>
    );
  }

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
              Find Your Perfect Nursing School
            </h1>
            <p className="text-xl text-gray-600 max-w-3xl mx-auto">
              Compare nursing programs and discover your path to becoming a registered nurse.
            </p>
          </div>

          {error && (
            <div className="bg-red-50 border-l-4 border-red-500 p-4 mb-8 rounded-lg">
              <div className="flex items-start">
                <AlertCircle className="w-5 h-5 text-red-500 mr-2 mt-0.5" />
                <div>
                  <p className="font-medium text-red-800">Error</p>
                  <p className="text-sm text-red-700 mt-1">{error}</p>
                </div>
              </div>
            </div>
          )}

          <div className="bg-white rounded-xl shadow-lg p-6 mb-12">
            <div className="flex flex-col md:flex-row gap-4">
              <div className="flex-1 flex gap-4">
                <div className="relative flex-1">
                  <select
                    value={selectedState}
                    onChange={(e) => setSelectedState(e.target.value)}
                    className="w-full px-4 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-red-500 focus:border-transparent"
                  >
                    <option value="">All States</option>
                    {US_STATES.map((state) => (
                      <option key={state} value={state}>{state}</option>
                    ))}
                  </select>
                </div>
                <button
                  onClick={handleSearch}
                  className="px-6 py-2 bg-red-600 text-white rounded-lg hover:bg-red-700 transition-colors duration-200 flex items-center"
                >
                  <Search className="w-4 h-4 mr-2" />
                  Search
                </button>
              </div>
              <div className="flex gap-4">
                <select 
                  className="px-4 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-red-500 focus:border-transparent"
                  value={programFilter}
                  onChange={(e) => setProgramFilter(e.target.value)}
                >
                  <option>All Programs</option>
                  <option>BSN</option>
                  <option>MSN</option>
                  <option>DNP</option>
                </select>
              </div>
            </div>
          </div>

          {filteredSchools.length === 0 ? (
            <div className="text-center py-12">
              <GraduationCap className="w-16 h-16 text-gray-400 mx-auto mb-4" />
              <h3 className="text-xl font-medium text-gray-900">No Schools Found</h3>
              <p className="text-gray-600 mt-2">Try adjusting your search criteria</p>
            </div>
          ) : (
            <div className="grid grid-cols-1 gap-8 mb-16">
              {filteredSchools.map((school) => (
                <div key={school.id} className="bg-white rounded-xl shadow-lg overflow-hidden hover:shadow-xl transition-all duration-300">
                  <div className="p-6">
                    <div className="flex flex-col md:flex-row justify-between items-start gap-6">
                      <div className="flex-1">
                        <h3 className="text-xl font-bold text-gray-900">{school.name}</h3>
                        
                        <div className="mt-4 space-y-3">
                          <div className="flex items-start text-gray-600">
                            <MapPin className="w-5 h-5 mr-2 mt-1 flex-shrink-0" />
                            <span>{school.address}, {school.city}, {school.state} {school.zip_code}</span>
                          </div>
                        </div>

                        {school.description && (
                          <p className="mt-4 text-gray-600">{school.description}</p>
                        )}

                        <div className="mt-4 flex flex-wrap gap-2">
                          {school.programs.map((program, i) => (
                            <span
                              key={i}
                              className="px-3 py-1 bg-red-100 text-red-800 rounded-full text-sm"
                            >
                              {program}
                            </span>
                          ))}
                        </div>

                        {school.accreditation && (
                          <div className="mt-4 bg-gray-50 p-3 rounded-lg">
                            <p className="text-sm text-gray-600">Accreditation</p>
                            <p className="font-semibold text-gray-900">{school.accreditation}</p>
                          </div>
                        )}
                      </div>
                    </div>
                  </div>

                  <div className="px-6 py-4 bg-gray-50 flex justify-between items-center">
                    <button className="px-4 py-2 text-red-600 hover:text-red-700 font-medium">
                      Request Information
                    </button>
                    {school.website && (
                      <a
                        href={school.website}
                        target="_blank"
                        rel="noopener noreferrer"
                        className="inline-flex items-center px-4 py-2 bg-red-600 text-white rounded-lg hover:bg-red-700 transition-colors duration-200"
                      >
                        <ExternalLink className="w-4 h-4 mr-2" />
                        Visit Website
                      </a>
                    )}
                  </div>
                </div>
              ))}
            </div>
          )}

          <div className="bg-gradient-to-r from-red-600 to-pink-600 rounded-2xl shadow-xl overflow-hidden">
            <div className="px-8 py-12 text-center text-white">
              <h2 className="text-3xl font-bold mb-4">Need Help Choosing?</h2>
              <p className="text-lg mb-8">
                Get personalized school recommendations based on your goals and preferences.
              </p>
              <button className="bg-white text-red-600 px-8 py-3 rounded-lg font-semibold hover:bg-red-50 transition-all duration-200">
                Get Started
              </button>
            </div>
          </div>
        </div>
      </div>
    </PageLayout>
  );
}