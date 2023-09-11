---
title: 'Vocatives and imprecations'
---

<script>
  import Audio from '$lib/Audio.svelte'
  import AudioWrapper from '$lib/AudioWrapper.svelte'
  import Naudio from '$lib/Naudio.svelte'
</script>

(See also [3.21](/chapter3/3.21)) The basic structure of a clause is subject, verb and one or more objects or complements. Vocatives are not an essential part of the clause structure (the clause would be grammatically complete even without them). This explains why under some circumstances they are given their own IP.

Vocatives are treated differently depending where they come. In initial position, they tend to form a separate IP:

<Naudio
  sentence="'Linda, | could I have a 'word? <br>
  *Jenny and 'Peter, | I want *you to take the 'left side. <br>
  *Ladies and 'gentlemen! *Please be up'standing!"
  nuclei="{['Lin', 'word', 'Pet', 'left', 'gen', 'stand']}" 
/>
When not initial, they are usually attached to what precedes, forming part of the tail of the IP:

<Naudio
  sentence="'This, Mr Roberts, | is the *young man I was 'telling you about. <br>
  *Don't 'do it, Mrs Worthington. <br>
  *Have you got your 'passport, Mother? <br>
  'You, Jimmy, | have *made a mi'stake."
  nuclei="{['This', 'tell', 'do', 'pass', 'stake', 'You']}" 
/>
In greetings, however, a final vocative often has its own IP:

<Naudio
  sentence="Good 'morning, Andrew <em>or</em> <br>
  Good 'morning, | 'Andrew"
  nuclei="{['mor', 'An']}" 
/>

**Imprecations** (= calling on God, or an equivalent euphemism or expletive) can form a separate utterance. But if part of larger utterance, they usually have their own IP when initial, but otherwise are attached to the preceding IP:

<Naudio
  sentence="In *heaven's 'name! <br>
  In *heaven's 'name, | *why 'not? <br>
  *Why in heaven's name 'not? <em>or</em> 'Why in heaven's name | 'not?
  *Why 'not, in heaven's name?"
  nuclei="{['name', 'not', 'Why', 'not']}" 
/>
