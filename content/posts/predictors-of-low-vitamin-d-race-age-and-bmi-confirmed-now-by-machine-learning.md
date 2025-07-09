{
    "title": "Predictors of low vitamin D: race, age, and BMI (confirmed now by Machine Learning)",
    "slug": "predictors-of-low-vitamin-d-race-age-and-bmi-confirmed-now-by-machine-learning",
    "aliases": [
        "/Predictors+of+low+vitamin+D+race+age+and+BMI+confirmed+now+by+Machine+Learning+\u2013+Feb+2024",
        "/15108"
    ],
    "tiki_page_id": 15108,
    "date": "2024-03-07",
    "categories": [
        "Skin - Dark",
        "Seniors",
        "Obesity",
        "Predict Vitamin D"
    ],
    "tags": [
        "Obesity",
        "Predict Vitamin D",
        "Seniors",
        "Skin - Dark",
        "vitamin d"
    ]
}


{{< toc >}}

---

#### Machine learning-based prediction of vitamin D deficiency: NHANES 2001-2018

Front. Endocrinol., 15 February 2024 Volume 15 - 2024 | https://doi.org/10.3389/fendo.2024.1327058

Jiale GuoJiale Guo 1, Qionghan HeQionghan He 2, Yehai Li*Yehai Li

1 Department of Orthopedics, Chaohu Hospital of Anhui Medical University, Hefei, China

2 Department of Infection, Chaohu Hospital of Anhui Medical University, Hefei, China

Background: Vitamin D deficiency is strongly associated with the development of several diseases. In the current context of a global pandemic of vitamin D deficiency, it is critical to identify people at high risk of vitamin D deficiency. There are no prediction tools for predicting the risk of vitamin D deficiency in the general community population, and this study aims to use machine learning to predict the risk of vitamin D deficiency using data that can be obtained through simple interviews in the community.

Methods: The National Health and Nutrition Examination Survey 2001-2018 dataset is used for the analysis which is randomly divided into training and validation sets in the ratio of 70:30. GBM, LR, NNet, RF, SVM, XGBoost methods are used to construct the models and their performance is evaluated. The best performed model was interpreted using the SHAP value and further development of the online web calculator.

Results: There were 62,919 participants enrolled in the study, and all participants included in the study were 2 years old and above, of which 20,204 (32.1%) participants had vitamin D deficiency. The models constructed by each method were evaluated using AUC as the primary evaluation statistic and ACC, PPV, NPV, SEN, SPE, F1 score, MCC, Kappa, and Brier score as secondary evaluation statistics. Finally, the XGBoost-based model has the best and near-perfect performance. The summary plot of SHAP values shows that the top three important features for this model are  **race, age, and BMI** . An online web calculator based on this model can easily and quickly predict the risk of vitamin D deficiency.

Conclusion: In this study, the XGBoost-based prediction tool performs flawlessly and is highly accurate in predicting the risk of vitamin D deficiency in community populations.

 **<i class="fas fa-file-pdf" style="margin-right: 0.3em;"></i><a href="https://d1bk1kqxc0sym.cloudfront.net/attachments/pdf/vit-d-prediction-with-machine-learning-compresspdf.pdf">Download the PDF from VitaminDWiki </a>**