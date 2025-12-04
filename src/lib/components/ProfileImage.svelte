<script lang="ts">
  import profileImage from '$lib/assets/profile.jpg';
</script>

<div class="profile-border">
  <img class="profile-image" src={profileImage} alt="profile" />
</div>

<style>
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
  @media (max-width: 768px) {
    .profile-image {
      width: 19rem;
      height: 19rem;
    }
  }
</style>
