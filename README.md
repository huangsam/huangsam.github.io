# GitHub Pages for huangsam

Hosts the code for my personal website.

The codebase has went through multiple JavaScript stages, but here's a
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
    <td>Vanille JS</td>
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

## Getting started

Getting started is as simple as:

```bash
yarn install
yarn dev
```

The site is now running at <http://localhost:5173/>.

## Deploying site

Deploying the site is as simple as:

```bash
yarn deploy
```

The site is now deployed to the `gh-pages` branch.
