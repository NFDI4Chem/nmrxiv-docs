---
sidebar_position: 2
id: ontologies
title: Ontologies
---

# Ontologies

In nmrXiv, we aim to provide the data, present it unambiguously, and make it [FAIRer](https://www.go-fair.org/fair-principles) (Findable, Accessible, Interoperable, Reusable). This can be facilitated by using ontologies. However, it is challenging to make ontologies exhaustive as new terms arise, especially in an emerging domain such as metabolomics (analytical chemistry ~ NMR being one of the central analytical techniques).

Being an NMR data repository, we find ourselves suited for gathering the relevant missing terms via user submission and contributing those missing terms to ontologies we find relevant to nuclear magnetic resonance (NMR) data or repositories data in general (in other words, to domain-specific and domain-independent ontologies). We aim to achieve this through collaboration with NFDI4Chem - Task Area 6 (TA6).

## Domain-independent Ontologies:
Those ontologies might or might not be domain-independent, but they were mentioned here as we are going to use them for terms related to making the data findable and citable, regardless of the domain of the data. They provide terms about data information such as identifiers, references, formats, and possible operations. 

* [Bioinformatics operations, data types, formats, identifiers and topics - EDAM](https://terminology.nfdi4chem.de/ts/ontologies/edam):
* [REPRODUCE-ME Ontology - REPR](https://www.ebi.ac.uk/ols/ontologies/reproduceme)
* [Medical Subject Headings - MeSH](https://meshb-prev.nlm.nih.gov/treeView)
* [NCI Thesaurus OBO Edition - NCIt](https://www.ebi.ac.uk/ols/ontologies/ncit)

## Domain specific Ontologies:

* [nuclear magnetic resonance CV - NMR](https://terminology.nfdi4chem.de/ts/ontologies/nmrcv):
This ontology is of a very high relevance for nmrXiv as it covers many aspects of the NMR assay and the resulting spectrum, including the files formats, the dimensionality, the instruments, the used materials, and the later processing of the data.
* [Chemical Methods Ontology - CHMO](https://terminology.nfdi4chem.de/ts/ontologies/chmo):
 For methods used to collect data in chemical experiments including NMR spectroscopy.

* [NCBI organismal classification - NCBITAXON](https://www.ebi.ac.uk/ols/ontologies/ncbitaxon): 
A very widely used curated classification for organisms 
* [The BRENDA Tissue Ontology - BTO](https://www.ebi.ac.uk/ols/ontologies/bto):
For organism parts and variants data such as tissues, cell lines, cell types and cell cultures.
* [Experimental Factor Ontology - EFO](https://www.ebi.ac.uk/ols/ontologies/efo):
 For many experimental variables, which can be used, e.g., to describe the tissue and the organism part.
* [NCI Thesaurus OBO Edition - NCIt](https://www.ebi.ac.uk/ols/ontologies/ncit): 
For cells, and other materials and attributes.
* [Medical Subject Headings - MeSH](https://meshb-prev.nlm.nih.gov/treeView):
For organism parts, chemicals, Equipments.
* [Ontology for Biomedical Investigations - OBI](https://terminology.nfdi4chem.de/ts/ontologies/obi):
For scientific investigations, assays and devices.
* [CHEBI Integrated Role Ontology - CHIRO](https://terminology.nfdi4chem.de/ts/ontologies/chiro):
For chemical entities and their roles.
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
