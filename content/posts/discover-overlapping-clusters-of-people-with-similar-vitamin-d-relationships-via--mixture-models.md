{
    "title": "Discover overlapping clusters of people with similar vitamin D relationships via finite mixture models",
    "slug": "discover-overlapping-clusters-of-people-with-similar-vitamin-d-relationships-via--mixture-models",
    "aliases": [
        "/Discover+overlapping+clusters+of+people+with+similar+vitamin+D+relationships+via+finite+mixture+models+\u2013+Dec+2021",
        "/13130"
    ],
    "tiki_page_id": 13130,
    "date": "2021-12-01",
    "tags": [
        "autoimmune",
        "autoimmune and pregnancy",
        "blood levels",
        "bone",
        "bone mineral density",
        "child",
        "childhood obesity",
        "diabetes",
        "falls fractures",
        "health risk",
        "high dose",
        "hip fractures",
        "hypertension",
        "intervention",
        "metabolic",
        "multiple sclerosis",
        "multiple sclerosis and pregnancy",
        "obesity",
        "osteoporosis",
        "pain",
        "pediatric autoimmune",
        "pollution",
        "preeclampsia",
        "pregnancy",
        "rheumatoid arthritis",
        "smoking",
        "therapeutic intervention",
        "vitamin d",
        "vitamin d blood test"
    ]
}


{{< toc >}}

---

### The use of finite mixture models to examine the serum 25(OH)D levels among Saudis

PLoS ONE 16(11): e0260748. https://doi.org/10.1371/iournal. pone.0260748

Ibrahim Al-Sumaihn71’2 ialsumaih01@qub.ac.uk, Michael Donnelly1, Ciaran O’Neill1

1 Centre for Public Health, School of Medicine, Dentistry and Biomedical Sciences, Queen’s University Belfast, Belfast, United Kingdom,

2 Ministry of Health, Riyadh, Saudi Arabia

 **<i class="fas fa-file-pdf" style="margin-right: 0.3em;"></i><a href="https://d378j1rmrlek7x.cloudfront.net/attachments/pdf/finite-mixture-models.pdf">Download the PDF from VitaminDWiki</a>** 

#### Abstract

Background

Recorded serum 25(OH)D in survey data varies with observed and unobserved respondent characteristics. The aim of this study was to expose latent population sub-groups and examine variation across groups regarding relationships between serum 25(OH)D and observable characteristics.

Methods

This study explored the role of unobserved heterogeneity on associations between surveyed 25(OH)D and various factors using a sample (n = 2,641) extracted from the Saudi Health Interview Survey (2013). Linear regression and finite mixture models (FMM) were estimated and compared. The number of latent classes in the FMM was chosen based on BIC score.

Result

Three latent classes were identified. 

* Class I (39.82%), 

* class II (41.03%), and 

* class III (19.15%)

with mean 25(OH)D levels of 22.79, 34.88, and 57.45 ng/ml respectively.  **Distinct patterns of associations with nutrition, behaviour and socio-demographic variables were recorded across classes that were not revealed in pooled linear regression.** 

Conclusion

FMM has the potential to provide additional insights on the relationship between 25(OH)D levels and observable characteristics. It should be more widely considered as a method of investigation in this area.

#### Introduction

Vitamin D deficiency has been associated with a range of conditions including osteopenia and osteoporosis <sup>[1]</sup>; increased risk of fractures <sup>[2]</sup>; muscle weakness <sup>[3]</sup> and (among expectant mothers) preeclampsia <sup>[4]</sup>. Given the high global prevalence of vitamin D deficiency <sup>[5]</sup> and its impact on health, it is unsurprising that the identification of factors which elevate the risk of deficiency should attract the interest of researchers. Factors that have been associated with increased risk of deficiency include pregnancy <sup>[6]</sup>, skin colour <sup>[7]</sup>, abstinence from direct sun exposure <sup>[8]</sup>, lower educational achievement, smoking, physical inactivity, poverty, obesity and infrequent consumption of milk <sup>[7]</sup>. Differences in risk have also been related to particular genotypes <sup>[9]</sup>.

Studies examining the causes and consequences of vitamin D deficiency, however, have seen the use of multiple thresholds to define deficiency <sup>[10]</sup>. In many instances this is understandable given thresholds may differ for specific outcomes (such as bone health as opposed to muscle weakness for example); or populations (expectant mothers as opposed to otherwise healthy adults, for example). Even when used with respect to the same group and outcomes, however, differences in the threshold used to define deficiency exist. For example, while some US studies <sup>[10]</sup> use a threshold of 20 ng/ml to define deficiency and others <sup>[7]</sup> 10 ng/ml as the concentration of serum 25-hydroxyvitamin D <span>[25(OH)D]</span> for otherwise healthy adults, in the UK others have suggested 12 ng/ml <sup>[11]</sup>. In this context in practical terms this leaves the researcher seeking to distinguish between groups in terms of risk exposure or to characterise membership of those groups in the invidious position of assessing the robustness of findings by testing multiple thresholds without a clear rationale for selecting one over the other.

An alternative approach is to measure 25(OH)D status as a continuous variable when assessing risk. Conceptually “deficiency” then exists on a spectrum rather than as a dichotomous variable at a defined threshold <sup>[12]</sup>. While this may appear more realistic (if perhaps more difficult to interpret) here too though the issue is not straightforward. Thus, while groups with different levels of risk based on measures of 25(OH)D can be identified and characterised based on observable characteristics such as age or education, for example, these characteristics may, depending on the variable in question, provide only approximations of an underlying concept of interest rather than definitive markers. Using this information to target groups for public health messages then becomes more challenging. For example, chronological age may be strongly related to biological age as will risks associated with vitamin D at particular levels among otherwise healthy adults. In this situation it may be relatively easy to identify those whose age places them at risk with a degree of clarity and suggest remedial action such as use of supplements. With respect to diet, however, access to 25(OH)D may be only roughly approximated by questions on food consumption contained in surveys because of a lack of detail in survey data as well as issues of recall and reporting bias on the part of the respondent. Thus, while identifying groups with low 25(OH)D may be possible, relating this to dietary habits and thus advice in respect of these may be more difficult. More generally the role of unobserved heterogeneity-where we do not have an observable counterpart for a concept of interest or may have a counterpart for whom the relationship with the latent concept varies across groups—may give rise to estimation issues <sup>[13, 14]</sup>. With respect to vitamin D, for example, and its relationship with diet or exposure to sunlight, unobserved attributes such as the strength or frequency of supplement use, the skin surface area exposed to sunlight, the time of day and year when skin is exposed (and thus ultra violet light exposure) and genetic preconditions that are not typically recorded in survey data on which empirical analyses are based may complicate associations <span>[15-17]</span>. In this context even using continuous measures of 25(OH)D to better reflect the existence of risk on a continuum could result in misleading advice because of the crudeness of the observable characteristics and heterogeneity in their relationships with unobserved counterparts. It follows that misleading advice could be given on how to interpret risk and trade-offs between these that characterise groups among whom risk might vary.

In this situation finite mixture models (FMM) may offer an opportunity to explore unobserved heterogeneity among subpopulations whose 25(OH)D level vary and for whom distinct relationships may exist with observable characteristics. FMM is a probabilistic model for representing the presence of subpopulations within an overall population, without the requirement of observable characteristics to identify the sub-population to which an individual observation belongs <sup>[18]</sup>. In finite mixture modelling, the observed data are assumed to belong to unobserved subpopulations called classes, and mixtures of probability densities or regression models are used to model the relationships within these and observable characteristics with the outcome of interest. After fitting the model, class membership probabilities can be predicted for each observation and used to interpret the class. In this context FMM provides a strategy that allows us to distinguish between subgroups that are otherwise unobserved either because of deficiencies in survey data (e.g. unrecorded dietary patterns), or because the complexity of underlying concept (risk) involves distinct patterns of relationships in observable attributes across sub-populations that cannot be distinguished with observed data. In this context, that is, it in principle allows us to identify subpopulations among whom levels of 25(OH)D vary (and with them health risks) as does the relationship with observable attributes. Further it allows us to characterise membership of those groups based on differences between them in terms of their characteristics and the probability of group membership.

In this paper we use the FMM approach to identify population subgroups and the distinct relationships for them between 25(OH)D levels and observable characteristics. We subsequently examine factors associated with the probability of subgroup membership.

The remainder of the paper is developed as follows: in the methods section we set out the data used in the study and the techniques used to analyse this, explicating the FMM approach. In the results section we describe the data and present the results of the FMM as well as the post hoc characterisation of sub-groups. The discussion relates our findings to previous studies and discusses the potential insights afforded by the FMM approach, as well as the limitations and recommendations from our study.

#### Materials and methods

 **Data source** 

Data were taken from the Saudi Health Information Survey (SHIS) 2013. The SHIS is a multistage survey of Saudi residents aged 15 years and older conducted between April and June 2013 <span>[17, 19-22]</span>. The population were stratified into 13 strata based on the administrative regions. Primary sampling units were adopted from the Census Bureau of the Kingdom of Saudi Arabia which divided Saudi households into small clusters consisting of a hundred and forty households on average. Primary sampling units were drawn proportional to their size randomly from the 13 administrative regions. Fourteen households from each primary sampling unit was randomly selected. Then, head of household was approached and a roster of occupants constructed. Potential participants age 15 years or above were randomly selected from the roster to participate in the survey.

The survey collects data on a range of socio-demographic characteristics such as age, gender, educational attainment, marital status and income. Self-reported dietary data are also collected allowing a reasonably comprehensive characterization of the individual to be constructed. Physical data on height, weight, waist circumference and blood pressure were measured during the interview visit. Participants were referred to local clinics where blood samples were taken from which measures including serum 25(OH)D levels cab be determined.

 **Sample** 

In this study, we extracted data on 2,641 respondents for whom complete data were available with respect to age, sex, use of vitamin D supplements, daily sun exposure in minutes, consumption of dairy products including milk, laban (fermented milk), yogurt, labneh (condensed yogurt), and cheese. Consumption of fish and eggs were also extracted as potentially rich sources of vitamin D. Other variables including current smoking status, (all self-reported) as well as measured BMI (used to define obesity status), waist circumference, HbAlc and systolic blood pressure. Precise details on the specification of each variable are contained in S1 Appendix.

The choice of variables was informed by the literature Liu et al. <sup>[7]</sup>, for example linking 25 (OH)D level with current smoking status, milk consumption and obesity, AlQuaiz et al. <sup>[23]</sup> linking low serum 25(OH)D with failure to use supplements, younger age, low milk intake and central obesity, Al-Daghri <sup>[24]</sup> linking 25(OH)D levels with sex, Kimlin et al. <sup>[25]</sup> linking it with sun exposure; Malandish et al. <sup>[26]</sup> linking it with physical exercise; Scragg et al. <sup>[27]</sup>, with higher HbAlc and He and Scragg <sup>[28]</sup> among others with systolic blood pressure. Some of the variables were not included in the primary analysis because of potential collinearity, for example, dairy products other than milk along with milk. To avoid possible collinearity in the model, collinearity was checked using variance inflation factor. Variables were also subjected to transformations to examine the robustness of the result as can be seen in S2 Appendix.

 **Statistical analysis** 

Descriptive statistics (mean, median and standard deviation for continuous variables, percentage for dichotomous variables) for the sample were estimated. We compared samples on which we had full data with those we excluded from the analysis because of missing data to explore possible selection bias. Two sample t-test were used to compare continuous variables. Chi-square test were used to compare categorical variables. The relationship between covariates and recorded 25(OH)D was explored using linear regression. Subsequently, the analysis was repeated using a finite mixture model approach.

In FMM an observed distribution is assumed to be comprised of a finite number of distinct unobserved distributions, one for each unobserved subgroup. The observed distribution y, that is, is assumed to come from g distinct classes fl, f2,..., fg in proportions nl, n2,..., ng.

The probability density function of a g-component mixture cab be written as:

f (y) = 53 pfi(ylx'bi)

i=1

where n is the probability for membership the ith class—the probability of class membership ranging from zero to one and summing to one across classes -; fi(-) is the conditional probability density function for the observed response in the ith class model, x the vector of variables on which membership is conditioned on and p denotes the parameters of the distribution <sup>[29]</sup>. FMM uses the multinomial logistic distribution to estimate ni as

_	exP(E

_ —

'	Eg—i exp(g;)

where y is a linear prediction of the ith class <sup>[29]</sup>.

Further discussion of the approach can be found in “Health Econometrics Using Stata” (Deb et al., 2017) <sup>[18]</sup> and Stata reference manual <sup>[29]</sup>.

Here, the number of subgroups (latent classes) on which the model was estimated was increased iteratively starting with two. Consistent with the recommended approach in the literature we used the Bayesian information criterion (BIC) to determine the optimal number of class <sup>[18, 30]</sup>. The posterior probability of subgroup membership was estimated where a threshold of 0.5 was used to define membership-i.e. where an individual was more as opposed to less likely to be a member of a particular sub-group. Descriptive statistics for subgroups (mean or percentage in the case of continuous and dichotomous variables respectively) were estimated so as facilitate the characterization and comparison of subgroups. Sub-group membership defined categorically based on a probability of group membership at 0.5 or above was also examined in a logistic regression as a function of a range of variables to shed further light on the characteristics of sub-groups. The FMM approach has been used in such diverse areas as demand for medical care <sup>[31]</sup>, disease risk <sup>[32]</sup> and perceived consumer risk <sup>[33]</sup> and its use is supported by popular software packages including Stata version 15 and later.

All analyses and data manipulations were undertaken in Stata version 15 (StataCorp LLC College Station, TX).

#### Results

Approximately one quarter (2,641/10,735; 24.6%) of survey respondents were included in the study which represents 61.6% of participants for whom serum 25(OH)D data were available. A comparison of included and excluded participants did not indicate any significant differences in terms of sex (p value 0.6647), serum 25(OH)D (p value 0.1258), duration of sun exposure (p value 0.3467), consumption of vitamin D supplement (p value 0.7860), laban consumption (p value 0.8409), oily fish consumption (p value 0.1283), and egg consumption (p value 0.3075). Differences were observed with respect to BMI, waist circumference, HbA1c, blood pressure and consumption of other dairy products where the studied sample was higher in BMI (p value 0.0119), waist circumference (p value <0.0001), HbA1c (p value 0.0061), systolic blood pressure (p value 0.0101) and milk consumption (p value 0.0004); and lower in terms of consumption ofyogurt (p value <0.0001), labneh (p value <0.0001), and cheese (p value 0.0012).

Table 1 presents descriptive statistics for the respondents included in the analyses. As can be seen, average serum 25(OH)D level is 34.49 ng/ml and ranges from 1.23 to 149.6 ng/ml. Milk, laban, and cheese are the most popular dairy products consumed and only 3.71% of the sample consumed vitamin D supplements.

The ordinary least-squares (OLS) regression results-reported in Table 2 - show that 25 (OH)D levels are positively related to age, sex (male), consumption of vitamin D supplements, milk and haemoglobin A1c (HbA1c). By contrast waist circumference is seen to be negatively related to 25(OH)D levels. Other variables included in the analysis were not significantly related to 25(OH)D levels.

Using the same group of independent variables, a three-class FMM model—chosen based on BIC—was estimated and also reported in Table 2. The FMM approach revealed distinct patterns of association between subgroups and covariates. Mean vitamin D levels varied across the subgroups, the mean concentration of serum 25(OH)D were 22.79, 34.88, and 57.45 ng/ml for class I, class II, and class III respectively. The percentages of the sample in each subgroup were 39.82, 41.03, and 19.15% for class I, class II, and class III respectively. The relationship between covariates and 25(OH)D levels varied markedly from those suggested in the OLS model. For example, while age remained a significant and positive predictor of 25(OH)D levels, the magnitude of the coefficient in class III was double that of class II and almost six times that of class I. Similarly, stark differences were evident with respect to sex and milk consumption which were significant in class I and II albeit differing in magnitude but non-significant

 **Table 1. Descriptive statistics of the sample (n = 2,641).** 

Variables	Mean	Median

Age (years)	39.81 (17.21)	37

Serum 25-hydroxyvitamin D (ng/ml)	34.49 (19.61)	29.72

Daily sun exposure (minutes)	17.30 (36.24)	4.29

HbA1c (%)	5.97(1.39)	5.57

Average systolic blood pressure (mmHg)1	121.04 (17.55)	119.5

Waist circumference (in centimetre)	89.29 (21.40)	91

Female waist circumference, cm	87.23 (20.07)	89

Male waist circumference, cm	91.41 (22.49)	93

BMI (kg/m2)	29.01 (11.64)	27.78

Milk consumption (days per week)	3.97 (2.68)	4

Laban consumption (days per week) 1	3.06 (2.42)	3

Yogurt consumption (days per week) 1	2.04 (2.16)	2

Labneh consumption (days per week) 1	0.87 (1.56)	0

Cheese consumption (days per week) 1	3.59 (2.40)	3

Fish consumption (days per week) 1	0.86 (1.33)	0

Egg consumption (days per week) 1	2.65 (2.02)	2

Frequency	%

Male	1,302	49.30

On vitamin D supplement	98	3.71

Generalized obesity	985	37.30

Perform intense sport	210	7.95

Currently smoking	252	9.54

1 missing values.

in class III; by contrast in the OLS both were significant and positive. The coefficient on vitamin D supplements was positively significant and large in the case of class I and class III but negative in class II. Similarly, while sun exposure was significant and positive in class II, it had no effect in the other subgroups-again a subtlety concealed in the OLS analysis. BMI became positively significant in class III although waist circumference remains negative in class II and class III. HbAlc is positive and significant in class II but insignificant in the other classes.

 **Table 2. Results of linear regression coefficient and FMM classes (n = 2,641).** 

Variables	OLS	Class I	Class II	Class III

Coef. (95% CI)	P-value	Coef. (95% CI)	P-value	Coef. (95% CI)	P-value	Coef. (95% CI)	P-value

Age	0.25 (0.20,0.30)	<0.001	0.07 (0.3,0.11)	0.001	0.20 (0.04,0.36)	0.016	0.52 (0.36,0.68)	<0.001

Male	5.24 (3.56,6.91)	<0.001	3.66 (1.95,5.36)	<0.001	8.91 (6.30,11.53)	<0.001	0.02 (-6.24,6.27)	0.995

Vitamin D supplement	7.90 (2.88,12.93)	0.002	20.39 (16.26,24.52)	<0.001	-12.49 (-19.94,-5.04)	0.001	16.62 (4.01,29.23)	0.010

Daily sun exposure	0.006 (-0.01,0.02)	0.512	-0.01 (-0.02,0.03)	0.589	0.04 (0.01,0.07)	0.019	- 0.07 (-0.14,0.01)	0.097

Milk consumption	0.37 (0.11,0.64)	0.006	0.34 (0.15,0.54)	0.001	0.49 (0.11,0.87)	0.012	0.01 (-0.96,0.98)	0.984

Waist circumference	-0.07 (-0.11,-0.02)	0.006	- 0.01 (-0.6,0.03)	0.607	-0.07 (-0.12,-0.02)	0.009	- 0.16 (-0.30,-0.3)	0.017

BMI	0.01 (-0.11,0.14)	0.846	-0.03 (-0.14,0.09)	0.647	-0.04 (-0.09,0.02)	0.184	0.45 (0.22,0.68)	<0.001

Current smoker	-0.22 (-3.06,2.63)	0.882	-0.19 (-2.36,1.98)	0.866	- 5.28 (-9.06,-1.51)	0.006	15.19(0.67,29.72)	0.040

HbA1c	0.82 (0.26,1.38)	0.004	0.42 (-0.27,1.12)	0.233	1.04 (0.28,1.79)	0.007	0.15 (-2.11,2.40)	0.899

Intense sport	2.73 (-0.25,5.71)	0.073	0.45 (-1.62,2.52)	0.669	0.37 (-4.01,4.75)	0.867	12.96 (1.64,24.28)	0.025

Constant	20.50(16.04,24.96)	<0.001	15.18 (26.53,65.35)	<0.001	21.68 (15.57,27.80)	<0.001	35.41 (18.43,52.38)	<0.001

 **Table 3. Descriptive statistics of posterior probability for 3 components FMM.** 

Variables	Class I	Class II	Class III

Mean	SD	Mean	SD	Mean	SD

Age (years)	38.58	16.88	40.20	17.13	44.99	18.25

Sun exposure (minutes)	16.44	35.81	19.94	39.60	13.12	23.45

HbA1c (%)	5.89	1.33	6.03	1.43	6.08	1.36

Systolic blood pressure (mmHg)	120.13	17.97	121.22	16.93	124.89	17.68

Waist circumference (in centimetre)	89.56	21.38	89.14	21.24	89.39	22.32

BMI (Kg/m2)	28.99	10.87	29.07	13.00	29.20	11.59

Milk (consumption days)	3.95	2.69	3.98	2.64	3.97	2.73

Laban (consumption days)	2.96	2.40	3.23	2.44	3.02	2.45

Yogurt (consumption days)	2.14	2.20	1.96	2.10	1.92	2.18

Labneh (consumption days)	0.91	1.58	0.88	1.61	0.68	1.29

Cheese (consumption days)	3.71	2.36	3.56	2.39	3.15	2.44

Fish (consumption days)	0.84	1.29	0.92	1.38	0.79	1.34

Eggs (consumption days)	2.71	2.07	2.57	1.96	2.63	1.96

Frequency	%	Frequency	%	Frequency	%

Male	574	47.17	525	53.63	150	45.45

Vitamin supplement	38	3.12	38	3.88	21	6.36

Generalized obesity	458	37.63	354	36.16	130	39.39

Intense sport	99	8.13	76	7.76	25	7.58

Current smoking	125	10.27	84	8.58	39	11.82

httDs://doi.orq/10.1371/iojrnal.Done.0260748.t003

Performing intense sport is positive in class III. Status of currently smoking is negative in class II but became second largest positive in class III.

In Table 3 descriptive statistics for the three subgroups where posterior probabilities are used to assign individuals to particular subgroups are presented. As can be seen, compared to other classes, class I were younger, less likely to consume supplements and laban, more likely to consume cheese, had better control of HbAlc and blood pressure. Class II lay between the other two classes in terms of magnitude in most of the covariates except for sun exposure and consumption of laban. Class III were older, more likely to consume supplements, less likely to have sun exposure and had higher HbAlc and blood pressure.

The results of the logistic regression looking at associations with probability of class membership are reported in Table 4. The probability of being in class I is positively associated with yogurt consumption and negatively associated with being male, younger and laban consumption. Being a male, consuming more laban and fish, being a non-smoker, or longer duration of sun exposure was associated with a higher chance of belonging to class II. The chance of being in class III increased with age, being female, a smoker, taking vitamin D supplements, avoidance of sun or cheese consumption.

#### Discussion

The FMM approach affords an opportunity to explore the existence of subgroups within an overall sample, without the requirement of delineating these based definitively on an observable characteristic or group of such characteristics. The opportunity to expose unobserved heterogeneity and explore different patterns of relationships with observable characteristics can afford insights that might otherwise be missed where, for example, coefficient estimates reflect averages across an entire population. 

Table 4. Results of logistic regression coefficient of posterior probabilities for each FMM class (n = 2,578).

Variables	Class I	Class II	Class III

Coef. (95% CI)	P-value	Coef. (95% CI)	P-value	Coef. (95% CI)	P-value

Age	-0.01 (-0.01,-0.001)	0.026	0.00 (-0.01,0.01)	0.962	0.02 (0.01,0.03)	<0.001

Male	-0.22 (-0.40,-0.005)	0.015	0.35 (0.17,0.53)	<0.001	-0.29 (-0.56,-0.02)	0.036

Laban	-0.04 (-0.07,-0.005)	0.025	0.05 (0.02,0.09)	0.003	-0.003 (-0.06,0.05)	0.899

Yogurt	0.04 (0.002,0.08)	0.041	- 0.04 (-0.08,0.004)	0.076	-0.02 (-0.08,0.04)	0.478

Cheese	0.02 (-0.02,0.05)	0.313	0.003 (-0.03,0.04)	0.866	-0.07 (-0.12,-0.01)	0.019

Daily sun exposure	-0.001 (-0.003,0.001)	0.367	0.003 (0.00,0.004)	0.025	-0.004 (-0.01,-0.0001)	0.042

Current smoker	0.25 (-0.03,0.53)	0.082	-0.35 (-0.64,-0.05)	0.021	0.49 (0.08,0.89)	0.018

Fish consumption	-0.06 (-0.12,0.004)	0.066	0.07 (0.01,0.013)	0.032	-0.01 (-0.11,0.09)	0.794

Vitamin D supplement	-0.39 (-0.82,0.05)	0.085	0.16 (-0.28,0.59)	0.478	0.64 (0.13,1.15)	0.014

Notes: The result is adjusted for consumption of milk, labneh and egg, BMI, waist circumference, HbA1c and intense sport.

Care is warranted in the interpretation of results, as is the case here, subgroups may occupy different parts of the distribution-in this case of 25(OH)D levels. Used carefully, the FMM method may nevertheless reveal relationships that might otherwise have been missed and provide valuable information to policy makers. With specific reference to this study, two key findings are noteworthy.

First, the study sheds light on the conflicting evidence regarding the role of specific variables in vitamin D levels. **For example, while a substantive body of literature points to the existence of a relationship between sun exposure and 25(OH)D levels, our OLS regression and previous work using the same survey data failed to expose the existence of this relationship <sup>[22]</sup>** . By contrast in studies of specific subgroups evidence for a relationship between sun exposure and 25(OH)D levels is mixed. Al-Daghri et al. <sup>[34]</sup>, for example, in a study of adults and children found an association between 25(OH)D levels and sun exposure among dark skinned boys but not in other groups. Similarly, while Al-Raddadi et al. <sup>[35]</sup> in a study of Saudi adolescent females found no association between 25(OH)D levels and sun exposure, Alzaheb and AlAmer <sup>[36]</sup> in a study of young adult Saudi females found inadequate sun exposure to be strongly related to vitamin D deficiency. In another study that examined determinants of serum 25(OH)D among a sample of African Americans and White American men based in Chicago, Murphy and colleagues found that sun exposure was not correlated to the serum 25 (OH)D until the sample was partitioned based on ethnicity where sun exposure was found to be significant among White Americans only <sup>[37]</sup>. In our study, sun exposure was significant but only for class II, the group who had the highest mean levels of sun exposure and intermediate levels of 25(OH)D.

Similar findings are evident with respect to the role of vitamin D supplements. While our OLS results suggest use of supplements was a significant determinant across the entire sample, use being positively related to levels of 25(OH)D, the FMM results reveal that this relationship is magnified in class I and class III but negatively related to the serum 25(OH)D in class II. Elsewhere in the literature evidence is also mixed as to the role of supplements. While our OLS findings are supported by those of Tuffaha et al. <sup>[22]</sup> using the same survey, for example, and by AlQuaiz et al. <sup>[23]</sup> who, in a study of adult Saudis, found that among both males and females absence of supplement use was associated with low 25(OH)D levels, Kaddam et al. <sup>[38]</sup> found no relationship between use of vitamin supplements and vitamin D deficiency among younger Saudis (students) and a negative relationship among older Saudis (employees). These results serve as examples of the potential for unobserved heterogeneity to result in potential confusion. In our OLS results, for example, partitioning the sample along age and gender may, by creating subgroups, have increased the possibility of detecting relationships among these groups though sample size may have created issues here but other subgroups may have gone undetected while choices may have attracted allegations of data mining. Thus, our inability to control for skin pigmentation <sup>[24]</sup>, use of the veil <sup>[39]</sup>, air pollution (which might partially block UV exposure) <sup>[40]</sup> or use of sun screen <sup>[41]</sup> all of which remain unobserved could have served to mask relationships. This is, similarly, the case with respect to supplements where the strength and frequency of use remain unobserved.

This finding is of significance to the second key finding from the study. The potential for average effects estimated across pooled classes may misrepresent relationships for specific subgroups which carries with it the risk that misleading advice may be given to those seeking to determine an appropriate policy response. With respect to the role of supplements for example, our OLS results, supported by the findings of Tuffaha et al. <sup>[22]</sup>, AlQuaiz et al. <sup>[23]</sup> and others could underpin advice to the public at large in Saudi Arabia to consume supplements.  **By contrast our results suggests that more nuanced advice with respect to the use of supplements, diet and sun exposure might be more appropriate.**  Supplements were important in explaining variations in 25(OH)D levels but not among all classes. 

* Among those with the lowest level of 25(OH)D, its effects were particularly marked indicating potential therapeutic benefits of supplements.

(Among those in class II, they may be effectively a waste of money. 

More broadly, the importance of contextualising the results of any study with individual specific information seems clear.

A strong relationship between  **obesity**  and low serum 25(OH)D has been well established in the literature <sup>[42]</sup>. However, our study findings suggest a different relationship between serum 25(OH)D and  **types of obesity** . The correlation between central obesity and 25(OH)D found in our study is supported by a recent meta-analysis by Hajhashemy et al. <sup>[43]</sup> which demonstrated a negative relationship between central obesity and serum 25(OH)D despite the high level of heterogeneity among the included studies. Similarly, another meta-analysis of observational studies, Rafiq and Jeppesen <sup>[44]</sup> confirmed the negative effect of BMI on 25(OH)D level. However, one of the included studies, Al-Elq et al. <sup>[45]</sup>, was a cross-sectional study on 400 Saudi healthy adults which had found (among females) a positive correlation between generalized obesity and serum 25(OH)D which is similar to the correlation found in class III. The author failed to explain the unexpected correlation. 

Newly emerging literature provided us with possible explanations of the unexpected relationship between BMI and serum 25(OH)D seen in class III. Older adults may be more subject to  **spine deformity**  associated with decreasing bone mineral density which can result in loss of between 3 to 5 centimetres of their adulthood height, with more height loss occurring in women <sup>[46]</sup>.  **Thus, BMI could give a misleading impression of obesity measures (and benefits) especially among older women.**  Other explanations are of course also possible. 

Thus, BMI as a measure of adiposity lacks the ability to distinguish between the proportion of fat and the muscular tissue in the body especially in athletes, this potentially complicating the interpretation of results. Results from Al-Elq et al. was not exclusive as another cross-sectional study from China have reported similar correlation. Foo et al. have examined determinants of serum 25(OH)D among Chinese adolescent girls and found that BMI is positively related to serum 25(OH)D <sup>[47]</sup>.

 **Smoking**  is a known risk factor for vitamin D deficiency for its various mechanism that affect vitamin D synthesis and metabolism <sup>[48,49]</sup>.  **What is surprising is that smoking in class III was found to have positive correlation with serum vitamin D**  which warrants further investigation. The unexpected association between smoking and serum 25(OH)D could be explained by the former’s correlation with a variable excluded from our analysis and caution is warranted when interpreting this result. However, replacing smoking status with cheese consumption (as can be seen in S2 Appendix) also resulted in three classes in which class III shows another interesting  **negative correlation between serum 25(OH) levels and cheese consumption.** 

As well as imprecision in the measurement of consumption, variation in the effect of dairy products on serum vitamin D could be explained by the genetic or ethnicity factors. For example, compared to fortified milk, unfortified milk contains very little vitamin D and an adult would be required to drink more than five litres of milk daily to gain the daily required vitamin D <sup>[50]</sup>. The content of vitamin D in Saudi dairy products varies from very little to moderate levels <sup>[51]</sup>. The average milk consumption in our sample is 4 days per week and does not vary in subclasses which could be enough if the chosen milk products were optimally fortified especially with the increasing awareness of the beneficial implication of vitamin D among Saudi population <sup>[52]</sup>. Similarly individuals may have a genetic predisposition that affects their response to vitamin D supplements <sup>[53]</sup> or from other sources.

Different definitions of vitamin D deficiency and insufficiency lead to different prevalence rates and management protocols and add confusion to the correlations between vitamin D deficiency and other diseases <sup>[54]</sup>. Our study underscores the complex nature of relationships between observable population characteristics and 25(OH)D levels that must be negotiated in the interpretation of reported findings and the framing of public health messages based on those findings.

It is important to note a number of limitations in our study. First, our data is cross sectional in nature and while we find a number of interesting associations, we can make no claims as to causal relationships between levels of vitamin D and the independent variables used to explain variations in it. Were a panel data set available causal relationships might be more fully examined, including for example the impact of initiation of supplement use on vitamin D levels. Second, (and in some respects at the heart of our analysis) is that we have incomplete information on many aspects of lifestyle or other attributes that might affect risk such as genetics.

Were it possible to include additional observable data into our analyses we may have produced different classes to those produced as well as relationships between class membership and independent variables. An interesting avenue for further research would to compare FMM models estimated using panel data where additional information on panel members-such as duration of diagnoses or changes in lifestyle could be included and compared with analyses where it was omitted. Third, and again as noted, many of our variables likely exhibit measurement errors, for example in respect of use of supplements. This will likely continue to bedevil secondary analyses of data though FMM may perhaps offer a way of incorporating its role in particular circumstances e.g. where drug adherence is self-reported.

#### Conclusion

Our study highlights additional insights afforded by use of the FMM approach in examining variations in levels of vitamin D. We identified three distinct subgroups among whom the average level of vitamin D and the relationship between vitamin D and observable characteristics varied.  **While for all 3 classes age was positively associated with vitamin D levels the magnitude of the coefficient differed by a magnitude of 6 among them** . With respect to other independent variables even more distinct patterns were evident; 

* supplement use was significant and positive for class 1 and 3 

   * but negative for class 2; 

* smoking status was significant and positive for class 3

   * but negative and significant for class 2 while being

   * insignificant for class 1. 

As is evident by comparison with linear regression analysis these distinctions are concealed in the pooled analysis. The FMM approach may thus shed light on apparently conflicting relationships previously reported in the literature that underscores the careful framing of public health messages if public health is to be improved in a cost-effective manner.

 **Supporting information:**  Appendix. Variable specification. Appendix. Results of alternative model.

#### References

1. Chen LR, Ko NY, Chen KH. Medical treatment for osteoporosis: From molecular to clinical opinions <span>[Internet]</span>. Vol. 20, International Journal of Molecular Sciences. MDPI AG; 2019 <span>[cited 2020 Sep 23]</span>. Available from: /pmc/articles/PMC6540613/?report = abstract

1. Moo IH, Kam CJW, Cher EWL, Peh BCJ, Lo CE, Chua DTC, et al. The effect of the comorbidity burden on vitamin D levels in geriatric hip fracture. BMC Musculoskelet Disord <span>[Internet]</span>. 2020 Aug 8 <span>[cited 2020 Sep 23]</span>; 21(1). Available from: https://pubmed.ncbi.nlm.nih.goV/32770993/https://doi.org/10. 1186/s12891-020-03554-1 PMID: 32770993

1. Charoenngam N, Shirvani A, HolickMF. Vitamin D for skeletal and non-skeletal health: What we should know. Vol. 10, Journal of Clinical Orthopaedics and Trauma. Elsevier B.V.; 2019. p. 1082-93. https:// doi.org/10.1016/Mcot.2019.07.004 PMID: 31708633

1. Vivanti AJ, Monier I, Salakos E, Elie C, Tsatsaris V, Senat MV, et al. Vitamin D and pregnancy outcomes: Overall results of the FEPED study <span>[Internet]</span>. Journal of Gynecology Obstetrics and Human Reproduction. Elsevier Masson SAS; 2020 <span>[cited 2020 Sep 23]</span>. Available from: https://pubmed.ncbi. nlm.nih.gov/32730862/

1. Hossein-Nezhad A, HolickMF. Vitamin Dfor health: A global perspective. In: Mayo Clinic Proceedings. Elsevier; 2013. p. 720-55. https://doi.org/10.1016/i.mayocp.2013.05.011 PMID: 23790560

1. Hajizadeh S, Shary JR, Reed SG, Wagner CL. The prevalence of hypovitaminosis D and its riskfactors in pregnant women and their newborns in the Middle East: A systematic review <span>[Internet]</span>. Vol. 17, International Journal of Reproductive BioMedicine. Research and Clinical Center for Infertility; 2019 <span>[cited 2020 Sep 23]</span>. p. 685-708. Available from: /pmc/articles/PMC6844283/?report = abstract https://doi. org/10.18502/iirm.v17i10.5284 PMID: 31807718

1. Liu X, Baylin A, Levy PD. Vitamin D deficiency and insufficiency among US adults: prevalence, predictors and clinical implications. Br J Nutr <span>[Internet]</span>. 2018 <span>[cited 2020 Sep 23]</span>; 119:928-36. Available from: https://doi.org/10.1017/S0007114518000491 PMID: 29644951

1. Holick MF. Ultraviolet B radiation: The Vitamin D connection. In: Advances in Experimental Medicine and Biology <span>[Internet]</span>. Springer New York LLC; 2017 <span>[cited 2020 Sep 23]</span>. p. 137-54. Available from: https://link.springer.com/chapter/10.1007/978-3-319-56017-5 12

1. Brouwer-Brolsma EM, Vaes AMM, van derZwaluw NL, van Wijngaarden JP, Swart KMA, Ham AC, et al. Relative importance of summer sun exposure, vitamin D intake, and genes to vitamin D status in Dutch older adults: The B-PROOF study. Vol. 164, Journal of Steroid Biochemistry and Molecular Biology. Elsevier Ltd; 2016. p. 168-76.

1. Cashman KD. Vitamin D Deficiency: Defining, Prevalence, Causes, and Strategies of Addressing <span>[Internet]</span>. Vol. 106, Calcified Tissue International. Springer; 2020 <span>[cited 2020 Sep 23]</span>. p. 14-29. Available from: https://pubmed.ncbi.nlm.nih.gov/31069443/https://doi.org/10.1007/s00223-019-00559-4 PMID: 31069443

1. AsprayTJ, Bowring C, Fraser W, Gittoes N, Kassim Javaid M, Macdonald H, etal. National Osteoporosis Society Vitamin D Guideline Summary. Age Ageing <span>[Internet]</span>. 2014 <span>[cited 2020 Sep 23]</span>; 43:592-5. Available from: https://academic.oup.com/ageing/article/43/5/592/2812265 https://doi.org/10.1093/ ageing/afu093 PMID: 25074538

1. Valcour A, Blocki F, Hawkins DM, Rao SD. Effects of Age and Serum 25-OH-Vitamin D on Serum Parathyroid Hormone Levels. J Clin Endocrinol Metab <span>[Internet]</span>. 2012 Nov 1 <span>[cited 2021 Sep 5]</span>; 97 (11):3989-95. Available from: https://academic.oup.com/icem/article/97/11/3989/2836480 https://doi. org/10.1210/ic.2012-2276 PMID: 22933544

1. Buis ML. The consequences of unobserved heterogeneity in a sequential logit model. Res Soc Stratif Mobil. 2011 Sep 1; 29(3):247-62.

1. Schlattmann P. Medical Applications of Finite Mixture Models <span>[Internet]</span>. Berlin: Springer Berlin Heidelberg; 2009 <span>[cited 2021 Sep 7]</span>. Available from: https://link.springer.com/book/10.1007%2F978-3-540- 68651-4

1. Monlezun DJ, CamargoCA, Mullen JT, Quraishi SA. Vitamin D status and the risk of anemia in community-dwelling adults: Results from the national health and nutrition examination survey 2001-2006. Med (United States) <span>[Internet]</span>. 2015 <span>[cited 2020 Sep 30]</span>; 94(50). Available from: /pmc/articles/ PMC5058880/?report = abstract https://doi.org/10.1097/MD.0000000000001799 PMID: 26683908

1. Teixeira JS, Campos ABF, Cordeiro A, Pereira SE, SaboyaCJ, Ramalho A. Vitamin D nutritional status and its relationship with metabolic changes in adolescents and adults with severe obesity. Nutr Hosp. 2018 Jul 1; 35(4):847-53. https://doi.org/10.20960/nh.1657 PMID: 30070873

1. Al-Sumaih I, Johnston B, Donnelly M, O’Neill C. The relationship between obesity, diabetes, hypertension and vitamin D deficiency among Saudi Arabians aged 15 and over: Results from the Saudi health interview survey <span>[Internet]</span>. Vol. 20, BMC Endocrine Disorders. BioMed Central; 2020 <span>[cited 2020 Sep 30]</span>. p. 81. Available from: https://bmcendocrdisord.biomedcentral.com/articles/10.1186/s12902-020- 00562-z https://doi.org/10.1186/s12902-020-00562-z PMID: 32503594

1. Deb P, Norton EC, Manning WG. Health econometrics using Stata. College Station Texas: Stata Press; 2017.

1. El Bcheraoui C, Memish ZA, TuffahaM, Daoud F, Robinson M, Jaber S, etal. Hypertension and Its Associated Risk Factors in the Kingdom of Saudi Arabia, 2013: A National Survey. Int J Hypertens <span>[Internet]</span>. 2014 <span>[cited 2020 Sep 23]</span>; 2014. Available from:/pmc/articles/PMC4142152/?report = abstract https://doi.org/10.1155/2014/564679 PMID: 25170423

1. El Bcheraoui C, Basulaiman M, TuffahaM, Daoud F, Robinson M, Jaber S, etal. Status of the diabetes epidemic in the Kingdom of Saudi Arabia, 2013. Int J Public Health <span>[Internet]</span>. 2014 <span>[cited 2020 Sep 23]</span>; 59(6):1011 -21. Available from: https://pubmed.ncbi.nlm.nih.gov/25292457/https://doi.org/10.1007/ s00038-014-0612-4 PMID: 25292457

1. Memish ZA, El Bcheraoui CE, Tuffaha M, Robinson M, Daoud F, Jaber S, etal. Obesity and associated factors—Kingdom of Saudi Arabia, 2013. Prev Chronic Dis <span>[Internet]</span>. 2014 <span>[cited 2020 Sep 23]</span>; 11(10). Available from: https://pubmed.ncbi.nlm.nih.gov/25299980/

1. TuffahaM, El Bcheraoui C, Daoud F, Al Hussaini HA, Alamri F, Al Saeedi M, etal. Deficiencies under plenty of sun: Vitamin D status among adults in the Kingdom of Saudi Arabia, 2013. N Am J Med Sci <span>[Internet]</span>. 2015 Oct 30 <span>[cited 2020 Sep 24]</span>; 7(10):467-75. Available from: https://pubmed.ncbi.nlm.nih. gov/26713293/https://doi.org/10.4103/1947-2714.168675 PMID: 26713293

1. AlQuaiz AJM, Kazi A, Fouda M, Alyousefi N. Age and gender differences in the prevalence and correlates of vitamin D deficiency. Arch Osteoporos <span>[Internet]</span>. 2018 Dec 1 <span>[cited 2020 Sep 23]</span>; 13(1). Available from: https://pubmed.ncbi.nlm.nih.gov/29705881/https://doi.org/10.1007/s11657-018-0461-5 PMID: 29705881

1. Al-Daghri NM. Vitamin D in Saudi Arabia: Prevalence,distribution and disease associations. Vol. 175, Journal of Steroid Biochemistry and Molecular Biology. Elsevier Ltd; 2018. p. 102-7.

1. Kimlin MG, Lucas RM, Harrison SL, Van Der Mei I, Armstrong BK, Whiteman DC, etal. The contributions of solar ultraviolet radiation exposure and other determinants to serum 25-hydroxyvitamin D concentrations in Australian adults: The AusD study. Am J Epidemiol <span>[Internet]</span>. 2014 <span>[cited 2020 Sep 23]</span>; 179(7):864-74. Available from: https://pubmed.ncbi.nlm.nih.gov/24573539/https://doi.org/10.1093/aie/ kwt446 PMID: 24573539

1. Malandish A, Tartibian B, Rahmati M, Afsargharehbagh R, Sheikhlou Z. The effect of moderate-intensity aerobic training on pulmonary function and estrogen receptor-alpha gene in postmenopausal women with vitamin D deficiency: A randomized control trial. Respir Physiol Neurobiol. 2020 Oct 1; 281:103510. https://doi.org/10.1016/i.resp.2020.103510 PMID: 32739460

1. Scragg R, Sowers MF, Bell C. Serum 25-hydroxyvitamin D, diabetes, and ethnicity in the Third National Health and Nutrition Examination Survey <span>[Internet]</span>. Vol. 27, Diabetes Care. Diabetes Care; 2004 <span>[cited 2020 Sep 23]</span>. p. 2813-8. Available from: https://pubmed.ncbi.nlm.nih.goV/15562190/https://doi.org/ 10.2337/diacare.27.12.2813 PMID: 15562190

1. He JL, Scragg RK. Vitamin D, parathyroid hormone, and blood pressure in the national health and nutrition examination surveys <span>[Internet]</span>. Vol. 24, American Journal of Hypertension. Am J Hypertens; 2011 <span>[cited 2020 Sep 23]</span>. p. 911-7. Available from: https://pubmed.ncbi.nlm.nih.gov/21525968/https://doi. org/10.1038/aih.2011.73 PMID: 21525968

1. StataCorp. Stata 17  **Finite Mixture Models**  Reference Manual. <span>[Internet]</span>. Stata Press. College Station, TX; 2021 <span>[cited 2021 Sep 7]</span>. Available from: https://www.stata.com/manuals/fmm.pdf

1. Keribin C. Consistent estimation of the order of mixture models. Sankhyâ Indian J Stat <span>[Internet]</span>. 2000 <span>[cited 2021 Sep 7]</span>; Available from: https://www.istor.org/stable/25051289

1. Deb P, Trivedi PK. Demand for medical care by the elderly: a  **finite mixture approach** . J Appl Econom. 1997; 12:313-36.

1. Schlattmann P, Dietz E, Bohning D. Covariate adjusted mixture models and disease mapping with the program DismapWin. Stat Med. 1996; 15:919-29. https://doi.org/10.1002/(sici11097-0258(199604151 15:7/9<919::aid-sim260>3.0.co;2-w PMID: 8861160

1. Wedel M, DeSarbo WS. A Latent Class Binomial Logit Methodology for the Analysis of Paired Comparison Choice Data. Decis Sci <span>[Internet]</span>. 1993 Nov 1 <span>[cited 2021 Sep 7]</span>; 24(6):1157-70. Available from: https://onlinelibrary.wiley.com/doi/full/10.1111/i.1540-5915.1993.tb00508.x

1. Al-Daghri NM, Al-Saleh Y, Khan N, Sabico S, Aljohani N, Alfawaz H, etal. Sun exposure, skin color and vitamin D status in Arab children and adults <span>[Internet]</span>. Vol. 164, Journal of Steroid Biochemistry and Molecular Biology. Elsevier Ltd; 2016 <span>[cited 2020 Sep 24]</span>. p. 235-8. Available from: https://pubmed. ncbi.nlm.nih.gov/27182012/

1. Al-Raddadi R, Bahijri S, Borai A, AlRaddadi Z. Prevalence of lifestyle practices that might affect bone health in relation to vitamin D status among female Saudi adolescents. Nutrition <span>[Internet]</span>. 2018 Jan 1 <span>[cited 2020 Sep 24]</span>; 45:108-13. Available from: https://pubmed.ncbi.nlm.nih.gov/29129230/https://doi. org/10.1016/i.nut.2017.07.015 PMID: 29129230

1. Alzaheb RA, Al-AmerO. Prevalence and Predictors of Hypovitaminosis D Among Female University Students in Tabuk, Saudi Arabia. Clin Med Insights Women’s Heal <span>[Internet]</span>. 2017 Jan <span>[cited 2020 Sep 24]</span>; 10:1179562X1770239. Available from: https://pubmed.ncbi.nlm.nih.gov/28579866/ https://doi.org/ 10.1177/1179562X17702391 PMID: 28579866

1. Murphy AB, Kelley B, Nyame YA, Martin IK, Smith DJ, Castaneda L, etal. Predictors of Serum Vitamin D Levels in African American and European American Men in Chicago: http://dx.doi.org/101177/ 1557988312437240 <span>[Internet]</span>. 2012 Mar 7 <span>[cited 2021 Sep 14]</span>; 6(5):420-6. Available from: https:// ¡ournals.sagepub.com/doi/full/10.1177/1557988312437240 PMID: 22398989

1. Kaddam IM, Al-Shaikh AM, Abaalkhail BA, Asseri KS, Al-Saleh YM, Al-Qarni AA, et al. Prevalence of vitamin D deficiency and its associated factors in three regions of Saudi Arabia: A cross-sectional study. Saudi Med J <span>[Internet]</span>. 2017 Apr 1 <span>[cited 2020 Sep 25]</span>; 38(4):381-90. Available from: https://pubmed. ncbi.nlm.nih.gov/28397944/https://doi.org/10.15537/smi.2017.4.18753 PMID: 28397944

1. Dawodu A, Absood G, Patel M, Agarwal M, Ezimokhai M, Abdulrazzaq Y, et al. Biosocial factors affecting vitamin D status of women of childbearing age in the United Arab Emirates. J Biosoc Sci <span>[Internet]</span>. 1998 Oct <span>[cited 2020 Sep 25]</span>; 30(4):431-7. Available from: https://pubmed.ncbi.nlm.nih.gov/9818552/ https://doi.org/10.1017^0021932098004313 PMID: 9818552

1. HolickMF. Environmental factors that influence the cutaneous production of vitamin D <span>[Internet]</span>. Vol.61, American Journal of Clinical Nutrition. American Society for Nutrition; 1995 <span>[cited 2020 Sep 25]</span>. Available from: https://pubmed.ncbi.nlm.nih.gov/7879731/

1. Gharaibeh MA, Stoecker BJ. Assessment of serum 25(OH)D concentration in women of childbearing age and their preschool children in Northern Jordan during summer. EurJClin Nutr <span>[Internet]</span>. 2009 <span>[cited 2020 Sep 25]</span>; 63(11):1320-6. Available from: https://pubmed.ncbi.nlm.nih.gov/19707220/ https://doi.org/10.1038/eicn.2009.99 PMID: 19707220

1. Wortsman J, Matsuoka LY, ChenTC, Lu Z, HolickMF. Decreased bioavailability of vitamin D in obesity. Am J Clin Nutr <span>[Internet]</span>. 2000 <span>[cited 2020 Sep 25]</span>; 72(3):690-3. Available from: https://pubmed.ncbi. nlm.nih.gov/10966885/https://doi.org/10.1093/aicn/72.3.690 PMID: 10966885

1. Haihashemy Z, Shahdadian F, Ziaei R, Saneei P. Serum vitamin D levels in relation to abdominal obesity: A systematic review and dose-response meta-analysis of epidemiologic studies. Obes Rev <span>[Internet]</span>. 2020 Sep 3 <span>[cited 2020 Sep 24]</span>;obr.13134. Available from: https://onlinelibrary.wiley.com/doi/abs/ 10.1111/obr.13134 PMID: 32881271

1. Rafiq S, Jeppesen PB. Body mass index, vitamin d, and type 2 diabetes: A systematic review and metaanalysis <span>[Internet]</span>. Vol. 10, Nutrients. MDPI AG; 2018 <span>[cited 2020 Sep 25]</span>. Available from:/pmc/arti- cles/PMC6164132/?report = abstract

1. Al-Elq AH, Sadat-Ali M, Al-Turki HA, Al-Mulhim FA, Al-Ali AK. Is there a relationship between body mass index and serum vitamin D levels? Saudi Med J <span>[Internet]</span>. 2009 Dec 1 <span>[cited 2020 Sep 25]</span>; 30 (12):1542-6. Available from: https://europepmc.org/article/med/19936417 PMID: 19936417

1. Kuwabara A, Ogawa-Shimokawa Y, Tanaka K. Body weight divided by squared knee height as an alternative to body mass index. Med Hypotheses. 2011 Mar 1; 76(3):336-8. https://doi.org/10.1016/i.mehy. 2010.10.033 PMID: 21106302

1. Foo LH, Zhang Q, Zhu K, MaG, Trube A, Greenfield H, etal. Relationship between vitamin D status, body composition and physical exercise of adolescent girls in Beijing. Osteoporos Int 2008 203 <span>[Internet]</span>. 2008 Jul 16 <span>[cited 2021 Sep 13]</span>; 20(3):417-25. Available from: https://link.springer.com/article/10. 1007/s00198-008-0667-2 PMID: 18629568

1. Al-Bashaireh AM, Haddad LG, Weaver M, ChengguoX, Kelly DL, Yoon S. The Effect of Tobacco Smoking on Bone Mass: An Overview of Pathophysiologic Mechanisms. J Osteoporos. 2018;2018.

1. Mousavi SE, Amini H, Heydarpour P, Amini Chermahini F, Godderis L. Air pollution, environmental chemicals, and smoking may trigger vitamin D deficiency: Evidence and potential mechanisms <span>[Internet]</span>. Vol. 122, Environment International. Elsevier Ltd; 2019 <span>[cited 2020 Sep 24]</span>. p. 67-90. Available from: https://pubmed.ncbi.nlm.nih.gov/30509511/https://doi.org/10.1016/i.envint.2018.11.052 PMID: 30509511

1. Fox PF, Uniacke-Lowe T, McSweeney PLH, O’Mahony JA. Dairy chemistry and biochemistry, second edition. Dairy Chemistry and Biochemistry, Second Edition. Springer International Publishing; 2015. 1-584 p.

1. Sadat-Ali M, Al Elq A, Al-Farhan M, Sadat N. Fortification with vitamin D: Comparative study in the Saudi Arabian and US markets. J Fam Community Med <span>[Internet]</span>. 2013 <span>[cited 2020 Sep 24]</span>; 20(1):49. Available from: https://pubmed.ncbi.nlm.nih.gov/23723731/https://doi.org/10.4103/2230-8229.108186 PMID: 23723731

1. Aljefree N, Lee P, Ahmed F. Exploring Knowledge and Attitudes about Vitamin D among Adults in Saudi Arabia: A Qualitative Study. Healthcare <span>[Internet]</span>. 2017 Oct 16 <span>[cited 2020 Sep 26]</span>; 5(4):76. Available from: https://pubmed.ncbi.nlm.nih.gov/29035301/https://doi.org/10.3390/healthcare5040076 PMID: 29035301

1. Didriksen A, Grimnes G, Hutchinson MS, Kjrergaard M, Svartberg J, Joakimsen RM, et al. The serum 25-hydroxyvitamin D response to vitamin D supplementation is related to genetic factors, BMI, and Baseline levels. Eur J Endocrinol <span>[Internet]</span>. 2013 Nov 1 <span>[cited 2020 Sep 24]</span>; 169(5):559-67. Available from: http://www.kbioscience.co.uk https://doi.org/10.1530/EJE-13-0233 PMID: 23935129

1. Al-Daghri NM, Al-Saleh Y, Aljohani N, Sulimani R, Al-Othman AM, Alfawaz H, etal. Vitamin D status correction in Saudi Arabia: an experts’ consensus under the auspices of the European Society for Clinical and Economic Aspects of Osteoporosis, Osteoarthritis, and Musculoskeletal Diseases (eSceO). Arch Osteoporos. 2017 Dec 1; 12(1).

---

### VitaminDWiki

### Web

* [Wikipedia](https://en.wikipedia.org/wiki/Mixture_model) 

   * "In statistics, a mixture model is a probabilistic model for representing the presence of subpopulations within an overall population, without requiring that an observed data set should identify the sub-population to which an individual observation belongs. Formally a mixture model corresponds to the mixture distribution that represents the probability distribution of observations in the overall population. However, while problems associated with "mixture distributions" relate to deriving the properties of the overall population from those of the sub-populations, "mixture models" are used to make statistical inferences about the properties of the sub-populations given only observations on the pooled population, without sub-population identity information."

* Medical Applications of Finite Mixture Models - 2009  book <i class="fas fa-file-pdf" style="margin-right: 0.3em;"></i><a href="https://d378j1rmrlek7x.cloudfront.net/attachments/pdf/2009-book-medicalapplicationsoffinitemix-compressed.pdf">PDF</a>

* Manipulating measurement scales in medical statistical analysis and data mining: A review of methodologies - 2014 <i class="fas fa-file-pdf" style="margin-right: 0.3em;"></i><a href="https://d378j1rmrlek7x.cloudfront.net/attachments/pdf/manipulating-measurement-scales.pdf">PDF</a>

* Hybridizing Machine Learning Methods and Finite Mixture Models for Estimating Heterogeneous Treatment Effects in Latent Classes - 2020  <i class="fas fa-file-pdf" style="margin-right: 0.3em;"></i><a href="https://d378j1rmrlek7x.cloudfront.net/attachments/pdf/hybridizing-machine-learning-methods-and-finite-mixture-model-compressed.pdf">PDF</a>

* [What are “Finite Mixture Models?”](https://www.thedigitaltransformationpeople.com/channels/analytics/what-are-finite-mixture-models%E2%80%8B/) 2019 - for marketng