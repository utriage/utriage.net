# frozen_string_literal: true

# Bridge for Cloudflare Pages legacy build command:
# When Cloudflare Pages runs `bundle exec jekyll build`,
# this Gemfile intercepts execution and runs `npm run build` directly.
system("npm", "run", "build") || exit(1)
exit 0
