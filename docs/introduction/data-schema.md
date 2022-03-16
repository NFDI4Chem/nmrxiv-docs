---
sidebar_position: 3
id: data-schema
title: Data Schema
---

# Data Schemas

**Metadata:**
nmrXiv will use the ISA (Investigation, Study, Assay) approach to capture the experimental meta data in a structured format, possibly in combnination with IUPAC-FAIRSpec specifications to define spectroscopic metadata. To enable NMR data to be citable, searchable and accessible we intend to implement Datacite and OpenAIRE schemas to store the domin independent metadata.

### ISA

ISA describes Investigations (project context) as one collection of Studies (unit of research) supported by one or many Assays (e.g., chromatography, NMR, etc.). ISA enables interoperability with other platforms and services while keeping the information in a simplistic and open text format that is FAIR compliant. The nmrXiv back-end will be designed to support ISA for newly entered data.

While ISA captures rich description of the experimental metadat, it comes with few limitations from the data management (repository) perspective. Configurable templates on the go and redundant data being some of them. We intend to extend the existing ISA models with our own domain specific nmrXiv requirements to ensure total flexibility to the end user to define their own templates while still being complaint with ISA Specifications and the minimum information standards. 

<img src={require('@site/static/img/nmrXiv.png').default} width={"30px"} height={"30px"} alt={"Docusaurus Logo"} />

#### ISA converters

To achieve the desired nmrXiv data models (extended ISA models) we intend to develop data converters as an independent micro services (python based applications) to convert data from and to ISA. This enables nmrXiv and other repositories to untilize these as a plugins to capture and export data. We would also like to leverage the existing tool set in the domain such as nmrml2isa converters to capture rich meta data from the standard nmrML files.

**nmrml2isa** is a Python3 program that can be used to generate an ISA-Tab structured investigation out of nmrML files, providing the backbone of a study that can then be edited further to provide additional meta data that cannot be automatically extracted. 

### Data Cite

The DataCite Metadata Schema is a list of core metadata properties chosen for an accurate and consistent identification of a resource for citation and retrieval purposes, along with recommended use instructions.
