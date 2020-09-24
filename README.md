HTTP Client
===========

This web app uses RESTful APIs of some popular online services I am interested in to get some information.

You can view a demo here: [https://scheel.dev/ng-http-client/](https://scheel.dev/ng-http-client/)

## Table of contents
- [What can the app do?](#What-can-the-app-do?)
  - [GitHubRepositories](#GitHubRepositories)
  - [GitHubUserData](#GitHubUserData)
- [Documentation](#Documentation)
  - [Deploy on GitHub Pages](#Deploy-on-GitHub-Pages)

---

What can the app do?
====================

What APIs or services are requested by the application for information? Here is the description of each component the app has to offer. The app can not only request data. In some case it can change or delete data. So beware and watch out what button you want to click.

## GitHubRepositories

Get information of all public repositories a GitHub user owns.

cUrl:
```shell
curl \
  -H "Accept: application/vnd.github.v3+json" \
  https://api.github.com/users/USERNAME/repos
```

* [The tutorial to build this app.](https://www.tektutorialshub.com/angular/angular-http-get-example-using-httpclient/)
* [Source code of the example app.](https://github.com/tekTutorialsHub/HTTP)
* [Getting started with the REST API - official GitHub guide](https://docs.github.com/en/rest/guides/getting-started-with-the-rest-api)

## GitHubUserData

Get all user information a GitHub user has.

cUrl:
```shell
curl \
  -H "Accept: application/vnd.github.v3+json" \
  https://api.github.com/users/USERNAME
```

* [Documentation of the GitHub REST API.](https://docs.github.com/en/rest/reference/users#get-a-user)

---

Documentation
=============

Detailed info of how this app was built and how to handle this app.

## Deploy on GitHub Pages

Deploy the Angular app to GitHub Pages directly from the Angular CLI.

Install angular-cli-ghpages:
```shell
ng add angular-cli-ghpages
```

Deploy on GitHub pages (example: `ng deploy --base-href=https://scheel.dev/<your repositoryname>/`):
```shell
ng deploy --base-href=https://scheel.dev/ng-http-client/
```

OR

If the GitHub user has no custom domain on GitHub Page: `ng deploy --base-href=https://<your username>.github.io/<your repositoryname>/`

## Angular Material

```shell
ng add @angular/material
```

Use the prebuilt theme: Pink/Blue Grey

