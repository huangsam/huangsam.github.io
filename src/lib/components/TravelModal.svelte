<!--
  TravelModal component: Displays a modal with travel history, including visited US states and countries.
  Loads place information from local data and external APIs, showing details like capitals, regions, and flags.
-->
<script lang="ts">
  import Modal from './Modal.svelte';
  import { fetchCountryInfo, getStateInfo } from '$lib/utils/travel';

  export let open = false;
  export let onClose: () => void;
  export let states: string[] = [];
  export let countries: string[] = [];

  // Interface for US state information, including capital, region, and links
  interface StatePlaceInfo {
    name: string;
    capital: string;
    region: string;
    nickname: string;
    wikiLink: string;
    touristLink: string;
    yearFounded: number;
  }

  // Interface for country information, including capital, region, flag, and links
  interface CountryPlaceInfo {
    name: string;
    capital: string;
    region: string;
    flag: string;
    mapLink: string;
    wikiLink: string;
    currencies: string;
    languages: string;
  }

  let stateInfos: StatePlaceInfo[] = [];
  let countryInfos: CountryPlaceInfo[] = [];
  let loading = true;

  async function loadPlaceData() {
    loading = true;

    // Load state information
    stateInfos = states
      .map((stateName) => {
        const info = getStateInfo(stateName);
        if (!info) return null;
        return {
          name: info.name,
          capital: info.capital,
          region: info.region,
          nickname: info.nickname,
          wikiLink: info.wikipedia,
          touristLink: info.touristInfo,
          yearFounded: info.yearFounded,
        };
      })
      .filter((info): info is StatePlaceInfo => info !== null);

    // Load country information
    const countryPromises = countries.map(async (countryName) => {
      const info = await fetchCountryInfo(countryName);
      if (!info) return null;
      // Extract currencies as comma-separated string
      const currencies = info.currencies
        ? Object.values(info.currencies)
            .map((c) => `${c.name} (${c.symbol})`)
            .join(', ')
        : 'N/A';
      // Extract languages as comma-separated string
      const languages = info.languages ? Object.values(info.languages).join(', ') : 'N/A';
      return {
        name: info.name.common,
        capital: info.capital?.[0] || 'N/A',
        region: info.subregion || info.region,
        flag: info.flags?.svg || info.flags?.png || '',
        mapLink: info.maps?.googleMaps || '',
        wikiLink: `https://en.wikipedia.org/wiki/${encodeURIComponent(info.name.common)}`,
        currencies,
        languages,
      };
    });

    countryInfos = (await Promise.all(countryPromises)).filter(
      (info): info is CountryPlaceInfo => info !== null,
    );

    loading = false;
  }

  // Load place data when the modal opens
  $: if (open) loadPlaceData();
</script>

<Modal {open} title="Travel History" {onClose}>
  <!-- Display loading message while fetching data -->
  {#if loading}
    <p class="loading">Loading travel information...</p>
    <!-- Display travel information once loaded -->
  {:else}
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
            <div class="place-info">
              <div class="info-row">
                <span class="label">Capital:</span>
                <span>{place.capital}</span>
              </div>
              <div class="info-row">
                <span class="label">Region:</span>
                <span>{place.region}</span>
              </div>
              <div class="info-row">
                <span class="label">Year Founded:</span>
                <span>{place.yearFounded}</span>
              </div>
            </div>
            <div class="place-links">
              <a href={place.wikiLink} target="_blank" rel="noopener">Wikipedia</a>
              <a href={place.touristLink} target="_blank" rel="noopener">Tourist Info</a>
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
              <img src={place.flag} alt={`${place.name} flag`} class="flag" />
              <strong>{place.name}</strong>
            </div>
            <div class="place-info">
              <div class="info-row">
                <span class="label">Capital:</span>
                <span>{place.capital}</span>
              </div>
              <div class="info-row">
                <span class="label">Region:</span>
                <span>{place.region}</span>
              </div>
              <div class="info-row">
                <span class="label">Currencies:</span>
                <span>{place.currencies}</span>
              </div>
              <div class="info-row">
                <span class="label">Languages:</span>
                <span>{place.languages}</span>
              </div>
            </div>
            <div class="place-links">
              <a href={place.wikiLink} target="_blank" rel="noopener">Wikipedia</a>
              <a href={place.mapLink} target="_blank" rel="noopener">Map</a>
            </div>
          </div>
        {/each}
      </div>
    {/if}
  {/if}
</Modal>

<style>
  .loading {
    text-align: center;
    padding: 2rem;
    color: inherit;
  }

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
    width: 32px;
    height: 24px;
    object-fit: cover;
    border-radius: 2px;
    box-shadow: 0 1px 3px rgba(0, 0, 0, 0.3);
  }

  .nickname {
    font-size: 0.85rem;
    font-style: italic;
    color: rgba(255, 255, 255, 0.7);
  }

  .place-info {
    margin-bottom: 0.75rem;
  }

  .info-row {
    display: flex;
    flex-direction: row;
    align-items: center;
    margin-bottom: var(--space-sm);
    font-size: 0.9rem;
  }
  .info-row .label {
    text-align: left;
    min-width: 110px;
    padding-right: 1.5rem;
    font-weight: 600;
    color: rgba(255, 255, 255, 0.8);
  }
  .info-row span:not(.label) {
    text-align: left;
  }

  .label {
    font-weight: 600;
    color: rgba(255, 255, 255, 0.8);
    min-width: 80px;
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
