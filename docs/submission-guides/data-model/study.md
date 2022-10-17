---
sidebar_position: 2
title: Study
---

The concept of study in nmrXiv is similar to the one of [Study](https://isa-specs.readthedocs.io/en/latest/isamodel.html#study) in [ISA model](https://isa-tools.org/format/specification.html). Therefore, the study helps group related datasets and describe their collective metadata. Those datasets are related as they correspond to experiments applied to the same sample. Therefore, one study corresponds to one sample in nmrXiv. nmrXiv is capable of detecting datasets automatically and grouping them in studies, which requires the user to make sure that they submit their data in a compatible way. For more details, it is highly recommended to check the [folder structuring section](/docs/submission-guides/submission/folder-structure.md) before submitting data.


## Study View
<div style={{textAlign: 'center'}}>
<img src="/img/study/view.png" width="1000"/>
<figcaption>Public study view</figcaption>
</div>
<br></br>

As with the project, the view of a public study differs from the private's one. Starting with the public one, at top there is the path to the study (Dashboard > Project name), followed by a somehow similar view to the project's. Below is the study **name** (Eserine), which must be unique within the project. Next to the name is a star to indicate whether the study is starred and to enable starring/de-starring, which helps to bookmark studies. Starring a project doesn't propagate to the underlying studies.

Below, one can see the first letters of the names of the people with whom the study is shared circled. Clicking on those circles enables sharing control (more on that in [Share](#share)). One can also click on `View details` to view and edit the study details (more on that in [Edit](#edit)) and see the privacy of the study, when it was last updated, and the ownership by the user. Those three are not clickable but editable from `View details` and `Share`.

<div style={{textAlign: 'center'}}>
<img src="/img/study/top.png" width="1000"/>
<figcaption>The top of study view</figcaption>
</div>
<br></br>

Moving down, there are three tabs: `About`, `Datasets`, and `Files`, with `About` being the one shown by default when entering a study, and the one similar to the project view. Its view differs in the private study from the public's one by having `edit` buttons next to the fields in the private one.

<div style={{textAlign: 'center'}}>
<img src="/img/study/edit.png" width="1000"/>
</div>


Study `Description` must be at least 20 characters describing its content and/or its purpose, while the `Keywords` are tags used to search for the study. Then comes the `License` with an `i`nformation sign. When hovering on the `i`, a brief description of the license appears. More about nmrXiv licenses can be found [here](/docs/submission-guides/licenses.md) 

At the bottom is the **Sample chemical composition**, which also differs between private and public studies. The purpose of this section is to enable the user to add the molecules they are aware of their existence in the sample (before the NMR spectroscopy) along with their percentages. This section is similar to the [**Sample Info**](/docs/submission-guides/submission/upload.md/#assignement--meta-data---step-2) tab during the [submission upload](/docs/submission-guides/submission/upload.md). More on how to edit this section in [Sample chemical composition section](#sample-chemical-composition).

With public studies, the option of adding more structures disappears, removing the entire right side of the section, including the structure editor with the SMILES field and the percentage bar. On the left side, one can see all the added molecules with their percentage and INChI in the molecules list.

The `Datasets` tab has a dropdown menu with all the datasets within the study. This tab will be covered in [Dataset page](/docs/submission-guides/data-model/dataset.md)

<div style={{textAlign: 'center'}}>
<img src="/img/study/datasets.png" width="1000"/>
<figcaption>Study Datasets tab</figcaption>
</div>
<br></br>

The `Files` tab view differs between private and public studies too, with the private ones having the option to drag and drop more files there. In this tab, the user can select folders on the left side to show an overview of its content on the right side. They can also navigate the folders with arrows. Within the folder, they can select files to show their metadata on the right side. For both selected folders and files there is a `Download` button.

<div style={{textAlign: 'center'}}>
<img src="/img/study/files.png" width="1000"/>
<figcaption>Study Files tab</figcaption>
</div>
<br></br>

## Create
There are two ways to create studies. First is through the [submission pipeline](/docs/submission-guides/submission/upload.md) where the studies will be created within the submitted project. Second is after submission from within the project.

## Access
You can access your created studies by [entering their parent projects](/docs/submission-guides/data-model/project/#access) and scrolling down to **Studies**. You can also find the ones shared with you by others in the `Shared with me` folder directly if the parent project is not shared with you. Lists of studies show quick view of them, including its **name**, **privacy**, and **last updating date**.

<div style={{textAlign: 'center'}}>
<img src="/img/project/studies.png" width="1000"/>
<figcaption>Studies within a project</figcaption>
</div>
<br></br>

## Edit
To edit a study, you should have **editing** access to it, which is the case when you are its creator or when it is shared with you as an owner or a collaborator. The study should also still be private.

You can edit the study from `View details` at the top of the study view or from any `Edit` buttons found next to the fields, while you can edit the sample in the  **Sample chemical composition** section at the bottom.

### View Details
Clicking on `View details` opens a side menu.

<div style={{textAlign: 'center'}}>
<img src="/img/study/view-details.png" width="1000"/>
<figcaption>View details side menu</figcaption>
</div>
<br></br>

In the side menu, the user can edit the study's name, description, keywords, privacy, and license. At the bottom, there is a link to the [Share](#share) section and an `activity` button, which opens a new side menu to show the updates-history of the study.

<div style={{textAlign: 'center'}}>
<img src="/img/study/activity.png" width="1000"/>
<figcaption>Study activity log</figcaption>
</div>
<br></br>

### Edit Button
For all the fields `Description`, `Keywords`, and the `License`, the `Edit` button will open the same side menu as with `View details`.

### Sample chemical composition

In the private mode, you can load structures by adding **SMILES** to the corresponding field and pressing `Load Structure`. It will view the structure in the structure editor where you can apply any needed changes. Alternatively, you can draw the structure in the editor from scratch. When you feel satisfied with the structure, set its percentage using the bar and press `ADD`. The molecule with its percentage and INChI will appear in the molecules list on the left side. If you need to edit added structures, delete them and add new ones.

:::caution Please note
If you don't know the percentage of a molecule in your sample, you have to set it to **zero**.
:::

<div style={{textAlign: 'center'}}>
<img src="/img/study/private-sample.png" width="1000"/>
<figcaption>Sample chemical composition section of a private study</figcaption>
</div>
<br></br>

## Validation

## Share
Studies are shared by default with the members of the project. At the top of the study view, there are circles with the users' names first letters with whom the study is shared. Clicking on those circles enables modifying the sharing settings by first opening a window that shows with whom the study is already shared along with the roles. 

<div style={{textAlign: 'center'}}>
<img src="/img/study/new-share.png" width="1000"/>
<figcaption>Study sharing status</figcaption>
</div>

Then the user can click on the button `Share`, which will open another window to share the study with other users.
<div style={{textAlign: 'center'}}>
<img src="/img/study/select-share.png" width="1000"/>
<figcaption>Share with users window</figcaption>
</div>

In the opened window, the user needs to fill in the email and select the role of the user to share with, and they can optionally add a message. There are three roles for sharing:
- **Owner**: read/update/delete the study/datasets.
- **Collaborator**: read/update the study/datasets. A collaborator cannot delete any of the study content.
- **Viewer**: read the study/datasets. A viewer cannot update or delete any of the study content.

When the user is satisfied with their entries, they can click `SEND` to send an email to the other user. Then the window gets refreshed to enable entering details of other users to share with them. When all the invitations are sent, the user can click the back arrow to go back to the project sharing status window, which will be updated to show the status of the new invitations. Sharing can be canceled as long the invitation is still pending (not accepted or rejected by the receivers). 

<div style={{textAlign: 'center'}}>
<img src="/img/study/update-share.png" width="1000"/>
<figcaption>Updated project sharing status</figcaption>
</div>

After an invitation is accepted, the creator can still remove any of the members, while the owners can remove any of them but the creator.

## Delete
[Deleting a project](/docs/submission-guides/data-model/project/#delete) will delete all the underlying studies.

## Archive
[Archiving a project](/docs/submission-guides/data-model/project/#archive) will archive all the underlying studies.