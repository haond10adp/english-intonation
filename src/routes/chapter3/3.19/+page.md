---
title: 'Other function words that attract the nucleus'
---

<script>
  import Audio from '$lib/Audio.svelte'
  import AudioWrapper from '$lib/AudioWrapper.svelte'
  import Naudio from '$lib/Naudio.svelte'
</script>

There are a few words that regularly attract the nucleus despite being function words: notably _too_ and _anyhow_ and their synonyms.

When used in the meaning 'also', _too_ is usually accented. In this meaning it often comes at the end of a sentence or clause, and thus attracts the nucleus. Sometimes it is attached to the same IP as the preceding words, but sometimes it has its own IP:

<Naudio
  sentence="Mary wants some ice cream, | and *Peter wants some, 'too. <em>or</em> <br>
  Mary wants some ice cream, | and 'Peter wants some, | 'too. <br><br>
  ?? I'm going to the library. <br> - Oh, *I'll come, 'too. <em>or</em> <br> - Oh 'I'll come, | 'too."
  nuclei="{['too', 'Pet', 'I\'ll']}" 
/>
Exactly the same rules apply to its synonym _as well_ and to the negative equivalent _either_

<Naudio
  sentence="We're *going to the \beach. | *Why don't \you come along | as \well? <br> 
  I *don't like \/Jim, and I *don't like \Tammy, | either. <br>
  I *can't \/sing very well. <br> - \I can't, | \either. (=Nor can I.)"
  nuclei="{['beach', 'you', 'well', 'Jim', 'Tam', 'sing', 'I', 'ei']}" 
/>

<AudioWrapper>
<Audio 
  sentence="*Could you give /me some please, | as /well?" 
  nuclei="{['me', 'well']}" 
  url="3-19" 
  start=2
  end=6
/>
</AudioWrapper>
The too refers to the accented item that immediately precedes it:

<AudioWrapper>
<Audio 
  sentence="'I'm singing, | 'too. (= not only are other people singing, but so am I.)" 
  nuclei="{['I\'m', 'too']}" 
  url="3-19" 
  start=7
  end=10
/>
<Audio 
  sentence="I'm 'singing, | 'too. (= I am not only doing something else, but also singing)" 
  nuclei="{['sing', 'too']}" 
  url="3-19" 
  start=10
  end=13
/>
</AudioWrapper>

<Naudio
  sentence="(i) 'Mary's going to invite Peter, | 'too. (narrow focus on <em>Mary</em>: not only someone else invite him, but so will Mary) <br>
  (ii) *Mary's going to in'vite Peter, | 'too. (narrow focus on <em>invite</em>: not only will she do something else to him, but she will also invite him) <br>
  (iii) *Mary's going to invite 'Peter, | 'too. (narrow focus on <em>Peter</em>: not only will she invite someone else, but also Peter; or broad focus: not only will something else happen, but also Mary will invite Peter)"
  nuclei="{['Mar', 'too', 'vite', 'Pet']}" 
/>

The sentence adverb _anyway_ and its synonym _anyhow_ are almost always nuclear. They are said with a reinforcing fall (see [2.23](/chapter2/2.23))

<Naudio
  sentence="This i'dea may not \/work, but let's *try it \anyway. <em>or</em>... but let's \try it, | \anyway. <br>
  \Anyhow, | I've *got to be \going | /now. <br>
  \Anyway, | *why were you looking at my \letters?"
  nuclei="{['work', 'any', 'try', 'Any', 'go', 'let', 'now']}" 
/>

<AudioWrapper>
<Audio 
  sentence="She *doesn't \/smoke | *not \/nowadays, | \anyhow." 
  nuclei="{['smoke', 'now', 'any']}" 
  url="3-19" 
  start=13
  end=18
/>
</AudioWrapper>
