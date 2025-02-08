<script lang="ts">
  import Quote from '$lib/components/Quote.svelte';
  import { traveledPlaces, currentChurches, employmentInfo } from '$lib/index';

  function getPlaces(places: string[]) {
    return places.join(', ');
  }
</script>

<h1>About Me</h1>

<p>
  I graduated from UC Davis with a bachelor's degree in Computer Science and Engineering. I
  currently work as a {employmentInfo.role} at {employmentInfo.company} under {employmentInfo.org}.
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
    <span>{getPlaces(traveledPlaces.states)}</span>
  </li>
  <li>
    <span>Countries:</span>
    <span>{getPlaces(traveledPlaces.countries)}</span>
  </li>
</ul>

<p>I currently attend these churches:</p>

<ul>
  {#each currentChurches as { url, name }}
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
