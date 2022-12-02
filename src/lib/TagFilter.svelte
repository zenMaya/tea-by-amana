<script lang="ts">

  import type { TeaTag } from "./Tea";
  
  export let name: string;
  export let filter: bool;

  const toggle_tag = () => {
    filter = !filter;
  };
</script>

<button class:active={filter} on:click={toggle_tag}>
  {name}
</button>

<style>
  button {
    background-color: white;
    border: 1px solid var(--accent-color);
    margin: 0 2px;
  }

  button.active {
    background-color: var(--accent-color);
    color: white;
  }
</style>
