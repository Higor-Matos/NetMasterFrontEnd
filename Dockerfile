FROM node:14.17.1 AS build
WORKDIR /app

COPY package*.json ./
RUN npm install
COPY . .

RUN npm run build

FROM nginx:1.21.1-alpine
COPY --from=build /app/build /usr/share/nginx/html
EXPOSE 80
CMD ["nginx", "-g", "daemon off;"]
