#### Python Dependencies

```console
$ cd /opt/hyperglass/
$ pip3 install -r requirements.txt
```

#### Migrate Configuration Files

```console
$ cd /opt/hyperglass/
$ python3 manage.py migrate-configs
```

All `*.example` files in `hyperglass/hyperglass/configuration/` will be copied to `.toml` extension for use by hyperglass. This is a non-destructive copy, so if you already have `*.toml` files in this directory, they will *not* be overwritten.
