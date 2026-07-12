Basic Idea of what I would like to convey in this blog:

In tandem with scaling infrastructure, I have pioneered the deployment of predictive AI/ML
workflows to optimize complex assay design at a massive scale. At Jumpcode
Genomics, I led the end-to-end design and functional optimization of tens of
thousands of CRISPR-gRNAs for targeted molecular depletion assays. We
established a rigorous, active learning feedback loop, running 2–3 iterative
cycles of computational design, wet-lab experimental execution, and
high-throughput data analysis. To dissect the underlying biological drivers of
gRNA efficacy, I deployed ensemble machine learning algorithms - utilizing **Gradient
Boosting Regressors (such as XGBoost/LightGBM)** alongside  **Deep
Convolutional Neural Networks (CNNs)** —to model how sequence-specific and
structural features influence cleavage efficiency. The model integrated diverse
inputs, including positional GC-content, target transcript abundance from
empirical NGS data, topological genomic constraints, secondary structure
thermodynamics, and PAM site density to avoid spatial steric hindrance and
overcrowding. By treating these features as multi-parametric variables, the
algorithms accurately predicted on-target kinetics, enabling our team to
dynamically adjust the individual molar ratios within complex multiplexed gRNA
pools to maximize background depletion. This exact experience building
data-driven predictive loops positions me perfectly to spearhead GT Molecular’s
2026 goal of **embedding AI/ML as a core capability, **providing the
technical blueprint and leadership necessary to successfully deploy your first
production ML pilot.

Notes:

- Write a 2-3 paragraph review of how AI and machine learning is used for CRISPR design. Refer to papers published between 2021 to 2024.
- These papaers above are meant for in vivo gene editing. In vitro cleavage by CRISPR-gRNAs has its own set of constraints - write comprehensively how doing CRISPR cleavage in the context of CRISPRclean Jumpcode depletion is different from designing gRNAs for cell engineering and cancer research
- Write a detailed 1 paragraph technically sound description of how Gradient Boosting Regressors (XGBoost or LightBGM) can be used for this
- Write a detailed 1 paragraph on how Deep CNNs can be used for this.
- Conclude with which is better - what does the research say - cite relevant papers.
