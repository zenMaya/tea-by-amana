<script>
  export let enabled;
</script>

{#if enabled}
<!-- svelte-ignore a11y-click-events-have-key-events -->
<div id="overlay" on:click={() => enabled = false}>
  <div id="content">
    <div id="titlebar">
      <button id="close" on:click={() => enabled = false}>X</button>
    </div>
    <h1 id="title">TEA BY AMANA</h1>
    <div id="body">
      Dovolujeme si vám představit edici čajů TEA BY AMANA®, jedinečný výběr vysoce kvalitních
      čajů z celého světa. Všechny tyto čaje prošly přísným výběrem a přibližují náš takřka 30 lety
      zkušeností podpořený odborný náhled na jednotlivé produkční oblasti, druhy a třídy. Čaj je
      naší láskou, zájmem i povoláním a naší neustálou snahou je přinášet vám radost a potěšení z
      tohoto nedocenitelného nápoje. Pečlivě jsme volili mezi nejslavnějšími a nejvýznamnějšími
      produkovanými třídami čaje se zvláště vysokým důrazem na kvalitu listu a nápoje. Pokusili
      jsme se o z našeho pohledu minimalistický, leč přesto dosti reprezentativní vhled do světa
      čaje, a rádi bychom tak potěšili nejen jeho stálé příznivce a vyznavače, ale zároveň i nové
      adepty a zájemce z řad nejširší veřejnosti. Doufáme, že s výsledky naší snahy budete
      spokojeni.
    </div>
    <div id="contact">
      <p>ČAJI ZDAR!</p>
      <p>V dokonalé úctě AMANA</p>
      <p><a href="http://www.teabyamana.com" target="_blank">www.teabyamana.com</a></p>
      <p><a href="https://www.caj.cz" target="_blank">www.caj.cz</a></p>
    </div>
  </div>
</div>
{/if}

<style>
  div#content {
    max-width: 900px;
    background: white;
    display: grid;
    padding: 0 0 50px;
    grid-template-areas:
      "titlebar"
      "title"
      "body"
      "contact";
  }
  div#body {
    grid-area: body;
    text-align: justify;
    font-size: 1.3rem;
    padding: 0 120px;
  }
  div#contact {
    margin-top: 30px;
    grid-area: contact;
    display: flex;
    flex-direction: column;
    gap: 3px;
    padding: 0 120px;
  }
  div#contact * {
    font-weight: 700;
    margin: 0;
  }
  div#overlay {
    position: fixed;
    z-index: 2;
    display: flex;
    align-items: center;
    justify-content: center;
    width: 100vw;
    height: 100vh;
    background: rgba(1, 1, 1, 0.7);
  }
  h1#title {
    transform: scaleX(125%);
    font-family: myriad-pro;
    text-align: center;
    margin-top: 0;
    margin-bottom: 50px;
    grid-area: title;
  }
  div#titlebar {
    display: flex;
  }
  button#close {
    margin-left: auto;
  }
</style>
