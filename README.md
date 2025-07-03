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

## MagicMirror Installation

### Prerequisites

1. **MagicMirror² Installation**: Ensure you have MagicMirror² installed and running
   - Follow the [official MagicMirror² installation guide](https://docs.magicmirror.builders/getting-started/installation.html)
   - Verify your MagicMirror is working before installing this module

2. **Node.js and npm**: Required for dependency management
   - Node.js version 16 or higher recommended

### Step 1: Clone the Module

Navigate to your MagicMirror modules directory and clone this repository:

```bash
cd ~/MagicMirror/modules
git clone https://github.com/your-username/MMM-SCH.git
cd MMM-SCH
```

### Step 2: Install Dependencies

Install the required Node.js dependencies:

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
2. Execute the SQL files in order:
   - First run `supabase/migrations/20250703195721_yellow_mode.sql`
   - Then run `supabase/migrations/20250703195732_pink_fog.sql`

#### Get Your Supabase Credentials
1. Go to Project Settings → API
2. Copy your Project URL
3. Copy your anon/public key

### Step 4: Configure Environment Variables

Create a `.env` file in the MMM-SCH directory:

```bash
cd ~/MagicMirror/modules/MMM-SCH
cp .env.example .env
```

Edit the `.env` file with your Supabase credentials:

```env
VITE_SUPABASE_URL=your_supabase_project_url_here
VITE_SUPABASE_ANON_KEY=your_supabase_anon_key_here
```

### Step 5: Add Corbett Images

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

Example structure:
```
~/MagicMirror/modules/MMM-SCH/images/corbetts/
├── ben-more-assynt.jpg
├── schiehallion.jpg
├── the-cobbler.jpg
├── goat-fell.jpg
└── [additional corbett images]
```

### Step 6: Configure MagicMirror

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

### Step 7: Restart MagicMirror

Restart your MagicMirror to load the new module:

```bash
cd ~/MagicMirror
npm start
```

Or if running as a service:

```bash
sudo systemctl restart magicmirror
```

## MagicMirror Configuration Options

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

Avoid left-side positions as the module is optimized for narrow, vertical layouts.

## Troubleshooting

### Module Not Appearing
1. Check MagicMirror logs: `pm2 logs MagicMirror` (if using PM2)
2. Verify the module is in the correct directory: `~/MagicMirror/modules/MMM-SCH/`
3. Check that `MMM-SCH.js` exists in the module directory
4. Restart MagicMirror completely

### Database Connection Issues
1. Verify your `.env` file has correct Supabase credentials
2. Check that your Supabase project is active
3. Ensure the database migrations were run successfully
4. Test the connection by checking the browser console for errors

### Images Not Loading
1. Verify images are in `~/MagicMirror/modules/MMM-SCH/images/corbetts/`
2. Check image filenames match the database `image_filename` field
3. Ensure images are readable (correct permissions)
4. The module will show placeholder images if local images aren't found

### Performance Issues
1. Reduce `maxDescriptionLength` for faster rendering
2. Optimize image file sizes (aim for 200-500KB)
3. Increase `updateInterval` if needed

## Development Mode

For development and testing outside of MagicMirror:

```bash
cd ~/MagicMirror/modules/MMM-SCH
npm run dev
```

This will start a development server at `http://localhost:5173` where you can preview the module.

## Complete Database Setup

The included sample data contains 10 corbetts. To complete the database with all 222 Scottish Corbetts:

1. Obtain complete corbett data (elevation, coordinates, descriptions, etc.)
2. Add entries to the `corbetts` table following the existing schema
3. Ensure each corbett has a corresponding image file

## Database Schema

The corbetts table includes:
- **Basic info**: name, location, region, height, prominence
- **Climbing info**: difficulty rating, estimated time, popular routes
- **Seasonal info**: best seasons for climbing
- **Practical info**: grid reference, nearest town, parking
- **Media**: image filename

## Support

For issues specific to MagicMirror integration:

1. Check the [MagicMirror² documentation](https://docs.magicmirror.builders/)
2. Verify your MagicMirror installation is working
3. Check module logs and browser console for errors
4. Create an issue on the GitHub repository with:
   - MagicMirror version
   - Node.js version
   - Error messages
   - Configuration used

## Contributing

1. Fork the repository
2. Create a feature branch
3. Make your changes
4. Test with MagicMirror
5. Submit a pull request

## License

This module is licensed under the MIT License.

## Credits

- Built for MagicMirror²
- Corbett data sourced from various mountaineering resources
- Images should be your own or appropriately licensed
- Uses Supabase for cloud database functionality