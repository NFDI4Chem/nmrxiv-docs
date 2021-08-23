# Build stage
FROM node:16-alpine3.11 as builder

WORKDIR /app/website
COPY . /app/website

RUN apk add autoconf libtool automake
RUN apk --update add gcc make g++ zlib-dev
RUN yarn

#EXPOSE 3000
RUN yarn build
#CMD ["yarn", "start"]

## production environment
FROM nginx:1.21.1-alpine

# Create app directory
WORKDIR /app

COPY --from=builder ./app/website/nginx.conf /etc/nginx/
COPY --from=builder /app/website/build /usr/share/nginx/html
CMD ["nginx", "-g", "daemon off;"]
