---
title: 'Contrastive focus'
---

<script>
  import Audio from '$lib/Audio.svelte'
  import AudioWrapper from '$lib/AudioWrapper.svelte'
  import Naudio from '$lib/Naudio.svelte'
</script>

## A

A particular kind of narrow focus is **contrastive focus**. Here the nuclear accent draws attention to a contrast the speaker is making. Any following material within the same IP is unaccented and forms part of the tail of the IP:

<AudioWrapper>
<Audio 
  sentence="You *may have \/started your essay, | but *have you \finished your essay?" 
  nuclei="{['start', 'fin']}" 
  url="3-10" 
  start=2
  end=7
/>
</AudioWrapper>

In this example the contrast is between _started_ and _finished_. In such cases the repeated, non-contrastive material (here, the second _your essay_) is often replaced by a pronoun, or entirely omitted:

<Naudio
  sentence="You *may have \/started your essay, | but *have you \finished it? <br> You *may have \/started your essay, | but *have you \finished?"
  nuclei="{['started', 'finished']}" 
/>

In the next example, the contrastive focus is between Phillip and Jim:
<Naudio
  sentence="'Philip | can run faster than 'Jim can run. <br> 'Philip | can run faster than 'Jim can. <br> 'Philip | can run faster than 'Jim."
  nuclei="{['Philip', 'Jim']}"
/>
The accent on the first item in the contrast is not necessarily nuclear. It is also possible for everything to be in one IP, thus:
<Naudio
  sentence="*Philip can run faster than 'Jim can. <em>etc</em>."
  nuclei="{['Jim']}" 
/>

## B

Any word can be accented for contrast, including function word. A pronoun, a preposition, virtually any word, can bear the nucleus, if it is contrastive:
<Naudio
  sentence="\/I'm | *writing a letter. || *What are \you doing? <br>
  I *know what \/Peter wants, | but what do \you want? <br>
  It *wasn't \/under the table, | but *actually \on it. <br>
  I can *send a fax \/to him, | but I *can't receive one \from him."
  nuclei="{['I\'m', 'you', 'Pet', 'you', 'und', 'on', 'to', 'from']}" 
/>

## C

Sometimes there is a double contrast. It is then the speaker's choice whether to make both contrasts nuclear, or just one of them:

<AudioWrapper>
<Audio
  sentence="\/You've | got \better, || but \/I | \haven't <em>or</em>"
  nuclei="{['You\'ve', 'bet', 'I', 'have']}"
  url="3-10"
  start=8
  end=11
/>
<Audio
  sentence="*You've got \better, | but *I \haven't"
  nuclei="{['You\'ve', 'bet', 'I', 'have']}"
  url="3-10"
  start=13
  end=16
/>
</AudioWrapper>
or, in a context where getting better is already an implicit or explicit topic of the conversation:
<AudioWrapper>
<Audio
  sentence="\/You've got better, | but \/I haven't"
  nuclei="{['You\'ve','I']}"
  url="3-10"
  start=17
  end=21
/>
</AudioWrapper>

When a radio or TV announcer reports the result of a football match, there is usually a double contrast. One contrast is between the name of the home team and the name of the away team. The other is the contrast between the two scores. So all four words are accented.
<Naudio
  sentence="'Arsenal | 'three, || 'Fulham | 'one. <em>or</em> <br>
  *Arsenal 'three, | *Fulham 'one"
  nuclei="{['Ar', 'three', 'Ful', 'one']}" 
/>
In case of a draw game, however, the score achieved by the second team is a repetition of that achieved by the first - so it is usually treated as repeated (old), and is not accented. So we get:
<Naudio
  sentence="'Arsenal | 'two, || 'Fulham two. <em>or</em> <br>
  *Arsenal 'two, | *Fulham 'two. <em>or even</em> <br>
  *Arsenal two, | 'Fulham two."
  nuclei="{['Ar', 'two', 'Ful']}" 
/>
In the last version the speak has to think ahead, in order to remove focus not only from the repeated item (here, the seconde _two_) but also the item that is going to be repeated (the first _two_ - see [3.8](3.8))

## D

A contrast may be **explicit**, as in the above examples, or **implicit**. If it is implicit, the hearer is left to infer the other term in the contrast:
<Naudio
  sentence="I *don't know what \/you're complaining about"
  nuclei="{['you\'re']}" 
/>
Here there is an implicit contrast between the addressee (_you_) and some other possible complainant who may have better grounds for complaint than the addressee.
<Naudio
  sentence="?? Fruit's terribly expensive these days. <br> - \/Apples aren't too bad."
  nuclei="{['App']}" 
/>
Here there is an implicit contrast with other kinds of fruit, which the second speaker implicitly agrees is indeed expensive.
<Naudio
  sentence="I *love your 'hair"
  nuclei="{['hair']}" 
/>
This example is ambiguous focus. It could be either (i) a broad focus comment, perhaps initiating a new conversation:
<Naudio
  sentence="Hi, Jennifer! How are you today? I *love your 'hair"
  nuclei="{['hair']}" 
/>
or (ii) a narrow focus response, focusing on _hair_, in a situation where _love_ or synonym had already been brought into discussion. For example, it could be a narrow focus response in the conversation exchange:
<Naudio
  sentence="?? What do you like about me? <br> - Well I *love your 'hair"
  nuclei="{['hair']}" 
/>
If, on the other hand, the nucleus were on _love_, the could only be a narrow-focus response in a situation where hair was taken as given.
<Naudio
  sentence="?? But darling, don't you like my hair? <br> - I 'love your hair."
  nuclei="{['love']}" 
/>

## E

Sometimes a pattern of contrastive focus is **lexicalized**. For example, between _'monosyllable_ and _'polysyllable_.

In athletics two of the disciplines are _high jump_ and _long jump_. Here, too, contrastive focus has been lexicalized, and these expressions - despite being grammatically phrases, adjective plus noun - have the fixed stress patterns _'high jump_, _'long jump_. This is maintained in metaphorical uses:
<Naudio
  sentence="*John's in for the 'high jump. (= He'll be punished for what he's done.)"
  nuclei="{['high']}" 
/>
A similar explanation presumably applies to _high school_. Originally there was an implicit contrast with _primary school_ and _elementary school_, but now the pattern is fixed. We see the same thing in _'high street_. The same principle also applies to the phrase the _de'veloping countries_, now is fixed implicit contrast to the \*developed countries.

London Underground lines have lexicalized contrastive focus: the _'Central Line_, the _'Northern Line_
