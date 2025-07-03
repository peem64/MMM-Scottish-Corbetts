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
- 🪟 **Right-Side Optimized**: Compact layout perfect for MagicMirror right column

## Installation

### Prerequisites

1. **MagicMirror² Installation**: Ensure you have MagicMirror² installed and running
2. **Node.js**: Version 16 or higher recommended

### Step 1: Clone the Module

Navigate to your MagicMirror modules directory and clone this repository:

```bash
cd ~/MagicMirror/modules
git clone https://github.com/your-username/MMM-SCH.git
cd MMM-SCH
```

### Step 2: Install Dependencies

```bash
npm install
```

### Step 3: Set Up Supabase Database

#### Create Supabase Project
1. Go to [Supabase](https://supabase.com) and create a new project
2. Wait for the project to be fully initialized
3. Note your project URL and anon key from the project settings

#### Run Database Migrations
1. In your Supabase project dashboard, go to the SQL Editor
2. Copy and run the SQL from `database/schema.sql` to create the corbetts table
3. Copy and run the SQL from `database/sample_data.sql` to populate with sample data

#### Get Your Supabase Credentials
1. Go to Project Settings → API
2. Copy your Project URL
3. Copy your anon/public key

### Step 4: Add Corbett Images

Create the images directory and add your corbett photos:

```bash
mkdir -p ~/MagicMirror/modules/MMM-SCH/images/corbetts
```

Copy your corbett images to this directory. Images should be:
- **Format**: JPEG preferred
- **Resolution**: 1200x800px minimum
- **Aspect Ratio**: 3:2 landscape orientation
- **File Size**: 200-500KB per image
- **Naming**: Use lowercase, hyphen-separated names matching the `image_filename` field in the database

### Step 5: Configure MagicMirror

Add the module to your MagicMirror config file (`~/MagicMirror/config/config.js`):

```javascript
{
  module: "MMM-SCH",
  position: "top_right", // Recommended for best display
  config: {
    updateInterval: 60 * 60 * 1000, // 1 hour
    animationSpeed: 1000,
    showDescription: true,
    showRoutes: true,
    showSeasons: true,
    maxDescriptionLength: 150,
    supabaseUrl: "YOUR_SUPABASE_URL",
    supabaseKey: "YOUR_SUPABASE_ANON_KEY",
    imageDirectory: "modules/MMM-SCH/images/corbetts/"
  }
}
```

### Step 6: Restart MagicMirror

```bash
cd ~/MagicMirror
npm start
```

Or if running as a service:

```bash
sudo systemctl restart magicmirror
```

## Configuration Options

| Option | Description | Default | Recommended |
|--------|-------------|---------|-------------|
| `position` | Where to display the module | - | `"top_right"` or `"bottom_right"` |
| `updateInterval` | How often to check for new corbett (ms) | `3600000` | `3600000` (1 hour) |
| `animationSpeed` | Animation speed for transitions (ms) | `1000` | `1000` |
| `showDescription` | Show corbett description | `true` | `true` |
| `showRoutes` | Show popular routes | `true` | `true` |
| `showSeasons` | Show best seasons | `true` | `true` |
| `maxDescriptionLength` | Max characters for description | `200` | `150` for right side |
| `supabaseUrl` | Your Supabase project URL | `""` | Required |
| `supabaseKey` | Your Supabase anon key | `""` | Required |
| `imageDirectory` | Path to corbett images | `"modules/MMM-SCH/images/corbetts/"` | Default is fine |

## Recommended MagicMirror Positions

The module is optimized for right-side placement:

- **`top_right`**: Best for most layouts
- **`bottom_right`**: Good alternative if top_right is occupied
- **`middle_right`**: Works well for larger displays

## Troubleshooting

### Module Not Appearing
1. Check MagicMirror logs: `pm2 logs MagicMirror` (if using PM2)
2. Verify the module is in the correct directory: `~/MagicMirror/modules/MMM-SCH/`
3. Check that `MMM-SCH.js` exists in the module directory
4. Restart MagicMirror completely

### Database Connection Issues
1. Verify your Supabase credentials in the config
2. Check that your Supabase project is active
3. Ensure the database migrations were run successfully
4. Test the connection by checking the browser console for errors

### Images Not Loading
1. Verify images are in `~/MagicMirror/modules/MMM-SCH/images/corbetts/`
2. Check image filenames match the database `image_filename` field
3. Ensure images are readable (correct permissions)
4. The module will show placeholder images if local images aren't found

## Database Schema

The corbetts table includes:
- **Basic info**: name, location, region, height, prominence
- **Climbing info**: difficulty rating, estimated time, popular routes
- **Seasonal info**: best seasons for climbing
- **Practical info**: grid reference, nearest town, parking
- **Media**: image filename

## License

This module is licensed under the MIT License.

## Credits

- Built for MagicMirror²
- Corbett data sourced from various mountaineering resources
- Images should be your own or appropriately licensed
- Uses Supabase for cloud database functionality