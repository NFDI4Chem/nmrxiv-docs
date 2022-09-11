---
sidebar_position: 3
id: Ubuntu
title: Ubuntu
---

nmrXiv project is built with [Laravel](https://laravel.com/docs/8.x) web application framework which comes with [Sail](https://laravel.com/docs/8.x/sail), a built-in solution for running your Laravel project using Docker. 
The whole project is a package of below services and features.
* [PostgreSQL](https://www.postgresql.org/docs/)
* [Redis](https://redis.io/docs/)
* [Selenium](https://www.selenium.dev/documentation/)
* [Meilisearch](https://docs.meilisearch.com/)
* [MailHog](https://mailtrap.io/blog/mailhog-explained/)

#### Ubuntu 20.04

### Dependencies
* [git](https://git-scm.com/).
* [PHP](https://www.php.net/manual/en/install.php).
* [Composer]( https://getcomposer.org/download/).
* [Docker Engine](https://docs.docker.com/engine/install/ubuntu/).
* [Docker Compose](https://docs.docker.com/compose/install/) for Linux.

### Setup:
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

:::caution Recommendation
Follow our [code contribution guidelines](/docs/developer-guides/code-contribution-guidelines) to make a pull request.
:::

:::info Info
Click to learn more about [Laravel](https://laravel.com/docs/9.x) and [installation guides](https://laravel.com/docs/9.x/installation).
:::