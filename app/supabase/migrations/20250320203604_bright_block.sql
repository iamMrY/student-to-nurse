/*
  # Create nursing schools table

  1. New Tables
    - `nursing_schools`
      - `id` (uuid, primary key)
      - `name` (text)
      - `address` (text)
      - `city` (text) 
      - `state` (text)
      - `zip_code` (text)
      - `programs` (text[])
      - `accreditation` (text)
      - `description` (text)
      - `website` (text)
      - `created_at` (timestamp)

  2. Security
    - Enable RLS on `nursing_schools` table
    - Add policy for public read access
*/

CREATE TABLE IF NOT EXISTS nursing_schools (
  id uuid PRIMARY KEY DEFAULT gen_random_uuid(),
  name text NOT NULL,
  address text NOT NULL,
  city text NOT NULL,
  state text NOT NULL,
  zip_code text NOT NULL,
  programs text[] NOT NULL,
  accreditation text,
  description text,
  website text,
  created_at timestamptz DEFAULT now()
);

ALTER TABLE nursing_schools ENABLE ROW LEVEL SECURITY;

CREATE POLICY "Allow public read access"
  ON nursing_schools
  FOR SELECT
  TO public
  USING (true);