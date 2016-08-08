@echo off
:: SSL_CERT_FILE env var and root CA file is required
:: `--future` option allows rendering of future-dated posts
jekyll serve --config _config.yml,_config_dev.yml --future $@
