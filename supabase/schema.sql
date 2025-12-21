-- Portfolio Items Table
CREATE TABLE IF NOT EXISTS portfolio_items (
  id TEXT PRIMARY KEY,
  title TEXT NOT NULL,
  date TEXT,
  subtitle TEXT,
  category TEXT NOT NULL,
  image TEXT,
  additional_images JSONB DEFAULT '[]'::jsonb,
  technologies JSONB DEFAULT '[]'::jsonb,
  description TEXT,
  overview_heading TEXT,
  process_heading TEXT,
  challenges_heading TEXT,
  problem_heading TEXT,
  solution_heading TEXT,
  outcomes_heading TEXT,
  role TEXT,
  responsibilities JSONB DEFAULT '[]'::jsonb,
  challenges TEXT,
  demo_url TEXT,
  repo_url TEXT,
  problem_image TEXT,
  solution_image TEXT,
  problem_description TEXT,
  problem_cards JSONB DEFAULT '[]'::jsonb,
  solution_description TEXT,
  solution_cards JSONB DEFAULT '[]'::jsonb,
  status TEXT,
  impact JSONB DEFAULT '[]'::jsonb,
  outcomes JSONB DEFAULT '[]'::jsonb,
  next_steps TEXT,
  project_steps JSONB DEFAULT '[]'::jsonb,
  display_order INTEGER DEFAULT 0,
  created_at TIMESTAMP WITH TIME ZONE DEFAULT NOW(),
  updated_at TIMESTAMP WITH TIME ZONE DEFAULT NOW()
);

-- Work Experiences Table
CREATE TABLE IF NOT EXISTS work_experiences (
  id SERIAL PRIMARY KEY,
  title TEXT NOT NULL,
  company TEXT NOT NULL,
  logo TEXT,
  period TEXT NOT NULL,
  description TEXT,
  skills JSONB DEFAULT '[]'::jsonb,
  details JSONB DEFAULT '[]'::jsonb,
  created_at TIMESTAMP WITH TIME ZONE DEFAULT NOW(),
  updated_at TIMESTAMP WITH TIME ZONE DEFAULT NOW(),
  display_order INTEGER DEFAULT 0
);

-- Education Experiences Table
CREATE TABLE IF NOT EXISTS education_experiences (
  id SERIAL PRIMARY KEY,
  title TEXT NOT NULL,
  company TEXT NOT NULL,
  logo TEXT,
  period TEXT NOT NULL,
  description TEXT,
  skills JSONB DEFAULT '[]'::jsonb,
  details JSONB DEFAULT '[]'::jsonb,
  created_at TIMESTAMP WITH TIME ZONE DEFAULT NOW(),
  updated_at TIMESTAMP WITH TIME ZONE DEFAULT NOW(),
  display_order INTEGER DEFAULT 0
);

-- Organization Experiences Table
CREATE TABLE IF NOT EXISTS organization_experiences (
  id SERIAL PRIMARY KEY,
  title TEXT NOT NULL,
  company TEXT NOT NULL,
  logo TEXT,
  period TEXT NOT NULL,
  description TEXT,
  skills JSONB DEFAULT '[]'::jsonb,
  details JSONB DEFAULT '[]'::jsonb,
  created_at TIMESTAMP WITH TIME ZONE DEFAULT NOW(),
  updated_at TIMESTAMP WITH TIME ZONE DEFAULT NOW(),
  display_order INTEGER DEFAULT 0
);

-- Technologies Table
CREATE TABLE IF NOT EXISTS technologies (
  id SERIAL PRIMARY KEY,
  name TEXT NOT NULL UNIQUE,
  icon TEXT NOT NULL,
  created_at TIMESTAMP WITH TIME ZONE DEFAULT NOW(),
  updated_at TIMESTAMP WITH TIME ZONE DEFAULT NOW()
);

-- Indexes for better query performance
CREATE INDEX IF NOT EXISTS idx_portfolio_items_category ON portfolio_items(category);
CREATE INDEX IF NOT EXISTS idx_portfolio_items_status ON portfolio_items(status);
CREATE INDEX IF NOT EXISTS idx_portfolio_items_display_order ON portfolio_items(display_order);
CREATE INDEX IF NOT EXISTS idx_work_experiences_display_order ON work_experiences(display_order);
CREATE INDEX IF NOT EXISTS idx_education_experiences_display_order ON education_experiences(display_order);
CREATE INDEX IF NOT EXISTS idx_organization_experiences_display_order ON organization_experiences(display_order);

-- Function to update updated_at timestamp
CREATE OR REPLACE FUNCTION update_updated_at_column()
RETURNS TRIGGER AS $$
BEGIN
  NEW.updated_at = NOW();
  RETURN NEW;
END;
$$ LANGUAGE plpgsql;

-- Triggers to auto-update updated_at
CREATE TRIGGER update_portfolio_items_updated_at
  BEFORE UPDATE ON portfolio_items
  FOR EACH ROW
  EXECUTE FUNCTION update_updated_at_column();

CREATE TRIGGER update_work_experiences_updated_at
  BEFORE UPDATE ON work_experiences
  FOR EACH ROW
  EXECUTE FUNCTION update_updated_at_column();

CREATE TRIGGER update_education_experiences_updated_at
  BEFORE UPDATE ON education_experiences
  FOR EACH ROW
  EXECUTE FUNCTION update_updated_at_column();

CREATE TRIGGER update_organization_experiences_updated_at
  BEFORE UPDATE ON organization_experiences
  FOR EACH ROW
  EXECUTE FUNCTION update_updated_at_column();

CREATE TRIGGER update_technologies_updated_at
  BEFORE UPDATE ON technologies
  FOR EACH ROW
  EXECUTE FUNCTION update_updated_at_column();


