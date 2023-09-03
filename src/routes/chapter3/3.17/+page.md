---
title: 'Prepositions'
---

<script>
  import Audio from '$lib/Audio.svelte'
  import AudioWrapper from '$lib/AudioWrapper.svelte'
  import Naudio from '$lib/Naudio.svelte'
</script>

We have seen that prepositions are usually not accented unless they are brought into contrastive focus. However, there are two circumstances where in broad focus the nucleus is located in a preposition. Both involve wh questions in which there is no lexical material (=content words).

The first is when the preposition ( the stranded remnant of a prepositional phrase) functions as the complement of _to be_.

<Naudio
  sentence="Look at this button. | *What's it 'for? <br>
  That's Mary. | *Who's she 'with."
  nuclei="{['for', 'with']}" 
/>
There is a difference between these examples and the corresponding sentences containing a lexical stress rather than a pronoun. If there is lexical material, the default is for the nucleus to be located on the last lexical item, following the usual rule:

<Naudio
  sentence="*What's that 'button for? <br>
  *Who's 'Mary with?"
  nuclei="{['but', 'Ma']}" 
/>

The second involves a preposition immediately follow a wh word:

<Naudio
  sentence="?? I've scored sixty. <br> - *What 'of it? <br><br>
  ?? You know my essay? <br> - 'Yes, | *What a'bout it?"
  nuclei="{['of', 'Yes', 'bout']}" 
/>
Compare, with lexical material:
<Naudio
  sentence="?? You know my essay? <br> - *What d'you want to 'say about it"
  nuclei="{['say']}" 
/>
