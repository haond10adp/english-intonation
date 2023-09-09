---
title: "Reusing the other speaker's words"
---

<script>
  import Audio from '$lib/Audio.svelte'
  import AudioWrapper from '$lib/AudioWrapper.svelte'
  import Naudio from '$lib/Naudio.svelte'
</script>

Sometimes one person in a conversation echoes back words that another speaker has just used. Since the second speaker wishes to comment on this material, or to query it, naturally he accents it:

<Naudio
  sentence="?? I *can't \stand | /whisky. <br> - you *can't stand /whisky? <br><br>
  ?? We're having \strawberries | for /tea. <br> - \Ooh, | \strawberries!"
  nuclei="{['stand', 'whis', 'straw', 'tea', 'Ooh']}" 
/>
See discussion above, [2.16](/chapter2/2.16) (pardon questions, second order questions, please repeat wh questions).

Sometimes the echoed word, although repeated, nevertheless clearly conveys new information:

<Naudio
  sentence="?? You *say your name's /Smith? <br> - \Yes, | \Smith. <br><br>
  ?? Would you like *coffee or \tea? <br> - \Tea, please. <br><br>
  ?? Was the thief *tall or \short? <br> - \Oh, | *definitely \tall."
  nuclei="{['Smith', 'tea', 'Tea', 'short', 'tall', 'Oh', 'Yes']}" 
/>
In these examples the first speaker asks the second for information. Supplying that information involves repeating a word just used by the first speaker. Thus the same word is reused by the second speaker, and the information it conveys is new. So it has to be brought into focus. Compare:

<Naudio
  sentence="?? Was the thief *tall or \short? <br> - Well \/fairly tall."
  nuclei="{['short', 'fairly']}" 
/>
Here, instead, the second speaker takes tallness as given and puts contrastive focus on the qualification _fairly_.

We can also echo the other's speaker's word and comment on them:

<Naudio
  sentence="?? *What three times \five? *Fif/teen? <br> - *Fif\teen, | that's /right. <br><br>
  ?? So you're *going to \emigrate. <br> - \Emigrate, | \yes."
  nuclei="{['five', 'teen', 'em', 'Em', 'yes', 'right']}" 
/>
In the next example, there are two possibilities for the second speaker:

<Naudio
sentence="\/Sorry , | I'm *on a \diet. <br>
<br> - (i) But if you *eat \/chocolate, | *how can you be on a \diet? 
<br> - (ii) But if you *eat \/chocolate, | *how \can you be on a diet?"
nuclei="{['Sor', 'di', 'choc']}"
/>
One possibility, (i), is to repeat the first speaker's accent pattern, placing the nucleus on _diet_. The other, (ii), is to deaccent _diet_ as given, and to place nucleus on _can_.
