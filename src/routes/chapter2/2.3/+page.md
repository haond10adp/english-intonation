---
title: 'Rises'
---

<script>
  import Audio from '$lib/Audio.svelte'
  import AudioWrapper from '$lib/AudioWrapper.svelte'
  import Naudio from '$lib/Naudio.svelte'
</script>

In a rising nuclear tone the pitch of the voice starts relatively low and then moves upwards. The starting point may be anywhere from low to mid, and the endpoint anywhere from mid to high. (Some other possibilities are discussed in [5.7](/chapter5/5.7))

If the nucleus is on the last or only syllable in the intonation phrase, then the rise takes place on that syllable:
<AudioWrapper>
<Audio url="2-3" sentence="/Who" nuclei="{['Who']}" start=2 end=3 />
</AudioWrapper>

Again, in identifying the nuclear tone we must disregard any prenuclear pitch pattern.
<AudioWrapper>
<Audio url="2-3" sentence="You want to talk to /who?" nuclei="{['who']}" start=3 end=6 />
</AudioWrapper>

:::info
There is often a **step down** in pitch as we reach the beginning of the nuclear rise. Do not let this mislead you into thinking that the tone is falling.
:::

If there is a tail (=syllables after the nucleus), the rising pitch movement does not happen wholly on the nucleus syllable, as in the cse of a fall. Rather, the rise is spread over the nuclear syllable and all the following syllables - over the whole of the nucleus plus tail:
<AudioWrapper>
<Audio url="2-3" sentence="/Chicken?" nuclei="{['Chick']}" start=7 end=9 />
<Audio sentence="/All of us?" nuclei="{['All']}" url="2-3" start=10 end=12 />
</AudioWrapper>
This means that the last syllable is actually the highest pitched, even though it is unaccented. **_Some people find this difficult to perceive, and instead tend to hear the nucleus latter in the intonation phrase than it really is_**. In fact, if there is no prenuclear then the nucleus (perceptually the most salient syllable for native speakers) is actually the lowest-pitched syllable in the IP).
<Naudio sentence="?? Her *name's Mel\pomme.<br> - What did you say her name was?" nuclei="{['pom', 'What']}" />
<AudioWrapper>
<Audio sentence="/What did you say her name was?" nuclei="{['What']}" url="2-3" start=13 end=15 />
</AudioWrapper>
