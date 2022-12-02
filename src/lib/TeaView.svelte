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

  let columns = (tea_count: number) => {
    switch (tea_count) {
    case 1:
    case 2:
      return 2;
    case 3:
    case 4:
      return 3;
    case 5:
    case 6:
      return 3;
    default:
      return 5;
    }
  };
</script>

<page id={filter}>
  <div style:--column-count={columns(filtered_teas.length)} class="icon-view">
    {#each filtered_teas as tea}
      <TeaIcon {tea} selected={tea === $selected_tea}/>
    {/each}
  </div>
  <h1>{name}</h1>
  {#key $selected_tea}
  <TeaDetail tea={$selected_tea.tea_type === filter ? $selected_tea : filtered_teas[0]}/>
  {/key}
</page>

<style>
  page {
    padding: 30px;
    display: grid;
    gap: 30px;
    
    grid-template-columns: 1fr 1.61fr;
    grid-template-areas:
      "head head"
      "icon-view detail";
  }

  h1 {
    grid-area: head;
    margin: 10px;
  }
  
  div.icon-view {
    grid-area: icon-view;
    display: grid;
    gap: 5px;
    grid-template-columns: repeat(var(--column-count), 1fr);
    grid-template-rows: auto 1fr;
  }

  spacer {
    flex-grow: 1;
  }
</style>

<!--
    grid-template-rows: 250px 1fr;
    
    gap: 5px;
    display: flex;
    justify-content: end;
    align-items: center;
  -->
