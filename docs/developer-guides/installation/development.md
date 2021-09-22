---
sidebar_position: 2
id: development
title: Development
---

nmrXiv project is built with [Laravel](https://laravel.com/docs/8.x) web application framework which comes with [Sail](https://laravel.com/docs/8.x/sail), a built-in solution for running your Laravel project using Docker. 
The whole project is a package of below services and features.
* Mysql - database.
* Redis - an open source, advanced key-value store.
* Selenium - testing framework.
* Meilisearch - search engine.
* MailHog - mail testing server for development environment.


### Getting started on Mac

#### Dependencies
* [git](https://git-scm.com/).
* [Docker Desktop](https://www.docker.com/products/docker-desktop). 
* [Composer](https://getcomposer.org/), which can be installed using [Homebrew](https://brew.sh/) by opening the chosen directory in the terminal and running:
```bash
brew install composer
```
#### Setup:
* Start Docker.
* Open your chosen directory in the terminal.
* Clone the [project from Github](https://github.com/NFDI4Chem/nmrxiv) by running:
```bash
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
* Update the depencencies from the `composer.json` file: 
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

Once the application's Docker containers have been started, you can access the application in your web browser at [http://localhost](http://localhost). But first, you will be prompted to <b>Generate app key</b>. After pressing the generation button, the following message is shown on the screen: "The solution was executed successfully. Refresh now." After refreshing, you access the application.


### Getting started on Windows

#### Dependencies
* [git](https://git-scm.com/).
* [Docker Desktop](https://www.docker.com/products/docker-desktop).
* [Composer](https://getcomposer.org/), which can be installed following the [Windows installer guidelines](https://getcomposer.org/download/).
* [Windows Subsystem for Linux 2 (WSL2)](https://docs.microsoft.com/en-us/windows/wsl/). Make sure to enable and install WSL, and upgrade it to WSL2 as described in the [guidelines](https://docs.microsoft.com/en-us/windows/wsl/install-win10). WSL allows you to run Linux binary executables natively on Windows 10.

To check the WSL mode, open Windows Powershell and run:

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
* [Ubuntu app](https://www.microsoft.com/store/productId/9NBLGGH4MSV6)(Recommended).

#### Setup:
* Start Docker.
* Open your chosen directory in [Ubuntu](https://www.microsoft.com/store/productId/9NBLGGH4MSV6) shell.
* Clone the [project from Github](https://github.com/NFDI4Chem/nmrxiv) by running:
```bash
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
* Update the depencencies from the `composer.json` file: 
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

Once the application's Docker containers have been started, you can access the application in your web browser at [http://localhost](http://localhost). But first, you will be prompted to <b>Generate app key</b>. After pressing the generation button, the following message is shown on the screen: "The solution was executed successfully. Refresh now." After refreshing, you access the application.

:::info

To get more easy view of your containers open your Docker Desktop application.

:::


### Getting started on Linux
This installation was tested on Ubuntu 20.04.
#### Dependencies
* [git](https://git-scm.com/).
* [PHP](https://www.php.net/manual/en/install.php).
* [Composer]( https://getcomposer.org/download/).
* [Docker Engine](https://docs.docker.com/engine/install/ubuntu/).
* [Docker Compose](https://docs.docker.com/compose/install/) for Linux.

#### Setup:
* Start Docker.
* Open your chosen directory in the terminal.
* Clone the [project from Github](https://github.com/NFDI4Chem/nmrxiv) by running:
```bash
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
* Update the depencencies from the `composer.json` file: 
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
Once the application's Docker containers have been started, you can access the application in your web browser at [http://localhost](http://localhost). But first, you will be prompted to <b>Generate app key</b>. After pressing the generation button, the following message is shown on the screen: "The solution was executed successfully. Refresh now." After refreshing, you access the application.

### After installation
Please refer to the following [link](http://docs.nmrxiv.org/docs/developer-guides/development-workflow) for the next steps.
### Troubleshooting

#### Errors
#### Others

* In case if you have messed up with the DB connections or created the conatiner without cretaing the `.env` file, we recommend deleting all the volumes and existing images and containers and start with fresh build of containers creation after the rectification.
