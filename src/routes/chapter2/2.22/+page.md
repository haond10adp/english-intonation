---
title: 'Open and closed lists'
---

<script>
  import Audio from '$lib/Audio.svelte'
  import AudioWrapper from '$lib/AudioWrapper.svelte'
  import Naudio from '$lib/Naudio.svelte'
</script>

As we have seen, a leading non-fall at the beginning of an utterance leaves us waiting for the fall that will complete the pattern. It thus indicates that the sentence is **incomplete**. It signals **non-finality**. Put it another way, a non-fall leaves matters **open**.

A fall, on the other hand, indicates that the sentence is potentially complete. It tends to signal finality. It suggests that matters are **closed**.

We see the distinction between the **closed fall** (= definitive fall) and the **open non-fall** (= non-final fall-rise or rise) most clearly in the intonation **lists**:
<AudioWrapper>
<Audio 
  sentence="(i) You can have /coffee | or \tea. <br>"
  nuclei="{['cof', 'tea']}" 
  url="2-22" 
  start=3
  end=5
/>
<Audio 
  sentence="(ii) You can have /coffee | or /tea." 
  nuclei="{['cof', 'tea']}" 
  url="2-22" 
  start=6
  end=9
/>
</AudioWrapper>
The fall on _tea_ in (i) signals that there are no more options: you must choose either coffee or tea. The rise on _tea_ in (ii) signals that there maybe other possibilities too, as yet unmentioned, e.g. _or you could have an \orange juice._
<Naudio
  sentence="(iii) /Chicken | or \beef? <br> 
  (iv) /Chicken | or /beef?"
  nuclei="{['Chick', 'beef']}" 
/>
In (iii) the addressee (the passenger on an airline, perhaps) is being invited to choose between two possibilities, chicken or beef. In (iv) she is being invited to choose one of those two, or - if she prefers - some other options.
<Naudio
  sentence="(v) /One, | /two, | /three, | /four, | \five. <br>
  (vi) We've been to /Manchester, | Edinburgh | and \London."
  nuclei="{['One', 'two', 'three', 'four', 'five', 'Man', 'Ed', 'Lon']}" 
/>
Example (v) demonstrates how you might count a small child's fingers for her. The rises in the first four intonation phrases leave the list open. The fall on the fifth closes it. In (vi) the non-falls (which might be rises or fall-rises) on _Manchester_ and _Edinburgh_ indicate that there is more to come. The fall on _London_ indicates that we have come to the end.

Although the intonation patterns in these examples are valid, they are not the only way of treating lists. First, we do not have to give each item its own IP:
openness of a list can be signalled simply by not yet having reached the nucleus, i.e . by giving the non-final items head accents rather than nuclear accents:
<Naudio
  sentence="You can have *coffee or \tea. <br>
  You can have *coffee or /tea <br>
  *Chicken or \beef? <br>
  *Chicken or /beef? <br>
  *One, *two, *three, *four, \five. <br>
  We've been to *Manchester, *Edinburgh and \London."
  nuclei="{['tea', 'beef', 'five', 'Lon']}" 
/>
Secondly, the list as a whole may require a non-falling tone, in which case it may be impossible for the hearer to know whether the speaker intended the list to be left open or not:
<Naudio
  sentence="Well you can have *coffee or \/tea, | and then we've some *rather special \sandwiches to offer you."
  nuclei="{['tea', 'sand']}" 
/>
Here the dependent fall-rise on _tea_ (signalling that the utterance, rather than the list, is not yet complete) leaves us uncertain whether there are other possibilities.

**Alternative questions** are sets on two or more yes-no questions linked by _or_. They are treated as lists. A closed list ends in a definitive fall, and in principle an open list (if nuclear) ends in a dependent rise. However, the speaker has some discretion to ignore this rule.
<AudioWrapper>
<Audio 
  sentence="Would you *like your coffee /now, | or at the \end of the meal?" 
  nuclei="{['now', 'end']}" 
  url="2-22" 
  start=10
  end=13
/>
</AudioWrapper>
<Naudio
  sentence="Is *Mary /ready, | or does she *need some more \time? <br>
  Is that a /gun in your pocket? | Or are you *just pleased to \see me? <br>
  Is it a /bird? Is it a /plane? (|| \No, | it's \Superman!) <br>
  Am I asking /fifty dollars? Or /forty dollars? || \No, it's *yours for \twenty!"
  nuclei="{['rea', 'time', 'gun', 'see', 'bird', 'plane', 'No', 'Sup', 'fif', 'for', 'No', 'twen']}" 
/>
