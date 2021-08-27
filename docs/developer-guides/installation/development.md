---
sidebar_position: 2
id: development
title: Development
---

nmrXiv project is built with [Laravel](https://laravel.com/docs/8.x) web application framework which comes with [Sail](https://laravel.com/docs/8.x/sail), a built-in solution for running your Laravel project using Docker. 
The whole project is a package of below services and features.
* Mysql - Database.
* Redis - an open source, advanced key-value store.
* Selenium - testing framework.
* Meilisearch - search engine.
* MailHog - mail testing server for development environment.


### Getting started on Mac

#### Dependencies


### Getting started on Windows

Before you clone the nmrXiv repository in our local machine, make sure to install [Docker Desktop](https://www.docker.com/products/docker-desktop). 
Next, you should ensure that Windows Subsystem for Linux 2 (WSL2) is installed and enabled. WSL allows you to run Linux binary executables natively on Windows 10.

To check the WSL mode, open the Windows Powershell and run:

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

After the Docker installation is done follow below steps to clone the project and basic setups
* Clone the project from our [Github repo.](https://github.com/NFDI4Chem/nmrxiv)
* Switch to development branch.
* Go to the project directory and create a `.env` file and copy the existing `.env.example` into it.
* Run below command to build application containers on your machine. 
```bash
./vendor/bin/sail up
```
Once the application's Docker containers have been started, you can access the application in your web browser at: http://localhost.
But now as you have the DB setup still pending you will face errors on the browser. To accomplish the DB setup first install any Native tool for Database Management of your choice on your local system.
We prefer using [Table Plus](https://tableplus.com/download) or [DBeaver.](https://dbeaver.io/download/)
Connect to the DB using connection details given in `.env.example` file and create a DB named as `nmrxiv` while the mysql container is running in the background. 

Once the DB setup is done migrate the DB data by running below command
```bash
./vendor/bin/sail artisan migrate 
```
Now that you have completed the DB setup refresh you web browser to access the application!!! 

:::info

To get more easy view of your containers open your Docker Desktop application.

:::


### Getting started on Linux

To do..

### Troubleshooting

* In case if you have messed up with the DB connections or created the conatiner without cretaing the .env file, we recommend deleting all the volumes and existing images and containers and start with fresh build of containers creation after the rectification.
