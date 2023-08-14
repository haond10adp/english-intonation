---
title: 'Synonyms'
---

<script>
  import Audio from '$lib/Audio.svelte'
  import AudioWrapper from '$lib/AudioWrapper.svelte'
  import Naudio from '$lib/Naudio.svelte'
</script>

Old information is not necessarily a matter of repeated **words**. We can also repeat old information using **synonyms**, in which we express with different words a concept already mentioned. Such synonyms, too, are usually deaccented:
<Naudio
  sentence="?? Shall we wash the clothes? <br> - Oh I 'hate doing the laundry. <br><br>
  ?? Shall we walk there? <br> - Yes I 'like going on foot."
  nuclei="{['hate', 'like']}" 
/>
To _do the laundry_ has the same meaning as _wash the clothes_. To _go on foot_ is the same as to walk.

Alternatively, the speaker can preserve a degree of accenting on the repeated item or idea, while relegating it to secondary (minor) status by placing it in a separate IP, typically with a rising tone (see [2.24](/chapter2/2.24)). So these examples might alternatively have a fall-plus-rise pattern:
<Naudio
  sentence="?? Shall we wash the clothes? <br> - Oh I \hate | doing the /laundry. <br><br>
  ?? Shall we walk there? <br> - Yes I \like | going on /foot "
  nuclei="{['hate', 'laun', 'like', 'foot']}" 
/>
(See also [3.32](3.32) and [5.12](/chapter5/5.12))

If a word or phrase is a **hyponym** of a word or phrase already mentioned (= has a broader meaning), then it counts as given, and the nucleus goes elsewhere.
We usually do not say:
<Naudio
  sentence="ma'laria | and *other tropical di'seases"
  nuclei="{['la', 'sea']}" 
/>
but rather
<Naudio
  sentence="ma'laria | and 'other tropical diseases"
  nuclei="{['la', 'oth']}" 
/>
This is because the idea of 'tropical disease' was already present in the word _malaria_, just mentioned.
<AudioWrapper>
<Audio 
  sentence="?? D'you *like /whist? <br> - Oh I like \most card games" 
  nuclei="{['whist', 'most']}" 
  url="3-7" 
  start=2
  end=7
/>
</AudioWrapper>
_Card games_ is a hyponym of _whist_.

But if a word or phrase is a **hyponym** of a word or phrase already mentioned (= has a narrower meaning), then it counts as new. In consequence, it is accented and attracts the nucleus:
<AudioWrapper>
<Audio 
  sentence="?? D'you *like /ball games? <br> - Well I'm *quite found of \/football" 
  nuclei="{['ball', 'foot']}" 
  url="3-7" 
  start=7
  end=12
/>
</AudioWrapper>
Here, _football_ is one of various _ball games_. But by mentioning it explicitly the speaker adds new information, making the notion more specific: not basketball or baseball, but football.

New information merits accenting. This principle applies even in many cases where the 'new' information maybe highly predictable:
<Naudio
  sentence="?? What's the time? <br> - It's *five o'clock"
  nuclei="{['clock']}" 
/>
The semantic content of the word o'clock is so small that we could omit it without any loss of meaning (It's <u>'five</u>). Yet if present, _o'clock_ receives the nucleus.
<Naudio
  sentence="?? How long did the concert last? <br> - *Three 'hours. <br><br>
  ?? What's the price? <br> - *Fifty 'dollars"
  nuclei="{['hours', 'dol']}" 
/>
It may be obvious from the context that the concert could not have lasted three _minutes_ or three _days_. It may be clear that the price could not be fifty _cents_ or fifty _euros_. Yet the nucleus still goes on _hours_ and _dollars_ respectively.
<Naudio
  sentence="?? What d'you think of Brenda <br> - She's a *nice 'woman."
  nuclei="{['wom']}" 
/>
This is the normal pattern even if we assume that both speakers already know Brenda, and must therefore be aware that she is a woman. The fact that information is 'given' by the context - by the set of assumptions shared by both speakers in an interaction - does not force us to deaccent a lexical item that is new as such.
<Naudio
  sentence="(<em>on seeing the sun shining</em>) What a *lovely 'day!<br>
  (<em>at the end of a meal</em>) What a de*licious 'meal that was!"
  nuclei="{['day', 'meal']}" 
/>
If the sun is shining, we know that it is day rather than night: so why accent _day_? After you finish eating, you know you've had a meal: so why accent _meal_? Presumably, because the lexical items _day_ and _meal_ respectively have not previously been mentioned: they are not part of the **linguistic** context.
