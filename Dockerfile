FROM node:22.13.1 AS builder

WORKDIR /app

COPY package*.json ./

RUN npm install --save-dev vite

COPY . .

RUN npm run build

# Use a lightweight static server
RUN npm install -g serve


EXPOSE 3000

CMD ["serve", "-s", "dist", "-l", "3000"]

#CMD ["serve", "-s", "build", "-l", "3000"]