hapi-api-scaffolding deployed in heroku
===========

A sample api running hapi on heroku


## Getting started

Before cloning this repository and reploying to heroku install the [Heroku Toolbelt](https://toolbelt.heroku.com/).

1. `git clone https://github.com/kevin1193/hapi-api-scaffolding && cd hapi-heroku`
2. `heroku login`
3. `heroku create`
4. `git push heroku master`
5. `heroku ps:scale web=1`
5. `heroku open`
