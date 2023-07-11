---
title: 'Leading and trailing tones'
---

<script>
  import Audio from '$lib/Audio.svelte'
  import AudioWrapper from '$lib/AudioWrapper.svelte'
  import Naudio from '$lib/Naudio.svelte'
</script>

Many phrases or clauses do not stand alone, but are attached to some other element. They are not complete in themselves, but are dependent on some other (independent) structure. Usually they precede this other, main, element; but sometimes they follow it.

If a dependent element precedes the main element, we say it is **leading**. If it follows the main element, we say it is **trailing**. In either case, the unmarked tone for dependent element is a **non-fall** (= a fall-rise or a rise).

## Leading dependent element

With a **leading** dependent element, this non-fall is most usually a **fall-rise**. We call this tone meaning the **dependent fall-rise**. It indicates that there is more material still to come, and is thus an indication of non-finality:

<AudioWrapper>
<Audio 
  sentence="*After \/lunch | we could *call on \Mary" 
  nuclei="{['lunch', 'Mar']}" 
  url="2-20" 
  start=2
  end=5
/>
</AudioWrapper>

<Naudio
  sentence="*British \/Airways | *flies there on \Tuesdays. <br>
  *First we find the \/socket, *then we insert the \pin"
  nuclei="{['Air', 'Tues', 'soc', 'pin']}" 
/>
Alternatively, a leading dependent element may have a rise (including the possibility of a mid-level tone). We call this tone meaning the **dependent rise**.

<AudioWrapper>
<Audio 
  sentence="*After /lunch | we could *call on \Mary" 
  nuclei="{['lunch', 'Mar']}" 
  url="2-20" 
  start=6
  end=10
/>
</AudioWrapper>

## Trailing dependent element

With a **trailing** dependent element, the most usual tone is a rise. The tone meaning of this **trailing dependent rise** is merely to indicate that it belongs with what went before:

<AudioWrapper>
<Audio 
  sentence="We're *going to \Spain | in /August" 
  nuclei="{['Spain', 'Aug']}" 
  url="2-20" 
  start=10
  end=13
/>
</AudioWrapper>

<Naudio
  sentence="I'm *rather an\noyed, | /frankly. <br>
  They're ar*riving to\morrow, | as far as I /know"
  nuclei="{['noyed', 'frank', 'mor', 'know']}" 
/>

## Trailing vs leading

The following pairs each contain the same material, but in different orders. In the variants numbered (i), the dependent element has the leading fall-rise. In the variants numbered (ii), it has trailing rise. The independent element in each case has a definitive fall:
<Naudio
  sentence="(i) If you're \/ready, | we could be\gin. <br>
  (ii) We could be\gin | if you're /ready."
  nuclei="{['ready', 'gin']}" 
/>
<AudioWrapper>
<Audio 
  sentence="(i) if *I were \/you, | I'd re\ject it. <br>
  (ii) I'd re\ject it | if I were /you." 
  nuclei="{['ject', 'you']}" 
  url="2-20" 
  start=14
  end=20
/>
</AudioWrapper>
<Naudio
  sentence="(i) They're *not from \/Spain, | they're from \Portugal. <br>
  (ii) They're from \Portugal, | they're *not from /Spain."
  nuclei="{['Spain', 'Port']}" 
/>

It is possible for a dependent fall-rise to be, at the same time, an implicational fall-rise, as in the following example, where _you_ is in contrast with _me_.
<Naudio
  sentence="I *don't know about \/you, | but *I'm \starving."
  nuclei="{['you', 'starv']}" 
/>

## Typical patterns

The typical patterns are:

- **fall-rise plus fall**, for the order dependent-independent, and
- **fall plus rise**, for the order independent-dependent.

Alternatively, but less commonly, as we have seen, a leading dependent tone can be a rise, while a trailing dependent tone can be a fall-rise.
<Naudio
  sentence="\/Personally, | I *thought it was \terrible. <em>(leading fall&minus;rise) or</em> <br>
  /Personally, | I *thought it was \terrible. <em>(leading rise)</em> <br><br>
  I *thought it was \terrible, | /personally. <em>(trailing rise) or</em> <br>
  I *thought it was \terrible, | \/personally. <em>(trailing fall&minus;rise)</em>"
  nuclei="{['Per', 'ter', 'per']}" 
/>

Students of EFL may need to spend time practicing the leading fall-rise. It is a tone very characteristic of mainstream English (RP and GA), yet rare of absent in most other languages.
