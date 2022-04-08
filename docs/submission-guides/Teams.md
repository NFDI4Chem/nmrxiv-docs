---
sidebar_position: 4
title: Teams
---
You can create Teams if you wish to collaborate with others on projects. A user can create multiple teams in nmrXiv or be part of them, and based on that, the user can have one of two different views of the same **Team** depending on whether they created or joined the **Team**.

## Team Creator View
To **Create New Team** click on the `Create New Team` option from the top right dropdown. a new page opens where you can provide the **Team**'s name, then press `CREATE`. Once created, you can control the **Team** through **Team Settings**, which can be found at the right top of the page. The **Team** creator is the only one who can change the settings of the team, such as the name and the members with their roles. Here we provide more details on the settings:

### Team Name 
This section includes details on **The Team's Name and Owner Information**.
The **Team** creator is the only person who can change the **Team**'s name in the field  **Team Name**, and then they press `SAVE`. The email of the the **Team** owner is also shown here, but can't be modified.
![The Team's Name and Owner Information](/img/team/team-name.png) 

### Add Team Member
You can invite people to join the **Team** with specific [roles](#roles-and-permissions) only if you are the creator of the **Team**. 

You need to enter the email of the invitee, and pick their [role](#roles-and-permissions) from the provided list, and press `ADD`.
![Team Members](/img/team/team-member.png) 

At this point, a new section [Pending Team Invitations](#pending-team-invitations) appears. The invitee will receive the invitation via email. The invitation has two buttons, one to `Accept Invitation`, and another to `Create Account` if the invitee doesn't have one already, and in this second case, the invitee can go back to the invitation to accept it after creating the account.
![Team Members](/img/team/team-invitation.png) 

#### Pending Team Invitations 
This section shows only to the **Team** creator as long as there are pending invitations to join the **Team** to confirm that the invitations have been sent, and to show the list of invitees' emails while giving the option to cancel those invitations by pressing `Cancel`. 
![Pending Team Invitations](/img/team/team-pending.png)

####  Team Members 
This section shows a list of all the **Team** members (except the creator), and it appears only to the **Team** creator after other members have accepted their invitations. Each member is present with the following details:
* Member's name: As provided to nmrXiv.
* Member's [role](#roles-and-permissions): The **Team** creator can manage the roles of the members here by clicking on the shown [role](#roles-and-permissions), and picking another  [role](#roles-and-permissions), and then either `SAVE` the changes or `CANCEL` them.
* Remove: So that the **Team** creator can `Remove` members from the **Team**.
![Team Members](/img/team/team-members-list.png)

###  Delete Team 
This option permanently deletes the **Team** with all its data and resources. One needs to be cautious, and we recommend downloading the data before deleting.
![Team Delete](/img/team/team-delete.png)


## Team Member View
**Team** members are added to **Team**s by invitations from **Team**s creators (See [Add Team Member](#add-team-member))

**Team** members can have any of multiple [roles](#roles-and-permissions) to handle projects and studies, but they can never change **Team** details or members. Many sections appearing for the creators don't appear to the members. Those sections are [Add Team Member](#add-team-member), [Pending Team Invitations](#pending-team-invitations), [Delete Team](#delete-team). However, two sections appear to the members:

### Team Name 

This section looks very similar to the [one seen by a creator](#team-name), however, this time it is not possible to edit anything.

![Team Name](/img/team/member-name.png)

###  Team Members 
The difference here from the [creator view](#team-members) is that members can't remove other members or change their [roles](#roles-and-permissions), but they can `Leave` the **TEAM**.
![Team Members](/img/team/team-leave.png)

## Roles and Permissions
Below are different Roles and Permissions that can be assigned to a **Team** member:

1. **Owner**: Provides full control of the projects with read/write/update including deleting projects or studies.
2. **Collaborator**: Provides read and update access to the projects and studies.
3. **Reviewer**: Provides only read access to all the projects and studies.

:::danger Caution
Please pay attention that one **Team** can have many owners with same permissions to control **Projects** and **Studies**. However, only the **Team** creator has rights to change the settings of the **Team**

**Team** creator is a **Team** owner by default.
:::

Here you can see an animation of creating a new **Team** and adding members there.
<img src="/img/create-team.gif"/>


