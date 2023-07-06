---
title: 'Checking'
---

<script>
  import Audio from '$lib/Audio.svelte'
  import AudioWrapper from '$lib/AudioWrapper.svelte'
  import Naudio from '$lib/Naudio.svelte'
</script>

## Check with Yes-no rise

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
