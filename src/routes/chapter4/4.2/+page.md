---
title: 'Choosing the size of the chunks'
---

<script>
  import Audio from '$lib/Audio.svelte'
  import AudioWrapper from '$lib/AudioWrapper.svelte'
  import Naudio from '$lib/Naudio.svelte'
</script>

Each intonation phrase presents one piece of information. The speaker has to break the message up into chunks of information - into IPs - and has considerable freedom of choice in how to do so. Typically, an IP lasts for between one and two seconds (Tench, 1996: 31). An utterance, or a speaker's turn in a conversation, may consist of one or many such IPs.

The chunk also reflect the speaker's decision about focus. Each IP covers a single focus domain (culminating in the nucleus, as seen in [3.9](/chapter3/3.9)) and the associated out-of-focus material.

<Naudio
  sentence="I *think you've made a good 'progress this year."
  nuclei="{['pro']}" 
/>
In this example, the focus domain might typically be _good progress_. The associated out-of-focus material would be _I think you've made_ and _this year_. The whole thing would be said as a single IP.

In an alternative spoken version of the same words, the speaker might decide to place an additional focus on _this year_, perhaps wishing to imply that there is a difference between this year and last year. Dividing it into two chunks, with an intonation break after _progress_, gives:

<Naudio
  sentence="I *think you've made a good 'progress | 'this year."
  nuclei="{['pro', 'this']}" 
/>
The speaker might also wish to place focus on _I_, perhaps to imply a contrast between what he or she thinks and the other speaker might think. To do this, the speaker would accent _I_ and might make _I think_ into a separate chunk:

<Naudio
  sentence="'I think | you've made a good 'progress | 'this year."
  nuclei="{['I', 'pro', 'this']}" 
/>
The size of the IP is linked to the decisions the speaker makes about how many words, and therefore how many syllables, to accent. An IP usually contains only one or two accents (onset and nucleus, or just nucleus). Less commonly, it may have three accents (with, therefore, a complex head), and rather rarely four or more. Five is probably the absolute upper limit. See [5.1-5](/chapter5/5.1)

IPs tend to be longer, and have more accents, in scripted material, and in material read aloud. In spontaneous conversation they tend to be shorter, with fewer accents. This maybe because the IP is not only the basic chunk for intonation purposes but also the basic chunk for mental planning. In our minds as we speak we plan one IP at a time. Reading from a script, we can look ahead and plan ahead; in ordinary conversation we may not have decided what we are going to say until just before we say it.

Tonicity thus varies considerable according to the **style** of speech. In some styles IPs may be short, with nearly every accent being nuclear. Here is a genuine, if extreme, example. At the church concert the choral conductor, a tall man, apologized for fussing about a footstool to stand on. He said:

<Naudio
  sentence="*Six foot /two | \/isn't | e\nough."
  nuclei="{['two', 'isn\'t', 'nough']}" 
/>
By using such short IPs he was able to pack a lot of tone meaning into this short sentence. After the performance the person publicly thanking the singers began rhetorically:

<Naudio
  sentence="*Have /you | *ever /heard | \/such | a \/marvelous | \anthem?"
  nuclei="{['you', 'heard', 'such', 'mar', 'an']}" 
/>
and ended by saying:

<AudioWrapper>
<Audio 
  sentence="\Thank you | \very much | in\deed." 
  nuclei="{['Thank', 'very', 'deed']}" 
  url="4-2" 
  start=2
  end=4
/>
</AudioWrapper>
But in private conversation this gushing style - the use of many IPs, each as small as these - would probably be out of place.
