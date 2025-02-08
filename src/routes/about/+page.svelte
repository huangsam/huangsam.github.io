<script lang="ts">
  import Quote from '$lib/components/Quote.svelte';
  import { TRAVEL_HISTORY, CURRENT_CHURCHES, EMPLOYMENT_INFO } from '$lib/index';

  function places(arr: string[]): string {
    return arr.join(', ');
  }
</script>

<h1>About Me</h1>

<p>
  I graduated from UC Davis with a bachelor's degree in Computer Science and Engineering. I
  currently work as a {EMPLOYMENT_INFO.role} at {EMPLOYMENT_INFO.company}
  under {EMPLOYMENT_INFO.org}.
</p>

<p>
  I enjoy shooting photos for family, friends and clients. I have a passion for building open-source
  projects that empower developers in their career journeys.
</p>

<p>
  I recharge from the busyness by playing music, building keyboards and catching up with peers for a
  good meal. When I go outdoors, I prefer visiting nearby hiking trails and recreational parks.
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
  My parents are an important part of my life. They shaped me into who I am today, and I am proud to
  be their son.
</p>

<p>
  I am blessed with a lovely wife who enjoys planting flowers, making crafts and eating pastries. I
  am the father of two kids, and they constantly remind me that:
</p>

<Quote>The days are long, but the years are short.</Quote>
