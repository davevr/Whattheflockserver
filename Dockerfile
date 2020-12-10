FROM node:12-alpine
WORKDIR /wtfserver
COPY . .
RUN yarn install --production
CMD ["node", "./index.js"]