jk-synnefo
==========

Use [Jekyll](http://jekyllrb.com/) to generate [synnefo.org](https://www.synnefo.org/) website.

## Requirements

In order to generate the static files, you need to install **Jekyll** following [Jekyll installation instructions](http://jekyllrb.com/docs/installation/).
I assume that you have [nodejs](http://nodejs.org/) and [npm](https://www.npmjs.org/) installed. 
Their versions, used in this project, are listed in `requirements.txt`.

## Build and serve (without Grunt)

Install **compass** following the [compass installation guide](http://compass-style.org/install/)

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

## Build and serve (with Grunt)

Move to the `jk-synnefo` folder and install project dependencies with 
```
npm install
```
Then run grunt with the following options:

* `grunt` : Will compile sass files and then build all static pages
* `grunt serve`: Will compile sass files, build all static pages, run a local server, found at `http://0.0.0.0:4000` and watch for changes in Jekyll pages.
If you want to watch for changes in sass files, run `compass watch` in a separate terminal.


## Build using Docker

Just run `docker build .` and everything should be build automatically.

## Output files

All output static site pages and files are found under `_site/` folder.
