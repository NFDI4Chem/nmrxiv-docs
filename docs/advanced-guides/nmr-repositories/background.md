---
sidebar_position: 1
title: Background
---
# Background

## Our Aim of Looking into NMR Repositories

In order to get inspired by other NMR repositories previous experiences, we have performed some quantitative and qualitative overview on available NMR data in public datasets to see what metadata was covered and how often (in how many studies) this metadata was available, which aspects were challenging, and how were they tackled, and what, if any, ontologies are commonly used there. We hope to make our data [FAIRer](https://www.go-fair.org/fair-principles/) and machine-readable by using this knowledge.

This overview was also used to identify common issues encountered while reporting data to avoid repeating same mistakes, and to consider approaches to retrospectively correct the data before importing it into nmrXiv. More details on those issues to be found in [Common Issues in NMR Repositories](/docs/advanced-guides/nmr-repositories/common-issues-encountered-in-nmr-repositories.md)

## The Scope of the Overview

So far, all covered NMR repositories are biology-oriented ones, but non-biological metadata was also covered. Those repositories are [MetaboLights](https://www.ebi.ac.uk/metabolights/), [Metabolomics Workbench](https://www.metabolomicsworkbench.org/),  [CENAPT](https://dataverse.harvard.edu/dataverse/cenapt), and [NMRShiftDB](https://nmrshiftdb.nmr.uni-koeln.de/). The covered metadata includes sample metadata such as the organisms with their used parts and variants, and the solvents with the pH, in addition to assay (experiment) metadata such as the instruments names, pulse sequence frequency, the detected Nuclei with the dimensionality, temperature, and more to come. It also covers the ontologies used. Please find GitHub repository with Python scripts and Jupyter notebooks to extract the metadata and visualize it [here](https://github.com/NFDI4Chem/repo-scripts).

In this section you can find the graphs on NMR metadata. To find the corresponding notebooks used to generate the graphs, check the links coming with each graph. To find the scripts used to generate the csv files used in the notebooks, please follow this [link](https://github.com/NFDI4Chem/repo-scripts), but the link leads to a private repository at the moment.