---
id: configuration
title: Configuration
sidebar_label: Configuration
---

hyperglass is configured and customized via three [YAML](https://yaml.org/spec/1.2/spec.html) files, located at `hyperglass/hyperglass/configuration/`. hyperglass is _extremely_ configurable, so there are a lot of configuration parameters. The three files serve distinctly different functions:

## `hyperglass.yaml`

* General (Debugging, Google Analytics, Redis parameters, etc.)
* Branding (Colors, logos, fonts, etc.)
* Features (Enable/disable features, feature display text, etc.)
* Messages (User-facing messages)

:::important
`hyperglass.yaml` _is not_ required to start hyperglass. If the file is not found, hyperglass will start with default parameters.
:::

## `devices.yaml`

* Routers
* Credentials (Usernames/passwords, FRR/BIRD API Keys)
* Proxy servers (SSH jump hosts)
* Networks (Groups of routers)
* VRFs (L3VPNs/routing tables)

:::note
`devices.yaml` **is** required to start hyperglass.
:::

## `commands.yaml`

`commands.yaml` may optionally define arbitrary command profiles that may be referenced by a router in `devices.yaml`. A command structure may override a default command structure, or define one of your own if customizations are needed.

:::important
`commands.yaml` is not required to start hyperglass.
:::

## Migrate Example Configuration Files (Optional)

Examples for each of the three configuration files are provided in `hyperglass/hyperglass/configuration`, ending in `.example`. To automatically copy these example files to `.yaml` files, perform the below step:

``` console
$ python3 manage.py migrate-configs
```

All `*.example` files in `hyperglass/hyperglass/configuration/` will be copied to .yaml files. This is a non-destructive copy, so if you already have *.yaml files in this directory, they will not be overwritten.
