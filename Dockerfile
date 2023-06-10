FROM arm64v8/node:lts-slim
WORKDIR /app

# add monitoring packages (optional)
RUN apt update && \
    apt install htop procps -y


# Setup Scripts
COPY . .source
RUN cd .source && npm install
RUN cd .source && npm run build
RUN cp -r .source/dist/* .
RUN rm -rf .source

RUN NODE_ENV=production npm install

# Network
EXPOSE 80

# Environment Variables
ENV APP_PORT=80

# Execute Command
CMD ["node", "index.js"]