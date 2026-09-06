# Guardrails

## CSS

- Write pure vanilla CSS without external libraries or frameworks.
- Use centralized custom properties (`var(--...)`) for theme tokens and spacing.
- Use `768px` as the standard mobile breakpoint across all components.
- Use `480px` as the secondary breakpoint for narrow phone adjustments.
- Do not author obsolete vendor prefixes (`-webkit-`, `-moz-`, `-ms-`).

## Config

- Keep root configs minimal and close to standard SvelteKit/Vite defaults.
- Avoid introducing ad-hoc config files (e.g. `.npmrc`, custom wrappers).
- Never bypass Husky pre-commit checks (`lint-staged`, `vitest`).

## pnpm

- Exclusively use `pnpm` for all package management and lifecycle scripts.
- Never invoke `npm` or `yarn`.
- Keep `pnpm-lock.yaml` strictly in sync with dependency changes.
