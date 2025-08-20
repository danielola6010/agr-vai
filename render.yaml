#!/bin/bash
set -e

echo "=== INSTALLING DEPENDENCIES ==="
npm install

echo "=== BUILDING FRONTEND ==="
echo "Current directory: $(pwd)"
echo "Client directory exists: $(ls -la client/ | head -5)"
echo "Building with simplified Vite config..."
npx vite build --config vite.config.prod.ts

echo "=== BUILDING BACKEND ==="
npx esbuild server/index.ts --platform=node --packages=external --bundle --format=esm --outdir=dist

echo "=== BUILD COMPLETED ==="
echo "Dist contents:"
ls -la dist/ || echo "dist/ not found yet"
