# Use official Node.js image from Docker Hub
FROM node:20

# Set the working directory inside the container
WORKDIR /usr/src/app

# Copy package files first for better caching
COPY package*.json ./
RUN npm install
# Then copy the rest of the source code
COPY ./src ./

# Expose the Dev Port
EXPOSE 5173