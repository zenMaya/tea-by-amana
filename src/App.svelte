<script lang="ts">
  import { onMount } from 'svelte';
  
  import { Tea, TeaType, teas } from './lib/Tea';
  import { tea_store } from './lib/tea_store';
  const { type_filter, selected_tea, main_element } = tea_store;
  
  import TeaIcon from './lib/TeaIcon.svelte';
  import TeaView from './lib/TeaView.svelte';
    import Navbar from './lib/Navbar.svelte';

  let have_interacted = false;

  let auto_cycle_index = -1;
  const cycle = () => {
    console.log("cycling");
    if (!have_interacted) {
      auto_cycle_index = auto_cycle_index + 1 % teas.length;
      let tea: Tea = teas[auto_cycle_index];
      $selected_tea = tea;
      window.scrollTo({top: $main_element.clientHeight * tea.tea_type, behavior: "smooth"});
      setTimeout(cycle, 2000);
    }
  };

  onMount(() => {
    setTimeout(cycle, 120000);
  });
  
  const recalculate_filter = () => {
    $type_filter = Math.round($main_element.scrollTop / $main_element.clientHeight);
  };
</script>

<svelte:window on:click={() => have_interacted = true} />
<Navbar/>
  <main bind:this={$main_element} id="main-view" on:scroll={recalculate_filter}>
    <page id={TeaType.All}>
      <div class="icon-view">
        {#each teas.filter((_, index) => index < (teas.length / 2)) as tea}
          <TeaIcon {tea} />
        {/each}
      </div>
      <div id="welcome">
        <!--Myriad pro Bold wide 75pt -->
        <h1 id="name">TEA BY AMANA</h1>
        <a href="https://www.caj.cz/index.php?page=internetovy-obchod" id="contact">kontakt</a>
      </div>
      <div class="icon-view">
        {#each teas.filter((_, index) => index >= (teas.length / 2)) as tea}
          <TeaIcon {tea} />
        {/each}
      </div>
    </page>
    <!-- <Navbar/> -->
    <TeaView name="Černé čaje" filter={TeaType.Black} />
    <TeaView name="Zelené čaje" filter={TeaType.Green} />
    <TeaView name="Bílé čaje" filter={TeaType.White} />
    <TeaView name="Tmavé čaje" filter={TeaType.Dark} />
    <TeaView name="Ovocné čaje" filter={TeaType.Fruit} />
    <TeaView name="Rooibos" filter={TeaType.Rooibos} />
  </main>

  <style>
    main#main-view {
      display: flex;
      flex-direction: column;
      scroll-snap-type: y mandatory;
      width: 100vw;
      height: 95vh;
      min-height: 100vh;
      overflow-y: scroll;
      overflow-x: hidden;
    }

    :global(page) {
      flex-shrink: 0;
      height: 100vh;
      width: 100vw;
      padding-bottom: 7.5vh;
      scroll-snap-align: start;
    }

    page {
      display: flex;
      flex-direction: column;
    }

    div#welcome {
      display: flex;
      flex-grow: 1;
      align-self: center;
      justify-self: center;
      align-content: center;
      justify-content: center;
      align-items: center;
      position: relative;
      width: 100%;
    }
    
    div.icon-view {
      gap: 5px;
      display: flex;
      flex-shrink: 0;
    }

    h1#name {
      transform: scaleX(125%);
      font-family: myriad-pro;
      grid-area: name;
      font-size: 17.5vh;
    }

    a#contact {
      position: absolute;
      text-decoration: none;
      color: gray;
      right: 40px;
      bottom: 30px;
    }
  </style>

  <!--
            flex-direction: column;
      text-align: center;
      align-items: center;
      justify-content: center;
      -->
