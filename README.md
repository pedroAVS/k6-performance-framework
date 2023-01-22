# k6 Performance tests

## Installation

```bash
brew install k6
```

------

## Run Locally

```
k6 run ./scripts/100.users.service.js
```
To build the image and run through docker, use:
```
docker build -t test .
docker run test run ./scripts/100.users.service.js
```

----------

## Project structure

| scripts\
| -common\
| --- constants.js\
| --- scenarios.js\
| --- tests.js\
| - 100.users.*.js

### - **constants.js**
this file should be used to store any constant value. right now is being used to store the values for the baseURL that are later on defined on the spec files

### - **scenarios.js**
Where it is defined the scenario like the ammount of virtual users, the executors, duration and a lot more options

### - **tests.js**
The test actions are added here, the http calls and endpoints to connect, tags, errorRates and trends.

### - **100.users.*.js**
This is where it shall be defined which baseURL should be used, what endpoints should the tests.js have, and the default function at the end, see it as a public void main, *it's the first method that k6 will run.*
Also this is where the report is generated at the end of the run, with the "handleSummary" function.

------------
## About k6:

### What k6 does not:
k6 is a high-performing load testing tool, scriptable in JavaScript. The architectural design to have these capabilities brings some trade-offs:

* Does not run in a browser
As a result, k6 does not render webpages the same way a browser does. This also means that libraries relying on browser APIs won't be compatible. By skipping the browser, the consumption of system resources are dramatically decreased, making the tool significantly more performant. 
  
k6 can still be used for load testing websites. You can even run a test from a recorded user session.

* Does not run in NodeJS
JavaScript is not generally well suited for high performance. To achieve maximum performance, the tool itself is written in Go, embedding a JavaScript runtime allowing for easy test scripting.

If you want to import npm modules or libraries using NodeJS APIs, you can bundle npm modules with webpack and import them in your tests.

https://k6.io/docs/