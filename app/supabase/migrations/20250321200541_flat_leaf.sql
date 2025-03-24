/*
  # Add Practice Problems Schema

  1. New Tables
    - `subjects` - Stores main subject areas (Math, Reading, etc.)
      - `id` (uuid, primary key)
      - `name` (text)
      - `code` (text, unique identifier)
      - `created_at` (timestamp)
    
    - `topics` - Stores topics within subjects
      - `id` (uuid, primary key) 
      - `subject_id` (uuid, references subjects)
      - `name` (text)
      - `code` (text, unique identifier)
      - `created_at` (timestamp)

    - `practice_problems` - Stores practice problems
      - `id` (uuid, primary key)
      - `topic_id` (uuid, references topics)
      - `question` (text)
      - `options` (text array)
      - `correct_answer` (integer)
      - `explanation` (text)
      - `difficulty` (text)
      - `created_at` (timestamp)

  2. Security
    - Enable RLS on all tables
    - Add policies for public read access
*/

-- Create subjects table
CREATE TABLE subjects (
  id uuid PRIMARY KEY DEFAULT gen_random_uuid(),
  name text NOT NULL,
  code text UNIQUE NOT NULL,
  created_at timestamptz DEFAULT now()
);

ALTER TABLE subjects ENABLE ROW LEVEL SECURITY;

CREATE POLICY "Allow public read access"
  ON subjects
  FOR SELECT
  TO public
  USING (true);

-- Create topics table
CREATE TABLE topics (
  id uuid PRIMARY KEY DEFAULT gen_random_uuid(),
  subject_id uuid REFERENCES subjects(id) ON DELETE CASCADE,
  name text NOT NULL,
  code text UNIQUE NOT NULL,
  created_at timestamptz DEFAULT now()
);

ALTER TABLE topics ENABLE ROW LEVEL SECURITY;

CREATE POLICY "Allow public read access"
  ON topics
  FOR SELECT
  TO public
  USING (true);

-- Create practice_problems table
CREATE TABLE practice_problems (
  id uuid PRIMARY KEY DEFAULT gen_random_uuid(),
  topic_id uuid REFERENCES topics(id) ON DELETE CASCADE,
  question text NOT NULL,
  options text[] NOT NULL,
  correct_answer integer NOT NULL,
  explanation text,
  difficulty text CHECK (difficulty IN ('easy', 'medium', 'hard')),
  created_at timestamptz DEFAULT now()
);

ALTER TABLE practice_problems ENABLE ROW LEVEL SECURITY;

CREATE POLICY "Allow public read access"
  ON practice_problems
  FOR SELECT
  TO public
  USING (true);

-- Insert initial data for math subject and topics
INSERT INTO subjects (name, code) VALUES
('Mathematics', 'math');

INSERT INTO topics (subject_id, name, code)
SELECT 
  s.id,
  'Addition and Subtraction',
  'addition-subtraction'
FROM subjects s
WHERE s.code = 'math';

-- Insert sample practice problems
INSERT INTO practice_problems (topic_id, question, options, correct_answer, explanation, difficulty)
SELECT
  t.id,
  'Calculate: 2,345 + 6,789',
  ARRAY['9,134', '9,234', '8,134', '9,124'],
  0,
  'Add digits from right to left, carrying when necessary: 9+5=14 (write 4, carry 1), 8+4+1=13 (write 3, carry 1), 7+3+1=11 (write 1, carry 1), 6+2+1=9',
  'medium'
FROM topics t
WHERE t.code = 'addition-subtraction'
UNION ALL
SELECT
  t.id,
  'Calculate: 8,000 - 3,456',
  ARRAY['4,544', '4,654', '5,544', '4,444'],
  0,
  'Subtract digits from right to left, borrowing when necessary',
  'medium'
FROM topics t
WHERE t.code = 'addition-subtraction'
UNION ALL
SELECT
  t.id,
  'Calculate: 7,234 + 8,987',
  ARRAY['15,221', '16,221', '16,121', '15,321'],
  1,
  'Add digits from right to left, carrying when necessary',
  'medium'
FROM topics t
WHERE t.code = 'addition-subtraction';