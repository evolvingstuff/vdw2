{
    "title": "3X reduced mortality in one metabolic cluster of ICU patients by high-dose Vitamin D",
    "slug": "3x-reduced-mortality-in-one-metabolic-cluster-of-icu-patients-by-high-dose-vitamin-d",
    "aliases": [
        "/3X+reduced+mortality+in+one+metabolic+cluster+of+ICU+patients+by+high-dose+Vitamin+D+\u2013+Nov+2024",
        "/15553"
    ],
    "tiki_page_id": 15553,
    "date": "2024-09-21",
    "tags": [
        "asthma",
        "asthma receptor",
        "blood levels",
        "breathing",
        "genetics",
        "high dose",
        "immunity",
        "life span",
        "mortality",
        "sepsis",
        "therapeutic intervention",
        "trauma surgery",
        "vitamin d",
        "vitamin d blood test",
        "vitamin d receptor"
    ]
}


{{< toc >}}

---

#### Metabolic phenotypes and vitamin D response in the critically ill: A metabolomic cohort study

Clinical Nutrition Vol 43, # 11, Nov 2024, Pages 10-19 [https://doi.org/10.1016/j.clnu.2024.09.030](https://doi.org/10.1016/j.clnu.2024.09.030) PDF behind paywall

<img src="https://d378j1rmrlek7x.cloudfront.net/attachments/webp/metabolite.webp" alt="image" width="500">

Background & aims

Although vitamin D deficiency is common in critically ill patients, randomized controlled trials fail to demonstrate benefits of supplementation. We aimed to identify distinct vitamin D3 responsive metabolic phenotypes prior to trial intervention of high-dose vitamin D3 by applying machine learning clustering method to metabolomics data from the Correction of Vitamin D Deficiency in Critically Ill Patients (VITdAL-ICU) trial.

Methods

In the randomized, placebo-controlled VITdAL-ICU trial, critically ill adults received placebo or high-dose vitamin D3. To distinguish vitamin D3 responsive metabolic phenotypes prior to intervention, we implemented consensus clustering with partitioning around medoids algorithm to the plasma metabolome data before randomization. Individual metabolite differences were determined utilizing linear mixed-effects regression models stratified for metabolomic phenotypes with false discovery rate adjustment. The association between vitamin D3 supplementation and 180-day mortality was evaluated in each metabolic phenotype, applying multivariable logistic regression analysis.

Results

In 453 critically ill adults, the study identified 4 distinct metabolic phenotypes (clusters A. N = 134; B. N = 123; C. N = 92; D. N = 104). We found differential metabolic pathway patterns in the four clusters. Specifically, branched chain amino acid catabolic metabolites, long-chain acylcarnitines and diacylglycerol species are significantly increased in a specific metabolic phenotype (cluster D) following high-dose vitamin D3. Further, in cluster D high-dose vitamin D3 supplementation had a significantly lower adjusted odds of 180-day mortality after controlling age, sex, Simplified Acute Physiology Score II, admission diagnosis, and baseline 25-hydroxyvitamin D ( **OR 0.28**  (95%CI, 0.09–0.89); P = 0.03). In metabotype A, B, and C, high-dose vitamin D3 supplementation was not significantly associated with lower 180-day mortality following multivariable adjustment.

Conclusion

In this post-hoc cohort study of the VITdAL-ICU trial, the clustering analysis of plasma metabolome data identified biologically distinct metabolic phenotypes. Among clusters, we found the different associations between high-dose vitamin D3 supplementation and specific metabolite pathways as well as 180-day mortality. Our findings facilitate further research to validate metabolic phenotype-targeted strategies for critical illness treatments.

Introduction

Randomized trials in critical illness are most commonly negative or neutral <sup>[1]</sup>. Only 5% of large interventional trials in sepsis and ARDS are noted to be positive <sup>[2]</sup>. Sample size, patient heterogeneity, and syndrome classification of patients are frequently noted as reasons for clinical trial failure <sup>[2,3]</sup>. Arguments are emerging that the limitation to critical care trials may not be a statistical issue but is one of poor biological phenotyping <sup>[2,4]</sup>. Novel approaches to patient selection including using subphenotypes, metabolic phenotypes, and metabolomic endotypes show promise in the identification of disease mechanism patient subgroups who may benefit from specific interventions <sup>[5,6]</sup>.

Illustrative of critical illness trial failure are the recent well designed critical illness trials in high-dose vitamin D3 supplementation (Correction of Vitamin D Deficiency in Critically Ill Patients <span>[VITdAL-ICU]</span> and the Vitamin D to Improve Outcomes by Leveraging Early Treatment <span>[VIOLET]</span> trials) <sup>[7,8]</sup>. Though the VITdAL-ICU and VIOLET trials only randomized patients with low 25 hydroxyvitamin D (25(OH)D) serum levels to high-dose (540,000 international units <span>[IU]</span>) vitamin D3, both failed to demonstrate improved outcomes in the intention to treat analyses <sup>[7,8]</sup>. Trial failure occurred despite the knowledge that vitamin D deficiency is associated with adverse outcomes, high-dose vitamin D3 improves serum 25(OH)D levels and that vitamin D receptor activation regulates the expression of over 900 genes including those involved in the immune system, apoptosis, transcription regulation and response to stress <sup>[9]</sup>, <sup>[10]</sup>, <sup>[11]</sup>, <sup>[12]</sup>.

Post-hoc studies and meta-analyses suggest that benefit may exist in specific critically ill subgroups following high-dose vitamin D3 supplementation <sup>[13]</sup>, <sup>[14]</sup>, <sup>[15]</sup>. Metabolomics studies in critically ill patients allow for a snapshot of the circulating metabolic response to severity of illness <sup>[16]</sup>. Metabolic phenotypes or metabotypes are reported in asthma, cardiovascular disease, vitamin D deficiency and acute respiratory failure <span>[5,[17]</span>, <sup>[18]</sup>, <sup>[19]</sup>. But despite several well performed metabolomic studies in early critical illness, metabolic phenotype-specific response to intervention is not described <sup>[20,21]</sup>. Therefore, using plasma metabolome data from the VITdAL-ICU trial, we identified distinct metabolic phenotypes prior to intervention via an unsupervised machine learning clustering method. To test the hypothesis that mortality outcome differences exist relative to a metabolic phenotype-specific response to high-dose vitamin D3 supplementation, we analyzed VITdAL-ICU trial mortality data relative to metabolic phenotype and intervention status.

 **Section snippets** 

Materials & methods

Detailed trial and metabolomics methods are reported in Supplemental Methods. We performed a metabolomic pot-hoc cohort study analyzing metabolomics data from the VITdAL-ICU trial which randomly assigned 475 adult patients with vitamin D deficiency (25(OH)D ≤ 20 ng/mL) from the University Hospital Graz in Austria with critical illness to high-dose vitamin D3 <sup>[7]</sup>. Whole blood was collected at VITdAL-ICU trial randomization (day 0), day 3, and day 7 between 2010 and 2012. At VITdAL-ICU trial …..

Results

In the cohort (N = 453), the median <span>[IQR]</span> of age was 68 <sup>[55, 76]</sup> years, 35% were female, 54% were surgical patients, the median <span>[IQR]</span> SAPS II was 30 <sup>[23,41]</sup>, and the median <span>[IQR]</span> of baseline 25(OH)D was 12.8 <span>[9.5, 16.4]</span> ng/mL. The 28-day, 90-day, and 180-day mortality was 25%, 35%, and 39%, respectively (Table 1). There was a moderate negative correlation between the increase in 25(OH)D at day 3 in patients who received high dose vitamin D3 intervention and CRP measured at day 0….

Discussion

Large interventional trials in heterogenous critically ill populations are thought to suffer from a reduced treatment effect which decreases study power <sup>[40]</sup>. Although previous work suggests that metabolite profiles early in critical illness are predictive with adverse outcomes, our robust data argue that the plasma metabolic phenotype prior to high dose vitamin D intervention can differentiate subject pharmacokinetics of vitamin D3, phenotype specific metabolite changes and mortality outcomes [….

References (63)

---

#### VitaminDWiki [VITdAL-ICU - AMA RCT Sept 2014](/posts/vitdal-icu-ama-rct)