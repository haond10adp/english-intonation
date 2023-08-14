---
title: 'On or near the last word'
---

<script>
  import Audio from '$lib/Audio.svelte'
  import AudioWrapper from '$lib/AudioWrapper.svelte'
  import Naudio from '$lib/Naudio.svelte'
</script>

The nucleus is usually located on or near the last word of the intonation phrase. By definition, the nuclear accent is the last accent in the IP. So clearly the general tendency is for the nucleus to be **towards the end** of the IP. Provided that the last word in an IP is important for the meaning, it will be accented and thus bear the nucleus:
<Naudio
  sentence="I *want to buy a 'lemon. <br>
  The *bridge is about to col'lapse. <br>
  She's *just started a new re'lationship <br>
  *Could you tell me the 'time?"
  nuclei="{['lem', 'lapse', 'la', 'time']}" 
/>
It is only if the words towards the end of the IP are for some reason not accented that the nucleus will go on an earlier word.

Initials, names of letters and numerals are treated like separate words. In a string of several letters or numerals, the nucleus generally goes on the last one:
<Naudio
  sentence="In the e'xam | she got a 'C <br>
  My *room number is 50'6. (= five oh 'six) <br>
  *Switch over to IT'V. (= eye tee 'vee)"
  nuclei="{['xam', 'C', '6', 'six', 'V', 'vee']}" 
/>
