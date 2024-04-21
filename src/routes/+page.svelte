<script>
  import { social } from '$lib/index.js';
  import profile from '$lib/assets/profile.jpg';
</script>

<div class="banner">
  <h1>Sam Huang</h1>
  <p>Engineer at day. Artist at night.</p>
  <div class="profile">
    <img class="profile" src={profile} alt="profile" />
  </div>
  <div class="social">
    {#each social as { name, url }}
      <a id={name.toLowerCase()} href={url} class="social">{name}</a>
    {/each}
  </div>
</div>

<style>
  div.banner {
    text-align: center;
  }
  div.banner h1 {
    font-size: 2.5em;
  }
  div.banner p,
  div.banner a {
    font-size: 1.1em;
  }
  div.profile {
    margin: 2em 0em;
  }
  img.profile {
    border-radius: 25%;
    width: 50%;
    max-width: 375px;
    box-shadow: 3px 3px 5px #ccc;
    -webkit-box-shadow: 3px 3px 5px #ccc;
    -moz-box-shadow: 3px 3px 5px #ccc;
  }
  div.social {
    padding-bottom: 1em;
  }
  a.social {
    margin-left: 1em;
  }
  a.social:first-child {
    margin-left: 0px;
  }
</style>
