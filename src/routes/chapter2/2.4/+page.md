---
title: 'Fall-rises'
---

<script>
  import Audio from '$lib/Audio.svelte'
  import AudioWrapper from '$lib/AudioWrapper.svelte'
  import Naudio from '$lib/Naudio.svelte'
</script>

In a fall-rise nuclear tone, the pitch of the voice starts relatively high and then moves first downwards and then upwards again. The starting point may be anywhere from mid to high, the midpoint is low, and the endpoint is usually mid. (Some other possibilities are discussed in [5.6](/chapter5/5.6))

If the nucleus is on the last or only syllable in the intonation phrase, then the entire fall-rise movement takes place on that syllable:
<AudioWrapper>
<Audio sentence="\/Mine." nuclei="{['Mine']}" url="2-4" start=2 end=3 />
</AudioWrapper>

As usually, in identifying the nuclear tone we must disregard any prenuclear pitch pattern
<AudioWrapper>
<Audio sentence="I don't think it's \/mine." nuclei="{['mine']}" url="2-4" start=4 end=6 />
</AudioWrapper>

If there is a tail (= syllables after the nucleus), the falling-rising pitch movement is spread out over the nucleus and tail. The failing part takes place on the nuclear syllable, or between that syllable and the next. The rising part takes place towards the end of the tail and extends up to the last syllable of the IP:
<AudioWrapper>
<Audio sentence="?? Are you /ready yet? <br> - \/Almost" nuclei="{['ready', 'Al']}" url="2-4" start=7 end=11 />
</AudioWrapper>
<AudioWrapper>
<Audio sentence="?? *This one's \mine. <br> - \/Mine, you mean." nuclei="{['mine', 'Mine']}" url="2-4" start=11 end=15 />
</AudioWrapper>
<AudioWrapper>
<Audio sentence="?? *Was she /hurt? <br> - \/Fortunately, | she \wasn't" nuclei="{['hurt', 'Fort', 'was']}" url="2-4" start=16 end=20 />
</AudioWrapper>
