FROM node:16

WORKDIR /app

COPY package*.json ./

RUN npm install

COPY . .

# Build React app
RUN npm run build

# Serve with static server
RUN npm install -g serve
EXPOSE 3000
CMD ["serve", "-s", "build", "-l", "3000"]
