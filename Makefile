.PHONY: all lint

FORMATS ?= **/*.{html,css,js}

all: lint

lint:
	npx prettier --write $(FORMATS)
