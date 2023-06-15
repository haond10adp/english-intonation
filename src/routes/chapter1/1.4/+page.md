---
title: 'The three Ts: a quick overview of English intonation'
---

<script>
  import Audio from '$lib/Audio.svelte'
  import AudioWrapper from '$lib/AudioWrapper.svelte'
  import Naudio from '$lib/Naudio.svelte'
</script>

As concerns intonation, speakers of English repeatedly face three types of decision as they speak. They are: how to break the material up into chunks, what to be accented, and what tones are to be used. These linguistic intonation systems are know respectively as tonality, tonicity, and tone. We refer to them as three Ts.

## A. Tonality

**Tonality**. The first matter a speaker has to decide is the division of the spoken material into chunks. There will be an intonation pattern associated with each chunk. These chunks are know as **intonation phrases** or or **IPs**. Each IP in an utterance has its own intonation pattern (or 'tune'). (Various authors use various other names for the IP, including 'word group', 'tone group', and 'intonation group). In general, we make each clause into a separate IP. (The symbols | and || represent the boundaries between IPs.)

<Naudio>Because I love languages | I'm studying intonation. || When I've finished this book, | I'll know a lot about it.</Naudio>

However, the speaker does not inevitably have to follow the rule of an IP for each clause. There are many cases where different kinds of chunking are possible. For example, if a speaker wants to say _We don't know who she is_, it is possible to say the whole utterance as a single IP (= one intonation pattern):
<AudioWrapper>
<Audio url='1-4' sentence="We don't know who she is." start=3 end=5/>
</AudioWrapper>
But it is also possible to divide the material up, in at least the following possible ways:
<AudioWrapper>
<Audio url='1-4' sentence="We don't know | who she is." start=6 end=9/>
<Audio url='1-4' sentence="We | don't know who she is." start=9 end=12/>
<Audio url='1-4' sentence="We don't | know who she is." start=12 end=15/>
<Audio url='1-4' sentence="We | don't know | who she is." start=15 end=18/>
</AudioWrapper>
Thus the speaker may present the material as two, or three, pieces of information rather than as a single piece. This is **tonality** (or **chunking**) and is the topic of chapter 4.

## B. Tonicity

**Tonicity**. Speakers use intonation to highlight some words as important for the meaning they wish to convey. These are the words on which the speaker **focuses** the hearer's attention. To highlight an important word we **accent** it. More precisely, we accent its stressed syllable (or one or both of its stressed syllables if it has more than one). That is to say, we add pitch prominence (= a change in pitch, or the beginning of a pitch movement) to the rhythmic prominence that a stressed syllable bears. The accents result are also the 'hooks' on which the intonation pattern is hung.

Which words are to have attention drawn to them by being accented? And which are not to be focused in this way? In particular, where is the speaker to locate the last accent (the **nucleus**) within the intonation phrase? The nucleus is the most important accent in the IP. In indicates the end of the focused part of the material. In terms of pitch, it is marked out by being the place where the pitch change or pitch movement for the nuclear **tone** begins.
<AudioWrapper>
<Audio url="1-4" sentence="I think it was re\diculous" start=20 end=24 nuclei="{['dic']}" />
<Audio url="1-4" sentence="I think it was re/diculous" start=26 end=31 nuclei="{['dic']}" />
</AudioWrapper>
In this example the nucleus is the syllable _-dic-_. It does not matter what the nuclear tone is usedL: the tone movement begins on this syllable. In this way both the syllable _-dic-_ and the word _ridiculous_ are accented. (Some authors call it the 'tonic' rather than the nucleus. Other names are 'intonation center' and 'sentence accent' or even 'sentence stress'.) The nucleus is usually placed ate the end of the IP unless there are special reasons for it to go somewhere else.

At this point we need to consider the anatomy of the IP as a whole. The part of the IP that follows the nucleus is called the **tail**. By definition, the tail contains no accented syllables. If the nucleus is located on the last syllable in the IP, there is no tail:
<AudioWrapper>
<Audio url="1-4" sentence="I'm \sure." start=33 end=35 nuclei="{['sure']}" />
<Audio url="1-4" sentence="I'm /sure." start=36 end=38 nuclei="{['sure']}" />
</AudioWrapper>
If an IP contains an accent in the part before the nucleus, the first (or only) such accent is called the **onset**. The part extending from the onset to the last syllable before the nucleus is called the **head**:
<AudioWrapper>
<Audio url="1-4" sentence="It was re'markably \good." nuclei="{['good']}" start=38 end=43 />
<Audio url="1-4" sentence="It was re'markably \/good." nuclei="{['good']}" start=43 end=48 />
</AudioWrapper>
In this example the onset is the syllable _-mark-_. There is a pitch change there, making the syllable stand out. In this way, the syllable and therefore the word _remarkably_, are accented. The syllables _-markably-_ constitute the head.

The part before the onset is called the **prehead**. By definition, the prehead contains no accented syllables. In the example the prehead is _It was re-_.

If an IP contains no accented syllables before the nucleus, there is no head. If it contains no unaccented syllable before the first accent (onset or nucleus), there is no prehead.

The boundaries of prehead, head, nucleus and tail do not necessarily coincide with word boundaries, although they always coincide with syllable boundaries.

Although every IP contains a nucleus, not all IPs contain a prehead, a head or a tail.

For most utterances, the speaker can select from a wide range of possible intonation patterns. Depending on the circumstances and the meaning, the nucleus can be put in various places. For example, the statement _We're planning to fly to Italy_ could be said as:
<AudioWrapper>
<Audio url="1-4" sentence="We're 'planning to fly to 'Italy." nuclei="{['I']}" start=49 end=52 />
</AudioWrapper>

Here, the nucleus is _It-_ and the tail is _-aly_. The onset is _plan-_, and the head is _planning to fly to_. The prehead is _We're_.

However, the same statement could also be said in any of the following ways, depending on the circumstances under which it it uttered. (The underlining shows the location of the nucleus. The mark ' shows the accented syllables.)
<AudioWrapper>
<Audio url="1-4" sentence="We're 'planning to 'fly to Italy." nuclei="{['fly']}" start=53 end=56 />
<Audio url="1-4" sentence="We're 'planning to fly to Italy." nuclei="{['plan']}" start=56 end=59 />
<Audio url="1-4" sentence="'We're planning to fly to Italy." nuclei="{['We']}" start=59 end=62 />
</AudioWrapper>
The question of **tonicity** (or **nucleus placement**) is the topic of chapter 3.

## C. Tone

**Tone**. Having decided the tonicity - that is, having selected a suitable location for the nucleus - what kind of pitch movement (what **tone**) is going to associate with it?

For example, a speaker wanting to say _You mustn't worry_ can choose between several possible tones:
<br>
(fall)
<AudioWrapper>
<Audio url="1-4" sentence="You 'mustn't \worry" nuclei="{['wor']}" start=62 end=64 />
(rise)
</AudioWrapper>
<AudioWrapper>
<Audio url="1-4" sentence="You 'mustn't /worry" nuclei="{['wor']}" start=66 end=68 />
</AudioWrapper>
(fall-rise)
<AudioWrapper>
<Audio url="1-4" sentence="You 'mustn't \/worry" nuclei="{['wor']}" start=69 end=71 />
</AudioWrapper>

The basic choice between fall, rise and fall-rise is discussed in chapter 2. In general, a fall tends to indicate that the information conveyed is, or could be, complete, whereas a rise or a fall-rise tends to indicate that there is something more to come (either from the same speaker, or from a different speaker). The default tone (= the tone used if there are no special circumstances) for statements, exclamations, commands and wh questions is a fall, but for yes-no question it is a rise. A fall-rise often signals particular implications.

We also have to make decisions about which words (if any) in addition to the nucleus are to be accented. There may be different kinds of prenuclear pitch pattern. There are also tone of choices involving more subtle distinctions than a simple fall vs. rise vs fall-rise. Fore example, a fall can be a high fall, a low fall or a rise-fall. These further choices are discussed in chapter 5.

Although logically the speaker first has to decide to tonality, then the tonicity, and last of all the tone, it is convenient for our discussion to treat the three Ts in reverse order, namely: tone (chapter2), then tonicity (chapter 3), then tonality (chapter 4). After that we deal with the less crucial choices in chapter 5, and bring everything together in chapter 6.
