# Step 1: Use an official Node.js runtime as a parent image
FROM node:16-alpine as build
ARG ENVFILE_PATH=.env

# Step 2: Set the working directory in the container
WORKDIR /app

# Step 3: Copy the package.json files from your project into the container
COPY package*.json ./

# Step 4: Install your application's dependencies inside the container
RUN npm install --force

# Step 5: Copy the rest of your application's code into the container
COPY . .

# Step 6: Build your React app for production
RUN npm run build

# Step 7: Use nginx to serve the React app
FROM nginx:alpine

# Step 8: Copy the build output to replace the default nginx contents.
COPY --from=build /app/dist /usr/share/nginx/html

# Step 9: Expose port 80 to the Docker host, so we can access it
# from the outside.
EXPOSE 80

# Step 10: Define the command to run your app using CMD which defines your runtime
# Here we are using nginx to serve the static files
CMD ["nginx", "-g", "daemon off;"]