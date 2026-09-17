FROM ruby:3.3-bookworm

WORKDIR /site

RUN apt-get update \
  && apt-get install --no-install-recommends -y build-essential \
  && rm -rf /var/lib/apt/lists/*

CMD ["sh", "-c", "bundle install && bundle exec jekyll serve --livereload --force_polling --host 0.0.0.0"]
