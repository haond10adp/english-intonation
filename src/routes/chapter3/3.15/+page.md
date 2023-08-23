---
title: 'Dynamic focus'
---

<script>
  import Audio from '$lib/Audio.svelte'
  import AudioWrapper from '$lib/AudioWrapper.svelte'
  import Naudio from '$lib/Naudio.svelte'
</script>

Focus is not static but dynamic. As the conversation progresses, speakers constantly update what they are focusing on.
Consider a simple example. The family are sitting in a room at the back of the house when the doorbell rings. Dad says to his son:
<Naudio
  sentence="'Vernon, | there's *someone at the 'door. | 'Answer it, would you?"
  nuclei="{['Ver', 'door', 'An']}" 
/>
The boy does so and come back to report:
<Naudio
  sentence="There's 'man at the door. He's *collecting for 'charity"
  nuclei="{['man', 'char']}" 
/>
In the father's utterance, _door_ was new information, and therefore placed in focus. In the son's reply, it is given, and so no longer in focus.

By **varying the tonicity** (= changing the accent pattern, altering the focus, putting the nucleus in different places) we make a particular IP pragmatically appropriate for particular circumstances in which it is used. The most obvious reason for doing this is to express different kinds of contrastive focus.

Consider the utterance _she was trying to lose weight_. With broad focus, and therefore neutral tonicity, it would be said as:
<Naudio
  sentence="She was *trying to lose 'weight"
  nuclei="{['weight']}" 
/>
This might in broad-focus answer to:
<Naudio
  sentence="?? Why didn't she want an ice cream? <br> - She was *trying to lose 'weight."
  nuclei="{['weight']}" 
/>
But we would have the same tonicity in a narrow-focus answer to:
<Naudio
  sentence="?? What was she trying to lose? <br> - She was *trying to lose 'weight."
  nuclei="{['weight']}" 
/>
... or in contrastive-focus follow-on to:
<Naudio
  sentence="She *wasn't trying to loose 'money, | she was *trying to lose 'weight"
  nuclei="{['mon', 'weight']}" 
/>
What about focusing on some other element in the utterance? If we put contrastive focus on _lose_, we imply a contrast between _lose_ and some other item:
<Naudio
  sentence="She *wasn't trying to 'gain weight, | she was trying to 'lose weight"
  nuclei="{['gain', 'lose']}" 
/>
With contrastive focus on _trying_:
<Naudio
  sentence="She was 'trying to lose weight | thought she 'didn't have much suc'cess"
  nuclei="{['try', 'cess']}" 
/>
With contrastive focus on _was_ the contrast must either one of tense one of polarity
<Naudio
  sentence="She 'was trying to lose weight, | but she *isn't 'now <br>
  She 'was trying to lose weight, | de*spite your claim that she 'wasn't"
  nuclei="{['was', 'now']}" 
/>
Contrastive on _she_ implies a contrast with some other possible subject:
<Naudio
  sentence="'She was trying to lose weight, though her 'friends may not have been"
  nuclei="{['She', 'friends']}" 
/>
In lively conversation speakers constantly deploy contrastive focus, shifting the place of nucleus around appropriately. Always keeping the nucleus on the last new lexical item can sound very dull.
