#!/bin/sh
# Simple start script for Railpack / build environments that expect start.sh
# Installs deps (if needed) and starts the server using package.json scripts.

set -e

if [ -f "package-lock.json" ]; then
  echo "Found package-lock.json — running npm ci"
  npm ci --only=production || npm install --only=production
else
  echo "No package-lock.json — running npm install"
  npm install --only=production || true
fi

echo "Starting server..."
exec npm start
