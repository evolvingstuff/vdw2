{
    "title": "On-line Vitamin D response simulation",
    "slug": "on-line-vitamin-d-response-simulation",
    "aliases": [
        "/On-line+Vitamin+D+response+simulation+\u2013+July+2021",
        "/12570"
    ],
    "tiki_page_id": 12570,
    "date": "2021-05-07",
    "categories": [
        "How, and when",
        "Predict"
    ],
    "tags": [
        "How, and when",
        "Predict",
        "blood levels",
        "dosage",
        "health risk",
        "high dose",
        "obesity",
        "therapeutic intervention",
        "vitamin d"
    ]
}


**Personalise vitamin D 3 using physiologically based pharmacokinetic modelling** 

CPT Pharmacometrics Syst Pharmacol. 2021 May 7. [doi: 10.1002/psp4.12640](https://doi.org/10.1002/psp4.12640)

Zhonghui Huang 1, Tao You 1

 **<i class="fas fa-file-pdf" style="margin-right: 0.3em;"></i><a href="https://d378j1rmrlek7x.cloudfront.net/attachments/pdf/pk-model-compressed.pdf">Download the PDF from VitaminDWiki </a>** 

{{< toc >}}

---

#### [Click here to run simulation](https://beyond.shinyapps.io/vitamind3/)

---

#### <span style="color:#00F;">Model response for 20 ng 4,000 IU</span>

<img src="https://d378j1rmrlek7x.cloudfront.net/attachments/jpeg/model-response-20-ng-4-0000-iu.jpg" alt="image" width="400">

#### <span style="color:#00F;">Model response for 20 ng 2,000 IU</span>

<img src="https://d378j1rmrlek7x.cloudfront.net/attachments/jpeg/mdoel-response-20-ng-2-000-iu-on-then-off.jpg" alt="image" width="400">

#### <span style="color:#00F;">Model 1.0</span>

<img src="https://d378j1rmrlek7x.cloudfront.net/attachments/jpeg/model.jpg" alt="image" width="700">

#### Model development

<img src="https://d378j1rmrlek7x.cloudfront.net/attachments/jpeg/model-development.jpg" alt="image" width="900">

#### <span style="color:#00F;">Observed data used to make the model</span>

<img src="https://d378j1rmrlek7x.cloudfront.net/attachments/jpeg/1-year-responses.jpg" alt="image" width="600">

#### <span style="color:#00F;">Observed Increases used to make the model</span>

<img src="https://d378j1rmrlek7x.cloudfront.net/attachments/jpeg/response-vs-baseline.jpg" alt="image" width="400">

#### <span style="color:#00F;">Observed single day dose-response</span>

<img src="https://d378j1rmrlek7x.cloudfront.net/attachments/jpeg/single-dose-days.jpg" alt="image" width="500"> not used in model?

<img src="https://d378j1rmrlek7x.cloudfront.net/attachments/jpeg/single-dose-months.jpg" alt="image" width="500"> not used in model?

Plasma concentration of Vitamin D3 metabolite 25-hydroxyvitamin D3 (25(OH)D3 ) is variable among individuals. The objective of this study is to establish an accurate model for 25(OH)D3 pharmacokinetics (PK) to support selection of a suitable dose regimen for an individual. We collated Vitamin D3 and 25(OH)D3 plasma PK data from reported clinical trials and developed a physiologically based pharmacokinetic (PBPK) model to appropriately recapitulate training data. Model predictions were then qualified with 25(OH)D3 plasma PK under vitamin D3 and 25(OH)D3 dose regimens distinct from training data. From data exploration, we observed the increase in plasma 25(OH)D3 after repeated dosing was negatively correlated with 25(OH)D3 baseline levels. 

Our final model included a first-order vitamin D3 absorption, a first-order vitamin D3 metabolism and a nonlinear 25(OH)D3 elimination function. This structure explained the apparent paradox. 

Remarkably, the model accurately predicted plasma 25(OH)D3 following repeated dosing up to 1250μg/d in the test set. It also made sensible predictions for large single Vitamin D3 doses up to 50000μg in the test set. 

Model predicts 10μg/d regimen may be ineffective for achieving sufficiency (plasma 25(OH)D3 ≥ 75nmol/L) for a severely deficient individual (baseline 25(OH)D3 = 10nmol/L), and it might take the same person over 200 days to reach sufficiency at 20μg/d dose. We propose to personalise vitamin D3 supplementation protocol with this PBPK model. It would require measuring 25(OH)D3 baseline levels, which is not routinely performed under the current UK public health advice.

---

#### VitaminDWiki suggestions of possible refinements to version 1.0

Model 1.0 includes data from response by groups (not individuals) to daily dosing 

 **Refinements that would likely decrease the response** 

* weight, 

* obesity, 

* genes,

* poor gut, 

* Poor liver, Poor kidney

* Age (seniors have less bio-availability)

 **Refinements that might increase the response** 

* other forms of vitamin D (topical, gut-friendly, etc)

* co-factors (Mg, etc) 

 **Other refinements of interest** 

* other dosing intervals (weekly, 2 per month, monthly)

* loading dose

* loading dose followed by maintenance dosing

#### [Click here to run simulation](https://beyond.shinyapps.io/vitamind3/)

Minimum that ce be simulated is daily for 1 week

Enter parameters then click on SiMULATE.

<img src="https://d378j1rmrlek7x.cloudfront.net/attachments/jpeg/simulation.jpg" alt="image" width="800">  **Example**