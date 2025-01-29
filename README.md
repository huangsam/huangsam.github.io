# GitHub Pages for huangsam

[![GitHub Actions Workflow Status](https://img.shields.io/github/actions/workflow/status/huangsam/huangsam.github.io/ci.yml)](https://github.com/huangsam/huangsam.github.io/actions)
[![License](https://img.shields.io/github/license/huangsam/huangsam.github.io)](https://github.com/huangsam/huangsam.github.io/blob/main/LICENSE)

Hosts the code for my personal site.

The codebase has went through multiple phases of JavaScript, but here's a
high-level overview of what's changed over the years:

<table>
  <tr>
    <th>Year</th>
    <th>Javascript</th>
    <th>Testing</th>
    <th>Bundler</th>
  </tr>
  <tr>
    <td>2017</td>
    <td>Vanilla JS</td>
    <td>Jest, Puppeteer</td>
    <td>Webpack</td>
  </tr>
  <tr>
    <td>2021</td>
    <td>React, Gatsby</td>
    <td>N/A</td>
    <td>Webpack</td>
  </tr>
  <tr>
    <td>2024</td>
    <td>Svelte, SvelteKit</td>
    <td>Vitest</td>
    <td>Vite</td>
  </tr>
</table>

In all of these cases, the site's HTML and CSS were written from the ground up. No
CSS libraries and frameworks (think Tailwind and Bootstrap) were used in the process
of building this site. It was personally beneficial, as it encouraged me to learn
CSS styling at a deeper level.

## Getting started

Getting started is as simple as:

```bash
yarn install
yarn dev
```

The site is now running at <http://localhost:5173/>.

## Running validations

Running validations is as simple as:

```bash
yarn lint
yarn test
```

The site is now tested with linters and tests.

## Deploying site

Deploying the site is as simple as:

```bash
yarn deploy
```

The site is now deployed to the `gh-pages` branch.
