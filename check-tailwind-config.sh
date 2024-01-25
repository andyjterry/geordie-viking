#!/bin/bash

# Check if tailwind.css file exists in the assets/css directory
if [ -f "assets/css/tailwind.css" ]; then
  echo "Tailwind CSS file found in assets/css directory."
else
  echo "Error: The 'tailwind.css' file does not exist in the 'assets/css' directory."
  exit 1
fi

# Check if postcss.config.js exists in the project root directory
if [ -f "postcss.config.js" ]; then
  echo "postcss.config.js file found in project root directory."
else
  echo "Error: The 'postcss.config.js' file does not exist in the project root directory."
  exit 1
fi

# Check if nuxt.config.js exists in the project root directory
if [ -f "nuxt.config.ts" ]; then
  echo "nuxt.config.ts file found in project root directory."
else
  echo "Error: The 'nuxt.config.js' file does not exist in the project root directory."
  exit 1
fi

# Check if package.json exists in the project root directory
if [ -f "package.json" ]; then
  echo "package.json file found in project root directory."
else
  echo "Error: The 'package.json' file does not exist in the project root directory."
  exit 1
fi

# Check if the 'node_modules' directory exists
if [ -d "node_modules" ]; then
  echo "node_modules directory found."
else
  echo "Error: The 'node_modules' directory does not exist. Please run 'npm install' to install dependencies."
  exit 1
fi

# Additional checks or validations can be added as needed

echo "All checks passed. Your project appears to be correctly configured for Tailwind CSS with Nuxt.js."
