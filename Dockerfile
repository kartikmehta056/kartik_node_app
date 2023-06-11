FROM node:lts-alpine
WORKDIR /app

# add monitoring packages (optional)
RUN apk update && apk add htop procps 


# Setup Scripts
COPY . .source
RUN cd .source && npm install
RUN cd .source && npm run build
RUN cp -r .source/dist/* .
RUN rm -rf .source

RUN npm install pm2 -g

RUN NODE_ENV=production npm install

# Network
EXPOSE 80

# Environment Variables
ENV APP_PORT=80

# Execute Command
CMD ["pm2-runtime", "index.js", "--name", "my-app"]
