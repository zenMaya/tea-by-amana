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

<div class="icon" class:highlighted class:selected on:keypress={switch_tea} on:click={switch_tea} style:--src={`url(\"${tea.small_image}\")`}/>
<!-- <img alt={tea.name} class:highlighted class:selected class="icon" src={tea.small_image} on:keypress={switch_tea} on:click={switch_tea}/> -->

<style>
  .icon:hover {
   box-shadow: var(--hover-shadow);
 }
  .icon.selected {
   box-shadow: var(--select-shadow);
 }
 .icon.highlighted {
   filter: grayscale(0%);
 }
 .icon {
   cursor: pointer;
   width: 100%;
   filter: grayscale(100%);
   aspect-ratio: 768/1355;
   flex-shrink: 1;
   transition: ease-in-out 0.2s;
   background-image: var(--src);
   background-size: contain;
   place-items: center;
 }
</style>

<!--
    max-width: 150px;
    filter: grayscale(0%);
    -->
