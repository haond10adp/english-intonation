<script lang="ts">
  import { onMount } from 'svelte';

  export let url: string;
  export let start: number;
  export let end: number;
  export let nuclei: string[] = [];
  export let sentence = 'default figcaption';

  for (const nucleus of nuclei) {
    sentence = sentence.replace(nucleus, `<u>${nucleus}</u>`);
  }

  let audio: HTMLAudioElement;

  let icon = '🎧';

  let figcaption: HTMLElement;

  onMount(() => {
    audio.addEventListener('timeupdate', () => {
      if (audio.currentTime > end) {
        audio.pause();
        audio.currentTime = start;
      }
    });
    audio.addEventListener('playing', () => {
      icon = '🗣️️️';
      figcaption.style.fontWeight = 'bold';
      figcaption.style.backgroundColor = 'bisque';
    });
    audio.addEventListener('pause', () => {
      icon = '🎧';
      figcaption.style.fontWeight = 'normal';
      figcaption.style.backgroundColor = 'transparent';
    });
  });
</script>

<figure>
  <audio
    controls
    src={url + '#t=' + start + ',' + end}
    bind:this={audio}
    hidden
  />
  <figcaption bind:this={figcaption}>
    <!-- svelte-ignore a11y-invalid-attribute -->
    <a href="" on:click|preventDefault={() => audio.play()}>
      <span>{icon}</span>{@html sentence}
    </a>
  </figcaption>
</figure>

<style>
  figure {
    display: block;
    margin: 0;
    margin-left: -2em;
  }
  a {
    display: block;
    font-size: large;
    font-family: 'Courier New', Courier, monospace;
    padding: 0.4em 0;
  }
  a:hover {
    font-weight: bold;
    background-color: bisque;
  }
  a:active {
    color: orangered;
  }
  span {
    margin-right: 3em;
    width: 1em;
    color: blue;
    color: transparent;
    text-shadow: 0 0 0 black;
  }
</style>
