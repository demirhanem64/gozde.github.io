# Favicon Generation Instructions

This directory contains the favicon and icon files for gozdeeksi.com.tr.

## Current Status

A base SVG favicon has been created (`favicon.svg`) with the site's color scheme:
- Turquoise (#0891b2) background
- Orange (#f97316) medical cross symbol

## Required Icon Files

The following icon files are referenced in the HTML but need to be generated:

1. `favicon.ico` - 16x16, 32x32, 48x48 multi-resolution ICO file
2. `favicon-16x16.png` - 16x16 PNG
3. `favicon-32x32.png` - 32x32 PNG
4. `apple-touch-icon.png` - 180x180 PNG for iOS devices
5. `android-chrome-192x192.png` - 192x192 PNG for Android
6. `android-chrome-512x512.png` - 512x512 PNG for Android

## How to Generate Icons

### Option 1: Online Tools (Recommended)
Use a favicon generator service like:
- https://realfavicongenerator.net/
- https://favicon.io/

Upload the `favicon.svg` file and download all required formats.

### Option 2: Using ImageMagick (Command Line)
If you have ImageMagick installed:

```bash
# Generate PNG files from SVG
convert favicon.svg -resize 16x16 favicon-16x16.png
convert favicon.svg -resize 32x32 favicon-32x32.png
convert favicon.svg -resize 180x180 apple-touch-icon.png
convert favicon.svg -resize 192x192 android-chrome-192x192.png
convert favicon.svg -resize 512x512 android-chrome-512x512.png

# Generate ICO file (multi-resolution)
convert favicon.svg -define icon:auto-resize=16,32,48 favicon.ico
```

### Option 3: Using Node.js
Install the `sharp` package and use it to convert:

```bash
npm install sharp
```

Then create a script to generate all sizes.

## Deployment Checklist

- [ ] Generate all required icon files
- [ ] Place `favicon.ico` in the root directory
- [ ] Place PNG icons in `/assets/icons/`
- [ ] Test icons on different devices and browsers
- [ ] Verify icons appear correctly in browser tabs
- [ ] Check iOS home screen icon
- [ ] Check Android home screen icon

## Design Notes

The favicon design incorporates:
- Medical cross symbol representing healthcare/emergency medicine
- Turquoise and orange color scheme matching the site design
- Simple, recognizable design that works at small sizes
- Professional appearance suitable for academic context
