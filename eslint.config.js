import globals from 'globals';
import js from '@eslint/js';
import prettier from 'eslint-config-prettier';
import svelte from 'eslint-plugin-svelte';
import ts from 'typescript-eslint';

import { fileURLToPath } from 'node:url';
import { includeIgnoreFile } from '@eslint/compat';

import svelteConfig from './svelte.config.js';

const gitignorePath = fileURLToPath(new URL('./.gitignore', import.meta.url));

export default [
  includeIgnoreFile(gitignorePath), // skip linting for ignored files
  js.configs.recommended, // baseline JavaScript config
  ...ts.configs.recommended, // baseline TypeScript config
  ...svelte.configs['flat/recommended'], // baseline Svelte config
  prettier, // baseline Prettier config
  ...svelte.configs['flat/prettier'], // override with Svelte config for Prettier
  {
    languageOptions: {
      globals: {
        ...globals.browser, // globals for browser runtime
        ...globals.node, // globals for Node runtime
      },
    },
  },
  {
    files: ['**/*.svelte'], // apply this config only to Svelte files
    languageOptions: {
      parserOptions: {
        parser: ts.parser, // use TypeScript parser
        svelteConfig, // use custom Svelte config
      },
    },
    rules: {
      'svelte/no-navigation-without-resolve': 'off', // ignore this rule for Svelte files
    },
  },
];
