---
title: 'Commands'
---

<script>
  import Audio from '$lib/Audio.svelte'
  import AudioWrapper from '$lib/AudioWrapper.svelte'
  import Naudio from '$lib/Naudio.svelte'
</script>

## Command with a fall - Firm, authoritative

The default tone for commands is the definitive **fall**:
<AudioWrapper>
<Audio 
  sentence="*Stand \up when you answer." 
  nuclei="{['up']}" 
  url="2-18" 
  start=3
  end=5
/>
</AudioWrapper>
<Naudio
  sentence="*Stop that \noise! <br> *Tell me the \truth."
  nuclei="{['noise', 'truth']}" 
/>

## Command with a rise - Routine, friendly

In short commands (as with statements) a **rise** is often used to **encourage** the other speaker to continue:

<AudioWrapper>
<Audio 
  sentence="I've got *something to \tell you. <br> - *Go /on" 
  nuclei="{['tell', 'on']}" 
  url="2-18" 
  start=6
  end=9
/>
</AudioWrapper>

## Command with a fall-rise - Urgent, warning

For **warnings** we often use an implicational fall-rise:
<AudioWrapper>
<Audio 
  sentence="*Do be \/careful." 
  nuclei="{['care']}" 
  url="2-18" 
  start=10
  end=13
/>
</AudioWrapper>
<Naudio
  sentence="*Watch \/out! <br> *Wait for \/me!"
  nuclei="{['out', 'me']}" 
/>
The implication here is something like this:
<Naudio
  sentence="*Do as I \/say, | or *something \bad will happen."
  nuclei="{['say', 'bad']}" 
/>
If said with a fall tone, these would indeed be not so much warnings as straight-forward commands:
<Naudio
  sentence="*Wait for \me! <br> *Do be \careful."
  nuclei="{['me', 'care']}" 
/>
Like negative statements, _negative_ commands often have a fall-rise without necessarily implying a warning:

<AudioWrapper>
<Audio
  sentence="*Don't forget the \/salt."
  nuclei="{['salt']}"
  url="2-18"
  start=14
  end=17
/>
</AudioWrapper>
<Naudio
  sentence="*Don't start until you're \/ready."
  nuclei="{['read']}" 
/>

Commands said with the interested rise (with a high prenuclear pattern; see[5.8](/chapter5/5.8)) sound **soothing** and kindly. We use this tone when speaking to children, for example. To adults, it can sound patronizing.
<AudioWrapper>
<Audio 
  sentence="*Don't /worry." 
  nuclei="{['wor']}" 
  url="2-18" 
  start=18
  end=20
/>
</AudioWrapper>
<Naudio
  sentence="*Come to /Daddy. <br> Now *take your /time."
  nuclei="{['Dad', 'time']}" 
/>

## Summary

The differences in these tone meanings can be seen when we compare them on the same sentence:
<Naudio
  sentence="Now *move a\long, please (firm, authoritative) <br>
  Now *move a\/long, please (urgent, warning) <br>
  Now *move a/long, please (routine, friendly)"
  nuclei="{['long']}" 
/>
