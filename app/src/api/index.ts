import axios from 'axios';
import { supabase } from '../lib/supabase';
import type { 
  Task, 
  NursingSchool, 
  SuccessStory, 
  Employer,
  PracticeProblem,
  Topic,
  Subject 
} from '../types/database';

const API_URL = 'http://localhost:5000/api';

// Create axios instance with default config
const apiClient = axios.create({
  baseURL: API_URL,
  headers: {
    'Content-Type': 'application/json',
  },
});

// Add response interceptor for error handling
apiClient.interceptors.response.use(
  (response) => response,
  (error) => {
    console.error('API Error:', error.response?.data || error.message);
    throw new Error(error.response?.data?.error || 'An error occurred while fetching data');
  }
);

export const api = {
  // Nursing Schools
  getNursingSchools: async (state?: string): Promise<NursingSchool[]> => {
    const response = await apiClient.get('/nursing-schools', {
      params: { state }
    });
    return response.data;
  },
  
  getNursingSchool: async (id: string): Promise<NursingSchool> => {
    const response = await apiClient.get(`/nursing-schools/${id}`);
    return response.data;
  },

  // Success Stories
  getSuccessStories: async (): Promise<SuccessStory[]> => {
    const response = await apiClient.get('/success-stories');
    return response.data;
  },
  
  getSuccessStory: async (id: string): Promise<SuccessStory> => {
    const response = await apiClient.get(`/success-stories/${id}`);
    return response.data;
  },
  
  createSuccessStory: async (story: Omit<SuccessStory, 'id' | 'created_at'>): Promise<SuccessStory> => {
    const response = await apiClient.post('/success-stories', story);
    return response.data;
  },

  // Employers
  getEmployers: async (params?: { state?: string; sponsorship?: string }): Promise<Employer[]> => {
    const response = await apiClient.get('/employers', { params });
    return response.data;
  },

  // Practice Problems
  getPracticeProblems: async (topicCode: string, count: number = 5): Promise<PracticeProblem[]> => {
    const { data: topic, error: topicError } = await supabase
      .from('topics')
      .select('id')
      .eq('code', topicCode)
      .single();

    if (topicError) throw topicError;

    // Use ORDER BY RANDOM() instead of random()
    const { data: problems, error: problemsError } = await supabase
      .from('practice_problems')
      .select('*')
      .eq('topic_id', topic.id)
      .order('created_at', { ascending: false }) // First order by created_at to ensure consistent base ordering
      .limit(100) // Get more than we need for better randomization
      .then(result => {
        // Then shuffle in JavaScript
        if (result.data) {
          const shuffled = [...result.data].sort(() => Math.random() - 0.5);
          return {
            ...result,
            data: shuffled.slice(0, count) // Take only the number we need
          };
        }
        return result;
      });

    if (problemsError) throw problemsError;
    return problems;
  },

  // Topics
  getTopics: async (subjectCode: string): Promise<Topic[]> => {
    const { data: subject, error: subjectError } = await supabase
      .from('subjects')
      .select('id')
      .eq('code', subjectCode)
      .single();

    if (subjectError) throw subjectError;

    const { data: topics, error: topicsError } = await supabase
      .from('topics')
      .select('*')
      .eq('subject_id', subject.id);

    if (topicsError) throw topicsError;
    return topics;
  }
};