---
sidebar_position: 2
id: development
title: Development
---

nmrXiv project is built with [Laravel](https://laravel.com/docs/8.x) web application framework which comes with [Sail](https://laravel.com/docs/8.x/sail), a built-in solution for running your Laravel project using Docker. 
The whole project is a package of below services and features.
* PostgreSQL - database.
* Redis - an open-source, advanced key-value store.
* Selenium - testing framework.
* Meilisearch - search engine.
* MailHog - mail testing server for the development environment.


### Installing on macOS

##### Dependencies
* [git](https://git-scm.com/).
* [Docker Desktop](https://www.docker.com/products/docker-desktop). 
* [Composer](https://getcomposer.org/)

##### Setup:
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
Don't forget to note down the admin's user id and password provided at the end of migration output.
```bash
./vendor/bin/sail artisan migrate:refresh --seed
```

* Open another terminal and run the below command to boot up your local static web server.
```bash
npm install && npm run dev
```

Once the application's Docker containers have been started, you can access the application in your web browser at [http://localhost](http://localhost). But first, you will be prompted to <b>Generate app key</b>. After pressing the generation button, the following message is shown on the screen: "The solution was executed successfully. Refresh now." After refreshing, you access the application.


### Installing on Windows

##### Dependencies
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


##### Setup:
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
Don't forget to note down the admin's user id and password provided at the end of migration output.
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


:::info

To get a more easy view of your containers, open your Docker Desktop application.

:::


### Installing on Linux

#### Ubuntu 20.04

##### Dependencies
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
Don't forget to note down the admin's user id and password provided at the end of migration output.
```bash
./vendor/bin/sail artisan migrate:refresh --seed
```

* Open another terminal and run the below command to boot up your local static web server.
```bash
npm install && npm run dev
```

Once the application's Docker containers have been started, you can access the application in your web browser at [http://localhost](http://localhost). But first, you will be prompted to <b>Generate app key</b>. After pressing the generation button, the following message is shown on the screen: "The solution was executed successfully. Refresh now." After refreshing, you access the application.

#### CentOS 8

#### Dependencies
* [git]
* [PHP 8.0 or more]
* [Composer]
* [Docker Engine]
* [Docker Compose]

#### Setup:

Install GIT
```
$ sudo dnf update -y
$ sudo dnf install git -y
$ git --version
```

Install docker
```
$  sudo yum remove docker \
                  docker-client \
                  docker-client-latest \
                  docker-common \
                  docker-latest \
                  docker-latest-logrotate \
                  docker-logrotate \
                  docker-engine

# Install using the repository
$ sudo yum install -y yum-utils
$ sudo yum-config-manager \
    --add-repo \
    https://download.docker.com/linux/centos/docker-ce.repo

$ sudo yum install docker-ce docker-ce-cli containerd.io

# If podman / buildah packages conflict with the docker installation. You need to remove those packages using the following command and reinstall docker again

$ sudo yum erase podman buildah
$ sudo systemctl start docker
$ sudo docker run hello-world
```

Install docker compose

```
$ curl -L "https://github.com/docker/compose/releases/download/1.27.4/docker-compose-$(uname -s)-$(uname -m)" -o /usr/local/bin/docker-compose
$ chmod +x /usr/local/bin/docker-compose
```

Now that we have installed docker and docker-compose. Let's install PHP >8.0 and composer to get started with Laravel sail

Install PHP 8.0

```
$ sudo dnf -y install https://dl.fedoraproject.org/pub/epel/epel-release-latest-8.noarch.rpm
$ sudo dnf -y install https://rpms.remirepo.net/enterprise/remi-release-8.rpm
$ sudo dnf -y install yum-utils
$ sudo dnf module reset php
$ sudo dnf module install php:remi-8.0 -y
$ sudo dnf install php -y
$ sudo dnf -y install php-{cli,fpm,mysqlnd,zip,devel,gd,mbstring,curl,xml,pear,bcmath,json}
```

Install composer

Please replace the 'hash' in the command below from the composer site [here](https://getcomposer.org/download/)

```
$ php -r "copy('https://getcomposer.org/installer', 'composer-setup.php');"
$ php -r "if (hash_file('sha384', 'composer-setup.php') === '<hash>') { echo 'Installer verified'; } else { echo 'Installer corrupt'; unlink('composer-setup.php'); } echo PHP_EOL;"
$ php composer-setup.php
$ php -r "unlink('composer-setup.php');"
```

Now with composer installed lets go ahead and install all the php dependencies. But before we can do that we need to clone the project locally.

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
* Install the dependencies from the `composer.lock` file:
```bash
composer install
```
* Start [Sail](https://laravel.com/docs/8.x/sail#starting-and-stopping-sail) to build application containers on your machine:
```bash
./vendor/bin/sail up
```

If your sail could not find the docker you need to open up the docker binary permissions using the following command

```
$ sudo chmod 666 /var/run/docker.sock
```

If your docker is failing to download os packages you need to update your firewall settings

In your config file 

``` 
$ sudo nano /etc/firewalld/firewalld.conf
```

please change

```
FirewallBackend=nftables
```

to 
```
FirewallBackend=iptables
```

Save this change and reload firewall

```
$ sudo systemctl restart firewalld.service
```

Once the application's Docker containers have been started, you can access the application in your web browser at [http://localhost](http://localhost). 

If you find the error message indicating the app key doesn't exist. You will be prompted to <b>Generate app key</b> (you will find the button on the error page below the error message). After pressing the generation button, the following message is shown on the screen: "The solution was executed successfully. Refresh now." After refreshing, you access the application.

At this stage, you haven't run the application migrations (no database tables for the application to connect to). Again you will be prompted with an error message. You will also find a button just below the message to run migrations. Please click it and you are good to go.

For local development, you will need nodejs and npm to install and compile node packages

```
$ sudo dnf install -y gcc-c++ make 
$ curl -sL https://rpm.nodesource.com/setup_16.x | sudo -E bash - 
```

Install all the npm packages
```
$ npm install
```

Compile Javascript code
```
$ npm run build
```

In order to actively watch and compile changes
```
$ npm run watch
```

### After installation
Please refer to the following [link](http://docs.nmrxiv.org/docs/developer-guides/development-workflow) for the next steps.

### Troubleshooting

#### Errors

#### Others
* In case you have messed up with the DB connections or created the container without creating the `.env` file, we recommend deleting all the volumes and existing images and containers and starting with a fresh build of container creation after the rectification.
