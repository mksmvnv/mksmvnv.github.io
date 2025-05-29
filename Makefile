.PHONY: all lint build run stop restart logs clean

FORMATS		?= **/*.{html,css,js}
IMAGE_NAME   	?= mksmvnv
SSL_PATH     	?= /etc/nginx/ssl

all: lint build run

lint:
	@npx prettier --write $(FORMATS)

build:
	@docker build -t $(IMAGE_NAME) .

run:
	@docker run -d --name $(IMAGE_NAME) -p 80:80 -p 443:443 \
	-v $$PWD/ssl:$(SSL_PATH) --restart unless-stopped $(IMAGE_NAME)

stop:
	@docker stop $(IMAGE_NAME)

restart:
	@docker restart $(IMAGE_NAME)

logs:
	@docker logs -f $(IMAGE_NAME)

clean:
	@docker rm -f $(IMAGE_NAME)
	@docker rmi $(IMAGE_NAME)
