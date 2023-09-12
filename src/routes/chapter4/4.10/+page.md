---
title: 'Tag questions'
---

<script>
  import Audio from '$lib/Audio.svelte'
  import AudioWrapper from '$lib/AudioWrapper.svelte'
  import Naudio from '$lib/Naudio.svelte'
</script>

Tag questions tend to have their own IP (see [2.14](/chapter2/2.14)). Thi applies particularly to **reverse polarity** tags (also know as **checking** tags). In them the tag is negative if the main clause is positive, positive if the main clause is negative.

<Naudio
  sentence="<em>Positive_negative</em> <br>
  We *could do it to'morrow, | 'couldn't we? <br>
  They've *got their 'books, | 'haven't they? <br>
  'Mary'll be please, | 'won't she? <br><br>
  <em>Negative_positive</em><br>
  It *wasn't a di'saster, | 'was it? <br>
  It's *not 'finished, | 'is it? <br>
  The boys *can't have for'gotten, | 'can they?"
  nuclei="{['mor', 'could', 'have', 'won\'t', 'mor', 'books', 'Mar', 'sas', 'was', 'fin', 'is', 'got', 'can']}" 
/>
Question tags have sharply different meanings depending on whether their tone is fall or a rise (see [2.14](/chapter2/2.14)).

A tag is sometimes incorporated as a tail into the IP of the main clause, if it has a rising tone. This does not happen with reverse-polarity tags after a fall:

<Naudio
  sentence="The boys *can't have for\/gotten,can they?"
  nuclei="{['got']}" 
/>

In **constant-polarity** tags it is quite usual for the tag not to have their own IP. These are also known as **copy** tags, and are normally positive-positive. (If a constant-polarity tag does have its own IP, the tone must be a rise, as seen in [2.14](/chapter2/2.14))

<Naudio
  sentence="You're *ready to 'go, are you? <em>or</em> <br>
  You're *ready to 'go, | /are you? <br><br>
  *Close the 'window, would you, please? <em>or</em> <br>
  *Close the 'window, | /would you, please?"
  nuclei="{['go', 'are', 'win', 'would']}" 
/>
