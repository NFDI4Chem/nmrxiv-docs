---
sidebar_position: 3
title: Study
---

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
