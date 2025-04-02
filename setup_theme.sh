#!/bin/bash

# Navigate to the site directory
cd /Users/cfadmin_1/Documents/GradSchool/Professional/my-website

# Remove existing theme directory if it exists
rm -rf themes/PaperMod

# Add the theme as a git submodule
git submodule add --depth=1 https://github.com/adityatelange/hugo-PaperMod.git themes/PaperMod

echo "PaperMod theme has been set up as a git submodule."
