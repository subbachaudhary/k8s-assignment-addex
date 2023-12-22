# Use a Node.js base image with version 18
FROM node:18 as build-stage

# Set the working directory
WORKDIR /app

# Copy package.json and package-lock.json
COPY package*.json ./

# Install dependencies
RUN npm ci

# Copy the rest of the source code
COPY . .

# Build the frontend
RUN npm run build

# Use a lightweight Nginx image for the production stage
FROM nginx:stable-alpine as production-stage

# Copy the built frontend files to the Nginx server directory
COPY --from=build-stage /app/build /usr/share/nginx/html
COPY nginx-conf/nginx.conf /etc/nginx/conf.d/default.conf
RUN chmod -R 777 /usr/share/nginx/html
# Expose port 80 for Nginx
EXPOSE 80

# Start Nginx when the container starts
CMD ["nginx", "-g", "daemon off;"]
