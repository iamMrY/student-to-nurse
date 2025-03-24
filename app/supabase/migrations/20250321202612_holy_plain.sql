/*
  # Fix user progress table and policies

  1. Changes
    - Drop existing user_progress table if exists
    - Recreate user_progress table with proper structure
    - Add proper RLS policies for authenticated users
    - Add unique constraint on user_id and topic_code

  2. Security
    - Enable RLS
    - Add policies for:
      - SELECT: Users can read their own progress
      - INSERT: Users can create their own progress records
      - UPDATE: Users can update their own progress
*/

-- Drop existing table and policies if they exist
DROP TABLE IF EXISTS user_progress CASCADE;

-- Create user_progress table
CREATE TABLE user_progress (
  id uuid PRIMARY KEY DEFAULT gen_random_uuid(),
  user_id uuid REFERENCES auth.users(id) ON DELETE CASCADE,
  topic_code text NOT NULL,
  completed boolean NOT NULL DEFAULT false,
  completed_at timestamptz,
  created_at timestamptz DEFAULT now(),
  UNIQUE(user_id, topic_code)
);

-- Enable RLS
ALTER TABLE user_progress ENABLE ROW LEVEL SECURITY;

-- Create policies
CREATE POLICY "Users can read own progress"
  ON user_progress
  FOR SELECT
  TO authenticated
  USING (auth.uid() = user_id);

CREATE POLICY "Users can insert own progress"
  ON user_progress
  FOR INSERT
  TO authenticated
  WITH CHECK (auth.uid() = user_id);

CREATE POLICY "Users can update own progress"
  ON user_progress
  FOR UPDATE
  TO authenticated
  USING (auth.uid() = user_id)
  WITH CHECK (auth.uid() = user_id);

-- Create index for faster lookups
CREATE INDEX user_progress_user_topic_idx ON user_progress(user_id, topic_code);