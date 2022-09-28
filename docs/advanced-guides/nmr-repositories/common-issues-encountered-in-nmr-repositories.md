---
sidebar_position: 18
id: common issues encountered in nmr repositories
title: Common Issues Encountered in NMR Repositories
---
# Common Issues Encountered in NMR Repositories

While we were trying to get an [overview of NMR metadata in repositories](https://docs.nmrxiv.org/docs/advanced-guides/data%20analysis), we came across some pitfalls that we would like to avoid or tackle in nmrXiv, most of them come from human error where the repository offers too much flexibility.

## Ontologies

Most repositories don't have structured or adequate use of ontologies, the only exception was [MetaboLights](https://www.ebi.ac.uk/metabolights/) where ISA schema was applied enabling the proper use of ontologies. However, there was still a considerable room for improvement, and here are some examples why:
### The Use of Unideal Ontology Source
In some cases, the used ontology term was coming from a source were the term was rejected, while another ontology provides the same term and it is accepted there. This becomes clear in the case of organisms, where [NCBI organismal classification - NCBITAXON](https://www.ebi.ac.uk/ols/ontologies/ncbitaxon) is a well established source of organisms names, but the users still picked other sources, e.g. [Stylostichon plumosum](https://www.ncbi.nlm.nih.gov/Taxonomy/Browser/wwwtax.cgi?id=1198107) vs [Stylostichon plumosum](https://www.marinespecies.org/aphia.php?p=taxdetails&id=150212). We expect that this is due to the ranking algorithm, where the term coming from the other ontology was suggested first to the user. 

### The Use of Broken Links
[ISA ontology reference schema](https://github.com/ISA-tools/isa-api/blob/master/isatools/resources/schemas/isa_model_version_1_0_schemas/core/ontology_annotation_schema.json), which was adapted in [MetaboLights](https://www.ebi.ac.uk/metabolights/), enables providing a link to the ontology term under the key "termAccession". However, some of the provided links were broken, e.g., [Clostridium sp. Asf502](https://www.ontobee.org/ontology/NCBITaxon?iri=http://purl.obolibrary.org/obo/NCBITaxon_97139)

### Wrong Mapping Between the "annotationValue" and the "termAccession"
Sometimes, the link provided as a termAccession doesn't lead to the mentioned annotationValue, e.g. [solvent blank](http://ontologies.berkeleybop.org/), and it can lead to wrong mapping to the termSource, e.g., [NMR buffer](https://www.ontobee.org/ontology/NCBITaxon?iri=http://purl.obolibrary.org/obo/NCBITaxon_9606) was described to exist in [NCBI organismal classification - NCBITAXON](https://www.ebi.ac.uk/ols/ontologies/ncbitaxon).

### The Lack of Precision
When a term like [muscle](https://www.ontobee.org/ontology/BTO?iri=http://purl.obolibrary.org/obo/BTO_0000887) is used as an organism part, it is completely not clear which muscles were used although the used ontology source provides a vast set of subclasses. A similar case is the use of the term [serum](https://www.ebi.ac.uk/ols/ontologies/bto/terms?iri=http%3A%2F%2Fpurl.obolibrary.org%2Fobo%2FBTO_0001239) to refer to [blood serum](https://www.ebi.ac.uk/ols/ontologies/bto/terms?iri=http%3A%2F%2Fpurl.obolibrary.org%2Fobo%2FBTO_0000133&viewMode=All&siblings=false).

## Issues Encountered Independantly from the Metadata Type:

Here we would like to talk about some issues about reporting the data that we noticed repeatedly, and they happen regardless of the data type. Examples of those issues will be provided in more details in each data type.

### Data not Provided
This happens when the data is simply missing, sometimes due to the fact that the repository doesn't provide a dedicated field for that metadata. In other cases the metadata was provided, but in the shape of free text as a description or in linked articles. Those cases were especially clear in [CENAPT](https://dataverse.harvard.edu/dataverse/cenapt) as the repository is not NMR oriented, hence the lack of specialised fields. But even in metabolites oriented repositories, where the fields are available, crucial information such as the organism where the sample comes from can be missing.

### Non-Standardized Writing
This was a serious issue whenever ontology terms are not used. It lead to providing different values for the same term, where some of them are scientifically not accurate (as with writing the species name capitalized: Mus musculus vs Mus Musculus), or some terms that are more formal than others (Goat vs Capra hircus). And sometimes, the term value itself is provided with its source (NCBITAXON:Homo sapiens), or as a text that actually contains several terms (liver and blood).

### Typos
Free text leads to a lot of typos as in Ophiocordycpes sinesis vs [Ophiocordyceps sinensis](https://www.ncbi.nlm.nih.gov/Taxonomy/Browser/wwwtax.cgi?mode=Info&id=72228&lvl=3&lin=f&keep=1&srchmode=1&unlock)

### Values That don't Correspond to the Field

Some fields were incorrectly used to provide values that belong to other fields. For instance, "FT NMR" as an instrument name, or sometimes the term is too general for the field as saying "various" for "organism".

### Units
While ideally units should be ontology terms, they were frequently missing or provided as free text, with different expressions of the same term, and even when it was ontology driven ([MetaboLights](https://www.ebi.ac.uk/metabolights/)), several ontology terms were used to express the same unit. 

### Too Much Data in One Field
This happens usually when names get linked to other values (solvent + concentration), or with units. This leads to complicated and unstructured values that could have been distributed on several fields as ontology terms or numbers. 

## Overview about the Issues Encountered with each Data Type:

### Organism
* Data not provided for biological samples ([MetaboLights](https://www.ebi.ac.uk/metabolights/), [Metabolomics Workbench](https://www.metabolomicsworkbench.org/))
* Repository doesn’t support organism details ([CENAPT](https://dataverse.harvard.edu/dataverse/cenapt)), so one needs to refer to the corresponding publication.
* Non-standardized writing: 

        Mus musculus vs Mus Musculus.

        Goat vs Capra hircus.

        NCBITAXON:Homo sapiens
* Use of synonyms: Some organisms have more than one valid name. However, one would be preferred to the other, especially that the genus name changes as well.
    [Phorbas plumosus](https://www.ncbi.nlm.nih.gov/Taxonomy/Browser/wwwtax.cgi?mode=Info&id=1198107) vs [Stylostichon plumosum](https://www.marinespecies.org/aphia.php?p=taxdetails&id=150212)
* Typos: Ophiocordycpes sinesis vs [Ophiocordyceps sinensis](https://www.ncbi.nlm.nih.gov/Taxonomy/Browser/wwwtax.cgi?mode=Info&id=72228&lvl=3&lin=f&keep=1&srchmode=1&unlock)
* Values that don't correspond to the field: Such as "Various", "Multi-species non-defined biofilm consortium". And even that the meaning is clear to a human, the ontology term to define an organism will not fit to those values.
* Multiple species in one study: There is no problem in having multiple species in one study as long as the linking between the species and each sample is clear and machine-readable, which wasn't always the case. For instance, the organism is "Alexandrium catenella; Alexandrium tamarense
" and the samples are "Acatenella 11, Atamarense 10", which is human-readable but not machine-readable.
* Values that are not organisms: This is different from "Various" where the word refers to various organism. Here the values are completely not referring to organisms, such as: "Extract", [Culture Media](https://bioportal.bioontology.org/ontologies/MESH?p=classes&conceptid=D003470), and [NMR buffer](https://www.ontobee.org/ontology/NCBITaxon?iri=http://purl.obolibrary.org/obo/NCBITaxon_9606) (The link is provided as in the study).   
* Difficulties in expressing infections: When one species is infected by another one, it would be more convenient to have dedicated fields for each to clarify the relationship between them. However, they were provided in one field with special delimiters (NCBITAXON:Homo sapiens/NCBITAXON:Staphylococcus aureus).
* Organism rank is not clear: While the word "Organism" offers the flexibility to choose from a wide range of classifications (strain, variant, subspecies, species, genus), it affects the homogeneity of the repository data where sometimes the variant is provided as a distinct field, in addition to the genus being a too broad spectrum to be used. 
 
        Sus scrofa  vs Sus scrofa domesticus (species vs subspecies)

        Paraburkholderia, Porites, Acropora (Genus) 

        Ligilactobacillus murinus ASF361 (strain)

        C57BL/6J Mouse (variant)

### Organism Part
* Data not provided for biological samples ([MetaboLights](https://www.ebi.ac.uk/metabolights/), [Metabolomics Workbench](https://www.metabolomicsworkbench.org/))
* Repository doesn’t support organism details ([CENAPT](https://dataverse.harvard.edu/dataverse/cenapt)), so one needs to refer to the corresponding publication.
* Non-standardized writing: “liver and blood”.
* Values that are not organism parts: Such as "Synthetic Mixture" and "methyl tert-butyl ether".
* Difficulties in expressing infections: Here is an example taken from [MetaboLights](https://www.ebi.ac.uk/metabolights/):

        NCBITAXON:Homo sapiens/NCBITAXON:Staphylococcus aureus
        A-549 cell/EFO:whole organism
        Src: BTO
        Url: “”

The first line refers to the organisms, but when it comes to the second one, which refers to the organism part, we can see how once the ontology source is used, and once it is not. And then we have an ontology source in the third line where it is not clear to what exactly it is linked.

### Instruments Names

* Repository doesn’t support instrument name details ([CENAPT](https://dataverse.harvard.edu/dataverse/cenapt)), so one needs to refer to the corresponding publication.
* Non-standardized writing: Although the instruments names were generally provided, no repository used ontology terms. This lead to an obvious variation in the used names as values found in one repository never appeared in the others because of different writings. This problem not only severly affects the machine readability, but it is even not clear to a human whether two terms refer to the same instrument or not as one can see in the following example:
        
        Bruker

        Bruker 700MHz

        Bruker Avance

        Bruker Avance III

        Bruker Avance III 700 MHz

        AVANCE Ⅲ (one symbol)

        Avance III 700 MHz NMR Spectrometer

* Typos: Bruker Avance lll (reported as lowercase L instead of roman letter I). This shows the necessity for the use of ontologies, and also for the consideration of typeface in repositories.
* Values that don't correspond to the field: "FT NMR" as an instrument name.

### Dimensionality
* Data not provided in a dedicated field: It was rare not to find the dimensionality details, but in most cases it was only human-readable, provided as a free text where the information should be extracted. Usually, it was available in the pulse sequence name ([MetaboLights](https://www.ebi.ac.uk/metabolights/)) or the NMR experiment type ([Metabolomics Workbench](https://www.metabolomicsworkbench.org/)), which makes the extraction easier if linked to ontology sources. However, in ([CENAPT](https://dataverse.harvard.edu/dataverse/cenapt)), this information can only be found as free text in description. alternatively, the dimensionality was possible to be deducted from the NMR experiment type such as HSQC.
* Non-standardized writing: 1D 1H vs 1D-1H
### Pulse Frequency
* Data not provided or difficult to extract: This was a very common issue, for instance, in [MetaboLights](https://www.ebi.ac.uk/metabolights/), it is common to find the higest possible pulse frequency in the instrument name, e.g. "Varian Unity Inova 400 MHz spectrometer", while it is difficult to find the used one. In [CENAPT](https://dataverse.harvard.edu/dataverse/cenapt) it was possible to extract the information from the study description, but still it was provided as free text. In [Metabolomics Workbench](https://www.metabolomicsworkbench.org/), despite the existing of dedicated field, the values were provided as free text where non-standardized writing issues hit.
* Non-standardized writing: Ideally, this value should be provided as a number with a unit coming from an ontology, however, the values found can vary as follows:

        600 MHz

        600MHz 

        600 

        500 and 600

### Nucleus
* Data not provided or difficult to extract: Similar to pulse frequency, the data was either missing or difficult to extract with no dedicated fields. In [MetaboLights](https://www.ebi.ac.uk/metabolights/), it was frequently missing or provided as free text. In [Metabolomics Workbench](https://www.metabolomicsworkbench.org/), it can be extracted from the NMR experiment type, but with issues regarding the non-standardized writing. In [CENAPT](https://dataverse.harvard.edu/dataverse/cenapt), it was possible to extract the information from the study description.

* Non-standardized writing:

        1D 1H

        1D-1H

        1D 1H with presaturation (presat)

### Temperature
* Data not provided: In many studies, in both [MetaboLights](https://www.ebi.ac.uk/metabolights/) and [Metabolomics Workbench](https://www.metabolomicsworkbench.org/), this information was missing. The temperature was generally missing in [CENAPT](https://dataverse.harvard.edu/dataverse/cenapt) unless the submitter shares this information in the description.

* Non-standardized writing: Free text lead to huge variations in the provided values as follows:
        298 K 

        25 degrees celsius 

        23d 

        295.9 

        25 o C 

        281 ± 0.5 K

which makes it difficult for machine reading.
* Units: The unit wasn't always provided, or provided as free text in [Metabolomics Workbench](https://www.metabolomicsworkbench.org/). Although the units are ontology driven in [MetaboLights](https://www.ebi.ac.uk/metabolights/), the used terms varied for the same value, e.g., degree Celsius, celcius, degree celsius.

* Multiple values in one field or a range of values: Some studies provided multiple values separated with delimiters, while others provided the temperature with confidence limits, e.g., 281 ± 0.5.

* Values that don't correspond to the field: Such as providing the tube details in the temperature field, with valuse such as "5mm", "5mm * 8 in" (another issue with units here).

### Solvent
* Data not provided or provided as free text.
* Too much data in one field: Some studies provided the solvent name alone, while others added the concentration to that field. Others mentioned the pH there as well.
* Non-standardized writing: Due to the multiple values in one field and the lack of ontology use, the provided values appeared in various shapes, e.g.:
        phosphate buffered D2O

        0.01 M phosphate buffered D2O/H2O

        0.9% NaCl in D2O

        1.5 M Potassium dihydrogen phosphate

        630 µl sample + intaernal standard solution

As one can see, the ways the concentration was mentioned vary too (percentage, molarity..).
* Typos: It was very common in [Metabolomics Workbench](https://www.metabolomicsworkbench.org/) to find the valuse "D20" instead of "D2O".
