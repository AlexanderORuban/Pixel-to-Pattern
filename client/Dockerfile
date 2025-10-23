# Official Node.js image with lightweight Linux Alpine OS
FROM node:18-alpine

# Set working directory inside container
WORKDIR /app

# Copy package files into container
COPY package*.json ./

# Install all dependencies
RUN npm install --production

# Copy all the code into the container
COPY . .

# Expose PORT 3001 for frontend server to run on
EXPOSE 3001

# Define default command to start the frontend
CMD ["npm", "start"]