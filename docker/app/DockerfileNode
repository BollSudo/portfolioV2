FROM node:24-slim

WORKDIR /app

# Install app dependencies
COPY package*.json .
RUN npm install

# Copy sources
COPY . .

# Build app
RUN npm run build

# Serve app
RUN npm install -g serve

EXPOSE 3000

CMD ["serve", "-s", "dist", "-l", "3000"]