---
title: 'Generalized meanings of different tones'
---

<script>
  import Audio from '$lib/Audio.svelte'
  import AudioWrapper from '$lib/AudioWrapper.svelte'
  import Naudio from '$lib/Naudio.svelte'
</script>

How can we generalize about the various tone meanings we have recorded so far? Two authors, Brazil (1985, 1994) and Gussenhove (1984, 2004) have each made proposals in this area. This section is about their ideas.

One useful generalization about the function of a fall tone is to say that it **proclaims** something, while function of a fall-rise is that it refers to something. These terms an this approach were devised by the late David Brazil, who indeed calls the fall the **proclaiming** tone and the fall-rise the **referring** tone (example from Brazil, 1997: 68).
<Naudio
  sentence="(i) *Mary \/Brown's | a \teacher <br>
  (ii) *Mary \Brown's | a \/teacher."
  nuclei="{['Brown\'s', 'teach']}" 
/>
Pattern (i) is appropriate in a discourse in which we have already mentioned Mary Brown, perhaps along with various other people. Its meaning could be paraphrased as 'as for Mary Brown, she's a teacher'. Thus we **refer** to a topic already mentioned (_Mary Brown_), by using a fall-rise, and **proclaim** a new fact about this topic (that _she's a teacher_), by using a fall.

Pattern (ii), on the other hand, is appropriate in a discourse in which we are already discussing teachers. Its meaning could be paraphrased as "talking of teachers, Mary Brown's one". Thus we refer to the topic (teachers) by using a fall-rise, and proclaim the new fact about it (that Mary Brown's one) by using a fall. In this pattern (ii), the proclaiming (comment) precedes the referring (topic, theme), which is not the usual order of things: but it is a consequence of the rigidity of English word order (subject, be, complement), and clearly signalled by the choice of tones.

Referring in this way to a topic previously mentioned involves refocusing on it (see [3.32](/chapter3/3.32)). If the topic of the discourse was already very explicit, we might alternatively choose not to refocus on it, and perhaps indeed not even to accent it. So instead of (i) it would also be possible to say:
<Naudio
  sentence="(i') *Mary Brown's a \teacher."
  nuclei="{['teach']}" 
/>
and instead of (ii):
<Naudio
  sentence="(ii') *Mary \Brown's a teacher."
  nuclei="{['Brown\'s']}" 
/>
or indeed, to use the fall-plus-rise pattern discussed in 2.24:
<Naudio
  sentence="(iii' *Mary \Brown's | a /teacher.)"
  nuclei="{['Brown\'s', 'teach']}" 
/>
To revert to our example:
<Naudio
  sentence="(i) *Mary \/Brown's | a \teacher <br>
  (ii) *Mary \Brown's | a \/teacher."
  nuclei="{['Brown\'s', 'teach']}" 
/>

We can use a diagram to represent the knowledge of two participants in any conversational exchange - the world view of the speaker and hearer respectively.
These two world views are different, but they overlap (the common ground being the represented in the diagram as the shaded area):

![diagram](/diagram.png)

What the referring fall-rise does is to focus on some item that is already in the common ground. The proclaiming fall tone that accompanies it (whether it precedes or follows) then asserts (proclaims) something about this item, so that it too then becomes part of the common ground.

A speaker, by using the referring fall-rise, thus also makes an assumption about the hearer, namely that the topic referred to is indeed already part of the common ground between speaker and hearer.

The common ground shared between speaker and hearer is dynamic: it will tend to increase as the conversation progresses. It is referred to by Gussenhoven (1984, 2004) as the **background**. What the choice of tone does, according to Gussenhoven, is to indicate the relationship of the information contained in the intonation phrase too the conversational background.

The information in the current IP is, in Gussenhoven's terminology, the **variable** (abbreviated as V). There are three basic **manipulations** of the variable with respect to the background, each signalled by the choice of tone:

- **V-addtion**, signaled by a fall, whereby the speaker declares that the variable is now to be treated as part of the background;
- **V-selection**, signalled by a **fall-rise**, whereby the speaker reminds the hearer that the variable is already part of the background;
- **V-relevance testing**, signalled by a **rise**, whereby the speaker leaves it to the hearer to decide whether the variable is relevant to the back-ground.

Consider these examples:
<Naudio
  sentence="When I've *finished these \/letters | | I'll *make those \phone calls."
  nuclei="{['let', 'phone']}" 
/>
The first IP has a fall-rise (in our terms, a leading dependent fall-rise). For Gussenhoven, this is therefore an instance of V-selection. As the speaker says _When I've finished these letters_, by choosing a fall-rise tone he is seen as expressing a meaning such as 'you know I've got to finish these letters, don't you, because you know I have to send them off today'. When he says _I'll make those phone calls_, by choosing a fall tone he is expressing the meaning 'here is something new that you should take notice of'.
<Naudio
  sentence="(ii) I'll *make those \/phone calls | when I've finises these \letters"
  nuclei="{['phone', 'let']}" 
/>
In (ii) the thing that the speaker assumes to be already agreed or presumed in his making the phone calls. What he wants the other person to take notice of is that this will take place after his writing the letters.
<Naudio
  sentence="(iii) Are you *going to fetch the /kids?"
  nuclei="{['kids']}" 
/>
In (iii), with its rise tone, signalling relevance testing, the speaker communicates something such as 'as for your fetching the kids, is this something we should agree on as being part of the background of our conversational interaction from now on?'
