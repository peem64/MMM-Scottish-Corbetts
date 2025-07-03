# Corbett Images Directory

This directory contains images for all 222 Scottish Corbetts used in the MMM-SCH MagicMirror module.

## Directory Structure

```
public/images/corbetts/
├── ben-more-assynt.jpg
├── schiehallion.jpg
├── the-cobbler.jpg
├── goat-fell.jpg
├── ben-wyvis.jpg
├── arkle.jpg
├── merrick.jpg
├── beinn-alligin.jpg
├── quinag.jpg
├── ben-venue.jpg
└── [additional 212 corbett images]
```

## Image Guidelines

- **Format**: JPEG preferred for best compression
- **Resolution**: 1200x800px minimum for good display quality
- **Aspect Ratio**: 3:2 landscape orientation
- **File Size**: Aim for 200-500KB per image
- **Naming**: Use lowercase, hyphen-separated names matching the corbett name
- **Quality**: High quality landscape photographs showing the mountain

## Image Sources

Place your corbett images in this directory with filenames matching the `image_filename` field in the database. The module will automatically load images from this location.

## Fallback Behavior

If an image is not found, the module will display a placeholder image from Pexels to ensure the display remains functional.

## Local Development

For local development, you can use placeholder images or stock photos until you have the actual corbett photographs available.