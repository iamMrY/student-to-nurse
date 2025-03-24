/*
  # Create recommendations table with full schema

  1. New Tables
    - `recommendations`
      - `id` (uuid, primary key)
      - `title` (text)
      - `description` (text)
      - `type` (text)
      - `author` (text, nullable)
      - `link` (text)
      - `created_at` (timestamptz)
      - `updated_at` (timestamptz)
      - `created_by` (text)

  2. Security
    - Enable RLS on recommendations table
    - Add policy for public read access
*/

-- Create the recommendations table
CREATE TABLE IF NOT EXISTS recommendations (
  id uuid PRIMARY KEY DEFAULT gen_random_uuid(),
  title text NOT NULL,
  description text NOT NULL,
  type text NOT NULL,
  author text,
  link text NOT NULL,
  created_at timestamptz DEFAULT now(),
  updated_at timestamptz DEFAULT now(),
  created_by text NOT NULL DEFAULT 'system',
  CONSTRAINT valid_type CHECK (
    type IN ('TEXTBOOK', 'REFERENCE', 'SUPPLY', 'DEVICE', 'PERSONAL_ITEM')
  )
);

-- Create function to update timestamp
CREATE OR REPLACE FUNCTION update_updated_at_column()
RETURNS TRIGGER AS $$
BEGIN
    NEW.updated_at = now();
    RETURN NEW;
END;
$$ language 'plpgsql';

-- Create trigger to automatically update timestamp
CREATE TRIGGER update_recommendations_updated_at
    BEFORE UPDATE ON recommendations
    FOR EACH ROW
    EXECUTE FUNCTION update_updated_at_column();

-- Enable RLS
ALTER TABLE recommendations ENABLE ROW LEVEL SECURITY;

-- Create policy for public read access
CREATE POLICY "Allow public read access"
  ON recommendations
  FOR SELECT
  TO public
  USING (true);