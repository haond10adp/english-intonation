---
title: 'Signaling the structure'
---

<script>
  import Audio from '$lib/Audio.svelte'
  import AudioWrapper from '$lib/AudioWrapper.svelte'
  import Naudio from '$lib/Naudio.svelte'
</script>

How does the speaker break the material up into intonation phrases (IPs)? Where do the boundaries between successive IPs go? What determines the number of words that go into a single chunk of tune, a single IP?

To a large extent, the answers are a matter of common sense. Essentially, the intonation structure reflects the grammatical structure. An **intonation break** (= the boundary between two successive intonation phrase) generally corresponds to a syntactic (= grammatical) boundary. We regularly place an intonation break between successive sentences, usually between successive clause, sometimes between successive phrases, and occasionally between successive words. We can even break within a word - though this is unusual and only used for special emphasis. Typical examples:

<Naudio
  sentence="*Milk comes from 'cows. || *Wool comes from 'sheep. <br>
  *Milk comes from 'cows, | and *wool comes from 'sheep. <br>
  'Milk | *comes from 'cows"
  nuclei="{['cows', 'sheep']}" 
/>
Less typical examples:

<Naudio
  sentence="De'licious, | 'cool | 'milk. <br>
  I 'don't | 'like it."
  nuclei="{['li', 'cool', 'milk', 'don\'t', 'like']}" 
/>

Even less typical examples:

<AudioWrapper>
<Audio 
  sentence="'Abso|'lutely | 'de|'licious! <br>"
  nuclei="{['Ab', 'lute', 'de', 'lic']}" 
  url="4-1" 
  start=3
  end=6
/>
<Audio 
  sentence="'Bor|'ing!" 
  nuclei="{['Bor', 'ing']}" 
  url="4-1" 
  start=8
  end=10
/>
</AudioWrapper>
We also use intonation breaks to signal boundaries of parenthetic material within a larger structure:

<Naudio
  sentence="'Milk, | I be'lieve, | *comes from 'cows."
  nuclei="{['Milk', 'lieve', 'cows']}" 
/>

Chunking (tonality) appears to function in much the same way in all languages, and does not seem to give much difficulty to learners of EFL.

The presence or absence of intonation breaks, and their location, signals to the hearer the syntactic structure of the sentence. Sometimes this structure is potentially ambiguous, and the tonality can disambiguate it. An intonation break signals a syntactic boundary:

<Naudio
  sentence="(i) *Help keep the 'dog off! (= Help to keep the dog off.) <br>
  (ii) 'Help! *Keep the 'dog off! (= I ask for help! Keep the dog off.) <br><br>
  (i) *What's that in the road a'head? <br>
  (ii) *What's that in the 'road? | A'head?"
  nuclei="{['dog', 'Help', 'dog', 'head', 'road']}" 
/>

<Naudio
/>

<AudioWrapper>
<Audio 
  sentence="?? *Do you like 'pawpaw? 
  <br> - (i) I'm 'sorry, | I *don't 'know. (= I've never tried it.)
  <br> - (ii) I'm 'sorry, | I 'don't, | 'no. (= I don't like it.)"
  nuclei="{['paw', 'know', 'sor', 'don\'t', 'no']}" 
  url="4-1" 
  start=13
  end=27
/>
</AudioWrapper>

Versions (i) have a single IP while versions (ii) have two. The difference in meaning is obvious, and signaled phonetically by the use of shorter intonation patterns rather than one longer one.

<AudioWrapper>
<Audio 
  sentence="(i) You can have 'cheese | 'salad | or 'quiche."
  nuclei="{['cheese', 'sal', 'quiche']}" 
  url="4-1" 
  start=29
  end=32
/>
<Audio 
  sentence="(ii) You can have *cheese 'salad | or 'quiche." 
  nuclei="{['sal', 'quiche']}" 
  url="4-1" 
  start=33
  end=36
/>
<Audio 
  sentence="(iii) You can have *cheese salad or 'quiche." 
  nuclei="{['quiche']}" 
  url="4-1" 
  start=37
  end=40
/>
</AudioWrapper>
Here, version (i) offers a list of three possibilities. In version (ii) the list equally clearly consists of two possibilities. Version (iii) is ambiguous: it is not clear whether there are two items in the list or three.

<Naudio
  sentence="(i) *This will give teachers 'time | to pre*pare and mark 'work. <br>
  (ii) *This will give teachers time to pre'pare | and *mark 'work."
  nuclei="{['time', 'work', 'pare']}" 
/>
Here, version (i) is ambiguous. Do the teachers get time to prepare work and to mark work, or to prepare (in general) and to mark work? That is, is _work_ the grammatical object of _prepare_ as well as _mark_, or just _mark_? In version (ii) the intonation break after _prepare_ makes it clear that the second interpretation is intended.

<Naudio
  sentence="(i) I was *talking to a chap I met in the 'pub. <br>
  (ii) I was *talking to a 'chap I met | in the 'pub."
  nuclei="{['pub', 'chap']}" 
/>
Here, in version (i) _met in the pub_ goes together: I met the chap in the pub. In version (ii) the listener is pushed towards a different interpretation, in which _in the pub_ goes with _talking_: I was talking to him in the pub.

<Naudio
  sentence="I'll *talk to the students in the 'garden. <br>
  I'll *talk to the 'students | in the 'garden."
  nuclei="{['gar', 'stu']}" 
/>
Here, version (i) is ambiguous. It could mean either "I'll those students who are in the garden' or "I'll talk to the students. I'll do so in the garden." With version (ii) the second interpretation is more likely.

<Naudio
  sentence="(i) *Look at that dog with one 'eye! <br>
  (ii) *Look at that 'dog | with *one 'eye!"
  nuclei="{['eye', 'dog']}" 
/>
This is also ambiguous, but - differently from the previous cases - the ambiguity cannot be resolved by intonation. Only common sense tells us what it means. "There's a dog with one eye. Look at it!", not "Use one eye to look at that dog."

It is not only the presence or absence of an intonation break that can resolve a possible ambiguity, but also its location.

<AudioWrapper>
<Audio 
  sentence="(i) The com*petitors who 'finished | *first received a 'goody bag." 
  nuclei="{['fin', 'good']}" 
  url="4-1" 
  start=42
  end=46
/>
<Audio 
  sentence="(ii) The com*petitors who finish 'first | re'ceived a 'goody bag." 
  nuclei="{['first', 'good']}" 
  url="4-1" 
  start=47
  end=51
/>
</AudioWrapper>

-- Here, the adverb _first_ goes with _finished_ in (i), but with _received_ in (ii). In (i) all competitors first got a goody bag (and then perhaps were given sandwich or offered a massage). In (ii) only the front runners got the goody-bag, not those who finished later. The intonation break marks the end of the relative clause and hence the end of the noun phrase that is the subject of the verb _received_.

In the case of simple **lists**, grammarian differs over how many commas should be used (_A, B, and C_ or _A, B and C_). Intonationally, all the list items tend to be treated equally: either none of them is followed by an intonation break (_A B and C_) or they all are (_A | B | and C_). There is in any case usually an intonation break at the end of the list.

<Naudio
  sentence="The flags are *red, white and 'blue. <br>
  The flags are 'red, | 'white, | and 'blue'."
  nuclei="{['blue', 'red', 'white']}" 
/>
Version (i) favours the interpretation that each flag has three colors. With version (ii), the interpretation might be that some flags are red, some white, and some blue. The intonation does not actually resolves the ambiguity - both versions remain ambiguous - but it does push the hearer in one direction or the other.

<Naudio
  sentence="(i) On *Mondays Tuesdays and 'Wednesdays | it's at 'six. <br>
  (ii) On 'Mondays, | 'Tuesdays, | and 'Wednesdays | it's at 'six."
  nuclei="{['Wed', 'six', 'Mon', 'Tues', 'Wed']}" 
/>
In all these cases, the intonation break signals the presence of a syntactic boundary at the same place. Intonation parallel syntax.

Thus tonality in speech plays a role similar to the role of punctuation in writing. Intonation breaks often correspond to punctuation marks. However, the two do not always go parallel.

There are many cases where a punctuation mark is used, but an intonation break is optional or even unlikely. In particular, little words such as _well, yes, no, oh_ at the beginning of a sentence, although set off by a comma in writing, are not usually followed by an intonation break in speech:

<Naudio
  sentence="Oh, I *quite under'stand. <br>
  Well, I'm *not 'sure. <br>
  No, I 'love it."
  nuclei="{['stand', 'sure', 'love']}" 
/>

Sometimes an optional punctuation mark corresponds to an optional intonation break:
<Naudio
  sentence="(i) In *August I come in 'late. <br>
  (ii) In 'August, | I *come in 'late."
  nuclei="{['late', 'Au']}" 
/>
Both versions are equally possible and perhaps equally probable.

Some of the final adverbials given in the first list at [3.24](/chapter3/3.24) are preceded by a comma in writing but have no intonation break in speech: _then, though, even, you know_:

<Naudio
  sentence="We'll *see you on 'Tuesday, then. <br>
  It *hasn't stop him 'smoking, though. <br>
  The *bride looked 'beautiful, | 'radiant, even. <br>
  Her *health's pretty 'poor, you know."
  nuclei="{['Tues', 'smok', 'beau', 'rad', 'poor']}" 
/>

Conversely, there are many circumstances (some of them discussed below) where an intonation break can occur but there is no punctuation mark:

<Naudio
  sentence="The *late Mrs 'Jenkinson | *didn't a'gree."
  nuclei="{['Jen', 'gree']}" 
/>
