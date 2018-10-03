# Example Simple API with Node Postgres + Restify
Simple Example API Rest, using Node, restify, PostgreSQL, Docker and docker-compose.

## Getting Started :rocket:

First we'll clone the project.

```shell
$ git clone https://github.com/gustafsilva/example-node-postgres.git
```

Open the project and install node dependencies.

NPM:
```shell
$ cd example-node-postgres
$ npm install
```
yarn:
```shell
$ cd example-node-postgres
$ yarn
```

Run the database in the container.

```shell
$ cd postgres
$ docker-compose up -d
```

Go back to the initial project folder and run the restify server.
```shell
$ cd ../
$ npm start
```

### Ready! :+1: You can already hack the project. :sunglasses:

## Dependencies
* [Node](https://nodejs.org/)
* [NPM](https://www.npmjs.com/)
* or [Yarn](https://yarnpkg.com/)
* [Docker](https://www.docker.com/)
* [docker-compose](https://docs.docker.com/compose/)

## Debugging project 

Some lines of the projects are commented (usually of `logs`), you can withdraw the comment to facilitate the debug in the `terminal`.

You can also run the project in development mode (using `nodemode` to capture changes on the server) with the command:
NPM:
```shell
$ npm run start-dev
```
Yarn
```shell
$ yarn start-dev
```

## Tests

To run the tests, make sure the database server is running and run the command:

NPM:
```shell
$ npm test
```
Yarn:
```shell
$ yarn test
```
[Jest](https://jestjs.io/) and [supertests](https://www.npmjs.com/package/supertest) were used to automate the tests. :heart:

## Automated commands :fire:
List of commands that can by using `npm`:
```shell
  $ npm install # install all node dependecies
  $ npm start # start server
  $ npm run start-dev # start development mode server (any change restarts the server)
  $ npm test # perfoms all the tests 
  $ npm run generate-docs # generates html documentation
  $ npm run clean-docs # remove html documentation
  $ npm run clean # remove documentation in thtml and modules node
```
List of commands that can by using `yarn`:
```shell
  $ yarn # install all node dependecies
  $ yarn start # start server
  $ yarn start-dev # start development mode server (any change restarts the server)
  $ yarn test # perfoms all the tests 
  $ yarn generate-docs # generates html documentation
  $ yarn clean-docs # remove html documentation
  $ yarn clean # remove documentation in thtml and modules node
```

## Documentation
You can access the documentation [here](https://gustafsilva.github.io/example-node-postgres/docs/).
Or you can generate locally using the command:

NPM:
```shell
$ npm run generate-docs
```
yarn:
```shell
$ yarn generate-docs
```

Just open the `docs/index.html` file in your browser and start browsing... :green_book:

[jsdoc](http://usejsdoc.org) was used for document automation. :heart:

## More informations

### Single entity of the database:

![](assets/img/eer_diagram.png)

## Contribution
If you have found an error or want to improve the example, create an `issue` or `pull request`.

## Licence
The contents of this repository are covered under the [MIT License](https://github.com/gustafsilva/example-node-postgres/blob/master/LICENSE).