---
title: "Search Title"
slug: "search-title"
aliases:
  - "/Search+Title"
  - "/15734"
tiki_page_id: 15734
date: 2024-12-22
---


{MODULE(module="search_wiki_page" title =" ")}{MODULE}

 **<span style="color:#00F;">shows popularity, category, as well as very recent items</span>** 

&nbsp; &nbsp;You can search for one or more character strings - which do not have to be complete words

 **<span style="color:#00F;">Finds titles which contain STRING1 OR STRING2</span>** 

 **Note: Search hair**   (also also finds  **<span style="color:#F00;">c</span>hair** )

Needed

Eliminate page aliases

Not display plage ID# perso who made the page

Some easy way to enter a new or refined query



<pre style="background-color: #e0e0e0; white-space: pre-wrap;">
<code class="language-text">
Markdown:
--------
{MODULE(module=&quot;search_wiki_page&quot; title =&quot; &quot;)}{MODULE}

 **&lt;span style=&quot;color:#00F;&quot;&gt;shows popularity, category, as well as very recent items&lt;/span&gt;** 

&amp;nbsp; &amp;nbsp;You can search for one or more character strings - which do not have to be complete words

 **&lt;span style=&quot;color:#00F;&quot;&gt;Finds titles which contain STRING1 OR STRING2&lt;/span&gt;** 

 **Note: Search hair**   (also also finds  **&lt;span style=&quot;color:#F00;&quot;&gt;c&lt;/span&gt;hair** )

Needed

Eliminate page aliases

Not display plage ID# perso who made the page

Some easy way to enter a new or refined query



AST Structure:
-------------
├── TextNode
│   full_match: `{MODULE(module=&quot;search_wiki_page&quot; title =&quot; &quot;)}{MODULE}\n`
│   inner_content: `{MODULE(module=&quot;search_wiki_page&quot; title =&quot; &quot;)}{MODULE}\n`├── BoldNode
│   full_match: `__~~#00F:shows popularity, category, as well as very recent items~~__`
│   inner_content: `~~#00F:shows popularity, category, as well as very recent items~~`
│   children:
│   ├── ColorNode
│   │   full_match: `~~#00F:shows popularity, category, as well as very recent items~~`
│   │   inner_content: `shows popularity, category, as well as very recent items`
│   │   attrs_dict:
│   │   │   raw_content: #00F
│   │   children:
│   │   ├── TextNode
│   │   │   full_match: `shows popularity, category, as well as very recent items`
│   │   │   inner_content: `shows popularity, category, as well as very recent items`├── TextNode
│   full_match: `\n`
│   inner_content: `\n`├── HorizontalSpaceNode
│   full_match: `~hs~`
│   inner_content: ``
│   repetitions: `1`├── TextNode
│   full_match: ` `
│   inner_content: ` `├── HorizontalSpaceNode
│   full_match: `~hs~`
│   inner_content: ``
│   repetitions: `1`├── TextNode
│   full_match: `You can search for one or more character strings - which do not have to be complete words\n`
│   inner_content: `You can search for one or more character strings - which do not have to be complete words\n`├── BoldNode
│   full_match: `__~~#00F:Finds titles which contain STRING1 OR STRING2~~__`
│   inner_content: `~~#00F:Finds titles which contain STRING1 OR STRING2~~`
│   children:
│   ├── ColorNode
│   │   full_match: `~~#00F:Finds titles which contain STRING1 OR STRING2~~`
│   │   inner_content: `Finds titles which contain STRING1 OR STRING2`
│   │   attrs_dict:
│   │   │   raw_content: #00F
│   │   children:
│   │   ├── TextNode
│   │   │   full_match: `Finds titles which contain STRING1 OR STRING2`
│   │   │   inner_content: `Finds titles which contain STRING1 OR STRING2`├── TextNode
│   full_match: `\n`
│   inner_content: `\n`├── BoldNode
│   full_match: `__Note: Search hair__`
│   inner_content: `Note: Search hair`
│   children:
│   ├── TextNode
│   │   full_match: `Note: Search hair`
│   │   inner_content: `Note: Search hair`├── TextNode
│   full_match: `  (also also finds `
│   inner_content: `  (also also finds `├── BoldNode
│   full_match: `__~~#F00:c~~hair__`
│   inner_content: `~~#F00:c~~hair`
│   children:
│   ├── ColorNode
│   │   full_match: `~~#F00:c~~`
│   │   inner_content: `c`
│   │   attrs_dict:
│   │   │   raw_content: #F00
│   │   children:
│   │   ├── TextNode
│   │   │   full_match: `c`
│   │   │   inner_content: `c`
│   ├── TextNode
│   │   full_match: `hair`
│   │   inner_content: `hair`├── TextNode
│   full_match: `)\n\nNeeded\nEliminate page aliases\nNot display plage ID# perso who made the page\nSome easy way to enter a new or refined query\n`
│   inner_content: `)\n\nNeeded\nEliminate page aliases\nNot display plage ID# perso who made the page\nSome easy way to enter a new or refined query\n`

Original Tiki:
-------------
{MODULE(module=&quot;search_wiki_page&quot; title =&quot; &quot;)}{MODULE}
__~~#00F:shows popularity, category, as well as very recent items~~__
~hs~ ~hs~You can search for one or more character strings - which do not have to be complete words
__~~#00F:Finds titles which contain STRING1 OR STRING2~~__
__Note: Search hair__  (also also finds __~~#F00:c~~hair__)

Needed
Eliminate page aliases
Not display plage ID# perso who made the page
Some easy way to enter a new or refined query

</code>
</pre>
