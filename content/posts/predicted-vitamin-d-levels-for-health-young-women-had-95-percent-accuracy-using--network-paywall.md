{
  "title": "Predicted Vitamin D levels for health young women had 95% accuracy using neural network (paywall)",
  "slug": "predicted-vitamin-d-levels-for-health-young-women-had-95-percent-accuracy-using--network-paywall",
  "aliases": [
    "/Predicted+Vitamin+D+levels+for+health+young+women+had+95+accuracy+using+neural+network+paywall+\u2013+July+2024",
    "/15423"
  ],
  "tiki_page_id": 15423,
  "date": "2024-07-28"
}

{{< toc >}}

---

#### Proposing an Effective Deep Learning Model for Vitamin D Deficiency Diagnosis

2024 IEEE 37th International Symposium on Computer-Based Medical Systems (CBMS) DOI: 10.1109/CBMS61543.2024.00017

Asad Khattak; Junaid Asghar; Naila Tabassum; Hayat Ullah; Aurangzeb Khan; Zubair Asghar

Following the declaration of the COVID-19 pandemic by the World Health Organization, the importance of Vitamin D and the incidence of Vitamin D Deficiency (VDD) have emerged as serious worldwide healthconcerns. There is an increasing demand for noninvasive prediction approaches for determining the severity of VDD. This work collected primary data on serum Vitamin D levels from a benchmark dataset and used machine learning classifiers and categorical data encoding to predict VDD. It introduces a deep learning strategy that uses a Bidirectional Long Short-Term Memory (Bi-LSTM) model, which is improved by balancing the dataset, to better predict VDD severity. Originally intended to predict VDD level, the Bi-LSTM model beat previous models in predicting the severity of VDD, with 95% accuracy, 95% precision, 96% recall, and 95% F1 score. Our methodology appreciably raises the capacity to correctly recognize vitamin D deficiency when compared to earlier methods.

---

#### Summary of the study by Perplexity AI

The document titled "Proposing an Effective Deep Learning Model for Vitamin D Deficiency Diagnosis" by Asad Khattak et al. presents a study on predicting Vitamin D Deficiency (VDD) using a deep learning approach. Here is a comprehensive summary:

 **Abstract** 

The study addresses the global health concern of Vitamin D Deficiency (VDD), exacerbated by the COVID-19 pandemic. It proposes a deep learning model using Bidirectional Long Short-Term Memory (Bi-LSTM) to predict VDD severity with high accuracy, precision, recall, and F1 score.

 **Introduction** 

Artificial Intelligence (AI) has significantly impacted healthcare data mining, improving clinical decisions and patient outcomes. Deep Learning (DL) techniques, especially neural networks, have shown great potential in disease detection and diagnosis, including VDD.

 **Need for Vitamin D Deficiency Level Prediction** 

Approximately one billion people globally suffer from VDD. DL models can help analyze large volumes of medical data to diagnose and prevent VDD, assisting in making cost-effective and preventive treatment decisions.

 **Aim of the Work** 

The study aims to develop a BiLSTM-based model to improve the prediction of VDD levels, facilitating early diagnosis and intervention to improve patient outcomes and reduce mortality.

 **Baseline Study** 

Previous studies using machine learning (ML) methods like Random Forest (RF) and Support Vector Machine (SVM) missed deeper dependencies in the data. The proposed BiLSTM model addresses these limitations by improving the understanding of VDD levels through data balancing and BiLSTM architecture.

 **Problem Statement** 

Current ML methods for VDD prediction have limitations. The study frames VDD level prediction as a multi-label problem, using a dataset classified into four classes: Adequate, Insufficient, Deficient, and Severely Deficient. The goal is to improve prediction accuracy over previous methods.

 **Research Questions** 

1. How does the proposed BiLSTM model predict VDD levels?

1. How effective is the BiLSTM model compared to existing ML and DL models?

1. How well does the BiLSTM model predict VDD levels compared to previous works?

 **Research Contributions** 

* Development of a BiLSTM-based deep learning system for diagnosing vitamin D insufficiency.

* Significant improvement in VDD level prediction accuracy.

 **Related Work** 

The study reviews previous research on VDD level prediction using various ML methods, highlighting the need for more accurate and reliable models.

 **Proposed Methodology** 

The methodology includes:

1.  **Data Collection** : Using a dataset of 3,044 students with various health and lifestyle variables.

1.  **Data Preprocessing** : Handling missing values, label encoding, and data balancing.

1.  **Applying BiLSTM Model** : Using the BiLSTM model to predict VDD levels categorized into four classes.

 **Experimental Results and Discussion** 

The BiLSTM model outperformed previous ML and DL models in predicting VDD levels, achieving 95% accuracy, 95% precision, 96% recall, and 95% F1 score. The study conducted various experiments to validate the model's effectiveness.

---

##### Prediction model's pseudocode

Input: Vitamine D Deficiency Level dataset Stepl: Load the VDD level dataset from the . csv file.

Step2: Splitting dataset into training and testing using Scikit — Learn.

Step3: Constructing lexicon to converting data into integer representation. 

Step4: Establishing an integer order for every diabetic data stream.

Step5: Pre — Processing:

&nbsp; Handling missing values

&nbsp; Normalizing features

&nbsp; Encoding categorical variables

&nbsp; Balancing class distribution 

Step6: Bi — LSTM model:

Initialization sequential function Model = sequential)

BiLSTM layer model, add (Bidirectional (LSTM ())

use BatchNormalization to prevent overfitting model, add (BatchNormalization ())

Classify of diabetes using sigmoid function model, add (Dense (1, activation = sigmoid))

Compilation Function model, Compile()

Evalution of model using test data Evaluation Metrics = model, evaluate()

Classify diabetes return

---

#### Observations by the founder of VitaminDWiki

Based on 3,000 young women at a college in India

95% is the best claimed accuracy that I have seen thus far - even for other AI models

Varialbles included:Age, sex, height, weight, BMI, waist circumference, body fat, bone mass, activity, 

&nbsp;  exposure to sunlight, and milk consumption

The study re-balanced the data by resampling, such that there were approximately 25% in each level

&nbsp; &nbsp; Initial data had been: Adequate 43%, Insufficent 31%, Deficent 19%, and Severely Deficient 7%

Wonder how many of the women had conceiling clothing that restricted access to the sun

A Marchine Learning expert thought that this was the worst AI paper he had read in 3 years. 

They were using the wrong techniques
