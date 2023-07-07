FROM node:18-alpine as build
WORKDIR /app
COPY package.json .
RUN npm config set legacy-peer-deps true
RUN npm install
COPY . .
COPY ./config/env/.env .env
RUN npm run build


FROM nginx:alpine
COPY config/nginx/nginx.conf /etc/nginx/nginx.conf
COPY --from=build /app/build /usr/share/nginx/html