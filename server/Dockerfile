FROM node:12.19.0-alpine3.12
WORKDIR /app
COPY package*.json ./
RUN npm install
COPY . .
EXPOSE 4000
CMD ["node", "/app/index.js"]