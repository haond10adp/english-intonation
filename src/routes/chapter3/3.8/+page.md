---
title: 'Prospective and implied givenness'
---

<script>
  import Audio from '$lib/Audio.svelte'
  import AudioWrapper from '$lib/AudioWrapper.svelte'
  import Naudio from '$lib/Naudio.svelte'
</script>

It is not only repeated words that tend not to be accented, but also words that are **about to be repeated**. Compare (ii) with the unmarked pattern in (i):
<Naudio
  sentence="(i) a *red 'triangle | and a *blue 'square. <br>
  (ii) a 'red triangle | and a 'blue triangle."
  nuclei="{['tri', 'square', 'red', 'blue']}" 
/>
In (ii) the word _triangle_ is deaccented on each occasion: the second time because it is a repeated word, and the first time because it is going to be repeated.

Accentuation and tonicity depend on the speaker's mental planning. The tonicity in (ii) implies that this sequence of two IPs was planned as a complete unite in advance. If, on the other hand, the speaker utters the first IP while he has still not yet planned the second IP, then for the same words we get an alternative pattern, (iii):
<Naudio
  sentence="(iii) a *red 'triangle | ... oh and a 'blue triangle"
  nuclei="{['tri', 'blue']}" 
/>

If these words were uttered as a single IP rather than being spread over two, we would still have the same difference between (i) and (ii):
<Naudio
  sentence="a *red triangle and a blue 'square <br>
  a *red triangle and a 'blue triangle"
  nuclei="{['square', 'blue']}" 
/>
The speaker also has the option of deaccenting items that are not repeated and so objectively do represent new material. This can be a way of forcing on the hearer the view that this material is not new - that it is given, that it is part of the knowledge already shared by speaker and hearer ([3.33](3.33)).
<Naudio
  sentence="?? I'd like to speak to the manager. <br><br> - (i) She's *much too 'busy. <br> - (ii) She's *much to busy."
  nuclei="{['busy', 'much']}" 
/>
Reply (i) has neutral tonicity, with _too busy_ treated as new. In reply (ii), the speaker forces the hearer to accept (= treat as given) the fact that the manager is too busy; the emphasis is on the great degree of her being too busy, and we have marked tonicity with the nucleus on _much_. Intensifiers are often given nuclear accenting in this way.

Here is another example, one that I witnessed. A taxi-driver was picking up two passengers who had a lot of luggage. The driver loaded most of the cases into the boot (trunk) of the car, but could not find room for the last one. So he finally placed it on the back seat. One passenger said to the other:
<AudioWrapper>
<Audio 
  sentence="We've *solved \/that problem." 
  nuclei="{['that']}" 
  url="3-8" 
  start=1
  end=4
/>
</AudioWrapper>
The placement of the nucleus on _that_, leaving _problem_ to go in the tail, can be interpreted as implying that life is a succession of problems. The speaker treats the notion of _problem_ as giving ( and implies a contrast between _that_ problem and other problems: see [3.10](3.10)).

In this way the speaker can use nucleus placement to indicate what part of the information is to be taken as old, givin, mutually agreed, and what part can be taken as new, fresh, additional. The speaker's decisions may not always agree with objective reality. This can be used for comic effect:
<Naudio
  sentence="The \/Queen | said 'how de\lighted she was | to be in /Scunthorpe, || and *then the \Duke made a joke."
  nuclei="{['Queen', 'light', 'Scun', 'Duke']}" 
/>
With this tonicity (deaccenting _made a joke_), the speaker implies that the Queen, too, was joking when she said how delighted she was to be in Scunthorpe. the further implicature is that Scunthorpe is agreed to be such a dull place that no one could truthfully claim to be delighted at being there. Compare the following with neutral tonicity, where there is no such implicature
<Naudio
  sentence="The \/Queen | said 'how de\lighted she was | to be in /Scunthorpe, || and *then the *Duke made a \joke."
  nuclei="{['Queen', 'light', 'Scun', 'joke']}" 
/>
Thus one participant in a conversation can use intonation to manipulate the conversation by imputing particular knowledge or views to the other participant or participants.

If someone has been doing a number of foolish things, you might greet the latest foolishness with:
<AudioWrapper>
<Audio 
  sentence="\Now what's she done?" 
  nuclei="{['Now']}" 
  url="3-8" 
  start=5
  end=7
/>
</AudioWrapper>
which implies that you have already been querying her previous actions (what's she done), since by your intonation you treat them as givin, not new.
