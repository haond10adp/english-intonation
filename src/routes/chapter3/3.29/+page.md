---
title: 'Final verbs and adjectives'
---

<script>
  import Audio from '$lib/Audio.svelte'
  import AudioWrapper from '$lib/AudioWrapper.svelte'
  import Naudio from '$lib/Naudio.svelte'
</script>

The examples just given illustrate a more general tendency: we put nucleus on a **noun** where possible, in preference to other word classes.

This is seen in various constructions which involve having a **verb** at the end of a sentence or clause. A final verb is usually deaccented, and the nucleus goes on a preceding noun:

<AudioWrapper>
<Audio 
  sentence="*How's the 'homework going?" 
  nuclei="{['home']}" 
  url="3-29" 
  start=3
  end=5
/>
<Audio 
  sentence="I've *still got an 'essay to write." 
  nuclei="{['es']}" 
  url="3-29" 
  start=6
  end=9
/>
</AudioWrapper>

<Naudio
  sentence="*Which 'book did you choose? <br>
  We've got to get the 'car fixed. <br>
  I *wonder where 'Mary went. <br>
  A*long the sides of the 'road | there were *several 'cars parked."
  nuclei="{['book', 'car', 'Ma', 'road', 'cars']}" 
/>

This applies in particular to final defining relative clauses:

<Naudio
  sentence="Just *look at the 'tie he's wearing! <br>
  *Where's that 'salad I was eating? <br>
  I *don't like that 'cheese you've bought."
  nuclei="{['tie', 'sa', 'cheese']}" 
/>
In the following example, the nucleus is likely to be on _Helen_ or _children_ (nouns), depending on focus, but not on the verb _bringing_

<Naudio
  sentence="D'you *know how many 'children Helen's bringing? <br>
  D'you *know how many children 'Helen's bringing?"
  nuclei="{['child', 'Hel']}" 
/>
The same deaccenting applies to the final **adjective** in sentences such as:

<AudioWrapper>
<Audio 
  sentence="He *ought to keep his 'mouth shut." 
  nuclei="{['mouth']}" 
  url="3-29" 
  start=10
  end=13
/>
<Audio 
  sentence="You *need to keep the 'brush wet." 
  nuclei="{['brush']}" 
  url="3-29" 
  start=15
  end=17
/>
</AudioWrapper>

<Naudio
  sentence="We're *going to the 'table ready. <br>
  Is the 'window open?"
  nuclei="{['ta', 'win']}" 
/>
and to the _up_ in:

<Naudio
  sentence="I *wonder what 'Eleanor's up to"
  nuclei="{['El']}" 
/>
Compare the following, where there is no preceding noun to attract the nucleus - so the nucleus goes on the last lexical item (the verb or adjective), as expected.

<Naudio
  sentence="Just *look at what he's 'wearing! <br>
  *What did she 'say? <br>
  *How's it 'going? <br>
  I've *still got something to 'write. <br>
  *What did you 'choose. <br>
  We've 'got to get it 'fixed. <br>
  He 'ought to keep it 'shut. <br>
  Is it 'open? <br>
  I 'wonder where she 'went. <br>
  We're *going to get 'ready. <br>
  You *need to keep it 'wet. <br>
  I *wonder what's she 'up to"
  nuclei="{['wear', 'say', 'go', 'write', 'choose', 'fixed', 'shut', 'open', 'went', 'ready', 'wet', 'up']}" 
/>
In set (i) below, the NP is lexical, so the nuclear accent goes on the noun. In set (ii), the NP is a pronoun or empty word (see [3.20](3.20)), so the nucleus goes on the verb.

<AudioWrapper>
<Audio 
  sentence="(i) I've got some 'work to do." 
  nuclei="{['work']}" 
  url="3-29" 
  start=19
  end=21
/>
</AudioWrapper>

<Naudio
  sentence="We *haven't 'finished: | there's 'still some 'washing to do. <br>
  He's *got some 'writing to do."
  nuclei="{['fin', 'wash', 'writ']}" 
/>

<AudioWrapper>
<Audio 
  sentence="*Tell me what to 'do." 
  nuclei="{['do']}" 
  url="3-29" 
  start=23
  end=25
/>
</AudioWrapper>

<Naudio
  sentence="I'm 'busy: | I've 'got things to 'do. <br>
  *Give him something to 'do."
  nuclei="{['busy', 'do']}" 
/>
The construction in question mostly involve a syntactic movement of some kind, taking a noun phrase (or other type of phrase) that would otherwise follow the verb and moving it to an earlier position. This leaves the verb at the end.

Several **idiomatic** and **fossilized** expressions have a fixed tonicity that can be explained by the tendency to place the nucleus on a noun rather than a verb.

<AudioWrapper>
<Audio 
  sentence="*Wait and see which way the 'wind is blowing. (= what's going to happen)" 
  nuclei="{['wind']}" 
  url="3-29" 
  start=27
  end=31
/>
</AudioWrapper>

<Naudio
  sentence="*Onions make my 'eyes water. (= make me shed tears) <br>
  You're *going to get your 'finger burnt. (= suffer unpleasant consequences) <br>
  She's *got a 'screw loose. (= is crazy) <br>
  Let's *wait for the 'dust to settle. (= till things calm down) <br>
  She looked like *something the 'cat had brought in. (= very untidy) <br>
  *Keep your 'fingers crossed! (= let's hope something good happens) <br>
  We can *go on 'asking | till the 'cows come home (= for ever) <br>
  It *made my 'hair stand on end. (= frighten me) <br>
  The *got like a 'house on fire. (= quickly established a good relationship) <br>
  He'll *have his 'work cut out! (= it will be difficult for him to do)"
  nuclei="{['eyes', 'fin', 'screw', 'dust', 'cat', 'fin', 'ask', 'cows', 'hair', 'house', 'work']}" 
/>
Further example of idiomatic tonicity:

<Naudio
  sentence="*What's 'that supposed to mean? (used when you're annoy at what someone just said) <br>
  You can *say 'that again. ( = I completely agree with you) <br>
  'There's a good girl! 'There's a clever dog! etc. (to compliment a child or an animal) <br>
  *What 'of it?  (= I don't care. It doesn't concern me) <br>
  to be 'at it. (= be busy; be arguing; be having sex) <br>
  *throw a 'spanner in the works (= unexpectedly disrupt something) <br>
  *What's 'that when it's at home? (= what does that word mean?)"
  nuclei="{['that', 'There\'s', 'of', 'at', 'span']}" 
/>
Note the difference in default accenting in pairs such as the following:

<AudioWrapper>
<Audio 
  sentence="(i) He has a *duty to per'form. (= He must perform, that is his duty.)" 
  nuclei="{['form']}" 
  url="3-29" 
  start=33
  end=35
/>
<Audio 
  sentence="(ii) He has a 'duty to perform. (= He must perform a duty)" 
  nuclei="{['du']}" 
  url="3-29" 
  start=37
  end=40
/>
</AudioWrapper>

<Naudio
  sentence="(i) a *wish to 'please (= a wish that we should please people) <br>
  (ii) an 'audience to please (= an audience that we must please) <br><br>
  (i) She *gave him directions to 'follow. ( She said he must follow her) <br>
  (ii) She *gave him di'rections to follow. (He had to follow her directions.)."
  nuclei="{['please', 'au', 'fol', 'rec']}" 
/>
