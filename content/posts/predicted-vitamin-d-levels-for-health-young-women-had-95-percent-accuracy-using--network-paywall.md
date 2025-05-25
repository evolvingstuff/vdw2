---
title: "Predicted Vitamin D levels for health young women had 95% accuracy using neural network (paywall)"
slug: "predicted-vitamin-d-levels-for-health-young-women-had-95-percent-accuracy-using--network-paywall"
aliases:
  - "/Predicted+Vitamin+D+levels+for+health+young+women+had+95+accuracy+using+neural+network+paywall+–+July+2024"
  - "/15423"
tiki_page_id: 15423
date: 2024-07-28
---


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


<pre style="background-color: #e0e0e0; white-space: pre-wrap;">
<code class="language-text">
Markdown:
--------
{{&lt; toc &gt;}}

---

#### Proposing an Effective Deep Learning Model for Vitamin D Deficiency Diagnosis

2024 IEEE 37th International Symposium on Computer-Based Medical Systems (CBMS) DOI: 10.1109/CBMS61543.2024.00017

Asad Khattak; Junaid Asghar; Naila Tabassum; Hayat Ullah; Aurangzeb Khan; Zubair Asghar

Following the declaration of the COVID-19 pandemic by the World Health Organization, the importance of Vitamin D and the incidence of Vitamin D Deficiency (VDD) have emerged as serious worldwide healthconcerns. There is an increasing demand for noninvasive prediction approaches for determining the severity of VDD. This work collected primary data on serum Vitamin D levels from a benchmark dataset and used machine learning classifiers and categorical data encoding to predict VDD. It introduces a deep learning strategy that uses a Bidirectional Long Short-Term Memory (Bi-LSTM) model, which is improved by balancing the dataset, to better predict VDD severity. Originally intended to predict VDD level, the Bi-LSTM model beat previous models in predicting the severity of VDD, with 95% accuracy, 95% precision, 96% recall, and 95% F1 score. Our methodology appreciably raises the capacity to correctly recognize vitamin D deficiency when compared to earlier methods.

---

#### Summary of the study by Perplexity AI

The document titled &quot;Proposing an Effective Deep Learning Model for Vitamin D Deficiency Diagnosis&quot; by Asad Khattak et al. presents a study on predicting Vitamin D Deficiency (VDD) using a deep learning approach. Here is a comprehensive summary:

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

The BiLSTM model outperformed previous ML and DL models in predicting VDD levels, achieving 95% accuracy, 95% precision, 96% recall, and 95% F1 score. The study conducted various experiments to validate the model&#39;s effectiveness.

---

##### Prediction model&#39;s pseudocode

Input: Vitamine D Deficiency Level dataset Stepl: Load the VDD level dataset from the . csv file.

Step2: Splitting dataset into training and testing using Scikit — Learn.

Step3: Constructing lexicon to converting data into integer representation. 

Step4: Establishing an integer order for every diabetic data stream.

Step5: Pre — Processing:

&amp;nbsp; Handling missing values

&amp;nbsp; Normalizing features

&amp;nbsp; Encoding categorical variables

&amp;nbsp; Balancing class distribution 

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

&amp;nbsp;  exposure to sunlight, and milk consumption

The study re-balanced the data by resampling, such that there were approximately 25% in each level

&amp;nbsp; &amp;nbsp; Initial data had been: Adequate 43%, Insufficent 31%, Deficent 19%, and Severely Deficient 7%

Wonder how many of the women had conceiling clothing that restricted access to the sun

A Marchine Learning expert thought that this was the worst AI paper he had read in 3 years. 

They were using the wrong techniques


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
│   full_match: `!!!!Proposing an Effective Deep Learning Model for Vitamin D Deficiency Diagnosis`
│   inner_content: `Proposing an Effective Deep Learning Model for Vitamin D Deficiency Diagnosis`
│   level: `4`
│   children:
│   ├── TextNode
│   │   full_match: `Proposing an Effective Deep Learning Model for Vitamin D Deficiency Diagnosis`
│   │   inner_content: `Proposing an Effective Deep Learning Model for Vitamin D Deficiency Diagnosis`├── TextNode
│   full_match: `\n2024 IEEE 37th International Symposium on Computer-Based Medical Systems (CBMS) DOI: 10.1109/CBMS61543.2024.00017\nAsad Khattak; Junaid Asghar; Naila Tabassum; Hayat Ullah; Aurangzeb Khan; Zubair Asghar\n\nFollowing the declaration of the COVID-19 pandemic by the World Health Organization, the importance of Vitamin D and the incidence of Vitamin D Deficiency (VDD) have emerged as serious worldwide healthconcerns. There is an increasing demand for noninvasive prediction approaches for determining the severity of VDD. This work collected primary data on serum Vitamin D levels from a benchmark dataset and used machine learning classifiers and categorical data encoding to predict VDD. It introduces a deep learning strategy that uses a Bidirectional Long Short-Term Memory (Bi-LSTM) model, which is improved by balancing the dataset, to better predict VDD severity. Originally intended to predict VDD level, the Bi-LSTM model beat previous models in predicting the severity of VDD, with 95% accuracy, 95% precision, 96% recall, and 95% F1 score. Our methodology appreciably raises the capacity to correctly recognize vitamin D deficiency when compared to earlier methods.\n`
│   inner_content: `\n2024 IEEE 37th International Symposium on Computer-Based Medical Systems (CBMS) DOI: 10.1109/CBMS61543.2024.00017\nAsad Khattak; Junaid Asghar; Naila Tabassum; Hayat Ullah; Aurangzeb Khan; Zubair Asghar\n\nFollowing the declaration of the COVID-19 pandemic by the World Health Organization, the importance of Vitamin D and the incidence of Vitamin D Deficiency (VDD) have emerged as serious worldwide healthconcerns. There is an increasing demand for noninvasive prediction approaches for determining the severity of VDD. This work collected primary data on serum Vitamin D levels from a benchmark dataset and used machine learning classifiers and categorical data encoding to predict VDD. It introduces a deep learning strategy that uses a Bidirectional Long Short-Term Memory (Bi-LSTM) model, which is improved by balancing the dataset, to better predict VDD severity. Originally intended to predict VDD level, the Bi-LSTM model beat previous models in predicting the severity of VDD, with 95% accuracy, 95% precision, 96% recall, and 95% F1 score. Our methodology appreciably raises the capacity to correctly recognize vitamin D deficiency when compared to earlier methods.\n`├── HorizontalRuleNode
│   full_match: `\n---\n`
│   inner_content: `---`├── HeadingNode
│   full_match: `!!!!Summary of the study by Perplexity AI`
│   inner_content: `Summary of the study by Perplexity AI`
│   level: `4`
│   children:
│   ├── TextNode
│   │   full_match: `Summary of the study by Perplexity AI`
│   │   inner_content: `Summary of the study by Perplexity AI`├── TextNode
│   full_match: `\nThe document titled &quot;Proposing an Effective Deep Learning Model for Vitamin D Deficiency Diagnosis&quot; by Asad Khattak et al. presents a study on predicting Vitamin D Deficiency (VDD) using a deep learning approach. Here is a comprehensive summary:\n\n`
│   inner_content: `\nThe document titled &quot;Proposing an Effective Deep Learning Model for Vitamin D Deficiency Diagnosis&quot; by Asad Khattak et al. presents a study on predicting Vitamin D Deficiency (VDD) using a deep learning approach. Here is a comprehensive summary:\n\n`├── BoldNode
│   full_match: `__Abstract__`
│   inner_content: `Abstract`
│   children:
│   ├── TextNode
│   │   full_match: `Abstract`
│   │   inner_content: `Abstract`├── TextNode
│   full_match: `\nThe study addresses the global health concern of Vitamin D Deficiency (VDD), exacerbated by the COVID-19 pandemic. It proposes a deep learning model using Bidirectional Long Short-Term Memory (Bi-LSTM) to predict VDD severity with high accuracy, precision, recall, and F1 score.\n\n`
│   inner_content: `\nThe study addresses the global health concern of Vitamin D Deficiency (VDD), exacerbated by the COVID-19 pandemic. It proposes a deep learning model using Bidirectional Long Short-Term Memory (Bi-LSTM) to predict VDD severity with high accuracy, precision, recall, and F1 score.\n\n`├── BoldNode
│   full_match: `__Introduction__`
│   inner_content: `Introduction`
│   children:
│   ├── TextNode
│   │   full_match: `Introduction`
│   │   inner_content: `Introduction`├── TextNode
│   full_match: `\nArtificial Intelligence (AI) has significantly impacted healthcare data mining, improving clinical decisions and patient outcomes. Deep Learning (DL) techniques, especially neural networks, have shown great potential in disease detection and diagnosis, including VDD.\n\n`
│   inner_content: `\nArtificial Intelligence (AI) has significantly impacted healthcare data mining, improving clinical decisions and patient outcomes. Deep Learning (DL) techniques, especially neural networks, have shown great potential in disease detection and diagnosis, including VDD.\n\n`├── BoldNode
│   full_match: `__Need for Vitamin D Deficiency Level Prediction__`
│   inner_content: `Need for Vitamin D Deficiency Level Prediction`
│   children:
│   ├── TextNode
│   │   full_match: `Need for Vitamin D Deficiency Level Prediction`
│   │   inner_content: `Need for Vitamin D Deficiency Level Prediction`├── TextNode
│   full_match: `\nApproximately one billion people globally suffer from VDD. DL models can help analyze large volumes of medical data to diagnose and prevent VDD, assisting in making cost-effective and preventive treatment decisions.\n\n`
│   inner_content: `\nApproximately one billion people globally suffer from VDD. DL models can help analyze large volumes of medical data to diagnose and prevent VDD, assisting in making cost-effective and preventive treatment decisions.\n\n`├── BoldNode
│   full_match: `__Aim of the Work__`
│   inner_content: `Aim of the Work`
│   children:
│   ├── TextNode
│   │   full_match: `Aim of the Work`
│   │   inner_content: `Aim of the Work`├── TextNode
│   full_match: `\nThe study aims to develop a BiLSTM-based model to improve the prediction of VDD levels, facilitating early diagnosis and intervention to improve patient outcomes and reduce mortality.\n\n`
│   inner_content: `\nThe study aims to develop a BiLSTM-based model to improve the prediction of VDD levels, facilitating early diagnosis and intervention to improve patient outcomes and reduce mortality.\n\n`├── BoldNode
│   full_match: `__Baseline Study__`
│   inner_content: `Baseline Study`
│   children:
│   ├── TextNode
│   │   full_match: `Baseline Study`
│   │   inner_content: `Baseline Study`├── TextNode
│   full_match: `\nPrevious studies using machine learning (ML) methods like Random Forest (RF) and Support Vector Machine (SVM) missed deeper dependencies in the data. The proposed BiLSTM model addresses these limitations by improving the understanding of VDD levels through data balancing and BiLSTM architecture.\n\n`
│   inner_content: `\nPrevious studies using machine learning (ML) methods like Random Forest (RF) and Support Vector Machine (SVM) missed deeper dependencies in the data. The proposed BiLSTM model addresses these limitations by improving the understanding of VDD levels through data balancing and BiLSTM architecture.\n\n`├── BoldNode
│   full_match: `__Problem Statement__`
│   inner_content: `Problem Statement`
│   children:
│   ├── TextNode
│   │   full_match: `Problem Statement`
│   │   inner_content: `Problem Statement`├── TextNode
│   full_match: `\nCurrent ML methods for VDD prediction have limitations. The study frames VDD level prediction as a multi-label problem, using a dataset classified into four classes: Adequate, Insufficient, Deficient, and Severely Deficient. The goal is to improve prediction accuracy over previous methods.\n\n`
│   inner_content: `\nCurrent ML methods for VDD prediction have limitations. The study frames VDD level prediction as a multi-label problem, using a dataset classified into four classes: Adequate, Insufficient, Deficient, and Severely Deficient. The goal is to improve prediction accuracy over previous methods.\n\n`├── BoldNode
│   full_match: `__Research Questions__`
│   inner_content: `Research Questions`
│   children:
│   ├── TextNode
│   │   full_match: `Research Questions`
│   │   inner_content: `Research Questions`├── TextNode
│   full_match: `\n`
│   inner_content: `\n`├── NumListItemNode
│   full_match: `#How does the proposed BiLSTM model predict VDD levels?`
│   inner_content: `How does the proposed BiLSTM model predict VDD levels?`
│   depth: `1`
│   children:
│   ├── TextNode
│   │   full_match: `How does the proposed BiLSTM model predict VDD levels?`
│   │   inner_content: `How does the proposed BiLSTM model predict VDD levels?`├── TextNode
│   full_match: `\n`
│   inner_content: `\n`├── NumListItemNode
│   full_match: `#How effective is the BiLSTM model compared to existing ML and DL models?`
│   inner_content: `How effective is the BiLSTM model compared to existing ML and DL models?`
│   depth: `1`
│   children:
│   ├── TextNode
│   │   full_match: `How effective is the BiLSTM model compared to existing ML and DL models?`
│   │   inner_content: `How effective is the BiLSTM model compared to existing ML and DL models?`├── TextNode
│   full_match: `\n`
│   inner_content: `\n`├── NumListItemNode
│   full_match: `#How well does the BiLSTM model predict VDD levels compared to previous works?`
│   inner_content: `How well does the BiLSTM model predict VDD levels compared to previous works?`
│   depth: `1`
│   children:
│   ├── TextNode
│   │   full_match: `How well does the BiLSTM model predict VDD levels compared to previous works?`
│   │   inner_content: `How well does the BiLSTM model predict VDD levels compared to previous works?`├── TextNode
│   full_match: `\n`
│   inner_content: `\n`├── BoldNode
│   full_match: `__Research Contributions__`
│   inner_content: `Research Contributions`
│   children:
│   ├── TextNode
│   │   full_match: `Research Contributions`
│   │   inner_content: `Research Contributions`├── TextNode
│   full_match: `\n`
│   inner_content: `\n`├── ListItemNode
│   full_match: `*Development of a BiLSTM-based deep learning system for diagnosing vitamin D insufficiency.`
│   inner_content: `Development of a BiLSTM-based deep learning system for diagnosing vitamin D insufficiency.`
│   depth: `1`
│   children:
│   ├── TextNode
│   │   full_match: `Development of a BiLSTM-based deep learning system for diagnosing vitamin D insufficiency.`
│   │   inner_content: `Development of a BiLSTM-based deep learning system for diagnosing vitamin D insufficiency.`├── TextNode
│   full_match: `\n`
│   inner_content: `\n`├── ListItemNode
│   full_match: `*Significant improvement in VDD level prediction accuracy.`
│   inner_content: `Significant improvement in VDD level prediction accuracy.`
│   depth: `1`
│   children:
│   ├── TextNode
│   │   full_match: `Significant improvement in VDD level prediction accuracy.`
│   │   inner_content: `Significant improvement in VDD level prediction accuracy.`├── TextNode
│   full_match: `\n`
│   inner_content: `\n`├── BoldNode
│   full_match: `__Related Work__`
│   inner_content: `Related Work`
│   children:
│   ├── TextNode
│   │   full_match: `Related Work`
│   │   inner_content: `Related Work`├── TextNode
│   full_match: `\nThe study reviews previous research on VDD level prediction using various ML methods, highlighting the need for more accurate and reliable models.\n\n`
│   inner_content: `\nThe study reviews previous research on VDD level prediction using various ML methods, highlighting the need for more accurate and reliable models.\n\n`├── BoldNode
│   full_match: `__Proposed Methodology__`
│   inner_content: `Proposed Methodology`
│   children:
│   ├── TextNode
│   │   full_match: `Proposed Methodology`
│   │   inner_content: `Proposed Methodology`├── TextNode
│   full_match: `\nThe methodology includes:\n`
│   inner_content: `\nThe methodology includes:\n`├── NumListItemNode
│   full_match: `#__Data Collection__: Using a dataset of 3,044 students with various health and lifestyle variables.`
│   inner_content: `__Data Collection__: Using a dataset of 3,044 students with various health and lifestyle variables.`
│   depth: `1`
│   children:
│   ├── BoldNode
│   │   full_match: `__Data Collection__`
│   │   inner_content: `Data Collection`
│   │   children:
│   │   ├── TextNode
│   │   │   full_match: `Data Collection`
│   │   │   inner_content: `Data Collection`
│   ├── TextNode
│   │   full_match: `: Using a dataset of 3,044 students with various health and lifestyle variables.`
│   │   inner_content: `: Using a dataset of 3,044 students with various health and lifestyle variables.`├── TextNode
│   full_match: `\n`
│   inner_content: `\n`├── NumListItemNode
│   full_match: `#__Data Preprocessing__: Handling missing values, label encoding, and data balancing.`
│   inner_content: `__Data Preprocessing__: Handling missing values, label encoding, and data balancing.`
│   depth: `1`
│   children:
│   ├── BoldNode
│   │   full_match: `__Data Preprocessing__`
│   │   inner_content: `Data Preprocessing`
│   │   children:
│   │   ├── TextNode
│   │   │   full_match: `Data Preprocessing`
│   │   │   inner_content: `Data Preprocessing`
│   ├── TextNode
│   │   full_match: `: Handling missing values, label encoding, and data balancing.`
│   │   inner_content: `: Handling missing values, label encoding, and data balancing.`├── TextNode
│   full_match: `\n`
│   inner_content: `\n`├── NumListItemNode
│   full_match: `#__Applying BiLSTM Model__: Using the BiLSTM model to predict VDD levels categorized into four classes.`
│   inner_content: `__Applying BiLSTM Model__: Using the BiLSTM model to predict VDD levels categorized into four classes.`
│   depth: `1`
│   children:
│   ├── BoldNode
│   │   full_match: `__Applying BiLSTM Model__`
│   │   inner_content: `Applying BiLSTM Model`
│   │   children:
│   │   ├── TextNode
│   │   │   full_match: `Applying BiLSTM Model`
│   │   │   inner_content: `Applying BiLSTM Model`
│   ├── TextNode
│   │   full_match: `: Using the BiLSTM model to predict VDD levels categorized into four classes.`
│   │   inner_content: `: Using the BiLSTM model to predict VDD levels categorized into four classes.`├── TextNode
│   full_match: `\n`
│   inner_content: `\n`├── BoldNode
│   full_match: `__Experimental Results and Discussion__`
│   inner_content: `Experimental Results and Discussion`
│   children:
│   ├── TextNode
│   │   full_match: `Experimental Results and Discussion`
│   │   inner_content: `Experimental Results and Discussion`├── TextNode
│   full_match: `\nThe BiLSTM model outperformed previous ML and DL models in predicting VDD levels, achieving 95% accuracy, 95% precision, 96% recall, and 95% F1 score. The study conducted various experiments to validate the model&#39;s effectiveness.`
│   inner_content: `\nThe BiLSTM model outperformed previous ML and DL models in predicting VDD levels, achieving 95% accuracy, 95% precision, 96% recall, and 95% F1 score. The study conducted various experiments to validate the model&#39;s effectiveness.`├── HorizontalRuleNode
│   full_match: `\n---\n`
│   inner_content: `---`├── HeadingNode
│   full_match: `!!!!!Prediction model&#39;s pseudocode`
│   inner_content: `Prediction model&#39;s pseudocode`
│   level: `5`
│   children:
│   ├── TextNode
│   │   full_match: `Prediction model&#39;s pseudocode`
│   │   inner_content: `Prediction model&#39;s pseudocode`├── TextNode
│   full_match: `\nInput: Vitamine D Deficiency Level dataset Stepl: Load the VDD level dataset from the . csv file.\nStep2: Splitting dataset into training and testing using Scikit — Learn.\nStep3: Constructing lexicon to converting data into integer representation. \nStep4: Establishing an integer order for every diabetic data stream.\nStep5: Pre — Processing:\n`
│   inner_content: `\nInput: Vitamine D Deficiency Level dataset Stepl: Load the VDD level dataset from the . csv file.\nStep2: Splitting dataset into training and testing using Scikit — Learn.\nStep3: Constructing lexicon to converting data into integer representation. \nStep4: Establishing an integer order for every diabetic data stream.\nStep5: Pre — Processing:\n`├── HorizontalSpaceNode
│   full_match: `~hs~`
│   inner_content: ``
│   repetitions: `1`├── TextNode
│   full_match: ` Handling missing values\n`
│   inner_content: ` Handling missing values\n`├── HorizontalSpaceNode
│   full_match: `~hs~`
│   inner_content: ``
│   repetitions: `1`├── TextNode
│   full_match: ` Normalizing features\n`
│   inner_content: ` Normalizing features\n`├── HorizontalSpaceNode
│   full_match: `~hs~`
│   inner_content: ``
│   repetitions: `1`├── TextNode
│   full_match: ` Encoding categorical variables\n`
│   inner_content: ` Encoding categorical variables\n`├── HorizontalSpaceNode
│   full_match: `~hs~`
│   inner_content: ``
│   repetitions: `1`├── TextNode
│   full_match: ` Balancing class distribution \nStep6: Bi — LSTM model:\nInitialization sequential function Model = sequential)\nBiLSTM layer model, add (Bidirectional (LSTM ())\nuse BatchNormalization to prevent overfitting model, add (BatchNormalization ())\nClassify of diabetes using sigmoid function model, add (Dense (1, activation = sigmoid))\nCompilation Function model, Compile()\nEvalution of model using test data Evaluation Metrics = model, evaluate()\nClassify diabetes return`
│   inner_content: ` Balancing class distribution \nStep6: Bi — LSTM model:\nInitialization sequential function Model = sequential)\nBiLSTM layer model, add (Bidirectional (LSTM ())\nuse BatchNormalization to prevent overfitting model, add (BatchNormalization ())\nClassify of diabetes using sigmoid function model, add (Dense (1, activation = sigmoid))\nCompilation Function model, Compile()\nEvalution of model using test data Evaluation Metrics = model, evaluate()\nClassify diabetes return`├── HorizontalRuleNode
│   full_match: `\n---\n`
│   inner_content: `---`├── HeadingNode
│   full_match: `!!!!Observations by the founder of VitaminDWiki`
│   inner_content: `Observations by the founder of VitaminDWiki`
│   level: `4`
│   children:
│   ├── TextNode
│   │   full_match: `Observations by the founder of VitaminDWiki`
│   │   inner_content: `Observations by the founder of VitaminDWiki`├── TextNode
│   full_match: `\nBased on 3,000 young women at a college in India\n95% is the best claimed accuracy that I have seen thus far - even for other AI models\nVarialbles included:Age, sex, height, weight, BMI, waist circumference, body fat, bone mass, activity, \n`
│   inner_content: `\nBased on 3,000 young women at a college in India\n95% is the best claimed accuracy that I have seen thus far - even for other AI models\nVarialbles included:Age, sex, height, weight, BMI, waist circumference, body fat, bone mass, activity, \n`├── HorizontalSpaceNode
│   full_match: `~hs~`
│   inner_content: ``
│   repetitions: `1`├── TextNode
│   full_match: `  exposure to sunlight, and milk consumption\nThe study re-balanced the data by resampling, such that there were approximately 25% in each level\n`
│   inner_content: `  exposure to sunlight, and milk consumption\nThe study re-balanced the data by resampling, such that there were approximately 25% in each level\n`├── HorizontalSpaceNode
│   full_match: `~hs~`
│   inner_content: ``
│   repetitions: `1`├── TextNode
│   full_match: ` `
│   inner_content: ` `├── HorizontalSpaceNode
│   full_match: `~hs~`
│   inner_content: ``
│   repetitions: `1`├── TextNode
│   full_match: ` Initial data had been: Adequate 43%, Insufficent 31%, Deficent 19%, and Severely Deficient 7%\nWonder how many of the women had conceiling clothing that restricted access to the sun\n\nA Marchine Learning expert thought that this was the worst AI paper he had read in 3 years. \nThey were using the wrong techniques`
│   inner_content: ` Initial data had been: Adequate 43%, Insufficent 31%, Deficent 19%, and Severely Deficient 7%\nWonder how many of the women had conceiling clothing that restricted access to the sun\n\nA Marchine Learning expert thought that this was the worst AI paper he had read in 3 years. \nThey were using the wrong techniques`├── HorizontalRuleNode
│   full_match: `\n---\n`
│   inner_content: `---`├── HeadingNode
│   full_match: `!!!!VitaminDWiki – ((Predict Vitamin D)) category contains:`
│   inner_content: `VitaminDWiki – ((Predict Vitamin D)) category contains:`
│   level: `4`
│   children:
│   ├── TextNode
│   │   full_match: `VitaminDWiki – `
│   │   inner_content: `VitaminDWiki – `
│   ├── LocalLinkNode
│   │   full_match: `((Predict Vitamin D))`
│   │   inner_content: `Predict Vitamin D`
│   │   page: `Predict Vitamin D`
│   │   children:
│   │   ├── TextNode
│   │   │   full_match: `Predict Vitamin D`
│   │   │   inner_content: `Predict Vitamin D`
│   ├── TextNode
│   │   full_match: ` category contains:`
│   │   inner_content: ` category contains:`├── TextNode
│   full_match: `\n`
│   inner_content: `\n`├── IncludeNode
│   full_match: `{include page=&quot;Predict Vitamin D&quot; start=&quot;~tc~ start ~/tc~&quot; stop=&quot;~tc~ end ~/tc~&quot;}`
│   inner_content: ``
│   attrs_dict:
│   │   raw_content:  page=&quot;Predict Vitamin D&quot; start=&quot;~tc~ start ~/tc~&quot; stop=&quot;~tc~ end ~/tc~&quot;
│   │   page: Predict Vitamin D
│   │   start: ~tc~ start ~/tc~
│   │   stop: ~tc~ end ~/tc~
│   children:
│   ├── TextNode
│   │   full_match: ``
│   │   inner_content: ``├── TextNode
│   full_match: `\n\n`
│   inner_content: `\n\n`├── TikiCommentNode
│   full_match: `~tc~ (alias(ieee)) ~/tc~`
│   inner_content: ` (alias(ieee)) `
│   children:
│   ├── TextNode
│   │   full_match: `(alias(ieee)) `
│   │   inner_content: `(alias(ieee)) `

Original Tiki:
-------------
{DIV(class=&quot;lefth4&quot;)}{maketoc Title=&quot;&quot;}{DIV}
---
!!!!Proposing an Effective Deep Learning Model for Vitamin D Deficiency Diagnosis
2024 IEEE 37th International Symposium on Computer-Based Medical Systems (CBMS) DOI: 10.1109/CBMS61543.2024.00017
Asad Khattak; Junaid Asghar; Naila Tabassum; Hayat Ullah; Aurangzeb Khan; Zubair Asghar

Following the declaration of the COVID-19 pandemic by the World Health Organization, the importance of Vitamin D and the incidence of Vitamin D Deficiency (VDD) have emerged as serious worldwide healthconcerns. There is an increasing demand for noninvasive prediction approaches for determining the severity of VDD. This work collected primary data on serum Vitamin D levels from a benchmark dataset and used machine learning classifiers and categorical data encoding to predict VDD. It introduces a deep learning strategy that uses a Bidirectional Long Short-Term Memory (Bi-LSTM) model, which is improved by balancing the dataset, to better predict VDD severity. Originally intended to predict VDD level, the Bi-LSTM model beat previous models in predicting the severity of VDD, with 95% accuracy, 95% precision, 96% recall, and 95% F1 score. Our methodology appreciably raises the capacity to correctly recognize vitamin D deficiency when compared to earlier methods.

---
!!!!Summary of the study by Perplexity AI
The document titled &quot;Proposing an Effective Deep Learning Model for Vitamin D Deficiency Diagnosis&quot; by Asad Khattak et al. presents a study on predicting Vitamin D Deficiency (VDD) using a deep learning approach. Here is a comprehensive summary:

__Abstract__
The study addresses the global health concern of Vitamin D Deficiency (VDD), exacerbated by the COVID-19 pandemic. It proposes a deep learning model using Bidirectional Long Short-Term Memory (Bi-LSTM) to predict VDD severity with high accuracy, precision, recall, and F1 score.

__Introduction__
Artificial Intelligence (AI) has significantly impacted healthcare data mining, improving clinical decisions and patient outcomes. Deep Learning (DL) techniques, especially neural networks, have shown great potential in disease detection and diagnosis, including VDD.

__Need for Vitamin D Deficiency Level Prediction__
Approximately one billion people globally suffer from VDD. DL models can help analyze large volumes of medical data to diagnose and prevent VDD, assisting in making cost-effective and preventive treatment decisions.

__Aim of the Work__
The study aims to develop a BiLSTM-based model to improve the prediction of VDD levels, facilitating early diagnosis and intervention to improve patient outcomes and reduce mortality.

__Baseline Study__
Previous studies using machine learning (ML) methods like Random Forest (RF) and Support Vector Machine (SVM) missed deeper dependencies in the data. The proposed BiLSTM model addresses these limitations by improving the understanding of VDD levels through data balancing and BiLSTM architecture.

__Problem Statement__
Current ML methods for VDD prediction have limitations. The study frames VDD level prediction as a multi-label problem, using a dataset classified into four classes: Adequate, Insufficient, Deficient, and Severely Deficient. The goal is to improve prediction accuracy over previous methods.

__Research Questions__
#How does the proposed BiLSTM model predict VDD levels?
#How effective is the BiLSTM model compared to existing ML and DL models?
#How well does the BiLSTM model predict VDD levels compared to previous works?
__Research Contributions__
*Development of a BiLSTM-based deep learning system for diagnosing vitamin D insufficiency.
*Significant improvement in VDD level prediction accuracy.
__Related Work__
The study reviews previous research on VDD level prediction using various ML methods, highlighting the need for more accurate and reliable models.

__Proposed Methodology__
The methodology includes:
#__Data Collection__: Using a dataset of 3,044 students with various health and lifestyle variables.
#__Data Preprocessing__: Handling missing values, label encoding, and data balancing.
#__Applying BiLSTM Model__: Using the BiLSTM model to predict VDD levels categorized into four classes.
__Experimental Results and Discussion__
The BiLSTM model outperformed previous ML and DL models in predicting VDD levels, achieving 95% accuracy, 95% precision, 96% recall, and 95% F1 score. The study conducted various experiments to validate the model&#39;s effectiveness.
---
!!!!!Prediction model&#39;s pseudocode
Input: Vitamine D Deficiency Level dataset Stepl: Load the VDD level dataset from the . csv file.
Step2: Splitting dataset into training and testing using Scikit — Learn.
Step3: Constructing lexicon to converting data into integer representation. 
Step4: Establishing an integer order for every diabetic data stream.
Step5: Pre — Processing:
 ~hs~ Handling missing values
 ~hs~ Normalizing features
 ~hs~ Encoding categorical variables
 ~hs~ Balancing class distribution 
Step6: Bi — LSTM model:
Initialization sequential function Model = sequential)
BiLSTM layer model, add (Bidirectional (LSTM ())
use BatchNormalization to prevent overfitting model, add (BatchNormalization ())
Classify of diabetes using sigmoid function model, add (Dense (1, activation = sigmoid))
Compilation Function model, Compile()
Evalution of model using test data Evaluation Metrics = model, evaluate()
Classify diabetes return
---
!!!!Observations by the founder of VitaminDWiki
Based on 3,000 young women at a college in India
95% is the best claimed accuracy that I have seen thus far - even for other AI models
Varialbles included:Age, sex, height, weight, BMI, waist circumference, body fat, bone mass, activity, 
 ~hs~  exposure to sunlight, and milk consumption
The study re-balanced the data by resampling, such that there were approximately 25% in each level
~hs~ ~hs~ Initial data had been: Adequate 43%, Insufficent 31%, Deficent 19%, and Severely Deficient 7%
Wonder how many of the women had conceiling clothing that restricted access to the sun

A Marchine Learning expert thought that this was the worst AI paper he had read in 3 years. 
They were using the wrong techniques
---
!!!!VitaminDWiki – ((Predict Vitamin D)) category contains:
{include page=&quot;Predict Vitamin D&quot; start=&quot;~tc~ start ~/tc~&quot; stop=&quot;~tc~ end ~/tc~&quot;}

~tc~ (alias(ieee)) ~/tc~
</code>
</pre>
