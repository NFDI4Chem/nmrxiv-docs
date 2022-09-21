---
sidebar_position: 10
title: Organism
---

# Organism
[Notebook link](https://github.com/NFDI4Chem/repo-scripts/blob/main/notebooks/organism.ipynb)


## Support by Ontologies
[NCBI Taxonomy](https://www.ncbi.nlm.nih.gov/taxonomy) provides an excelent source for organisms. 

## Data Sanitisation and Missing Values
Organisms are found only in metabolomics related repositories, a.k.a., MTBLS and MW. 

<table>
  <tr>
    <th></th>
    <th>Field Type</th>
    <th>Field Name</th>
    <th>Values Readability</th>
    <th>Unit</th>
    <th>Missing</th>
  </tr>
  <tr>
    <td><b>MTBLS</b></td>
    <td>dedicated</td>
    <td>Organism</td>
    <td>ontology-driven</td>
    <td>none</td>
    <td>The field is not provided; or the value is provided as N/A or other similar expressions; or the study "assays" value is "null".</td>
  </tr>
  <tr>
    <td><b>MW</b></td>
    <td>dedicated</td>
    <td>Subject Species</td>
    <td>free text</td>
    <td>none</td>
    <td>The field is not provided; or the value is provided as N/A or other similar expressions; or decoding the JSON file containing the study details has failed due to syntax error there; or the organism was not found in NCBI taxonomy.</td>
  </tr>
</table>

