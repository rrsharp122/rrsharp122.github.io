#!/bin/bash

# Script to set up or update the PaperMod theme
# Run this script to initialize or refresh the theme

# Navigate to the site directory
cd $(dirname "$0")

# Properly remove the submodule if it exists to avoid errors
if [ -d ".git" ] && git config --file .gitmodules --get-regexp "submodule.themes/PaperMod.path" | grep -q "themes/PaperMod"; then
  echo "Removing existing PaperMod submodule configuration..."
  git submodule deinit -f themes/PaperMod
  git rm -f themes/PaperMod
  rm -rf .git/modules/themes/PaperMod
fi

# Remove any lingering directory just in case
rm -rf themes/PaperMod

# Add the theme as a new git submodule
echo "Adding PaperMod theme as a git submodule..."
git submodule add --depth=1 https://github.com/adityatelange/hugo-PaperMod.git themes/PaperMod

echo "PaperMod theme has been set up successfully."
echo "Run 'hugo server -D' to preview your site locally."