jk-synnefo
==========

Use Jekyll to generate synnefo.org website https://www.synnefo.org/

We use [Jekyll](http://jekyllrb.com/) to generate the [synnefo.org](https://www.synnefo.org/) website.

## Requirements

In order to generate the static files, you need to install **Jekyll** following [Jekyll installation instructions](http://jekyllrb.com/docs/installation/) and **compass** according to [compass installation guide](http://compass-style.org/install/). 

## Build

Once compass is installed, run the command 
```
compass watch --output-style=compressed
```
from inside the `jk-synnefo/static folder`. This will compile all sass files into one *minified* main.css file put under `jk-synnefo/static/stylesheets` folder.

Once Jekyll is installed, run the command 
```
jekyll build
```
from inside the `jk-synnefo` folder.

The static files will then be compiled and copied into ./_site folder.

If you want to run a local server to preview the generated site, you can type
```
jekyll serve
```
and a development server will run at http://localhost:4000/

For detailed options visit:
[Jekyll official site](http://jekyllrb.com/) and
[Compass homepage](http://compass-style.org/)

