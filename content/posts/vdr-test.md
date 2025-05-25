---
title: "VDR test"
slug: "vdr-test"
aliases:
  - "/VDR+test"
  - "/15609"
tiki_page_id: 15609
date: 2024-10-11
---




<pre style="background-color: #e0e0e0; white-space: pre-wrap;">
<code class="language-text">
Markdown:
--------


AST Structure:
-------------
├── HeadingNode
│   full_match: `!!!!VitaminDWiki - ((Vitamin D Receptor)) activation can be increased in many ways`
│   inner_content: `VitaminDWiki - ((Vitamin D Receptor)) activation can be increased in many ways`
│   level: `4`
│   children:
│   ├── TextNode
│   │   full_match: `VitaminDWiki - `
│   │   inner_content: `VitaminDWiki - `
│   ├── LocalLinkNode
│   │   full_match: `((Vitamin D Receptor))`
│   │   inner_content: `Vitamin D Receptor`
│   │   page: `Vitamin D Receptor`
│   │   children:
│   │   ├── TextNode
│   │   │   full_match: `Vitamin D Receptor`
│   │   │   inner_content: `Vitamin D Receptor`
│   ├── TextNode
│   │   full_match: ` activation can be increased in many ways`
│   │   inner_content: ` activation can be increased in many ways`├── TextNode
│   full_match: `\n`
│   inner_content: `\n`├── IncludeNode
│   full_match: `{include page=&quot;Vitamin D Receptor&quot; start=&quot;~tc~ startact ~/tc~&quot; stop=&quot;~tc~ endact ~/tc~&quot;}`
│   inner_content: ``
│   attrs_dict:
│   │   raw_content:  page=&quot;Vitamin D Receptor&quot; start=&quot;~tc~ startact ~/tc~&quot; stop=&quot;~tc~ endact ~/tc~&quot;
│   │   page: Vitamin D Receptor
│   │   start: ~tc~ startact ~/tc~
│   │   stop: ~tc~ endact ~/tc~
│   children:
│   ├── TextNode
│   │   full_match: ``
│   │   inner_content: ``├── TextNode
│   full_match: `\n`
│   inner_content: `\n`

Original Tiki:
-------------
!!!!VitaminDWiki - ((Vitamin D Receptor)) activation can be increased in many ways
{include page=&quot;Vitamin D Receptor&quot; start=&quot;~tc~ startact ~/tc~&quot; stop=&quot;~tc~ endact ~/tc~&quot;}

</code>
</pre>
