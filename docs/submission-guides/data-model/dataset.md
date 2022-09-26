---
sidebar_position: 3
title: Dataset
---

The concept of the dataset in nmrXiv is similar to the one of [assay](https://isa-specs.readthedocs.io/en/latest/isamodel.html#assay) in [ISA model](https://isa-tools.org/format/specification.html) yet broader, as it refers to the files corresponding to experiments along with their metadata. For instance, one dataset could be a Bruker folder with all the underlying files corresponding to a 1H assay. nmrXiv is capable of detecting datasets automatically and grouping them in studies, which requires the user to make sure that they submit their data in a compatible way. For more details, it is highly recommended to check the [folder structuring section](/docs/submission-guides/submission/folder-structure.md) before submitting data.

## Dataset View
<div style={{textAlign: 'center'}}>
<img src="/img/dataset/view.png" width="1000"/>
<figcaption>Dataset view</figcaption>
</div>
<br></br>

The view of a public dataset is similar to the private's one. In fact, it is just a tab from the [study view](/docs/submission-guides/data-model/study/#study-view), and it is similar to the [Step 2](/docs/submission-guides/submission/upload#assignement--meta-data---step-2) Experiments (Spectra) tab of the [Data Submission Pipeline](/docs/submission-guides/submission/upload). At the top, there is a drop-down menu to select an experiment (within a study, aka, sample). 
<div style={{textAlign: 'center'}}>
<img src="/img/dataset/experiment.png" width="1000"/>
<figcaption>Select experiment menu</figcaption>
</div>
<br></br>

The selected experiment will be viewed in the embedded NMRium. For more details about [NMRium](https://www.nmrium.org/), please visit our [NMRium documentation page](/docs/advanced-guides/nmrium/) and [NMRium official documentation](https://docs.nmrium.org/).

:::caution Please note
On the very right side of the NMRium window, there are three vertical dots. Double-clicking on them will expand a menu with several fields.
:::

Below NMRium there is the license of the datasets. This field is uneditable, and it takes its value from the parent study license. Then there is metadata of the experiment:
- **Info** includes all the information extracted by [NMRium](https://www.nmrium.org/) about the NMR experiment.

- **Meta** is the second table coming after **Info**. It includes the metadata from the instrument file.

## Create
There are two ways to create datasets. First is through the [submission pipeline](/docs/category/submission-pipeline), where the datasets will be automatically detected. The second is after submission from the `Files` tab within a study by dragging and dropping files or folders, but the second option is possible only for private ones.

<div style={{textAlign: 'center'}}>
<img src="/img/dataset/files.png" width="1000"/>
<figcaption>Files tab in a private study with the option to drag and drop more datasets there.</figcaption>
</div>
<br></br>

## Access
You can access your created datasets by [entering their parent studies](/docs/submission-guides/data-model/study/#access) and going to `Files` tab. You can also find the ones shared with you by others in the `Shared with me` folder directly if the parent study is not shared with you. All the public datasets on nmrXiv are in the `Datasets` folder.

## Edit
To edit a dataset, you should have **editing** access to it, which is the case when you are its creator or when it is shared with you as an owner or a collaborator. The dataset should also still be private.

You can edit the dataset through NMRium, and a history of changes is kept.

## Share
Coming soon.

## Delete
[Deleting a project](/docs/submission-guides/data-model/project/#delete) will delete all the underlying datasets.

## Archive
[Archiving a project](/docs/submission-guides/data-model/project/#archive) will archive all the underlying datasets.