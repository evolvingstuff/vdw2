{
    "title": "Hip fractures are predicted by 10 factors \u2013 low Vitamin D is the biggest",
    "slug": "hip-fractures-are-predicted-by-10-factors-low-vitamin-d-is-the-biggest",
    "aliases": [
        "/Hip+fractures+are+predicted+by+10+factors+\u2013+low+Vitamin+D+is+the+biggest+\u2013+Aug+2023",
        "/14603"
    ],
    "tiki_page_id": 14603,
    "date": "2023-08-11",
    "categories": [
        "Falls and Fractures"
    ],
    "tags": [
        "CKD",
        "Falls and Fractures",
        "blood levels",
        "bone",
        "bone mineral density",
        "bone stress fractures",
        "cardiovascular",
        "cognitive",
        "dementia",
        "diabetes",
        "falls fractures",
        "hip fractures",
        "hypertension",
        "kidney",
        "life span",
        "magnesium",
        "metabolic",
        "mortality",
        "neurological",
        "osteoporosis",
        "parkinsons",
        "statins",
        "stroke",
        "vitamin d",
        "vitamin d blood test",
        "vitamin k"
    ]
}


{{< toc >}}

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

#### See also in VitaminDWiki

* [Healthy bones need: Calcium, Vitamin D, Magnesium, Silicon, Vitamin K, and Boron – 2012](/posts/healthy-bones-need-calcium-vitamin-d-magnesium-silicon-vitamin-k-and-boron-2012)

* [Osteoporotic bone fractures predicted by 12 risk factors - taking little Vitamin D is one of them – meta-analysis Aug 2023](/posts/osteoporotic-bone-fractures-predicted-by-12-risk-factors-taking-little-vitamin-d-m-meta-analysis)