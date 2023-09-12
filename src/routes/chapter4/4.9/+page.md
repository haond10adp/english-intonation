---
title: 'Parallel structures'
---

<script>
  import Audio from '$lib/Audio.svelte'
  import AudioWrapper from '$lib/AudioWrapper.svelte'
  import Naudio from '$lib/Naudio.svelte'
</script>

As we saw in [2.22](/chapter2/2.22), the items in a **list** are sometimes separated by intonation breaks, sometimes not. This applies more generally to parallel grammatical structures, including (i) parallel words or phrases, whether or not coordinated, and (ii) strings of letters or numbers.

With parallel words or phrases, there is likely to be an intonation break after each component if there are more than two components or if the components are heavy:

<Naudio
  sentence="I *come in 'Mondays, | 'Wednesdays, | and 'Friday. <br>
  I want to buy some 'fruit, | some 'milk | and some 'bread. <br>
  I can *see a sort of 'tree, | and the *outline of a 'person. <br>
  You could do it on *Tuesday after'noon | or on *Wednesday 'morning."
  nuclei="{['Mon', 'Wed', 'Fri', 'fruit', 'fruit', 'milk', 'bread', 'tree', 'per', 'noon', 'mor']}" 
/>

If the parallel words or phrases are placed in contrast by the speaker, then they too are likely to be separated by an intonation break:

<Naudio
  sentence="I'm not going to repeat the mistake I mad \/last time | \this time."
  nuclei="{['last', 'this']}" 
/>

The speaker has discretion to omit the intonation breaks, for example when speaking fast:

<Naudio
  sentence="?? *When do you come 'in? <br> - *Mondays, *Wednesdays, and 'Fridays."
  nuclei="{['Fri']}" 
/>

Some coordinate structure are potentially ambiguous, and can optionally be disambiguated by the insertion of intonation break. For example the phrase _old men and women_ may be analyzed either as _(old)(men and woman)_, or alternatively as _(old men) and (women)_. The issue is whether _old_ applies to both nouns, or just the one that immediately follows it. The phrase would usually be said without an internal intonation break, in which case it remains ambiguous. If, however, it is said as _old | men and women_, the hearer is forced towards the first interpretation. If it is said as _old men | and women_, the hearer is forced towards the second.

With a string of letters or numbers there are equally two possibilities. If we think they will be familiar to the hearer, or if there is no need to be particularly explicit, we run them together in the same IP. If we think they may be unfamiliar to the hearer or need to be made especially clear, we can make the message easier to the hearer to process by placing an intonation break after each item:

<Naudio
  sentence="?? *How do you spell /seize?
  <br> - *S, E, I, Z, \E.
  <br> ?? /What was that again?
  <br> - /S, | /E, | /I, | /Z, | \E."
  nuclei="{['seize', 'What', 'S', 'E', 'I', 'Z', 'E']}" 
/>

Longer strings typically get broken up into manageable chunks:

<Naudio
  sentence="My \/phone number | is *oh two /oh | *seven six seven /nine | *seven one seven \five. <br>
  \/Your reference | *A L /W | * 2 0 0 /4 | * 3 9 6 \J."
  nuclei="{['phone', 'oh', 'nine', 'five', 'Your', 'W', '4', 'J']}" 
/>
