---
title: "Hip fractures are predicted by 10 factors – low Vitamin D is the biggest"
slug: "hip-fractures-are-predicted-by-10-factors-low-vitamin-d-is-the-biggest"
aliases:
  - "/Hip+fractures+are+predicted+by+10+factors+–+low+Vitamin+D+is+the+biggest+–+Aug+2023"
  - "/tiki-index.php?page_id=14603"
date: 2023-08-11
categories:
  - "Falls and Fractures"
---



<!-- {maketoc Title=""} -->

---

#### A machine learning-based scoring system and ten factors associated with hip fracture occurrence in the elderly

Bone https://doi.org/10.1016/j.bone.2023.116865 &nbsp; PDF is behind a $31 paywall

Masaru Uragami a 1, Kozo Matsushita a 1, Yuto Shibata a, Shu Takata a, Tatsuki Karasugi a, Takanao Sueyoshi a, Tetsuro Masuda a, Takayuki Nakamura a, Takuya Tokunaga a, Satoshi Hisanaga a, Masaki Yugami a, Kazuki Sugimoto a, Ryuji Yonemitsu a, Katsumasa Ideo a, Yuko Fukuma a, Kosei Takata a, Takahiro Arima a, Jyunki Kawakami a, Kazuya Maeda a, Naoto Yoshimura a…Takeshi Miyamoto a

Hip fractures are fragility fractures frequently seen in persons over 80-years-old. Although various factors, including decreased bone mineral density and a history of falls, are reported as hip fracture risks, few large-scale studies have confirmed their relevance to individuals older than 80, and tools to assess contributions of various risks to fracture development and the degree of risk are lacking. We recruited 1395 fresh hip fracture patients and 1075 controls without hip fractures and comprehensively evaluated various reported risk factors and their association with hip fracture development. We initially constructed a predictive model using Extreme Gradient Boosting (XGBoost), a machine learning algorithm, incorporating all 40 variables and evaluated the model's performance using the area under the receiver operating characteristic curve (AUC), yielding a value of 0.87. We also employed SHapley Additive exPlanation (SHAP) values to evaluate each feature's importance and ranked the top 20. We then used a stepwise selection method to determine key factors sequentially until the AUC reached a plateau nearly equal to that of all variables and identified the top 10 sufficient to evaluate hip fracture risk. 

For each, we determined the cutoff value for hip fracture occurrence and calculated scores of each variable based on the respective feature importance. 

Individual scores were: 

*  **serum 25(OH)D levels (<10 ng/ml, score 7),** 

* femoral neck T-score (<−3, score 5), 

* Barthel index score (<100, score 3), 

* maximal handgrip strength (<18 kg, score 3), 

* GLFS-25 score (≥24, score 2), 

* number of falls in previous 12 months (≥3, score 2), 

* serum IGF-1 levels (<50 ng/ml, score 2), 

* cups of tea/day (≥5, score −2), 

* use of anti-osteoporosis drugs (yes, score −2), and

* BMI (<18.5 kg/m2, score 1). 

Using these scores, we performed receiver operating characteristic (ROC) analysis and the resultant optimal cutoff value was 7, with a specificity of 0.78, sensitivity of 0.75, and AUC of 0.85. These ten factors and the scoring system may represent tools useful to predict hip fracture.

Introduction

Risk of hip fracture increases dramatically with advancing age in both women and men <sup>[1]</sup>. In Japan, the proportion of elderly individuals over 65 years old is the highest in the world, and that number increased from 14.6 % in 1995 to 26.6 % in 2015. Specifically, the annual incidence of hip fractures in Japan steadily increased from 76,600 in 1992 to 193,400 in 2017 <sup>[2]</sup>. Accordingly, the annual incidence of hip fracture worldwide is expected to rise significantly due to population aging, with estimates projecting an increase from 1.26 million cases in 1990 to at least 4.5 million by 2050 <sup>[3]</sup>. Osteoporotic fracture is a major public health problem associated with increased dependency, morbidity, and mortality. Among all osteoporotic fractures, hip fracture occurs with the greatest morbidity, mortality, and costs. Population aging further contributes to an elevated average age of onset for hip fractures <sup>[4]</sup>, leading to higher mortality rates, medical costs, and prolonged hospitalization durations <sup>[5,6]</sup>. Therefore, reducing its incidence in the elderly is a pressing concern in developed countries.

The Fracture Risk Assessment Tool (FRAX; The University of Sheffield, Sheffield, UK) <sup>[7]</sup> is currently used to predict probability of hip fractures and aid in making treatment decisions. This tool has been incorporated into over 100 clinical practice guidelines <sup>[8]</sup>. However, clinical risk factors included in FRAX, as well as bone mineral density, decrease in magnitude of risk as individuals age, suggesting the presence of other risk factors in the very old <sup>[7]</sup>. Therefore, the increase in average fracture age worldwide requires comparative analysis of numerous risk factors among the very old, including those included in the FRAX algorithm. Most cohort studies of individuals with a mean age of 80 years or older, however, lack data relevant to important risk factors for hip fracture, such as bone mineral density (which is typically measured by dual-energy X-ray absorptiometry) <sup>[9]</sup>, <sup>[10]</sup>, <sup>[11]</sup>. As a result, our current understanding of risk factors for hip fracture among the very old is limited.

In addition to those proposed in the FRAX algorithm, various factors have been proposed as hip fracture risks, such as: previous non-fragility fractures <sup>[12]</sup>, diabetes <sup>[13]</sup>, stroke <sup>[14]</sup>, hyperthyroidism <sup>[15]</sup>, respiratory disease <sup>[16]</sup>, cardiovascular disease <sup>[17]</sup>, Parkinson's disease <sup>[18]</sup>, chronic liver disease <sup>[19]</sup>, chronic kidney disease <sup>[20]</sup>, proton pump inhibitor use <sup>[21]</sup>, gastric surgery <sup>[22]</sup>, hypertension <sup>[23]</sup>, and low serum levels of insulin-like growth factor-1 (IGF-1) <sup>[24]</sup> or of 25-dihydroxy vitamin D (25(OH)D) <sup>[25]</sup>. Furthermore, the most common cause of hip fractures is reportedly a simple fall <sup>[26]</sup>, requiring consideration of fall history <sup>[27]</sup>, ambulatory ability <sup>[28]</sup>, walking time <sup>[29]</sup>, certification for long-term care or support (LTCI), the seven categories of long-term care or support in Japan <sup>[30]</sup>, poor vision <sup>[31]</sup>, nocturia <sup>[32]</sup>, dementia <sup>[33]</sup>, hypnotic drug use <sup>[34]</sup>, lumbar spinal canal stenosis <sup>[35]</sup>, grip strength <sup>[36]</sup>, bed <sup>[37]</sup>, locomotive syndrome <sup>[38]</sup>, Barthel index <sup>[39]</sup>, and living arrangement <sup>[40]</sup>. Finally, hip fracture risk is reportedly decreased by tea consumption <sup>[41]</sup>, statin use <sup>[42]</sup>, and use of anti-osteoporosis drugs <sup>[43]</sup>. However, the strength of relationships between each of these factors and hip fracture incidence remains unclear in the very old, and their analysis by traditional approaches is complicated by the presence of non-linear relationships, variable interactions, and risk of overfitting. Machine learning methods, on the other hand, could be advantageous in addressing these issues and are increasingly used by medical researchers to determine significant health-related factors and construct good performance prediction models using high-dimensional and complex datasets <sup>[44]</sup>, <sup>[45]</sup>, <sup>[46]</sup>, <sup>[47]</sup>.

Here, we analyzed 1395 cases of hip fracture patients in 23 hospitals as well as 1075 non-hip fracture control subjects. After decreasing subject number based on exclusion criteria, and matching subjects with controls by age and gender, we enrolled 604 subjects each in either hip fracture or control subject groups, with a mean age of hip fracture and control subjects of 81.8 and 81.6 years old, respectively. We then conducted comprehensive association analysis between fractures and reported risk factors including FRAX and bone mineral density, and selected significantly associated factors using a machine learning algorithm. Here, we show that 33 factors were significantly associated with hip fracture incidence after adjustment for age and gender. We identified 10 out of 40 factors sufficient to predict hip fracture incidence. Therefore, we propose a new hip fracture risk assessment tool potentially useful to predict hip fracture incidence or identify individuals at high risk or in urgent need of attention to prevent hip fractures.

Section snippets

Study design and participants

The Kumamoto STop OsteoPorotic hip fractures (K-STOP) group was organized to conduct studies of prevention of new hip fractures. K-STOP participants include 23 hospitals associated with the Department of Orthopedic Surgery of Kumamoto University, and hip fracture cases were recruited from patients admitted to 21 of those hospitals. Each facility registered participants during one year period between March 2021 and December 2022. Excluded were fracture patients who: (1) were under age 20, (2) . . . . . 

Participant enrollment

Initially we recruited 1395 cases (group 1) to the study and 1075 controls (338 in group 2 and 737 in group 3). Among controls, 27 were eliminated from group 3 based on exclusion criteria (Fig. 1). Subjects with missing data related to living arrangement and those living in nursing homes or hospitalized at the time of enrollment were excluded (460 cases and 11 controls). Controls were then matched to cases based on age (±2 years) and gender in a 1:1 ratio. Final sample sizes for analysis were . . . . . 

Discussion

The increasing number of hip fracture patients is a global concern, particularly in developed countries with large populations of the aged. To prevent hip fractures in the elderly requires an understanding of their pathogenesis and risk factors, although currently, there is limited research relevant to risk factors in the very elderly. Here, we evaluated participants with an average age of >80 years and identified ten promising risk factors from a pool of previously reported candidates or . . . . . 

CRediT authorship contribution statement

Masaru Uragami: Writing – original draft, Project administration, Investigation, Formal analysis, Data curation, Conceptualization. Kozo Matsushita: Investigation, Data curation. Yuto Shibata: Investigation, Data curation. Shu Takata: Investigation, Data curation. Tatsuki Karasugi: Supervision, Project administration, Investigation. Takanao Sueyoshi: Investigation. Tetsuro Masuda: Investigation. Takayuki Nakamura: Investigation. Takuya Tokunaga: Investigation. Satoshi Hisanaga: Investigation. 

Declaration of competing interest

The authors declare that they have no known competing financial interests or personal relationships that could have appeared to influence the work reported in this paper.

Acknowledgements

T. Miyamoto was supported by a grant-in-aid for Scientific Research in Japan and a grant from the Japan Agency for Medical Research and Development. This study was supported in part by the grand from the Japanese Orthopaedic Association (#2020-3) and the Japan Agency for Medical Research and Development2 (22dk0207053h0002).

##### 63 References online

---

#### VitaminDWiki – [Falls and Fractures](/categories/falls-and-fractures) category contains

---

#### 75+ Hip fracture items in VitaminDWiki

This list is automatcially updated

<!-- {LIST()}
{list max="150"}
{filter field="title" content="\"Hip Fracture\" OR “\"Hip Surgery\" OR "\"Hip Replace\"}
{filter type="wiki page"}
{sort mode="modification_date_major_desc"}
{OUTPUT(template="table")}
{tableparams allowtableexpansion="n" shownbitems="y" title=""}
{column sort="title" label="Title" field="title" mode="raw"}{column}
{column label="Modified" sort="modification_date_major" field="modification_date_major"}
{OUTPUT}
{FORMAT(name="title")}{display name=title format="objectlink"}{FORMAT}
{FORMAT(name="modification_date_major")}{display name=modification_date_major format="date"}{FORMAT}
{LIST} -->

---

#### VitaminDWiki – [Bone Mineral Density and Vitamin D - many studies](/posts/bone-mineral-density-and-vitamin-d-many-studies)

---

#### See also in VitaminDWiki

* <a href="/posts/healthy-bones-need-calcium-vitamin-d-magnesium-silicon-vitamin-k-and-boron-2012" style="color: red; text-decoration: underline;" title="This post/category does not exist yet: Healthy bones need: Calcium, Vitamin D, Magnesium, Silicon, Vitamin K, and Boron – 2012">Healthy bones need: Calcium, Vitamin D, Magnesium, Silicon, Vitamin K, and Boron – 2012</a>

* [Osteoporotic bone fractures predicted by 12 risk factors - taking little Vitamin D is one of them – meta-analysis Aug 2023](/posts/osteoporotic-bone-fractures-predicted-by-12-risk-factors-taking-little-vitamin-d-m-meta-analysis)

<pre style="background-color: #e0e0e0; white-space: pre-wrap;">
<code class="language-text">
Markdown:
--------

&lt;!-- {maketoc Title=&quot;&quot;} --&gt;

---

#### A machine learning-based scoring system and ten factors associated with hip fracture occurrence in the elderly

Bone https://doi.org/10.1016/j.bone.2023.116865 &amp;nbsp; PDF is behind a $31 paywall

Masaru Uragami a 1, Kozo Matsushita a 1, Yuto Shibata a, Shu Takata a, Tatsuki Karasugi a, Takanao Sueyoshi a, Tetsuro Masuda a, Takayuki Nakamura a, Takuya Tokunaga a, Satoshi Hisanaga a, Masaki Yugami a, Kazuki Sugimoto a, Ryuji Yonemitsu a, Katsumasa Ideo a, Yuko Fukuma a, Kosei Takata a, Takahiro Arima a, Jyunki Kawakami a, Kazuya Maeda a, Naoto Yoshimura a…Takeshi Miyamoto a

Hip fractures are fragility fractures frequently seen in persons over 80-years-old. Although various factors, including decreased bone mineral density and a history of falls, are reported as hip fracture risks, few large-scale studies have confirmed their relevance to individuals older than 80, and tools to assess contributions of various risks to fracture development and the degree of risk are lacking. We recruited 1395 fresh hip fracture patients and 1075 controls without hip fractures and comprehensively evaluated various reported risk factors and their association with hip fracture development. We initially constructed a predictive model using Extreme Gradient Boosting (XGBoost), a machine learning algorithm, incorporating all 40 variables and evaluated the model&#39;s performance using the area under the receiver operating characteristic curve (AUC), yielding a value of 0.87. We also employed SHapley Additive exPlanation (SHAP) values to evaluate each feature&#39;s importance and ranked the top 20. We then used a stepwise selection method to determine key factors sequentially until the AUC reached a plateau nearly equal to that of all variables and identified the top 10 sufficient to evaluate hip fracture risk. 

For each, we determined the cutoff value for hip fracture occurrence and calculated scores of each variable based on the respective feature importance. 

Individual scores were: 

*  **serum 25(OH)D levels (&lt;10 ng/ml, score 7),** 

* femoral neck T-score (&lt;−3, score 5), 

* Barthel index score (&lt;100, score 3), 

* maximal handgrip strength (&lt;18 kg, score 3), 

* GLFS-25 score (≥24, score 2), 

* number of falls in previous 12 months (≥3, score 2), 

* serum IGF-1 levels (&lt;50 ng/ml, score 2), 

* cups of tea/day (≥5, score −2), 

* use of anti-osteoporosis drugs (yes, score −2), and

* BMI (&lt;18.5 kg/m2, score 1). 

Using these scores, we performed receiver operating characteristic (ROC) analysis and the resultant optimal cutoff value was 7, with a specificity of 0.78, sensitivity of 0.75, and AUC of 0.85. These ten factors and the scoring system may represent tools useful to predict hip fracture.

Introduction

Risk of hip fracture increases dramatically with advancing age in both women and men &lt;sup&gt;[1]&lt;/sup&gt;. In Japan, the proportion of elderly individuals over 65 years old is the highest in the world, and that number increased from 14.6 % in 1995 to 26.6 % in 2015. Specifically, the annual incidence of hip fractures in Japan steadily increased from 76,600 in 1992 to 193,400 in 2017 &lt;sup&gt;[2]&lt;/sup&gt;. Accordingly, the annual incidence of hip fracture worldwide is expected to rise significantly due to population aging, with estimates projecting an increase from 1.26 million cases in 1990 to at least 4.5 million by 2050 &lt;sup&gt;[3]&lt;/sup&gt;. Osteoporotic fracture is a major public health problem associated with increased dependency, morbidity, and mortality. Among all osteoporotic fractures, hip fracture occurs with the greatest morbidity, mortality, and costs. Population aging further contributes to an elevated average age of onset for hip fractures &lt;sup&gt;[4]&lt;/sup&gt;, leading to higher mortality rates, medical costs, and prolonged hospitalization durations &lt;sup&gt;[5,6]&lt;/sup&gt;. Therefore, reducing its incidence in the elderly is a pressing concern in developed countries.

The Fracture Risk Assessment Tool (FRAX; The University of Sheffield, Sheffield, UK) &lt;sup&gt;[7]&lt;/sup&gt; is currently used to predict probability of hip fractures and aid in making treatment decisions. This tool has been incorporated into over 100 clinical practice guidelines &lt;sup&gt;[8]&lt;/sup&gt;. However, clinical risk factors included in FRAX, as well as bone mineral density, decrease in magnitude of risk as individuals age, suggesting the presence of other risk factors in the very old &lt;sup&gt;[7]&lt;/sup&gt;. Therefore, the increase in average fracture age worldwide requires comparative analysis of numerous risk factors among the very old, including those included in the FRAX algorithm. Most cohort studies of individuals with a mean age of 80 years or older, however, lack data relevant to important risk factors for hip fracture, such as bone mineral density (which is typically measured by dual-energy X-ray absorptiometry) &lt;sup&gt;[9]&lt;/sup&gt;, &lt;sup&gt;[10]&lt;/sup&gt;, &lt;sup&gt;[11]&lt;/sup&gt;. As a result, our current understanding of risk factors for hip fracture among the very old is limited.

In addition to those proposed in the FRAX algorithm, various factors have been proposed as hip fracture risks, such as: previous non-fragility fractures &lt;sup&gt;[12]&lt;/sup&gt;, diabetes &lt;sup&gt;[13]&lt;/sup&gt;, stroke &lt;sup&gt;[14]&lt;/sup&gt;, hyperthyroidism &lt;sup&gt;[15]&lt;/sup&gt;, respiratory disease &lt;sup&gt;[16]&lt;/sup&gt;, cardiovascular disease &lt;sup&gt;[17]&lt;/sup&gt;, Parkinson&#39;s disease &lt;sup&gt;[18]&lt;/sup&gt;, chronic liver disease &lt;sup&gt;[19]&lt;/sup&gt;, chronic kidney disease &lt;sup&gt;[20]&lt;/sup&gt;, proton pump inhibitor use &lt;sup&gt;[21]&lt;/sup&gt;, gastric surgery &lt;sup&gt;[22]&lt;/sup&gt;, hypertension &lt;sup&gt;[23]&lt;/sup&gt;, and low serum levels of insulin-like growth factor-1 (IGF-1) &lt;sup&gt;[24]&lt;/sup&gt; or of 25-dihydroxy vitamin D (25(OH)D) &lt;sup&gt;[25]&lt;/sup&gt;. Furthermore, the most common cause of hip fractures is reportedly a simple fall &lt;sup&gt;[26]&lt;/sup&gt;, requiring consideration of fall history &lt;sup&gt;[27]&lt;/sup&gt;, ambulatory ability &lt;sup&gt;[28]&lt;/sup&gt;, walking time &lt;sup&gt;[29]&lt;/sup&gt;, certification for long-term care or support (LTCI), the seven categories of long-term care or support in Japan &lt;sup&gt;[30]&lt;/sup&gt;, poor vision &lt;sup&gt;[31]&lt;/sup&gt;, nocturia &lt;sup&gt;[32]&lt;/sup&gt;, dementia &lt;sup&gt;[33]&lt;/sup&gt;, hypnotic drug use &lt;sup&gt;[34]&lt;/sup&gt;, lumbar spinal canal stenosis &lt;sup&gt;[35]&lt;/sup&gt;, grip strength &lt;sup&gt;[36]&lt;/sup&gt;, bed &lt;sup&gt;[37]&lt;/sup&gt;, locomotive syndrome &lt;sup&gt;[38]&lt;/sup&gt;, Barthel index &lt;sup&gt;[39]&lt;/sup&gt;, and living arrangement &lt;sup&gt;[40]&lt;/sup&gt;. Finally, hip fracture risk is reportedly decreased by tea consumption &lt;sup&gt;[41]&lt;/sup&gt;, statin use &lt;sup&gt;[42]&lt;/sup&gt;, and use of anti-osteoporosis drugs &lt;sup&gt;[43]&lt;/sup&gt;. However, the strength of relationships between each of these factors and hip fracture incidence remains unclear in the very old, and their analysis by traditional approaches is complicated by the presence of non-linear relationships, variable interactions, and risk of overfitting. Machine learning methods, on the other hand, could be advantageous in addressing these issues and are increasingly used by medical researchers to determine significant health-related factors and construct good performance prediction models using high-dimensional and complex datasets &lt;sup&gt;[44]&lt;/sup&gt;, &lt;sup&gt;[45]&lt;/sup&gt;, &lt;sup&gt;[46]&lt;/sup&gt;, &lt;sup&gt;[47]&lt;/sup&gt;.

Here, we analyzed 1395 cases of hip fracture patients in 23 hospitals as well as 1075 non-hip fracture control subjects. After decreasing subject number based on exclusion criteria, and matching subjects with controls by age and gender, we enrolled 604 subjects each in either hip fracture or control subject groups, with a mean age of hip fracture and control subjects of 81.8 and 81.6 years old, respectively. We then conducted comprehensive association analysis between fractures and reported risk factors including FRAX and bone mineral density, and selected significantly associated factors using a machine learning algorithm. Here, we show that 33 factors were significantly associated with hip fracture incidence after adjustment for age and gender. We identified 10 out of 40 factors sufficient to predict hip fracture incidence. Therefore, we propose a new hip fracture risk assessment tool potentially useful to predict hip fracture incidence or identify individuals at high risk or in urgent need of attention to prevent hip fractures.

Section snippets

Study design and participants

The Kumamoto STop OsteoPorotic hip fractures (K-STOP) group was organized to conduct studies of prevention of new hip fractures. K-STOP participants include 23 hospitals associated with the Department of Orthopedic Surgery of Kumamoto University, and hip fracture cases were recruited from patients admitted to 21 of those hospitals. Each facility registered participants during one year period between March 2021 and December 2022. Excluded were fracture patients who: (1) were under age 20, (2) . . . . . 

Participant enrollment

Initially we recruited 1395 cases (group 1) to the study and 1075 controls (338 in group 2 and 737 in group 3). Among controls, 27 were eliminated from group 3 based on exclusion criteria (Fig. 1). Subjects with missing data related to living arrangement and those living in nursing homes or hospitalized at the time of enrollment were excluded (460 cases and 11 controls). Controls were then matched to cases based on age (±2 years) and gender in a 1:1 ratio. Final sample sizes for analysis were . . . . . 

Discussion

The increasing number of hip fracture patients is a global concern, particularly in developed countries with large populations of the aged. To prevent hip fractures in the elderly requires an understanding of their pathogenesis and risk factors, although currently, there is limited research relevant to risk factors in the very elderly. Here, we evaluated participants with an average age of &gt;80 years and identified ten promising risk factors from a pool of previously reported candidates or . . . . . 

CRediT authorship contribution statement

Masaru Uragami: Writing – original draft, Project administration, Investigation, Formal analysis, Data curation, Conceptualization. Kozo Matsushita: Investigation, Data curation. Yuto Shibata: Investigation, Data curation. Shu Takata: Investigation, Data curation. Tatsuki Karasugi: Supervision, Project administration, Investigation. Takanao Sueyoshi: Investigation. Tetsuro Masuda: Investigation. Takayuki Nakamura: Investigation. Takuya Tokunaga: Investigation. Satoshi Hisanaga: Investigation. 

Declaration of competing interest

The authors declare that they have no known competing financial interests or personal relationships that could have appeared to influence the work reported in this paper.

Acknowledgements

T. Miyamoto was supported by a grant-in-aid for Scientific Research in Japan and a grant from the Japan Agency for Medical Research and Development. This study was supported in part by the grand from the Japanese Orthopaedic Association (#2020-3) and the Japan Agency for Medical Research and Development2 (22dk0207053h0002).

##### 63 References online

---

#### VitaminDWiki – [Falls and Fractures](/categories/falls-and-fractures) category contains

---

#### 75+ Hip fracture items in VitaminDWiki

This list is automatcially updated

&lt;!-- {LIST()}
{list max=&quot;150&quot;}
{filter field=&quot;title&quot; content=&quot;\&quot;Hip Fracture\&quot; OR “\&quot;Hip Surgery\&quot; OR &quot;\&quot;Hip Replace\&quot;}
{filter type=&quot;wiki page&quot;}
{sort mode=&quot;modification_date_major_desc&quot;}
{OUTPUT(template=&quot;table&quot;)}
{tableparams allowtableexpansion=&quot;n&quot; shownbitems=&quot;y&quot; title=&quot;&quot;}
{column sort=&quot;title&quot; label=&quot;Title&quot; field=&quot;title&quot; mode=&quot;raw&quot;}{column}
{column label=&quot;Modified&quot; sort=&quot;modification_date_major&quot; field=&quot;modification_date_major&quot;}
{OUTPUT}
{FORMAT(name=&quot;title&quot;)}{display name=title format=&quot;objectlink&quot;}{FORMAT}
{FORMAT(name=&quot;modification_date_major&quot;)}{display name=modification_date_major format=&quot;date&quot;}{FORMAT}
{LIST} --&gt;

---

#### VitaminDWiki – [Bone Mineral Density and Vitamin D - many studies](/posts/bone-mineral-density-and-vitamin-d-many-studies)

---

#### See also in VitaminDWiki

* &lt;a href=&quot;/posts/healthy-bones-need-calcium-vitamin-d-magnesium-silicon-vitamin-k-and-boron-2012&quot; style=&quot;color: red; text-decoration: underline;&quot; title=&quot;This post/category does not exist yet: Healthy bones need: Calcium, Vitamin D, Magnesium, Silicon, Vitamin K, and Boron – 2012&quot;&gt;Healthy bones need: Calcium, Vitamin D, Magnesium, Silicon, Vitamin K, and Boron – 2012&lt;/a&gt;

* [Osteoporotic bone fractures predicted by 12 risk factors - taking little Vitamin D is one of them – meta-analysis Aug 2023](/posts/osteoporotic-bone-fractures-predicted-by-12-risk-factors-taking-little-vitamin-d-m-meta-analysis)

AST Structure:
-------------
├── DivNode
│   full_match: `{DIV(class=&quot;lefth4&quot;)}{maketoc Title=&quot;&quot;}{DIV}`
│   inner_content: `{maketoc Title=&quot;&quot;}`
│   attrs_dict:
│   │   raw_content: (class=&quot;lefth4&quot;)
│   │   class: lefth4
│   children:
│   ├── MakeTocNode
│   │   full_match: `{maketoc Title=&quot;&quot;}`
│   │   inner_content: ``
│   │   attrs_dict:
│   │   │   raw_content:  Title=&quot;&quot;
│   │   │   Title: ├── HorizontalRuleNode
│   full_match: `\n---\n`
│   inner_content: `---`├── HeadingNode
│   full_match: `!!!!A machine learning-based scoring system and ten factors associated with hip fracture occurrence in the elderly`
│   inner_content: `A machine learning-based scoring system and ten factors associated with hip fracture occurrence in the elderly`
│   level: `4`
│   children:
│   ├── TextNode
│   │   full_match: `A machine learning-based scoring system and ten factors associated with hip fracture occurrence in the elderly`
│   │   inner_content: `A machine learning-based scoring system and ten factors associated with hip fracture occurrence in the elderly`├── TextNode
│   full_match: `\nBone https://doi.org/10.1016/j.bone.2023.116865 `
│   inner_content: `\nBone https://doi.org/10.1016/j.bone.2023.116865 `├── HorizontalSpaceNode
│   full_match: `~hs~`
│   inner_content: ``
│   repetitions: `1`├── TextNode
│   full_match: ` PDF is behind a $31 paywall\nMasaru Uragami a 1, Kozo Matsushita a 1, Yuto Shibata a, Shu Takata a, Tatsuki Karasugi a, Takanao Sueyoshi a, Tetsuro Masuda a, Takayuki Nakamura a, Takuya Tokunaga a, Satoshi Hisanaga a, Masaki Yugami a, Kazuki Sugimoto a, Ryuji Yonemitsu a, Katsumasa Ideo a, Yuko Fukuma a, Kosei Takata a, Takahiro Arima a, Jyunki Kawakami a, Kazuya Maeda a, Naoto Yoshimura a…Takeshi Miyamoto a\n\nHip fractures are fragility fractures frequently seen in persons over 80-years-old. Although various factors, including decreased bone mineral density and a history of falls, are reported as hip fracture risks, few large-scale studies have confirmed their relevance to individuals older than 80, and tools to assess contributions of various risks to fracture development and the degree of risk are lacking. We recruited 1395 fresh hip fracture patients and 1075 controls without hip fractures and comprehensively evaluated various reported risk factors and their association with hip fracture development. We initially constructed a predictive model using Extreme Gradient Boosting (XGBoost), a machine learning algorithm, incorporating all 40 variables and evaluated the model&#39;s performance using the area under the receiver operating characteristic curve (AUC), yielding a value of 0.87. We also employed SHapley Additive exPlanation (SHAP) values to evaluate each feature&#39;s importance and ranked the top 20. We then used a stepwise selection method to determine key factors sequentially until the AUC reached a plateau nearly equal to that of all variables and identified the top 10 sufficient to evaluate hip fracture risk. \nFor each, we determined the cutoff value for hip fracture occurrence and calculated scores of each variable based on the respective feature importance. \nIndividual scores were: \n`
│   inner_content: ` PDF is behind a $31 paywall\nMasaru Uragami a 1, Kozo Matsushita a 1, Yuto Shibata a, Shu Takata a, Tatsuki Karasugi a, Takanao Sueyoshi a, Tetsuro Masuda a, Takayuki Nakamura a, Takuya Tokunaga a, Satoshi Hisanaga a, Masaki Yugami a, Kazuki Sugimoto a, Ryuji Yonemitsu a, Katsumasa Ideo a, Yuko Fukuma a, Kosei Takata a, Takahiro Arima a, Jyunki Kawakami a, Kazuya Maeda a, Naoto Yoshimura a…Takeshi Miyamoto a\n\nHip fractures are fragility fractures frequently seen in persons over 80-years-old. Although various factors, including decreased bone mineral density and a history of falls, are reported as hip fracture risks, few large-scale studies have confirmed their relevance to individuals older than 80, and tools to assess contributions of various risks to fracture development and the degree of risk are lacking. We recruited 1395 fresh hip fracture patients and 1075 controls without hip fractures and comprehensively evaluated various reported risk factors and their association with hip fracture development. We initially constructed a predictive model using Extreme Gradient Boosting (XGBoost), a machine learning algorithm, incorporating all 40 variables and evaluated the model&#39;s performance using the area under the receiver operating characteristic curve (AUC), yielding a value of 0.87. We also employed SHapley Additive exPlanation (SHAP) values to evaluate each feature&#39;s importance and ranked the top 20. We then used a stepwise selection method to determine key factors sequentially until the AUC reached a plateau nearly equal to that of all variables and identified the top 10 sufficient to evaluate hip fracture risk. \nFor each, we determined the cutoff value for hip fracture occurrence and calculated scores of each variable based on the respective feature importance. \nIndividual scores were: \n`├── ListItemNode
│   full_match: `*__serum 25(OH)D levels (&lt;10 ng/ml, score 7), __`
│   inner_content: `__serum 25(OH)D levels (&lt;10 ng/ml, score 7), __`
│   depth: `1`
│   children:
│   ├── BoldNode
│   │   full_match: `__serum 25(OH)D levels (&lt;10 ng/ml, score 7), __`
│   │   inner_content: `serum 25(OH)D levels (&lt;10 ng/ml, score 7), `
│   │   children:
│   │   ├── TextNode
│   │   │   full_match: `serum 25(OH)D levels (&lt;10 ng/ml, score 7), `
│   │   │   inner_content: `serum 25(OH)D levels (&lt;10 ng/ml, score 7), `├── TextNode
│   full_match: `\n`
│   inner_content: `\n`├── ListItemNode
│   full_match: `*femoral neck T-score (&lt;−3, score 5), `
│   inner_content: `femoral neck T-score (&lt;−3, score 5), `
│   depth: `1`
│   children:
│   ├── TextNode
│   │   full_match: `femoral neck T-score (&lt;−3, score 5), `
│   │   inner_content: `femoral neck T-score (&lt;−3, score 5), `├── TextNode
│   full_match: `\n`
│   inner_content: `\n`├── ListItemNode
│   full_match: `*Barthel index score (&lt;100, score 3), `
│   inner_content: `Barthel index score (&lt;100, score 3), `
│   depth: `1`
│   children:
│   ├── TextNode
│   │   full_match: `Barthel index score (&lt;100, score 3), `
│   │   inner_content: `Barthel index score (&lt;100, score 3), `├── TextNode
│   full_match: `\n`
│   inner_content: `\n`├── ListItemNode
│   full_match: `*maximal handgrip strength (&lt;18 kg, score 3), `
│   inner_content: `maximal handgrip strength (&lt;18 kg, score 3), `
│   depth: `1`
│   children:
│   ├── TextNode
│   │   full_match: `maximal handgrip strength (&lt;18 kg, score 3), `
│   │   inner_content: `maximal handgrip strength (&lt;18 kg, score 3), `├── TextNode
│   full_match: `\n`
│   inner_content: `\n`├── ListItemNode
│   full_match: `*GLFS-25 score (≥24, score 2), `
│   inner_content: `GLFS-25 score (≥24, score 2), `
│   depth: `1`
│   children:
│   ├── TextNode
│   │   full_match: `GLFS-25 score (≥24, score 2), `
│   │   inner_content: `GLFS-25 score (≥24, score 2), `├── TextNode
│   full_match: `\n`
│   inner_content: `\n`├── ListItemNode
│   full_match: `*number of falls in previous 12 months (≥3, score 2), `
│   inner_content: `number of falls in previous 12 months (≥3, score 2), `
│   depth: `1`
│   children:
│   ├── TextNode
│   │   full_match: `number of falls in previous 12 months (≥3, score 2), `
│   │   inner_content: `number of falls in previous 12 months (≥3, score 2), `├── TextNode
│   full_match: `\n`
│   inner_content: `\n`├── ListItemNode
│   full_match: `*serum IGF-1 levels (&lt;50 ng/ml, score 2), `
│   inner_content: `serum IGF-1 levels (&lt;50 ng/ml, score 2), `
│   depth: `1`
│   children:
│   ├── TextNode
│   │   full_match: `serum IGF-1 levels (&lt;50 ng/ml, score 2), `
│   │   inner_content: `serum IGF-1 levels (&lt;50 ng/ml, score 2), `├── TextNode
│   full_match: `\n`
│   inner_content: `\n`├── ListItemNode
│   full_match: `*cups of tea/day (≥5, score −2), `
│   inner_content: `cups of tea/day (≥5, score −2), `
│   depth: `1`
│   children:
│   ├── TextNode
│   │   full_match: `cups of tea/day (≥5, score −2), `
│   │   inner_content: `cups of tea/day (≥5, score −2), `├── TextNode
│   full_match: `\n`
│   inner_content: `\n`├── ListItemNode
│   full_match: `*use of anti-osteoporosis drugs (yes, score −2), and`
│   inner_content: `use of anti-osteoporosis drugs (yes, score −2), and`
│   depth: `1`
│   children:
│   ├── TextNode
│   │   full_match: `use of anti-osteoporosis drugs (yes, score −2), and`
│   │   inner_content: `use of anti-osteoporosis drugs (yes, score −2), and`├── TextNode
│   full_match: `\n`
│   inner_content: `\n`├── ListItemNode
│   full_match: `*BMI (&lt;18.5 kg/m2, score 1). `
│   inner_content: `BMI (&lt;18.5 kg/m2, score 1). `
│   depth: `1`
│   children:
│   ├── TextNode
│   │   full_match: `BMI (&lt;18.5 kg/m2, score 1). `
│   │   inner_content: `BMI (&lt;18.5 kg/m2, score 1). `├── TextNode
│   full_match: `\nUsing these scores, we performed receiver operating characteristic (ROC) analysis and the resultant optimal cutoff value was 7, with a specificity of 0.78, sensitivity of 0.75, and AUC of 0.85. These ten factors and the scoring system may represent tools useful to predict hip fracture.\n\nIntroduction\nRisk of hip fracture increases dramatically with advancing age in both women and men `
│   inner_content: `\nUsing these scores, we performed receiver operating characteristic (ROC) analysis and the resultant optimal cutoff value was 7, with a specificity of 0.78, sensitivity of 0.75, and AUC of 0.85. These ten factors and the scoring system may represent tools useful to predict hip fracture.\n\nIntroduction\nRisk of hip fracture increases dramatically with advancing age in both women and men `├── LinkNode
│   full_match: `[1]`
│   inner_content: `1`
│   url: `1`
│   children:
│   ├── TextNode
│   │   full_match: `1`
│   │   inner_content: `1`├── TextNode
│   full_match: `. In Japan, the proportion of elderly individuals over 65 years old is the highest in the world, and that number increased from 14.6 % in 1995 to 26.6 % in 2015. Specifically, the annual incidence of hip fractures in Japan steadily increased from 76,600 in 1992 to 193,400 in 2017 `
│   inner_content: `. In Japan, the proportion of elderly individuals over 65 years old is the highest in the world, and that number increased from 14.6 % in 1995 to 26.6 % in 2015. Specifically, the annual incidence of hip fractures in Japan steadily increased from 76,600 in 1992 to 193,400 in 2017 `├── LinkNode
│   full_match: `[2]`
│   inner_content: `2`
│   url: `2`
│   children:
│   ├── TextNode
│   │   full_match: `2`
│   │   inner_content: `2`├── TextNode
│   full_match: `. Accordingly, the annual incidence of hip fracture worldwide is expected to rise significantly due to population aging, with estimates projecting an increase from 1.26 million cases in 1990 to at least 4.5 million by 2050 `
│   inner_content: `. Accordingly, the annual incidence of hip fracture worldwide is expected to rise significantly due to population aging, with estimates projecting an increase from 1.26 million cases in 1990 to at least 4.5 million by 2050 `├── LinkNode
│   full_match: `[3]`
│   inner_content: `3`
│   url: `3`
│   children:
│   ├── TextNode
│   │   full_match: `3`
│   │   inner_content: `3`├── TextNode
│   full_match: `. Osteoporotic fracture is a major public health problem associated with increased dependency, morbidity, and mortality. Among all osteoporotic fractures, hip fracture occurs with the greatest morbidity, mortality, and costs. Population aging further contributes to an elevated average age of onset for hip fractures `
│   inner_content: `. Osteoporotic fracture is a major public health problem associated with increased dependency, morbidity, and mortality. Among all osteoporotic fractures, hip fracture occurs with the greatest morbidity, mortality, and costs. Population aging further contributes to an elevated average age of onset for hip fractures `├── LinkNode
│   full_match: `[4]`
│   inner_content: `4`
│   url: `4`
│   children:
│   ├── TextNode
│   │   full_match: `4`
│   │   inner_content: `4`├── TextNode
│   full_match: `, leading to higher mortality rates, medical costs, and prolonged hospitalization durations `
│   inner_content: `, leading to higher mortality rates, medical costs, and prolonged hospitalization durations `├── LinkNode
│   full_match: `[5,6]`
│   inner_content: `5,6`
│   url: `5,6`
│   children:
│   ├── TextNode
│   │   full_match: `5,6`
│   │   inner_content: `5,6`├── TextNode
│   full_match: `. Therefore, reducing its incidence in the elderly is a pressing concern in developed countries.\n\nThe Fracture Risk Assessment Tool (FRAX; The University of Sheffield, Sheffield, UK) `
│   inner_content: `. Therefore, reducing its incidence in the elderly is a pressing concern in developed countries.\n\nThe Fracture Risk Assessment Tool (FRAX; The University of Sheffield, Sheffield, UK) `├── LinkNode
│   full_match: `[7]`
│   inner_content: `7`
│   url: `7`
│   children:
│   ├── TextNode
│   │   full_match: `7`
│   │   inner_content: `7`├── TextNode
│   full_match: ` is currently used to predict probability of hip fractures and aid in making treatment decisions. This tool has been incorporated into over 100 clinical practice guidelines `
│   inner_content: ` is currently used to predict probability of hip fractures and aid in making treatment decisions. This tool has been incorporated into over 100 clinical practice guidelines `├── LinkNode
│   full_match: `[8]`
│   inner_content: `8`
│   url: `8`
│   children:
│   ├── TextNode
│   │   full_match: `8`
│   │   inner_content: `8`├── TextNode
│   full_match: `. However, clinical risk factors included in FRAX, as well as bone mineral density, decrease in magnitude of risk as individuals age, suggesting the presence of other risk factors in the very old `
│   inner_content: `. However, clinical risk factors included in FRAX, as well as bone mineral density, decrease in magnitude of risk as individuals age, suggesting the presence of other risk factors in the very old `├── LinkNode
│   full_match: `[7]`
│   inner_content: `7`
│   url: `7`
│   children:
│   ├── TextNode
│   │   full_match: `7`
│   │   inner_content: `7`├── TextNode
│   full_match: `. Therefore, the increase in average fracture age worldwide requires comparative analysis of numerous risk factors among the very old, including those included in the FRAX algorithm. Most cohort studies of individuals with a mean age of 80 years or older, however, lack data relevant to important risk factors for hip fracture, such as bone mineral density (which is typically measured by dual-energy X-ray absorptiometry) `
│   inner_content: `. Therefore, the increase in average fracture age worldwide requires comparative analysis of numerous risk factors among the very old, including those included in the FRAX algorithm. Most cohort studies of individuals with a mean age of 80 years or older, however, lack data relevant to important risk factors for hip fracture, such as bone mineral density (which is typically measured by dual-energy X-ray absorptiometry) `├── LinkNode
│   full_match: `[9]`
│   inner_content: `9`
│   url: `9`
│   children:
│   ├── TextNode
│   │   full_match: `9`
│   │   inner_content: `9`├── TextNode
│   full_match: `, `
│   inner_content: `, `├── LinkNode
│   full_match: `[10]`
│   inner_content: `10`
│   url: `10`
│   children:
│   ├── TextNode
│   │   full_match: `10`
│   │   inner_content: `10`├── TextNode
│   full_match: `, `
│   inner_content: `, `├── LinkNode
│   full_match: `[11]`
│   inner_content: `11`
│   url: `11`
│   children:
│   ├── TextNode
│   │   full_match: `11`
│   │   inner_content: `11`├── TextNode
│   full_match: `. As a result, our current understanding of risk factors for hip fracture among the very old is limited.\n\nIn addition to those proposed in the FRAX algorithm, various factors have been proposed as hip fracture risks, such as: previous non-fragility fractures `
│   inner_content: `. As a result, our current understanding of risk factors for hip fracture among the very old is limited.\n\nIn addition to those proposed in the FRAX algorithm, various factors have been proposed as hip fracture risks, such as: previous non-fragility fractures `├── LinkNode
│   full_match: `[12]`
│   inner_content: `12`
│   url: `12`
│   children:
│   ├── TextNode
│   │   full_match: `12`
│   │   inner_content: `12`├── TextNode
│   full_match: `, diabetes `
│   inner_content: `, diabetes `├── LinkNode
│   full_match: `[13]`
│   inner_content: `13`
│   url: `13`
│   children:
│   ├── TextNode
│   │   full_match: `13`
│   │   inner_content: `13`├── TextNode
│   full_match: `, stroke `
│   inner_content: `, stroke `├── LinkNode
│   full_match: `[14]`
│   inner_content: `14`
│   url: `14`
│   children:
│   ├── TextNode
│   │   full_match: `14`
│   │   inner_content: `14`├── TextNode
│   full_match: `, hyperthyroidism `
│   inner_content: `, hyperthyroidism `├── LinkNode
│   full_match: `[15]`
│   inner_content: `15`
│   url: `15`
│   children:
│   ├── TextNode
│   │   full_match: `15`
│   │   inner_content: `15`├── TextNode
│   full_match: `, respiratory disease `
│   inner_content: `, respiratory disease `├── LinkNode
│   full_match: `[16]`
│   inner_content: `16`
│   url: `16`
│   children:
│   ├── TextNode
│   │   full_match: `16`
│   │   inner_content: `16`├── TextNode
│   full_match: `, cardiovascular disease `
│   inner_content: `, cardiovascular disease `├── LinkNode
│   full_match: `[17]`
│   inner_content: `17`
│   url: `17`
│   children:
│   ├── TextNode
│   │   full_match: `17`
│   │   inner_content: `17`├── TextNode
│   full_match: `, Parkinson&#39;s disease `
│   inner_content: `, Parkinson&#39;s disease `├── LinkNode
│   full_match: `[18]`
│   inner_content: `18`
│   url: `18`
│   children:
│   ├── TextNode
│   │   full_match: `18`
│   │   inner_content: `18`├── TextNode
│   full_match: `, chronic liver disease `
│   inner_content: `, chronic liver disease `├── LinkNode
│   full_match: `[19]`
│   inner_content: `19`
│   url: `19`
│   children:
│   ├── TextNode
│   │   full_match: `19`
│   │   inner_content: `19`├── TextNode
│   full_match: `, chronic kidney disease `
│   inner_content: `, chronic kidney disease `├── LinkNode
│   full_match: `[20]`
│   inner_content: `20`
│   url: `20`
│   children:
│   ├── TextNode
│   │   full_match: `20`
│   │   inner_content: `20`├── TextNode
│   full_match: `, proton pump inhibitor use `
│   inner_content: `, proton pump inhibitor use `├── LinkNode
│   full_match: `[21]`
│   inner_content: `21`
│   url: `21`
│   children:
│   ├── TextNode
│   │   full_match: `21`
│   │   inner_content: `21`├── TextNode
│   full_match: `, gastric surgery `
│   inner_content: `, gastric surgery `├── LinkNode
│   full_match: `[22]`
│   inner_content: `22`
│   url: `22`
│   children:
│   ├── TextNode
│   │   full_match: `22`
│   │   inner_content: `22`├── TextNode
│   full_match: `, hypertension `
│   inner_content: `, hypertension `├── LinkNode
│   full_match: `[23]`
│   inner_content: `23`
│   url: `23`
│   children:
│   ├── TextNode
│   │   full_match: `23`
│   │   inner_content: `23`├── TextNode
│   full_match: `, and low serum levels of insulin-like growth factor-1 (IGF-1) `
│   inner_content: `, and low serum levels of insulin-like growth factor-1 (IGF-1) `├── LinkNode
│   full_match: `[24]`
│   inner_content: `24`
│   url: `24`
│   children:
│   ├── TextNode
│   │   full_match: `24`
│   │   inner_content: `24`├── TextNode
│   full_match: ` or of 25-dihydroxy vitamin D (25(OH)D) `
│   inner_content: ` or of 25-dihydroxy vitamin D (25(OH)D) `├── LinkNode
│   full_match: `[25]`
│   inner_content: `25`
│   url: `25`
│   children:
│   ├── TextNode
│   │   full_match: `25`
│   │   inner_content: `25`├── TextNode
│   full_match: `. Furthermore, the most common cause of hip fractures is reportedly a simple fall `
│   inner_content: `. Furthermore, the most common cause of hip fractures is reportedly a simple fall `├── LinkNode
│   full_match: `[26]`
│   inner_content: `26`
│   url: `26`
│   children:
│   ├── TextNode
│   │   full_match: `26`
│   │   inner_content: `26`├── TextNode
│   full_match: `, requiring consideration of fall history `
│   inner_content: `, requiring consideration of fall history `├── LinkNode
│   full_match: `[27]`
│   inner_content: `27`
│   url: `27`
│   children:
│   ├── TextNode
│   │   full_match: `27`
│   │   inner_content: `27`├── TextNode
│   full_match: `, ambulatory ability `
│   inner_content: `, ambulatory ability `├── LinkNode
│   full_match: `[28]`
│   inner_content: `28`
│   url: `28`
│   children:
│   ├── TextNode
│   │   full_match: `28`
│   │   inner_content: `28`├── TextNode
│   full_match: `, walking time `
│   inner_content: `, walking time `├── LinkNode
│   full_match: `[29]`
│   inner_content: `29`
│   url: `29`
│   children:
│   ├── TextNode
│   │   full_match: `29`
│   │   inner_content: `29`├── TextNode
│   full_match: `, certification for long-term care or support (LTCI), the seven categories of long-term care or support in Japan `
│   inner_content: `, certification for long-term care or support (LTCI), the seven categories of long-term care or support in Japan `├── LinkNode
│   full_match: `[30]`
│   inner_content: `30`
│   url: `30`
│   children:
│   ├── TextNode
│   │   full_match: `30`
│   │   inner_content: `30`├── TextNode
│   full_match: `, poor vision `
│   inner_content: `, poor vision `├── LinkNode
│   full_match: `[31]`
│   inner_content: `31`
│   url: `31`
│   children:
│   ├── TextNode
│   │   full_match: `31`
│   │   inner_content: `31`├── TextNode
│   full_match: `, nocturia `
│   inner_content: `, nocturia `├── LinkNode
│   full_match: `[32]`
│   inner_content: `32`
│   url: `32`
│   children:
│   ├── TextNode
│   │   full_match: `32`
│   │   inner_content: `32`├── TextNode
│   full_match: `, dementia `
│   inner_content: `, dementia `├── LinkNode
│   full_match: `[33]`
│   inner_content: `33`
│   url: `33`
│   children:
│   ├── TextNode
│   │   full_match: `33`
│   │   inner_content: `33`├── TextNode
│   full_match: `, hypnotic drug use `
│   inner_content: `, hypnotic drug use `├── LinkNode
│   full_match: `[34]`
│   inner_content: `34`
│   url: `34`
│   children:
│   ├── TextNode
│   │   full_match: `34`
│   │   inner_content: `34`├── TextNode
│   full_match: `, lumbar spinal canal stenosis `
│   inner_content: `, lumbar spinal canal stenosis `├── LinkNode
│   full_match: `[35]`
│   inner_content: `35`
│   url: `35`
│   children:
│   ├── TextNode
│   │   full_match: `35`
│   │   inner_content: `35`├── TextNode
│   full_match: `, grip strength `
│   inner_content: `, grip strength `├── LinkNode
│   full_match: `[36]`
│   inner_content: `36`
│   url: `36`
│   children:
│   ├── TextNode
│   │   full_match: `36`
│   │   inner_content: `36`├── TextNode
│   full_match: `, bed `
│   inner_content: `, bed `├── LinkNode
│   full_match: `[37]`
│   inner_content: `37`
│   url: `37`
│   children:
│   ├── TextNode
│   │   full_match: `37`
│   │   inner_content: `37`├── TextNode
│   full_match: `, locomotive syndrome `
│   inner_content: `, locomotive syndrome `├── LinkNode
│   full_match: `[38]`
│   inner_content: `38`
│   url: `38`
│   children:
│   ├── TextNode
│   │   full_match: `38`
│   │   inner_content: `38`├── TextNode
│   full_match: `, Barthel index `
│   inner_content: `, Barthel index `├── LinkNode
│   full_match: `[39]`
│   inner_content: `39`
│   url: `39`
│   children:
│   ├── TextNode
│   │   full_match: `39`
│   │   inner_content: `39`├── TextNode
│   full_match: `, and living arrangement `
│   inner_content: `, and living arrangement `├── LinkNode
│   full_match: `[40]`
│   inner_content: `40`
│   url: `40`
│   children:
│   ├── TextNode
│   │   full_match: `40`
│   │   inner_content: `40`├── TextNode
│   full_match: `. Finally, hip fracture risk is reportedly decreased by tea consumption `
│   inner_content: `. Finally, hip fracture risk is reportedly decreased by tea consumption `├── LinkNode
│   full_match: `[41]`
│   inner_content: `41`
│   url: `41`
│   children:
│   ├── TextNode
│   │   full_match: `41`
│   │   inner_content: `41`├── TextNode
│   full_match: `, statin use `
│   inner_content: `, statin use `├── LinkNode
│   full_match: `[42]`
│   inner_content: `42`
│   url: `42`
│   children:
│   ├── TextNode
│   │   full_match: `42`
│   │   inner_content: `42`├── TextNode
│   full_match: `, and use of anti-osteoporosis drugs `
│   inner_content: `, and use of anti-osteoporosis drugs `├── LinkNode
│   full_match: `[43]`
│   inner_content: `43`
│   url: `43`
│   children:
│   ├── TextNode
│   │   full_match: `43`
│   │   inner_content: `43`├── TextNode
│   full_match: `. However, the strength of relationships between each of these factors and hip fracture incidence remains unclear in the very old, and their analysis by traditional approaches is complicated by the presence of non-linear relationships, variable interactions, and risk of overfitting. Machine learning methods, on the other hand, could be advantageous in addressing these issues and are increasingly used by medical researchers to determine significant health-related factors and construct good performance prediction models using high-dimensional and complex datasets `
│   inner_content: `. However, the strength of relationships between each of these factors and hip fracture incidence remains unclear in the very old, and their analysis by traditional approaches is complicated by the presence of non-linear relationships, variable interactions, and risk of overfitting. Machine learning methods, on the other hand, could be advantageous in addressing these issues and are increasingly used by medical researchers to determine significant health-related factors and construct good performance prediction models using high-dimensional and complex datasets `├── LinkNode
│   full_match: `[44]`
│   inner_content: `44`
│   url: `44`
│   children:
│   ├── TextNode
│   │   full_match: `44`
│   │   inner_content: `44`├── TextNode
│   full_match: `, `
│   inner_content: `, `├── LinkNode
│   full_match: `[45]`
│   inner_content: `45`
│   url: `45`
│   children:
│   ├── TextNode
│   │   full_match: `45`
│   │   inner_content: `45`├── TextNode
│   full_match: `, `
│   inner_content: `, `├── LinkNode
│   full_match: `[46]`
│   inner_content: `46`
│   url: `46`
│   children:
│   ├── TextNode
│   │   full_match: `46`
│   │   inner_content: `46`├── TextNode
│   full_match: `, `
│   inner_content: `, `├── LinkNode
│   full_match: `[47]`
│   inner_content: `47`
│   url: `47`
│   children:
│   ├── TextNode
│   │   full_match: `47`
│   │   inner_content: `47`├── TextNode
│   full_match: `.\n\nHere, we analyzed 1395 cases of hip fracture patients in 23 hospitals as well as 1075 non-hip fracture control subjects. After decreasing subject number based on exclusion criteria, and matching subjects with controls by age and gender, we enrolled 604 subjects each in either hip fracture or control subject groups, with a mean age of hip fracture and control subjects of 81.8 and 81.6 years old, respectively. We then conducted comprehensive association analysis between fractures and reported risk factors including FRAX and bone mineral density, and selected significantly associated factors using a machine learning algorithm. Here, we show that 33 factors were significantly associated with hip fracture incidence after adjustment for age and gender. We identified 10 out of 40 factors sufficient to predict hip fracture incidence. Therefore, we propose a new hip fracture risk assessment tool potentially useful to predict hip fracture incidence or identify individuals at high risk or in urgent need of attention to prevent hip fractures.\n\nSection snippets\nStudy design and participants\nThe Kumamoto STop OsteoPorotic hip fractures (K-STOP) group was organized to conduct studies of prevention of new hip fractures. K-STOP participants include 23 hospitals associated with the Department of Orthopedic Surgery of Kumamoto University, and hip fracture cases were recruited from patients admitted to 21 of those hospitals. Each facility registered participants during one year period between March 2021 and December 2022. Excluded were fracture patients who: (1) were under age 20, (2) . . . . . \n\nParticipant enrollment\nInitially we recruited 1395 cases (group 1) to the study and 1075 controls (338 in group 2 and 737 in group 3). Among controls, 27 were eliminated from group 3 based on exclusion criteria (Fig. 1). Subjects with missing data related to living arrangement and those living in nursing homes or hospitalized at the time of enrollment were excluded (460 cases and 11 controls). Controls were then matched to cases based on age (±2 years) and gender in a 1:1 ratio. Final sample sizes for analysis were . . . . . \n\nDiscussion\nThe increasing number of hip fracture patients is a global concern, particularly in developed countries with large populations of the aged. To prevent hip fractures in the elderly requires an understanding of their pathogenesis and risk factors, although currently, there is limited research relevant to risk factors in the very elderly. Here, we evaluated participants with an average age of &gt;80 years and identified ten promising risk factors from a pool of previously reported candidates or . . . . . \n\nCRediT authorship contribution statement\nMasaru Uragami: Writing – original draft, Project administration, Investigation, Formal analysis, Data curation, Conceptualization. Kozo Matsushita: Investigation, Data curation. Yuto Shibata: Investigation, Data curation. Shu Takata: Investigation, Data curation. Tatsuki Karasugi: Supervision, Project administration, Investigation. Takanao Sueyoshi: Investigation. Tetsuro Masuda: Investigation. Takayuki Nakamura: Investigation. Takuya Tokunaga: Investigation. Satoshi Hisanaga: Investigation. \n\nDeclaration of competing interest\nThe authors declare that they have no known competing financial interests or personal relationships that could have appeared to influence the work reported in this paper.\n\nAcknowledgements\nT. Miyamoto was supported by a grant-in-aid for Scientific Research in Japan and a grant from the Japan Agency for Medical Research and Development. This study was supported in part by the grand from the Japanese Orthopaedic Association (#2020-3) and the Japan Agency for Medical Research and Development2 (22dk0207053h0002).\n`
│   inner_content: `.\n\nHere, we analyzed 1395 cases of hip fracture patients in 23 hospitals as well as 1075 non-hip fracture control subjects. After decreasing subject number based on exclusion criteria, and matching subjects with controls by age and gender, we enrolled 604 subjects each in either hip fracture or control subject groups, with a mean age of hip fracture and control subjects of 81.8 and 81.6 years old, respectively. We then conducted comprehensive association analysis between fractures and reported risk factors including FRAX and bone mineral density, and selected significantly associated factors using a machine learning algorithm. Here, we show that 33 factors were significantly associated with hip fracture incidence after adjustment for age and gender. We identified 10 out of 40 factors sufficient to predict hip fracture incidence. Therefore, we propose a new hip fracture risk assessment tool potentially useful to predict hip fracture incidence or identify individuals at high risk or in urgent need of attention to prevent hip fractures.\n\nSection snippets\nStudy design and participants\nThe Kumamoto STop OsteoPorotic hip fractures (K-STOP) group was organized to conduct studies of prevention of new hip fractures. K-STOP participants include 23 hospitals associated with the Department of Orthopedic Surgery of Kumamoto University, and hip fracture cases were recruited from patients admitted to 21 of those hospitals. Each facility registered participants during one year period between March 2021 and December 2022. Excluded were fracture patients who: (1) were under age 20, (2) . . . . . \n\nParticipant enrollment\nInitially we recruited 1395 cases (group 1) to the study and 1075 controls (338 in group 2 and 737 in group 3). Among controls, 27 were eliminated from group 3 based on exclusion criteria (Fig. 1). Subjects with missing data related to living arrangement and those living in nursing homes or hospitalized at the time of enrollment were excluded (460 cases and 11 controls). Controls were then matched to cases based on age (±2 years) and gender in a 1:1 ratio. Final sample sizes for analysis were . . . . . \n\nDiscussion\nThe increasing number of hip fracture patients is a global concern, particularly in developed countries with large populations of the aged. To prevent hip fractures in the elderly requires an understanding of their pathogenesis and risk factors, although currently, there is limited research relevant to risk factors in the very elderly. Here, we evaluated participants with an average age of &gt;80 years and identified ten promising risk factors from a pool of previously reported candidates or . . . . . \n\nCRediT authorship contribution statement\nMasaru Uragami: Writing – original draft, Project administration, Investigation, Formal analysis, Data curation, Conceptualization. Kozo Matsushita: Investigation, Data curation. Yuto Shibata: Investigation, Data curation. Shu Takata: Investigation, Data curation. Tatsuki Karasugi: Supervision, Project administration, Investigation. Takanao Sueyoshi: Investigation. Tetsuro Masuda: Investigation. Takayuki Nakamura: Investigation. Takuya Tokunaga: Investigation. Satoshi Hisanaga: Investigation. \n\nDeclaration of competing interest\nThe authors declare that they have no known competing financial interests or personal relationships that could have appeared to influence the work reported in this paper.\n\nAcknowledgements\nT. Miyamoto was supported by a grant-in-aid for Scientific Research in Japan and a grant from the Japan Agency for Medical Research and Development. This study was supported in part by the grand from the Japanese Orthopaedic Association (#2020-3) and the Japan Agency for Medical Research and Development2 (22dk0207053h0002).\n`├── HeadingNode
│   full_match: `\n!!!!!63 References online`
│   inner_content: `63 References online`
│   level: `5`
│   children:
│   ├── TextNode
│   │   full_match: `63 References online`
│   │   inner_content: `63 References online`├── HorizontalRuleNode
│   full_match: `\n---\n`
│   inner_content: `---`├── HeadingNode
│   full_match: `!!!!VitaminDWiki – ((Falls and Fractures)) category contains`
│   inner_content: `VitaminDWiki – ((Falls and Fractures)) category contains`
│   level: `4`
│   children:
│   ├── TextNode
│   │   full_match: `VitaminDWiki – `
│   │   inner_content: `VitaminDWiki – `
│   ├── LocalLinkNode
│   │   full_match: `((Falls and Fractures))`
│   │   inner_content: `Falls and Fractures`
│   │   page: `Falls and Fractures`
│   │   children:
│   │   ├── TextNode
│   │   │   full_match: `Falls and Fractures`
│   │   │   inner_content: `Falls and Fractures`
│   ├── TextNode
│   │   full_match: ` category contains`
│   │   inner_content: ` category contains`├── TextNode
│   full_match: `\n`
│   inner_content: `\n`├── IncludeNode
│   full_match: `{include page=&quot;Falls and Fractures&quot; start=&quot;~tc~ start ~/tc~&quot; stop=&quot;~tc~ end ~/tc~&quot;}`
│   inner_content: ``
│   attrs_dict:
│   │   raw_content:  page=&quot;Falls and Fractures&quot; start=&quot;~tc~ start ~/tc~&quot; stop=&quot;~tc~ end ~/tc~&quot;
│   │   page: Falls and Fractures
│   │   start: ~tc~ start ~/tc~
│   │   stop: ~tc~ end ~/tc~
│   children:
│   ├── TextNode
│   │   full_match: ``
│   │   inner_content: ``├── HorizontalRuleNode
│   full_match: `\n---\n`
│   inner_content: `---`├── HeadingNode
│   full_match: `!!!! 75+ Hip fracture items in VitaminDWiki `
│   inner_content: `75+ Hip fracture items in VitaminDWiki`
│   level: `4`
│   children:
│   ├── TextNode
│   │   full_match: `75+ Hip fracture items in VitaminDWiki`
│   │   inner_content: `75+ Hip fracture items in VitaminDWiki`├── TextNode
│   full_match: `\n`
│   inner_content: `\n`├── EmphasisNode
│   full_match: `&#39;&#39;This list is automatcially updated&#39;&#39;`
│   inner_content: `This list is automatcially updated`
│   children:
│   ├── TextNode
│   │   full_match: `This list is automatcially updated`
│   │   inner_content: `This list is automatcially updated`├── TextNode
│   full_match: `\n`
│   inner_content: `\n`├── ListNode
│   full_match: `{LIST()}\n{list max=&quot;150&quot;}\n{filter field=&quot;title&quot; content=&quot;\&quot;Hip Fracture\&quot; OR “\&quot;Hip Surgery\&quot; OR &quot;\&quot;Hip Replace\&quot;}\n{filter type=&quot;wiki page&quot;}\n{sort mode=&quot;modification_date_major_desc&quot;}\n{OUTPUT(template=&quot;table&quot;)}\n{tableparams allowtableexpansion=&quot;n&quot; shownbitems=&quot;y&quot; title=&quot;&quot;}\n{column sort=&quot;title&quot; label=&quot;Title&quot; field=&quot;title&quot; mode=&quot;raw&quot;}{column}\n{column label=&quot;Modified&quot; sort=&quot;modification_date_major&quot; field=&quot;modification_date_major&quot;}\n{OUTPUT}\n{FORMAT(name=&quot;title&quot;)}{display name=title format=&quot;objectlink&quot;}{FORMAT}\n{FORMAT(name=&quot;modification_date_major&quot;)}{display name=modification_date_major format=&quot;date&quot;}{FORMAT}\n{LIST}`
│   inner_content: `\n{list max=&quot;150&quot;}\n{filter field=&quot;title&quot; content=&quot;\&quot;Hip Fracture\&quot; OR “\&quot;Hip Surgery\&quot; OR &quot;\&quot;Hip Replace\&quot;}\n{filter type=&quot;wiki page&quot;}\n{sort mode=&quot;modification_date_major_desc&quot;}\n{OUTPUT(template=&quot;table&quot;)}\n{tableparams allowtableexpansion=&quot;n&quot; shownbitems=&quot;y&quot; title=&quot;&quot;}\n{column sort=&quot;title&quot; label=&quot;Title&quot; field=&quot;title&quot; mode=&quot;raw&quot;}{column}\n{column label=&quot;Modified&quot; sort=&quot;modification_date_major&quot; field=&quot;modification_date_major&quot;}\n{OUTPUT}\n{FORMAT(name=&quot;title&quot;)}{display name=title format=&quot;objectlink&quot;}{FORMAT}\n{FORMAT(name=&quot;modification_date_major&quot;)}{display name=modification_date_major format=&quot;date&quot;}{FORMAT}\n`
│   attrs_dict:
│   │   raw_content: 
│   children:
│   ├── TextNode
│   │   full_match: `\n{list max=&quot;150&quot;}\n{filter field=&quot;title&quot; content=&quot;\&quot;Hip Fracture\&quot; OR “\&quot;Hip Surgery\&quot; OR &quot;\&quot;Hip Replace\&quot;}\n{filter type=&quot;wiki page&quot;}\n{sort mode=&quot;modification_date_major_desc&quot;}\n{OUTPUT(template=&quot;table&quot;)}\n{tableparams allowtableexpansion=&quot;n&quot; shownbitems=&quot;y&quot; title=&quot;&quot;}\n{column sort=&quot;title&quot; label=&quot;Title&quot; field=&quot;title&quot; mode=&quot;raw&quot;}{column}\n{column label=&quot;Modified&quot; sort=&quot;modification_date_major&quot; field=&quot;modification_date_major&quot;}\n{OUTPUT}\n{FORMAT(name=&quot;title&quot;)}{display name=title format=&quot;objectlink&quot;}{FORMAT}\n{FORMAT(name=&quot;modification_date_major&quot;)}{display name=modification_date_major format=&quot;date&quot;}{FORMAT}\n`
│   │   inner_content: `\n{list max=&quot;150&quot;}\n{filter field=&quot;title&quot; content=&quot;\&quot;Hip Fracture\&quot; OR “\&quot;Hip Surgery\&quot; OR &quot;\&quot;Hip Replace\&quot;}\n{filter type=&quot;wiki page&quot;}\n{sort mode=&quot;modification_date_major_desc&quot;}\n{OUTPUT(template=&quot;table&quot;)}\n{tableparams allowtableexpansion=&quot;n&quot; shownbitems=&quot;y&quot; title=&quot;&quot;}\n{column sort=&quot;title&quot; label=&quot;Title&quot; field=&quot;title&quot; mode=&quot;raw&quot;}{column}\n{column label=&quot;Modified&quot; sort=&quot;modification_date_major&quot; field=&quot;modification_date_major&quot;}\n{OUTPUT}\n{FORMAT(name=&quot;title&quot;)}{display name=title format=&quot;objectlink&quot;}{FORMAT}\n{FORMAT(name=&quot;modification_date_major&quot;)}{display name=modification_date_major format=&quot;date&quot;}{FORMAT}\n`├── HorizontalRuleNode
│   full_match: `\n---\n`
│   inner_content: `---`├── HeadingNode
│   full_match: `!!!!VitaminDWiki – ((Bone Mineral Density and Vitamin D - many studies))`
│   inner_content: `VitaminDWiki – ((Bone Mineral Density and Vitamin D - many studies))`
│   level: `4`
│   children:
│   ├── TextNode
│   │   full_match: `VitaminDWiki – `
│   │   inner_content: `VitaminDWiki – `
│   ├── LocalLinkNode
│   │   full_match: `((Bone Mineral Density and Vitamin D - many studies))`
│   │   inner_content: `Bone Mineral Density and Vitamin D - many studies`
│   │   page: `Bone Mineral Density and Vitamin D - many studies`
│   │   children:
│   │   ├── TextNode
│   │   │   full_match: `Bone Mineral Density and Vitamin D - many studies`
│   │   │   inner_content: `Bone Mineral Density and Vitamin D - many studies`├── HorizontalRuleNode
│   full_match: `\n---\n`
│   inner_content: `---`├── HeadingNode
│   full_match: `!!!!See also in VitaminDWiki `
│   inner_content: `See also in VitaminDWiki`
│   level: `4`
│   children:
│   ├── TextNode
│   │   full_match: `See also in VitaminDWiki`
│   │   inner_content: `See also in VitaminDWiki`├── TextNode
│   full_match: `\n`
│   inner_content: `\n`├── ListItemNode
│   full_match: `*((Healthy bones need: Calcium, Vitamin D, Magnesium, Silicon, Vitamin K, and Boron – 2012))`
│   inner_content: `((Healthy bones need: Calcium, Vitamin D, Magnesium, Silicon, Vitamin K, and Boron – 2012))`
│   depth: `1`
│   children:
│   ├── LocalLinkNode
│   │   full_match: `((Healthy bones need: Calcium, Vitamin D, Magnesium, Silicon, Vitamin K, and Boron – 2012))`
│   │   inner_content: `Healthy bones need: Calcium, Vitamin D, Magnesium, Silicon, Vitamin K, and Boron – 2012`
│   │   page: `Healthy bones need: Calcium, Vitamin D, Magnesium, Silicon, Vitamin K, and Boron – 2012`
│   │   children:
│   │   ├── TextNode
│   │   │   full_match: `Healthy bones need: Calcium, Vitamin D, Magnesium, Silicon, Vitamin K, and Boron – 2012`
│   │   │   inner_content: `Healthy bones need: Calcium, Vitamin D, Magnesium, Silicon, Vitamin K, and Boron – 2012`├── TextNode
│   full_match: `\n`
│   inner_content: `\n`├── ListItemNode
│   full_match: `*((Osteoporotic bone fractures predicted by 12 risk factors - taking little Vitamin D is one of them – meta-analysis Aug 2023))`
│   inner_content: `((Osteoporotic bone fractures predicted by 12 risk factors - taking little Vitamin D is one of them – meta-analysis Aug 2023))`
│   depth: `1`
│   children:
│   ├── LocalLinkNode
│   │   full_match: `((Osteoporotic bone fractures predicted by 12 risk factors - taking little Vitamin D is one of them – meta-analysis Aug 2023))`
│   │   inner_content: `Osteoporotic bone fractures predicted by 12 risk factors - taking little Vitamin D is one of them – meta-analysis Aug 2023`
│   │   page: `Osteoporotic bone fractures predicted by 12 risk factors - taking little Vitamin D is one of them – meta-analysis Aug 2023`
│   │   children:
│   │   ├── TextNode
│   │   │   full_match: `Osteoporotic bone fractures predicted by 12 risk factors - taking little Vitamin D is one of them – meta-analysis Aug 2023`
│   │   │   inner_content: `Osteoporotic bone fractures predicted by 12 risk factors - taking little Vitamin D is one of them – meta-analysis Aug 2023`

Original Tiki:
-------------
{DIV(class=&quot;lefth4&quot;)}{maketoc Title=&quot;&quot;}{DIV}
---
!!!!A machine learning-based scoring system and ten factors associated with hip fracture occurrence in the elderly
Bone https://doi.org/10.1016/j.bone.2023.116865 ~hs~ PDF is behind a $31 paywall
Masaru Uragami a 1, Kozo Matsushita a 1, Yuto Shibata a, Shu Takata a, Tatsuki Karasugi a, Takanao Sueyoshi a, Tetsuro Masuda a, Takayuki Nakamura a, Takuya Tokunaga a, Satoshi Hisanaga a, Masaki Yugami a, Kazuki Sugimoto a, Ryuji Yonemitsu a, Katsumasa Ideo a, Yuko Fukuma a, Kosei Takata a, Takahiro Arima a, Jyunki Kawakami a, Kazuya Maeda a, Naoto Yoshimura a…Takeshi Miyamoto a

Hip fractures are fragility fractures frequently seen in persons over 80-years-old. Although various factors, including decreased bone mineral density and a history of falls, are reported as hip fracture risks, few large-scale studies have confirmed their relevance to individuals older than 80, and tools to assess contributions of various risks to fracture development and the degree of risk are lacking. We recruited 1395 fresh hip fracture patients and 1075 controls without hip fractures and comprehensively evaluated various reported risk factors and their association with hip fracture development. We initially constructed a predictive model using Extreme Gradient Boosting (XGBoost), a machine learning algorithm, incorporating all 40 variables and evaluated the model&#39;s performance using the area under the receiver operating characteristic curve (AUC), yielding a value of 0.87. We also employed SHapley Additive exPlanation (SHAP) values to evaluate each feature&#39;s importance and ranked the top 20. We then used a stepwise selection method to determine key factors sequentially until the AUC reached a plateau nearly equal to that of all variables and identified the top 10 sufficient to evaluate hip fracture risk. 
For each, we determined the cutoff value for hip fracture occurrence and calculated scores of each variable based on the respective feature importance. 
Individual scores were: 
*__serum 25(OH)D levels (&lt;10 ng/ml, score 7), __
*femoral neck T-score (&lt;−3, score 5), 
*Barthel index score (&lt;100, score 3), 
*maximal handgrip strength (&lt;18 kg, score 3), 
*GLFS-25 score (≥24, score 2), 
*number of falls in previous 12 months (≥3, score 2), 
*serum IGF-1 levels (&lt;50 ng/ml, score 2), 
*cups of tea/day (≥5, score −2), 
*use of anti-osteoporosis drugs (yes, score −2), and
*BMI (&lt;18.5 kg/m2, score 1). 
Using these scores, we performed receiver operating characteristic (ROC) analysis and the resultant optimal cutoff value was 7, with a specificity of 0.78, sensitivity of 0.75, and AUC of 0.85. These ten factors and the scoring system may represent tools useful to predict hip fracture.

Introduction
Risk of hip fracture increases dramatically with advancing age in both women and men [1]. In Japan, the proportion of elderly individuals over 65 years old is the highest in the world, and that number increased from 14.6 % in 1995 to 26.6 % in 2015. Specifically, the annual incidence of hip fractures in Japan steadily increased from 76,600 in 1992 to 193,400 in 2017 [2]. Accordingly, the annual incidence of hip fracture worldwide is expected to rise significantly due to population aging, with estimates projecting an increase from 1.26 million cases in 1990 to at least 4.5 million by 2050 [3]. Osteoporotic fracture is a major public health problem associated with increased dependency, morbidity, and mortality. Among all osteoporotic fractures, hip fracture occurs with the greatest morbidity, mortality, and costs. Population aging further contributes to an elevated average age of onset for hip fractures [4], leading to higher mortality rates, medical costs, and prolonged hospitalization durations [5,6]. Therefore, reducing its incidence in the elderly is a pressing concern in developed countries.

The Fracture Risk Assessment Tool (FRAX; The University of Sheffield, Sheffield, UK) [7] is currently used to predict probability of hip fractures and aid in making treatment decisions. This tool has been incorporated into over 100 clinical practice guidelines [8]. However, clinical risk factors included in FRAX, as well as bone mineral density, decrease in magnitude of risk as individuals age, suggesting the presence of other risk factors in the very old [7]. Therefore, the increase in average fracture age worldwide requires comparative analysis of numerous risk factors among the very old, including those included in the FRAX algorithm. Most cohort studies of individuals with a mean age of 80 years or older, however, lack data relevant to important risk factors for hip fracture, such as bone mineral density (which is typically measured by dual-energy X-ray absorptiometry) [9], [10], [11]. As a result, our current understanding of risk factors for hip fracture among the very old is limited.

In addition to those proposed in the FRAX algorithm, various factors have been proposed as hip fracture risks, such as: previous non-fragility fractures [12], diabetes [13], stroke [14], hyperthyroidism [15], respiratory disease [16], cardiovascular disease [17], Parkinson&#39;s disease [18], chronic liver disease [19], chronic kidney disease [20], proton pump inhibitor use [21], gastric surgery [22], hypertension [23], and low serum levels of insulin-like growth factor-1 (IGF-1) [24] or of 25-dihydroxy vitamin D (25(OH)D) [25]. Furthermore, the most common cause of hip fractures is reportedly a simple fall [26], requiring consideration of fall history [27], ambulatory ability [28], walking time [29], certification for long-term care or support (LTCI), the seven categories of long-term care or support in Japan [30], poor vision [31], nocturia [32], dementia [33], hypnotic drug use [34], lumbar spinal canal stenosis [35], grip strength [36], bed [37], locomotive syndrome [38], Barthel index [39], and living arrangement [40]. Finally, hip fracture risk is reportedly decreased by tea consumption [41], statin use [42], and use of anti-osteoporosis drugs [43]. However, the strength of relationships between each of these factors and hip fracture incidence remains unclear in the very old, and their analysis by traditional approaches is complicated by the presence of non-linear relationships, variable interactions, and risk of overfitting. Machine learning methods, on the other hand, could be advantageous in addressing these issues and are increasingly used by medical researchers to determine significant health-related factors and construct good performance prediction models using high-dimensional and complex datasets [44], [45], [46], [47].

Here, we analyzed 1395 cases of hip fracture patients in 23 hospitals as well as 1075 non-hip fracture control subjects. After decreasing subject number based on exclusion criteria, and matching subjects with controls by age and gender, we enrolled 604 subjects each in either hip fracture or control subject groups, with a mean age of hip fracture and control subjects of 81.8 and 81.6 years old, respectively. We then conducted comprehensive association analysis between fractures and reported risk factors including FRAX and bone mineral density, and selected significantly associated factors using a machine learning algorithm. Here, we show that 33 factors were significantly associated with hip fracture incidence after adjustment for age and gender. We identified 10 out of 40 factors sufficient to predict hip fracture incidence. Therefore, we propose a new hip fracture risk assessment tool potentially useful to predict hip fracture incidence or identify individuals at high risk or in urgent need of attention to prevent hip fractures.

Section snippets
Study design and participants
The Kumamoto STop OsteoPorotic hip fractures (K-STOP) group was organized to conduct studies of prevention of new hip fractures. K-STOP participants include 23 hospitals associated with the Department of Orthopedic Surgery of Kumamoto University, and hip fracture cases were recruited from patients admitted to 21 of those hospitals. Each facility registered participants during one year period between March 2021 and December 2022. Excluded were fracture patients who: (1) were under age 20, (2) . . . . . 

Participant enrollment
Initially we recruited 1395 cases (group 1) to the study and 1075 controls (338 in group 2 and 737 in group 3). Among controls, 27 were eliminated from group 3 based on exclusion criteria (Fig. 1). Subjects with missing data related to living arrangement and those living in nursing homes or hospitalized at the time of enrollment were excluded (460 cases and 11 controls). Controls were then matched to cases based on age (±2 years) and gender in a 1:1 ratio. Final sample sizes for analysis were . . . . . 

Discussion
The increasing number of hip fracture patients is a global concern, particularly in developed countries with large populations of the aged. To prevent hip fractures in the elderly requires an understanding of their pathogenesis and risk factors, although currently, there is limited research relevant to risk factors in the very elderly. Here, we evaluated participants with an average age of &gt;80 years and identified ten promising risk factors from a pool of previously reported candidates or . . . . . 

CRediT authorship contribution statement
Masaru Uragami: Writing – original draft, Project administration, Investigation, Formal analysis, Data curation, Conceptualization. Kozo Matsushita: Investigation, Data curation. Yuto Shibata: Investigation, Data curation. Shu Takata: Investigation, Data curation. Tatsuki Karasugi: Supervision, Project administration, Investigation. Takanao Sueyoshi: Investigation. Tetsuro Masuda: Investigation. Takayuki Nakamura: Investigation. Takuya Tokunaga: Investigation. Satoshi Hisanaga: Investigation. 

Declaration of competing interest
The authors declare that they have no known competing financial interests or personal relationships that could have appeared to influence the work reported in this paper.

Acknowledgements
T. Miyamoto was supported by a grant-in-aid for Scientific Research in Japan and a grant from the Japan Agency for Medical Research and Development. This study was supported in part by the grand from the Japanese Orthopaedic Association (#2020-3) and the Japan Agency for Medical Research and Development2 (22dk0207053h0002).

!!!!!63 References online
---
!!!!VitaminDWiki – ((Falls and Fractures)) category contains
{include page=&quot;Falls and Fractures&quot; start=&quot;~tc~ start ~/tc~&quot; stop=&quot;~tc~ end ~/tc~&quot;}
---
!!!! 75+ Hip fracture items in VitaminDWiki 
&#39;&#39;This list is automatcially updated&#39;&#39;
{LIST()}
{list max=&quot;150&quot;}
{filter field=&quot;title&quot; content=&quot;\&quot;Hip Fracture\&quot; OR “\&quot;Hip Surgery\&quot; OR &quot;\&quot;Hip Replace\&quot;}
{filter type=&quot;wiki page&quot;}
{sort mode=&quot;modification_date_major_desc&quot;}
{OUTPUT(template=&quot;table&quot;)}
   {tableparams allowtableexpansion=&quot;n&quot; shownbitems=&quot;y&quot; title=&quot;&quot;}
    {column sort=&quot;title&quot; label=&quot;Title&quot; field=&quot;title&quot; mode=&quot;raw&quot;}{column}
    {column label=&quot;Modified&quot; sort=&quot;modification_date_major&quot; field=&quot;modification_date_major&quot;}
{OUTPUT}
{FORMAT(name=&quot;title&quot;)}{display name=title format=&quot;objectlink&quot;}{FORMAT}
{FORMAT(name=&quot;modification_date_major&quot;)}{display name=modification_date_major format=&quot;date&quot;}{FORMAT}
{LIST}
---
!!!!VitaminDWiki – ((Bone Mineral Density and Vitamin D - many studies))
---
!!!!See also in VitaminDWiki 
*((Healthy bones need: Calcium, Vitamin D, Magnesium, Silicon, Vitamin K, and Boron – 2012))
*((Osteoporotic bone fractures predicted by 12 risk factors - taking little Vitamin D is one of them – meta-analysis Aug 2023))
</code>
</pre>
