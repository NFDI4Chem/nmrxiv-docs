---
sidebar_position: 2
title: Data Submission
---
# Data Submission

## Before You start

Before you start submitting your data, you need to:
* First, register and create an account in [nmrXiv](https://www.nmrxiv.org). Or login to [nmrXiv](https://www.nmrxiv.org) via single sign-on with your GitHub or Twitter ID.
* Make sure your folder is structured in the format described [here](/docs/submission-guides/submission/folder-structure).
* Make sure your folder contains at least one [file format supported by NMRium](https://docs.nmrium.org/#2-open-spectra) in order to generate spectra.

### What You Need to Know
* Keep in mind that what you submit will be structured as a **Project**. 
* If you submit more than one folder at once, they will still be one project, and the underlying folders with datasets will be studies. 

## Files Upload - Step 1

- Click on the `UPLOAD` button to start the submission pipeline. 
- The window **Files Upload** will open
- Provide details about your **Project**. Every field marked with a red asterisk is **mandatory**.
  - **Project Name** must be unique within the workspace (personal workspace or team).
  - **Project Description** must be at least 20 characters.
  - **Keywords** can be added one by one by typing the keyword and pressing enter, or typ-in a list of keywords separated by commas and pressing enter.
- Drag and drop your folder to the dedicated field.
- The loading bar will get green as the upload progresses.
- Wait until the upload done.
- Your folders are now added to the root folder "\".
- Clicking on any folder on the left side will show an overview of its content on the right side. You can also navigate the folders with the arrows.
- At this step, you can delete any unwanted folders or files by selecting them from the panel on the left side and pressing `Delete` button on the right side.

![File Upload](/img/upload/fileupload.gif)

## Assignement & Meta data - Step 2

Within this step, you can use [NMRium](https://www.nmrium.org/) to edit your spectra and assign peaks to the corresponding chemical groups. Additionally, you can provide the metadata of the studies and samples within the project. 

- **STUDY** can be seen as a title at the top of the panel on the left side with the total number of studies within the project. In this panel, you can switch between studies and see the names of the underlying datasets.
- **Experiments (Spectra)** is the first tab shown by default under the study name on the right side. Here you can navigate between different datasets (experiments) from the dropdown **Select Experiment**, which enables you to visualize and edit the corresponding spectra in the NMRium window in the middle. For more details on how to use NMRium, please check its [documentation](https://docs.nmrium.org/).
  - **Info** is the table you find below the NMRium window. It includes all the information extracted by [NMRium](https://www.nmrium.org/) about the NMR experiment.

  - **Meta** is the second table coming after **Info**. It includes the metadata from the instrument file.

:::caution Please note
On the very right side of the NMRium window there are three vertical dots. Double-clicking on them will expand a menu with several fields. Please check the GIF below.
:::

- **Sample Info** tab shows details about the chemical composition of the sample (available molecules and their percentages). If you already know part of the composition of your sample before the NMR spectroscopy, please add the molecules here. You can load structures by adding **SMILES** to the corresponding field and pressing `Load Structure`. It will view the structure in the structure editor where you can apply any needed changes. Alternatively, you can draw the structure in the editor from scratch. When you feel satisfied with the structure, set its percentage using the bar and press `ADD`. The molecule with its percentage and INChI will appear in the molecules list on the left side. If you need to edit added structures, delete them and add new ones.

:::caution Please note
If you don't know the percentage of a molecule in your sample, you have to set it to **zero**.
:::

- **Meta Data** tab shows an overview of the selected study's metadata. You can edit this metadata at this level or after submission as long your study is private. You can press on **Auto generate** to auto-generate the  study description. Please don't forget to press `SAVE` before you proceed.

After providing all the details in this tab, you can go backwards to step 1 with the button `BACK`, you can `CANCEL` the submission, or you can `PROCEED` to step 3.

![Assignement & Meta data](/img/upload/assignment-metadata.gif)

## Complete - Step 3
After clicking on proceed in step 2, your data will be submitted and processed in the background. Give us a few moments for the queue to get processed. You will receive an email once the processing is complete. You can click `FINISH` to let the processing continue in the background, or you can wait to view the final page of the submission-workflow where you get the overview of the whole project. Here you can edit the existing details you have entered in previous steps and enter new details such as selecting privacy, choosing release date, and selecting [license](https://github.com/NFDI4Chem/nmrxiv/discussions/123). There is also a quick download link to download your whole project.
Click on the `Save` button and press `Finish`. The submission is done!

![Complete](/img/upload/complete.gif)