.PHONY: all lint

TARGETS=**/*.{html,css,js}

all: lint

lint:
	npx prettier --write $(TARGETS)
