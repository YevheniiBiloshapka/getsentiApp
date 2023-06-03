# Start from the Node.js 14 base image
FROM node:20-alpine

# Set working directory
WORKDIR /app

# Install dependencies
COPY package*.json .
RUN npm install

# Copy the rest of the project
COPY . .

