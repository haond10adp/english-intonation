---
title: 'Heavy noun phrases'
---

<script>
  import Audio from '$lib/Audio.svelte'
  import AudioWrapper from '$lib/AudioWrapper.svelte'
  import Naudio from '$lib/Naudio.svelte'
</script>

A noun phrase (NP) is particularly likely to have its own IP if it is _heavy_ (= long, consisting of several words). Since the grammatical subject of a sentence is often just an NP, there is often an intonation break between the subject and the rest of the clause or sentence:

<Naudio
  sentence="The *head of a large 'school | has a *lot of responsi'bility. <br>
  The *people I've been 'talking to | were *quite 'definite about it. <br>
  *London and the south'east | will have 'showers. || The 'rest of the country | will be 'dry."
  nuclei="{['school', 'bil', 'talk', 'def', 'east', 'show', 'rest', 'dry']}" 
/>
The speaker has considerable discretion about this. A separate IP for the subject of a clause is more frequently found in reading aloud and in formal speeches to an audience than in everyday conversation (Cruttenden , 1997:70).

The grammatical subject is particularly likely to have its own IP if it is different from the subject of the preceding sentence or clause, i.e. if there is a change of subject:

<Naudio
  sentence="I thought the *food was \excellent. || And *salmon \/quiche | is *something I a\dore"
  nuclei="{['ex', 'quiche', 'dore']}" 
/>
Making the subject NP into a separate IP has the advantage of allowing the speaker to place contrastive focus on it by locating the nucleus there. Even every light (= short) NPs can be made into separate IP to allow this:

<Naudio
  sentence="The \/children | say they don't \like her. || But \/I | think she's \wonderful. <br>
  *Cats and \/dogs | can make \wonderful companions."
  nuclei="{['child', 'like', 'won', 'dogs']}" 
/>
Objects, too, are followed by an intonation break if they are heavy:

<Naudio
  sentence="I *gave the 'book you asked about | to the *girl at the 'checkout."
  nuclei="{['book', 'check']}" 
/>
