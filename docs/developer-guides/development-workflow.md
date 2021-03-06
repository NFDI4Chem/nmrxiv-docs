---
sidebar_position: 5
---

# Development Workflow

## Contribution guidelines
Thank you for investing your time in contributing to our project! Any contribution you make will be reflected on [nmrxiv.org](https://nmrxiv.org) after it has passed all the test cases on [dev.nmrxiv.org](https://dev.nmrxiv.org). 
In this guide you will get an overview of the contribution workflow from opening an issue, creating a PR, reviewing, and merging the PR.

### Getting started
Before you start contributing, make sure:
* You have a GitHub account, for information on how to create an account, see [Signing up for GitHub.](https://docs.github.com/en/get-started/signing-up-for-github).
* You have proper access to the [repo](https://github.com/NFDI4Chem/nmrxiv) for your Github account, for which you can contact repository owners.
* You have a code editor installed in your local system, we recommend using [Visual Studio Code](https://code.visualstudio.com/).
* You have cloned the code and have nmrXiv running locally, for which you can follow the step-by-step documentation [here](https://docs.nmrxiv.org/docs/developer-guides/installation/development).

### Issues

#### Create a new issue
If you spot a problem with the application, [search if an issue already exists](https://github.com/NFDI4Chem/nmrxiv/issues). If a related issue doesn't exist, you can open a [new issue](https://github.com/NFDI4Chem/nmrxiv/issues/new/choose) with the appropriate form.
[Click here](https://docs.nmrxiv.org/docs/contributing/contributing-to-nmrxiv-app#did-you-find-a-bug) to learn more about how to create an issue or report a bug.

#### Solve an issue
Scan through our [existing issues](https://github.com/NFDI4Chem/nmrxiv/issues) to find one that interests you. You can narrow down the search using `labels` as filters.

### Workflow

#### Create a branch
Never push your code directly to the `development` or `main` branch. Switch to the `development` branch and create a new branch in your repository. A short, descriptive branch name enables your collaborators to see ongoing work at a glance. The branch name should be all small with words separated by a hyphen, [click here](https://github.com/NFDI4Chem/nmrxiv/branches) to follow some examples. 

#### Make Changes
On your branch, make the desired changes to the repository. Your branch is a safe place to make changes. If you make a mistake, you can revert your changes or push additional changes to fix the mistake. Your changes will not end up on the default branch until you merge your branch. Commit and push your changes to your branch. Give each commit a descriptive message to help you and future contributors understand what changes the commit contains. 
Once your changes are ready, don't forget to self-review to speed up the review process. Also, you have proper comments and indentations all over your code so that it's easy and clean to understand. You can install plugins to your VS Code such as [Prettier](https://marketplace.visualstudio.com/items?itemName=esbenp.prettier-vscode) which will help to auto-format your codes.

#### Create a pull request
When you're finished with the changes, create a pull request(also known as a PR) to the `development` branch.
When you create a pull request, make sure
* You include a summary of the changes and what problem they solve. 
* Your branch has no conflicts with the base branch.
* You have [linked the issue](https://docs.github.com/en/issues/tracking-your-work-with-issues/linking-a-pull-request-to-an-issue), if your pull request addresses an issue. If you link with a keyword, the issue will close automatically when the pull request merges.
* You have assigned a reviewer for faster code review.
<img src="/img/pull_request.gif"/>

#### Address review comments
Reviewers should leave questions, comments, and suggestions. Reviewers can comment on the whole pull request or add comments to specific lines. You and reviewers can insert images or code suggestions to clarify comments.
You can continue to commit and push changes in response to the reviews. Your pull request will update automatically.

#### Merge your pull request
Your pull request can be merged once it is approved by the reviewer. The primary merge should always be made to the `development` branch, from where your code will be deployed to the [staging environment](https://dev.nmrxiv.org) via our [CI/CD pipeline](https://docs.nmrxiv.org/docs/developer-guides/ci-cd). The [staging environment](https://dev.nmrxiv.org) provides the room to test your feature or code changes. Once it has passed all the test cases, your code changes will now be included as part of a release and be deployed finally to the [production environment](https://nmrxiv.org). These actions are restrictive and should only be performed by our repo admins and owners. 

#### Delete your branch
After your branch is merged and the pull request is closed please don't forget to delete your stale branch. This indicates that the work on the branch is complete and prevents you or others from accidentally using old branches. For more information, see [Deleting and restoring branches in a pull request](https://docs.github.com/en/repositories/configuring-branches-and-merges-in-your-repository/managing-branches-in-your-repository/deleting-and-restoring-branches-in-a-pull-request).
<img src="/img/delete_branch.png"/>

:::info Info
* Never leak your secrets or commit local config files(.env) into source control.
* Follow the link to learn more about [Laravel](https://laravel.com/docs/9.x/readme) and [Inertia.js](https://inertiajs.com/) best practices.
:::

## Email Registration

To be able to develop locally, you have to install [Node.js](https://nodejs.org/en/download/) to compile [JavaScript](https://developer.mozilla.org/en-US/docs/Web/JavaScript). 

After having nmrXiv successfully installed and accessing the application in the web browser at [link](http://localhost), you need to create a new account. Press <b>Register</b> button. You will be prompted to enter registration details (<b>Name</b>, <b>Email</b>, <b>Password</b>). Agreeing to the <b>Terms of Service</b> and <b>Privacy Policy</b> by checking the corresponding box is required for the registration. After clicking <b>Register</b>, you will receive an email to confirm your email address, you can access it through [MailHog](https://github.com/mailhog/MailHog). Open a new window in your browser, and go to [http://localhost:8025/](http://localhost:8025/). Open the received email and click <b>Verify Email Address</b>. You will be forwarded to the <b>Dashboard</b>.