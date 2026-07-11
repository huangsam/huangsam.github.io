<script lang="ts">
  import Quote from '$lib/components/Quote.svelte';
  import TravelModal from '$lib/components/TravelModal.svelte';
  import FamilyModal from '$lib/components/FamilyModal.svelte';
  import LinkButton from '$lib/components/LinkButton.svelte';
  import FocusAreas from '$lib/components/FocusAreas.svelte';
  import FeaturedWork from '$lib/components/FeaturedWork.svelte';
  import FingerToTop from '$lib/components/FingerToTop.svelte';
  import SocialLinks from '$lib/components/SocialLinks.svelte';
  import ProfileImage from '$lib/components/ProfileImage.svelte';
  import { EMPLOYMENT_INFO, SOCIAL_PROFILES, TRAVEL_HISTORY } from '$lib/index';
  let showTravel = false;
  let showFamily = false;
</script>

<section class="banner">
  <h1>Sam Huang</h1>
  <p>Engineer by day. Artist by night.</p>
  <ProfileImage />
  <SocialLinks profiles={SOCIAL_PROFILES} />
</section>

<section class="about">
  <h1>About Me</h1>

  <p>
    I graduated from UC Davis with a bachelor's in Computer Science and Engineering. Currently, I
    work as a {EMPLOYMENT_INFO.role} at {EMPLOYMENT_INFO.company} under {EMPLOYMENT_INFO.org},
    excited about solving distributed systems and data pipeline challenges at scale.
  </p>

  <p>
    I love capturing moments through photography—corporate events, family gatherings, and travel
    adventures. If you're interested in photo opportunities, reach out via LinkedIn!
    <FingerToTop ariaLabel="Go to top" />
  </p>

  <p>
    I have a passion for building open-source projects that empower developers in their career
    journeys. I enjoy contributing to projects that solve real problems.
  </p>

  <p>
    I recharge by playing music, building keyboards, and catching up with peers over a meal. I also
    travel outside the US to appreciate new experiences.
    <LinkButton on:click={() => (showTravel = true)}>These places</LinkButton>
    have left a lasting impression on me.
  </p>

  <TravelModal
    open={showTravel}
    states={TRAVEL_HISTORY.states}
    countries={TRAVEL_HISTORY.countries}
    onClose={() => (showTravel = false)}
  />

  <p>
    I am blessed with a <LinkButton on:click={() => (showFamily = true)}
      >lovely wife and two kids</LinkButton
    >, who constantly remind me that:
  </p>

  <Quote>The days are long, but the years are short.</Quote>

  <FamilyModal open={showFamily} onClose={() => (showFamily = false)} />
</section>

<FocusAreas />

<FeaturedWork />

<style>
  section.banner {
    padding: var(--space-md) 0;
    text-align: center;
  }
  section.banner h1 {
    font-size: var(--font-size-3xl);
  }
  @media (max-width: 768px) {
    section.banner {
      padding: var(--space-sm) 0;
    }
  }
  section.about {
    padding: 2em 10em;
    background-color: var(--color-primary-bg);
    color: var(--color-text-inverse);
    line-height: 2;
  }
  @media (max-width: 768px) {
    section.about {
      padding: 2em;
    }
  }
</style>
