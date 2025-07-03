#!/bin/bash

# MMM-SCH Installation Script for MagicMirror
# This script copies the module to your MagicMirror installation

set -e

# Colors for output
RED='\033[0;31m'
GREEN='\033[0;32m'
YELLOW='\033[1;33m'
NC='\033[0m' # No Color

echo -e "${GREEN}MMM-SCH Installation Script${NC}"
echo "=================================="

# Check if MagicMirror directory exists
MAGICMIRROR_DIR="$HOME/MagicMirror"
if [ ! -d "$MAGICMIRROR_DIR" ]; then
    echo -e "${RED}Error: MagicMirror directory not found at $MAGICMIRROR_DIR${NC}"
    echo "Please ensure MagicMirror is installed first."
    exit 1
fi

echo -e "${GREEN}✓${NC} Found MagicMirror installation at $MAGICMIRROR_DIR"

# Create module directory
MODULE_DIR="$MAGICMIRROR_DIR/modules/MMM-SCH"
echo "Creating module directory: $MODULE_DIR"
mkdir -p "$MODULE_DIR"

# Copy essential files
echo "Copying module files..."
cp MMM-SCH.js "$MODULE_DIR/"
cp MMM-SCH.css "$MODULE_DIR/"
cp node_helper.js "$MODULE_DIR/"
cp package.json "$MODULE_DIR/"
cp README.md "$MODULE_DIR/"
cp INSTALL.md "$MODULE_DIR/"

# Copy directories
echo "Copying directories..."
cp -r images "$MODULE_DIR/"
cp -r supabase "$MODULE_DIR/"

echo -e "${GREEN}✓${NC} Files copied successfully"

# Install dependencies
echo "Installing dependencies..."
cd "$MODULE_DIR"
npm install --only=production

echo -e "${GREEN}✓${NC} Dependencies installed"

# Set proper permissions
echo "Setting file permissions..."
chmod 644 "$MODULE_DIR"/*.js
chmod 644 "$MODULE_DIR"/*.css
chmod 644 "$MODULE_DIR"/*.json
chmod 644 "$MODULE_DIR"/*.md

echo -e "${GREEN}✓${NC} Permissions set"

echo ""
echo -e "${GREEN}Installation Complete!${NC}"
echo ""
echo "Next steps:"
echo "1. Set up your Supabase database (see INSTALL.md)"
echo "2. Add the module to your MagicMirror config:"
echo ""
echo -e "${YELLOW}{"
echo "  module: \"MMM-SCH\","
echo "  position: \"top_right\","
echo "  config: {"
echo "    supabaseUrl: \"YOUR_SUPABASE_URL\","
echo "    supabaseKey: \"YOUR_SUPABASE_KEY\""
echo "  }"
echo -e "}${NC}"
echo ""
echo "3. Restart MagicMirror"
echo ""
echo "For detailed instructions, see: $MODULE_DIR/INSTALL.md"