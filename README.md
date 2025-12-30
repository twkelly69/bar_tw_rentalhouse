# Hierarchical bar chart

https://observablehq.com/@d3/hierarchical-bar-chart@369

View this notebook in your browser by running a web server in this folder. For
example:

~~~sh
npx http-server
~~~

Or, use the [Observable Runtime](https://github.com/observablehq/runtime) to
import this module directly into your application. To npm install:

~~~sh
npm install @observablehq/runtime@5
npm install https://api.observablehq.com/d/0b07c3790ae4af2c@369.tgz?v=3
~~~

Then, import your notebook and the runtime as:

~~~js
import {Runtime, Inspector} from "@observablehq/runtime";
import define from "@d3/hierarchical-bar-chart";
~~~

To log the value of the cell named “foo”:

~~~js
const runtime = new Runtime();
const main = runtime.module(define);
main.value("foo").then(value => console.log(value));
~~~

## GitHub Pages deployment

This repository is configured to deploy to GitHub Pages from the `main` branch. The
workflow in [`.github/workflows/deploy.yml`](.github/workflows/deploy.yml) uploads the
static site from the repository root and publishes it to the `github-pages`
environment. Push to `main` or trigger the workflow manually to update the hosted
chart.

## Data

The chart now visualizes Taiwan rental listings broken down by region, city, and
listing type using the data in [`files/2025.json`](files/2025.json). Update this
file if you need to adjust the displayed rent levels.
