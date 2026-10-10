.PHONY: all
all:
	npm install
	npm run build

.PHONY: dev
dev:
	npm run dev

.PHONY: serve
serve: dev

.PHONY: build
build:
	npm install
	npm run build

.PHONY: check
check:
	npm run check

.PHONY: preview
preview:
	npm run preview
