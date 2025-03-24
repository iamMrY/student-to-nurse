/*
  # Add Quiz Tables and Functionality

  1. New Tables
    - quiz_questions: Stores all quiz questions for both HESI and TEAS
    - quiz_attempts: Tracks user quiz attempts and scores
    - quiz_answers: Stores user answers for each attempt

  2. Security
    - Enable RLS on all tables
    - Add policies for:
      - SELECT: Public can read questions
      - INSERT/SELECT: Users can manage their own attempts/answers
*/

-- Create quiz_questions table
CREATE TABLE quiz_questions (
  id uuid PRIMARY KEY DEFAULT gen_random_uuid(),
  exam_type text NOT NULL CHECK (exam_type IN ('HESI', 'TEAS')),
  subject text NOT NULL,
  topic text NOT NULL,
  question text NOT NULL,
  options text[] NOT NULL,
  correct_answer integer NOT NULL,
  explanation text,
  difficulty text CHECK (difficulty IN ('easy', 'medium', 'hard')),
  created_at timestamptz DEFAULT now()
);

-- Create quiz_attempts table
CREATE TABLE quiz_attempts (
  id uuid PRIMARY KEY DEFAULT gen_random_uuid(),
  user_id uuid REFERENCES auth.users(id) ON DELETE CASCADE,
  exam_type text NOT NULL CHECK (exam_type IN ('HESI', 'TEAS')),
  subject text NOT NULL,
  topic text,
  score integer NOT NULL,
  total_questions integer NOT NULL,
  completed_at timestamptz DEFAULT now(),
  created_at timestamptz DEFAULT now()
);

-- Create quiz_answers table
CREATE TABLE quiz_answers (
  id uuid PRIMARY KEY DEFAULT gen_random_uuid(),
  attempt_id uuid REFERENCES quiz_attempts(id) ON DELETE CASCADE,
  question_id uuid REFERENCES quiz_questions(id) ON DELETE CASCADE,
  selected_answer integer NOT NULL,
  is_correct boolean NOT NULL,
  created_at timestamptz DEFAULT now()
);

-- Enable RLS
ALTER TABLE quiz_questions ENABLE ROW LEVEL SECURITY;
ALTER TABLE quiz_attempts ENABLE ROW LEVEL SECURITY;
ALTER TABLE quiz_answers ENABLE ROW LEVEL SECURITY;

-- Create policies
CREATE POLICY "Allow public read access to questions"
  ON quiz_questions
  FOR SELECT
  TO public
  USING (true);

CREATE POLICY "Users can read own attempts"
  ON quiz_attempts
  FOR SELECT
  TO authenticated
  USING (auth.uid() = user_id);

CREATE POLICY "Users can create attempts"
  ON quiz_attempts
  FOR INSERT
  TO authenticated
  WITH CHECK (auth.uid() = user_id);

CREATE POLICY "Users can read own answers"
  ON quiz_answers
  FOR SELECT
  TO authenticated
  USING (EXISTS (
    SELECT 1 FROM quiz_attempts
    WHERE quiz_attempts.id = quiz_answers.attempt_id
    AND quiz_attempts.user_id = auth.uid()
  ));

CREATE POLICY "Users can create answers"
  ON quiz_answers
  FOR INSERT
  TO authenticated
  WITH CHECK (EXISTS (
    SELECT 1 FROM quiz_attempts
    WHERE quiz_attempts.id = quiz_answers.attempt_id
    AND quiz_attempts.user_id = auth.uid()
  ));

-- Create indexes
CREATE INDEX quiz_questions_exam_subject_idx ON quiz_questions(exam_type, subject);
CREATE INDEX quiz_attempts_user_exam_idx ON quiz_attempts(user_id, exam_type);
CREATE INDEX quiz_answers_attempt_idx ON quiz_answers(attempt_id);