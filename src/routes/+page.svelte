<script lang="ts">
  import Quote from '$lib/components/Quote.svelte';
  import GitHubModal from '$lib/components/GitHubModal.svelte';
  import TravelModal from '$lib/components/TravelModal.svelte';
  import Skills from '$lib/components/Skills.svelte';
  import { EMPLOYMENT_INFO, SOCIAL_PROFILES, TRAVEL_HISTORY } from '$lib/index';
  import profileImage from '$lib/assets/profile.jpg';
  let showTravel = false;
  let showRepos = false;
</script>

<section class="banner">
  <h1>Sam Huang</h1>
  <p>Engineer at day. Artist at night.</p>
  <div class="profile-border">
    <img class="profile-image" src={profileImage} alt="profile" />
  </div>
  <div class="social">
    {#each SOCIAL_PROFILES as profile (profile.name)}
      <a id={profile.name.toLowerCase()} href={profile.url} class="social">{profile.name}</a>
    {/each}
  </div>
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
    LinkedIn for opportunities—links are at the top! ☝️
  </p>

  <p>
    I have a passion for building open-source projects that empower developers in their career
    journeys. Contributions are always welcome!
    <button class="inline-btn" on:click={() => (showRepos = true)}>View my GitHub repos</button>
  </p>

  <GitHubModal open={showRepos} onClose={() => (showRepos = false)} />

  <p>
    I recharge from the busyness by playing music, building keyboards and catching up with peers for
    a good meal. When I go outdoors, I prefer visiting hiking trails and parks.
  </p>

  <p>
    I occasionally travel outside of the US to appreciate new experiences. These places have left a
    lasting impression on me.
    <button class="inline-btn" on:click={() => (showTravel = true)}>View places visited</button>
  </p>

  <TravelModal
    open={showTravel}
    states={TRAVEL_HISTORY.states}
    countries={TRAVEL_HISTORY.countries}
    onClose={() => (showTravel = false)}
  />

  <p>I am blessed with a lovely wife and two kids, who constantly remind me that:</p>

  <Quote>The days are long, but the years are short.</Quote>
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
  div.profile-border {
    margin: 2rem 0;
  }
  .profile-image {
    border-radius: 25%;
    width: 21rem;
    height: 21rem;
    box-shadow: 3px 3px 5px lightgrey;
    -moz-box-shadow: 3px 3px 5px lightgrey;
    -webkit-box-shadow: 3px 3px 5px lightgrey;
    object-fit: cover;
  }
  div.social {
    display: flex;
    flex-wrap: wrap;
    flex-direction: row;
    justify-content: center;
    margin: 2em 0;
  }
  a.social {
    margin-bottom: 1rem;
    margin-left: 1rem;
    padding: 1.25em;
    border-radius: 1em;
    background-color: var(--primary-bg-color);
    color: white;
  }
  a.social:first-child {
    margin-left: 0;
  }
  a.social:hover,
  a.social:focus {
    background-color: var(--secondary-bg-color);
    color: var(--primary-text-color);
  }
  @media (max-width: 768px) {
    section.banner {
      padding: 0.5em 0;
    }
    div.social {
      flex-direction: column;
      margin-left: 0;
      padding: 1em 2em;
    }
    a.social {
      margin-left: 0;
      margin-bottom: 1.25rem;
    }
    .profile-image {
      width: 19rem;
      height: 19rem;
    }
  }
  section.about {
    padding: 2em 10em;
    background-color: var(--primary-bg-color);
    color: white;
    line-height: 2;
  }
  .inline-btn {
    margin-left: 0.5rem;
    padding: 0.35rem 0.75rem;
    border-radius: 0.5rem;
    border: 1px solid rgba(255, 255, 255, 0.35);
    background: transparent;
    color: white;
    cursor: pointer;
  }
  .inline-btn:hover {
    background-color: rgba(255, 255, 255, 0.1);
  }
  @media (max-width: 768px) {
    section.about {
      padding: 2em;
    }
  }
</style>
