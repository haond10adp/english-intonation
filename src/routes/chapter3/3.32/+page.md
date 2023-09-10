---
title: 'Reusing your own words'
---

<script>
  import Audio from '$lib/Audio.svelte'
  import AudioWrapper from '$lib/AudioWrapper.svelte'
  import Naudio from '$lib/Naudio.svelte'
</script>

We can also repeat ourselves for emphasis, giving the same information more than once, and presenting it afresh each time, focusing on it anew:

<Naudio
  sentence="It's \true, | it's \true! <br>
  I *can't ac\cept it, I just *can't ac\cept it."
  nuclei="{['true', 'cept']}" 
/>

This may involve reaccenting the same words, as in the example just given, or reaccenting the same **ideas** while expressing them differently, e.g. by using synonyms:

<AudioWrapper>
<Audio 
  sentence="I \love you, | I a\dore you, | I *think you're \wonderful." 
  nuclei="{['love', 'dore', 'won']}" 
  url="3-32" 
  start=2
  end=6
/>
</AudioWrapper>

<Naudio
  sentence="I \hate her, | I de\test her, I *can't \stand her."
  nuclei="{['hate', 'test', 'stand']}" 
/>

We may also need to reaccent words already used in cases such as

<AudioWrapper>
<Audio 
  sentence="*When I say \/stop, | \stop!" 
  nuclei="{['stop']}" 
  url="3-32" 
  start=6
  end=9
/>
</AudioWrapper>

<Naudio
  sentence="*First things \first. <br>
  Sur*prise, sur\prise!"
  nuclei="{['first', 'prise']}" 
/>
There are also several idiomatic expressions, with the typical structure _X and X_ or _X-preposition-X_, in which a repeated word is accented on each occasion. Examples include _more and more, hours and hours, again and again, (to meet someone) face to face, from day to day_

<Naudio
  sentence="The 'tremors | got *worse and 'worse. <br>
  We 'walked | for *miles and 'miles. <br>
  The *noise get louder and 'louder. <br>
  *Profits in'creased | from *year to 'year. | They just *grew and grew and 'grew"
  nuclei="{['trem', 'worse', 'walked', 'miles', 'loud', 'year', 'grew', 'creased']}" 
/>
Some instances of a speaker accenting repeated words do not seem to have a logical explanation, and must be regarded as idiomatic. For example, we might complain about a speaker's voice quality or intonation by using the cliche:

<Naudio
  sentence="It's *not what he \/said, | it's the way that he \said it."
  nuclei="{['said']}" 
/>
Logically, you would expect contrastive focus on _what_ and _way_ rather than the repeated focusing on _said_.

On saying goodbye we can use the idiomatic expression:

<Naudio
  sentence="I *see you when I 'see you."
  nuclei="{['see']}" 
/>
