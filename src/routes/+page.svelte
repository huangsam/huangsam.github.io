<script lang="ts">
  import Quote from '$lib/components/Quote.svelte';
  import { CURRENT_CHURCHES, EMPLOYMENT_INFO, SOCIAL_PROFILES, TRAVEL_HISTORY } from '$lib/index';
  import { places } from '$lib/pages/home';
  import profileImage from '$lib/assets/profile.jpg';
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
    {#each CURRENT_CHURCHES as church (church.name)}
      <li><a href={church.url}>{church.name}</a></li>
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
  @media (hover: hover) {
    a.social:hover {
      background-color: var(--secondary-bg-color);
      color: var(--primary-text-color);
    }
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
  section.about ul {
    padding: 0;
    margin: 0 2rem;
  }
  section.about ul li {
    margin-top: 0.5rem;
  }
  section.about a {
    color: inherit;
  }
  @media (max-width: 768px) {
    section.about {
      padding: 2em;
    }
  }
</style>
