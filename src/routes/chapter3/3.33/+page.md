---
title: 'Knowledge shared, common and imputed'
---

<script>
  import Audio from '$lib/Audio.svelte'
  import AudioWrapper from '$lib/AudioWrapper.svelte'
  import Naudio from '$lib/Naudio.svelte'
</script>

Material is often placed out of focus because it is 'given' by the content in which it is uttered, even if the deaccented words have not themselves already been used. That is to say, the ideas expressed are implicitly treated as already known by both speaker and addressee (**shared** knowledge) and perhaps people in general (**common** knowledge).

Train announcements on London Underground are a good example. Between stations, you may hear a recorded voice announce:

<AudioWrapper>
<Audio 
  sentence="'This train | *terminates at 'Edgware." 
  nuclei="{['This', 'Edg']}" 
  url="3-32" 
  start=12
  end=15
/>
</AudioWrapper>
The word *train* is not accented, because the announcement is made in a train, and you, the hearer, know you are in a train. Hence, _train_ is not new information: it is shared knowledge. I can be left out-of-focus. As you approach a station you may hear:

<Naudio
  sentence="The 'next station | is 'Oval."
  nuclei="{['next', 'O']}" 
/>
Here, _station_ is not accented. Why? Because everyone knows the train stops at station. So _station_ is not new information: it is common knowledge. It can be left out-of-focus. After a short time, as the train comes to a standstill, you hear:

<Naudio
  sentence="'This station | is 'Oval."
  nuclei="{['This', 'O']}" 
/>
You know you have reached a station: so again _station_ is shared knowledge, which does not need to be accented. On the other hand you may well have forgotten or not notice the previous announcement, so the actual name of the station, _Oval_, counts as new and is placed in focus, so attracting the nucleus for a second time.

It must be admitted that there are various cases where an item in which might logically be supposed to be common knowledge is nevertheless focused on by the speaker. For example, the speaker and the hearer might already know that Mary was a girl, and yet the speaker could say:

<Naudio
  sentence="'Mary's | a *very nice *girl."
  nuclei="{['Mar']}" 
/>
On hearing some report or news item, we can comment:

<Naudio
  sentence="That's *not a good 'news"
  nuclei="{['news']}" 
/>
As a comment on the weather we can say:

<Naudio
  sentence="It's a *beautiful 'day"
  nuclei="{['day']}" 
/>

We suggested above [3.6](3.6) that the explanation is that the noun in above examples is not part of the linguistic context. Alternatively, rather than seek a logical explanation for this tonicity, perhaps we should regard such cases as merely idiomatic.

A speaker may locate the nucleus in such a way as to imply that something is shared or common knowledge or given information, even if there is no evidence that this is the case. For instance, someone might say:

<Naudio
  sentence="It *won't make the 'slightest difference, | but I shall *write and com'plain"
  nuclei="{['slight', 'plain']}" 
/>
This seems to imply that the hearer already knows that it won't make a difference. The speaker **imputes** this knowledge to the hearer. This follows from the fact that the word _difference_ is out of focus. The focus is on _slightest_, implying the only matter at issue is the extend of the difference. The speaker forces this implication on the hearer.

<Naudio
  sentence="It *won't make the slightest 'difference"
  nuclei="{['dif']}" 
/>
Accenting thus make it possible for the speaker to impute knowledge and opinions to the addressee - to involve the addressee in a conspiracy, as it were and thus manipulate the direction of the conversation without ever putting the implications directly into words.

In certain styles of conversation the nucleus is readily placed on **intensifying word**, even though there maybe further ostensibly new material to follow. By 'intensifying words' we mean not only adverbs of degree (_very, extremely_) and their equivalents (_awfully, remarkably_) but also various other expressions whose effect is to heighten emotion of what is expressed. Arguably, by focusing on intensifying word, as with _slightest_ above, the speaker is imputing to the hearer implicit knowledge of the out-of-focus material located in the tail of the intonation pattern - or at least treating it as background material that can be left out of focus.

<Naudio
  sentence="*That's 'very interesting! <br>
  I was ex'tremly annoyed with them. <br>
  He had a *quite in'credible piece of luck. <br>
  I *know e'xactly what you mean. <br>
  The *come in 'all shapes and sizes."
  nuclei="{['very', 'trem', 'xact', 'cred', 'all']}" 
/>
Ironical exclamations such as:

<AudioWrapper>
<Audio 
  sentence="*That's \all I need! (= I wish that hadn't happened.)" 
  nuclei="{['all']}" 
  url="3-32" 
  start=16
  end=18
/>
</AudioWrapper>
can perhaps be seen in this light.

It is of course also possible (and perhaps more usual) to place an additional nuclear tone in the usual place, namely on the last lexical item. This alternative version does not impute to the listener the knowledge expressed in this item.

<Naudio
  sentence="*That's 'very | 'interesting! <br>
  I was ex'tremly | an'noyed with them."
  nuclei="{['very', 'in', 'trem', 'noyed']}" 
/>
