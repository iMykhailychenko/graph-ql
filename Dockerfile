FROM node:14-alpine
WORKDIR /app
COPY backend/package.json yarn.lock ./
RUN yarn install
COPY . .