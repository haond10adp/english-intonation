---
title: 'Defining and non-defining'
---

<script>
  import Audio from '$lib/Audio.svelte'
  import AudioWrapper from '$lib/AudioWrapper.svelte'
  import Naudio from '$lib/Naudio.svelte'
</script>

There are two kinds of relative clause: defining and non-defining. The first type usually does not have its own separate IP, the second does:

<AudioWrapper>
<Audio 
  sentence="?? Who's \Nikki? 
  <br><br> - (i) She's my *sister who lives in \Canada. 
  <br> - (ii) She's my \sister, | who *lives in \Canada." 
  nuclei="{['Nik', 'Can', 'sis']}" 
  url="4-8" 
  start=2
  end=11
/>
</AudioWrapper>
Version (i), defining, implies that I have more than one sister; I am singling out the particular one who lives in Canada; it is that sister I am talking about, not my other sister(s). Version (ii), non-defining, is consistent with my having only one sister; I throw additional information about where she lives.

<Naudio
  sentence="(i) He *used a comma that was 'wrong. <br>
  (ii) He *used a 'comma, | which was 'wrong."
  nuclei="{['wrong', 'com']}" 
/>
Here, version (i) has a defining relative clause (= the type of comma that was wrong). Version (ii) has non-defining relative clause, but is ambiguous: it may mean either 'he used a comma, and the comma was wrong' or 'he used a comma, and his using it was wrong' - i.e. the antecedent of the relative may be either the NP _a comma_ or the whole clause _he used a comma_.

Defining relative clauses are much more frequent in conversation than non-defining ones. In typical cases such as the following, there is _no intonation break_ before the defining relative clause:

<Naudio
  sentence="*Where's that 'pen I was using? <br>
  *That's my 'coat you've taken!"
  nuclei="{['pen', 'coat']}" 
/>
There may well, however, be an intonation break _after_ the relative clause, since the whole IP is now rather heavy:

<Naudio
  sentence="This *new 'car I've bought | has a *special 'locking device. <br>
  The *point you must re'member | is that ..."
  nuclei="{['car', 'lock', 'mem']}" 
/>

The distinction between defining and non-defining applies to certain other constructions as well:

<Naudio
  sentence="*Look at the house near the 'bus stop. (= not the other houses) <br>
  *Look at that 'house, | near the 'bus stop. <br>
  *Bicycles chained to the 'railings | will be re'moved. <br>
  *Outside the 'courthouse | there were some 'bicycles | *chained to the 'railings."
  nuclei="{['bus', 'house', 'rail', 'court', 'bi']}" 
/>
In particular, it applies to phrases in **apposition**.

<Naudio
  sentence="(i) *This is my colleague 'Charles. <br>
  (ii) *This is my 'colleague, | 'Charles."
  nuclei="{['Charles', 'col']}" 
/>
Version (i) identifies as Charles this particular one of my various colleagues. Version (ii) does not necessarily imply that I have only one colleague, but it does involve presenting the person's status (_colleague_) and name (_Charles_) as two separate pieces of information. There is also a third version, a single IP with Charles not accented.

<Naudio
  sentence="*This is my 'colleague, Charles."
  nuclei="{['col']}" 
/>
Version (iii) offers two possibilities: either that _Charles_ is a vocative, the name of the person I am speaking to; or that I have mentioned several people called Charles, and that this is my colleague Charles rather than, say, my cousin Charles.
