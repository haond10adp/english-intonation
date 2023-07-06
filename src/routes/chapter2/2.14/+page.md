---
title: 'Tag questions'
---

<script>
  import Audio from '$lib/Audio.svelte'
  import AudioWrapper from '$lib/AudioWrapper.svelte'
  import Naudio from '$lib/Naudio.svelte'
</script>

Tag questions (question tags) are short yes-no questions tagged onto the end of a statement or command. We shall consider their intonation at this point, even though they of course dependent rather than independent intonation phrases.

Most tag questions can be said either with a fall or with a rise, and there is an important difference of tone meaning between these two possibilities.

## Yes-no rise

If a tag question is genuinely asking for information, the tone will be a **yes-no rise**. This allows the speaker to check whether the other person agrees with what he or she has just said. It is open to the other person to agree or disagree:
<AudioWrapper>
<Audio 
  sentence="The *answers is \twenty. | /isn't it? (= Am I right?)" 
  nuclei="{['twen', 'is']}" 
  url="2-14" 
  start=2
  end=4
/>
<Audio 
  sentence="We could *start with the \kitchen, | /couldn't we? (= That's just my suggestion.)" 
  nuclei="{['kit', 'could']}" 
  url="2-14" 
  start=5
  end=8
/>
</AudioWrapper>
<Naudio
  sentence="They *haven't for\gotten, | /have they? (= Can that be the reason they're not here? <br><br> ?? *What does \chaise mean? <br> - Chair, | /doesn't it? <br> ?? *Where are they going to\morrow? <br> - \Leicester, | /aren't they?)"
  nuclei="{['chaise', 'does', 'mor', 'Lei', 'aren\'t', 'got', 'have']}" 
/>

## Insistent fall

The other possibility is an **insistent fall**. With a falling tag the speaker insists assumes or expects that the other person will agree. Rather than genuinely asking for information, the speaker appeals for agreement:
<AudioWrapper>
<Audio 
  sentence="The *view is mag\nificent, | \isn't it? (= I'm sure you agree.)" 
  nuclei="{['nif', 'is']}" 
  url="2-14" 
  start=8
  end=12
/>
<Audio
sentence="We've *been here be\fore, | \haven't we? (= We both know we have.)"
nuclei="{['fore', 'have']}"
url="2-14"
start=12
end=15
/>
</AudioWrapper>
<Naudio
  sentence="*Seven *fives are *thirty&minus;five, | \aren't they? (= You know they are.) <br> Well it's *not very \/good, | \is it? (= You'll agree it's not very good.)"
  nuclei="{['five', 'aren\'t', 'good', 'is']}" 
/>
In some cases the falling-tone tag has the force of an exclamation. Exclamations always have a fall (see [2.17](2.17)):

Notice the difference of tone meaning in the following examples:
<AudioWrapper>
<Audio
sentence="It's \snowing, | \isn't it (= You can see it is)"
nuclei="{['snow', 'is']}"
url="2-14"
start=16
end=18
/>
<Audio
sentence="It's \snowing, | /isn't it (= I can't see, I'm not sure.)"
nuclei="{['snow', 'is']}"
url="2-14"
start=19
end=21
/>
</AudioWrapper>
<AudioWrapper>
<Audio 
  sentence="It's *not \/right, | \is it? (= I'm \sure it's not.)" 
  nuclei="{['right', 'sure']}" 
  url="2-14" 
  start=22
  end=25
/>
<Audio 
  sentence="It's *not \/right, | /is it? (= I'm not sure, I'd like to your views)" 
  nuclei="{['right', 'sure']}" 
  url="2-14" 
  start=26
  end=29
/>
</AudioWrapper>
The effect of a tag with an insistent fall can even be to _force_ the other person agree. It becomes a way of exercising control:
<AudioWrapper>
<Audio
  sentence="?? \/Mummy, | 'can I have some /cake? <br> - We'll have to \see, | \wont' we?"
  nuclei="{['Mum', 'cake', 'see', 'won\'t']}"
  url="2-14"
  start=29
  end=34
/>
<Audio 
  sentence="?? *Why did I only get a \C? <br> - Because you made a *lot of mis\takes, | \didn't you?" 
  nuclei="{['C', 'stakes', 'did']}" 
  url="2-14" 
  start=34
  end=40
/>
</AudioWrapper>

## Constant-polarity

Most tags, as in the examples given so far, reserve the polarity of the clause to which they are attached: that is, if the main clause is positive, the tag is negative; whereas if the main clause is negative, the tag is positive (see [4.10](/chapter4/4.10)). Another kind of tag is the **constant-polarity** tag. Here the main clause is positive and the tag is also positive. Constant-polarity tags, if they have their own tone, always have a **rise**:
<Naudio
  sentence="It's \snowing, | /is it? (\Oh, | I \see.) <br> So you *think you'll \win, | /do you? (\/I don't think you will.)"
  nuclei="{['snow', 'Oh', 'see', 'win', 'do', 'I']}" 
/>
<AudioWrapper>
<Audio 
  sentence="?? What a *lovely dress! <br> - You \like it, | /do you?" 
  nuclei="{['dress', 'like', 'do']}" 
  url="2-14" 
  start=40
  end=44
/>
</AudioWrapper>

## Tag attached to clause types other than statements

Tag attached to clause types other than statements are more restricted in their possibilities.
When attached to an **exclamation**, a tag virtually always has an insistent fall:
<AudioWrapper>
<Audio 
  sentence="*What a sur\prise, | \wasn't it?" 
  nuclei="{['prise', 'was']}" 
  url="2-14" 
  start=55
  end=58
/>
</AudioWrapper>
When attached to a **command**, a tag often comes in the tail (**with a rising tone**) rather than having its own intonation phrase (see [4.10](/chapter4/4.10)):
<AudioWrapper>
<Audio 
  sentence="*Come over /here a minute, will you?"
  nuclei="{['here']}" 
  url="2-14" 
  start=60
  end=63
/>
<Audio 
  sentence="*Open the \window, would you please?" 
  nuclei="{['wind']}" 
  url="2-14" 
  start=64
  end=67
/>
</AudioWrapper>
If the tag after a command does have its own IP, the tone is usually an encouraging rise, giving a softening effect:
<Naudio
  sentence="*Come over \here a minute, | /will you? <br> *Open the \window, | /would you, please? (= 'Would you open the /window?)"
  nuclei="{['here', 'will', 'win', 'would']}" 
/>
After a command, a tag with a fall sounds very insistent. Not all speakers find this construction intonationally well-formed:
<Naudio
  sentence="*Answer the \phone, | \will you? (= *Will you answer the \phone.|| O'bey me im\mediately.)"
  nuclei="{['phone', 'will', 'me']}" 
/>
Tag questions are sometimes included as parentheses within a statement. Usually they have an insistent fall, though a yes-no rise is also possible:
<AudioWrapper>
<Audio 
  sentence="It's \strange, | \isn't it, how she never wants to do her share of the /work." 
  nuclei="{['strange', 'is', 'work']}" 
  url="2-14" 
  start=68
  end=73
/>
</AudioWrapper>
<Naudio
  sentence="We 'find it \difficult, | \don't we, | to 'live a virtuous \life. (= I'm sure you agree.) <br> We 'find it \difficult, | \don't we, | to 'live a virtuous \life (= Or am I wrong?)"
  nuclei="{['dif', 'don\'t', 'life']}"
/>
