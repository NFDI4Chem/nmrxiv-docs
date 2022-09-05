---
sidebar_position: 2
id: file-format
title: File Formats
---

# NMR File Formats

nmrXiv will promote **Open Data** and **Open Standards** to maximize the long-term sustainability of the resource, and the FAIRness of the archived data. To reduce user burden and foster immediate utility, nmrXiv will accept raw NMR data in all original instrument formats. 

Upon uploading files, the platform will convert all those files to available **Open** data formats, such as JCAMP-DX, NMReData, and nmrML. The type of information stored in existing formats is heterogeneous, and no single format is currently capable of fully capturing all information from NMR experiments and data processing.

As native instrument formats represent the most available data, they will be preserved and made available to users. This approach ensures traceability and secure long-term access to every detail of measured data as new formats appear or existing ones evolve. At the same time, the availability and interoperability of several formats will facilitate the re-use of data with external tools. 

## Overview on Available NMR File Formats
File formats that support NMR can be roughly devided into four categories:

### NMR Open Formats
Currently, the most widely used **Open** NMR data exchange format is JCAMP-DX, but due to the broad scope and complexity of this format, along with mentainance issues, alternative approaches with peer-maintained ontologies would be beneficial. In nmrXiv, within NFDI4Chem, we will be working on extending the available **Open** NMR formats NMReData and nmrML as candidate alternatives.

Here we provide a list of some available **Open** formats (licensed with open licenses):
<table>
  <tr>
    <th>Short Name</th>
    <th>Maintainer</th>
    <th>File Extension</th>
    <th>Parent Format</th>
    <th>Specification</th>
  </tr>
  <tr>
    <td><a href="https://nmrml.org/">nmrML</a></td>
    <td>COSMOS</td>
    <td>.nmrML</td>
    <td>XML</td>
    <td>Open</td>
  </tr>
  <tr>
    <td><a href="https://nmredata.org/">NMReDATA</a></td>
    <td>NMReDATA Initiative</td>
    <td>.sdf</td>
    <td>SDF</td>
    <td>Open</td>
  </tr>
  <tr>
    <td><a href="http://www.jcamp-dx.org/">JCAMP-DX</a></td>
    <td>IUPAC</td>
    <td>.dx, .jdx, .jcm</td>
    <td>ASCII, Text</td>
    <td>Open</td>
  </tr>
</table> 

#### nmrML
It is an open XML-based exchange and storage format for NMR spectral data. It can capture raw NMR data, spectral data acquisition parameters, and- where available- spectral metadata, such as chemical structures associated with spectral assignments. The nmrML format is compatible with pure-compound NMR data for reference spectral libraries as well as NMR data from complex biomixtures. There already exists nmrML converters for Bruker, JEOL and Agilent/Varian vendor formats. In addition, easy-to-use Web-based spectral viewing, processing, and spectral assignment tools that read and write nmrML have been developed. Software libraries and Web services for data validation are available for tool developers and end-users. The nmrML format has already been adopted for capturing and disseminating NMR data for small molecules by several open source data processing tools and metabolomics reference spectral libraries, e.g., serving as storage format for the MetaboLights data repository. The nmrML open access data standard has been endorsed by the Metabolomics Standards Initiative (MSI). For more details, please check the article [nmrML: A Community Supported Open Data Standard for the Description, Storage, and Exchange of NMR Data](https://pubs.acs.org/doi/10.1021/acs.analchem.7b02795)

#### NMReDATA
NMReData is the only standard file format available for the NMR data relevant to structure characterization of small molecules as it associates the NMR parameters extracted from 1D and 2D spectra of organic compounds to the proposed chemical structure. These NMR parameters include chemical shift values, signal integrals, intensities, multiplicities, scalar coupling constants, lists of 2D correlations, relaxation times, and diffusion rates. The file format is an extension of the existing Structure Data Format, which is compatible with the commonly used MOL format. The association of an NMReDATA file with the raw and spectral data from which it originates constitutes an NMR record. For more details, please check the article [NMReDATA, a standard to report the NMR assignment and parameters of organic compounds](https://www.ncbi.nlm.nih.gov/pmc/articles/PMC6226248/).

#### JCAMP-DX
It is the most used open data exchange format for NMR data, but due to the broad scope and complexity of this format, many different vendor-dependent variants exist. Coordinated updating for all variants, in order to reflect the state of the art in NMR methodology, is rarely seen in this 30 year old format. This variability can lead to incompatibilities between different software packages, and as a result no content-based (semantic) validation of JCAMP-DX is available. However, JCAMP-DX is likely to remain in use for NMR data capture for many years, and therefore it will supported in nmrXiv.

### NMR Vendor Formats
As instrument vendors typically provide the data processing software and produce evolving data formats together with the instrument hardware, developers of third party NMR analysis software often need to devote considerable effort into reading and writing these vendor-specific formats. Data in proprietary formats can age quickly, and NMR data stored in such formats can become obsolete, making valuable results inaccessible and irreproducible in the long term. However, we will still support this data along with the **Open** formats to make sure that the original data is maintained and traceable. (From [nmrML: A Community Supported Open Data Standard for the Description, Storage, and Exchange of NMR Data](https://pubs.acs.org/doi/10.1021/acs.analchem.7b02795)).

<table>
  <tr>
    <th>Short Name</th>
    <th>Maintainer</th>
    <th>File Extension</th>
  </tr>
  <tr>
    <td>Bruker</td>
    <td><a href="https://www.bruker.com/en.html/">Bruker</a></td>
    <td>Folder</td>
  </tr>
  <tr>
    <td>JEOL</td>
    <td><a href="https://www.jeol.co.jp/en/">JEOL</a></td>
    <td>.jdf</td>
  </tr>
  <tr>
    <td>Agilent (Varian)</td>
    <td><a href="https://www.agilent.com/supplier/varian_faq.shtml">Agilent</a></td>
    <td>Folder</td>
  </tr>
  <tr>
    <td>Magritek</td>
    <td><a href="https://magritek.com/">Magritek</a></td>
    <td>.1d, .2d</td>
  </tr>
</table>

### Software-Specifific NMR Formats
Software-Specifific NMR Formats impose similar issues as with the vendor formats as formats generated by certain NMR data processing tools need certain software to read them. Here are the most used formats we are interested in supporting: 

<table>
  <tr>
    <th>Short Name</th>
    <th>Maintainer</th>
    <th>File Extension</th>
  </tr>
  <tr>
    <td>ACD/Labs</td>
    <td><a href="https://www.acdlabs.com/">ACD/Labs</a></td>
    <td>.spectrus</td>
  </tr>
  <tr>
    <td>Mnova</td>
    <td><a href="https://mestrelab.com/">Mestrelab</a></td>
    <td>.mnova</td>
  </tr>
</table> 

## Overview on Available Open NMR File Formats Converters

### NMRium
NMRium can convert open and vendor file formats to other formats. As an input, it can handle:
- Jcamp DX (.dx, .jdx, .jcamp)
- zipped folder in Bruker format (raw data or processed)
- Jeol (.jdf)
- NMRium file (.nmrium)
- NMReData (coming soon)

And as output, it gives back:
-  NMRium file (.nmrium)
- NMReData
- images

### nmrML Converters
Maintainers of nmrML format provide converters from vendor formats (Bruker, JEOL and Agilent/Varian) to nmrML along with other converters covered in the following table (from [nmrML: A Community Supported Open Data Standard for the Description, Storage, and Exchange of NMR Data](https://pubs.acs.org/doi/10.1021/acs.analchem.7b02795)).

<table>
  <tr>
    <th>Converter Name</th>
    <th>Key Functions</th>
    <th>Developer</th>
  </tr>
  <tr>
    <td><a href="https://github.com/nmrML/nmrML/tree/master/tools/Parser_and_Converters/Java">nmrML converter (Java)</a></td>
    <td>Converts vendor to nmrML format (recommended)</td>
    <td>Institut National de la Recherche Agronomique (INRA), France</td>
  </tr>
  <tr>
    <td><a href="https://github.com/nmrML/nmrML/tree/master/tools/Parser_and_Converters/python/pynmrml">nmrML converter (Python)</a></td>
    <td>Converts vendor to nmrML format</td>
    <td>The Metabolomics Innovation Center (TMIC), Canada</td>
  </tr>
  <tr>
    <td><a href="https://github.com/ISA-tools/nmrml2isa">nmrML to ISA converter</a></td>
    <td>Generates prepopulated ISA files from nmrML files</td>
    <td>EMBL-EBI, United Kingdom</td>
  </tr>
  <tr>
    <td><a href="http://bmrbdep.pdbj.org/en/bmsxnmrml.html">BMSxNmrML</a></td>
    <td>Converts BMRB metabolomics entries to nmrML format</td>
    <td>Institute for Protein Research (IPR), Japan</td>
  </tr>
</table> 

### NMReData Converters
Conversion to NMReData is already being worked on by NMRium team. Furthermore, non-open software such as Mnova also provide the possibility to export their data as NMReData.


## Formats Support in nmrXiv
Initially we will support the most common formats as mentioned in the table below, but this table will keep getting updated. Here we show what input in the files we want to be able to read, and what output we would like to provide to the users using our output files generated with NMRium. We provide more details on:
- The availability of the the raw data (the free induction decays (FIDs), which represent the actual (raw) spectroscopic data from the excited nuclear spins in the NMR experiment). Here is an example from an nmrML on how this data looks like:

  ```<fidData byteFormat="Complex128" encodedLength="324160" compressed="true">eJwMl4dfzl8Ux7U3lYZKy0qiomQLPd9zHlmhslMJ2aIoGe29hyhKKURIaWhoPd9zn6zEz46skFKKZMXPX3DPva/PPZ/3u9xlqVhxpdX8Udd0Gp02JIodL2UIN34vE/sdO4la8ZHCQ7lCseEBM/E981xh2fNnbNDxOyCwLRF+XBYhvrlcna1elI65.../jyvhLLF5zln64UoklPU75xwQ3IPL4Dx/Nfkc91ZJlO3dz/ABn2jzA=</fidData>```

- The list of the peaks (the list of the chemical shifts and other possible attributes such as the type of the peak, as in doublets or multiplet). Here is an example from an NMReData on how this data looks like (Find more about NMReData [here](https://nmredata.org/wiki/NMReDATA_tag_format#Agregated_data_tags)): 
  - A, 48.301, 1 ;A corresponds to the carbon of CH2\
  - B, 20.322, 2 ;B corresponds to the carbon of CH3\

- The possibility to annotate the data with more details provided by the users, as one can see in the same example from the NMReData file here,:
  - A, 48.301, 1 ;A corresponds to the carbon of CH2\
  - B, 20.322, 2 ;B corresponds to the carbon of CH3\

  Where additionally to the peaks and the atoms labels, the user was able to further clarify the chemical groups.

- The availablilty of Metadata, e.g., locations of files. Another example from NMReData file: 

    ```Spectrum_Location=file:./nmr/11/1/pdata/1\```

    ```>  <NMREDATA_VERSION>1.1\```

    ```>  <NMREDATA_LEVEL>0\```

- The availablilty of acquisition parameters related to the NMR assay, which can be usually provided by the instrument:

```<acquisition>
  <acquisition1D>
      <acquisitionParameterSet numberOfScans="160" numberOfSteadyStateScans="0">
          <sampleContainer name="tube" cvRef="NMRCV" accession="NMR:400128"/>
          <sampleAcquisitionTemperature unitName="kelvin" unitCvRef="UO" value="299.15" unitAccession="UO:0000012"/>
          <spinningRate unitName="hertz" unitCvRef="UO" value="0" unitAccession="UO:0000106"/>
          <relaxationDelay unitName="second" unitCvRef="UO" value="22.2737024" unitAccession="UO:0000010"/>
          <pulseSequence/>
          <DirectDimensionParameterSet numberOfDataPoints="65536" decoupled="false">
              <acquisitionNucleus name="1H" cvRef="ChEBI" accession="CHEBI_29236"/>
              <effectiveExcitationField value="34482.7586207" unitName="megaHertz" unitCvRef="UO" unitAccession="UO:0000325"/>                  
              <sweepWidth value="12019.2307692" unitName="hertz" unitCvRef="UO" unitAccession="UO:0000106"/>
              <pulseWidth value="7.25" unitName="microsecond" unitCvRef="UO" unitAccession="UO:0000029"/>
              <irradiationFrequency unitName="hertz" unitCvRef="UO" value="599.8311617" unitAccession="UO:0000106"/>
              <decouplingNucleus name="1H" cvRef="ChEBI" accession="CHEBI_29236"/>
              <samplingStrategy accession="1000349" cvRef="NMRCV" name="uniform sampling"/>
          </DirectDimensionParameterSet>
      </acquisitionParameterSet>
      ....
  </acquisition1D>
</acquisition>
```
- The availabilty of the structure, where in some files, the mol data can be integrated with the the rest of the data, and in others, it can be provided as a separate mol file.

- Additionally to what traditional formats usually provide, NMReData associates the NMR parameters extracted from 1D and 2D spectra of organic compounds to the proposed chemical structure.

<table>
  <tr>
    <th>Data Format</th>
    <th>RAW Spectral</th>
    <th>Peaks</th>
    <th>Annotation</th>
    <th>Metadata</th>
    <th>Acq. parameters</th>
    <th>Spin parameters</th>
    <th>Structure</th>
  </tr>
  <tr>
    <td><a href="https://dataverse.harvard.edu/api/access/datafile/:persistentId?persistentId=doi:10.7910/DVN/KUEDTG/GHQVO0">Bruker</a></td>
    <td>in</td>
    <td>in</td>
    <td> </td>
    <td>in</td>
    <td>in</td>
    <td> </td>
    <td>in</td>
  </tr>
  <tr>
    <td><a href="https://dataverse.harvard.edu/api/access/datafile/:persistentId?persistentId=doi:10.7910/DVN/KUEDTG/FPJ8BX">JEOL</a></td>
    <td>in</td>
    <td>in</td>
    <td> </td>
    <td>in</td>
    <td>in</td>
    <td> </td>
    <td>in</td>
  </tr>
  <tr>
    <td><a href="">Varian/Agilent</a></td>
    <td>in</td>
    <td>in</td>
    <td> </td>
    <td>in</td>
    <td>in</td>
    <td> </td>
    <td>in</td>
  </tr>
  <tr>
    <td><a href="https://drive.google.com/drive/folders/1Y5I1zk8K3QmOCvUavDTch4eS7C1J3Cmh">Mnova</a></td>
    <td>in</td>
    <td>in</td>
    <td> </td>
    <td>in</td>
    <td>in</td>
    <td> </td>
    <td>in</td>
  </tr>
  <tr>
    <td><a href="https://github.com/NMReDATAInitiative/Examples-of-NMR-records">NMReData</a></td>
    <td> </td>
    <td>in/out</td>
    <td>in/out</td>
    <td>in/out</td>
    <td>in/out</td>
    <td>in/out (partially)</td>
    <td>in/out</td>
  </tr>
  <tr>
    <td><a href="https://www.ch.ic.ac.uk/omf/cml/doc/examples/nmr.cml">CML Spect</a></td>
    <td>in/out</td>
    <td>in/out</td>
    <td>in/out</td>
    <td>in/out</td>
    <td>in/out</td>
    <td> </td>
    <td> </td>
  </tr>
  <tr>
    <td><a href="http://nmrml.org/examples/">nmrML</a></td>
    <td>in/out</td>
    <td></td>
    <td></td>
    <td>in/out</td>
    <td>in/out</td>
    <td> </td>
    <td> </td>
  </tr>
  <tr>
    <td><a href="">Allotrope ADF</a></td>
    <td>in/out</td>
    <td></td>
    <td></td>
    <td>in/out</td>
    <td>in/out</td>
    <td> </td>
    <td> </td>
  </tr>
  <tr>
    <td><a href="https://dataverse.harvard.edu/api/access/datafile/:persistentId?persistentId=doi:10.7910/DVN/KUEDTG/SVIEUT">JCAMP-DX</a></td>
    <td>in/out</td>
    <td></td>
    <td></td>
    <td></td>
    <td></td>
    <td>in/out (sometimes)</td>
    <td> </td>
  </tr>
  <tr>
    <td><a href="">NMR Star</a></td>
    <td></td>
    <td>in/out</td>
    <td></td>
    <td>in/out</td>
    <td>in/out</td>
    <td></td>
    <td></td>
  </tr>
</table> 