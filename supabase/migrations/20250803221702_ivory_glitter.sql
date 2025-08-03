@@ .. @@
 /*
   # Populate all 222 Scottish Corbetts
 
   1. Data Population
     - Insert all 222 authentic Scottish Corbetts
     - Complete information including routes, seasons, difficulty
     - Proper PostgreSQL array syntax for routes and seasons
 */
 
-INSERT INTO corbetts (id, name, location, region, height, prominence, classification, estimated_time, description, difficulty_rating, popular_routes, best_seasons, grid_reference, nearest_town, parking_info, image_filename) VALUES
+INSERT INTO corbetts (name, location, region, height, prominence, classification, estimated_time, description, difficulty_rating, popular_routes, best_seasons, grid_reference, nearest_town, parking_info, image_filename) VALUES
-(1, 'Ainshval', 'Isle of Rum', 'Isle of Rum', 781, 180, 'Corbett', '5-6 hours', 'A dramatic peak on the Isle of Rum with spectacular views across the Inner Hebrides.', 4, ARRAY['Kinloch approach', 'Coastal path'], ARRAY['Spring', 'Summer', 'Autumn'], 'NM373945', 'Kinloch', 'Kinloch village', 'ainshval.jpg'),
+('Ainshval', 'Isle of Rum', 'Isle of Rum', 781, 180, 'Corbett', '5-6 hours', 'A dramatic peak on the Isle of Rum with spectacular views across the Inner Hebrides.', 4, ARRAY['Kinloch approach', 'Coastal path'], ARRAY['Spring', 'Summer', 'Autumn'], 'NM373945', 'Kinloch', 'Kinloch village', 'ainshval.jpg'),