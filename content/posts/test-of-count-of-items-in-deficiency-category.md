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


 **<span style="color:orange;">
<!-- {SQL(db=>vitamind)}SELECT COUNT(*) FROM `tiki_category_objects` WHERE `categId`=3{SQL} -->
 items</span>** 

#### All objects in the category:

{LIST(cache="y")}

   
<!-- {filter categories="3"} -->

 {OUTPUT(template="count")}

  {OUTPUT}

{LIST}

#### Wiki pages in the category:

{LIST(cache="y")}

   
<!-- {filter categories="3"} -->

  
<!-- {filter type="wiki page"} -->

 {OUTPUT(template="count")}

  {OUTPUT}

{LIST}

#### Files in the category:

{LIST(cache="y")}  
<!-- {filter categories="3"} -->

  
<!-- {filter type="file"} -->

  {OUTPUT(template="count")}

  {OUTPUT}

{LIST}

<pre style="background-color: #e0e0e0;">
<code class="language-text">
Markdown:
--------
 **&lt;span style=&quot;color:orange;&quot;&gt;
&lt;!-- {SQL(db=&gt;vitamind)}SELECT COUNT(*) FROM `tiki_category_objects` WHERE `categId`=3{SQL} --&gt;
 items&lt;/span&gt;** 

#### All objects in the category:

{LIST(cache=&quot;y&quot;)}

   
&lt;!-- {filter categories=&quot;3&quot;} --&gt;

 {OUTPUT(template=&quot;count&quot;)}

  {OUTPUT}

{LIST}

#### Wiki pages in the category:

{LIST(cache=&quot;y&quot;)}

   
&lt;!-- {filter categories=&quot;3&quot;} --&gt;

  
&lt;!-- {filter type=&quot;wiki page&quot;} --&gt;

 {OUTPUT(template=&quot;count&quot;)}

  {OUTPUT}

{LIST}

#### Files in the category:

{LIST(cache=&quot;y&quot;)}  
&lt;!-- {filter categories=&quot;3&quot;} --&gt;

  
&lt;!-- {filter type=&quot;file&quot;} --&gt;

  {OUTPUT(template=&quot;count&quot;)}

  {OUTPUT}

{LIST}

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
│   full_match: `\n{LIST(cache=&quot;y&quot;)}\n   `
│   inner_content: `\n{LIST(cache=&quot;y&quot;)}\n   `├── FilterNode
│   full_match: `{filter categories=&quot;3&quot;}`
│   inner_content: ``
│   attrs_dict:
│   │   raw_content: categories=&quot;3&quot;
│   │   categories: 3├── TextNode
│   full_match: `\n {OUTPUT(template=&quot;count&quot;)}\n  {OUTPUT}\n{LIST}\n`
│   inner_content: `\n {OUTPUT(template=&quot;count&quot;)}\n  {OUTPUT}\n{LIST}\n`├── HeadingNode
│   full_match: `\n!!!! Wiki pages in the category:`
│   inner_content: `Wiki pages in the category:`
│   level: `4`
│   children:
│   ├── TextNode
│   │   full_match: `Wiki pages in the category:`
│   │   inner_content: `Wiki pages in the category:`├── TextNode
│   full_match: `\n{LIST(cache=&quot;y&quot;)}\n   `
│   inner_content: `\n{LIST(cache=&quot;y&quot;)}\n   `├── FilterNode
│   full_match: `{filter categories=&quot;3&quot;}`
│   inner_content: ``
│   attrs_dict:
│   │   raw_content: categories=&quot;3&quot;
│   │   categories: 3├── TextNode
│   full_match: `\n  `
│   inner_content: `\n  `├── FilterNode
│   full_match: `{filter type=&quot;wiki page&quot;}`
│   inner_content: ``
│   attrs_dict:
│   │   raw_content: type=&quot;wiki page&quot;
│   │   type: wiki page├── TextNode
│   full_match: `\n {OUTPUT(template=&quot;count&quot;)}\n  {OUTPUT}\n{LIST}\n\n`
│   inner_content: `\n {OUTPUT(template=&quot;count&quot;)}\n  {OUTPUT}\n{LIST}\n\n`├── HeadingNode
│   full_match: `\n!!!! Files in the category:`
│   inner_content: `Files in the category:`
│   level: `4`
│   children:
│   ├── TextNode
│   │   full_match: `Files in the category:`
│   │   inner_content: `Files in the category:`├── TextNode
│   full_match: `\n{LIST(cache=&quot;y&quot;)}  `
│   inner_content: `\n{LIST(cache=&quot;y&quot;)}  `├── FilterNode
│   full_match: `{filter categories=&quot;3&quot;}`
│   inner_content: ``
│   attrs_dict:
│   │   raw_content: categories=&quot;3&quot;
│   │   categories: 3├── TextNode
│   full_match: `\n  `
│   inner_content: `\n  `├── FilterNode
│   full_match: `{filter type=&quot;file&quot;}`
│   inner_content: ``
│   attrs_dict:
│   │   raw_content: type=&quot;file&quot;
│   │   type: file├── TextNode
│   full_match: `\n  {OUTPUT(template=&quot;count&quot;)}\n  {OUTPUT}\n{LIST}`
│   inner_content: `\n  {OUTPUT(template=&quot;count&quot;)}\n  {OUTPUT}\n{LIST}`

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
