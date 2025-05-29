FROM nginx:alpine

COPY ./conf/nginx.conf /etc/nginx/conf.d/default.conf
COPY . /usr/share/nginx/html

EXPOSE 80 443
