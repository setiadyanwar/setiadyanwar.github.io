-- Fix: Update get_analytics_summary function
-- Run this in Supabase SQL Editor to fix the date filtering

CREATE OR REPLACE FUNCTION get_analytics_summary(days_back INT DEFAULT 7)
RETURNS TABLE (
  date DATE,
  total_visits BIGINT,
  unique_paths BIGINT
) AS $$
BEGIN
  RETURN QUERY
  SELECT 
    a.date,
    SUM(a.visits)::BIGINT AS total_visits,
    COUNT(DISTINCT a.path)::BIGINT AS unique_paths
  FROM analytics a
  WHERE a.date >= CURRENT_DATE - days_back::INT
  GROUP BY a.date
  ORDER BY a.date ASC;  -- Changed to ASC for chronological order
END;
$$ LANGUAGE plpgsql SECURITY DEFINER;

-- Test the function
SELECT * FROM get_analytics_summary(7);

-- Also check raw data
SELECT date, path, visits FROM analytics ORDER BY date DESC, visits DESC LIMIT 10;
