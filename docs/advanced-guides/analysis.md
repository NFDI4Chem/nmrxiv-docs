---
sidebar_position: 2
id: data analysis
title: NMR Repositories Overview
---
# NMR Repositories Overview

## Our aim

In order to get inspired by other NMR repositories previous experiences, we have performed some
quantitative and qualitative overview on available NMR data in public datasets to see what metadata was covered and how often (in how many studies) this metadata was available. Which aspects were challenging, and how were they tackled, and what, if any, ontologies are commonly used. We hope to make our data more FAIR and machine readable by using this knowledge.

This overview was also used to identify common issues encountered while reporting data to avoid repeating same mistakes and to consider approaches to retrospectively correct the data before importing into nmrXiv. More details on those issues to be found in [Common issues in NMR repositories]

## The scope of the overview

So far, all covered NMR repositories are biology oriented ones, but non-biological metadata was also covered. Those repositories are [MetaboLights](https://www.ebi.ac.uk/metabolights/), [Metabolomics Workbench](https://www.metabolomicsworkbench.org/), [CENAPT](https://dataverse.harvard.edu/dataverse/cenapt). The covered metadata includes sample metadata such as the organisms with their used parts and variants, and the solvents with the pH, in addition to assay metadata such as the instruments names, pulse sequence frequency, the detected Nuclei with the dimensionality, temperature, and more to come. We also cover the ontologies used.
https://github.com/NFDI4Chem/repo-scripts 


## The overview

Here you can find the graphs on NMR meta data. To find the corresponding notebooks used to generate the graphs, please follow this [link](https://github.com/NFDI4Chem/repo-scripts/tree/main/notebooks). To find the scripts used to generate the csv files used in the graphs, please follow this [link](https://github.com/NFDI4Chem/repo-scripts). PLease note that this repository is parivte at the moment.

### Organism
Humans and mice are the most studied species in both [MetaboLights](https://www.ebi.ac.uk/metabolights/) and [Metabolomics Workbench](https://www.metabolomicsworkbench.org/), while [CENAPT](https://dataverse.harvard.edu/dataverse/cenapt) doesn't provide this information.
Other, less commonly studied, species include sheep, rats, horses, wild boars and others.
![organism](https://raw.githubusercontent.com/NFDI4Chem/nmrxiv-docs/main/static/img/organism.png)

## Organism Part
As humans and mice are the most studied species in both [MetaboLights](https://www.ebi.ac.uk/metabolights/) and [Metabolomics Workbench](https://www.metabolomicsworkbench.org/), while [CENAPT](https://dataverse.harvard.edu/dataverse/cenapt), most of the cases were the organism part is reported come from them. Blood serum and plasma, liver, muscles, urine and feces are the most studied.
![organism part](https://raw.githubusercontent.com/NFDI4Chem/nmrxiv-docs/main/static/img/part.png)

## Variant
The variant details were mostly missing, but when reported, they mostly come from mice and rats.
![variant](https://raw.githubusercontent.com/NFDI4Chem/nmrxiv-docs/main/static/img/variant.png)

## Instrument Name
There were clear variation in the names provided for the instruments until it is difficult to tell whether two names refer to the same instrument or not. However, more details on this are to be found [Common issues in NMR repositories]
![instrument name](https://raw.githubusercontent.com/NFDI4Chem/nmrxiv-docs/main/static/img/instrument.png)

## Dimensionality
Most of the studies are one-dimensional except when it comes to [CENAPT](https://dataverse.harvard.edu/dataverse/cenapt) where almost all the studies include one- and two-dimensional assays. In some cases, the dimensionality wasn't provided explicitly, but through the name of the technique, e.g., HSQC.
![dimensionality](https://raw.githubusercontent.com/NFDI4Chem/nmrxiv-docs/main/static/img/dimensionality.png)

## Pulse frequency
600 MHz is the one used most, the other frequencies can be found here.
![frequency](https://raw.githubusercontent.com/NFDI4Chem/nmrxiv-docs/main/static/img/frequency.png)

## Nuclei
1H and 13C are the only ones nuclei used, also in 2D assays as 1H-13C and 1H-1H, while all the other nuclei were never used.
![nuclei](https://raw.githubusercontent.com/NFDI4Chem/nmrxiv-docs/main/static/img/nuclei.png)

## Ontologies
They were used only in [MetaboLights](https://www.ebi.ac.uk/metabolights/). The ontologies mentioned here were evaluated for possible use in nmrXiv. For more details on that, check [ontologies](https://docs.nmrxiv.org/docs/introduction/ontologies) page.
![ontologies](https://raw.githubusercontent.com/NFDI4Chem/nmrxiv-docs/main/static/img/ontology.png)

## pH
It was possible to get the pH details only from [MetaboLights](https://www.ebi.ac.uk/metabolights/) where we see that most samples' pHs were leaning towards the neutral 7.
![pH](https://raw.githubusercontent.com/NFDI4Chem/nmrxiv-docs/main/static/img/ph.png)

## Solvent
It was difficult to quantify the solvent data due to the lack of standardized writing, however it seems that D2O is the solvent most used, or simply the value is missing.
![solvent](https://raw.githubusercontent.com/NFDI4Chem/nmrxiv-docs/main/static/img/solvent.png)

## Temperature
As [MetaboLights](https://www.ebi.ac.uk/metabolights/) provided the temperature unit using ontology terms, it was possible to convert all of them to Kelvin, and looking at the red bars, we can see that most assays were held around room temperature. That conversion was not possible in [Metabolomics Workbench](https://www.metabolomicsworkbench.org/), and although a human can guess whether values are provided in Kelvin or Celsius, a real quantification was not possible. Still, with a human eye we can say that most assays were held around room temperature as well. 
![temperature](https://raw.githubusercontent.com/NFDI4Chem/nmrxiv-docs/main/static/img/temperature.png)

## Study sizes
Although the study size was mostly in tens of megabytes, there were few studies with a size of tens of gigabytes.
![size](https://raw.githubusercontent.com/NFDI4Chem/nmrxiv-docs/main/static/img/size.png)
