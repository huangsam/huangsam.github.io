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
  div.profile {
    margin: 2em 0em;
  }
  img.profile {
    border-radius: 25%;
    width: 18.75rem;
    height: 18.75rem;
    max-width: 375px;
    box-shadow: 3px 3px 5px #ccc;
    -webkit-box-shadow: 3px 3px 5px #ccc;
    -moz-box-shadow: 3px 3px 5px #ccc;
  }
  div.social {
    display: -webkit-box;
    display: -ms-flexbox;
    display: flex;
    flex-wrap: wrap;
    justify-content: center;
    padding-bottom: 1em;
  }
  a.social {
    margin-bottom: 0.5em;
    margin-left: 1em;
    background-color: black;
    color: white;
    padding: 1em;
    border-radius: 2em;
  }
  a.social:first-child {
    margin-left: 0px;
  }
  a.social:hover {
    background-color: grey;
  }
</style>
