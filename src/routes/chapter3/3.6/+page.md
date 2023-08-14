---
title: 'Information status'
---

<script>
  import Audio from '$lib/Audio.svelte'
  import AudioWrapper from '$lib/AudioWrapper.svelte'
  import Naudio from '$lib/Naudio.svelte'
</script>

In English, the location of the nucleus is strongly affected by whether the words contain **old** or **new** information. The general rule is that we accent new information, but not old information. That is, we **deaccent**(=remove potential accents from ) old information.

If all the information in the utterance is new, then we can accent all the lexical items. So the nucleus is placed (as expected) on the last lexical item:
<Naudio
  sentence="?? Yes madam? <br>
  I'd *like a *gin and 'tonic"
  nuclei="{['ton']}" 
/>
However, in practice we tend to downgrade potential accents between the first one and the last. (This is discussed in [5.9](/chapter5/5.9)). So in practice we often say:
<Naudio
  sentence="Yes madam? <br>
  I'd *like a gin and 'tonic"
  nuclei="{['ton']}" 
/>
and we apply this principle in the examples.

As long as the last lexical item contains new information, the lexical item is accented, and thus bears the nucleus. However, if the last lexical item contains **old** information (= something already mentioned), then it is not accented. Rather, it is deaccented. So the nucleus goes earlier, namely on the last item that _does_ contain new information:
<AudioWrapper>
<Audio 
  sentence="?? How about a gin and tonic? <br> - Oh I'd pre*fer a 'vodka and tonic" 
  nuclei="{['vod']}" 
  url="3-6" 
  start=3
  end=9
/>
</AudioWrapper>
In this example, _tonic_ has already been mentioned, and is therefore old information. As a result, it gets deaccented. Thus the place of the nucleus normally signals the **end of the new information** in an intonation phrase.

We generally avoid placing a nucleus on an item which repeats something that has been said earlier: we do not accent a **repeated** item (a 'given' item, old information). So we say, for example:
<AudioWrapper>
<Audio 
  sentence="?? D'you object to dogs <br> - No I a'dore dogs" 
  nuclei="{['dore']}" 
  url="3-6" 
  start=9
  end=14
/>
</AudioWrapper>
<Naudio
  sentence="?? Who doesn't want to dance? <br> - 'Bill doesn't want to dance"
  nuclei="{['Bill']}" 
/>
It would sound strange to say:
<Naudio
  sentence="?? D'you object to dogs? <br> - No I a*dore 'dogs. <br><br>
  ?? Who doesn't want to dance? <br> - *Bill doesn't want to 'dance."
  nuclei="{['dogs', 'dance']}" 
/>

In the correct versions, we see that the **repeated** items (<em>dogs, want to dance</em>) are not accented. Rather, they are deaccented: they lose the accent they might otherwise have had. This is because the information they convey is not new.

We deaccent repeated words even if, strictly speaking, they contain new information. Thus we tend to say:
<Naudio
  sentence="a *green chair and a 'blue chair <br>
  *Tina Rodman and 'Jane Rodman <br>
  *72'52 (= *seven two 'five two)"
  nuclei="{['blue', 'Jane', '5', 'five']}" 
/>
where the final, deaccented, item would not actually be predicable from the context (even though the intonation, once we reach the nucleus, makes it predictable for the hearer). After all, the speaker might have been going to say:
<Naudio
  sentence="a *green chair and a blue 'curtain <br>
  *Tina Rodman and Jane 'Stuart <br>
  *725'6(= 'seven two five 'six)"
  nuclei="{['cur', 'Stu', '6', 'six']}" 
/>
