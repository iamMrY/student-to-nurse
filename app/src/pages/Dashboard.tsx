import React, { useState, useEffect } from 'react';
import { PageLayout } from '../components/PageLayout';
import { useAuth } from '../contexts/AuthContext';
import { 
  User, 
  BookOpen, 
  Lock,
  Eye,
  EyeOff,
  Save,
  ChevronDown,
  ChevronUp
} from 'lucide-react';
import { supabase } from '../lib/supabase';
import toast from 'react-hot-toast';

type TabType = 'account' | 'progress';

interface Profile {
  first_name: string;
  middle_name: string | null;
  last_name: string;
}

export default function Dashboard() {
  const { user } = useAuth();
  const [expandedTab, setExpandedTab] = useState<TabType | null>(null);
  const [profile, setProfile] = useState<Profile | null>(null);
  const [loading, setLoading] = useState(true);
  const [showCurrentPassword, setShowCurrentPassword] = useState(false);
  const [showNewPassword, setShowNewPassword] = useState(false);
  const [showConfirmPassword, setShowConfirmPassword] = useState(false);
  const [isUpdating, setIsUpdating] = useState(false);

  // Password change state
  const [currentPassword, setCurrentPassword] = useState('');
  const [newPassword, setNewPassword] = useState('');
  const [confirmPassword, setConfirmPassword] = useState('');

  // Progress tracking state
  const [hesiProgress, setHesiProgress] = useState({
    mathematics: 0,
    readingComprehension: 0,
    grammar: 0,
    vocabulary: 0,
    biology: 0,
    chemistry: 0,
    anatomyPhysiology: 0
  });

  const [teasProgress, setTeasProgress] = useState({
    math: 0,
    reading: 0,
    science: 0,
    english: 0
  });

  useEffect(() => {
    fetchProfile();
  }, [user]);

  const fetchProfile = async () => {
    try {
      if (!user) return;

      const { data, error } = await supabase
        .from('profiles')
        .select('*')
        .eq('id', user.id)
        .single();

      if (error) throw error;
      setProfile(data);
    } catch (error) {
      console.error('Error fetching profile:', error);
      toast.error('Failed to load profile');
    } finally {
      setLoading(false);
    }
  };

  const handlePasswordChange = async (e: React.FormEvent) => {
    e.preventDefault();
    setIsUpdating(true);

    try {
      if (newPassword !== confirmPassword) {
        throw new Error('New passwords do not match');
      }

      const { error } = await supabase.auth.updateUser({
        password: newPassword
      });

      if (error) throw error;

      toast.success('Password updated successfully');
      setCurrentPassword('');
      setNewPassword('');
      setConfirmPassword('');
    } catch (error) {
      toast.error(error instanceof Error ? error.message : 'Failed to update password');
    } finally {
      setIsUpdating(false);
    }
  };

  const toggleTab = (tab: TabType) => {
    setExpandedTab(expandedTab === tab ? null : tab);
  };

  if (loading) {
    return (
      <PageLayout>
        <div className="min-h-screen bg-gradient-to-br from-blue-50 to-white">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
            <div className="text-center">Loading...</div>
          </div>
        </div>
      </PageLayout>
    );
  }

  return (
    <PageLayout>
      <div className="min-h-screen bg-gradient-to-br from-blue-50 to-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
          <div className="flex justify-between items-center mb-8">
            <div>
              <h1 className="text-3xl font-bold text-gray-900">
                Welcome back, {profile?.first_name || 'User'}!
              </h1>
            </div>
          </div>

          {/* Account Management Tab */}
          <div className="mb-4">
            <button
              onClick={() => toggleTab('account')}
              className="w-full flex items-center justify-between px-6 py-4 bg-white rounded-lg shadow-md hover:shadow-lg transition-all duration-200"
            >
              <div className="flex items-center">
                <User className="w-6 h-6 text-blue-600 mr-3" />
                <span className="text-lg font-semibold text-gray-900">Account Management</span>
              </div>
              {expandedTab === 'account' ? (
                <ChevronUp className="w-5 h-5 text-gray-500" />
              ) : (
                <ChevronDown className="w-5 h-5 text-gray-500" />
              )}
            </button>

            {expandedTab === 'account' && (
              <div className="mt-4 bg-white rounded-xl shadow-lg p-8">
                {/* Profile Information */}
                <div className="mb-8">
                  <h2 className="text-2xl font-bold text-gray-900 mb-6 flex items-center">
                    <User className="w-6 h-6 mr-2 text-blue-600" />
                    Profile Information
                  </h2>
                  <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                    <div>
                      <label className="block text-sm font-medium text-gray-700">Email</label>
                      <p className="mt-1 text-gray-900">{user?.email}</p>
                    </div>
                    <div>
                      <label className="block text-sm font-medium text-gray-700">Name</label>
                      <p className="mt-1 text-gray-900">
                        {profile?.first_name} {profile?.middle_name ? `${profile.middle_name} ` : ''}{profile?.last_name}
                      </p>
                    </div>
                  </div>
                </div>

                {/* Password Change */}
                <div>
                  <h2 className="text-2xl font-bold text-gray-900 mb-6 flex items-center">
                    <Lock className="w-6 h-6 mr-2 text-blue-600" />
                    Change Password
                  </h2>
                  <form onSubmit={handlePasswordChange} className="space-y-6 max-w-md">
                    <div>
                      <label className="block text-sm font-medium text-gray-700">
                        Current Password
                      </label>
                      <div className="mt-1 relative">
                        <input
                          type={showCurrentPassword ? 'text' : 'password'}
                          value={currentPassword}
                          onChange={(e) => setCurrentPassword(e.target.value)}
                          className="block w-full pr-10 border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-transparent"
                          required
                        />
                        <button
                          type="button"
                          onClick={() => setShowCurrentPassword(!showCurrentPassword)}
                          className="absolute inset-y-0 right-0 pr-3 flex items-center"
                        >
                          {showCurrentPassword ? (
                            <EyeOff className="h-5 w-5 text-gray-400" />
                          ) : (
                            <Eye className="h-5 w-5 text-gray-400" />
                          )}
                        </button>
                      </div>
                    </div>

                    <div>
                      <label className="block text-sm font-medium text-gray-700">
                        New Password
                      </label>
                      <div className="mt-1 relative">
                        <input
                          type={showNewPassword ? 'text' : 'password'}
                          value={newPassword}
                          onChange={(e) => setNewPassword(e.target.value)}
                          className="block w-full pr-10 border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-transparent"
                          required
                        />
                        <button
                          type="button"
                          onClick={() => setShowNewPassword(!showNewPassword)}
                          className="absolute inset-y-0 right-0 pr-3 flex items-center"
                        >
                          {showNewPassword ? (
                            <EyeOff className="h-5 w-5 text-gray-400" />
                          ) : (
                            <Eye className="h-5 w-5 text-gray-400" />
                          )}
                        </button>
                      </div>
                    </div>

                    <div>
                      <label className="block text-sm font-medium text-gray-700">
                        Confirm New Password
                      </label>
                      <div className="mt-1 relative">
                        <input
                          type={showConfirmPassword ? 'text' : 'password'}
                          value={confirmPassword}
                          onChange={(e) => setConfirmPassword(e.target.value)}
                          className="block w-full pr-10 border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-transparent"
                          required
                        />
                        <button
                          type="button"
                          onClick={() => setShowConfirmPassword(!showConfirmPassword)}
                          className="absolute inset-y-0 right-0 pr-3 flex items-center"
                        >
                          {showConfirmPassword ? (
                            <EyeOff className="h-5 w-5 text-gray-400" />
                          ) : (
                            <Eye className="h-5 w-5 text-gray-400" />
                          )}
                        </button>
                      </div>
                    </div>

                    <button
                      type="submit"
                      disabled={isUpdating}
                      className="w-full flex items-center justify-center px-4 py-2 border border-transparent rounded-lg text-white bg-blue-600 hover:bg-blue-700 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-blue-500 disabled:opacity-50"
                    >
                      <Save className="w-5 h-5 mr-2" />
                      {isUpdating ? 'Updating...' : 'Update Password'}
                    </button>
                  </form>
                </div>
              </div>
            )}
          </div>

          {/* Progress Tracking Tab */}
          <div>
            <button
              onClick={() => toggleTab('progress')}
              className="w-full flex items-center justify-between px-6 py-4 bg-white rounded-lg shadow-md hover:shadow-lg transition-all duration-200"
            >
              <div className="flex items-center">
                <BookOpen className="w-6 h-6 text-blue-600 mr-3" />
                <span className="text-lg font-semibold text-gray-900">Progress Tracking</span>
              </div>
              {expandedTab === 'progress' ? (
                <ChevronUp className="w-5 h-5 text-gray-500" />
              ) : (
                <ChevronDown className="w-5 h-5 text-gray-500" />
              )}
            </button>

            {expandedTab === 'progress' && (
              <div className="mt-4 bg-white rounded-xl shadow-lg p-8">
                {/* HESI Progress */}
                <div className="mb-8">
                  <h2 className="text-2xl font-bold text-gray-900 mb-6 flex items-center">
                    <BookOpen className="w-6 h-6 mr-2 text-blue-600" />
                    HESI Progress
                  </h2>
                  <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                    <div>
                      <h3 className="text-lg font-medium text-gray-900 mb-4">Mathematics</h3>
                      <div className="h-4 bg-gray-200 rounded-full overflow-hidden">
                        <div 
                          className="h-full bg-blue-600 rounded-full"
                          style={{ width: `${hesiProgress.mathematics}%` }}
                        />
                      </div>
                      <p className="mt-2 text-sm text-gray-600">{hesiProgress.mathematics}% Complete</p>
                    </div>
                    <div>
                      <h3 className="text-lg font-medium text-gray-900 mb-4">Reading Comprehension</h3>
                      <div className="h-4 bg-gray-200 rounded-full overflow-hidden">
                        <div 
                          className="h-full bg-blue-600 rounded-full"
                          style={{ width: `${hesiProgress.readingComprehension}%` }}
                        />
                      </div>
                      <p className="mt-2 text-sm text-gray-600">{hesiProgress.readingComprehension}% Complete</p>
                    </div>
                    <div>
                      <h3 className="text-lg font-medium text-gray-900 mb-4">Grammar</h3>
                      <div className="h-4 bg-gray-200 rounded-full overflow-hidden">
                        <div 
                          className="h-full bg-blue-600 rounded-full"
                          style={{ width: `${hesiProgress.grammar}%` }}
                        />
                      </div>
                      <p className="mt-2 text-sm text-gray-600">{hesiProgress.grammar}% Complete</p>
                    </div>
                    <div>
                      <h3 className="text-lg font-medium text-gray-900 mb-4">Vocabulary</h3>
                      <div className="h-4 bg-gray-200 rounded-full overflow-hidden">
                        <div 
                          className="h-full bg-blue-600 rounded-full"
                          style={{ width: `${hesiProgress.vocabulary}%` }}
                        />
                      </div>
                      <p className="mt-2 text-sm text-gray-600">{hesiProgress.vocabulary}% Complete</p>
                    </div>
                    <div>
                      <h3 className="text-lg font-medium text-gray-900 mb-4">Biology</h3>
                      <div className="h-4 bg-gray-200 rounded-full overflow-hidden">
                        <div 
                          className="h-full bg-blue-600 rounded-full"
                          style={{ width: `${hesiProgress.biology}%` }}
                        />
                      </div>
                      <p className="mt-2 text-sm text-gray-600">{hesiProgress.biology}% Complete</p>
                    </div>
                    <div>
                      <h3 className="text-lg font-medium text-gray-900 mb-4">Chemistry</h3>
                      <div className="h-4 bg-gray-200 rounded-full overflow-hidden">
                        <div 
                          className="h-full bg-blue-600 rounded-full"
                          style={{ width: `${hesiProgress.chemistry}%` }}
                        />
                      </div>
                      <p className="mt-2 text-sm text-gray-600">{hesiProgress.chemistry}% Complete</p>
                    </div>
                    <div>
                      <h3 className="text-lg font-medium text-gray-900 mb-4">Anatomy & Physiology</h3>
                      <div className="h-4 bg-gray-200 rounded-full overflow-hidden">
                        <div 
                          className="h-full bg-blue-600 rounded-full"
                          style={{ width: `${hesiProgress.anatomyPhysiology}%` }}
                        />
                      </div>
                      <p className="mt-2 text-sm text-gray-600">{hesiProgress.anatomyPhysiology}% Complete</p>
                    </div>
                  </div>
                </div>

                {/* TEAS Progress */}
                <div>
                  <h2 className="text-2xl font-bold text-gray-900 mb-6 flex items-center">
                    <BookOpen className="w-6 h-6 mr-2 text-blue-600" />
                    TEAS Progress
                  </h2>
                  <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                    <div>
                      <h3 className="text-lg font-medium text-gray-900 mb-4">Mathematics</h3>
                      <div className="h-4 bg-gray-200 rounded-full overflow-hidden">
                        <div 
                          className="h-full bg-blue-600 rounded-full"
                          style={{ width: `${teasProgress.math}%` }}
                        />
                      </div>
                      <p className="mt-2 text-sm text-gray-600">{teasProgress.math}% Complete</p>
                    </div>
                    <div>
                      <h3 className="text-lg font-medium text-gray-900 mb-4">Reading</h3>
                      <div className="h-4 bg-gray-200 rounded-full overflow-hidden">
                        <div 
                          className="h-full bg-blue-600 rounded-full"
                          style={{ width: `${teasProgress.reading}%` }}
                        />
                      </div>
                      <p className="mt-2 text-sm text-gray-600">{teasProgress.reading}% Complete</p>
                    </div>
                    <div>
                      <h3 className="text-lg font-medium text-gray-900 mb-4">Science</h3>
                      <div className="h-4 bg-gray-200 rounded-full overflow-hidden">
                        <div 
                          className="h-full bg-blue-600 rounded-full"
                          style={{ width: `${teasProgress.science}%` }}
                        />
                      </div>
                      <p className="mt-2 text-sm text-gray-600">{teasProgress.science}% Complete</p>
                    </div>
                    <div>
                      <h3 className="text-lg font-medium text-gray-900 mb-4">English</h3>
                      <div className="h-4 bg-gray-200 rounded-full overflow-hidden">
                        <div 
                          className="h-full bg-blue-600 rounded-full"
                          style={{ width: `${teasProgress.english}%` }}
                        />
                      </div>
                      <p className="mt-2 text-sm text-gray-600">{teasProgress.english}% Complete</p>
                    </div>
                  </div>
                </div>
              </div>
            )}
          </div>
        </div>
      </div>
    </PageLayout>
  );
}