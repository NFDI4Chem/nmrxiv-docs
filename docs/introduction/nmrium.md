---
sidebar_position: 5
id: nmrium
title: NMRium
---
# NMRium

[NMRium](https://www.nmrium.org/) is an open source NMR spectra editor available as a standalone and a React component that can be integrated in other applications, which is whtat we plan to do in nmrXiv as we are interested in both using NMRium and contributing to its development. 

It provides a bundle of handy features including:
* Open various vendor and open file formats (JCAMP-DX file, a zipped bruker folder, or a JEOL file).
* It accepts 1D and 2D spectra.
* Open source.
* It handles chemical structures.
* Safety: All the processing is done in the browser without sending any data to a server. 
* aAdvanced peak picking detection for 1D and 2D and is able to generate the NMR string required for publication or patent.
* All the processing and assignment can be stored as a “.nmrium” file. This file contains the original data as well as all the processing that was applied on the spectrum. Assignment of the molecule are also saved in the file. Additionally, export in NMReData is possible as well.

For details on how to use NMRium, please check this [Tutorial](https://docs.nmrium.org/).

## Integrating NMRium in nmrXiv
We are planning to use an iframe wrapper to tackle dependencies issues. Please find here the link to the [wrapper on GitHub](https://github.com/ComPlat/nmrium-react-wrapper)

### Set up NMRium wrapper (For macOS and Ubuntu):
**Dependencies**:
* Git (sudo apt-get install git-all)
* npm (sudo apt install npm)
* yarn (sudo npm install --global yarn)
* React 

**Set up**:
* Clone the [project from Github](https://github.com/ComPlat/nmrium-react-wrapper) by running:
```bash
git clone https://github.com/ComPlat/nmrium-react-wrapper
```

* Go to the project directory:
```bash
cd nmrium-react-wrapper
```

* Install the project dependencies:
```bash
yarn install
```

* updates the caniuse-lite database with browsers:
```bash
npx browserslist@latest --update-db
```

* Run the wrapper locally:
```bash
yarn start
```

