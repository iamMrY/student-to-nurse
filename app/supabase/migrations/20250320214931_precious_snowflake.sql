/*
  # Create success stories table

  1. New Tables
    - `success_stories`
      - `id` (uuid, primary key)
      - `name` (text)
      - `role` (text)
      - `years_experience` (text)
      - `success_story` (text)
      - `created_at` (timestamp)

  2. Security
    - Enable RLS on `success_stories` table
    - Add policy for public read access
*/

CREATE TABLE IF NOT EXISTS success_stories (
  id uuid PRIMARY KEY DEFAULT gen_random_uuid(),
  name text NOT NULL,
  role text NOT NULL,
  years_experience text NOT NULL,
  success_story text NOT NULL,
  created_at timestamptz DEFAULT now()
);

ALTER TABLE success_stories ENABLE ROW LEVEL SECURITY;

CREATE POLICY "Allow public read access"
  ON success_stories
  FOR SELECT
  TO public
  USING (true);