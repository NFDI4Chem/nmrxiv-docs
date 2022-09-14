---
sidebar_position: 10
id: data analysis
title: NMR Repositories Overview
---
# NMR Repositories Overview

### Organism
Humans and mice are the most studied species in both [MetaboLights](https://www.ebi.ac.uk/metabolights/) and [Metabolomics Workbench](https://www.metabolomicsworkbench.org/), while [CENAPT](https://dataverse.harvard.edu/dataverse/cenapt) doesn't provide this information unless one checks in the corresponding articles. Other, less commonly studied, species include sheep, rats, horses, wild boars and others. [Notebook link](https://github.com/NFDI4Chem/repo-scripts/blob/main/notebooks/organism.ipynb)
![organism](https://raw.githubusercontent.com/NFDI4Chem/nmrxiv-docs/main/static/img/organism.png)

### Organism Part
As humans and mice are the most studied species in both [MetaboLights](https://www.ebi.ac.uk/metabolights/) and [Metabolomics Workbench](https://www.metabolomicsworkbench.org/), most of the cases where the organism part is reported come from them. Blood serum and plasma, liver, muscles, urine and feces are the most studied. [Notebook link](https://github.com/NFDI4Chem/repo-scripts/blob/main/notebooks/organism-part.ipynb)
![organism part](https://raw.githubusercontent.com/NFDI4Chem/nmrxiv-docs/main/static/img/part.png)

### Variant
The variant details were mostly missing, but when reported, they mostly come from mice and rats. [Notebook](https://github.com/NFDI4Chem/repo-scripts/blob/main/notebooks/variant.ipynb)
![variant](https://raw.githubusercontent.com/NFDI4Chem/nmrxiv-docs/main/static/img/variant.png)

### Instrument Name
There intruments names were reported in so many various ways it was difficult sometimes to tell whether two names refer to the same instrument or not, which emphasize again on the importance of using ontology terms. More details on this are to be found [Common Issues in NMR Repositories](https://docs.nmrxiv.org/docs/advanced-guides/common%20issues%20encountered%20in%20nmr%20repositories/). [Notebook link](https://github.com/NFDI4Chem/repo-scripts/blob/main/notebooks/instruments-names.ipynb)
![instrument name](https://raw.githubusercontent.com/NFDI4Chem/nmrxiv-docs/main/static/img/instrument.png)

### Dimensionality
Most of the studies are one-dimensional except when it comes to [CENAPT](https://dataverse.harvard.edu/dataverse/cenapt) where almost all the studies include one- and two-dimensional assays. In some cases, the dimensionality wasn't provided explicitly, but through the name of the technique, e.g., HSQC. [Notebook link](https://github.com/NFDI4Chem/repo-scripts/blob/main/notebooks/dimensionality.ipynb)
![dimensionality](https://raw.githubusercontent.com/NFDI4Chem/nmrxiv-docs/main/static/img/dimensionality.png)

### Pulse Frequency
600 MHz is the one used most, the other frequencies can be found here. [Notebook link](https://github.com/NFDI4Chem/repo-scripts/blob/main/notebooks/frequency.ipynb)
![frequency](https://raw.githubusercontent.com/NFDI4Chem/nmrxiv-docs/main/static/img/frequency.png)

### Nuclei
1H and 13C are the only nuclei used, also in 2D assays as 1H-13C and 1H-1H, while all the other nuclei were never used. [Notebook link](https://github.com/NFDI4Chem/repo-scripts/blob/main/notebooks/nuclei.ipynb)
![nuclei](https://raw.githubusercontent.com/NFDI4Chem/nmrxiv-docs/main/static/img/nuclei.png)

### Ontologies
They were used only in [MetaboLights](https://www.ebi.ac.uk/metabolights/). The ontologies mentioned here were evaluated for possible use in nmrXiv. For more details on that, check [ontologies](https://docs.nmrxiv.org/docs/introduction/ontologies) page. [Notebook link](https://github.com/NFDI4Chem/repo-scripts/blob/main/notebooks/ontologies.ipynb)
![ontologies](https://raw.githubusercontent.com/NFDI4Chem/nmrxiv-docs/main/static/img/ontology.png)

### pH
It was possible to get the pH details only from [MetaboLights](https://www.ebi.ac.uk/metabolights/) where we see that most samples' pHs were leaning towards the neutral 7. [Notebook link](https://github.com/NFDI4Chem/repo-scripts/blob/main/notebooks/ph.ipynb)
![pH](https://raw.githubusercontent.com/NFDI4Chem/nmrxiv-docs/main/static/img/ph.png)

### Solvent
It was difficult to quantify the solvent data due to the lack of standardized writing, however, it seems that D2O is the solvent most used, or simply the value is missing. [Notebook link](https://github.com/NFDI4Chem/repo-scripts/blob/main/notebooks/solvent.ipynb)
![solvent](https://raw.githubusercontent.com/NFDI4Chem/nmrxiv-docs/main/static/img/solvent.png)

### Temperature
As [MetaboLights](https://www.ebi.ac.uk/metabolights/) provided the temperature unit using ontology terms, it was possible to convert all of them to Kelvin, and looking at the red bars, we can see that most assays were held around room temperature. That conversion was not possible in [Metabolomics Workbench](https://www.metabolomicsworkbench.org/), and although a human can guess whether values are provided in Kelvin or Celsius, Machine-readabilty was affected. Still, with a human eye we can say that most assays were held around room temperature as well. [Notebook link](https://github.com/NFDI4Chem/repo-scripts/blob/main/notebooks/temperature.ipynb)
![temperature](https://raw.githubusercontent.com/NFDI4Chem/nmrxiv-docs/main/static/img/temperature.png)

### Study Sizes
Although the study size was mostly in tens of megabytes, there were few studies with a size of tens of gigabytes. [Notebook link](https://github.com/NFDI4Chem/repo-scripts/blob/main/notebooks/size.ipynb)
![size](https://raw.githubusercontent.com/NFDI4Chem/nmrxiv-docs/main/static/img/size.png)
