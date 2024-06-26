# AngularWTailwind

👋 Hi, I’m **syrenly** and welcome to **angular-w-tailwind** repo!

This is a sample app that uses Tailwind and DaisyUI frameworks.

This project was generated with [Angular CLI](https://github.com/angular/angular-cli) version 17.1.2, currently updated to version 17.3.1.

⚗️ Unit tests implemented.

## Development server

Run `ng serve` for a dev server. Navigate to `http://localhost:4200/`. The application will automatically reload if you change any of the source files.

## Build

Run `ng build` to build the project. The build artifacts will be stored in the `dist/` directory.

## Running unit tests

Run `ng test` to execute the unit tests via [Karma](https://karma-runner.github.io).

### Last code coverage

Run `npm run test:coverage` to get stats about the code coverage. Current:

```
=============================== Coverage summary ===============================
Statements   : 100% ( 29/29 )
Branches     : 100% ( 4/4 )
Functions    : 100% ( 5/5 )
Lines        : 100% ( 25/25 )
================================================================================
```

## Lint

Run `ng lint` to run the Angular lint.

Run `npm run eslint` to run the ES lint.

Run `npm run eslint:fix` to run the ES lint and apply fixes.

## Docker

Install docker in your machine. From the root folder of this application, run

`docker build -t angular-demo:latest .`

It will need a couple of minutes to set up the container the first time. The following runs will be faster.

Run `docker-compose up`
