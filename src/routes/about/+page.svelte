<script>
  import Quote from '$lib/components/Quote.svelte';
  import { traveledPlaces, currentChurches, employmentInfo } from '$lib/index.js';

  function getPlaces(places) {
    return places.join(', ');
  }
</script>

<h1>About Me</h1>

<p>
  I graduated from UC Davis with a bachelor's degree in Computer Science and Engineering. I
  currently work as a {employmentInfo.role} at {employmentInfo.company} under {employmentInfo.org}.
</p>

<p>
  I enjoy playing music in a band setting. I have a passion for building open-source projects that
  empower developers in their career journeys.
</p>

<p>
  I recharge from the busyness by shooting photos, playing foosball with friends and catching up for
  a good meal. When I go outdoors, I prefer hiking trails and recreational parks.
</p>

<p>
  I occasionally travel outside of the US to experience new cultures. Here are the places I visited:
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
