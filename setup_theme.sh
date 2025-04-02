#!/bin/bash

# Script to set up or update the PaperMod theme
# Run this script to initialize or refresh the theme

# Navigate to the site directory
cd $(dirname "$0")

# Remove existing theme directory if it exists
if [ -d "themes/PaperMod" ]; then
  echo "Removing existing PaperMod theme..."
  rm -rf themes/PaperMod
fi

# Add the theme as a git submodule
echo "Adding PaperMod theme as a git submodule..."
git submodule add --depth=1 https://github.com/adityatelange/hugo-PaperMod.git themes/PaperMod

echo "PaperMod theme has been set up successfully."
echo "Run 'hugo server -D' to preview your site locally."
