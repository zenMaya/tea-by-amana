<script lang="ts">
  import { TeaType, TeaTag } from './Tea';
 
  import TypeFilter from "./TypeFilter.svelte";
  import TagFilter from "./TagFilter.svelte";

  import { tea_store } from './tea_store';
  const { tag_filter } = tea_store;
</script>

<nav id="filters">
  <TypeFilter name="Všechny čaje" filter={TeaType.All} />
  <TypeFilter name="Černé čaje" filter={TeaType.Black} />
  <TypeFilter name="Zelené čaje" filter={TeaType.Green} />
  <!-- <TypeFilter name="Aromatizované čaje" filter={TeaType.Aromathized} /> -->
  <TypeFilter name="Bílé čaje" filter={TeaType.White} />
  <TypeFilter name="Tmavé čaje" filter={TeaType.Dark} />
  <TypeFilter name="Ovocné čaje" filter={TeaType.Fruit} />
  <TypeFilter name="Rooibos" filter={TeaType.Rooibos} />
  <spacer/>
  <TagFilter name="Bio" bind:filter={$tag_filter.bio} />
  <TagFilter name="Aromatizované" bind:filter={$tag_filter.aromathized} />
</nav>

<style>
 spacer {
   flex-grow: 2;
 }
 
 nav#filters {
   height: 7.5vh;
   position: absolute;
   bottom: 0;
   grid-area: filters;
   display: flex;
   background-color: white;
   width: 100%;
   z-index: 1;
   padding: 10px;
   font-size: 1.22rem;
   font-weight: 2000;
 }
</style>
