---
title: 'Adverbs of time and place'
---

<script>
  import Audio from '$lib/Audio.svelte'
  import AudioWrapper from '$lib/AudioWrapper.svelte'
  import Naudio from '$lib/Naudio.svelte'
</script>

Although adverbs in general are usually accented, adverbs and adverbial phrases of **time** and **place** are often not accented (= unfocused) when at the end of an IP, even if they contain new information. They therefore form part of the tail:

<AudioWrapper>
<Audio 
  sentence="I had an *unexpected 'letter yesterday." 
  nuclei="{['let']}" 
  url="3-23" 
  start=3
  end=6
/>
<Audio 
  sentence="*Did you see Big 'Brother on television last night?" 
  nuclei="{['Broth']}" 
  url="3-23" 
  start=8
  end=12
/>
</AudioWrapper>

<Naudio
  sentence="She's *coming to 'dinner tomorrow. <br>
  The *trade balance was in the 'red last month. <br>
  Does a *Mr 'Pomfrey live here? <br>
  He's *got a tat'too on his arm. <br>
  There's a 'fly in my soup"
  nuclei="{['din', 'red', 'Pom', 'too', 'fly']}" 
/>

This does not apply in sentences where the sense of the verb would be incomplete without the final adverbial. Such adverbials are typically in focus, and therefore bear the nucleus.

<Naudio
  sentence="*Put it on the 'table. <br>
  *Write the details in the 'book."
  nuclei="{['ta', 'book']}" 
/>

Alternatively, in statements, final adverbs and adverbials of time and place may bear the nucleus in a separate IP, typically making the preceding IP a fall-plus-rise pattern (see [2.24](/chapter2/2.24))

<AudioWrapper>
<Audio 
  sentence="I had an *unexpected \letter | /yesterday." 
  nuclei="{['let', 'yest']}" 
  url="3-23" 
  start=13
  end=17 
/>
</AudioWrapper>

<Naudio
  sentence="She's coming to \dinner | to/morrow. <br>
  The 'trade balance was in \red | /last month. <br>
  I 'went to \London | on /Sunday."
  nuclei="{['din', 'mor', 'red', 'last', 'Lon', 'Sun']}" 
/>

Naturally, there are also many cases in which final adverbs and adverbial phrases of time and place are important to the message, and therefore brought into focus and receive a nuclear accent:

<Naudio
  sentence="He's got a ta*too on his 'arm (| *not his 'leg). <br>
  *O/K, | *that's a\/greed: | we'll *come round to\morrow. "
  nuclei="{['arm', 'leg', 'K', 'greed', 'mor']}" 
/>
