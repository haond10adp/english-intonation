---
title: 'Chunking the grammar'
---

<script>
  import Audio from '$lib/Audio.svelte'
  import AudioWrapper from '$lib/AudioWrapper.svelte'
  import Naudio from '$lib/Naudio.svelte'
</script>

As we have just seen, the speaker has considerable discretion over the size and therefore the number of intonation phrases into which to divide the spoken message. Nevertheless, there are some strong tendencies exerted by the grammar over tonality. Some components of syntactic structure are more likely than others to be made into separate IPs, set off by intonation breaks.

First, there is normally an intonation break at every **sentence** boundary. This is a major break (||), more important than the intonation breaks within sentence:

<Naudio
  sentence="Now *here is the 'news. || It has *been an'nounced | that... <br>
  *That's the end of Part 'One. || In *Part 'Two, | we shall... <br>
  'Stop! || You're *going to hit the 'wall."
  nuclei="{['news', 'nounced', 'One', 'Two', 'Stop', 'wall']}" 
/>

A second basic rule is that each **clause** tend to be said as a separate IP. So if a sentence consists of several clauses, there will usually be an intonation break at each clause boundary:

<Naudio
  sentence="*When I 'cough | it *hurts my 'throat. <br>
  *First take the 'lid off, | and *then unscrew the 'base. <br>
  I'll 'tell you, | but you must *keep it a 'secret."
  nuclei="{['cough', 'throat', 'lid', 'base', 'tell', 'se']}" 
/>
In general, the speaker can insert an intonation boundary anywhere where it will make the grammatical structure clearer. An intonation boundary signals a boundary between syntactic constituents. In the next example, version (i), pronounced as a single IP, is ambiguous:

<AudioWrapper>
<Audio 
  sentence="He was *looking up the 'street." 
  nuclei="{['street']}" 
  url="4-2" 
  start=7
  end=9
/>
</AudioWrapper>
This can mean either "his gaze was directed up the street" (like _he was gazing up the street_, where _up_ is preposition) or "he was searching for the street in the list" (like _he was looking up the name_, with _look up_ as a phrasal verb). The speaker can resolve ambiguity by placing an intonation boundary as appropriate, (ii) or (iii):

<AudioWrapper>
<Audio 
  sentence="(ii) He was 'looking | up the 'street." 
  nuclei="{['look', 'street']}" 
  url="4-2" 
  start=10
  end=12
/>
<Audio 
  sentence="(iii) He was *looking 'up | the 'street" 
  nuclei="{['up', 'street']}" 
  url="4-2" 
  start=13
  end=15
/>
</AudioWrapper>
In a very mannered version, however, with intonation boundaries in both places, the ambiguity returns:

<AudioWrapper>
<Audio 
  sentence="(iv) He was 'looking | 'up | the 'street." 
  nuclei="{['looking', 'up', 'street']}" 
  url="4-2" 
  start=16
  end=19
/>
</AudioWrapper>
If a new sentence involves a change of grammatical subject, the subject (particularly if it's not a pronoun) tends to have its own IP:

<Naudio
  sentence="We'll ar*rive at about 'ten. || The 'children | can *come along 'later "
  nuclei="{['ten', 'chid', 'lat']}" 
/>
There is usually an intonation break between coordinate clauses:

<Naudio
  sentence="He *turn 'round | and a *strange 'sight confronted him."
  nuclei="{['round', 'sight']}" 
/>
If, however the subject of coordinate clauses is ellipted, there is usually no intonation break:

<Naudio
  sentence="She was *sitting and 'thinking. <br>
  Peter *likes him and 'trusts him. <br>
  <em>(less usual)</em> *Peter 'likes him | and 'trusts him."
  nuclei="{['think', 'trusts', 'likes']}" 
/>
Where the object or some other complement is ellipted, again there is usually no intonation break after the first verb, providing the subject is unchanged:

<Naudio
  sentence="Peter *likes and 'trusts him."
  nuclei="{['trusts']}" 
/>

<AudioWrapper>
<Audio 
  sentence="I've *washed and iron the 'clothes. (= I've washed them and ironed them.)" 
  nuclei="{['clothes']}" 
  url="4-2" 
  start=20
  end=23
/>
</AudioWrapper>
Inserting an intonation break in the last example would suggest reading with no ellipted object:

<AudioWrapper>
<Audio 
  sentence="I've 'washed | and *ironed the 'clothes. (= I've got washed, <em>or</em> I've done the washing and I've done the ironing.)" 
  nuclei="{['washed', 'clothes']}" 
  url="4-2" 
  start=23
  end=26
/>
</AudioWrapper>
In coordinate clauses with different subjects and verbs but an ellipted object, as in the next example, an intonation break after each verb is virtually compulsory:

<Naudio
  sentence="Mary's pre'pared, | and we've *all just 'eaten, | a de*licious 'meal."
  nuclei="{['pared', 'eaten', 'meal']}" 
/>
The structure here is that Mary prepared a delicious meal, and we've all just eaten it. The NP a _delicious meal_ is the object of both verbs.

Simple structures like the following count as a single clause, and are usually said with a single IP.

<Naudio
  sentence="I want to a'pologize. <br>
  I think he's 'wrong. <br>
  He said he was 'sorry. <br>
  I hope you haven't for'gotten."
  nuclei="{['pol', 'wrong', 'sor', 'got']}" 
/>
