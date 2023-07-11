---
title: 'Topic and comment'
---

<script>
  import Audio from '$lib/Audio.svelte'
  import AudioWrapper from '$lib/AudioWrapper.svelte'
  import Naudio from '$lib/Naudio.svelte'
</script>

If an utterance starts with a fall-rise there is a high probability that this is a non-final fall-rise, and that by it the speaker is signalling that he has not yet completed what he is saying:
<Naudio
  sentence="I've *washed my \/face, | and *now I'll clean my \teeth"
  nuclei="{['face', 'teeth']}" 
/>

If you say _face_ with a non-falling tone (a rise or a fall-rise), then the listener expects that there is something more to come: the information is incomplete. Hearing the subsequent fall on _teeth_, the listener concludes that now the information is complete.

The implication meaning of the fall-rise tone (see [2.6](2.6)) can be understood in this light. It can be seen as a special case of the dependent fall-rise, the difference being that the speaker may choose to leave the further material unexpressed. The independent element is implicit rather than explicit.

An alternative tone pattern for the example just considered has a fall not only on _teeth_ but also on _face_. Using this pattern, the speaker presents the information as two separate and potentially complete items:
<Naudio
  sentence="I've *washed my \face, || and *now I'll clean my \teeth."
  nuclei="{['face', 'teeth']}" 
/>
Hearing _face_ with a falling tone , the hearer might suppose at this point that there is no more to come. He'd be wrong.

It is tempting to sum up the meaning of falls, on one hand, as 'complete' or 'final'; and of non-falls, on the other hand, as 'incomplete', or 'non-final'. However this is not necessary so.

A fall does not necessarily mean that we have come to the end of our 'turn' in the conversation, and will now await input from the person we are talking to.

More accurately, perhaps, we might say that the basic meaning of a falling tone is something like 'major information' or 'primary information'. Correspondingly, the shared general meaning of non-falling tones is something like 'incomplete information', 'minor information', 'secondary information'. We use falls and non-falls together to indicate the structuring of our message, showing what is primary (by a fall) and what is secondary (by a non-falling tone).

## Topic and comment

We can often divide an assertion into two parts: a **topic** (a subject or theme) and a **comment** (the thing we say about the subject or topic, a 'rheme'). The topic is typically said with a non-falling tone (a dependent fall-rise or rise), the comment with a falling tone (a definitive fall):
<Naudio
  sentence="My \/brother <em>(topic)</em> | will be *very \angry <em>(comment).</em> <br> In the /morning <em>(topic)</em> | we'll do some \sight&minus;seeing <em>(comment)</em>"
  nuclei="{['broth', 'ang', 'morn', 'sight']}" 
/>
The relationship between non-falling topic and falling comment is preserved if we change the sentence structure so as to reverse the order of the two parts:
<Naudio
  sentence="He'll be *very \angry, | will my \/brother. <br>
  We'll *do some \sight&minus;seeing | in the /morning."
  nuclei="{['ang', 'broth', 'sight', 'mor']}" 
/>

## Dependent rise vs dependent fall-rise

What is the difference in tone meaning between the two dependent tones? One difference is that the fall-rise not only announces the topic but also draws attention to it, while the rise merely announces it. Consider the following example:
<Naudio
  sentence="(i) Your *passport will be ready to\morrow. <br>
  (ii) Your /passport | will be *ready to\morrow. <br>
  (iii) Your \/passport | will be *ready to\morrow."
  nuclei="{['mor', 'pass']}" 
/>
Version (i) is straightforward, and is typical of a rapid, routine style of speech. Version (ii) makes _your passport_ into a separate intonation phrase, and is thus typical of a slower, more deliberate form of delivery. Version (iii) is like (ii), except that it adds emphasis to the topic (your passport) as against the comment (will be ready tomorrow). Version (iii) could also signal a contrast between the topic, _your passport_, and some other possible topic, e.g. _your ticket._

It is also possible to announce a new topic with a fall. News readers often do this at the start of a new item of news:
<Naudio
  sentence="Po'lice in North \Yorkshire | say they are *seeking a /man | in con*nection with..."
  nuclei="{['York', 'man']}" 
/>
