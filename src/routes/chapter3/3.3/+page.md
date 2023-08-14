---
title: 'Content words and function words'
---

<script>
  import Audio from '$lib/Audio.svelte'
  import AudioWrapper from '$lib/AudioWrapper.svelte'
  import Naudio from '$lib/Naudio.svelte'
</script>

Words can be divided into two broad categories, **content words** and **function words**.

Content words are nouns, adjectives, most verbs, and most adverbs: words that have meanings that can be defined in a dictionary and probably have straightforward translation equivalents in other languages. For example: table, head, remember, yellow, suddenly.

Function words, on the other hand, are pronouns, prepositions, articles, auxiliary verbs, modal verbs: words whose meaning may need to be explained in a grammar rather than a dictionary, and which may not have exact equivalents in other languages. For example: me, at, the, are, would.

Generally speaking, we accent content words but not function words. Hence the nucleus (which is one kind of accent) is typically placed on the **last content word** in the IP:
<Naudio
  sentence="I *can't 'hear you. <br>
  I'm *very an'noyed with her. <br>
  *Ask her what that 'noise is."
  nuclei="{['hear', 'noyed', 'noise']}" 
/>
In particular, the nucleus does not usually go on a personal pronoun, a preposition, an auxiliary verb or a modal verb. These words bear the nucleus only if special circumstances apply. If an IP ends with a personal pronoun or a preposition, the nucleus normally goes earlier.

:::info[function words]

- **personal pronouns**: I, me, you, he, him, she, her, it, we, us, they, them, one
- **preposition**, such as at, by, from, of, to, with, about, etc.
- **auxiliary verbs**: be, have, do, and their forms am, was, did, etc.
- **modal verbs**: can, could, may, might, shall, should, will, would, must
  :::

The way to select a suitable place for the nucleus, therefore, is to start from the end of the IP and work back. In the following examples we disregard the final pronoun:
<Naudio
  sentence="She's 'done it. <br>
  I'll 'tell them. <br>
  Can you 'see her?"
  nuclei="{['done', 'tell', 'see']}" 
/>

In the next examples we disregard the final preposition:
<AudioWrapper>
<Audio 
  sentence="*What are you 'looking at?" 
  nuclei="{['look']}" 
  url="3-3" 
  start=1
  end=3
/>
<Audio 
  sentence="*Who was she 'talking to?" 
  nuclei="{['talk']}" 
  url="3-3" 
  start=4
  end=6
/>
</AudioWrapper>
<Naudio
  sentence="She's the *only person he con'fides in <br>
  I *wonder where the words were 'taken from"
  nuclei="{['fides', 'ta']}" 
/>
Some IPs end in a combination of prepositions(s) and pronoun(s). They must both be disregarded:
<Naudio
  sentence="I'll be 'thinking of you.<br>
  He *keeps 'worrying about it. <br>
  I've *just received a 'letter from her. <br>
  'Tell me about it. <br>
  'Bring it to her."
  nuclei="{['think', 'wor', 'let', 'Tel', 'Bring']}" 
/>

In the next examples we disregard final auxiliary or modal verbs:
<Naudio
  sentence="*Chole earns *twice as much as 'Robert does. <br>
  *Bill was talking at the *same time as 'Jim was. <br>
  He did *better than I 'thought he would. <br>
  (*First 'Peter took a drink, |) and *then 'Mary did."
  nuclei="{['Rob', 'Jim', 'thought', 'Pet', 'Mar']}" 
/>

## Summary

So, to decide where it is appropriate for the nucleus to go, start at the _end_ of the IP. Work back towards the beginning, ignoring any function word. Unless special circumstances apply, the nucleus should probably go on the first content word you encounter as you move backwards.

Here is an example. Suppose that you want to find a suitable location for the nucleus in the following sentence:
<Naudio
  sentence="I think you ought to tell me about it"
  nuclei="{['']}" 
/>
Start at the end and work backwards. Which word should bear the nucleus?<br>
_it?_ - No, it's a pronoun. <br>
_about?_ - No, it's a preposition.<br>
_me?_ - No, it's a pronoun.<br>
_tell?_ - Yes! This is the last content word. The nucleus goes here:
<Naudio
  sentence="I think you ought to 'tell me more about it."
  nuclei="{['tell']}" 
/>
