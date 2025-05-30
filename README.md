# GitHub Pages for huangsam

[![GitHub Actions Workflow Status](https://img.shields.io/github/actions/workflow/status/huangsam/huangsam.github.io/ci.yml)](https://github.com/huangsam/huangsam.github.io/actions)
[![License](https://img.shields.io/github/license/huangsam/huangsam.github.io)](https://github.com/huangsam/huangsam.github.io/blob/main/LICENSE)

Hosts the code for my personal site.

The codebase has went through multiple phases of JavaScript - and Typescript - but
here's a high-level overview of what's changed over the years:

<table>
  <tr>
    <th>Year</th>
    <th>Core</th>
    <th>Test</th>
    <th>Bundle</th>
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
    <td>Vitest, Playwright</td>
    <td>Vite</td>
  </tr>
</table>

In all of these cases, the site's HTML and CSS were written from the ground up. No
CSS libraries and frameworks (think Tailwind and Bootstrap) were used in the process
of building this site. It was personally beneficial, as it encouraged me to learn
CSS styling at a deeper level.

## Getting started

Here are the commands you need to know:

```shell
# Install dependencies
pnpm install

# Run dev server on http://localhost:5173
pnpm dev

# Build and deploy to the gh-pages branch
pnpm github
```
