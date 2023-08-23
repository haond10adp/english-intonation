---
title: 'Contrastive focus on polarity or tense'
---

<script>
  import Audio from '$lib/Audio.svelte'
  import AudioWrapper from '$lib/AudioWrapper.svelte'
  import Naudio from '$lib/Naudio.svelte'
</script>

## Polarity

Sometimes the speaker wants to emphasize the **polarity** (= the quality of being either positive or negative) of a verb, or its **tense**. In both cases this may cause the nucleus to go on an auxiliary or modal verb.

When we deny the truth of an assertion made by the other speaker, we can focus on negative word (if the thing being deny is positive). This is a **mark negative**. The negative goes either on the word _not_ or on the word containing the negation, e.g contracted negative such as _won't_:
<Naudio
  sentence="?? I think they'll just surrender. <br> - They \/won't surrender! <br><br>
  ?? Peter | could run a marathon. <br> - He \/couldn't run a marathon. <br><br>
  ?? You took my plate. <br> - I \/didn't take your plate. <br><br>
  ?? Oops, | sorry, | you're busy. <br> - I'm \/not busy."
  nuclei="{['won\'t', 'couldn\'t', 'didn\'t', 'not']}" 
/>
To deny the truth of a negative proposition, we focus on the word that indicates positive polarity. This is a **marked negative**. The nucleus usually goes on a form of the verb _to be_ or on a modal or auxiliary verb:
<Naudio
  sentence="?? Your not in'volved. <br> - Oh but I \am involved. <br><br>
  If you *can't see her 'now, | *when 'can you see her? <br>
  You *thought I hadn't 'finished, but I 'had finished." 
  nuclei="{['vol', 'am', 'now', 'can', 'finished', 'had']}" 
/>
The pro-form _do_ receives the nucleus when it signals a change of polarity (positive to negative or negative to positive):
<Naudio
  sentence="He *promised he would 'finish it, | but *actually he 'didn't. <br>
  She *said she wouldn't 'tell them, | but *actually she 'did tell them"
  nuclei="{['fin', 'did', 'tell', 'did']}" 
/>
Or there may just be the restatement of an existing polarity:
<Naudio
  sentence="He 'promised he would finish it, | and he *actually 'did finish it"
  nuclei="{['promised', 'did']}" 
/>
In the following example, an ambiguity in the written form is resolved by appropriate focus, shown in speech by intonation:

<AudioWrapper>
<Audio 
  sentence="I was thinking of organizing a collection for cancer research." 
  nuclei="{['']}" 
  url="3-14" 
  start=2
  end=7
/>
<Audio 
  sentence="(i) Well, 'I'll make a donation | if you 'do" 
  nuclei="{['I\'ll', 'do']}" 
  url="3-14" 
  start=7
  end=10
/>
<Audio 
  sentence="(ii) Well, 'I'll make a donation | if 'you do" 
  nuclei="{['I\'ll', 'you']}" 
  url="3-14" 
  start=15  
  end=19
/>
</AudioWrapper>
Here, response (i) means 'if you organize a collection', while response (ii) means 'if you make a donation'.

If the assertion being denied is negative, so that our denial is positive, we focus on auxiliary or modal verb (often in the form of emphatic _do_)
<Naudio
  sentence="?? You didn't bring an umbrella. <br> - I 'did bring an umbrella. <br><br>
  ?? He hasn't open his briefcase. <br> - He 'has opened his briefcase. <br><br>
  ?? You don't like rock, | \do you? <br> - I 'do like rock" 
  nuclei="{['did', 'has', 'do']}" 
/>
Note, however, that if the negation word is followed by a 'new' lexical item the nucleus goes (as normal) on that new lexical item, even though the speaker's main intent may be negation.
<Naudio
  sentence="?? Have some more milk. <br> - I don't 'want any more milk"
  nuclei="{['want']}" 
/>
Where there is a contrast involving the subject of the clause as well as one involving polarity, English often focus on the subject while - illogically? - not accenting the actual polarity word. This pattern usually involves a fall-rise (see [2.7](/chapter2/2.7) on correction)
<Naudio
  sentence="\/Lawrence didn't pass the test, | though the \/rest of us did. <br>
  So \/Mary's ready, but \/Rachel isn't <br><br>
  ?? I shall be *singing 'hymns. <br> - Well \/other's won't"
  nuclei="{['Law', 'rest', 'Ma', 'Ra', 'hymns', 'oth']}" 
/>

<AudioWrapper>
<Audio
  sentence="?? I *don't \like | /Beethoven. <br> - Well, \/I do."
  nuclei="{['like', 'Beet', 'I']}"
  url="3-14"
  start=20
  end=25
/>
</AudioWrapper>
There is also another possible reason for placing the nucleus on the word that carries the indication of polarity: namely, as a device for adding emphasis to an exclamation. This is a kind of contrastive focus, though the contrast is implicit:
<Naudio
  sentence="You \have done well! | *Daddy \will be pleased. <br>
  *Oh \no! That's \not a good idea. <br>
  *That \is a nice hat you're wearing!"
  nuclei="{['have', 'will', 'no', 'not', 'is']}" 
/>
In the last example there may have been no previous mention of hat or what is being worn

## Tense

As with polarity, so with **tense**. We focus on an auxiliary or modal verb to emphasize that we are talking about the past not the present, or future not the past:
<AudioWrapper>
<Audio
sentence="?? Are you a vegetarian? <br> - Well I \/used to be, but *now I eat \meat."
nuclei="{['used', 'meat']}"
url="3-14"
start=27
end=33
/>
</AudioWrapper>
<Naudio
  sentence="?? D'you play tennis? <br> - I \/did play tennis | before my ope/ration. <br><br>
  ?? Have you written back? <br> - No but I'm \/going to write back. <br><br>
  *This ma\/chine | runs *more slowly than it \used to run. <br>
  I *haven't done any \/washing yet, | but I \/will do it"
  nuclei="{['did', 'ra', 'go', 'chine', 'used', 'wash', 'will']}" 
/>
Notice that in these examples various repeated words could have been ellipted (= omitted). The same meaning could alternatively be expressed as follows:
<Naudio
  sentence="?? Are you vegetarian? <br> - Well I \/used to be a vegetarian... <br><br>
  ?? D'you play tennis? <br> - I \/did | before my ope/ration. <br><br>
  Have you written back? <br> - No but I'm \/going to <br><br>
  *This ma\/chine | runs more slowly than it \used to. <br>
  I *haven't done any \/washing yet, | but I \/will."
  nuclei="{['used', 'did', 'go', 'used', 'wash', 'chine', 'will']}" 
/>
Contrastive focus is the commonest reason for a function word to receive a nucleus... but not the only one.
