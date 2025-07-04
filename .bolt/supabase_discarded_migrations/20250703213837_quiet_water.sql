/*
  # Seed corbetts table with sample Scottish Corbetts data

  1. Data Population
    - Insert sample corbetts data with comprehensive information
    - Includes popular corbetts from different regions
    - Each entry includes all required fields for the module

  2. Coverage
    - Represents different difficulty levels and regions
    - Includes variety of seasons and routes
    - Provides realistic data for module testing
*/

INSERT INTO corbetts (
  name, location, region, height, prominence, classification, estimated_time, 
  description, difficulty_rating, popular_routes, best_seasons, grid_reference, 
  nearest_town, parking_info, image_filename
) VALUES 
(
  'Ben More Assynt', 
  'Assynt', 
  'Northwest Highlands', 
  998, 
  718, 
  'Corbett', 
  '6-8 hours', 
  'A magnificent peak in the heart of Assynt, offering spectacular views over the wild landscape of Sutherland. The mountain presents a classic pyramid shape when viewed from the north and provides one of the finest mountain experiences in Scotland.',
  4,
  ARRAY['North Ridge from Inchnadamph', 'South Ridge from Gleann Dubh', 'Traverse with Conival'],
  ARRAY['Late Spring', 'Summer', 'Early Autumn'],
  'NC318199',
  'Inchnadamph',
  'Parking available at Inchnadamph Hotel. Limited roadside parking on A837.',
  'ben-more-assynt.jpg'
),
(
  'Schiehallion', 
  'Loch Tummel', 
  'Central Highlands', 
  1083, 
  723, 
  'Corbett', 
  '4-6 hours', 
  'Known as the "Fairy Hill of the Caledonians", Schiehallion is one of Scotland''s most distinctive peaks. Its perfect cone shape and isolated position make it a popular and rewarding climb with panoramic views across central Scotland.',
  2,
  ARRAY['East Ridge from Braes of Foss', 'West approach from Kinloch Rannoch'],
  ARRAY['Spring', 'Summer', 'Autumn'],
  'NN714548',
  'Aberfeldy',
  'Forestry car park at Braes of Foss. Follow minor road from B846.',
  'schiehallion.jpg'
),
(
  'The Cobbler', 
  'Arrochar Alps', 
  'Southern Highlands', 
  884, 
  489, 
  'Corbett', 
  '4-5 hours', 
  'Perhaps Scotland''s most famous rock peak, The Cobbler offers an adventurous scramble to its three distinctive summits. The central peak requires a short but exposed scramble through a window in the rock to reach the true summit.',
  3,
  ARRAY['Narnain Boulder path', 'North Peak traverse', 'Direct ascent via Allt a'' Bhalachain'],
  ARRAY['Spring', 'Summer', 'Early Autumn'],
  'NN259058',
  'Arrochar',
  'Succoth car park on A83. Popular location, arrive early.',
  'the-cobbler.jpg'
),
(
  'Goat Fell', 
  'Isle of Arran', 
  'Islands', 
  874, 
  874, 
  'Corbett', 
  '5-7 hours', 
  'The highest peak on the Isle of Arran, Goat Fell offers spectacular views across the Firth of Clyde. The mountain provides excellent walking on good paths with the option to extend to other peaks on the island''s famous ridge.',
  2,
  ARRAY['Cladach path from Brodick', 'Corrie circular via North Goat Fell', 'Ridge traverse to Caisteal Abhail'],
  ARRAY['Spring', 'Summer', 'Autumn'],
  'NR991415',
  'Brodick',
  'Cladach car park, Brodick. Regular ferry service from Ardrossan.',
  'goat-fell.jpg'
),
(
  'Ben Wyvis', 
  'Easter Ross', 
  'Northern Highlands', 
  1046, 
  671, 
  'Corbett', 
  '5-6 hours', 
  'A massive, flat-topped mountain that dominates the landscape of Easter Ross. The summit plateau provides easy walking and extensive views, while the approach through ancient Caledonian pine forest is particularly beautiful.',
  2,
  ARRAY['Tourist path from Garbet', 'Allt a'' Bhealaich Mhoir path', 'Circuit via An Cabar'],
  ARRAY['Late Spring', 'Summer', 'Early Autumn'],
  'NH463684',
  'Garbet',
  'Forestry car park at Garbet. Follow A835 north from Garbet.',
  'ben-wyvis.jpg'
),
(
  'Arkle', 
  'Reay Forest', 
  'Northwest Highlands', 
  787, 
  407, 
  'Corbett', 
  '6-7 hours', 
  'A remote and rugged peak in the heart of the Reay Forest, Arkle offers one of the wildest mountain experiences in Scotland. The approach through pristine Highland scenery and the challenging terrain make this a true wilderness adventure.',
  4,
  ARRAY['Loch Stack approach', 'Lone circuit via Meall Horn', 'Traverse from Foinaven'],
  ARRAY['Summer', 'Early Autumn'],
  'NC301462',
  'Rhiconich',
  'Parking at Loch Stack. Access via A838 and minor road.',
  'arkle.jpg'
),
(
  'Merrick', 
  'Galloway Hills', 
  'Southern Uplands', 
  843, 
  743, 
  'Corbett', 
  '5-6 hours', 
  'The highest peak in the Southern Uplands, Merrick stands proudly above the Galloway Hills. The mountain offers excellent walking on good paths through diverse landscapes, from forests to wild moorland and rocky summit terrain.',
  2,
  ARRAY['Bruce''s Stone circular', 'Buchan Burn approach', 'Traverse via Benyellary'],
  ARRAY['Spring', 'Summer', 'Autumn'],
  'NX428855',
  'Newton Stewart',
  'Bruce''s Stone car park, Glen Trool. Follow minor road from A714.',
  'merrick.jpg'
),
(
  'Beinn Alligin', 
  'Torridon', 
  'Northwest Highlands', 
  985, 
  525, 
  'Corbett', 
  '6-8 hours', 
  'One of the magnificent Torridon peaks, Beinn Alligin offers spectacular ridge walking with dramatic views over Loch Torridon. The traverse of the Horns of Alligin provides an exciting scramble along one of Scotland''s finest ridges.',
  4,
  ARRAY['Coire Mhic Nobuil approach', 'Traverse of the Horns', 'Tom na Gruagaich circuit'],
  ARRAY['Late Spring', 'Summer', 'Early Autumn'],
  'NG866613',
  'Torridon',
  'Parking area on A896 near Torridon village. Limited spaces.',
  'beinn-alligin.jpg'
),
(
  'Quinag', 
  'Assynt', 
  'Northwest Highlands', 
  808, 
  628, 
  'Corbett', 
  '5-7 hours', 
  'A spectacular multi-topped mountain with distinctive stepped profile, Quinag dominates the landscape of Assynt. The mountain offers excellent ridge walking and some of the finest views in the Scottish Highlands.',
  3,
  ARRAY['Spidean Coinich from A894', 'Traverse of all three tops', 'Sail Gharbh approach'],
  ARRAY['Spring', 'Summer', 'Early Autumn'],
  'NC208278',
  'Kylesku',
  'Parking available at several points along A894. Layby near Unapool.',
  'quinag.jpg'
),
(
  'Ben Venue', 
  'Trossachs', 
  'Central Highlands', 
  729, 
  529, 
  'Corbett', 
  '4-5 hours', 
  'A popular peak in the heart of the Trossachs, Ben Venue offers beautiful woodland walking and spectacular views over Loch Lomond and Loch Katrine. The mountain features in Sir Walter Scott''s poetry and is steeped in Highland history.',
  2,
  ARRAY['Ledard approach via Gleann Riabhach', 'Achray Forest paths', 'Loch Katrine circuit'],
  ARRAY['Spring', 'Summer', 'Autumn'],
  'NN405063',
  'Aberfoyle',
  'Achray Forest car park. Follow A821 from Aberfoyle.',
  'ben-venue.jpg'
);