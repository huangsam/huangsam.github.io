<script lang="ts">
  import Quote from '$lib/components/Quote.svelte';
  import GitHubModal from '$lib/components/GitHubModal.svelte';
  import TravelModal from '$lib/components/TravelModal.svelte';
  import FamilyModal from '$lib/components/FamilyModal.svelte';
  import Skills from '$lib/components/Skills.svelte';
  import FingerToTop from '$lib/components/FingerToTop.svelte';
  import SocialLinks from '$lib/components/SocialLinks.svelte';
  import ProfileImage from '$lib/components/ProfileImage.svelte';
  import { EMPLOYMENT_INFO, SOCIAL_PROFILES, TRAVEL_HISTORY } from '$lib/index';
  let showTravel = false;
  let showRepos = false;
  let showFamily = false;
</script>

<section class="banner">
  <h1>Sam Huang</h1>
  <p>Engineer at day. Artist at night.</p>
  <ProfileImage />
  <SocialLinks profiles={SOCIAL_PROFILES} />
</section>

<section class="about">
  <h1>About Me</h1>

  <p>
    I graduated from UC Davis with a bachelor's degree in Computer Science and Engineering. I
    currently work as a {EMPLOYMENT_INFO.role} at {EMPLOYMENT_INFO.company}
    under {EMPLOYMENT_INFO.org}.
  </p>

  <p>
    I love capturing moments through photography for family, friends, and clients. Reach out via
    LinkedIn for opportunities—links are at the top! <FingerToTop ariaLabel="Go to top" />
  </p>

  <p>
    I have a passion for building
    <button class="link-button" on:click={() => (showRepos = true)}>open-source projects</button>
    that empower developers in their career journeys. Contributions are always welcome!
  </p>

  <GitHubModal open={showRepos} onClose={() => (showRepos = false)} />

  <p>
    I recharge from the busyness by playing music, building keyboards and catching up with peers for
    a good meal. When I go outdoors, I prefer visiting hiking trails and parks.
  </p>

  <p>
    I occasionally travel outside of the US to appreciate new experiences.
    <button class="link-button" on:click={() => (showTravel = true)}>These places</button>
    have left a lasting impression on me.
  </p>

  <TravelModal
    open={showTravel}
    states={TRAVEL_HISTORY.states}
    countries={TRAVEL_HISTORY.countries}
    onClose={() => (showTravel = false)}
  />

  <p>
    I am blessed with a <button class="link-button" on:click={() => (showFamily = true)}
      >lovely wife and two kids</button
    >, who constantly remind me that:
  </p>

  <Quote>The days are long, but the years are short.</Quote>

  <FamilyModal open={showFamily} onClose={() => (showFamily = false)} />
</section>

<Skills />

<style>
  section.banner {
    padding: 1em 0;
    text-align: center;
  }
  section.banner h1 {
    font-size: 2.25rem;
  }
  @media (max-width: 768px) {
    section.banner {
      padding: 0.5em 0;
    }
  }
  section.about {
    padding: 2em 10em;
    background-color: var(--primary-bg-color);
    color: white;
    line-height: 2;
  }
  @media (max-width: 768px) {
    section.about {
      padding: 2em;
    }
  }
  .link-button {
    background: none;
    border: none;
    color: white;
    text-decoration: underline;
    cursor: pointer;
    font-size: inherit;
    font-family: inherit;
    padding: 0;
  }
  .link-button:hover {
    opacity: 0.8;
  }
</style>
