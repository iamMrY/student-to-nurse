export type RecommendationType = 'TEXTBOOK' | 'REFERENCE' | 'SUPPLY' | 'DEVICE' | 'PERSONAL';

export interface Recommendation {
  id: string;
  title: string;
  description: string;
  link: string;
  type: RecommendationType;
  author?: string;
  created_at: string;
}

export interface NursingSchool {
  id: string;
  name: string;
  address: string;
  city: string;
  state: string;
  zip_code: string;
  programs: string[];
  accreditation: string | null;
  description: string | null;
  website: string | null;
  created_at: string;
}

export interface SuccessStory {
  id: string;
  name: string;
  role: string;
  years_experience: string;
  success_story: string;
  created_at: string;
}

export interface Employer {
  id: string;
  name: string;
  location: string;
  state: string;
  sponsorship_programs: string[];
  salary_range_start: number;
  salary_range_end: number;
  sign_on_bonus: number | null;
  benefits: string[];
  career_link: string;
  created_at: string;
}

export interface PracticeProblem {
  id: string;
  topic_id: string;
  question: string;
  options: string[];
  correct_answer: number;
  explanation: string | null;
  difficulty: 'easy' | 'medium' | 'hard';
  created_at: string;
  option_explanations: string[];
}

export interface Topic {
  id: string;
  subject_id: string;
  name: string;
  code: string;
  created_at: string;
}

export interface Subject {
  id: string;
  name: string;
  code: string;
  created_at: string;
}

export interface QuizQuestion {
  id: string;
  exam_type: 'HESI' | 'TEAS';
  subject: string;
  topic: string;
  question: string;
  options: string[];
  correct_answer: number;
  explanation: string | null;
  difficulty: 'easy' | 'medium' | 'hard';
  created_at: string;
}

export interface QuizAttempt {
  id: string;
  user_id: string;
  exam_type: 'HESI' | 'TEAS';
  subject: string;
  topic: string | null;
  score: number;
  total_questions: number;
  completed_at: string;
  created_at: string;
}

export interface QuizAnswer {
  id: string;
  attempt_id: string;
  question_id: string;
  selected_answer: number;
  is_correct: boolean;
  created_at: string;
}