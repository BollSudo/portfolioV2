FROM nginx:alpine

RUN apk update && apk add --no-cache curl
RUN rm -rf /usr/share/nginx/html/*
COPY ./dist/ /usr/share/nginx/html/
COPY ./docker/config/nginx.conf /etc/nginx/conf.d/default.conf

CMD ["nginx", "-g", "daemon off;"]