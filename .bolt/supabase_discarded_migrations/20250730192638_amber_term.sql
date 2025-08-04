@@ .. @@
 /*
   # Populate All 222 Scottish Corbetts
 
   1. Data Source
     - Complete list of all 222 Scottish Corbetts from src/lib/222-corbetts.txt
     - Accurate names, locations, regions, and heights
     - Enhanced with climbing information and practical details
 
   2. Data Structure
     - Each corbett includes: name, location, region, height, prominence
     - Climbing info: difficulty rating, estimated time, popular routes
     - Seasonal info: best seasons for climbing
     - Practical info: grid reference, nearest town, parking
     - Image filename for photo display
 
   3. Security
     - Uses existing RLS policies for public read access
 */
 
 -- Clear existing data first
 DELETE FROM corbetts;
 
 -- Insert all 222 Scottish Corbetts (without specifying id - let it auto-generate)
-INSERT INTO corbetts (id, name, location, region, height, prominence, classification, estimated_time, description, difficulty_rating, popular_routes, best_seasons, grid_reference, nearest_town, parking_info, image_filename) VALUES
-(1, 'Ainshval', 'Isle of Rum', 'Isle of Rum', 781, 781, 'Corbett', '6-8 hours', 'A dramatic peak on the Isle of Rum with spectacular views over the Inner Hebrides. The ascent involves rough terrain and requires good navigation skills.', 4, ARRAY['From Kinloch via Coire Dubh', 'Ridge traverse from Askival'], ARRAY['Spring', 'Summer', 'Autumn'], 'NM393952', 'Mallaig', 'Ferry from Mallaig to Kinloch, limited parking at Kinloch', 'ainshval.jpg'),
+INSERT INTO corbetts (name, location, region, height, prominence, classification, estimated_time, description, difficulty_rating, popular_routes, best_seasons, grid_reference, nearest_town, parking_info, image_filename) VALUES
+('Ainshval', 'Isle of Rum', 'Isle of Rum', 781, 781, 'Corbett', '6-8 hours', 'A dramatic peak on the Isle of Rum with spectacular views over the Inner Hebrides. The ascent involves rough terrain and requires good navigation skills.', 4, ARRAY['From Kinloch via Coire Dubh', 'Ridge traverse from Askival'], ARRAY['Spring', 'Summer', 'Autumn'], 'NM393952', 'Mallaig', 'Ferry from Mallaig to Kinloch, limited parking at Kinloch', 'ainshval.jpg'),
@@ .. @@
-(2, 'Am Bathach', 'Kintail', 'Kintail', 798, 150, 'Corbett', '5-6 hours', 'A challenging corbett in the heart of Kintail with excellent views of the Five Sisters ridge. The approach involves crossing rough moorland.', 3, ARRAY['From Glen Shiel via Coire an t-Slugain', 'From Morvich via An Caorann Mor'], ARRAY['Spring', 'Summer', 'Autumn'], 'NG946154', 'Shiel Bridge', 'Roadside parking on A87 near Glen Shiel', 'am-bathach.jpg'),
+('Am Bathach', 'Kintail', 'Kintail', 798, 150, 'Corbett', '5-6 hours', 'A challenging corbett in the heart of Kintail with excellent views of the Five Sisters ridge. The approach involves crossing rough moorland.', 3, ARRAY['From Glen Shiel via Coire an t-Slugain', 'From Morvich via An Caorann Mor'], ARRAY['Spring', 'Summer', 'Autumn'], 'NG946154', 'Shiel Bridge', 'Roadside parking on A87 near Glen Shiel', 'am-bathach.jpg'),
@@ .. @@
-(222, 'White Coomb', 'Dumfries and Galloway', 'Dumfries and Galloway', 821, 321, 'Corbett', '4-5 hours', 'The highest peak in the Lowther Hills with excellent views across southern Scotland. A relatively straightforward ascent on good paths.', 2, ARRAY['From Daer Reservoir', 'From Lowther Hill via ridge'], ARRAY['Spring', 'Summer', 'Autumn'], 'NS906120', 'Moffat', 'Parking at Daer Reservoir or Lowther Hill car park', 'white-coomb.jpg');
+('White Coomb', 'Dumfries and Galloway', 'Dumfries and Galloway', 821, 321, 'Corbett', '4-5 hours', 'The highest peak in the Lowther Hills with excellent views across southern Scotland. A relatively straightforward ascent on good paths.', 2, ARRAY['From Daer Reservoir', 'From Lowther Hill via ridge'], ARRAY['Spring', 'Summer', 'Autumn'], 'NS906120', 'Moffat', 'Parking at Daer Reservoir or Lowther Hill car park', 'white-coomb.jpg');