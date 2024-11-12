# Stage 1: Build the application
FROM node:14-alpine as build-stage
WORKDIR /app
COPY package*.json ./
RUN npm install
COPY . .
RUN npm run build

# Stage 2: Run the application
FROM node:14-alpine
WORKDIR /app
COPY package*.json ./
RUN npm install --only=production
COPY --from=build-stage /app/.nuxt ./.nuxt
COPY --from=build-stage /app/static ./static
COPY nuxt.config.js ./

EXPOSE 3000
CMD ["npm", "start"]
