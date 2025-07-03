# MMM-SCH - Scottish Corbetts for MagicMirror

A beautiful MagicMirror module that displays information about Scottish Corbetts, cycling through all 222 peaks on an hourly basis.

## Features

- 🏔️ **Complete Database**: All 222 Scottish Corbetts with detailed information
- ⏰ **Hourly Rotation**: Displays a different corbett every hour
- 🎨 **Beautiful Design**: Modern, responsive design with stunning visuals
- 📊 **Comprehensive Data**: Height, prominence, difficulty, routes, seasons, and more
- 🖼️ **Local Images**: Support for local corbett photography
- 🌐 **Supabase Integration**: Cloud database for corbett information
- 📱 **Responsive**: Works on all MagicMirror display sizes

## Installation

1. Clone this repository into your MagicMirror modules directory:
```bash
cd ~/MagicMirror/modules
git clone https://github.com/your-username/MMM-SCH.git
```

2. Install dependencies:
```bash
cd MMM-SCH
npm install
```

3. Set up Supabase database (see Database Setup section)

4. Add your corbett images to the `images/corbetts/` directory

5. Configure the module in your MagicMirror config

## Database Setup

### 1. Create Supabase Project
1. Go to [Supabase](https://supabase.com) and create a new project
2. Note your project URL and anon key

### 2. Run Database Migrations
Execute the SQL files in the `supabase/migrations/` directory:
1. `create_corbetts_table.sql` - Creates the corbetts table
2. `seed_corbetts_data.sql` - Adds sample corbett data

### 3. Complete the Database
The sample data includes 10 corbetts. You'll need to add the remaining 212 corbetts to complete the database.

## Configuration

Add the module to your MagicMirror config file:

```javascript
{
  module: "MMM-SCH",
  position: "top_left",
  config: {
    updateInterval: 60 * 60 * 1000, // 1 hour
    animationSpeed: 1000,
    showDescription: true,
    showRoutes: true,
    showSeasons: true,
    maxDescriptionLength: 200,
    supabaseUrl: "YOUR_SUPABASE_URL",
    supabaseKey: "YOUR_SUPABASE_ANON_KEY",
    imageDirectory: "modules/MMM-SCH/images/corbetts/"
  }
}
```

## Configuration Options

| Option | Description | Default |
|--------|-------------|---------|
| `updateInterval` | How often to check for new corbett (ms) | `3600000` (1 hour) |
| `animationSpeed` | Animation speed for transitions (ms) | `1000` |
| `showDescription` | Show corbett description | `true` |
| `showRoutes` | Show popular routes | `true` |
| `showSeasons` | Show best seasons | `true` |
| `maxDescriptionLength` | Max characters for description | `200` |
| `supabaseUrl` | Your Supabase project URL | `""` |
| `supabaseKey` | Your Supabase anon key | `""` |
| `imageDirectory` | Path to corbett images | `"modules/MMM-SCH/images/corbetts/"` |

## Image Setup

1. Create the images directory structure:
```
MMM-SCH/
├── images/
│   └── corbetts/
│       ├── ben-more-assynt.jpg
│       ├── schiehallion.jpg
│       ├── the-cobbler.jpg
│       └── [other corbett images]
```

2. Add your corbett images with filenames matching the `image_filename` field in the database

3. Images should be:
   - Format: JPEG
   - Resolution: 1200x800px minimum
   - Aspect ratio: 3:2 landscape
   - File size: 200-500KB

## Database Schema

The corbetts table includes:
- Basic info: name, location, region, height, prominence
- Climbing info: difficulty rating, estimated time, popular routes
- Seasonal info: best seasons for climbing
- Practical info: grid reference, nearest town, parking
- Media: image filename

## Development

To run the module in development mode:

```bash
npm run dev
```

To build for production:

```bash
npm run build
```

## Contributing

1. Fork the repository
2. Create a feature branch
3. Make your changes
4. Submit a pull request

## License

This module is licensed under the MIT License.

## Credits

- Built for MagicMirror²
- Corbett data sourced from various mountaineering resources
- Images should be your own or appropriately licensed
- Uses Supabase for cloud database functionality

## Support

For issues and questions, please create an issue on the GitHub repository.