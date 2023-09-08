---
title: 'Separated particles'
---

<script>
  import Audio from '$lib/Audio.svelte'
  import AudioWrapper from '$lib/AudioWrapper.svelte'
  import Naudio from '$lib/Naudio.svelte'
</script>

There is one important case where (in neutral tonicity) the nucleus does _not_ fall on the adverbial particle of a phrasal verb. This is when the particle has been separated from the verb (= 'exptraposed', moved to a position after the object). When this happens, the **object** bears the nucleus if it is lexically filled (= if it is or contains a noun or other lexical material).

Rule: in the case of a **lexical object and a separated particle**, the nucleus goes by default on the object:

<AudioWrapper>
<Audio 
  sentence="*Take your 'shoes off." 
  nuclei="{['shoes']}" 
  url="3-28" 
  start=2
  end=5
/>
</AudioWrapper>

<Naudio
  sentence="I *want my 'money back. <br>
  She *got her 'handkerchief out."
  nuclei="{['mon', 'hand']}" 
/>
However if the object is a **pronoun** (i.e not lexical), the nucleus goes on the adverbial particle in the regular way :

<AudioWrapper>
<Audio 
  sentence="*Take them 'off." 
  nuclei="{['off']}" 
  url="3-28" 
  start=5
  end=7
/>
</AudioWrapper>

<Naudio
  sentence="I *want it 'back. <br>
  *Did you get it 'out?"
  nuclei="{['back', 'out']}" 
/>
This also applies if the object is lexically filled but is already given, and therefore out of focus.

<Naudio
  sentence="<em>(to someone who has just heard a good joke)</em> You ought to *write these jokes 'down."
  nuclei="{['down']}" 
/>
Some other constructions involving adverbs behave in a rather similar way. For example, the adverb may well _not_ be accented after a lexically filled subject in sentences such as:

<Naudio
  sentence="Is the 'television on? (<em>or</em> Is the *television 'on?) <br>
  *What Peter's 'book about? (<em>or</em> *What's Peter's book a'bout?) <br>
  She's got a *red 'dress on."
  nuclei="{['tel', 'on', 'book', 'bout', 'dress']}" 
/>
but is inevitably accented after a pronoun:

<Naudio
  sentence="(<em>talking about the television</em>) *Is it 'on? <br>
  (<em>discussing a book</em>) *What's it a'bout? <br><br>
  ?? Where's the dress? <br> - She *got it 'on!"
  nuclei="{['on', 'bout', 'on']}" 
/>
which shows that _be on, be about, have (got) on_ behave in this respect like phrasal verbs.

We see a similar pattern in certain combinations of verb and prepositional phrase:

<AudioWrapper>
<Audio 
  sentence="*Bring your um'brella with you. but" 
  nuclei="{['brel']}" 
  url="3-28" 
  start=8
  end=11
/>
<Audio 
  sentence="*Bring it 'with you. (<em>not</em> 'Bring it with you.)" 
  nuclei="{['with', 'Bring']}" 
  url="3-28" 
  start=12
  end=13
/>
</AudioWrapper>
Where there is contrastive focus, the separated particle can readily be accented even after a lexical object:

<Naudio
  sentence="He *took the plug 'out, then *put it back 'in again. <br>
  I said *turn the television 'off! And 'leave it off. <br>
  (<em>police to gunman</em> *Put the gun 'down!"
  nuclei="{['out', 'in', 'off', 'leave', 'down']}" 
/>
