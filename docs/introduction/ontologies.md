---
sidebar_position: 2
id: ontologies
title: Ontologies
---

# Ontologies

In nmrXiv, we aim to provide the data, present it unambiguously, and make it [FAIRer](https://www.go-fair.org/fair-principles) (Findable, Accessible, Interoperable, Reusable). Our focus is not to make the data just human-readable but machine-readable so researchers can leverage advanced machine learning and other language processing techniques to re-analyse the data. This can be facilitated by using ontologies.

However, it is challenging to make ontologies exhaustive as new terms arise, especially in emerging domains such as metabolomics, with NMR being the central analytical technique.

Being an NMR data repository, we find ourselves suited for gathering the relevant missing terms via user submission and contributing those missing terms to ontologies we find relevant to nuclear magnetic resonance (NMR) data or repositories data in general (in other words, to domain-specific and domain-independent ontologies). We aim to achieve this through collaboration with the NFDI4Chem Terminology service (Task Area 6).

## Domain-independent Ontologies:
The following ontologies provide identifiers, references, formats, and possible operations to define the experiment.

* [Bioinformatics operations, data types, formats, identifiers and topics - EDAM](https://terminology.nfdi4chem.de/ts/ontologies/edam)
* [REPRODUCE-ME Ontology - REPR](https://www.ebi.ac.uk/ols/ontologies/reproduceme)
* [Medical Subject Headings - MeSH](https://meshb-prev.nlm.nih.gov/treeView)
* [NCI Thesaurus OBO Edition - NCIt](https://www.ebi.ac.uk/ols/ontologies/ncit)

## Domain specific Ontologies:

* [nuclear magnetic resonance CV - NMR](https://terminology.nfdi4chem.de/ts/ontologies/nmrcv):
We believe nmrCV is highly relevant for nmrXiv as it covers many aspects of the NMR assay and the resulting spectral data, including the files formats, dimensionality, instruments, used materials, and later data processing.

* [Chemical Methods Ontology - CHMO](https://terminology.nfdi4chem.de/ts/ontologies/chmo):
 Methods used to collect data in chemical experiments, including NMR spectroscopy, are covered under this ontology.
 
* [NCBI organismal classification - NCBITAXON](https://www.ebi.ac.uk/ols/ontologies/ncbitaxon): 
 Widely used curated classification for organisms.
 
* [The BRENDA Tissue Ontology - BTO](https://www.ebi.ac.uk/ols/ontologies/bto):
 It covers organism parts and variants. Examples include tissues, cell lines, cell types and cell cultures.

* [Experimental Factor Ontology - EFO](https://www.ebi.ac.uk/ols/ontologies/efo):
 For many experimental variables, which can be used, e.g., to describe the tissue and the organism part.
 
* [NCI Thesaurus OBO Edition - NCIt](https://www.ebi.ac.uk/ols/ontologies/ncit): 
It includes broad coverage of the cancer domain, including cancer-related diseases, findings and abnormalities. 

* [Medical Subject Headings - MeSH](https://meshb-prev.nlm.nih.gov/treeView):
 Medical Subject Headings is a comprehensive controlled vocabulary for indexing journal articles and books in the life sciences.

* [Ontology for Biomedical Investigations - OBI](https://terminology.nfdi4chem.de/ts/ontologies/obi):
Ontology for Biomedical Investigations (OBI) serves as a resource for annotating biomedical investigations, including the study design, protocols and instrumentation used, the data generated and the types of analysis performed on the data. This ontology arose from the Functional Genomics Investigation Ontology (FuGO) and contains both terms common to all biomedical investigations, including functional genomics investigations and those that are more domain-specific.

* [CHEBI Integrated Role Ontology - CHIRO](https://terminology.nfdi4chem.de/ts/ontologies/chiro):
CHEBI provides a distinct role hierarchy for chemical entities.
* [chemical information ontology - CHEMINF](https://terminology.nfdi4chem.de/ts/ontologies/cheminf):
CHEMINF provides terms for cheminformatics software and algorithms, such as chemical identifiers and others.

* [Units of measurement ontology - UO](https://terminology.nfdi4chem.de/ts/ontologies/uo):
For metrical units.




<!-- Let's translate `docs/intro.md` to French.

## Configure i18n

Modify `docusaurus.config.js` to add support for the `fr` locale:

```js title="docusaurus.config.js"
module.exports = {
  i18n: {
    defaultLocale: 'en',
    locales: ['en', 'fr'],
  },
};
```

## Translate a doc

Copy the `docs/intro.md` file to the `i18n/fr` folder:

```bash
mkdir -p i18n/fr/docusaurus-plugin-content-docs/current/

cp docs/intro.md i18n/fr/docusaurus-plugin-content-docs/current/intro.md
```

Translate `i18n/fr/docusaurus-plugin-content-docs/current/intro.md` in French.

## Start your localized site

Start your site on the French locale:

```bash
npm run start -- --locale fr
```

Your localized site is accessible at `http://localhost:3000/fr/` and the `Getting Started` page is translated.

:::caution

In development, you can only use one locale at a same time.

:::

## Add a Locale Dropdown

To navigate seamlessly across languages, add a locale dropdown.

Modify the `docusaurus.config.js` file:

```js title="docusaurus.config.js"
module.exports = {
  themeConfig: {
    navbar: {
      items: [
        // highlight-start
        {
          type: 'localeDropdown',
        },
        // highlight-end
      ],
    },
  },
};
```

The locale dropdown now appears in your navbar:

![Locale Dropdown](/img/tutorial/localeDropdown.png)

## Build your localized site

Build your site for a specific locale:

```bash
npm run build -- --locale fr
```

Or build your site to include all the locales at once:

```bash
npm run build
``` -->
