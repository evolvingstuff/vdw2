---
title: "Search via Google"
slug: "search-via-google"
aliases:
  - "/Search+via+Google"
  - "/15883"
tiki_page_id: 15883
date: 2025-03-11
---


 **Quickly search TEXT or IMAGE with Google** 

<div id="google_search_widget"><form style="margin-bottom:2px;" target="Google" action="https://www.google.com/search" method="get">

<input type="hidden" value="en" name="hl">

<input type="hidden" value="UTF-8" name="oe">

<input type="hidden" value="UTF-8" name="ie">

<input type="hidden" value="Google Search" name="btnG">

<input type="image" align="left" alt="Google" src="img/googleg.gif" name="googles">

<input type="text" maxlength="400" size="12" name="q" value="Search ..." onclick="this.value='';">

<input type="hidden" value="VitaminDWiki.com" name="domains">

<input type="hidden" value="VitaminDWiki.com" name="sitesearch"></form></div> 

 **TEXT search examples** 

| | |
| --- | --- |
|  | in the page |
| breast cancer | both terms  |
| "breast cancer" | the phrase |
| breast -cancer | breast but not cancer |
| breast ~cancer | breast and cancer and other names for cancer |
| breast OR cancer | must have the word breast and/or cancer |

 **IMAGE search: you must select <span style="color:#F00;">IMAGE</span>** 

<!-- ~tc~ (alias(SviaG)) ~/tc~ -->

<pre style="background-color: #e0e0e0; white-space: pre-wrap;">
<code class="language-text">
Markdown:
--------
 **Quickly search TEXT or IMAGE with Google** 

&lt;div id=&quot;google_search_widget&quot;&gt;&lt;form style=&quot;margin-bottom:2px;&quot; target=&quot;Google&quot; action=&quot;https://www.google.com/search&quot; method=&quot;get&quot;&gt;

&lt;input type=&quot;hidden&quot; value=&quot;en&quot; name=&quot;hl&quot;&gt;

&lt;input type=&quot;hidden&quot; value=&quot;UTF-8&quot; name=&quot;oe&quot;&gt;

&lt;input type=&quot;hidden&quot; value=&quot;UTF-8&quot; name=&quot;ie&quot;&gt;

&lt;input type=&quot;hidden&quot; value=&quot;Google Search&quot; name=&quot;btnG&quot;&gt;

&lt;input type=&quot;image&quot; align=&quot;left&quot; alt=&quot;Google&quot; src=&quot;img/googleg.gif&quot; name=&quot;googles&quot;&gt;

&lt;input type=&quot;text&quot; maxlength=&quot;400&quot; size=&quot;12&quot; name=&quot;q&quot; value=&quot;Search ...&quot; onclick=&quot;this.value=&#39;&#39;;&quot;&gt;

&lt;input type=&quot;hidden&quot; value=&quot;VitaminDWiki.com&quot; name=&quot;domains&quot;&gt;

&lt;input type=&quot;hidden&quot; value=&quot;VitaminDWiki.com&quot; name=&quot;sitesearch&quot;&gt;&lt;/form&gt;&lt;/div&gt; 

 **TEXT search examples** 

| | |
| --- | --- |
|  | in the page |
| breast cancer | both terms  |
| &quot;breast cancer&quot; | the phrase |
| breast -cancer | breast but not cancer |
| breast ~cancer | breast and cancer and other names for cancer |
| breast OR cancer | must have the word breast and/or cancer |

 **IMAGE search: you must select &lt;span style=&quot;color:#F00;&quot;&gt;IMAGE&lt;/span&gt;** 

&lt;!-- ~tc~ (alias(SviaG)) ~/tc~ --&gt;

AST Structure:
-------------
├── BoldNode
│   full_match: `__Quickly search TEXT or IMAGE with Google__`
│   inner_content: `Quickly search TEXT or IMAGE with Google`
│   children:
│   ├── TextNode
│   │   full_match: `Quickly search TEXT or IMAGE with Google`
│   │   inner_content: `Quickly search TEXT or IMAGE with Google`├── TextNode
│   full_match: `\n`
│   inner_content: `\n`├── HtmlNode
│   full_match: `{HTML()}&lt;div id=&quot;google_search_widget&quot;&gt;&lt;form style=&quot;margin-bottom:2px;&quot; target=&quot;Google&quot; action=&quot;https://www.google.com/search&quot; method=&quot;get&quot;&gt;\n&lt;input type=&quot;hidden&quot; value=&quot;en&quot; name=&quot;hl&quot;&gt;\n&lt;input type=&quot;hidden&quot; value=&quot;UTF-8&quot; name=&quot;oe&quot;&gt;\n&lt;input type=&quot;hidden&quot; value=&quot;UTF-8&quot; name=&quot;ie&quot;&gt;\n&lt;input type=&quot;hidden&quot; value=&quot;Google Search&quot; name=&quot;btnG&quot;&gt;\n&lt;input type=&quot;image&quot; align=&quot;left&quot; alt=&quot;Google&quot; src=&quot;img/googleg.gif&quot; name=&quot;googles&quot;&gt;\n&lt;input type=&quot;text&quot; maxlength=&quot;400&quot; size=&quot;12&quot; name=&quot;q&quot; value=&quot;Search ...&quot; onclick=&quot;this.value=&#39;&#39;;&quot;&gt;\n&lt;input type=&quot;hidden&quot; value=&quot;VitaminDWiki.com&quot; name=&quot;domains&quot;&gt;\n&lt;input type=&quot;hidden&quot; value=&quot;VitaminDWiki.com&quot; name=&quot;sitesearch&quot;&gt;&lt;/form&gt;&lt;/div&gt;{HTML}`
│   inner_content: `&lt;div id=&quot;google_search_widget&quot;&gt;&lt;form style=&quot;margin-bottom:2px;&quot; target=&quot;Google&quot; action=&quot;https://www.google.com/search&quot; method=&quot;get&quot;&gt;\n&lt;input type=&quot;hidden&quot; value=&quot;en&quot; name=&quot;hl&quot;&gt;\n&lt;input type=&quot;hidden&quot; value=&quot;UTF-8&quot; name=&quot;oe&quot;&gt;\n&lt;input type=&quot;hidden&quot; value=&quot;UTF-8&quot; name=&quot;ie&quot;&gt;\n&lt;input type=&quot;hidden&quot; value=&quot;Google Search&quot; name=&quot;btnG&quot;&gt;\n&lt;input type=&quot;image&quot; align=&quot;left&quot; alt=&quot;Google&quot; src=&quot;img/googleg.gif&quot; name=&quot;googles&quot;&gt;\n&lt;input type=&quot;text&quot; maxlength=&quot;400&quot; size=&quot;12&quot; name=&quot;q&quot; value=&quot;Search ...&quot; onclick=&quot;this.value=&#39;&#39;;&quot;&gt;\n&lt;input type=&quot;hidden&quot; value=&quot;VitaminDWiki.com&quot; name=&quot;domains&quot;&gt;\n&lt;input type=&quot;hidden&quot; value=&quot;VitaminDWiki.com&quot; name=&quot;sitesearch&quot;&gt;&lt;/form&gt;&lt;/div&gt;`
│   attrs_dict:
│   │   raw_content: 
│   children:
│   ├── TextNode
│   │   full_match: `&lt;div id=&quot;google_search_widget&quot;&gt;&lt;form style=&quot;margin-bottom:2px;&quot; target=&quot;Google&quot; action=&quot;https://www.google.com/search&quot; method=&quot;get&quot;&gt;\n&lt;input type=&quot;hidden&quot; value=&quot;en&quot; name=&quot;hl&quot;&gt;\n&lt;input type=&quot;hidden&quot; value=&quot;UTF-8&quot; name=&quot;oe&quot;&gt;\n&lt;input type=&quot;hidden&quot; value=&quot;UTF-8&quot; name=&quot;ie&quot;&gt;\n&lt;input type=&quot;hidden&quot; value=&quot;Google Search&quot; name=&quot;btnG&quot;&gt;\n&lt;input type=&quot;image&quot; align=&quot;left&quot; alt=&quot;Google&quot; src=&quot;img/googleg.gif&quot; name=&quot;googles&quot;&gt;\n&lt;input type=&quot;text&quot; maxlength=&quot;400&quot; size=&quot;12&quot; name=&quot;q&quot; value=&quot;Search ...&quot; onclick=&quot;this.value=&#39;&#39;;&quot;&gt;\n&lt;input type=&quot;hidden&quot; value=&quot;VitaminDWiki.com&quot; name=&quot;domains&quot;&gt;\n&lt;input type=&quot;hidden&quot; value=&quot;VitaminDWiki.com&quot; name=&quot;sitesearch&quot;&gt;&lt;/form&gt;&lt;/div&gt;`
│   │   inner_content: `&lt;div id=&quot;google_search_widget&quot;&gt;&lt;form style=&quot;margin-bottom:2px;&quot; target=&quot;Google&quot; action=&quot;https://www.google.com/search&quot; method=&quot;get&quot;&gt;\n&lt;input type=&quot;hidden&quot; value=&quot;en&quot; name=&quot;hl&quot;&gt;\n&lt;input type=&quot;hidden&quot; value=&quot;UTF-8&quot; name=&quot;oe&quot;&gt;\n&lt;input type=&quot;hidden&quot; value=&quot;UTF-8&quot; name=&quot;ie&quot;&gt;\n&lt;input type=&quot;hidden&quot; value=&quot;Google Search&quot; name=&quot;btnG&quot;&gt;\n&lt;input type=&quot;image&quot; align=&quot;left&quot; alt=&quot;Google&quot; src=&quot;img/googleg.gif&quot; name=&quot;googles&quot;&gt;\n&lt;input type=&quot;text&quot; maxlength=&quot;400&quot; size=&quot;12&quot; name=&quot;q&quot; value=&quot;Search ...&quot; onclick=&quot;this.value=&#39;&#39;;&quot;&gt;\n&lt;input type=&quot;hidden&quot; value=&quot;VitaminDWiki.com&quot; name=&quot;domains&quot;&gt;\n&lt;input type=&quot;hidden&quot; value=&quot;VitaminDWiki.com&quot; name=&quot;sitesearch&quot;&gt;&lt;/form&gt;&lt;/div&gt;`├── TextNode
│   full_match: ` \n`
│   inner_content: ` \n`├── BoldNode
│   full_match: `__TEXT search examples__`
│   inner_content: `TEXT search examples`
│   children:
│   ├── TextNode
│   │   full_match: `TEXT search examples`
│   │   inner_content: `TEXT search examples`├── TextNode
│   full_match: `\n`
│   inner_content: `\n`├── TableNode
│   full_match: `|| | in the page\nbreast cancer|both terms \n&quot;breast cancer&quot;|the phrase\nbreast -cancer| breast but not cancer\nbreast ~cancer| breast and cancer and other names for cancer\nbreast OR cancer|must have the word breast and/or cancer||`
│   inner_content: ` | in the page\nbreast cancer|both terms \n&quot;breast cancer&quot;|the phrase\nbreast -cancer| breast but not cancer\nbreast ~cancer| breast and cancer and other names for cancer\nbreast OR cancer|must have the word breast and/or cancer`
│   children:
│   ├── TableRowNode
│   │   full_match: ` | in the page`
│   │   inner_content: ` | in the page`
│   │   children:
│   │   ├── TableCellNode
│   │   │   full_match: ` `
│   │   │   inner_content: ` `
│   │   ├── TableCellNode
│   │   │   full_match: ` in the page`
│   │   │   inner_content: ` in the page`
│   │   │   children:
│   │   │   ├── TextNode
│   │   │   │   full_match: `in the page`
│   │   │   │   inner_content: `in the page`
│   ├── TableRowNode
│   │   full_match: `breast cancer|both terms `
│   │   inner_content: `breast cancer|both terms `
│   │   children:
│   │   ├── TableCellNode
│   │   │   full_match: `breast cancer`
│   │   │   inner_content: `breast cancer`
│   │   │   children:
│   │   │   ├── TextNode
│   │   │   │   full_match: `breast cancer`
│   │   │   │   inner_content: `breast cancer`
│   │   ├── TableCellNode
│   │   │   full_match: `both terms `
│   │   │   inner_content: `both terms `
│   │   │   children:
│   │   │   ├── TextNode
│   │   │   │   full_match: `both terms `
│   │   │   │   inner_content: `both terms `
│   ├── TableRowNode
│   │   full_match: `&quot;breast cancer&quot;|the phrase`
│   │   inner_content: `&quot;breast cancer&quot;|the phrase`
│   │   children:
│   │   ├── TableCellNode
│   │   │   full_match: `&quot;breast cancer&quot;`
│   │   │   inner_content: `&quot;breast cancer&quot;`
│   │   │   children:
│   │   │   ├── TextNode
│   │   │   │   full_match: `&quot;breast cancer&quot;`
│   │   │   │   inner_content: `&quot;breast cancer&quot;`
│   │   ├── TableCellNode
│   │   │   full_match: `the phrase`
│   │   │   inner_content: `the phrase`
│   │   │   children:
│   │   │   ├── TextNode
│   │   │   │   full_match: `the phrase`
│   │   │   │   inner_content: `the phrase`
│   ├── TableRowNode
│   │   full_match: `breast -cancer| breast but not cancer`
│   │   inner_content: `breast -cancer| breast but not cancer`
│   │   children:
│   │   ├── TableCellNode
│   │   │   full_match: `breast -cancer`
│   │   │   inner_content: `breast -cancer`
│   │   │   children:
│   │   │   ├── TextNode
│   │   │   │   full_match: `breast -cancer`
│   │   │   │   inner_content: `breast -cancer`
│   │   ├── TableCellNode
│   │   │   full_match: ` breast but not cancer`
│   │   │   inner_content: ` breast but not cancer`
│   │   │   children:
│   │   │   ├── TextNode
│   │   │   │   full_match: `breast but not cancer`
│   │   │   │   inner_content: `breast but not cancer`
│   ├── TableRowNode
│   │   full_match: `breast ~cancer| breast and cancer and other names for cancer`
│   │   inner_content: `breast ~cancer| breast and cancer and other names for cancer`
│   │   children:
│   │   ├── TableCellNode
│   │   │   full_match: `breast ~cancer`
│   │   │   inner_content: `breast ~cancer`
│   │   │   children:
│   │   │   ├── TextNode
│   │   │   │   full_match: `breast ~cancer`
│   │   │   │   inner_content: `breast ~cancer`
│   │   ├── TableCellNode
│   │   │   full_match: ` breast and cancer and other names for cancer`
│   │   │   inner_content: ` breast and cancer and other names for cancer`
│   │   │   children:
│   │   │   ├── TextNode
│   │   │   │   full_match: `breast and cancer and other names for cancer`
│   │   │   │   inner_content: `breast and cancer and other names for cancer`
│   ├── TableRowNode
│   │   full_match: `breast OR cancer|must have the word breast and/or cancer`
│   │   inner_content: `breast OR cancer|must have the word breast and/or cancer`
│   │   children:
│   │   ├── TableCellNode
│   │   │   full_match: `breast OR cancer`
│   │   │   inner_content: `breast OR cancer`
│   │   │   children:
│   │   │   ├── TextNode
│   │   │   │   full_match: `breast OR cancer`
│   │   │   │   inner_content: `breast OR cancer`
│   │   ├── TableCellNode
│   │   │   full_match: `must have the word breast and/or cancer`
│   │   │   inner_content: `must have the word breast and/or cancer`
│   │   │   children:
│   │   │   ├── TextNode
│   │   │   │   full_match: `must have the word breast and/or cancer`
│   │   │   │   inner_content: `must have the word breast and/or cancer`├── TextNode
│   full_match: `\n\n`
│   inner_content: `\n\n`├── BoldNode
│   full_match: `__IMAGE search: you must select ~~#F00:IMAGE~~__`
│   inner_content: `IMAGE search: you must select ~~#F00:IMAGE~~`
│   children:
│   ├── TextNode
│   │   full_match: `IMAGE search: you must select `
│   │   inner_content: `IMAGE search: you must select `
│   ├── ColorNode
│   │   full_match: `~~#F00:IMAGE~~`
│   │   inner_content: `IMAGE`
│   │   attrs_dict:
│   │   │   raw_content: #F00
│   │   children:
│   │   ├── TextNode
│   │   │   full_match: `IMAGE`
│   │   │   inner_content: `IMAGE`├── TextNode
│   full_match: `\n`
│   inner_content: `\n`├── TikiCommentNode
│   full_match: `~tc~ (alias(SviaG)) ~/tc~`
│   inner_content: ` (alias(SviaG)) `
│   children:
│   ├── TextNode
│   │   full_match: `(alias(SviaG)) `
│   │   inner_content: `(alias(SviaG)) `

Original Tiki:
-------------
__Quickly search TEXT or IMAGE with Google__
{HTML()}&lt;div id=&quot;google_search_widget&quot;&gt;&lt;form style=&quot;margin-bottom:2px;&quot; target=&quot;Google&quot; action=&quot;https://www.google.com/search&quot; method=&quot;get&quot;&gt;
&lt;input type=&quot;hidden&quot; value=&quot;en&quot; name=&quot;hl&quot;&gt;
&lt;input type=&quot;hidden&quot; value=&quot;UTF-8&quot; name=&quot;oe&quot;&gt;
&lt;input type=&quot;hidden&quot; value=&quot;UTF-8&quot; name=&quot;ie&quot;&gt;
&lt;input type=&quot;hidden&quot; value=&quot;Google Search&quot; name=&quot;btnG&quot;&gt;
&lt;input type=&quot;image&quot; align=&quot;left&quot; alt=&quot;Google&quot; src=&quot;img/googleg.gif&quot; name=&quot;googles&quot;&gt;
&lt;input type=&quot;text&quot; maxlength=&quot;400&quot; size=&quot;12&quot; name=&quot;q&quot; value=&quot;Search ...&quot; onclick=&quot;this.value=&#39;&#39;;&quot;&gt;
&lt;input type=&quot;hidden&quot; value=&quot;VitaminDWiki.com&quot; name=&quot;domains&quot;&gt;
&lt;input type=&quot;hidden&quot; value=&quot;VitaminDWiki.com&quot; name=&quot;sitesearch&quot;&gt;&lt;/form&gt;&lt;/div&gt;{HTML} 
__TEXT search examples__
|| | in the page
breast cancer|both terms 
&quot;breast cancer&quot;|the phrase
breast -cancer| breast but not cancer
breast ~cancer| breast and cancer and other names for cancer
breast OR cancer|must have the word breast and/or cancer||

__IMAGE search: you must select ~~#F00:IMAGE~~__
~tc~ (alias(SviaG)) ~/tc~
</code>
</pre>
