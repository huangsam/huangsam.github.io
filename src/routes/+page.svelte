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
    margin-bottom: 1em;
    margin-left: 1rem;
    padding: 1.25em;
    border-radius: 2em;
    background-color: black;
    color: white;
  }
  a.social:first-child {
    margin-left: 0rem;
  }
  a.social:hover {
    background-color: grey;
  }
  @media (max-width: 600px) {
    div.social {
      flex-direction: column;
      padding: 0em 3em;
    }
    a.social {
      margin-left: 0rem;
      margin-bottom: 1.25rem;
    }
  }
</style>
