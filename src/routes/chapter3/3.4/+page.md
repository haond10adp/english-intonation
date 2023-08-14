---
title: 'Compounds'
---

<script>
  import Audio from '$lib/Audio.svelte'
  import AudioWrapper from '$lib/AudioWrapper.svelte'
  import Naudio from '$lib/Naudio.svelte'
</script>

When identifying the 'last content word' we have to bear in mind the existence of compounds. Most **compounds** in English are **single-stressed**, that is, the main lexical stress goes on the first element. (Alternative terms for 'single-stressed' are 'front-stressed' and 'early-stressed'.)

<Naudio
  sentence="'bedtime', 'grassland', 'wheelbarrow', 'newsgroup', 'keyboard', 'highlight"
  nuclei="{['']}" 
/>

If a compound is to bear the nucleus, then -just as with simple words - the accent is located on the lexically stressed syllable:
<Naudio
  sentence="It's *well past your 'bedtime. <br>
  *Put the grass in the 'wheelbarrow. <br>
  *Don't look at the 'keyboard. <br>
  *Where's your 'grandmother? <br>
  *Here's another 'highlight."
  nuclei="{['bed', 'wheel', 'key', 'grand', 'high']}" 
/>

Many English compounds are written as two separate words, even though the main stress is still on the first element of the compound. These are called **open** compounds (or two-word compounds).
<Naudio
  sentence="'library book, 'credit card, 'bus ticket', 'running shoe', 'slag heap, 'high school"
  nuclei="{['']}" 
/>
It does not matter whether a single-stressed compound is written as one word, or hyphenated, or as two words. As far as intonation is concerned, it makes no difference: all single-stressed compounds behave as if they were single words. If we place the nucleus on one, it goes on the stressed syllable of the first element:
<AudioWrapper>
<Audio 
  sentence="Is *that my 'library book?" 
  nuclei="{['lib']}" 
  url="3-4" 
  start=2
  end=4
/>
<Audio 
  sentence="I've *lost my 'credit cards" 
  nuclei="{['cred']}" 
  url="3-4" 
  start=6
  end=9
/>
</AudioWrapper>

<Naudio
  sentence="The were *playing 'video games. <br>
  I *need some new 'running shoes. <br>
  Are you *still at 'high school? <br>
  At *ten we have a 'physics class."
  nuclei="{['vid', 'run', 'high', 'phys']}" 
/>

Compounds can be **nested**: that is, one of the elements of the compound may itself consist of more than one element. If the outer compound is single-stressed, the nucleus will still go on the first element:
<Naudio
  sentence="'credit card bill = bill for using a credit card, ['['credit card] bill]"
  nuclei="{['']}" 
/>

## Summary

To refine our tonicity rule so as to allow for compounds, we nee to change 'on the last content word' to an expression covering both simple words and compound words. Accordingly, from here on we shall refer to **lexical items** rather than to content words. A 'lexical item' is either a single word or a compound. Unless there is some reason for it to go elsewhere, the nucleus goes on the **last lexical item** in the IP.

This is the default tonicity rule: unless contrast is involved (see [3.10](3.10)-13), we place the nucleus on the last lexical item in each IP. To do this we place the nuclear accent on the lexically stressed syllable of that item. This is 'neutral' or 'unmarked' tonicity.

## Open compounds vs phrase (adjective plus noun)

Open compounds can be misleading for the student of EFL because superficially a compound may look like a phrase consisting of adjective plus noun. Compare _running shoes_ and _running water_. The first is an open compound, single-stressed; _running_ is gerund (a verbal noun). The second is a phrase in which each word has its own lexical stress; _running_ is a participle (a verbal adjective):
<AudioWrapper>
<Audio 
  sentence="(i) I *need some new 'running shoes" 
  nuclei="{['run']}" 
  url="3-4" 
  start=10
  end=14
/>
<Audio 
  sentence="They made the *outhouse into a 'bathroom | and installed *running 'water" 
  nuclei="{['bath', 'wat']}" 
  url="3-4" 
  start=16
  end=20
/>
</AudioWrapper>
The last lexical item in (i) is _running shoes_, a single-stressed compound. the last lexical item in (ii) is _water_.

Unlike compounds, **phrases** consist of two or more lexical items. they have one lexical stress for each. The nucleus normally goes on the last of them:
<Naudio
  sentence="It was a *bitter disap\pointment. (<em>bitter disappointment</em> is a phrase)"
  nuclei="{['point']}" 
/>
Phrase such as _bitter disappointment_ are 'double-stressed', as opposed to the single lexical stress of compounds.
