FROM node:24-slim AS build
WORKDIR /app
COPY . .
RUN npm install
CMD ["npm", "start"]
EXPOSE 3001