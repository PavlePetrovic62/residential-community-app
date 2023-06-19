FROM node:16.18.0 as build
WORKDIR /app

COPY package.json .

RUN npm install

COPY . .
RUN npm run build

FROM nginx:1.22.1
COPY --from=build /app/build /usr/share/nginx/html
COPY ./nginx/nginx.config /etc/nginx/conf.d/default.conf