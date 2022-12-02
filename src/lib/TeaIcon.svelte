<script lang="ts">
  import type { Tea } from './Tea';
  import { TeaTag } from './Tea';
  import { tea_store } from './tea_store';
  const { selected_tea, tag_filter, main_element } = tea_store;
 
  export let tea: Tea;
  export let selected: boolean = false;
  let highlighted: boolean;
  $: highlighted = (!$tag_filter.bio || tea.tea_tag.bio) && (!$tag_filter.aromathized || tea.tea_tag.aromathized)

  const switch_tea = () => {
    $selected_tea = tea;
    $main_element.scrollTo({top: $main_element.clientHeight * tea.tea_type, behavior: "smooth"});
  };
</script>

<img alt={tea.name} class:highlighted class:selected class="icon" src={tea.small_image} on:keypress={switch_tea} on:click={switch_tea}/>

<style>
 img.icon {
   background-size: 100% 100%;
   cursor: pointer;
   transition: 0.25s;
 }
 img.icon:hover {
   box-shadow: var(--hover-shadow);
 }
 img.icon.selected {
   box-shadow: var(--select-shadow);
 }
 img.icon.highlighted {
   filter: grayscale(0%);
 }
 img.icon {
   width: 100%;
   filter: grayscale(100%);
   aspect-ratio: 768/1355;
   flex-shrink: 1;
   transition: ease-in-out 0.2s;
 }
</style>

<!--
    max-width: 150px;
    -->
