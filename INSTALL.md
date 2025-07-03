# MMM-SCH Installation Guide

## Quick Installation

Follow these steps to install MMM-SCH in your MagicMirror:

### Step 1: Copy Module Files

Copy the entire MMM-SCH directory to your MagicMirror modules folder:

```bash
# Navigate to your MagicMirror modules directory
cd ~/MagicMirror/modules

# If you haven't already, clone or copy this project
cp -r /path/to/this/project ./MMM-SCH

# OR clone directly:
# git clone https://github.com/your-username/MMM-SCH.git
```

### Step 2: Install Dependencies

```bash
cd ~/MagicMirror/modules/MMM-SCH
npm install --only=production
```

### Step 3: Set Up Supabase Database

1. Create a Supabase project at https://supabase.com
2. In the SQL Editor, run the migrations:
   - First: `supabase/migrations/20250703195721_yellow_mode.sql`
   - Then: `supabase/migrations/20250703195732_pink_fog.sql`
   - Finally: `supabase/migrations/20250703214025_frosty_wood.sql`

### Step 4: Configure MagicMirror

Add this to your `~/MagicMirror/config/config.js`:

```javascript
{
  module: "MMM-SCH",
  position: "top_right",
  config: {
    supabaseUrl: "YOUR_SUPABASE_PROJECT_URL",
    supabaseKey: "YOUR_SUPABASE_ANON_KEY",
    updateInterval: 60 * 60 * 1000, // 1 hour
    animationSpeed: 1000,
    showDescription: true,
    showRoutes: true,
    showSeasons: true,
    maxDescriptionLength: 150,
    imageDirectory: "modules/MMM-SCH/images/corbetts/"
  }
}
```

### Step 5: Add Images (Optional)

Place corbett images in:
```
~/MagicMirror/modules/MMM-SCH/images/corbetts/
```

### Step 6: Restart MagicMirror

```bash
cd ~/MagicMirror
npm start
```

## File Structure

Your MagicMirror modules directory should look like this:

```
~/MagicMirror/modules/MMM-SCH/
├── MMM-SCH.js              # Main module file
├── MMM-SCH.css             # Styling
├── node_helper.js          # Backend helper
├── package.json            # Dependencies
├── README.md               # Documentation
├── images/
│   └── corbetts/           # Corbett images
└── supabase/
    └── migrations/         # Database setup
```

## Troubleshooting

### Module Not Found Error

If you get "No MMM-SCH.js found", check:

1. **File exists**: `ls ~/MagicMirror/modules/MMM-SCH/MMM-SCH.js`
2. **Permissions**: `chmod 644 ~/MagicMirror/modules/MMM-SCH/MMM-SCH.js`
3. **Directory structure**: Ensure the module is in the correct location

### Database Connection Issues

1. Verify Supabase credentials in config
2. Check that migrations were run successfully
3. Test connection in Supabase dashboard

### Dependencies Issues

```bash
cd ~/MagicMirror/modules/MMM-SCH
rm -rf node_modules package-lock.json
npm install
```

## Manual Installation Commands

If you need to manually copy files:

```bash
# Create the module directory
mkdir -p ~/MagicMirror/modules/MMM-SCH

# Copy essential files
cp MMM-SCH.js ~/MagicMirror/modules/MMM-SCH/
cp MMM-SCH.css ~/MagicMirror/modules/MMM-SCH/
cp node_helper.js ~/MagicMirror/modules/MMM-SCH/
cp package.json ~/MagicMirror/modules/MMM-SCH/
cp -r images ~/MagicMirror/modules/MMM-SCH/
cp -r supabase ~/MagicMirror/modules/MMM-SCH/

# Install dependencies
cd ~/MagicMirror/modules/MMM-SCH
npm install
```