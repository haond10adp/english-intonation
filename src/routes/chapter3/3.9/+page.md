---
title: 'Broad and and narrow focus'
---

<script>
  import Audio from '$lib/Audio.svelte'
  import AudioWrapper from '$lib/AudioWrapper.svelte'
  import Naudio from '$lib/Naudio.svelte'
</script>

Another way of analyzing the linguistic function of tonicity involves the notion of **focus**: the concentration of attention on a particular part of the message. When we utter a stretch of speech (an IP), we can either bring everything into fucus (**broad** focus), or we can focus selectively on one part of it (**narrow** focus). The part of the IP is placed in focus is called the focus **domain**. The nucleus marks the **end** of a focus domain.

Maximally **broad focus** means that the focus domain is the whole IP: everything in the IP is brought into focus. We would use broad focus, for example, in answer to the question _What happened_?
<Naudio
  sentence="?? *What happened 'next? <br> - *Everyone burst out 'laughing"
  nuclei="{['next', 'laugh']}" 
/>

To give a stretch of utterance broad focus, we use neutral tonicity. The nucleus goes on the last lexical item:
<Naudio
  sentence="?? *What's going 'on here? <br> -Se*lena's had a 'heart attack."
  nuclei="{['on', 'heart']}" 
/>

In **narrow focus** only part of what we say is brought into focus. For example, if we asked a question, and in our answer we repeat part of the material from the question, then that old information will usually not be brought into focus. That is, the lexical items in the old information will not be accented. The nucleus shows where the focus domain ends.

<Naudio
  sentence="?? *Who brought the 'wine? <br><br> - 'Mary. <br> - 'Mary did. <br> - 'Mary brought the wine. <br> - I think it was 'Mary. <br> - I think it was 'Mary that brought the wine."
  nuclei="{['Mary', 'wine']}" 
/>

All five versions of the answer have narrow focus. The focus domain is just the item _Mary_. The intonation indicates that we are concentrating attention on the relevant part (_Mary_), and not on the old, given, repeated material that follows _Mary_ in the longer versions.

<Naudio
  sentence="?? What did 'Mary bring? <br><br> - The 'wine. <br> - She brought the 'wine. <br> - Mary brought the 'wine. <br> - It was the 'wine that she brought. <br> - What she brought was the 'wine'."
  nuclei="{['Mary', 'wine']}" 
/>

The nucleus tells us where the focus domain ends, and the onset may tell us where it begins (though not very reliably: see [5.11](/chatper5/5.11)). Consider these two possible 'turns' in a conversation:
<Naudio
  sentence="(i) 'Tell me about her. <br>
  (ii) *What kind of 'car does she drive?"
  nuclei="{['Tell', 'car']}" 
/>
Both might elicit the answer
<Naudio
  sentence="- She drives a 'Ford Fi'esta."
  nuclei="{['es']}" 
/>
The nucleus and nuclear tone could be the same, but the focus domains in the two cases would be different: in (i) it is _drives a Ford Fiesta_, but in (ii) just a _Ford Fiesta_. You cannot tell this from the intonation, only from the context. The focus is **ambiguous**
