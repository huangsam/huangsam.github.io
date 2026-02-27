<!--
  FamilyModal component: Displays a modal with a family photo.
  Provides a personal touch to the portfolio by showcasing family life.
-->
<script lang="ts">
  import Modal from './Modal.svelte';

  export let open = false;
  export let onClose: () => void;

  let familyImage: string = '';
  let imageLoaded = false;

  // Lazy load the image only when the modal opens
  async function loadImage() {
    if (open && !imageLoaded) {
      const module = await import('$lib/assets/family.jpg');
      familyImage = module.default;
      imageLoaded = true;
    }
  }

  $: if (open) {
    loadImage();
  }
</script>

<Modal {open} title="Family photo in Hawaii" {onClose}>
  <div class="family-content">
    <p class="intro">Meet my family!</p>
    {#if familyImage}
      <img src={familyImage} alt="Sam with wife and two kids" class="family-image" />
    {:else}
      <p class="loading">Loading photo...</p>
    {/if}
    <p class="description">
      A cherished moment with the family at a local shave ice shop in Hawaii. These are the memories
      that matter most—simple times enjoying good food, beautiful weather, and the company of the
      people I love most.
    </p>
  </div>
</Modal>

<style>
  .family-content {
    text-align: center;
  }

  .intro {
    font-size: 1.1rem;
    margin: 0 0 var(--space-md) 0;
    color: inherit;
    opacity: 0.9;
  }

  .loading {
    color: inherit;
    font-size: 0.95rem;
  }

  .family-image {
    max-width: 60%;
    height: auto;
    border-radius: 0.5rem;
    margin-bottom: var(--space-md);
    box-shadow: 0 4px 8px rgba(0, 0, 0, 0.2);
  }

  .description {
    font-size: 0.9rem;
    line-height: 1.6;
    color: inherit;
    margin-top: 0;
    padding: 0 4rem;
  }
</style>
