/* ═══════════════════════════════════════════════════════════
   Shared case-study metadata — consumed by case-studies/*.html
   via main.js to render the "More Case Studies" cross-link grid.
   Image paths are relative to the case-studies/ directory.
   ═══════════════════════════════════════════════════════════ */

window.CASE_STUDIES = [
  {
    slug: 'zero-day-pandemic-preparedness',
    tag: 'Jumpcode Genomics',
    title: 'Zero-Day Pandemic Preparedness',
    hook: 'CRISPR-enhanced metatranscriptomics for agnostic pathogen detection — from a $750K BARDA contract to a ~$24M EU consortium award.',
    image: '../assets/images/sars-cov-2-illustration.jpg',
    imageAlt: 'Molecular illustration of the SARS-CoV-2 coronavirus',
    imageCredit: 'Illustration: Veronica Falconieri Hays for "A Visual Guide to the SARS-CoV-2 Coronavirus," Scientific American',
    imageCreditUrl: 'https://www.scientificamerican.com/article/a-visual-guide-to-the-sars-cov-2-coronavirus/'
  },
  {
    slug: 'newborn-screening-pseudogene-depletion',
    tag: 'Jumpcode Genomics',
    title: 'New-Born Screening: Pseudogene Depletion',
    hook: 'Removing pseudogene contamination from whole-genome variant calls in newborn genetic-disease screening panels.',
    image: '../assets/images/pseudogene.png',
    imageAlt: 'Pseudogene contamination diagram'
  },
  {
    slug: 'crisprclean-single-cell-genomics',
    tag: 'Jumpcode Genomics',
    title: 'CRISPRclean for Single-Cell & Long-Read Genomics',
    hook: 'Depleting non-informative transcripts from scRNA-seq and long-read libraries — now a companion product for 10x Genomics and Pacific Biosciences.',
    image: '../assets/images/scrna-seq-1.png',
    imageAlt: 'Single-cell RNA sequencing depletion diagram'
  },
  {
    slug: 'crispr-depletion-platform',
    tag: 'Jumpcode Genomics',
    title: 'CRISPR-Based Depletion Platform',
    hook: 'A general-purpose CRISPR depletion platform solving whole-genome sequencing’s "wasted coverage" problem across metagenomics, agri-genomics, and gene regulation.',
    image: '../assets/images/crispr-depletion.png',
    imageAlt: 'CRISPR depletion platform diagram'
  },
  {
    slug: 'truedesign-genome-editing-portal',
    tag: 'Thermo Fisher Scientific',
    title: 'TrueDesign® & SeqScreener™',
    hook: 'Cloud-based CRISPR design and edit-confirmation tools that became the customer-facing front door to Thermo Fisher’s gene-editing product line.',
    image: '../assets/logos/thermofisher.png',
    imageAlt: 'Thermo Fisher Scientific logo'
  },
  {
    slug: 'optforce-metabolic-engineering',
    tag: 'Penn State · Maranas Lab',
    title: 'OptForce: Computational Strain Design',
    hook: 'An optimization framework identifying the minimal genetic interventions needed to overproduce target biochemicals in engineered microbes.',
    image: '../assets/images/optforce-1.png',
    imageAlt: 'OptForce metabolic engineering framework diagram'
  }
];
