<script lang="ts">
  import { tea_store } from './tea_store';
  const { type_filter } = tea_store;
  import type { TeaType } from "./Tea";
  
  export let name: string;
  export let filter: TeaType;

  const switch_type = () => {
    let tea_page = document.getElementById(filter.toString());
    tea_page.scrollIntoView({behavior: "smooth"});
  };
</script>

<button class:active={$type_filter === filter} on:click={switch_type}>
  {name}
</button>

<style>
  button {
    flex-grow: 1;
  }
</style>
