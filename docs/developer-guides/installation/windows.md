---
sidebar_position: 2
id: windows
title: Windows
---

nmrXiv project is built with [Laravel](https://laravel.com/docs/8.x) web application framework which comes with [Sail](https://laravel.com/docs/8.x/sail), a built-in solution for running your Laravel project using Docker. 
The whole project is a package of below services and features.
* [PostgreSQL](https://www.postgresql.org/docs/)
* [Redis](https://redis.io/docs/)
* [Selenium](https://www.selenium.dev/documentation/)
* [Meilisearch](https://docs.meilisearch.com/)
* [MailHog](https://mailtrap.io/blog/mailhog-explained/)

### Dependencies
* [git](https://git-scm.com/).
* [Docker Desktop](https://www.docker.com/products/docker-desktop).
* [Ubuntu app](https://www.microsoft.com/store/productId/9NBLGGH4MSV6) (Recommended).
* [Composer](https://getcomposer.org/), which can be installed following the [Windows installer guidelines](https://getcomposer.org/download/).
* [Windows Subsystem for Linux 2 (WSL2)](https://docs.microsoft.com/en-us/windows/wsl/). 

Make sure to enable and install WSL, and to upgrade it to WSL2 as described in the [guidelines](https://docs.microsoft.com/en-us/windows/wsl/install-win10). WSL allows you to run Linux binary executables natively on Windows 10.

To check the WSL mode, open **Windows Powershell** and run:

```bash
wsl.exe -l -v
```

To upgrade your existing Linux distro to v2, run:
```bash
wsl.exe --set-version (distro name) 2
```

:::important

After installing and enabling WSL2, you should ensure that Docker Desktop is [configured to use the WSL2 backend.](https://docs.docker.com/desktop/windows/wsl/)

:::


### Setup:
* Start Docker.
* Open [Ubuntu](https://www.microsoft.com/store/productId/9NBLGGH4MSV6) shell and clone the repo using the below command to your home directory. 
We recommend running the project from your Linux directory and not from your local windows file system, for faster compilation and execution.
```bash
cd /home/
git clone https://github.com/NFDI4Chem/nmrxiv.git
```
* Go to the project directory:
```bash
cd nmrxiv
```
* Navigate to the development branch:
```bash
git checkout development
```
* Create an `.env` file, and copy the existing `.env.example` into it:
```bash
cp .env.example .env 
```
* Update the dependencies from the `composer.json` file: 
```bash
composer update
```
* Install the dependencies from the `composer.lock` file:
```bash
composer install
```
* Start [Sail](https://laravel.com/docs/8.x/sail#starting-and-stopping-sail) to build application containers on your machine:
```bash
./vendor/bin/sail up
```
* Run the below command to migrate the database with some dummy values.
Don't forget to note down the admin's user id and password prompted at the end of migration output.
```bash
./vendor/bin/sail artisan migrate:refresh --seed
```

* Make sure you have node version > 16 installed in your WSL. Open another terminal and run the below command to boot up your local static web server.
```bash
npm install
npm run dev
```

Once the application's Docker containers have been started, you can access the application in your web browser at [http://localhost](http://localhost). But first, you will be prompted to <b>Generate app key</b>. After pressing the generation button, the following message is shown on the screen: "The solution was executed successfully. Refresh now." After refreshing, you can access the application.

Run `code .` to open the code base to your VSCode editor. 
Thanks to [Vite](https://vitejs.dev/guide/) that any changes you make to the javascript file would be reflected in your browser immediately without requiring any refresh.

:::caution Recommendation
Follow our [code contribution guidelines](/docs/developer-guides/code-contribution-guidelines) to make a pull request.
:::
:::info Info
Click to learn more about [Laravel](https://laravel.com/docs/9.x) and [installation guides](https://laravel.com/docs/9.x/installation).
:::

