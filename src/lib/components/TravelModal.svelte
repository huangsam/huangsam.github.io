<script lang="ts">
  import Modal from './Modal.svelte';
  import { fetchCountryInfo, getStateInfo, formatPopulation } from '$lib/utils/travel';

  export let open = false;
  export let onClose: () => void;
  export let states: string[] = [];
  export let countries: string[] = [];

  interface PlaceInfo {
    name: string;
    capital?: string;
    population?: number;
    region?: string;
    nickname?: string;
    flag?: string;
    mapLink?: string;
    wikiLink?: string;
    touristLink?: string;
  }

  let stateInfos: PlaceInfo[] = [];
  let countryInfos: PlaceInfo[] = [];
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
          population: info.population,
          region: info.region,
          nickname: info.nickname,
          wikiLink: info.wikipedia,
          touristLink: info.touristInfo,
        };
      })
      .filter((info): info is PlaceInfo => info !== null);

    // Load country information
    const countryPromises = countries.map(async (countryName) => {
      const info = await fetchCountryInfo(countryName);
      if (!info) return null;
      return {
        name: info.name.common,
        capital: info.capital?.[0] || 'N/A',
        population: info.population,
        region: info.subregion || info.region,
        flag: info.flags.svg || info.flags.png,
        mapLink: info.maps.googleMaps,
        wikiLink: `https://en.wikipedia.org/wiki/${encodeURIComponent(info.name.common)}`,
      };
    });

    countryInfos = (await Promise.all(countryPromises)).filter(
      (info): info is PlaceInfo => info !== null,
    );

    loading = false;
  }

  $: if (open) loadPlaceData();
</script>

<Modal {open} title="Travel History" {onClose}>
  {#if loading}
    <p class="loading">Loading travel information...</p>
  {:else}
    {#if stateInfos.length > 0}
      <h3>US States</h3>
      <div class="places-grid">
        {#each stateInfos as place (place.name)}
          <div class="place-card">
            <div class="place-header">
              <strong>{place.name}</strong>
              {#if place.nickname}
                <span class="nickname">{place.nickname}</span>
              {/if}
            </div>
            <div class="place-info">
              {#if place.capital}
                <div class="info-row">
                  <span class="label">Capital:</span>
                  <span>{place.capital}</span>
                </div>
              {/if}
              {#if place.region}
                <div class="info-row">
                  <span class="label">Region:</span>
                  <span>{place.region}</span>
                </div>
              {/if}
              {#if place.population}
                <div class="info-row">
                  <span class="label">Population:</span>
                  <span>{formatPopulation(place.population)}</span>
                </div>
              {/if}
            </div>
            <div class="place-links">
              {#if place.wikiLink}
                <a href={place.wikiLink} target="_blank" rel="noopener">Wikipedia</a>
              {/if}
              {#if place.touristLink}
                <a href={place.touristLink} target="_blank" rel="noopener">Tourist Info</a>
              {/if}
            </div>
          </div>
        {/each}
      </div>
    {/if}

    {#if countryInfos.length > 0}
      <h3>Countries</h3>
      <div class="places-grid">
        {#each countryInfos as place (place.name)}
          <div class="place-card">
            <div class="place-header">
              {#if place.flag}
                <img src={place.flag} alt={`${place.name} flag`} class="flag" />
              {/if}
              <strong>{place.name}</strong>
            </div>
            <div class="place-info">
              {#if place.capital}
                <div class="info-row">
                  <span class="label">Capital:</span>
                  <span>{place.capital}</span>
                </div>
              {/if}
              {#if place.region}
                <div class="info-row">
                  <span class="label">Region:</span>
                  <span>{place.region}</span>
                </div>
              {/if}
              {#if place.population}
                <div class="info-row">
                  <span class="label">Population:</span>
                  <span>{formatPopulation(place.population)}</span>
                </div>
              {/if}
            </div>
            <div class="place-links">
              {#if place.mapLink}
                <a href={place.mapLink} target="_blank" rel="noopener">Map</a>
              {/if}
              {#if place.wikiLink}
                <a href={place.wikiLink} target="_blank" rel="noopener">Wikipedia</a>
              {/if}
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
    color: white;
    margin-top: 1.5rem;
    margin-bottom: 1rem;
    font-size: 1.25rem;
  }

  h3:first-child {
    margin-top: 0;
  }

  .places-grid {
    display: grid;
    grid-template-columns: repeat(auto-fill, minmax(280px, 1fr));
    gap: 1rem;
    margin-bottom: 1rem;
  }

  .place-card {
    background: rgba(255, 255, 255, 0.05);
    border: 1px solid rgba(255, 255, 255, 0.1);
    border-radius: 0.5rem;
    padding: 1rem;
    transition: all 0.2s ease;
  }

  .place-card:hover {
    background: rgba(255, 255, 255, 0.1);
    border-color: rgba(255, 255, 255, 0.2);
    transform: translateY(-2px);
  }

  .place-header {
    display: flex;
    align-items: center;
    gap: 0.5rem;
    margin-bottom: 0.75rem;
    flex-wrap: wrap;
  }

  .place-header strong {
    font-size: 1.1rem;
    color: white;
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
    gap: 0.5rem;
    margin-bottom: 0.25rem;
    font-size: 0.9rem;
  }

  .label {
    font-weight: 600;
    color: rgba(255, 255, 255, 0.8);
    min-width: 80px;
  }

  .place-links {
    display: flex;
    gap: 0.5rem;
    flex-wrap: wrap;
  }

  .place-links a {
    padding: 0.35rem 0.75rem;
    border-radius: 0.3rem;
    background: rgba(255, 255, 255, 0.1);
    color: white;
    text-decoration: none;
    font-size: 0.85rem;
    transition: background 0.2s ease;
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
