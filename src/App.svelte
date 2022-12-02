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
        <p>
          Adresa: <br/>
          U pastoušky 159/1 <br/>
          158 00 Praha 5
        </p>
        <p>
          Telefon:  251 612 100
        </p>
        <p>
          Otevírací doba: <br/>
          PO - PÁ: 10.00 - 17.00
        </p>
        <p>
          Mobil:  603 544 749 (GSM)
        </p>
        <p>
          Osobní návštěva možná <br/>
          pouze po předchozí domluvě.
        </p>
        <p>
          Mail:  <a href="mailto:info@caj.cz">info@caj.cz</a>
        </p>
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
      padding-bottom: 5vh;
      scroll-snap-align: start;
    }

    page {
      display: flex;
      flex-direction: column;
    }

    div#welcome {
      flex-grow: 1;
      align-self: center;
      justify-self: center;
      align-content: center;
      justify-content: center;
      align-items: center;
      display: grid;
      grid-template-columns: 1fr 1fr;
      grid-template-rows: 140px repeat(3, 50px);
      gap: 10px;
      grid-template-areas:
        "name name"
        "physical remote"
      ;
    }

    div#welcome > p {
      text-align: center;
      margin: 5px;
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
    }
  </style>

  <!--
            flex-direction: column;
      text-align: center;
      align-items: center;
      justify-content: center;
      -->
