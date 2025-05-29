.PHONY: all lint build run stop restart logs clean

FORMATS		?= **/*.{html,css,js}
IMAGE_NAME   	?= mksmvnv
SSL_PATH     	?= /etc/nginx/ssl

all: lint build run

lint:
	@npx prettier --write $(FORMATS)

build:
	@docker build -t $(IMAGE) .

run:
	@docker run -d --name $(IMAGE) -p 80:80 -p 443:443 \
	-v $$PWD/ssl:$(SSL) --restart unless-stopped $(IMAGE)

stop:
	@docker stop $(IMAGE)

restart:
	@docker restart $(IMAGE)

logs:
	@docker logs -f $(IMAGE)

clean:
	@docker rm -f $(IMAGE)
