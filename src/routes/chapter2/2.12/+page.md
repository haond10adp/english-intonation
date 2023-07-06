---
title: 'Wh Questions'
---

<script>
  import Audio from '$lib/Audio.svelte'
  import AudioWrapper from '$lib/AudioWrapper.svelte'
  import Naudio from '$lib/Naudio.svelte'
</script>

Wh questions (= question-word questions, special questions) are those that are formed with a question word such as _who, what, which , when, where, why, how_. They ask for more specific answer than just 'yes' or 'no'.
<Naudio
  sentence="*Where's my \knife? <br> *Why are you com\plaining? <br> *How did it get \broken?"
  nuclei="{['knife', 'plain', 'bro']}" 
/>
The default tone for why questions is a **fall**. As with statements , this tone meaning is the **definitive fall**:
<AudioWrapper>
<Audio 
  sentence="*When did you ar\rive?" 
  nuclei="{['rive']}" 
  url="2-12" 
  start=2
  end=4
/>
<Audio 
  sentence="*Who's \that?" 
  nuclei="{['that']}" 
  url="2-12" 
  start=5
  end=7
/>
<Audio 
  sentence="*Which is the \shift key?" 
  nuclei="{['shift']}" 
  url="2-12" 
  start=7
  end=9
/>
</AudioWrapper>
<Naudio
  sentence="*Where's the \grater? <br> *How do you spell \friend? <br> So *who did you \see? <br> *What does in\testate mean? <br> *What \books have you read recently?"
  nuclei="{['gra', 'friend', 'see', 'tes', 'books']}" 
/>
Nevertheless, a wh question can also be said with a non-fall: a rise or, less commonly, a fall-rise. This has the effect of making it _more gentle_, kindly, encouraging, sympathetic or deferential, as opposed to businesslike fall. We call this tone meaning the **encouraging** rise.
<AudioWrapper>
<Audio 
  sentence="*When did you ar/rive?" 
  nuclei="{['rive']}" 
  url="2-12" 
  start=10
  end=12
/>
<Audio 
  sentence="*What's the /time?" 
  nuclei="{['time']}" 
  url="2-12" 
  start=12
  end=14
/>
</AudioWrapper>
<Naudio
  sentence="*How long will you be staying in /London, sir? <br> *How many people in your \/party, madam?"
  nuclei="{['Lon', 'par']}" 
/>
Contrast the two tone meanings, definitive fall and encouraging rise:
<Naudio
  sentence="*Why are you \angry? (<em>unmarked</em>) <br> *Why are you /angry? (<em>interested, sympathetic</em>)"
  nuclei="{['ang']}" 
/>
<AudioWrapper>
<Audio 
  sentence="*What's your \name? (<em>unmarked, businesslike</em>)" 
  nuclei="{['name']}" 
  url="2-12" 
  start=15
  end=17
/>
<Audio 
  sentence="*What's your \name? (<em>encouraging, kindly</em>)" 
  nuclei="{['name']}" 
  url="2-12" 
  start=18
  end=19
/>
</AudioWrapper>
A separate type of wh question is the echo question, discussed in [2.16](2.16) below.

A short wh question that the speaker immediately answer himself (one type of rhetorical question) usually has an interested rise:
<Naudio
  sentence="I'm *coming \back. || /Why? | Be*cause I \love you. <br> We can *conquer \poverty. || /How? | By 'educating the \workforce."
  nuclei="{['back', 'Why', 'love', 'pov', 'How', 'work']}" 
/>
<Audio 
  sentence="You *can't \go. || *Why /not? | Be*cause I \say so." 
  nuclei="{['go','not', 'say']}" 
  url="2-12" 
  start=20
  end=23
/>
