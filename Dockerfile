FROM node:6.6
RUN mkdir /app
WORKDIR /app
ADD package.json /app
RUN npm install
COPY . .

EXPOSE 3600
CMD ["node", "server/server.js"]