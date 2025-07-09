{
    "title": "Category Search Template",
    "slug": "category-search-template",
    "aliases": [
        "/Category+Search+Template",
        "/8381"
    ],
    "tiki_page_id": 8381,
    "date": "2017-04-23",
    "categories": [
        "Admin Only"
    ],
    "tags": [
        "Admin Only",
        "magnesium"
    ]
}


{literal}

{REMARKSBOX(type="tip" title="You can search categories in many ways" close="n")}

All studies in categories A & B &nbsp; &nbsp;  e.g, Cardiovascular or Magnesium

All studies in categories (A1 OR A2) & B

All studies in category A which contains (word1 OR word2 in title)

&nbsp; &nbsp; You can select a category by typing a name or scrolling to it{REMARKSBOX}

Category A: {categories _categpath="y" multiple="multiple" _showdeep="y" _deep="y" _style="select" class="form-control" placeholder="Select a category.."}

Category B: {categories _categpath="y" multiple="multiple" _showdeep="y" _deep="y" _style="select" class="form-control" placeholder="Select another category.."}

Search pages that are both in any of the categories added to Category A and Category B.

Page Title: {input _filter="content" type="text" _field="title" class="cs_content_input form-control" placeholder="Enter some text..."}

Filter on page title text (multiple text in title search will return matches for any of the entered text).

{DIV(class="col-sm-12")}{input type="Submit" value="Search" class="btn btn-primary btn-block text-uppercase"}

Press the button to search VitaminDWiki.

{DIV}

{/literal}