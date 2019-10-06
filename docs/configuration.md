---
id: configuration
title: Configuration
sidebar_label: Configuration
---

## Migrate Example Configuration Files (Optional)

``` console
$ python3 manage.py migrate-configs
```

All `*.example` files in `hyperglass/hyperglass/configuration/` will be copied to .yaml files. This is a non-destructive copy, so if you already have *.yaml files in this directory, they will not be overwritten.

## Configuration Structure

hyperglass is _extremely_ configurable, so there are a lot of configuration parameters. Each of the following files contain the listed configuration structures:

### `hyperglass.yaml` 

* General
* Branding
* Features
* Messages

`hyperglass.yaml` is not required to start hyperglass.

### `devices.yaml` 

* Router
* Credential
* Proxy
* Network
* VRF

`devices.yaml` **is** required to start hyperglass.

### `commands.yaml` 

`commands.yaml` is not required to start hyperglass.

