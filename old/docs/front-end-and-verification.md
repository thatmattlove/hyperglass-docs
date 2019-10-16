---
id: front-end-and-verification
title: Front-End Assets & Verification
sidebar_label: Front-End Assets & Verification
---

## Front-End Assets

hyperglass uses [NPM](https://www.npmjs.com/), the commonly used JavaScript package manager, to manage front-end (GUI) dependencies. During the initial installation of hyperglass, these dependencies must be downloaded and initialized in order for hyperglass to run properly. It is recommended to perform this initialization after [configuring](/configuration) all the relevant [branding](/hyperglass-yaml#branding) parameters.

### Rendering

From the `/opt/hyperglass/hyperglass/static` directory, download front-end dependencies with `yarn` :

``` console
$ cd /opt/hyperglass/hyperglass/static/
$ yarn
```

Next, from the `/opt/hyperglass/` directory, render the front-end assets using the provided hyperglass management tool:

``` console
$ cd /opt/hyperglass/
$ python3 manage.py --render-assets
```

## Verification

Finally, make sure hyperglass is able to start by running the development server:

``` console
$ cd /opt/hyperglass/
$ python3 manage.py --dev-server
```

:::warning Development Server
Running the web server in this manner is handy for quick testing, but it is not designed for production, or even heavy testing as only one query can run at a time. To run hyperglass in production, see the [Production](/production) section.
:::

