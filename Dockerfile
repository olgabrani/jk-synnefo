FROM node

RUN apt-get update && apt-get install -y --no-install-recommends ruby rubygems ruby-dev
RUN gem install jekyll compass

ADD . /src
WORKDIR /src
RUN compass compile static --output=compressed

CMD ["jekyll", "serve", "-H", "0.0.0.0"]
