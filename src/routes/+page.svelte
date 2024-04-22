<script>
  import profile from '$lib/assets/profile.jpg';
  import { social } from '$lib/index.js';
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
    margin: 2rem 0;
  }
  img.profile {
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
    padding-bottom: 1em;
  }
  a.social {
    margin-bottom: 1rem;
    margin-left: 1rem;
    padding: 1.25em;
    border-radius: 2em;
    background-color: black;
    color: white;
  }
  a.social:first-child {
    margin-left: 0;
  }
  a.social:hover {
    background-color: grey;
  }
  @media (max-width: 600px) {
    div.social {
      flex-direction: column;
      margin-left: 0;
      padding: 0 1em;
    }
    a.social {
      margin-left: 0;
      margin-bottom: 1.25rem;
    }
  }
</style>
