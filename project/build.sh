#!/bin/bash

# Clean previous build
rm -rf dist

# Install dependencies
npm install

# Build the project
npm run build

# Copy static assets
mkdir -p dist
rsync -av --exclude='node_modules' --exclude='.git' --exclude='dist' . dist/
