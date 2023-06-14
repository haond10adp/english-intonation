<script lang="ts">
  import sidebar from '../../config/sidebar';
  const content = Object.values(sidebar);
  const [chapter1, chapter2, chapter3, chapter4, chapter5, chapter6] = [
    content[0],
    content[1],
    content[2],
    content[3],
    content[4],
    content[5],
  ];
  const chapter2content = [...chapter2].splice(1)!;
  const chapter3content = [...chapter3].splice(1)!;
  const chapter5content = [...chapter5].splice(1)!;
</script>

<div class="wrapper">
  <span class="anchor" id="top" />

  <h2>Table of contents</h2>

  <h3 id="introduction">{chapter1[0].title}</h3>
  <div class="column-layout">
    {#each chapter1[0].items as unit}
      <p>
        <span
          >{unit.unitNumber.length >= 4
            ? unit.unitNumber
            : unit.unitNumber + ' '}&nbsp;</span
        ><a href={unit.to}>{unit.title}</a>
      </p>
    {/each}
  </div>

  <h3 id="tone">{chapter2[0].title}</h3>
  {#each chapter2content as group}
    <h4>{group.title}</h4>
    <div class="column-layout">
      {#each group.items as unit}
        <p>
          <span
            >{unit.unitNumber.length >= 4
              ? unit.unitNumber
              : unit.unitNumber + ' '}&nbsp;</span
          ><a href={unit.to}>{unit.title}</a>
        </p>
      {/each}
    </div>
  {/each}

  <h3 id="tonicity">{chapter3[0].title}</h3>
  {#each chapter3content as group}
    <h4>{group.title}</h4>
    <div class="column-layout">
      {#each group.items as unit}
        <p>
          <span
            >{unit.unitNumber.length >= 4
              ? unit.unitNumber
              : unit.unitNumber + ' '}&nbsp;</span
          ><a href={unit.to}>{unit.title}</a>
        </p>
      {/each}
    </div>
  {/each}

  <h3 id="tonality">{chapter4[0].title}</h3>
  <div class="column-layout">
    {#each chapter4[0].items as unit}
      <p>
        <span
          >{unit.unitNumber.length >= 4
            ? unit.unitNumber
            : unit.unitNumber + ' '}&nbsp;</span
        ><a href={unit.to}>{unit.title}</a>
      </p>
    {/each}
  </div>

  <h3 id="beyond">{chapter5[0].title}</h3>
  {#each chapter5content as group}
    <h4>{group.title}</h4>
    <div class="column-layout">
      {#each group.items as unit}
        <p>
          <span
            >{unit.unitNumber.length >= 4
              ? unit.unitNumber
              : unit.unitNumber + ' '}&nbsp;</span
          ><a href={unit.to}>{unit.title}</a>
        </p>
      {/each}
    </div>
  {/each}

  <h3 id="sum">{chapter6[0].title}</h3>
  <div class="column-layout">
    {#each chapter6[0].items as unit}
      <p>
        <span
          >{unit.unitNumber.length >= 4
            ? unit.unitNumber
            : unit.unitNumber + ' '}&nbsp;</span
        ><a href={unit.to}>{unit.title}</a>
      </p>
    {/each}
  </div>
</div>

<footer><p>Digitized for personal use by Haond10adp@gmail.com</p></footer>

<style>
  div.wrapper {
    padding-bottom: 4em;
    padding-left: 0.4em;
    padding-right: 0.4em;
  }

  span {
    font-family: 'Courier New', Courier, monospace;
    font-size: 0.9em;
  }

  h3 {
    margin-top: 2em;
    scroll-margin-top: 6em;
  }

  h4 {
    margin-top: 1em;
    margin-bottom: 0.6em;
  }

  a {
    color: rgb(67, 110, 189);
    line-height: 1.75;
  }

  a:hover {
    text-decoration: underline;
  }

  footer {
    text-align: center;
    font-weight: bold;
    padding-bottom: 1em;
  }

  @media (min-width: 950px) {
    div {
      width: 80vw;
      margin: 0 auto;
    }
    .column-layout {
      column-count: 3;
    }
  }
</style>
