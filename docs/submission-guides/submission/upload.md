---
sidebar_position: 1
title: Upload
---

## Project

nmrXiv concept of **Projects** is similar to the concept of the [**Investigation** in **ISA Schema**](https://isa-specs.readthedocs.io/en/latest/isamodel.html#investigation) where all the information needed to understand the overall goals and means used in an experiment can be found. Once you have registered your account successfully in nmrXiv, and if you do not want to collaborate with a [Team](https://docs.nmrxiv.org/docs/submission-guides/Teams), the first step, by which you can start, is to create a **Project**.

## Create New Project
A user can create single or multiple **Projects**, and each **Project** can contain single or multiple [Studies](https://docs.nmrxiv.org/docs/submission-guides/study).
To create a **Project**, click on the `New Project` button or **Create a new project** tab. 
![Dashboard](/img/project/dashboard.png) 

This will pop up a new window where you have to provide the project **Name**, and you can optionally provide a **Description**. The **Description** can be stylized with [Markdown](https://www.markdownguide.org/) in the `Write` view, while the styling effect can be seen in the `Preview` view. You can choose to make your **Project** **Public** or **Private**. If the **Project** is **Private**, then it is accessible (the project only, not the underlying [Studies](https://docs.nmrxiv.org/docs/submission-guides/study)) by you and by the members of the [Team](https://docs.nmrxiv.org/docs/submission-guides/Teams). If it's **Public**, then everyone with the link will be able to access the **Project**.
Finally you can either `SAVE` your input, or `CANCEL` the process.
![New Project](/img/project/new-project.png) 

After creating the project, you will be taken back to where it was created (in the dashboard or in a [Team](https://docs.nmrxiv.org/docs/submission-guides/Teams)), where you can see a list of all your available **Projects** sorted from the oldest updated **Project** to the latest updated ones. For each **Project** in the list, you can see its name, privacy, and creation date. On the right side there is an arrow to enter the **Project**
![Projects List](/img/project/projects-list.png) 

Here you can see the animated process of creating a **Project**.
<img src="/img/project/create.gif"/>

## View and Update Project Details and Settings
After creating a **Project**, you can enter that **Project** by clicking the **Project**'s  arrow on the right side of the **Projects** list. This will lead you to a new page where you can find the **Project**'s details, update its settings, and add new [Studies](https://docs.nmrxiv.org/docs/submission-guides/study). 

![Projects Page](/img/project/project-page.png) 

### View/Edit Project Details
By clicking on **View details** on the top left side, a menu opens from the right side containg the same details entered when [creating the **Project**](#create-new-project)   (name, description, privacy) with the possibility to edit them when having the right [role](https://docs.nmrxiv.org/docs/submission-guides/Teams#roles-and-permissions). In addition, you can find a link to the documentation to get more details about sharing **Projects**. [Learn more about sharing](#)
![Projects Details](/img/project/project-details.png) 

The new addition you can find here is the **Activity** button at the bottom of the menu. By clicking on it, another menu opens from the right side to show a log of all the activites (Changelogs) performed on the project with details on the updater, what was updated, and when. 
![Projects Activity](/img/project/project-activity.png) 

Here you can see the animated process of view a **Project** details and updating them.

<img src="/img/project/update.gif"/>


### Delete Project (Project Settings)
To delete your Project, click on the **Project Setting** tab on the right top corner, a new page opens.
![Delete Project](/img/project/project-delete.png) 

From the new page you can choose to `DELETE PROJECT`. A window pops up to ask you for your password, and to confirm that you really want to delete the project. 
![Confirm Deletion](/img/project/delete-confirm.png) 


:::danger Caution
Caution: Once your project is deleted, all of its resources and data will be permanently deleted. Before deleting your project, please download any data or information that you wish to retain.
:::

Here you can see the animated process of deleting a **Project**.
<img src="/img/project/delete.gif"/>




## Study

nmrXiv concept of **Study** is similar to the concept of the [**Study** in **ISA Schema**](https://isa-specs.readthedocs.io/en/latest/isamodel.html#study) containing information on the subject under study, its characteristics and any treatments applied (The **Subject** in [**ISA**](https://isa-specs.readthedocs.io/en/latest/isamodel.html#) is exclusively a biological object, which we aim at extending in nmrXiv). 

A **Study** contains contextualising information for one or more [Assay](https://isa-specs.readthedocs.io/en/latest/isamodel.html#assay). Metadata about the study design, study factors used, and study protocols are recorded in Study objects, as well as information similarly to the Investigation including title and description of the study, and related people and scholarly publications. For more details, please refer to the [**Study** in **ISA Schema**](https://isa-specs.readthedocs.io/en/latest/isamodel.html#study).

In nmrXiv, **Studies** are contained in [Projects](https://docs.nmrxiv.org/docs/submission-guides/project), where a [Project](https://docs.nmrxiv.org/docs/submission-guides/project) can house one or more **Studies**, and each one of them receives its very own [URL](https://developer.mozilla.org/en-US/docs/Learn/Common_questions/What_is_a_URL). **Studies** can be versioned, command invocations, and metrics.

## Create New Study
A user can create one or more **Studies**, and each **Study** can contain one or more **Assays**. To create a **Study**, click on the `New Study` button or **Create a new Study** tab. 
![Projects Page](/img/project/project-page.png) 

This will pop up a new window where you have to provide the study **Name**, and you can optionally provide a **Description**. The **Description** can be stylized with [Markdown](https://www.markdownguide.org/) in the `Write` view, while the styling effect can be seen in the `Preview` view. You can choose to make your **Study** **Public** or **Private**. If the **Study** is **Private**, then it is accessible by you and by the members of the [Team](https://docs.nmrxiv.org/docs/submission-guides/Teams). If it's **Public**, then everyone with the link will be able to access the **Study**.
Finally you can either `SAVE` your input, or `CANCEL` the process.
![New Study](/img/study/new-study.png) 

After creating the **Study**, you will be taken back to the [Project](https://docs.nmrxiv.org/docs/submission-guides/project) page, where you can see a list of all your available **Studies** sorted from the oldest updated **Study** to the latest updated ones. For each **Study** in the list, you can see its name, privacy, and creation date. On the right side there is an arrow to enter the **Study**
![Study List](/img/study/study-list.png) 

Here you can see the animated process of creating a **Study**.
<img src="/img/study/create.gif"/>
