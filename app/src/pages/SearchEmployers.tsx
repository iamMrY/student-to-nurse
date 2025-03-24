import React, { useState, useEffect } from 'react';
import { Link } from 'react-router-dom';
import { ArrowLeft, Search, MapPin, DollarSign, Building, ExternalLink } from 'lucide-react';
import { PageLayout } from '../components/PageLayout';
import { api } from '../api';
import type { Employer } from '../types/database';

export default function SearchEmployers() {
  const [selectedState, setSelectedState] = useState('');
  const [sponsorshipFilter, setSponsorshipFilter] = useState('');
  const [searchQuery, setSearchQuery] = useState('');
  const [employers, setEmployers] = useState<Employer[]>([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState<string | null>(null);

  const states = [
    "All Locations",
    "Alabama", "Alaska", "Arizona", "Arkansas", "California", "Colorado", "Connecticut", 
    "Delaware", "Florida", "Georgia", "Hawaii", "Idaho", "Illinois", "Indiana", "Iowa", 
    "Kansas", "Kentucky", "Louisiana", "Maine", "Maryland", "Massachusetts", "Michigan", 
    "Minnesota", "Mississippi", "Missouri", "Montana", "Nebraska", "Nevada", "New Hampshire", 
    "New Jersey", "New Mexico", "New York", "North Carolina", "North Dakota", "Ohio", 
    "Oklahoma", "Oregon", "Pennsylvania", "Rhode Island", "South Carolina", "South Dakota", 
    "Tennessee", "Texas", "Utah", "Vermont", "Virginia", "Washington", "West Virginia", 
    "Wisconsin", "Wyoming"
  ];

  useEffect(() => {
    fetchEmployers();
  }, [selectedState, sponsorshipFilter]);

  const fetchEmployers = async () => {
    try {
      setLoading(true);
      const params: { state?: string; sponsorship?: string } = {};
      
      if (selectedState && selectedState !== 'All Locations') {
        params.state = selectedState;
      }
      
      if (sponsorshipFilter) {
        params.sponsorship = sponsorshipFilter;
      }
      
      const data = await api.getEmployers(params);
      setEmployers(data);
      setError(null);
    } catch (err) {
      setError(err instanceof Error ? err.message : 'An error occurred while fetching employers');
    } finally {
      setLoading(false);
    }
  };

  const handleSearch = () => {
    fetchEmployers();
  };

  const filteredEmployers = employers.filter(employer => {
    return searchQuery === '' || 
      employer.name.toLowerCase().includes(searchQuery.toLowerCase());
  });

  const formatSalaryRange = (start: number, end: number) => {
    return `$${start.toLocaleString()} - $${end.toLocaleString()}`;
  };

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
              Search Healthcare Employers
            </h1>
            <p className="text-xl text-gray-600 max-w-3xl mx-auto">
              Find your ideal workplace by exploring healthcare facilities across the United States.
            </p>
          </div>

          {error && (
            <div className="bg-red-50 border-l-4 border-red-500 p-4 mb-8 rounded-lg">
              <div className="flex">
                <div className="ml-3">
                  <p className="text-sm text-red-700">{error}</p>
                </div>
              </div>
            </div>
          )}

          <div className="bg-white rounded-xl shadow-lg p-6 mb-12">
            <div className="grid grid-cols-1 md:grid-cols-4 gap-4">
              <div className="col-span-2">
                <div className="relative">
                  <Search className="absolute left-3 top-1/2 transform -translate-y-1/2 text-gray-400 w-5 h-5" />
                  <input
                    type="text"
                    placeholder="Search by employer name or keyword"
                    value={searchQuery}
                    onChange={(e) => setSearchQuery(e.target.value)}
                    className="w-full pl-10 pr-4 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-red-500 focus:border-transparent"
                  />
                </div>
              </div>
              <div>
                <select
                  value={selectedState}
                  onChange={(e) => setSelectedState(e.target.value)}
                  className="w-full px-4 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-red-500 focus:border-transparent"
                >
                  {states.map((state) => (
                    <option key={state} value={state}>{state}</option>
                  ))}
                </select>
              </div>
              <div>
                <select
                  value={sponsorshipFilter}
                  onChange={(e) => setSponsorshipFilter(e.target.value)}
                  className="w-full px-4 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-red-500 focus:border-transparent"
                >
                  <option value="">All Sponsorship Types</option>
                  <option value="H-1B">H-1B Visa</option>
                  <option value="TN">TN Visa</option>
                  <option value="Green Card">Green Card</option>
                </select>
              </div>
            </div>
            <div className="mt-4">
              <button
                onClick={handleSearch}
                className="w-full md:w-auto px-6 py-2 bg-red-600 text-white rounded-lg hover:bg-red-700 transition-colors duration-200 flex items-center justify-center"
              >
                <Search className="w-4 h-4 mr-2" />
                Search
              </button>
            </div>
          </div>

          <div className="grid grid-cols-1 gap-8 mb-16">
            {filteredEmployers.map((employer) => (
              <div key={employer.id} className="bg-white rounded-xl shadow-lg overflow-hidden hover:shadow-xl transition-all duration-300">
                <div className="p-6">
                  <div className="flex items-center justify-between mb-4">
                    <div className="flex items-center">
                      <Building className="w-8 h-8 text-red-500" />
                      <div className="ml-3">
                        <h3 className="text-xl font-bold text-gray-900">{employer.name}</h3>
                        <div className="flex items-center text-gray-500">
                          <MapPin className="w-4 h-4 mr-1" />
                          <span>{employer.location}</span>
                        </div>
                      </div>
                    </div>
                  </div>

                  <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
                    <div>
                      <h4 className="font-semibold text-gray-700 mb-2">Sponsorship Programs:</h4>
                      <div className="flex flex-wrap gap-2">
                        {employer.sponsorship_programs.map((program, i) => (
                          <span
                            key={i}
                            className="px-3 py-1 bg-green-100 text-green-700 rounded-full text-sm"
                          >
                            {program}
                          </span>
                        ))}
                      </div>
                    </div>

                    <div className="col-span-2">
                      <h4 className="font-semibold text-gray-700 mb-2">Benefits:</h4>
                      <div className="space-y-2">
                        <div className="flex items-center text-gray-600">
                          <DollarSign className="w-4 h-4 text-green-500 mr-2" />
                          <span className="font-medium">Salary Range:</span>
                          <span className="ml-2">
                            {formatSalaryRange(employer.salary_range_start, employer.salary_range_end)}
                          </span>
                        </div>
                        {employer.sign_on_bonus && (
                          <div className="flex items-center text-gray-600">
                            <DollarSign className="w-4 h-4 text-green-500 mr-2" />
                            <span className="font-medium">Sign-on Bonus:</span>
                            <span className="ml-2">${employer.sign_on_bonus.toLocaleString()}</span>
                          </div>
                        )}
                        <div className="flex flex-wrap gap-2 mt-2">
                          {employer.benefits.map((benefit, i) => (
                            <span
                              key={i}
                              className="px-3 py-1 bg-red-100 text-red-700 rounded-full text-sm"
                            >
                              {benefit}
                            </span>
                          ))}
                        </div>
                      </div>
                    </div>
                  </div>
                </div>

                <div className="px-6 py-4 bg-gray-50">
                  <a
                    href={employer.career_link}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="w-full flex items-center justify-center px-4 py-2 bg-red-600 text-white rounded-lg hover:bg-red-700 transition-colors duration-200"
                  >
                    <ExternalLink className="w-4 h-4 mr-2" />
                    View Career Opportunities
                  </a>
                </div>
              </div>
            ))}
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
            <div className="bg-gradient-to-br from-red-600 to-pink-600 rounded-xl shadow-xl text-white p-8">
              <h3 className="text-2xl font-bold mb-4">Get Matched with Employers</h3>
              <p className="mb-6">
                Let us help you find the perfect workplace based on your preferences and experience.
              </p>
              <button className="w-full px-6 py-3 bg-white text-red-600 rounded-lg hover:bg-red-50 transition-all duration-200 font-semibold">
                Start Matching
              </button>
            </div>

            <div className="bg-white rounded-xl shadow-xl p-8">
              <h3 className="text-2xl font-bold text-gray-900 mb-4">For Employers</h3>
              <p className="text-gray-600 mb-6">
                Looking to hire qualified nursing professionals? Post your opportunities here.
              </p>
              <button className="w-full px-6 py-3 bg-gradient-to-r from-red-600 to-pink-600 text-white rounded-lg hover:from-red-700 hover:to-pink-700 transition-all duration-200">
                Post Jobs
              </button>
            </div>
          </div>
        </div>
      </div>
    </PageLayout>
  );
}