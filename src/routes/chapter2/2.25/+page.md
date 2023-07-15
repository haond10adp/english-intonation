---
title: 'Tone concord'
---

<script>
  import Audio from '$lib/Audio.svelte'
  import AudioWrapper from '$lib/AudioWrapper.svelte'
  import Naudio from '$lib/Naudio.svelte'
</script>

If two successive intonation phrases are grammatically parallel, this may be signaled intonationally by having the same tone.

This is particularly evident in cases of non-defining apposition (see [4.8](/chapter4/4.8)). Here there is regularly **tone concord** between the two intonation phrases. That is to say, the tone used for the first is repeated (copied) in the second. In the following, the tone on _colleague_ is repeated on _Charles_:
<Naudio
  sentence="(i) *This is my \colleague, | \Charles. <br>
  (ii) Now *this is my \/colleague, | \/Charles, | and *he will be taking \over <br>
  (iii) The I've got my /colleague, /Charles, | and *also my friend \Rachel."
  nuclei="{['col', 'Char', 'col', 'o', 'Ra']}" 
/>
Tone concord is a tendency rather than an iron rule. It is also perfectly possible to say:
<Naudio
  sentence="(iv) *This is my \/colleague, | \Charles."
  nuclei="{['col', 'Charles']}" 
/>
or indeed to place both elements within a single IP (see [4.8](/chapter4/4.8)), though this tends to imply defining rather than non-defining apposition:
<Naudio
  sentence="(v) *This is my colleague \Charles. (= Of my colleagues, this is Charles)"
  nuclei="{['Charles']}" 
/>

The use of tone concord is particularly likely where the utterance as a whole is not yet finished, as in (ii) and (iii).

Tone concord can signal parallelism not onl between nouns or noun phrases but also between other parallel structures: between other parts of speech and indeed between complete clauses or sentences
<Naudio
  sentence="I re\ject it, | I de\spise it, | I won't ac\cept it. <br><br>
  *Jenifer's \better, | she's \well again. <br><br>
  You say that *nothing is worse than a /war? || Well, dis\honour is worse than a war, | \slavery is worse than a war!"
  nuclei="{['ject', 'spise', 'cept', 'bet', 'well', 'war', 'hon', 'sla']}" 
/>
A tone can be reused where information is presented as two IPs rather than one,
and where we string together near-synonyms for emphasis:
<Naudio
  sentence="We've *built a \barbecue | on the \patio. <br>
  Don't be | ridiculous. <br>
  I \love you, | I a\dore you, | I *can't live with\out you."
  nuclei="{['bar', 'pat', 'Don\'t', 'dic', 'love', 'dore', 'out']}" 
/>
When _too_ is used at the end of a sentence or clause to mean 'in addition' (see [3.19](/chapter3/3.19)), and given a separate intonation phrase, it usually exhibits tone concord. The same is true of its synonyms _as well_ and _also_, and of its negative synonym _either_.

<AudioWrapper>
<Audio 
  sentence="\/Andy isn't the only one interested; | \Neil's interested, \too."
  nuclei="{['An', 'Neil\'s', 'too']}" 
  url="2-25" 
  start=2
  end=6
/>
<Audio 
  sentence="If \/Martha wants to to come, as \/well, | we'll need a *bigger \car." 
  nuclei="{['Mar', 'well', 'car']}" 
  url="2-25" 
  start=8
  end=13
/>
</AudioWrapper>
<Naudio
  sentence="She *didn't \/ask for it, | and she *didn't \get it, | \either."
  nuclei="{['ask', 'get', 'either']}" 
/>
<Naudio
  sentence="\Peter wants some, | \too <em>(definitive; concord, definitive)</em> <br>
  \/Peter wants some, | \too. <em>(implicational, definitive)</em> <br>
  \/Peter wants some, | \/too <em>(implicational, concord, implicational)</em>"
  nuclei="{['Pet', 'too']}" 
/>
