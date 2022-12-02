<script lang="ts">
  import type { Tea } from "./Tea";

  export let tea: Tea;
</script>

<div class="price-bar">
  {#if tea.price !== undefined}
    <div class="price price-premium">{tea.price} Kč</div>
  {/if}
  {#if tea.price_bio !== undefined}
    <div class="price price-bio">BIO: {tea.price_bio} Kč</div>
  {/if}
</div>

<style>
  div.price-bar {
    display: flex;
    flex-direction: horizontal;
    justify-content: flex-end;
    gap: 1rem;
  }

  div.price-premium {
    color: var(--accent-color);
    border: 1px solid var(--accent-color);
    background-color: white;
  }

  div.price-bio {
    background-color: var(--accent-color);
    color: white;
  }

  div.price {
    border-radius: 8px;
    padding: 0.6em 1.2em;
    font-weight: 700;
  }

</style>
