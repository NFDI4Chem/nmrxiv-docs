---
sidebar_position: 3
id: data-schema
title: Data Schema
---

# Data Schemas

**Metadata:**
nmrXiv will use the ISA (Investigation, Study, Assay) approach to capture the experimental meta data in a structured format, possibly in combnination with IUPAC-FAIRSpec specifications to define spectroscopic metadata. To enable NMR data to be citable, searchable and accessible we intend to implement Datacite and OpenAIRE schemas to store the domin independent metadata.

## ISA (Sample, Assay, Ontology)

[ISA is a metadata framework](https://isa-tools.org/) to manage a diverse set of life science, environmental and biomedical experiments that employ one or a combination of technologies.

Built around the 'Investigation' (the project context), Study' (a unit of research), and 'Assay' (analytical measurement) general-purpose JSON format, we (nmrXiv) would like to comply with ISA Schema specifications to capture NMR metadata (Assay, Samples and Ontologies). This helps us provide a detailed description of the experimental metadata, both synthetic and biological (i.e. sample characteristics, technology and measurement types, sample-to-data relationships) so that the resulting data and discoveries are reproducible and reusable.

ISA enables interoperability with other platforms and services while keeping the information in a simplistic and open text format that is FAIR compliant. The nmrXiv back-end will be designed to support ISA for newly entered data. 

While ISA captures rich description of the experimental metadata, it comes with few limitations from the data management (repository) perspective. Configurable templates on the go and redundant data being some of them. We intend to extend the existing ISA models with our own domain specific nmrXiv requirements to ensure total flexibility to the end user to define their own templates while still being complaint with ISA Specifications and the minimum information standards. 

![ISA Specifications](/img/nmrXiv-isa.png) 

### ISA converters

To achieve the desired nmrXiv data models (extended ISA models) we intend to develop data converters as an independent micro services (python based applications) to convert data from and to ISA. This enables nmrXiv and other repositories to untilize these as a plugins to capture and export data. We would also like to leverage the existing tool set in the domain such as nmrml2isa converters to capture rich meta data from the standard nmrML files.

**nmrml2isa** is a Python3 program that can be used to generate an ISA-Tab structured investigation out of nmrML files, providing the backbone of a study that can then be edited further to provide additional meta data that cannot be automatically extracted. 

### ISA Sample schema details:
In a Study object, ISA record the provenance of biological [samples](https://github.com/ISA-tools/isa-api/blob/master/isatools/resources/schemas/isa_model_version_1_0_schemas/core/sample_schema.json), from [source](https://github.com/ISA-tools/isa-api/blob/master/isatools/resources/schemas/isa_model_version_1_0_schemas/core/source_schema.json) material through a collection process to sample material, represented with directed acyclic graphs (direct graphs with no loops/cycles). The pattern of nodes is usually formed of a source material node, followed by a sample collection process node, followed by a sample material node.

(source material)->(sample collection)->(sample material)

These study graphs MAY split and pool depending on how the samples are collected.

In a splitting example, multiple samples might be derived from the same source:

(source material 1)->(sample collection)->(sample material 1)

(source material 1)->(sample collection)->(sample material 2)

In a pooling example, multiple sources may be used to create a single sample:

(source material 1)->(sample collection)->(sample material 1)

(source material 2)->(sample collection)->(sample material 1)

However, sample collection applies only to biological samples were the source comes from a certain organism, while with synthetic samples we have a certain compound that gets dissolved in a solvent to create the sample. We are trying to capture this concept in ISA adopting mock-ups derived from actual samples/molecules found in non-biological repositories such as [Chemotion](https://www.chemotion-repository.net/welcome) and [NMRShiftDB](https://nmrshiftdb.nmr.uni-koeln.de/), and compare them with the biological sample coming from the biological repository [MetaboLights](https://www.ebi.ac.uk/metabolights/). Please find the mentioned mock-ups [here](https://github.com/NFDI4Chem/schema/tree/main/ISA). Those mock-ups are still under development, especially due to the absence of the relevant ISA configurations in addition to the continuous update upon discussion.

Our approach to represent a synthetic sample is to take the compound found in Chemotion or nmrshiftDB as a source, and apply an NMR sample protocol where a solvent is added to generate the sample and where the solvent becomes one of the sample characteristics. This NMR sample undergoes a NMR spectroscopy protocol with parameters such as the instrument, magnetic field strength, pulse sequence name, temperature and others. This protocol will result in a data file which in return undergoes an NMR assay protocol with some NMR processing software.

However, we are still facing issues regarding:
* Missing ontology terms to represent the characteristics and factors categories.
* The limited use of ontologies in both of Chemotion and nmrshiftDB, so we picked terms representing the fields and values in the mock-ups despite the frequent use of free text in the actual models.
* Representing characteristics and factors categories when the category is a combination of two or more ontology terms. e.g., "number of rings".

We aim to develop sample configurations (synthetic and biological) derived or compliant with ISA specifications and use them to capture rich metadata (both human and machine-readable) in nmrXiv.

### ISA Ontology Schema
We are going to use [ISA ontology reference schema](https://github.com/ISA-tools/isa-api/blob/master/isatools/resources/schemas/isa_model_version_1_0_schemas/core/ontology_annotation_schema.json) to capture ontology terms where those "annotation_values" are linked to their "term_source" which is the ontology the term comes from, and the "term_accession" which is the link to that term.

## IUPAC - FAIRSpec (Spectra)
We are considering contributing to and adopting the definition of standardized metadata being developed within IUPAC [Project](https://github.com/IUPAC/IUPAC-FAIRSpec) "Development of a Standard for FAIR Data Management for Spectroscopic Data" which covers spectroscopic data including NMR spectroscopy. But this project is still preliminary and under development. 

## DataCite (Data citation and discovery)

The [DataCite Metadata Schema](https://schema.datacite.org/) is a list of core metadata properties chosen for an accurate and consistent identification of a resource for citation and retrieval purposes, along with recommended use instructions. It primarily supports citation of data rather than the discipline-specific metadata. 

Complying with DataCite schema enables the creation of new Digital Object Identifiers (DOIs) and their assignment to content on nmrXiv which is essential for identifiers' persistence. Only mandatory property values are needed to obtain the DOI, but still there is the ability of rich citing-metadata description with recommended and optional properties. We are considering treating some recommended fields as mandatory in nmrXiv as we expect them to become mandatory in DataCite in the near future, and to make sure all essential metadata is captured. Mandatory fields include the DOI, Creator, Title, Publisher, PublicationYear, and ResourceType.

In addition, using DataCite schema will enable easy export of the metadata in xml format.

## OpenAIRE Guidelines (Data citation and discovery)

In addition to DataCite, we are interested in complying with [OpenAIRE Guidelines](https://guidelines.openaire.eu/en/latest/) for Data Archive Managers to ensure compatiblity with the OpenAIRE infrastructure which facilitates interoperablity with other repositories already adhering to those guidelines which enhance data exposure and visibility.

OpenAIRE has already adopted the DataCite Metadata Schema but with some minor adjustments, such as accepting other persistent identifier schemes rather than the DOI, and some changes in the obligations of properties.
