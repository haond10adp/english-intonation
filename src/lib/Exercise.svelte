<script>
  // @ts-ignore
  import { Expansion } from '@sveltepress/theme-default/components';
</script>

<slot />

<Expansion title="Answers">
  <div class="p-4 text-[24px]">
    Look at the icon left. It gets colored when expanded!
  </div>
  <div slot="icon-fold" class="i-bxs-wink-smile" />
  <div slot="icon-expanded" class="i-fxemoji-smiletongue" />
  <div slot="arrow" class="i-material-symbols-thumbs-up-down" />
</Expansion>
