---
title: 'Fall plus rise'
---

<script>
  import Audio from '$lib/Audio.svelte'
  import AudioWrapper from '$lib/AudioWrapper.svelte'
  import Naudio from '$lib/Naudio.svelte'
</script>

We have seen the use of fall-plus-rise pattern for independent clause plus dependent clause ([2.20](2.20)), and for topic plus comment ([2.21](2.21)) or main clause plus adverbial (2.23). This pattern is also a very characteristic way for a speaker to emphasize something early in the utterance while still keeping a nuclear accent in its expected place on the last lexical item that adds new information. Thus alongside the patterns:
<Naudio
  sentence="I *hope you'll be able to \come. <br>
  *Please shut the \window."
  nuclei="{['come', 'win']}" 
/>
we can alternatively say:
<Naudio
  sentence="I \hope | you'll be able to /come. <br>
  \Please | shut the /window."
  nuclei="{['hope', 'come', 'Please', 'win']}" 
/>
In this way we can place emphasis on _hope_ and _please_ respectively, while respecting the fact that they are not the last lexical item in the sentence.

## A

The fall-plus-rise pattern is particularly common where the first nucleus goes on a word referring to a mental state, or on an intensifying word:
<AudioWrapper>
<Audio 
  sentence="I'm \glad | you found it /interesting." 
  nuclei="{['glad', 'in']}" 
  url="2-24" 
  start=3
  end=6
/>
<Audio 
  sentence="I \do wish | you wouldn't com/plain so much." 
  nuclei="{['do', 'plain']}" 
  url="2-24" 
  start=7
  end=10
/>
</AudioWrapper>
<Naudio
  sentence="You've been ex\tremely | /patient with us <br>
  I'm a\ware | of your o/pinion, | /thank you. (= Keep quiet!)"
  nuclei="{['treme', 'pa', 'ware', 'pin', 'thank']}" 
/>

## B

It is also found in cases where the second nucleus falls on information that is new though fairly predictable:
<Naudio
sentence="?? *How can we \get there? <br><br> - Maureen's | got a /car. <br> - Walking's | the /easiest way. <br> - The \tube | would be /quickest."
  nuclei="{['Mau', 'car', 'Walk', 'eas', 'tube', 'quick', 'get']}"
/>
The part with the fall contains the most important idea, while the part with the rise contains an idea of secondary importance. It differs form the usual topic-comment pattern of non-fall plus fall in that greater emphasis falls on the first part. Compare alternative formulations:
<Naudio
  sentence="?? *How can we \get there? <br><br> - If you *want a \/car, | \Maureen's got one. <br> - The \/easiest way | would be to \walk. <br> - The \/quickest route | would be the \tube."
  nuclei="{['get', 'car', 'Mau', 'ea', 'walk', 'quick', 'tube']}" 
/>

## C

There is also a spoken construction involving the displacement of the subject to the end of a statement. Here, too, we usually find a fall-plus-rise tone pattern. The main fall tone stays in its normal place on what would have been the last lexical item (etc.). The displace subject, in a separate IP, has a dependent rise (or less commonly fall-rise):
<Naudio
sentence="- *Brenda's \brilliant. <br> => She's \brilliant, | /Brenda. <br><br> - This *weather's disap\pointing. <br> => *Disap\pointing, | this /weather. <br><br> - *That one'll let you \down again. <br> => He'll *let you \down again, | will /that one."
  nuclei="{['bril', 'Brend', 'point', 'weather', 'down', 'that']}"
  />
This construction is not usual in written English. In regionally flavored British English the syntax may be subtly different, with copying of the verb. But the tone pattern is the same.
<Naudio
  sentence="She's \brilliant, | /Brenda. <em>(standard)</em> <br> She's \brilliant, | is /Brenda. <em>(regional)</em> <br> She's \brilliant, | /Brenda is. <em>(regional)</em>"
  nuclei="{['bril', 'Bren']}" 
/>

## D

The presence of the intonation boundary functions as an indication of this grammatical construction, as shown in a minimal pair (example from Cruttenden, 1997: 70)
<Naudio
  sentence="(i) *Very fattening, | /biscuits, | \aren't they? (= Biscuits are fattening.) <br>
  (ii) *Very fattening biscuits, | \aren't they (= These are fattening biscuits.)"
  nuclei="{['fat', 'bis', 'aren\'t']}" 
/>

## E

The final rise distinguishes the displaced subject from a vocative.
<Naudio
  sentence="(i) She's \brilliant, | /Brenda. (= Brenda is brilliant.) <br>
  (ii) She's \brilliant, Brenda. (talking to Brenda; someone else is brilliant)"
  nuclei="{['bril', 'Bren']}" 
/>

## F

**Commands** said with a fall-plus-rise pattern are pleading requests, rather than orders that are expected to be obeyed:
<Naudio
  sentence="\Do | keep it /short (<em>pleading</em>) <br>
  *Do keep it \short. (<em>authoritative</em>)"
  nuclei="{['Do', 'short']}" 
/>

## G

How do we distinguish this two-nucleus fall-plus-rise pattern from the single-nucleus fall-rise tone? After all, both involve a pitch pattern of a falling movement followed by a rising movement. Sometimes, in fact, they may sound almost identical, or indeed completely identical (example from O'Connor & Arnold, 1973: 83):
<Naudio
  sentence="(i) I \/like chocolate. <br> (ii) I \like | /chocolate"
  nuclei="{['like', 'choc']}" 
/>
The important point is that these two patterns have different tone meanings: they convey different speaker attitudes. Version (i) is an implicational fall-rise. It implies some kind of reservation (_but..._). It might be found in a context such as
<AudioWrapper>
<Audio 
  sentence="(i) I've *got some \chocolate here. <br> - Oh \dear. || I \/like chocolate, | but I'm on a \diet." 
  nuclei="{['choc', 'like', 'diet', 'dear']}" 
  url="2-24" 
  start=11
  end=18
/>
</AudioWrapper>
Version (ii), on the other hand, implies no such reservations. It is a straightforward proclaiming definitive fall for the major focus, followed by a dependent rise for the minor focus:
<AudioWrapper>
<Audio 
  sentence="(ii) I've *got some \chocolate here. <br> - Oh \good. || I \like | /chocolate. || *Pass it \over. " 
  nuclei="{['choc', 'good', 'like', 'o']}" 
  url="2-24" 
  start=21
  end=28
/>
</AudioWrapper>
Another example, also adapted from O'Cornnor & Arnold (1973: 84), is this:
<AudioWrapper>
<Audio 
  sentence="(i) I be*lieve you're from \Sheffield. <br> - No | my \/mother's from Sheffield; || *I'm from \Leeds." 
  nuclei="{['Shef', 'No', 'moth', 'Leeds']}" 
  url="2-24" 
  start=28
  end=34
/>
<Audio
sentence="(ii) I'm \*going to \Sheffield. <br> - /Really? || My \mother's | from /Sheffield. "
nuclei="{['Shef', 'Real', 'moth']}"
url="2-24"
start=34
end=41
/>
</AudioWrapper>
Again, we see the implicational fall-rise in (i) but the definitive fall-plus-dependent rise in (ii).

## G

Support for this distinction also comes from changing the wording while keeping the tone meanings the same. Versions (i) keep a fall-rise if we do this:
<Naudio
  sentence="?? *What about \chocolate? <br> - Well I \/like it, | but I'm on a \diet. <br><br>
  ?? I be*lieve you're from \Sheffield. <br> - \/No || that's true of my \/mother, | but \/I'm | from \Leeds."
  nuclei="{['choc', 'like', 'diet', 'Shef', 'No', 'moth', 'I\'m', 'Leeds']}" 
/>
The phrase _I like it_ must occupy a single intonation phrase, because there is clearly no reason to highlight the pronoun _it_ (as would necessarily be the case if we had here a fall plus a rise). Versions (ii), on the other hand, keep a fall under rewording.
<Naudio
  sentence="?? I've *got some \chocolate here. <br> - Oh \good. || I \love it. <br><br>
  ?? I'm going to *Sheffield. <br> - /Really? || *That's where my \mother's from."
  nuclei="{['choc', 'good', 'love', 'Shef', 'Real', 'moth']}" 
/>
There is also intonational grounds for distinguishing between the fall-rise tone and a fall tone followed by a rise. As discussed in [5.2](/chapter5/5.2), the unmarked head tone before a fall-rise nucleus is falling, but before a fall nucleus it is a high level. This test, too, supports our analysis.
<Naudio
  sentence="(i) I've *got some \chocolate here. <br> - Oh \dear. || I \`do \/like chocolate, | but I'm on a \diet. <br><br>
  (ii) I've *got some \chocolate here. <br> - Oh \good. || I *really \like | /chocolate. || *Pass it \over."
  nuclei="{['choc', 'like', 'diet', 'good', 'over']}" 
/>

However... givin that there may sometimes be no perceptible phonetic difference between a fall-rise and a fall followed b a rise, examiners should not penalize confusion of the two.
