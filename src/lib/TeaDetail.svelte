<script lang="ts">
  import { fade } from 'svelte/transition';
  
  import type { Tea } from './Tea';
  import TeaPrice from './TeaPrice.svelte';

  export let tea: Tea;
</script>

<div in:fade={{delay: 50}} out:fade id="detail">
  <h2>{tea.name}</h2>
  <TeaPrice {tea}/>
  <p>
  {@html tea.description}
  </p>
  <p>
  Tipy na přípravu:
  {@html tea.preparation}
  </p>
  <!-- <img alt={tea.name} id="bag" src={tea.large_image}/> -->
</div>

<style> 
 div#detail {
   grid-area: detail;
 }
</style>
