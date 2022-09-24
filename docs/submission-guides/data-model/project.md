---
sidebar_position: 1
title: Project
---

The concept of project in nmrXiv is similar to the one of [Investigation](https://isa-specs.readthedocs.io/en/latest/isamodel.html#investigation) in [ISA model](https://isa-tools.org/format/specification.html). Therefore, the project helps grouping related studies and describing their collective metadata. How those studies are related is up to the user. They can be a collection of studies used for teaching or in a thesis. They can also be a part of one Investigation](https://isa-specs.readthedocs.io/en/latest/isamodel.html#investigation)  (several samples from one source). In other words, the relation can be based on the domain of the studies, their usage, or any other basis, as long the user is aware that all the data submitted to nmrXiv in [one process](/docs/category/submission-pipeline) are grouped as one project.

## Project View
<div style={{textAlign: 'center'}}>
<img src="/img/project/project-details.png" width="1000"/>
<figcaption>Public project view</figcaption>
</div>
<br></br>

Starting from the top, one can see the project **name** (Software Development Datasets 1), which must be unique within the workspace. Next to the name is a star to indicate whether the project is starred and to enable starring/de-starring, which helps to bookmark projects.  And to the right, there is the `Project Settings` (more on that in [Delete](#delete)).

Below, one can see the first letters of the names of the people with whom the project is shared circled. Clicking on those circles enables sharing control (more on that in [Share](#share)). One can also click on `View details` to view and edit the project details (more on that in [Edit](#edit)) and see the privacy of the project and the ownership by the user. Both those last two are not clickable, but they are editable from `View details` and `Share`.

<div style={{textAlign: 'center'}}>
<img src="/img/project/project-share.png" width="450"/>
</div>
<br></br>

Moving down, the view of the private project differs from the public one by having `edit` buttons next to the fields in the earlier one.

<div style={{textAlign: 'center'}}>
<img src="/img/project/edit.png" width="1000"/>
</div>

Project `Description` must be at least 20 characters describing its content and/or its purpose, while the `Keywords` are tags used to search for the project. Then comes the `License` with an `i`nformation sign. When hovering on the `i`, a brief description of the license appears. More about nmrXiv licenses can be found [here](/docs/submission-guides/licenses.md) 

The `Citation` field contains the article to which the submitted data is attached, and the `Author` is the creator(s) of the data.

At the bottom are the studies included in the project supported by the `Search` bar.

## Create
The only way to create projects is through the [submission pipeline](/docs/category/submission-pipeline). 

## Access
You can find your created projects in the `Dashboard` (or in the [team](/docs/submission-guides/data-model/team) dashboard), while you can find the ones shared with you by others in the `Shared with me` folder. All the public projects on nmrXiv are in the `Projects` folder.

<div style={{textAlign: 'center'}}>
<img src="/img/project/dashboard.png" width="1000"/>
<figcaption>User dashboard</figcaption>
</div>

In the `Dashboard`, you can see a quick view of the project, including its **name**, **privacy**, and dates of **creating and updating**. You can also see if the project is **starred**.
## Edit
To edit a project, you should have **editing** access to it, which is the case when you are its creator or when it is shared with you as an owner or a collaborator. The project should also still be private.

Enter the chosen project by clicking anywhere on its card from the `Dashboard` or `Shared with me` folders, which leads to the project view. Within the project view, you can edit the project from `View details` at the top of the project view or from any `Edit` buttons found next to the fields. 

### View Details
Clicking on `View details` opens a side menu.

<div style={{textAlign: 'center'}}>
<img src="/img/project/view-details.png" width="1000"/>
<figcaption>View details side menu</figcaption>
</div>
<br></br>
In the side menu, the user can edit the project's name, description, keywords, privacy, and license. They can also add a photo to the project, which can be seen in its public view, or replace an exiting one. At the bottom, there is a link to the [#share](Share) section and an `activity` button, which opens a new side menu to show the updates history of the project.

<div style={{textAlign: 'center'}}>
<img src="/img/project/activity.png" width="1000"/>
<figcaption>Project activity log</figcaption>
</div>

### Edit Button
For the `Description`, `Keywords`, and the `License`, the `Edit` button will open the same side menu as with `View details`, while it has a different function for other fields.

`Edit` the **Citation** will pop up a new window **Update Citation**.

<div style={{textAlign: 'center'}}>
<img src="/img/project/citation.png" width="1000"/>
<figcaption>Project Update citation window</figcaption>
</div>

**Update Citation** window enables adding/editing the citation by either importing from a DOI or manually filling the fields , where all the fields marked with a red asterisk are mandatory. When the user finishes filling the fields, they need to press `ADD`, which then shows an overview of the entered information. If the user is satisfied with it, they press `SAVE`. Otherwise, they can `delete` the citation or `CLOSE` without saving.

`Edit` the **Author** will also pop up a new window **New Author** where the user can use an article DOI to import its authors. By clicking `IMPORT`, the list of the article's authors appear so that the user can select out of it with checkboxes. An alternative would be to enter the authors manually, where all the fields marked with a red asterisk are mandatory. When the user finishes checking the boxes or filling the fields, they need to press `ADD`, which then shows an overview of the entered information. If the user is satisfied with it, they press `SAVE`. Otherwise, they can `delete` the author data or `CLOSE` without saving.

## Share
When generating a project, it is shared by default with its creator. When it is generated in a team, then it is shared  with the team members. At the top of the project view, there are circles with the users', with whom the project is shared, names first letters. Clicking on those circles enables modifying the sharing settings by first opening a window that shows with whom the project is already shared along with the roles. 

<div style={{textAlign: 'center'}}>
<img src="/img/project/new-share.png" width="1000"/>
<figcaption>Project sharing status</figcaption>
</div>

Then the user can click on the button `Share`, which will open another window to share the project with other users.

<div style={{textAlign: 'center'}}>
<img src="/img/project/select-share.png" width="1000"/>
<figcaption> Share with users window</figcaption>
</div>

In the opened window, the user needs to fill in the email and select the role of the user to share with, and they can optionally add a message. There are three roles for sharing:
- **Owner**: read/update/delete the project/studies/datasets.
- **Collaborator**: read/update the project/studies/datasets. A collaborator cannot delete any of the project content.
- **Viewer**: read the project/studies/datasets. A viewer cannot update or delete any of the project content.

When the user is satisfied with their entries, they can click `SEND` to send an email to the other user. Then the window gets refreshed to enable entering details of other users to share with them. When all the invitations are sent, the user can click the back arrow to go back to the project sharing status window, which will be updated to show the status of the new invitations. Sharing can be canceled as long the invitation is still pending (not accepted or rejected by the receivers). 

<div style={{textAlign: 'center'}}>
<img src="/img/project/update-share.png" width="1000"/>
<figcaption>Updated project sharing status</figcaption>
</div>

After an invitation is accepted, the creator can still remove any of members, while the owners can remove any of them but the creator.

<div style={{textAlign: 'center'}}>
<img src="/img/project/modify-share.png" width="500"/>
<figcaption>Project sharing status with option to remove a collaborator</figcaption>
</div>

## Delete
Only private projects can be deleted, while public ones can be [archive](#archive)d. To delete a project, click on `Project Settings` at the top right of the project view. It will lead to a new window where you can click on `DELETE PROJECT`. This action is irreversible, and it leads to permanently deleting all the project and its content data.
<div style={{textAlign: 'center'}}>
<img src="/img/project/delete.png" width="1000"/>
<figcaption>Private project settings</figcaption>
</div>

To avoid accidental deleting, the user has to confirm their choice again and enter their password.

<div style={{textAlign: 'center'}}>
<img src="/img/project/delete-confirm.png" width="500"/>
<figcaption>Project delete confirmation</figcaption>
</div>

## Archive
Once a project is public, it cannot be deleted anymore, but it can be archived, where all its resources and data will be permanently uneditable and unversionable.  

<div style={{textAlign: 'center'}}>
<img src="/img/project/archive.png" width="1000"/>
<figcaption>Public project settings</figcaption>
</div>

To avoid accidental archiving, the user needs to confirm their choice again and enter their password.

<div style={{textAlign: 'center'}}>
<img src="/img/project/archive-confirm.png" width="500"/>
<figcaption>Project archive confirmation</figcaption>
</div>

