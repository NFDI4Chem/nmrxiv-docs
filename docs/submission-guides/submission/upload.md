---
sidebar_position: 2
title: Data Submission
---
# Data Submission

## Before You start

Before you start submitting your data, you need to:
* First, [register](/docs/submission-guides/registration.md) to create an account in [nmrXiv](https://www.nmrxiv.org), or login to [nmrXiv](https://www.nmrxiv.org) via single sign-on with your GitHub or Twitter ID. Please be aware that the single sign-on will result in registering you on [nmrXiv](https://www.nmrxiv.org).
* Make sure to structure your folder in the way described [here](/docs/submission-guides/submission/folder-structure).
* Make sure to include at least one [file format supported by NMRium](https://docs.nmrium.org/#2-open-spectra) in your folder in order to generate spectra.

### What You Need to Know
* Keep in mind that your submission will be structured as a **Project**. 
* If you submit more than one folder at once, they will still be one **Project**, and the underlying folders with datasets will be studies. 

## Files Upload - Step 1

- Click on the `UPLOAD` button in your Dashboard or the [team Dahsboard](/docs/submission-guides/data-model/team.md) to start the submission pipeline. 
<div style={{textAlign: 'center'}}>
<img src="/img/upload/upload-btn.png" width="1000"/>
</div>
- The window **Files Upload** will open.
<div style={{textAlign: 'center'}}>
<img src="/img/upload/upload.png" width="1000"/>
</div>
- Provide details about your **Project**. Every field marked with a red asterisk is **mandatory**.
  - **Project Name** must be unique within the workspace (personal workspace or team).
  - **Project Description** must be at least 20 characters.
  - **Keywords** can be added singly by typing the keyword and pressing "enter", or in bulk by typing a list of keywords separated by commas and pressing enter. Keywords increase the visibility of the **Project**. 
- Drag and drop your folder to the dedicated field.
- The loading bar will get green as the upload progresses.
- Wait until the upload has ended.
- Your folders are now added to the root folder "\".
- Clicking on any folder on the left side will show an overview of its content on the right side. You can also navigate the folders with the arrows.
<div style={{textAlign: 'center'}}>
<img src="/img/upload/folders.png" width="1000"/>
</div>
- At this step, you can delete any unwanted folders or files by selecting them from the panel on the left side and pressing the `Delete` button on the right side.

  ![File Upload](/img/upload/fileupload.gif)

## Assignement & Meta data - Step 2

Within this step, you can use [NMRium](https://www.nmrium.org/) to edit your spectra and assign peaks to the corresponding chemical groups. Additionally, you can provide the metadata of the studies and samples within the project. 

- **STUDY** can be seen as a title at the top left side of the panel with the total number of studies within the project. In this panel, you can switch between studies and see the names of the underlying datasets. The dataset will have one of three colors:
  - **Green**: When the dataset is successfully viewed. 
  - **Gray**: If there was no attempts to view the dataset yet, such as when you first open the study before you start viewing the datasets.
  - **Red**: When the attempt to view the dataset fails.
<div style={{textAlign: 'center'}}>
<img src="/img/upload/study-panel.png" width="1000"/>
</div>

- **Experiments (Spectra)** is the first tab shown by default under the study name on the left side. Here you can navigate between different datasets (experiments) from the dropdown **Select Experiment**, which enables you to visualize and edit the corresponding spectra in the NMRium window in the middle. For more details on how to use NMRium, please check its [documentation](https://docs.nmrium.org/).
<div style={{textAlign: 'center'}}>
<img src="/img/upload/experiments.png" width="1000"/>
</div> 

Directly above the NMRium window, you can see a gray message on the left that informs the user about the current status of the spectra (being uploaded, saved, etc.). To the right side, there exist three buttons. `Reset` will reset all the edits done on the spectra, getting it back to its original status when uploaded. Resting is an edit that is saved along with other edits in the history. To view the history, click `Edit History`, which opens a side menu to show the editors, and the dates of edits.
<div style={{textAlign: 'center'}}>
<img src="/img/upload/history.png" width="1000"/>
</div> 

The last button `Preview` helps is to refresh the spectra when you face any issues viewing your edits.

Below, there is [NMRium](https://www.nmrium.org/) window. Clicking on the `User manual` leads to [NMRium Documentation page](https://docs.nmrium.org/). You can control the panels and tools you have by default in [NMRium](https://www.nmrium.org/) from `General settings`. You can also click `Full screen` to enable that mode.
<div style={{textAlign: 'center'}}>
<img src="/img/upload/manual.png" width="1000"/>
</div> 

Below the [NMRium](https://www.nmrium.org/) window there are two tables:
  - **Info** includes all the information extracted by [NMRium](https://www.nmrium.org/) about the NMR experiment.

  - **Meta** is the second table coming after **Info**. It includes the metadata from the instrument file.

:::caution Please note
There are three vertical dots on the right side of the NMRium window. Double-clicking them will expand a menu with several fields. Please check the GIF below.
:::

![Assignement & Meta data](/img/upload/assignment-metadata.gif)

- **Sample Info** tab shows details about the chemical composition of the sample (available molecules and their percentages). If you already know part of the composition of your sample before the NMR spectroscopy, please add the molecules here. You can load structures by adding **SMILES** to the corresponding field and pressing `Load Structure`. It will view the structure in the [structure editor](/docs/submission-guides/submission/editor.md), where you can apply any needed changes. Alternatively, you can draw the structure in the [editor](/docs/submission-guides/submission/editor.md) from scratch. When you feel satisfied with the structure, set its percentage using the bar and press `ADD`. The molecule with its percentage and INChI will appear in the molecules list on the left side. You can edit and delete the added structures from the corresponding buttons in the molecules list. For more details about the structure editor, please [visit its documentation](/docs/submission-guides/submission/editor.md).
 
:::caution Please note
If you don't know the percentage of a molecule in your sample, you have to set it to **zero**.
:::

<div style={{textAlign: 'center'}}>
<img src="/img/upload/sample.png" width="1000"/>
</div> 

- **Meta Data** tab shows an overview of the selected study's metadata. You can edit this metadata at this level or after submission as long your study is private. You can press on **Auto generate** to auto-generate the study description. Please don't forget to press `SAVE` before you proceed.

After providing all the details in this tab, you can go back to step 1 with the button `BACK`, you can `CANCEL` the submission, or you can `PROCEED` to step 3.

<div style={{textAlign: 'center'}}>
<img src="/img/upload/meta.png" width="1000"/>
</div> 

## Complete - Step 3
In step 3, you can find how your project compares to [recommended community standards](https://nfdi4chem.github.io/workshops/). Whenever a piece of information is missing, you will have it marked in red with an `Edit` button for a quick update. You can press `FINISH` to end the submission process even while having red marks, but your project will remain private, and complying with the standards is a prerequisite for publishing.

<div style={{textAlign: 'center'}}>
<img src="/img/upload/check.png" width="1000"/>
</div> 

### Manage Studies and Datasets
After your submission is complete, you can always manage your studies or datasets by deleting or adding more files to your project.
Click on your projects and click on the `Manage Studies` button and the upload window will appear where you can drag and drop to add more files. To delete just select the files/folder you want to remove and click on the delete button that appears on the right side.
Once done click on `Proceed` to assign metadata and perform analysis and then the `Finish` button at the end before which you might have to input missing information to fulfill the validation for the newly added files. Similar steps can be followed to Manage datasets by clicking on the `Manage Datasets` button.

<div style={{textAlign: 'center'}}>
<img src="/img/upload/manage-studies-dataset.gif" width="1000"/>
</div> 