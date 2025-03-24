import React, { useState, useEffect } from 'react';
import { Link } from 'react-router-dom';
import { ArrowLeft, ThumbsUp, BookOpen, Target, Compass } from 'lucide-react';
import { PageLayout } from '../components/PageLayout';
import { api } from '../api';
import type { SuccessStory } from '../types/database';

export default function SuccessStories() {
  const [stories, setStories] = useState<SuccessStory[]>([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState<string | null>(null);

  useEffect(() => {
    fetchStories();
  }, []);

  async function fetchStories() {
    try {
      const data = await api.getSuccessStories();
      setStories(data);
    } catch (err) {
      setError(err instanceof Error ? err.message : 'An error occurred while fetching stories');
    } finally {
      setLoading(false);
    }
  }

  if (loading) {
    return (
      <PageLayout>
        <div className="min-h-screen bg-gradient-to-br from-yellow-50 to-white">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
            <div className="text-center">Loading...</div>
          </div>
        </div>
      </PageLayout>
    );
  }

  return (
    <PageLayout>
      <div className="min-h-screen bg-gradient-to-br from-yellow-50 to-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
          <Link
            to="/"
            className="inline-flex items-center text-yellow-600 hover:text-yellow-700 mb-8 transition-colors duration-200"
          >
            <ArrowLeft className="w-5 h-5 mr-2" />
            Back to Home
          </Link>

          <div className="text-center mb-16">
            <h1 className="text-4xl font-extrabold text-gray-900 sm:text-5xl mb-4">
              Success Stories
            </h1>
            <p className="text-xl text-gray-600 max-w-3xl mx-auto">
              Real stories from nurses who successfully made the transition to practicing in the United States.
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

          <div className="grid grid-cols-1 md:grid-cols-2 gap-8 mb-16">
            {stories.map((story) => (
              <div key={story.id} className="bg-white rounded-xl shadow-lg overflow-hidden hover:shadow-xl transition-all duration-300">
                <div className="p-6">
                  <div className="mb-6">
                    <h3 className="text-xl font-bold text-gray-900">{story.name}</h3>
                    <p className="text-gray-600">{story.role}</p>
                    <p className="text-sm text-gray-500">Experience: {story.years_experience}</p>
                  </div>
                  <div className="mb-6">
                    <BookOpen className="w-8 h-8 text-yellow-500 mb-2" />
                    <p className="text-gray-600">{story.success_story}</p>
                  </div>
                </div>
                <div className="px-6 py-4 bg-gray-50">
                  <button className="w-full px-4 py-2 bg-yellow-600 text-white rounded-lg hover:bg-yellow-700 transition-colors duration-200">
                    Read Full Story
                  </button>
                </div>
              </div>
            ))}
          </div>

          <div className="bg-gradient-to-r from-yellow-600 to-orange-600 rounded-2xl shadow-xl overflow-hidden">
            <div className="px-8 py-12 text-center text-white">
              <Compass className="w-16 h-16 mx-auto mb-6" />
              <h2 className="text-3xl font-bold mb-4">Share Your Success Story</h2>
              <p className="text-lg mb-8">
                Inspire others by sharing your journey to becoming a nurse in the United States.
              </p>
              <button className="bg-white text-yellow-600 px-8 py-3 rounded-lg font-semibold hover:bg-yellow-50 transition-all duration-200">
                Submit Your Story
              </button>
            </div>
          </div>
        </div>
      </div>
    </PageLayout>
  );
}