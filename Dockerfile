FROM node:14

 

# Create app directory

WORKDIR /app1

# Install app dependencies

COPY package*.json ./



RUN npm install

# If you are building your code for production

# Bundle app source

COPY . ./



CMD [ "npm", "start" ]