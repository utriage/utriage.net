@echo off
:: SSL_CERT_FILE env var and root CA file is required
jekyll serve --incremental --config _config.yml,_config_dev.yml $@
