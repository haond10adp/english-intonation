---
title: 'Vocatives'
---

<script>
  import Audio from '$lib/Audio.svelte'
  import AudioWrapper from '$lib/AudioWrapper.svelte'
  import Naudio from '$lib/Naudio.svelte'
</script>

**Vocatives** - calling the name of the person or persons you are talking to - stand outside the grammatical structure of a sentence. Are they accented or not? This depends partly on where they stand. A vocative at the beginning of an utterance is accented, and normally has its own IP, thus becoming nuclear:

<Naudio
  sentence="\Humphrey! | *Love to \see you again. <br>
  Lu\/cille, | *are you going to be a/vailable?"
  nuclei="{['Hum', 'see', 'cille', 'vail']}" 
/>
We also accent a vocative when we want to indicate who we are talking to, perhaps when there are other people within earshot:

<Naudio
  sentence="*Hi, \Peter! <br>
  \Morning, | Mrs /Robinson!"
  nuclei="{['Pet', 'Mor', 'Rob']}" 
/>
But usually it is already clear who we are talking to. Perhaps we are looking at them, holding eye contact with them. Perhaps there is no one else present. Then a **final vocative** is usually not accented but attached to the preceding IP as (part of) the tail:

<AudioWrapper>
<Audio 
  sentence="*Nice to \see you again, Humphrey." 
  nuclei="{['see']}" 
  url="3-21" 
  start=2
  end=5
/>
<Audio 
  sentence="/Chocolate, anyone?" 
  nuclei="{['Choc']}" 
  url="3-21" 
  start=6
  end=7
/>
</AudioWrapper>

<Naudio
  sentence="*Are you going to be a/vailable, Lucille? <br>
  \Hi, Peter! <br>
  \Morning, Mrs Robinson. <br>
  \Yes, dear. | I'll do it *right a\way, dear. <br>
  *Here's my \essay, Dr Smith."
  nuclei="{['vail', 'Hi', 'Morn', 'Yes', 'es', 'way']}" 
/>
Even if a final vocative appears to include new information directed towards the known addressee, it remains unaccented. (Or it may be uttered as a separate IP in low key; see [5.16](/chapter5/5.16))

<Naudio
  sentence="I 'love you, my little dimpled one. <br>
  You've 'missed it, you fool. <br>
  'Stop, you blithering idiot!"
  nuclei="{['love', 'missed', 'Stop']}" 
/>
