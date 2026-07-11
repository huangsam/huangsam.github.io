<!--
  TravelModal component: Displays a modal with travel history, including visited US states and countries.
-->
<script lang="ts">
  import Modal from './Modal.svelte';
  import {
    getStateInfo,
    getCountryInfo,
    type StateInfo,
    type CountryInfo,
  } from '$lib/utils/travel';

  export let open = false;
  export let onClose: () => void;
  export let states: string[] = [];
  export let countries: string[] = [];

  $: stateInfos = states
    .map((stateName) => getStateInfo(stateName))
    .filter((info): info is StateInfo => info !== null);

  $: countryInfos = countries
    .map((countryName) => getCountryInfo(countryName))
    .filter((info): info is CountryInfo => info !== null);
</script>

<Modal {open} title="Travel History" {onClose}>
  <!-- Show US states section if any states are provided -->
  {#if stateInfos.length > 0}
    <h3>US States</h3>
    <div class="places-grid">
      {#each stateInfos as place (place.name)}
        <div class="place-card">
          <div class="place-header">
            <strong>{place.name}</strong>
            <span class="nickname">{place.nickname}</span>
          </div>
          <div class="place-links">
            <a href={place.wikipedia} target="_blank" rel="noopener">Wikipedia</a>
            <a href={place.touristInfo} target="_blank" rel="noopener">Tourist Info</a>
          </div>
        </div>
      {/each}
    </div>
  {/if}

  <!-- Show countries section if any countries are provided -->
  {#if countryInfos.length > 0}
    <h3>Countries</h3>
    <div class="places-grid">
      {#each countryInfos as place (place.name)}
        <div class="place-card">
          <div class="place-header">
            <span class="flag">{place.flag}</span>
            <strong>{place.name}</strong>
          </div>
          <div class="place-links">
            <a href={place.wikipedia} target="_blank" rel="noopener">Wikipedia</a>
            <a href={place.touristInfo} target="_blank" rel="noopener">Tourist Info</a>
          </div>
        </div>
      {/each}
    </div>
  {/if}
</Modal>

<style>
  h3 {
    color: var(--color-text-inverse);
    margin-top: var(--space-xl);
    margin-bottom: var(--space-md);
    font-size: var(--font-size-lg);
  }

  h3:first-child {
    margin-top: 0;
  }

  .places-grid {
    display: grid;
    grid-template-columns: repeat(auto-fill, minmax(280px, 1fr));
    gap: var(--space-md);
    margin-bottom: var(--space-md);
  }

  .place-card {
    background: rgba(255, 255, 255, 0.05);
    border: 1px solid rgba(255, 255, 255, 0.1);
    border-radius: 0.5rem;
    padding: var(--space-md);
    transition:
      transform var(--transition-bounce),
      background-color var(--transition-normal),
      border-color var(--transition-normal),
      box-shadow var(--transition-normal);
  }

  .place-card:hover {
    background: rgba(255, 255, 255, 0.1);
    border-color: rgba(255, 255, 255, 0.2);
    transform: translateY(-4px);
    box-shadow: 0 8px 16px rgba(0, 0, 0, 0.3);
  }

  .place-header {
    display: flex;
    align-items: center;
    gap: var(--space-sm);
    margin-bottom: 0.75rem;
    flex-wrap: wrap;
  }

  .place-header strong {
    font-size: 1.1rem;
    color: var(--color-text-inverse);
  }

  .flag {
    font-size: 1.5rem;
    line-height: 1;
    display: inline-block;
    vertical-align: middle;
  }

  .nickname {
    font-size: 0.85rem;
    font-style: italic;
    color: rgba(255, 255, 255, 0.7);
  }

  .place-links {
    display: flex;
    gap: var(--space-sm);
    flex-wrap: wrap;
  }

  .place-links a {
    padding: 0.35rem 0.75rem;
    border-radius: 0.3rem;
    background: rgba(255, 255, 255, 0.1);
    color: var(--color-text-inverse);
    text-decoration: none;
    font-size: 0.85rem;
    transition: background-color var(--transition-normal) ease;
  }

  .place-links a:hover {
    background: rgba(255, 255, 255, 0.2);
  }

  @media (max-width: 768px) {
    .places-grid {
      grid-template-columns: 1fr;
    }
  }
</style>
