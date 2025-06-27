#!/usr/bin/env node

/**
 * Color Update Utility for Tarkasya Website
 * 
 * This script helps you quickly update colors across the website.
 * Usage: node scripts/update-colors.js
 */

const fs = require('fs');
const path = require('path');

// Color presets for quick updates
const colorPresets = {
  default: {
    name: 'Default Green Theme',
    colors: {
      primary: {
        main: '#063b26',
        light: '#1e4e3b',
        dark: '#042a1a',
        contrastText: '#ffffff',
      },
      secondary: {
        main: '#25d366',
        light: '#4ade80',
        dark: '#16a34a',
        contrastText: '#ffffff',
      },
    }
  },
  blue: {
    name: 'Blue Theme',
    colors: {
      primary: {
        main: '#1e40af',
        light: '#3b82f6',
        dark: '#1e3a8a',
        contrastText: '#ffffff',
      },
      secondary: {
        main: '#06b6d4',
        light: '#22d3ee',
        dark: '#0891b2',
        contrastText: '#ffffff',
      },
    }
  },
  purple: {
    name: 'Purple Theme',
    colors: {
      primary: {
        main: '#7c3aed',
        light: '#a855f7',
        dark: '#5b21b6',
        contrastText: '#ffffff',
      },
      secondary: {
        main: '#ec4899',
        light: '#f472b6',
        dark: '#be185d',
        contrastText: '#ffffff',
      },
    }
  },
  orange: {
    name: 'Orange Theme',
    colors: {
      primary: {
        main: '#ea580c',
        light: '#fb923c',
        dark: '#c2410c',
        contrastText: '#ffffff',
      },
      secondary: {
        main: '#f59e0b',
        light: '#fbbf24',
        dark: '#d97706',
        contrastText: '#ffffff',
      },
    }
  }
};

function updateColorsFile(preset) {
  const colorsPath = path.join(__dirname, '../src/theme/colors.js');
  
  if (!fs.existsSync(colorsPath)) {
    console.error('❌ Colors file not found at:', colorsPath);
    return false;
  }

  let content = fs.readFileSync(colorsPath, 'utf8');
  
  // Update primary colors
  content = content.replace(
    /primary:\s*{[^}]+}/s,
    `primary: {
    main: '${preset.colors.primary.main}',
    light: '${preset.colors.primary.light}',
    dark: '${preset.colors.primary.dark}',
    contrastText: '${preset.colors.primary.contrastText}',
  }`
  );

  // Update secondary colors
  content = content.replace(
    /secondary:\s*{[^}]+}/s,
    `secondary: {
    main: '${preset.colors.secondary.main}',
    light: '${preset.colors.secondary.light}',
    dark: '${preset.colors.secondary.dark}',
    contrastText: '${preset.colors.secondary.contrastText}',
  }`
  );

  fs.writeFileSync(colorsPath, content);
  return true;
}

function showPresets() {
  console.log('\n🎨 Available Color Presets:\n');
  Object.entries(colorPresets).forEach(([key, preset]) => {
    console.log(`${key}: ${preset.name}`);
  });
  console.log('\nUsage: node scripts/update-colors.js <preset-name>');
}

function main() {
  const args = process.argv.slice(2);
  
  if (args.length === 0) {
    showPresets();
    return;
  }

  const presetName = args[0];
  const preset = colorPresets[presetName];

  if (!preset) {
    console.error(`❌ Preset "${presetName}" not found.`);
    showPresets();
    return;
  }

  console.log(`\n🎨 Updating colors to: ${preset.name}`);
  
  if (updateColorsFile(preset)) {
    console.log('✅ Colors updated successfully!');
    console.log('🔄 Restart your development server to see changes.');
  } else {
    console.log('❌ Failed to update colors.');
  }
}

// Run the script
main(); 