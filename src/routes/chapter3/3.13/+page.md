---
title: 'Contrastive focus overrides other factors'
---

<script>
  import Audio from '$lib/Audio.svelte'
  import AudioWrapper from '$lib/AudioWrapper.svelte'
  import Naudio from '$lib/Naudio.svelte'
</script>

## A

We sometimes put the nucleus on a 'given' item because we need to place the item in contrastive focus. This arises particularly when we correct another speaker. Because it is in contrast, the repeated material nevertheless receives the nuclear accent:
<AudioWrapper>
<Audio 
  sentence="?? He's a *famous \actor. <br> - Well *not exactly an \/actor, | *more a \singer." 
  nuclei="{['act', 'sing']}" 
  url="3-13" 
  start=2
  end=9
/>
</AudioWrapper>
<Naudio
  sentence="?? She had on a *green \dress. <br> - Oh 'not \/green. | It was \blue."
  nuclei="{['dress', 'green', 'blue']}" 
/>
Consider also the following example:
<Naudio
  sentence="?? It's *awfully hard to get up at \/five. <br> - If you're *so late to \/bed, you *won't be able to get \up early."
  nuclei="{['five', 'bed', 'up']}" 
/>
In this example, _early_ counts as information already given (since 5.am is early in the day). Although _get up_ is also given, the need to draw the contrast between it and _be late to bed_ leads the speaker to accent it, indeed to place nucleus on it.

If there is new information **following** a contrastive nucleus, it has to be made into a separate IP:
<Naudio
  sentence="She *said it was \wrong, | but \/he | said it was \right."
  nuclei="{['wrong', 'right', 'he']}" 
/>
In this example there is a contrastive nucleus on _he_. But _right_, which follows, conveys new information, and must therefore has its own nucleus in a separate IP.

## B

Contrastive focus may override lexical stress patterns, too. In particular, a regular early-stressed compound may get late accent for reasons of contrast. For example both _'birthday card_ and _'birthday present_ have lexical stress on the first element, _birthday_. Yet with contrastive tonicity you might say:
<Naudio
  sentence="I *got her a birthday \present, | but I *didn't get her a birthday \card"
  nuclei="{['pres', 'card']}" 
/>

Names of localities usually have lexical double stress: thus _Trafalgar 'Square, Raynes 'Park_ (see [3.5](3.5)). This pattern can be overridden under contrastive focus. A common case is in the list. Here we often see examples of the thinking-ahead principle mentioned above [3.8](3.8), namely that of removing accenting from an item that is about to be repeated as well as the item that is actually repeated.
<Naudio
  sentence="We *started in Tra'falgar Square | and then went to 'Leicester Square <br>
  *This train calls at 'Raynes Park, | 'Motspur Park, | *Malden 'Manor..."
  nuclei="{['fal', 'Lei', 'Raynes', 'Mot', 'Mal']}" 
/>

Occasionally we may focus on **part** of a word only. This may mean that the contrastive accent goes on a syllable different from the one bearing the main lexical stress.

<AudioWrapper>
<Audio
  sentence="?? *How many 'were there? <br> - *Fif'teen. (<em>Normal pattern</em>)"
  nuclei="{['were', 'teen']}"
  url="3-13"
  start=10
  end=14
/>
<Audio
  sentence="?? Did you say 'fifteen | or 'sixteen? <br> - 'Fifteen! (<em>Contrastive patter</em>)"
  nuclei="{['fif', 'six', 'Fif']}"
  url="3-13"
  start=15
  end=20
/>
<Audio 
  sentence="They're *not 'Chinese, | They're 'Japanese." 
  nuclei="{['Chi', 'Jap']}" 
  url="3-13" 
  start=21
  end=24
/>
<Audio 
  sentence="It *wasn't really 'red, | *just red'dish." 
  nuclei="{['red', 'dish']}" 
  url="3-13" 
  start=26
  end=30
/>
</AudioWrapper>
<Naudio
  sentence="I's say it was *not so much 'democratic, | just 'autocratic. <br>
  She'll *talk to any'body | and any'thing"
  nuclei="{['dem', 'au', 'bod', 'thing']}" 
/>

Prefixes and suffixes may receive contrastive focus
<Naudio
  sentence="?? I *thought the villagers were pretty 'friendly <br> - 'Surely not! || 'I thought | they were *rather 'unfriendly. <br><br>
  ?? 'This stress is post'primary. <br> - 'No | it 'isn't | It's 'preprimary"
  nuclei="{['friend', 'Sure', 'I', 'un', 'This', 'No', 'is', 'pre']}" 
/>

Note that the stress pattern of contracted negatives is never overriden. That is, we never emphasize negative polarity by accenting _n't_ part of _didn't_, _wasn't_, etc. (We do have the option of undoing the contraction and accenting _not_)
<Naudio
  sentence="?? 'You took my 'stapler. <br><br> - I 'didn't. <br> - I did 'not."
  nuclei="{['sta', 'did', 'not']}" 
/>

Contrastiveness also overrides the usual rules about special function words such as reflexive ([3.12](3.12))
<Naudio
  sentence="You'll 'hurt yourself <em>but</em> <br>
  You *won't hurt 'me, | you'll hurt you'self. <br><br>
  ?? *Who taught you pho'netics? <br> - 'No one | I've *taught my'self."
  nuclei="{['hurt', 'me', 'self', 'net', 'No']}" 
/>
