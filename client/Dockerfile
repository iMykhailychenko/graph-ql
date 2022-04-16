# Use official node image
FROM node:14-alpine AS build

WORKDIR /app/client
COPY ./ /app/client
RUN yarn install
RUN yarn run build


# Use official nginx image
FROM nginx:stable-alpine
COPY --from=build /app/client/dist/client /app/client
COPY ./nginx.conf /etc/nginx/conf.d/nginx.conf
