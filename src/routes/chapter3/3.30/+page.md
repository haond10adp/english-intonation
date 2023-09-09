---
title: 'Events'
---

<script>
  import Audio from '$lib/Audio.svelte'
  import AudioWrapper from '$lib/AudioWrapper.svelte'
  import Naudio from '$lib/Naudio.svelte'
</script>

We see the same preference for placing a nuclear accent on a noun rather than a verb in so-called **event sentences**. These are sentences describing an event, where the verb is intransitive. The nucleus tends to be located on the subject, provided it is lexically filled, even if the verb contains apparently new information:

<AudioWrapper>
<Audio 
  sentence="The 'phone's ringing." 
  nuclei="{['phone\'s']}" 
  url="3-30" 
  start=2
  end=4
/>
<Audio 
  sentence="The 'car won't start." 
  nuclei="{['car']}" 
  url="3-30" 
  start=4
  end=6
/>
</AudioWrapper>

<Naudio
  sentence="The 'handle's fallen off. <br>
  There's a 'train coming. <br>
  The 'breaks have failed."
  nuclei="{['hand', 'train', 'breaks']}" 
/>
Compare the corresponding sentences with a non-lexical (pronoun) subject:

<Naudio
  sentence="It's 'ringing. <br>
  It *won't 'start. <br>
  It's *fallen 'off. <br>
  There's *one just 'coming. <br>
  They've 'failed"
  nuclei="{['ring', 'start', 'off', 'com', 'failed']}" 
/>
Some event sentences involve an adjective as well as a verb, and we again see the noun receiving the nuclear accent, rather than the verb or the adjective:

<Naudio
  sentence="You 'zip's come undone. <br>
  The 'door's open."
  nuclei="{['zip\'s', 'door']}" 
/>
Compare the equivalent sentences with a pronominal subject:
<Naudio
  sentence="It's *come un'done. <br>
  It's 'open."
  nuclei="{['done', 'o']}" 
/>
Description of weather count as sentences of this type:

<Naudio
  sentence="It's a *funny 'day: | the 'sun is shining, | but there's a 'wind springing up"
  nuclei="{['day', 'sun', 'wind']}" 
/>
So do statements relating to unpleasant bodily sensation:

<Naudio
  sentence="My 'arm's hurting. <br>
  My 'nose is all red."
  nuclei="{['arm\'s', 'nose']}" 
/>
Less easy to categorize is:

<Naudio
  sentence="We've got some 'bed linen for sale."
  nuclei="{['bed']}" 
/>
which nevertheless corresponds to:

<Naudio
  sentence="We're *selling some 'bed linen."
  nuclei="{['bed']}" 
/>

The tonicity of event sentences is paradoxically in that they can apparently involve very broad focus, being uttered for example as a response to _What happened?_ or _What's the matter?_ Yet their nucleus is not located on the last lexical item adding (apparently) new information. One possible explanation is that the verb (or adjective) in an event sentence is predictable from the context, so does not need to be in focus. In case of _The phone's ringing_, we know what telephones typically do is ring. Compare a possible sentence:

<Naudio
  sentence="The *phone's ex\ploded!"
  nuclei="{['ploded']}" 
/>
where the verb _exploded_ is truely not 'given' and thus demands the nucleus.

In written English, there is an ambiguity in sentences such as _Dogs must be carried_ (a public notice in the London Underground). The intended reading, 'if you have a dog with you, you must carry it', has the focus on _carried_ and would be spoken as:

<Naudio
  sentence="*Dogs must be 'carried."
  nuclei="{['car']}" 
/>
The other possible reading, 'everyone must carry a dog', has the focus on dogs and would be spoken as:

<Naudio
  sentence="'Dogs must be carried."
  nuclei="{['Dogs']}" 
/>
