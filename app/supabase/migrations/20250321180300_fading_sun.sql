/*
  # Create employers table

  1. New Tables
    - `employers`
      - `id` (uuid, primary key)
      - `name` (text)
      - `location` (text)
      - `state` (text)
      - `sponsorship_programs` (text[])
      - `salary_range_start` (integer)
      - `salary_range_end` (integer)
      - `sign_on_bonus` (integer)
      - `benefits` (text[])
      - `career_link` (text)
      - `created_at` (timestamp)

  2. Security
    - Enable RLS on employers table
    - Add policy for public read access
*/

CREATE TABLE employers (
  id uuid PRIMARY KEY DEFAULT gen_random_uuid(),
  name text NOT NULL,
  location text NOT NULL,
  state text NOT NULL,
  sponsorship_programs text[] NOT NULL,
  salary_range_start integer NOT NULL,
  salary_range_end integer NOT NULL,
  sign_on_bonus integer,
  benefits text[] NOT NULL,
  career_link text NOT NULL,
  created_at timestamptz DEFAULT now()
);

-- Enable RLS
ALTER TABLE employers ENABLE ROW LEVEL SECURITY;

-- Create policy for public read access
CREATE POLICY "Allow public read access"
  ON employers
  FOR SELECT
  TO public
  USING (true);

-- Insert sample data
INSERT INTO employers (
  name, location, state, sponsorship_programs, 
  salary_range_start, salary_range_end, sign_on_bonus, 
  benefits, career_link
) VALUES
  (
    'Mayo Clinic',
    'Rochester, MN',
    'Minnesota',
    ARRAY['H-1B', 'Green Card'],
    85000, 120000, 10000,
    ARRAY['Relocation assistance', 'Housing stipend', 'Education support'],
    'https://jobs.mayoclinic.org/'
  ),
  (
    'Cleveland Clinic',
    'Cleveland, OH',
    'Ohio',
    ARRAY['H-1B', 'TN', 'Green Card'],
    80000, 115000, 8000,
    ARRAY['Comprehensive benefits', 'Career development', 'Education assistance'],
    'https://jobs.clevelandclinic.org/'
  ),
  (
    'Johns Hopkins',
    'Baltimore, MD',
    'Maryland',
    ARRAY['H-1B', 'Green Card'],
    82000, 118000, 12000,
    ARRAY['Research opportunities', 'Advanced training', 'Leadership programs'],
    'https://jobs.hopkinsmedicine.org/'
  );