# Use Node.js 18 as the base image
FROM node:18-alpine

# Install OpenSSL (required for some Node.js modules)
RUN apk add --no-cache openssl

# Set the working directory in the container
WORKDIR /app

# Copy package.json and package-lock.json
COPY package*.json ./

# Install dependencies
RUN npm install

# Copy the application code
COPY . .

# Build the Nuxt 3 application
RUN npm run build

# Expose the port the app will run on
EXPOSE 3000

# Start the Nuxt 3 application
CMD ["npm", "run", "start"]
