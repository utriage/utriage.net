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
	bundle exec jekyll serve --incremental --livereload --future

.PHONY: serve.polling
serve.polling:
	bundle exec jekyll serve --incremental --livereload --future --force_polling
