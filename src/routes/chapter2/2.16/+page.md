---
title: 'Checking'
---

<script>
  import Audio from '$lib/Audio.svelte'
  import AudioWrapper from '$lib/AudioWrapper.svelte'
  import Naudio from '$lib/Naudio.svelte'
</script>

## Check with Interjection yes-no rise

If while you are speaking you want to check whether you have said the right thing, or whether your hearer has understood what you said, you can use an interjection such as _OK?_ or _right_. These interjections are a kind of yes-no question, and are accordingly usually said with a yes-no rise:
<Naudio
  sentence="I'll *get in touch with \Martin, | /right? <br> You can *have it to\morrow, | *all /right? <br> I'll pay you \back, | *O/K? (<em>compare</em> I'll pay you \back. || Is *that O/K?)"
  nuclei="{['Mar', 'right', 'mor', 'back', 'K']}" 
/>
In some varieties of English various other such interjections are used - thogh not in mainstream British standard English:
<Naudio
  sentence="I'll *do it to\morrow, | /yeah? <br> You *think you're \clever, | /huh? <br> *Why did you \do it, /eh?"
  nuclei="{['mor', 'yeah', 'clev', 'huh', 'do', 'eh']}" 
/>

## Check with Pardon-question rise

To ask another speaker to repeat something because you did not hear it properly, you can say _What?_ or _Sorry?_ or _Pardon?_, with a rise. We call this tone meaning a **pardon-question rise**.
<Naudio
  sentence="?? *Could you turn the /music down? <br> - /What? <br><br>
  ?? *Would you pass me the /salt? <br> - /Pardon? <br><br>
  ?? We could *ask \/Millington. <br> - /Eh? | /What did you say? "
  nuclei="{['mu', 'What', 'salt', 'Par', 'Mil', 'Eh', 'What']}" 
/>
<Audio 
  sentence="?? I *want to \tell you something. <br> - You /what? (= I can't \hear you.)" 
  nuclei="{['tell', 'what', 'hear']}" 
  url="2-16" 
  start=2
  end=6
/>
With a pardon question you can query either the entire previous utterance, as in the examples just given, or just one element in it. In either case, the tone is the pardon-question rise:
<Naudio
  sentence="?? I *chose \Thora. <br> - /Who? <br><br>
  ?? *This is \Mel <br> - /Nell? <br><br>
  ?? Are we *going to /win? <br> - Are we *going to /win? | Of \course we are!"
  nuclei="{['Tho', 'Who', 'Mel', 'Nell', 'win', 'course']}" 
/>
A typical conversational interchange might go as follows. Speaker A makes a statement, perhaps with an implicational fall-rise. Speaker B didn't quite catch it, and utters an interjection with a pardon-question rise. Speaker A repeats what he said, this time with a definitive fall:
<Naudio
  sentence="A: The \/cruise documents have come. <br>
  B: Huh? <br>
  A: (I said,) | the \cruise documents have come."
  nuclei="{['cruise', 'Huh', 'said']}" 
/>
The following conversation interchange is similar. But here speaker A asks a yes-no rise question. B asks a pardon question. When A repeats his yes-no question, again he switches to an insistent fall tone:
<AudioWrapper>
<Audio
  sentence="A: Has *Mrs /Partington been in? <br>
  B: /Sorry? <br>
  A: Has *Mrs \Partington been in?"
  nuclei="{['Par', 'Sorry']}"
  url="2-16"
  start=9
  end=16
/>
</AudioWrapper>

A different kind of pardon question is **please-repeat wh question**, which involves changing the focused element into a question word. The tone is always a rise. In the simplest form of please-repeat wh question there is no fronting of the question word:
<AudioWrapper>
<Audio 
  sentence="?? She *took a \tonga. <br><br> - <em>She *took a /what?</em> <br>- She did /what? <br> - She /what?" 
  nuclei="{['tong', 'what']}" 
  url="2-16" 
  start=25
  end=29
/>
</AudioWrapper>
Alternatively the wh word maybe fronted. If so, it still bears the nucleus and has the rising tone.
<Naudio
  sentence="?? She *took a \tonga. <br><br> - /What did she take? <br> - /What did you say she took?"
  nuclei="{['tong', 'What']}" 
/>
Any element of the first speaker's utterance may be queried in this way. The nucleus always goes on the question word:
<Naudio
  sentence="?? *Martin's lost his \cat. <br><br> - /Who's lost his cat? <br> - *Martin's done /what? <br> - *Martin's done /what to his cat? <br> - *Martin's lost his /what?"
  nuclei="{['Who', 'what', 'cat']}" 
/>
Broad-focus(see [3.9](/chapter3/3.9)) pardon questions request a repetition of everything the other speaker has just said. Like repetition wh questions, they have a pardon-question rise on the question word.
<Naudio
  sentence="?? She *took a \tonga <br><br> - /What was that again? <br> - /What did you say? <br> - /What? <br> - /Sorry?"
  nuclei="{['tong', 'What', 'Sor']}" 
/>
On the other hand, if the speaker asks not for a repetition but for a clarification, we have an ordinary wh question (see [5.9](/chapter5/5.9)), which will most likely be said with a definitive fall:
<Naudio
  sentence="?? She *took a \tonga. <br> - *What's a \tonga?"
  nuclei="{['tong']}" 
/>
The difference between the definitive fall on a wh question and the pardon-question rise using the same syntax is seen in this pair of examples:
<Naudio
  sentence="(i) *Sophie's brought her \friend along. <br> - \Who? (= \which friend?) <br><br> (ii) *Sophie's brought her \friend along. <br> /Who? (= /who has?)"
  nuclei="{['friend', 'Who', 'which', 'who']}" 
/>
The appropriate answers to _who?_ in (i) is the friend's name. The appropriate answer to _who?_ in (ii) is _Sophie_.

## Check with Interpretation yes-no rise

To check whether you have understood the other speaker correctly, you can suggest an interpretation, to see if it is correct. This too requires a rise: it is a kind of yes-no question, and takes a yes-no rise.
<Naudio
  sentence="?? We'll *need some \vegetables. <br> - /Carrots? (= D'you mean /carrots?) <br><br>
  ?? It'll cost *quite a \/lot. <br> - A /thousand? <br><br>
  ?? I was *talking to my \friend the other day. <br> - /Mary? (= By 'friend', do you mean Mary?)"
  nuclei="{['veg', 'Car', 'lot', 'thou','car', 'friend', 'Mar']}" 
/>

## Check with Echo question rise

An echo question uses some or all of the same words as used by the previous speaker, but with a pardon-question rise. This may be a simple request for repetition or clarification, or it may also express surprise and amazement at what the other speaker has said:
<Naudio
  sentence="?? You'll *have to do it a\gain. <br><br> - I'll *have to do it a/gain? <br> - Do it a/gain? <br> - A/gain?"
    nuclei="{['gain']}"
/>
<AudioWrapper>
<Audio
  sentence="?? They've *finished the \job. <br> - *Finished the /job?"
  nuclei="{['job']}"
  url="2-16"
  start=17
  end=20
/>
</AudioWrapper>
<Naudio
  sentence="?? Have you *got your /pen? <br> - My /pen? <br><br>
  ?? *Where's the \bathroom? <br> - The /bathroom?"
  nuclei="{['pen', 'bath']}" 
/>
There may be broad focus, querying the whole of the previous speaker's utterance, or narrow focus on some particular element. In the latter case the nucleus may be placed on a different item than the one on which the previous speaker placed it, often with ellipsis of some of the words:
<Naudio
  sentence="?? You'll *have to do it a \gain. <br> - /I'll have to? <br><br>
  ?? They've *finished the \job. <br> - /Finished it? <br><br>
  ?? She's *seeing him to\morrow. <br> - /Seeing him?"
  nuclei="{['gain', 'I\'ll', 'job', 'Fin', 'mor', 'See']}" 
/>
It is also possible to query two or more words individually, placing a pardon-question rise nucleus on each:
<AudioWrapper>
<Audio
sentence="?? I was talking James \Smith <br> - /James | /Smith?"
nuclei="{['Smith', 'James']}"
url="2-16"
start=21
end=25
/>
</AudioWrapper>
<Naudio
  sentence="?? You'll need a digital \camera. <br> - A /digital | /camera?"
  nuclei="{['cam', 'dig']}" 
/>
A special type of echo question is **second-order question**. Which echoes the other speaker's question to query it, perhaps with narrowed focus:
<Naudio
  sentence="?? Have you *got your /pen? <br> - Have /I got my pen? <br><br>
  ?? *Where did it \happen? <br> - /Where? | Or \when?"
  nuclei="{['pen', 'I', 'hap', 'Where', 'when']}" 
/>
