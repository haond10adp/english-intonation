---
title: 'Adverbials'
---

<script>
  import Audio from '$lib/Audio.svelte'
  import AudioWrapper from '$lib/AudioWrapper.svelte'
  import Naudio from '$lib/Naudio.svelte'
</script>

## Limiting non-fall

Adverbs and adverbial phrases that qualify a whole clause or sentence (rather than qualify just one word) often have their own intonation phrase. If placed at the beginning, they usually have a leading non-final fall-rise (or rise). If placed at the end, they tend to have a trailing rise.

<AudioWrapper>
<Audio 
  sentence="Un\/fortunately | I've *lost your \letter" 
  nuclei="{['for', 'let']}" 
  url="2-23" 
  start=2
  end=6
/>
<Audio
  sentence="Un/fortunately | I've \*lost your \letter"
  nuclei="{['for', 'let']}"
  url="2-23"
  start=6
  end=10
/>
<Audio 
  sentence="I've *lost your \letter, | un/fortunately." 
  nuclei="{['let', 'for']}" 
  url="2-23" 
  start=10
  end=13
/>
</AudioWrapper>

Most adverbials, like _unfortunately_ in this example, limit the sense of the main clause in some way. So we call this pattern with an adverbial a **limiting non-fall**. Here are some more examples:

<Naudio
  sentence="<em>(leading)</em> <br>
  \/Frankly, | I'm *rather an\noyed. <br>
  \/Next week | I'm *going to \Frankfurt. <br>
  If \/I were you, | I'd *buy a Mer\cedes. <br><br>
  <em>(trailing)</em> <br>
  I *thought it was \dreadful, | /frankly. <br>
  I *can't \stand her, | to be /honest with you."
  nuclei="{['Frank', 'noyed', 'Next', 'dread', 'frank', 'stand', 'hon', 'I', 'ce']}" 
/>

## Reinforcing fall

However some adverbials are said with a falling tone. Their meaning is not to limit the sense of the main clause, but rather to reinforce it. We call this tone meaning with an adverbial a **reinforcing fall**
<Naudio
  sentence="?? D'you *think I ought to /say something? <br> - Of \course, | you must pro\test <br> - You must pro\test, | of \course <br><br>
  I've *never heard anything so ri\diculous | in *all my born \days. "
  nuclei="{['say', 'course', 'test', 'dic', 'days']}" 
/>
<AudioWrapper>
<Audio 
  sentence="I *promise to \love you | for\ever." 
  nuclei="{['love', 'ev']}" 
  url="2-23" 
  start=13
  end=16
/>
</AudioWrapper>
It would be bizarre to say:
<Naudio
  sentence="x I *promise to \love you | for/ever."
  nuclei="{['love', 'ev']}" 
/>
--because forever is not a limitation but its opposite, a reinforcement.

## Limiting non-fall vs Reinforcing fall

Some adverbials can be used either way: with a reinforcing fall or with a limiting (dependent) non-fall:
<Naudio
  sentence="<em>(reinforcing)</em> \Clearly, | we're *going to be disap\pointed. <br>
  <em>(limiting)</em> \/Clearly, | we're *going to be disap\pointed. <br><br>
  <em>(reinforcing)</em> On the \contrary, | I'm de\lighted. <br>
  <em>(limiting</em> On the \/contrary, I'm de\lighted. <br>"
  nuclei="{['Clear', 'point', 'con', 'light']}" 
/>
The same distinction applies in various kinds of adverbial clause and the like:
<Naudio
  sentence="<em>(reinforcing)</em> I'll *ring you in an \hour, | when I'm \ready.<br>
  <em>(limiting)</em> I'll *ring you in an \hour, | if I'm /ready. <br><br>
  <em>(reinforcing)</em> He'll be *back to\morrow, | I'm \sure. <br>
  <em>(limiting)</em> He'll be *back to\morrow, | I /think." 
  nuclei="{['hour', 'read', 'mor', 'sure', 'think']}" 
/>

## Tonality idiomatic

There are some adverbials that regularly take a falling tone when initial, even though they are not obviously reinforcing. They can be seen as tonality idiomatic. Examples include _at least_ and _at any rate_ also _by the way_ and _incidentally_, used to introduce a side-issue.

<Naudio
  sentence="We *finish work to\morrow &minus; || at \least, | most of us do. <br>
  *Inci\dentally, | *when are we going to get \paid?"
  nuclei="{['mor', 'least', 'most', 'den', 'paid']}" 
/>
<AudioWrapper>
<Audio 
  sentence="By the \way, I was de*lighted with the \/dress." 
  nuclei="{['way', 'dress']}" 
  url="2-23" 
  start=16
  end=20
/>
</AudioWrapper>
If they follow the main clause, these adverbials usually form part of the tail, i.e. do not have their own IP:
<Naudio
  sentence="*When are we going to get \paid, incidentally? <br>
  I was de*lighted with the \/dress, by the way."
  nuclei="{['paid', 'dress']}" 
/>
