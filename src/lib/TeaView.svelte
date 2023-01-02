<script lang="ts">  
  import type { TeaType } from "./Tea";
  import { teas } from './Tea';
  import { tea_store } from './tea_store';
  const { selected_tea } = tea_store;
  import TeaDetail from "./TeaDetail.svelte";
  import TeaIcon from "./TeaIcon.svelte";

  export let name: string;
  export let filter: TeaType;

  let filtered_teas = teas.filter((t) => t.tea_type === filter);

  let columns = (tea_count: number): string => {
    if (tea_count == 1)
      return `"1fr 1fr"`;
    else return `"1fr 1fr 1fr"`;
  };
</script>

<page id={filter}>
  <h1>{name}</h1>
  {#key $selected_tea}
  <TeaDetail tea={$selected_tea.tea_type === filter ? $selected_tea : filtered_teas[0]}/>
  <div class="image-container">
    <spacer/>
    <div class="image" style:--src={`url("${($selected_tea.tea_type === filter ? $selected_tea : filtered_teas[0]).large_image}")`}/>
  </div>
  {/key}
  {#if filtered_teas.length > 1}
  <div  class="icon-view" style:--columns={columns(filtered_teas.length)}>
    {#each filtered_teas as tea}
      <TeaIcon {tea} selected={tea === $selected_tea}/>
    {/each}
  </div>
  {/if}
</page>

<style>
  page {
    padding-top: 50px;
    padding-right: 50px;
    padding-left: 50px;
    display: grid;
    gap: 30px;
    grid-template-columns: repeat(3, 1fr);
    grid-template-rows: 6em 1fr;
    grid-template-areas:
      "head detail icon-view"
      "image detail icon-view";
  }

  h1 {
    grid-area: head;
  }
  
  div.icon-view {
    grid-area: icon-view;
    display: grid;
    gap: 5px;
    max-width: 100%;
    margin-top: auto;
    margin-bottom: auto;
    grid-template-columns: repeat(auto-fit, minmax(120px, 1fr));
    grid-template-rows: repeat(2, minmax(0, auto)) 1fr;
  }
  div.image-container {
    grid-area: image;
    display: flex;
  }
  div.image {
    background-repeat: no-repeat;
    grid-area: image;
    background-image: var(--src);
    background-size: contain;
    background-position: center;
    aspect-ratio: 768/1355;
  }
  spacer {
    flex-grow: 1;
  }
</style>

<!--
    --grid icon view--
    grid-area: icon-view;
    display: grid;
    gap: 5px;
    grid-template-columns: repeat(auto-fit, minmax(120px, 1fr));
    grid-template-rows: repeat(2, auto) 1fr;
    --- ---
      display: flex;
    flex-wrap: wrap;
    gap: 5px;
      
    grid-template-rows: 250px 1fr;
    
    gap: 5px;
    display: flex;
    justify-content: end;
    align-items: center;
  -->
