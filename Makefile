.PHONY: all
all:
	gem install bundler
	bundle install
	make build

.PHONY: build
build:
	bundle exec jekyll build

.PHONY: serve
serve:
	bundle exec jekyll serve --livereload --future

.PHONY: serve.polling
serve.polling:
	bundle exec jekyll serve --livereload --future --force_polling
