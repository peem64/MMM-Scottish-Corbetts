/*
  # Create corbetts table for Scottish Corbetts

  1. New Tables
    - `corbetts`
      - `id` (integer, primary key)
      - `name` (text, unique) - Name of the corbett
      - `location` (text) - Specific location description
      - `region` (text) - General region (e.g., "Highlands", "Southern Uplands")
      - `height` (integer) - Height in meters
      - `prominence` (integer) - Prominence in meters
      - `classification` (text) - Mountain classification
      - `estimated_time` (text) - Estimated time to complete
      - `description` (text) - Detailed description
      - `difficulty_rating` (integer) - Difficulty rating 1-5
      - `popular_routes` (text[]) - Array of popular routes
      - `best_seasons` (text[]) - Array of best seasons to climb
      - `grid_reference` (text) - OS Grid reference
      - `nearest_town` (text) - Nearest town or village
      - `parking_info` (text) - Parking information
      - `image_filename` (text) - Filename for the corbett image
      - `created_at` (timestamptz) - When record was created
      - `updated_at` (timestamptz) - When record was last updated

  2. Security
    - Enable RLS on `corbetts` table
    - Add policy for public read access (suitable for MagicMirror display)
*/

CREATE TABLE IF NOT EXISTS corbetts (
  id SERIAL PRIMARY KEY,
  name TEXT UNIQUE NOT NULL,
  location TEXT NOT NULL,
  region TEXT NOT NULL,
  height INTEGER NOT NULL,
  prominence INTEGER NOT NULL,
  classification TEXT NOT NULL DEFAULT 'Corbett',
  estimated_time TEXT NOT NULL,
  description TEXT NOT NULL,
  difficulty_rating INTEGER NOT NULL CHECK (difficulty_rating >= 1 AND difficulty_rating <= 5),
  popular_routes TEXT[] NOT NULL DEFAULT '{}',
  best_seasons TEXT[] NOT NULL DEFAULT '{}',
  grid_reference TEXT NOT NULL,
  nearest_town TEXT NOT NULL,
  parking_info TEXT NOT NULL,
  image_filename TEXT NOT NULL,
  created_at TIMESTAMPTZ DEFAULT NOW(),
  updated_at TIMESTAMPTZ DEFAULT NOW()
);

-- Enable RLS
ALTER TABLE corbetts ENABLE ROW LEVEL SECURITY;

-- Create policy for public read access (suitable for MagicMirror display)
CREATE POLICY "Allow public read access to corbetts"
  ON corbetts
  FOR SELECT
  TO public
  USING (true);

-- Create index for efficient queries
CREATE INDEX IF NOT EXISTS idx_corbetts_name ON corbetts(name);
CREATE INDEX IF NOT EXISTS idx_corbetts_height ON corbetts(height);
CREATE INDEX IF NOT EXISTS idx_corbetts_region ON corbetts(region);

-- Create trigger to update updated_at timestamp
CREATE OR REPLACE FUNCTION update_updated_at_column()
RETURNS TRIGGER AS $$
BEGIN
  NEW.updated_at = NOW();
  RETURN NEW;
END;
$$ language 'plpgsql';

CREATE TRIGGER update_corbetts_updated_at
  BEFORE UPDATE ON corbetts
  FOR EACH ROW
  EXECUTE FUNCTION update_updated_at_column();