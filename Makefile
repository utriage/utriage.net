.PHONY: all
all:
	gem install bundler
	bundle install
	make build

.PHONY: build
build:
	bundle exec jekyll build --incremental

.PHONY: serve
serve:
	bundle exec jekyll serve --incremental

.PHONY: serve.nowatch
serve.nowatch:
	bundle exec jekyll serve --no-watch --livereload --future
