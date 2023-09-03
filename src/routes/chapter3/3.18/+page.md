---
title: 'Wh + to be'
---

<script>
  import Audio from '$lib/Audio.svelte'
  import AudioWrapper from '$lib/AudioWrapper.svelte'
  import Naudio from '$lib/Naudio.svelte'
</script>

## Wh + to be

A sentence such as _How are you?_ consists of function words only. There are no lexical items. Yet the nucleus must go somewhere. So where does it go?

If a direct or indirect wh question has the pattern wh - _be_ - pronoun, then the nucleus goes on the verb _to be_ itself. This need not involve narrow or contrastive focus of any kind.

<Naudio
  sentence="(<em>greeting someone</em>) <br>
  *How 'are you? <br>
  *Tell me how you 'are. <br><br>
  (<em>being shown something</em>) <br>
  *What 'is it? <br>
  *Tell me what it 'is. <br><br>
  (<em>hearing someone at the door</em>)<br>
  *Who 'is it? <br>
  I *wonder who it 'is"
  nuclei="{['are', 'is']}" 
/>

<Naudio
  sentence="*How would it 'be | if we *met for 'lunch? <br>
  That 'man over there, | *who 'is he? <br>
  *When 'was it | that you *came back from 'Canada?"
  nuclei="{['be', 'lunch', 'man', 'is', 'was', 'Can']}" 
/>
If a speaker answers the question _How are you?_ by repeating the same words back, there is normally a change of tonicity. The answer has contrastive focus on _you_:

<AudioWrapper>
<Audio 
  sentence="?? *How 'are you? <br> - Fine thanks. || *How are 'you?" 
  nuclei="{['are', 'you']}" 
  url="3-18" 
  start=3
  end=8
/>
<Audio 
  sentence="?? *Mr 'Smith! | *How 'are you? <br> - *I'm 'fine Miss Jones. || And 'you?" 
  nuclei="{['Smith', 'are', 'fine', 'you']}" 
  url="3-18" 
  start=9
  end=16
/>
</AudioWrapper>

If the verb _to be_ consists of more than one word (e.g _has been, will be_), the nucleus goes on the second of them:

<Naudio
  sentence="*Welcome 'back! *How it's 'been? <br>
  <em>Waiter</em>: *What'll it 'be?"
  nuclei="{['back', 'been', 'be']}" 
/>

<AudioWrapper>
<Audio 
  sentence="?? We're *going to get 'married. <br> - *When's it to 'be?" 
  nuclei="{['mar', 'be']}" 
  url="3-18" 
  start=18
  end=22
/>
</AudioWrapper>
The same applies in the corresponding indirect questions:

<Naudio
  sentence="I *asked her how she 'was <br>
  They *told us who they 'were <br>
  *This 'wedding, | *when do you think it will 'be?"
  nuclei="{['was', 'were', 'wed', 'be']}" 
/>

<AudioWrapper>
<Audio 
  sentence="(<em>talking about forthcoming event</em>) I *wondered when it would 'be.)" 
  nuclei="{['be']}" 
  url="3-18" 
  start=23
  end=27
/>
<Audio 
  sentence="(<em>talking about mysterious noise</em>) *What do you think it 'was)" 
  nuclei="{['was']}" 
  url="3-18" 
  start=29
  end=32
/>
</AudioWrapper>
If the word following _be_ in a wh question of this type is a demonstrative rather than a pronoun, then the nucleus tends to go on the demonstrative. This applies whenever the demonstrative throw focus onto something (treated as) new:

<AudioWrapper>
<Audio 
  sentence="(<em>Hearing someone at the door</em>) *Who's 'that?" 
  nuclei="{['that']}" 
  url="3-18" 
  start=35
  end=37
/>
</AudioWrapper>

<Naudio
  sentence="(<em>picking up an unknown object</em> *What's 'this? <br><br>
  ?? She *comes from Penmaen'mawr. <br> - *Where's 'that?"
  nuclei="{['mawr', 'that', 'this']}" 
/>
Alternatively, a demonstrative can be used like a pronoun, referring to something already given. In that case, the nucleus reverts to the verb:

<AudioWrapper>
<Audio 
  sentence="(<em>knocking at the door continues</em>) *Who 'is that" 
  nuclei="{['is']}" 
  url="3-18" 
  start=37
  end=40
/>
</AudioWrapper>
Conversely, a pronoun can be used like a demonstrative, focused and referring to someone new:

<Naudio
  sentence="(pointing surreptitiously at a stranger) *Who's 'she?"
  nuclei="{['she']}" 
/>
Again, note the difference between these examples and the corresponding sentences containing lexical material instead of pronouns. Here the nucleus follows the usual rule of being located on the last lexical item:

<Naudio
  sentence="When 'was it | that you came back from Canada? <em>but</em> <br>
  Which 'day was it | that you came back from Canada? <br><br>
  *How 'are you? <em>but</em> *How 'old are you?"
  nuclei="{['was', 'day', 'are', 'old']}" 
/>
There are other cases involving accenting of the verb _to be_ in which the tonicity is not easily explained. They can be considered **intonation idioms**.

<AudioWrapper>
<Audio 
  sentence="The *trouble (*problem, *thing', *difficulty, *snag) 'is that we're broke." 
  nuclei="{['is']}" 
  url="3-18" 
  start=42
  end=46
/>
</AudioWrapper>

## Here you are!

The usual pattern when you hand or show something to someone is:

<Naudio
  sentence="*Here you /are."
  nuclei="{['are']}" 
/>

<Naudio
  sentence="?? Would you *pass me the /milk please? <br> - *Here you /are. <br><br>
  ?? *Could I see my ac/count please? <br> - Of \course sir. | *Here you /are. <br><br>
  ?? We *need a new \sofa. <br> - *Here you /are. There's *one advertised in this \paper."
  nuclei="{['milk', 'are', 'count', 'course', 'pa', 'so']}" 
/>

<AudioWrapper>
<Audio 
  sentence="?? I'd like a *pound of \apples please. <br> - Here you /are sir." 
  nuclei="{['app', 'are']}" 
  url="3-18" 
  start=48
  end=53
/>
<Audio 
  sentence="?? I *want a \taxi. <br> - *Here you /are madam. | There's *one \waiting." 
  nuclei="{['tax', 'are', 'wait']}" 
  url="3-18" 
  start=55
  end=62
/>
</AudioWrapper>

When at last you see something you have been looking for or waiting for you can say:

<Naudio
  sentence="*Here it /is"
  nuclei="{['is']}" 
/>
or, more emphatically:

<Naudio
  sentence="\Here | it /is."
  nuclei="{['Here', 'is']}" 
/>
This pattern can also be used with _There..._ and with other pronouns

<Naudio
  sentence="*Where's my \book? || Oh \here | it /is."
  nuclei="{['book', 'is', 'here']}" 
/>

<AudioWrapper>
<Audio 
  sentence="I *can't find my \keys. || Oh \there | they /are! || *On the \table." 
  nuclei="{['keys', 'there', 'are', 'ta']}" 
  url="3-18" 
  start=64
  end=70
/>
</AudioWrapper>
With a falling tone, the speaker is announcing something new:

<Naudio
  sentence="Now *here he \is, || the *one and /only | *Mister \Magic!"
  nuclei="{['is', 'on', 'Mag']}" 
/>
