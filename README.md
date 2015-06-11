## Microservices Day

This repo contains the public website for the Microservices day public website, located at [http://microservicesday.com](http://microservicesday.com).

## Development

The site is built using a simple Gulp toolchain which consists of several key tasks:

**HTML** - build the Handlebars templates in `./pages` using data passed in from the `./data` directory and put them in `./dist/index.html`. There is currently only one page

**CSS** - build the final CSS from the LESS contained in `./styles` and compile it to `./dist/microservices-day.css`

**JS** - Concat and uglify explicitly declared NPM managed clientside libs into `./dist/js/vendor.js`. Browserfy, Babelify, concat then copy ES6 app JS into `./dist/js/app/js`

**Images** - Copy everything in `./images/` into `./dist/images`

**Static assets** - Copy everything in `./static/` into `./dist`

## The following top level Gulp tasks are available

```
gulp serve // start dev server
gulp build // build production assets
gulp deploy // run 'build' then automagically deploy to gh-pages (need repo write access)
``` 

## License

There are trademarks and brand names that are proprietary, and all their rights are reserved. This repository or license does not in any way give license for their usage without explicit written permission.

However, the code and non-protected marks and names are licensed under the MIT license.