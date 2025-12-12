-- Add display_order column to portfolio_items table
ALTER TABLE portfolio_items 
ADD COLUMN IF NOT EXISTS display_order INTEGER DEFAULT 0;

-- Create index for better query performance
CREATE INDEX IF NOT EXISTS idx_portfolio_items_display_order 
ON portfolio_items(display_order);

-- Set ESS (id: 'ess') to order 0 (FIRST position)
UPDATE portfolio_items 
SET display_order = 0 
WHERE id = 'ess';

-- Set other portfolio items order (starting from 1)
-- This ensures ESS appears first, then others follow
UPDATE portfolio_items SET display_order = 1 WHERE id = 'kreavoks';
UPDATE portfolio_items SET display_order = 2 WHERE id = 'nobarin';
UPDATE portfolio_items SET display_order = 3 WHERE id = 'upala';
UPDATE portfolio_items SET display_order = 4 WHERE id = 'freezemart';
UPDATE portfolio_items SET display_order = 5 WHERE id = 'studylens';
UPDATE portfolio_items SET display_order = 6 WHERE id = 'nusoundtara';
UPDATE portfolio_items SET display_order = 7 WHERE id = 'nexaid';
UPDATE portfolio_items SET display_order = 8 WHERE id = 'butchery';
UPDATE portfolio_items SET display_order = 9 WHERE id = 'ecotainment';
UPDATE portfolio_items SET display_order = 10 WHERE id = 'skilpath';
UPDATE portfolio_items SET display_order = 11 WHERE id = 'skillify';
UPDATE portfolio_items SET display_order = 12 WHERE id = 'gobojongsoang';
UPDATE portfolio_items SET display_order = 13 WHERE id = 'rescuisine';
UPDATE portfolio_items SET display_order = 14 WHERE id = 'transmate';
UPDATE portfolio_items SET display_order = 15 WHERE id = 'hotelid';
UPDATE portfolio_items SET display_order = 16 WHERE id = 'swiftcare';
UPDATE portfolio_items SET display_order = 17 WHERE id = 'agridation';
UPDATE portfolio_items SET display_order = 18 WHERE id = 'pembimbingid';
UPDATE portfolio_items SET display_order = 19 WHERE id = 'redesignipb';
UPDATE portfolio_items SET display_order = 20 WHERE id = 'bemkmipb';
UPDATE portfolio_items SET display_order = 21 WHERE id = 'uvan';
UPDATE portfolio_items SET display_order = 22 WHERE id = 'famiapp';
UPDATE portfolio_items SET display_order = 23 WHERE id = 'wingspos';

-- Verify the order (ESS should be first)
SELECT id, title, display_order 
FROM portfolio_items 
ORDER BY display_order ASC, created_at DESC
LIMIT 5;

