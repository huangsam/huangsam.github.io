<script lang="ts">
  import './style.css';
  import { onMount, type Snippet } from 'svelte';
  import { initVimNavigation } from '$lib/utils/vimNavigation';
  import KeyboardShortcutsModal from '$lib/components/KeyboardShortcutsModal.svelte';
  import { EMPLOYMENT_INFO, FOCUS_AREAS, SOCIAL_PROFILES } from '$lib';

  interface Props {
    children?: Snippet;
  }

  let { children }: Props = $props();
  let showShortcuts = $state(false);
  const now = new Date();

  const skills = Array.from(
    new Set([
      ...FOCUS_AREAS.map((area) => area.name),
      ...FOCUS_AREAS.flatMap((area) => area.technologies),
    ]),
  );

  const jsonLd = {
    '@context': 'https://schema.org',
    '@graph': [
      {
        '@type': 'WebSite',
        '@id': 'https://sambyte.net/#website',
        url: 'https://sambyte.net',
        name: 'Sam Huang',
        description:
          'Engineer at day. Artist at night. Software engineer, photographer, and musician.',
      },
      {
        '@type': 'Person',
        '@id': 'https://sambyte.net/#person',
        name: 'Sam Huang',
        url: 'https://sambyte.net',
        image: 'https://sambyte.net/profile.jpg',
        jobTitle: EMPLOYMENT_INFO.role,
        worksFor: {
          '@type': 'Organization',
          name: EMPLOYMENT_INFO.company,
        },
        sameAs: SOCIAL_PROFILES.map((profile) => profile.url),
        knowsAbout: skills,
        skills: skills,
      },
    ],
  };

  onMount(() => {
    const cleanup = initVimNavigation({
      onOpenShortcuts: () => {
        showShortcuts = true;
      },
    });

    return () => {
      cleanup();
    };
  });
</script>

<svelte:head>
  <title>Sam Huang</title>
  <link rel="canonical" href="https://sambyte.net" />
  <link
    rel="preload"
    href="/fonts/Outfit-Regular.ttf"
    as="font"
    type="font/ttf"
    crossorigin="anonymous"
  />
  <link
    rel="preload"
    href="/fonts/SourceSerif4-Regular.ttf"
    as="font"
    type="font/ttf"
    crossorigin="anonymous"
  />
  <meta
    name="description"
    content="Engineer at day. Artist at night. Software engineer, photographer, and musician."
  />
  <meta property="og:title" content="Sam Huang" />
  <meta
    property="og:description"
    content="Engineer at day. Artist at night. Software engineer, photographer, and musician."
  />
  <meta property="og:image" content="https://sambyte.net/profile.jpg" />
  <meta property="og:url" content="https://sambyte.net" />
  <meta property="og:type" content="website" />
  <meta name="twitter:card" content="summary_large_image" />
  <meta name="twitter:title" content="Sam Huang" />
  <meta
    name="twitter:description"
    content="Engineer at day. Artist at night. Software engineer, photographer, and musician."
  />
  <meta name="twitter:image" content="https://sambyte.net/profile.jpg" />
  <!-- eslint-disable-next-line svelte/no-at-html-tags -->
  {@html '<script type="application/ld+json">' + JSON.stringify(jsonLd) + '</' + 'script>'}
</svelte:head>

<div class="layout">
  <header>
    <a href="/">Sam's website</a>
    <nav class="right">
      <a
        href="https://github.com/huangsam/huangsam.github.io"
        rel="noopener noreferrer"
        target="_blank">Source code</a
      >
    </nav>
  </header>

  <main>
    {@render children?.()}
  </main>

  <footer>
    <div class="footer-content">
      <div class="footer-left">
        <span>&copy;</span>
        <span>2016-{now.getFullYear()}</span>
        <span> | </span>
        <span>Made with &hearts; by @huangsam.</span>
      </div>
      <div class="footer-right">
        <span class="shortcuts-hint">
          Press <kbd>?</kbd> for navigation
        </span>
      </div>
    </div>
  </footer>

  <KeyboardShortcutsModal open={showShortcuts} onClose={() => (showShortcuts = false)} />
</div>

<style>
  .footer-content {
    display: flex;
    justify-content: space-between;
    align-items: center;
    flex-wrap: wrap;
    gap: 0.75rem;
  }

  .shortcuts-hint {
    font-size: var(--font-size-sm);
    color: inherit;
    display: inline-flex;
    align-items: center;
    gap: 0.35rem;
    opacity: 0.85;
    user-select: none;
  }

  .shortcuts-hint kbd {
    display: inline-flex;
    align-items: center;
    justify-content: center;
    padding: 0.1rem 0.4rem;
    font-family: ui-monospace, SFMono-Regular, Menlo, Monaco, Consolas, monospace;
    font-size: 0.85em;
    font-weight: 600;
    line-height: 1.2;
    background: rgba(0, 0, 0, 0.08);
    border: 1px solid rgba(0, 0, 0, 0.2);
    border-radius: 4px;
    box-shadow: 0 1px 0 rgba(0, 0, 0, 0.15);
    color: var(--color-primary-bg);
  }

  @media (max-width: 600px) {
    .footer-content {
      flex-direction: column;
      text-align: center;
      justify-content: center;
    }
  }
</style>
