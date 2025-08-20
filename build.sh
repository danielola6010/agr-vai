#!/bin/bash
set -e

echo "Installing dependencies..."
npm install

echo "Building frontend with production config..."
npx vite build --config vite.config.prod.ts

echo "Building backend..."
npx esbuild server/index.ts --platform=node --packages=external --bundle --format=esm --outdir=dist

echo "Build completed successfully!"
