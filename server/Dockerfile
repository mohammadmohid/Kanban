# Base image
FROM node:16-slim

# Set working directory
WORKDIR /app

# Copy package files
COPY package*.json ./

# Install dependencies
RUN npm install

# Copy app source
COPY . .

# Expose port and start the app
EXPOSE 5000
CMD ["node", "index.js"]
