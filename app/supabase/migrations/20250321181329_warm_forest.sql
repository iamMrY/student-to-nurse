/*
  # Fix employers table RLS policies

  1. Changes
    - Add RLS policy for authenticated users to insert data
    - Keep existing public read access policy

  2. Security
    - Allow authenticated users to insert new employer records
    - Maintain public read access for all users
*/

-- Create policy to allow authenticated users to insert data
CREATE POLICY "Allow authenticated users to insert"
  ON employers
  FOR INSERT
  TO authenticated
  WITH CHECK (true);