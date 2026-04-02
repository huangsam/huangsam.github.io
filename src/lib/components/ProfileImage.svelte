<script lang="ts">
  import profileImage from '$lib/assets/profile.jpg';
  import profileImageWebp from '$lib/assets/profile.webp';
</script>

<div class="profile-border">
  <picture>
    <source srcset={profileImageWebp} type="image/webp" />
    <img class="profile-image" src={profileImage} alt="profile" />
  </picture>
</div>

<style>
  div.profile-border {
    margin: var(--space-2xl) 0;
  }
  .profile-image {
    border-radius: 25%;
    /* Default size is 21rem, can be overridden by CSS variable */
    width: var(--profile-image-size, 21rem);
    height: var(--profile-image-size, 21rem);
    box-shadow: 3px 3px 5px lightgrey;
    -moz-box-shadow: 3px 3px 5px lightgrey;
    -webkit-box-shadow: 3px 3px 5px lightgrey;
    object-fit: cover;
  }
  @media (max-width: 768px) {
    .profile-image {
      /* Smaller size for mobile, can be overridden by CSS variable */
      width: var(--profile-image-size-small, 19rem);
      height: var(--profile-image-size-small, 19rem);
    }
  }
</style>
