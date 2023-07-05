---
title: 'Yes , no and elliptical answers'
---

<script>
  import Audio from '$lib/Audio.svelte'
  import AudioWrapper from '$lib/AudioWrapper.svelte'
  import Naudio from '$lib/Naudio.svelte'
</script>

The **answer** to a yes-no question is usually not a complete statement. Rather, it is just _yes_ or _no_ (or an equivalent). Quite often, we support the _yes_ or _no_ by an elliptical verb phrase. Or we may just use the elliptical verb phrase on its own:
<AudioWrapper>
<Audio sentence="?? Do you know Peter? <br><br> - Of \course. <br> - Yes, I \do. <br> - Of \course I know Peter! <br><br> - \Yes. <br> - \Sure. <br> - I \do <br> - Of \course I do!" nuclei="{['Yes', 'Sure', 'course', 'do']}" url="2-10" start=2 end=18 />
</AudioWrapper>

<Naudio sentence="?? Have you ever been to Minsk? <br><br> - \No. <br> - \Never. <br> - Of \course not. <br> - \No, | I \haven't. <br> - I \haven't, | /actually. <br> - I don't think I \have. <br> - Of \course I haven't. <br> - No I \haven't been to Minsk." nuclei="{['No', 'Nev', 'course', 'have', 'ac']}" />

The tone for these answers maybe any of the tones that can be used in full statements. Typically, it will be a definitive fall; but other tones are possible:
<Naudio sentence="?? Are you going to object? <br><br> - (\Yes,) | I \am <br> - (/Yes,) | I /am (...and I'll tell you \why.) <br> - (\/Yes,) | I \/am (...| though 'not im\/mediately.)" nuclei="{['Yes', 'am', 'why', 'me']}" />
<Naudio sentence="?? Have you done your homework? <br><br> - (\No,) | I \haven't. <br> - (/No,) | I /haven't. (...and I'm not \going to.) <br> - (\/No.) | I \/haven't. (but I \/will.)" nuclei="{['No', 'have', 'go', 'will']}" />
<AudioWrapper>
<Audio sentence="?? Do you sell stamps? <br><br> - We /do. <br> - \Yes, | we \do. <br> - Well we \/do. (... | but we've *sold \out.)" nuclei="{['do', 'Yes', 'out']}" url="2-10" start=19 end=35 />
</AudioWrapper>

:::note
These grammatical patterns can be used not only to answer a direct question but also to express our agreement with what the other person is saying, or alternatively to contradict them.
:::

## Use a fall for agreement

A straightforward agreement typically uses a fall:
<Naudio sentence="?? So you've done your homework. <br><br> - \Yes. <br> - I *certainly \have. <br> - Yes, | I \have. <br> - Of \course I have. <br> - \/Yes. (...but not \/all of it.) <br><br><hr> ?? Look, | it's snowing. It wasn't very good. <br><br> - *So it \is, | \isn't it? <br> - \No. (= You're right, it wasn't.) <br> - It *definitely \wasn't. <br> -\No, | it \wasn't. <br> -\/No. (....though it *wasn't \/hopeless.)" nuclei="{['Yes', 'have', 'course', 'all', 'is', 'No', 'was', 'hope']}" />

## Use a rise to contradict

To contradict what the other person says, it is possible to use a definitive fall or tentative fall-rise; but the most usual tone is a rise:
<AudioWrapper>
<Audio 
  sentence="?? You haven't brought the milk <br> - I /have." 
  nuclei="{['have']}" 
  url="2-10" 
  start=35 
  end=39 />
<Audio 
  sentence="?? It was brilliant. <br> - It /wasn't." 
  nuclei="{['was']}" 
  url="2-10" 
  start=40 
  end=43 />
</AudioWrapper>

If we put _(oh) yes_ or _(oh) no_ before the elliptical verb phrase in a contradiction, English has fixed idiomatic tone patterns, and in particular disallows a sequence of two falls. (you cannot contradict a negative statement by saying _yes_ alone). **This pattern is used only to contradict a statement, not to answer a question**
<AudioWrapper>
<Audio
  sentence="?? You haven't brought the milk! <br><br> - \Yes, | I /have. (= You're wrong.) <br> - \Oh yes, | I /have. <br> - Yes I \/have. <br> - <em>(not x)</em> \Yes I \have."
  nuclei="{['Yes', 'Oh', 'have']}"
  url="2-10"
  start=43
  end=46
/>
<Audio 
  sentence="?? It was brilliant. <br><br> - \No, | it /wasn't! (= You're wrong.) <br> - \Oh no, | it /wasn't. <br> - No it \/wasn't. <br> - <em>(not x)</em> \No, | it \wasn't." 
  nuclei="{['No', 'was', 'Oh']}" 
  url="2-10" 
  start=47
  end=50
/>
</AudioWrapper>
<Naudio
  sentence="?? Do you sell stamps? <br> - <em>(not x)</em> \Yes | we /do."
  nuclei="{['Yes', 'do']}" 
/>

Contradictions can also be said with a definitive fall: the difference is that a (high) fall implies warmth and solidarity with the other person - i.e. is supportive - while the rise implies defensiveness and unfriendliness - that is, it is unsupportive:
<Naudio
  sentence="?? You haven't paid the coffee. <br> - I \have! (= It's OK, nothing's wrong.) <br><br> ?? You haven't paid the coffee. <br> - I /have (= Don't accuse me wrongly.)"
  nuclei="{['have']}" 
/>
