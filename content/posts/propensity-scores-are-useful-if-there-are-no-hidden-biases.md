{
    "title": "Propensity Scores are useful if there are no hidden biases",
    "slug": "propensity-scores-are-useful-if-there-are-no-hidden-biases",
    "aliases": [
        "/Propensity+Scores+are+useful+if+there+are+no+hidden+biases",
        "/2802"
    ],
    "tiki_page_id": 2802,
    "date": "2012-06-03",
    "categories": [
        "Evidence",
        "Intervention"
    ],
    "tags": [
        "CKD",
        "Evidence",
        "Intervention",
        "bone",
        "dosage",
        "health risk",
        "kidney",
        "life span",
        "mortality",
        "rickets",
        "smoking",
        "vitamin d"
    ]
}


**Propensity Scores for medicines**  essentially matches each patient to a control patient by 70+ characteristics

such as: age, sex, initial weight, BMI, latitude, medical history, current comorbidities, drugs being taken, etc.

 **There can, however, be hidden biases such as: selection bias and placebo effect** Propensity Score Analysis cannot compensate for selection/election bias **A person elects to participate in an experiment because he believes it might help

He believes that his actions might influence his health ( what he eats, supplements, exercise, etc)** Propensity Score Analysis cannot compensate for the placebo effect **Even taking a known sugar pill makes a person feel better

Placebo (witch doctor, white coat) effects are stronger for the more important health problems

Especially for those for which a person may feel they otherwise have little control

Very difficult to match a person with another who has the same degree of placebo reaction

A very large trial would tend to minimize differences in placebos, but not differences in selection bias 

&nbsp; ( they decided to take XX because felt it might help)

doctors often have a strong bias that no supplement can possibly help -supplements just turn into expensive urine

Different mindset in those who elect to try a supplement or elect to participate in a trial

---

#### Some people under-report the amount of vitamin D that they are taking - to not upset their doctors.

They may tend to say that they are taking 2000 IU when actually they are taking 10,000 IU

This possible under-reporting needs to be addressed

Since vitamin D seems to exert epigenetic effects <sup>[30]</sup>, data on adherence to rickets prevention could also be used to assess CVD risk in later life. 

A prerequisite would, however, be a reliable assessment of relevant covariates and cardiovascular events.

---

#### See also Web on PSA/PSM

* [Wikipedia](https://en.wikipedia.org/wiki/Propensity_score_matching)Jan 2022

   * "One disadvantage of Propensity Score Matching is that it only accounts for observed (and observable) covariates and not latent characteristics. Factors that affect assignment to treatment and outcome but that cannot be observed cannot be accounted for in the matching procedure."

   * Example of unobservables: belief that the person has some control over their health - e.g. taking a pill, eating a food, exercising, etc. will help

   * Some people elected to not participate in a trial because they had no expectation of being helped by it.

   * Judea Pearl argues about hidden biases that invalidate PSA

* Propensity Score Analysis: Recent Debate and Discussion  - 2020 <i class="fas fa-file-pdf" style="margin-right: 0.3em;"></i><a href="https://d378j1rmrlek7x.cloudfront.net/attachments/pdf/psa-increase-inbalance.pdf">PDF</a>

   * "a recent study suggested that propensity score matching may accomplish the opposite of its intended goal—increasing imbalance, inefficiency, model dependence, and bias"

   * important::  sources of selection bias

* [PubMed "propensity score analysis"](http://www.ncbi.nlm.nih.gov/pubmed?term=%22Propensity%20score%20analysis%22) 2,742 papers as of Nov 2023

   * Propensity score analysis for time-dependent exposure. March 2020 [doi: 10.21037/atm.2020.01.33.](https://doi.org/10.21037/atm.2020.01.33.) FREE PDF

* [http://www.ncbi.nlm.nih.gov/pubmed/22287812|A Tutorial and Case Study in Propensity Score Analysis: 

> An Application to Estimating the Effect of In-Hospital Smoking Cessation Counseling on Mortality] 2011** <span style="color:#00F;">PSA 2011 is attached at the bottom of this page</span> *** [How To Use Propensity Score Analysis](www.mc.vanderbilt.edu/gcrc/workshop_files/2008-04-11.pdf) 2008** <span style="color:#00F;">PDF is attached at bottom of this page</span> *** [Google Scholar search for "propensity score" "vitamin d"](http://scholar.google.com/scholar?as_ylo=2011&q=%22propensity+score%22+%22vitamin+d%22&hl=en&as_sdt=0,48&as_vis=1) 6,340 items as of Nov 2023

   * Examination of the Moderating Effect of Race on the Relationship between Vitamin D Status and COVID-19 Test Positivity Using Propensity Score Methods  Sep 2021 [FREE PDF](https://doi.org/10.1080/07315724.2021.1948932)

* [Confounding and Control of Confounding in Nonexperimental Studies of Medications in Patients With CKD](http://www.ackdjournal.org/article/S1548-5595(12)00002-X/abstract) Jan 2012

* [An Introduction to Propensity Score Methods for Reducing the Effects of Confounding in Observational Studies](http://www.ncbi.nlm.nih.gov/pmc/articles/PMC3144483/) June 2011 PDF is attached

* The Validity of "Identical Matching Placebos" -1974  <i class="fas fa-file-pdf" style="margin-right: 0.3em;"></i><a href="https://d378j1rmrlek7x.cloudfront.net/attachments/pdf/blumenthal1974.pdf">PDF</a>

   * Placebos must match in color, taste, size, etc.  AND side effects. otherwise particiants soon learn if they are in the placebo group

---

#### Causal inference with observational data: A tutorial on propensity score analysis - June 2023

The Leadership Quarterly Volume 34, Issue 3, June 2023  https://doi.org/10.1016/j.leaqua.2023.101678

Kaori Narita a, J.D. Tena a b c, Claudio Detotto c d

When treatment cannot be manipulated, propensity score analysis provides a useful way to making causal claims under the assumption of no unobserved confounders. However, it is still rarely utilised in leadership and applied psychology research. The purpose of this paper is threefold. First, it explains and discusses the application and key assumptions of the method with a particular focus on propensity score weighting. This approach is readily implementable since a weighted regression is available in most statistical software. Moreover, the approach can offer a “double robust” protection against misspecification of either the propensity score or the outcome model by including confounding variables in both models. A second aim is to discuss how propensity score analysis (and propensity score weighting, specifically) has been conducted in recent management studies and examine future challenges. Finally, we present an advanced application of the approach to illustrate how it can be employed to estimate the causal impact of leadership succession on performance using data from Italian football. The case also exemplifies how to extend the standard single treatment analysis to estimate the separate impact of different managerial characteristic changes between the old and the new manager.

{FONT(size="20")}** <i class="fas fa-file-pdf" style="margin-right: 0.3em;"></i><a href="https://d378j1rmrlek7x.cloudfront.net/attachments/pdf/causal-inference-psa-compresspdf.pdf">Download the PDF from VitaminDWiki </a> **{FONT}

---

#### Propensity score weighting for causal inference with multiple treatments - Dec 2019

Ann. Appl. Stat. 13(4): 2389-2415 (December 2019). DOI: 10.1214/19-AOAS1282

Fan Li, Fan Li

Causal or unconfounded descriptive comparisons between multiple groups are common in observational studies. Motivated from a racial disparity study in health services research, we propose a unified propensity score weighting framework, the balancing weights, for estimating causal effects with multiple treatments. These weights incorporate the generalized propensity scores to balance the weighted covariate distribution of each treatment group, all weighted toward a common prespecified target population. The class of balancing weights include several existing approaches such as the inverse probability weights and trimming weights as special cases. Within this framework, we propose a set of target estimands based on linear contrasts. We further develop the generalized overlap weights, constructed as the product of the inverse probability weights and the harmonic mean of the generalized propensity scores. The generalized overlap weighting scheme corresponds to the target population with the most overlap in covariates across the multiple treatments. These weights are bounded and thus bypass the problem of extreme propensities. We show that the generalized overlap weights minimize the total asymptotic variance of the moment weighting estimators for the pairwise contrasts within the class of balancing weights. We consider two balance check criteria and propose a new sandwich variance estimator for estimating the causal effects with generalized overlap weights. We apply these methods to study the racial disparities in medical expenditure between several racial groups using the 2009 Medical Expenditure Panel Survey (MEPS) data. Simulations were carried out to compare with existing methods.

{FONT(size="20")}** <i class="fas fa-file-pdf" style="margin-right: 0.3em;"></i><a href="https://d378j1rmrlek7x.cloudfront.net/attachments/pdf/ps-weighting.pdf">Download the PDF from VitaminDWiki </a> **{FONT}

---

#### Propensity Score Matching: The ‘Devil is in the Details’ Where More May Be Hidden than You Know

The American Journal of MedicinevVolume 133, Issue 2, Feb 2020, Pages 178-181 https://doi.org/10.1016/j.amjmed.2019.08.055

James A. Reiffel MD

Propensity score matching has been used with increasing frequency in the analyses of non-prespecified subgroups of randomized clinical trials, and in retrospective analyses of clinical trial data sets, registries, observational studies, electronic medical record analyses, and more. The method attempts to adjust post hoc for recognized unbalanced factors at baseline such that the data once analyzed will hopefully approximate or indicate what a prospective randomized data set—the “gold standard” for comparing two or more therapies—would have shown. However, for practical limitations, propensity score matching cannot assess and balance all the factors that come into play in the clinical management of patients and that may be present in the circumstances of the study. Thus, propensity score matching analyses may omit, due to nonrecognition, the effects of several clinically important but not considered factors that can affect the outcomes of the analyses being reported, causing them to possibly be misleading, or hypothesis-generating at best. This review discusses this issue, using several specific examples, and is targeted at clinicians to make them aware of the limitations of such analyses when they apply their results to patients in their care.

{FONT(size="20")}** <i class="fas fa-file-pdf" style="margin-right: 0.3em;"></i><a href="https://d378j1rmrlek7x.cloudfront.net/attachments/pdf/psa-sci-hub.pdf">Download the PDF from Sci-Hub via VitaminDWiki </a> **{FONT}