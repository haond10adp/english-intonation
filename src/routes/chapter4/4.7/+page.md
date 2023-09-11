---
title: 'Topics'
---

<script>
  import Audio from '$lib/Audio.svelte'
  import AudioWrapper from '$lib/AudioWrapper.svelte'
  import Naudio from '$lib/Naudio.svelte'
</script>

The first element in a clause is typically the **topic** (or 'theme'), while the remainder is the **comment** (or 'rheme'). This first element is most often the grammatical subject. We can signal its status as topic (i) in various syntactic ways, (ii) by choosing an appropriate tone (see [2.21](/chapter2/2.21)) and (iii) by giving it a separate IP:

<Naudio
  sentence="*As for \/Jeremy, | he *can do what he \likes. <br>
  \/Martha | will *have to \wait."
  nuclei="{['Je', 'likes', 'Mar', 'wait']}" 
/>

We can topicalize other clause elements. A topicalized object or complement is usually followed by an intonation break.

<Naudio
  sentence="His \/rudeness | I shall ig\nore. || But his \/actions | I *cannot for\give. <br>
  *Rather good \meals | they serve at the /Carvery. <br>
  I *love the \/singing, | but the \/acting | I thought it was a\trocious. <br>
  On the *question of /guilt, | we must sus*pend \judgement. <br>
  *More im\/portant | is the *question of what we do \next."
  nuclei="{['rude', 'nore', 'ac', 'give', 'meals', 'Car', 'sing', 'act', 'tro', 'guilt', 'judge', 'por', 'next']}" 
/>

In **cleft sentences** one constituent of the sentence is fronted and introduced by it is (or _it was_, etc.). This topicalized constituent must include focused material and therefore an intonation nucleus. If there is further focussed material to follow, then there must be an intonation break.

Any of the following could be answer to _Who did you choose?_:

<Naudio
  sentence="(i) I chose Ve'ronica. (<em>not cleft</em>) <br>
  (ii) It was Ve'ronica that I chose. (<em>cleft</em>) <br>
  (iii) It was Ve'ronica | that 'I chose. (<em>cleft with focus on I</em>) "
  nuclei="{['ron', 'I']}" 
/>
Version (iii) would be appropriate if the speaker was making a contrast between his own choice and someone else's choice.

**Pseudo-cleft** sentences involve _what_. There is usually an intonation break between the two halves of the construction:

<Naudio
  sentence="*What they 'didn't like | was the 'noise. <br>
  *What I'm 'looking for | is a 'saucepan. <br>
  *Getting 'caught | is e*xactly what I am trying to a'void"
  nuclei="{['didn\'t', 'noise', 'look', 'sauce', 'caught', 'void']}" 
/>

<AudioWrapper>
<Audio 
  sentence="?? I sup*pose you'll criticize his \callousness?
  <br> - No his \/callousness | is *what I shall ig\nore. (<em>with refocussing on</em> callousness)" 
  nuclei="{['cal', 'nore']}" 
  url="4-7" 
  start=2
  end=10
/>
<Audio 
  sentence="?? I sup'pose you'll ig\nore | his /slowness?
  <br> - No his \/callousness | is *what I shall ig\/nore. (<em>with refocussing on</em> ignore)" 
  nuclei="{['nore', 'slow', 'cal']}" 
  url="4-7" 
  start=12
  end=19
/>
</AudioWrapper>
