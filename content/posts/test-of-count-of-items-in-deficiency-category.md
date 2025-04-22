---
title: "Test of count of items in deficiency category"
slug: "test-of-count-of-items-in-deficiency-category"
aliases:
  - "/Test+of+count+of+items+in+deficiency+category"
  - "/tiki-index.php?page_id=14352"
date: 2023-04-03
categories:
  - "Deficiency of Vitamin D"
  - "Admin Only"
---



#### All objects in the category:

<!-- {LIST(cache="y")}
{filter categories="3"}
{OUTPUT(template="count")}
{OUTPUT}
{LIST} -->

#### Wiki pages in the category:

<!-- {LIST(cache="y")}
{filter categories="3"}
{filter type="wiki page"}
{OUTPUT(template="count")}
{OUTPUT}
{LIST} -->

#### Files in the category:

<!-- {LIST(cache="y")}  {filter categories="3"}
{filter type="file"}
{OUTPUT(template="count")}
{OUTPUT}
{LIST} -->

<pre style="background-color: #e0e0e0; white-space: pre-wrap;">
<code class="language-text">
Markdown:
--------

#### All objects in the category:

&lt;!-- {LIST(cache=&quot;y&quot;)}
{filter categories=&quot;3&quot;}
{OUTPUT(template=&quot;count&quot;)}
{OUTPUT}
{LIST} --&gt;

#### Wiki pages in the category:

&lt;!-- {LIST(cache=&quot;y&quot;)}
{filter categories=&quot;3&quot;}
{filter type=&quot;wiki page&quot;}
{OUTPUT(template=&quot;count&quot;)}
{OUTPUT}
{LIST} --&gt;

#### Files in the category:

&lt;!-- {LIST(cache=&quot;y&quot;)}  {filter categories=&quot;3&quot;}
{filter type=&quot;file&quot;}
{OUTPUT(template=&quot;count&quot;)}
{OUTPUT}
{LIST} --&gt;

AST Structure:
-------------
├── BoldNode
│   full_match: `__~~#00F:{SQL(db=&gt;vitamind)}SELECT COUNT(*) FROM `tiki_category_objects` WHERE `categId`=3{SQL} items~~__`
│   inner_content: `~~#00F:{SQL(db=&gt;vitamind)}SELECT COUNT(*) FROM `tiki_category_objects` WHERE `categId`=3{SQL} items~~`
│   children:
│   ├── ColorNode
│   │   full_match: `~~#00F:{SQL(db=&gt;vitamind)}SELECT COUNT(*) FROM `tiki_category_objects` WHERE `categId`=3{SQL} items~~`
│   │   inner_content: `{SQL(db=&gt;vitamind)}SELECT COUNT(*) FROM `tiki_category_objects` WHERE `categId`=3{SQL} items`
│   │   attrs_dict:
│   │   │   raw_content: #00F
│   │   children:
│   │   ├── SqlNode
│   │   │   full_match: `{SQL(db=&gt;vitamind)}SELECT COUNT(*) FROM `tiki_category_objects` WHERE `categId`=3{SQL}`
│   │   │   inner_content: `SELECT COUNT(*) FROM `tiki_category_objects` WHERE `categId`=3`
│   │   │   attrs_dict:
│   │   │   │   raw_content: db=&gt;vitamind
│   │   │   │   db: &gt;vitamind
│   │   ├── TextNode
│   │   │   full_match: ` items`
│   │   │   inner_content: ` items`├── TextNode
│   full_match: `\n`
│   inner_content: `\n`├── HeadingNode
│   full_match: `\n!!!! All objects in the category:`
│   inner_content: `All objects in the category:`
│   level: `4`
│   children:
│   ├── TextNode
│   │   full_match: `All objects in the category:`
│   │   inner_content: `All objects in the category:`├── TextNode
│   full_match: `\n`
│   inner_content: `\n`├── ListNode
│   full_match: `{LIST(cache=&quot;y&quot;)}\n{filter categories=&quot;3&quot;}\n{OUTPUT(template=&quot;count&quot;)}\n{OUTPUT}\n{LIST}`
│   inner_content: `\n{filter categories=&quot;3&quot;}\n{OUTPUT(template=&quot;count&quot;)}\n{OUTPUT}\n`
│   attrs_dict:
│   │   raw_content: cache=&quot;y&quot;
│   │   cache: y
│   children:
│   ├── TextNode
│   │   full_match: `\n{filter categories=&quot;3&quot;}\n{OUTPUT(template=&quot;count&quot;)}\n{OUTPUT}\n`
│   │   inner_content: `\n{filter categories=&quot;3&quot;}\n{OUTPUT(template=&quot;count&quot;)}\n{OUTPUT}\n`├── TextNode
│   full_match: `\n`
│   inner_content: `\n`├── HeadingNode
│   full_match: `\n!!!! Wiki pages in the category:`
│   inner_content: `Wiki pages in the category:`
│   level: `4`
│   children:
│   ├── TextNode
│   │   full_match: `Wiki pages in the category:`
│   │   inner_content: `Wiki pages in the category:`├── TextNode
│   full_match: `\n`
│   inner_content: `\n`├── ListNode
│   full_match: `{LIST(cache=&quot;y&quot;)}\n{filter categories=&quot;3&quot;}\n{filter type=&quot;wiki page&quot;}\n{OUTPUT(template=&quot;count&quot;)}\n{OUTPUT}\n{LIST}`
│   inner_content: `\n{filter categories=&quot;3&quot;}\n{filter type=&quot;wiki page&quot;}\n{OUTPUT(template=&quot;count&quot;)}\n{OUTPUT}\n`
│   attrs_dict:
│   │   raw_content: cache=&quot;y&quot;
│   │   cache: y
│   children:
│   ├── TextNode
│   │   full_match: `\n{filter categories=&quot;3&quot;}\n{filter type=&quot;wiki page&quot;}\n{OUTPUT(template=&quot;count&quot;)}\n{OUTPUT}\n`
│   │   inner_content: `\n{filter categories=&quot;3&quot;}\n{filter type=&quot;wiki page&quot;}\n{OUTPUT(template=&quot;count&quot;)}\n{OUTPUT}\n`├── TextNode
│   full_match: `\n\n`
│   inner_content: `\n\n`├── HeadingNode
│   full_match: `\n!!!! Files in the category:`
│   inner_content: `Files in the category:`
│   level: `4`
│   children:
│   ├── TextNode
│   │   full_match: `Files in the category:`
│   │   inner_content: `Files in the category:`├── TextNode
│   full_match: `\n`
│   inner_content: `\n`├── ListNode
│   full_match: `{LIST(cache=&quot;y&quot;)}  {filter categories=&quot;3&quot;}\n{filter type=&quot;file&quot;}\n{OUTPUT(template=&quot;count&quot;)}\n{OUTPUT}\n{LIST}`
│   inner_content: `  {filter categories=&quot;3&quot;}\n{filter type=&quot;file&quot;}\n{OUTPUT(template=&quot;count&quot;)}\n{OUTPUT}\n`
│   attrs_dict:
│   │   raw_content: cache=&quot;y&quot;
│   │   cache: y
│   children:
│   ├── TextNode
│   │   full_match: `  {filter categories=&quot;3&quot;}\n{filter type=&quot;file&quot;}\n{OUTPUT(template=&quot;count&quot;)}\n{OUTPUT}\n`
│   │   inner_content: `  {filter categories=&quot;3&quot;}\n{filter type=&quot;file&quot;}\n{OUTPUT(template=&quot;count&quot;)}\n{OUTPUT}\n`

Original Tiki:
-------------
__~~#00F:{SQL(db=&gt;vitamind)}SELECT COUNT(*) FROM `tiki_category_objects` WHERE `categId`=3{SQL} items~~__

!!!! All objects in the category:
{LIST(cache=&quot;y&quot;)}
   {filter categories=&quot;3&quot;}
 {OUTPUT(template=&quot;count&quot;)}
  {OUTPUT}
{LIST}

!!!! Wiki pages in the category:
{LIST(cache=&quot;y&quot;)}
   {filter categories=&quot;3&quot;}
  {filter type=&quot;wiki page&quot;}
 {OUTPUT(template=&quot;count&quot;)}
  {OUTPUT}
{LIST}


!!!! Files in the category:
{LIST(cache=&quot;y&quot;)}  {filter categories=&quot;3&quot;}
  {filter type=&quot;file&quot;}
  {OUTPUT(template=&quot;count&quot;)}
  {OUTPUT}
{LIST}
</code>
</pre>
