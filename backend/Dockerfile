FROM node:18-alpine

# Create app directory
WORKDIR /app

# Install dependencies first (use package-lock if present)
COPY package*.json ./

# Use npm ci for reproducible installs; fall back to npm install if no lockfile
RUN if [ -f package-lock.json ]; then npm ci --only=production; else npm install --only=production; fi

# Copy app source
COPY . .

ENV NODE_ENV=production

# Expose default port
EXPOSE 5000

# Start the server
CMD ["node", "server.js"]
