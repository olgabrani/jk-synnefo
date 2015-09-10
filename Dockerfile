FROM shawnzhu/ruby-nodejs
RUN gem install jekyll

ADD . /src
WORKDIR /src
RUN npm install -y -g

CMD [ "jekyll", "serve", "-H", "0.0.0.0" ]
