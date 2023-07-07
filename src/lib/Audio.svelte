<script lang="ts">
  import { onMount } from 'svelte';

  export let url: string;
  export let start: number;
  export let end: number;
  export let nuclei: string[] = [];
  export let sentence = 'default figcaption';

  sentence = sentence.replaceAll('??', '〉');
  sentence = sentence.replaceAll('-', '》');

  sentence = sentence.replaceAll('*', '<sup>▸</sup>');

  for (const nucleus of nuclei) {
    sentence = sentence.replaceAll(
      `\\/${nucleus}`,
      `<span style="font-family: 'Noto Sans JP', sans-serif">⤵⤴</span><u>${nucleus}</u>`
    );
    sentence = sentence.replaceAll(
      `\\${nucleus}`,
      `<span style="font-family: 'Noto Sans JP', sans-serif">⤵⤴</span><u>${nucleus}</u>`
    );
    sentence = sentence.replaceAll(
      `/${nucleus}`,
      `<span style="font-family: 'Noto Sans JP', sans-serif">⤵⤴</span><u>${nucleus}</u>`
    );
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
    src={`/audio/${url}.mp3` + '#t=' + start + ',' + end}
    bind:this={audio}
    hidden
  />
  <figcaption bind:this={figcaption}>
    <!-- svelte-ignore a11y-invalid-attribute -->
    <a href="" on:click|preventDefault={() => audio.play()}>
      <span>{icon}</span>
      <div>{@html sentence}</div>
    </a>
  </figcaption>
</figure>

<style>
  figure {
    display: block;
    margin: 0;
    text-indent: 0;
  }
  a {
    display: flex;
    font-size: large;
    padding: 0.4em 0;
    font-family: 'Roboto Mono', monospace;
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
  @media (max-width: 500px) {
    span {
      margin-right: 1em;
      width: 1em;
      color: blue;
      color: transparent;
      text-shadow: 0 0 0 black;
    }
  }
</style>
