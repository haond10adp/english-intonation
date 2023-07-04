<script lang="ts">
  export let nuclei: string[] = [];
  export let sentence = 'default figcaption';

  sentence = sentence.replaceAll('??', '〉');
  sentence = sentence.replaceAll('-', '》');

  sentence = sentence.replaceAll('*', '<sup>▸</sup>');

  for (const nucleus of nuclei) {
    sentence = sentence.replaceAll(`\\/${nucleus}`, `⤵⤴<u>${nucleus}</u>`);
    sentence = sentence.replaceAll(`\\${nucleus}`, `⤵<u>${nucleus}</u>`);
    sentence = sentence.replaceAll(`/${nucleus}`, `⤴<u>${nucleus}</u>`);
  }
</script>

<div>{@html sentence}</div>

<style>
  div {
    text-indent: 0 !important;
    border: 1px solid black;
    padding-left: 2em;
    padding-top: 1em;
    padding-bottom: 1em;
    border-left: 0.4em solid black;
    margin-top: 1em;
    margin-bottom: 1em;
    font-family: 'Courier New', Courier, monospace;
  }
</style>
