<script lang="ts">
  import Quote from '$lib/components/Quote.svelte';
  import { SOCIAL_PROFILES } from '$lib/index';
  import { TRAVEL_HISTORY, CURRENT_CHURCHES, EMPLOYMENT_INFO } from '$lib/index';
  import { places } from '$lib/pages/home';
</script>

<section class="banner">
  <h1>Sam Huang</h1>
  <p>Engineer at day. Artist at night.</p>
  <div class="profile-border">
    <enhanced:img class="profile-image" src="../lib/assets/profile.jpg" alt="profile" />
  </div>
  <div class="social">
    {#each SOCIAL_PROFILES as { name, url }}
      <a id={name.toLowerCase()} href={url} class="social">{name}</a>
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
    I enjoy shooting photos for family, friends and clients. I have a passion for building
    open-source projects that empower developers in their career journeys.
  </p>

  <p>
    I recharge from the busyness by playing music, building keyboards and catching up with peers for
    a good meal. When I go outdoors, I prefer visiting nearby hiking trails and recreational parks.
  </p>

  <p>
    I occasionally travel outside of the US to appreciate new experiences. Here are the places I
    visited:
  </p>

  <ul>
    <li>
      <span>US states:</span>
      <span>{places(TRAVEL_HISTORY.states)}</span>
    </li>
    <li>
      <span>Countries:</span>
      <span>{places(TRAVEL_HISTORY.countries)}</span>
    </li>
  </ul>

  <p>I currently attend these churches:</p>

  <ul>
    {#each CURRENT_CHURCHES as { url, name }}
      <li><a href={url}>{name}</a></li>
    {/each}
  </ul>

  <p>
    My parents are an important part of my life. They shaped me into who I am today, and I am proud
    to be their son.
  </p>

  <p>
    I am blessed with a lovely wife who enjoys planting flowers, making crafts and eating pastries.
    I am the father of two kids, and they constantly remind me that:
  </p>

  <Quote>The days are long, but the years are short.</Quote>
</section>

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
  /* https://svelte.dev/docs/svelte/compiler-warnings#css_unused_selector */
  .profile-image :global {
    border-radius: 25%;
    width: 19rem;
    height: 19rem;
    box-shadow: 3px 3px 5px lightgrey;
    -moz-box-shadow: 3px 3px 5px lightgrey;
    -webkit-box-shadow: 3px 3px 5px lightgrey;
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
  @media (hover: hover) {
    a.social:hover {
      background-color: var(--secondary-bg-color);
      color: var(--primary-text-color);
    }
  }
  @media (max-width: 600px) {
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
  }
  section.about {
    padding: 1em 4em;
    background-color: var(--primary-bg-color);
    color: white;
    line-height: 2;
  }
  section.about ul {
    padding: 0;
    margin: 0 2rem;
  }
  section.about ul li {
    margin-top: 0.5rem;
  }
  section.about a {
    color: white;
  }
  @media (max-width: 600px) {
    section.about {
      padding: 2em;
    }
  }
</style>
