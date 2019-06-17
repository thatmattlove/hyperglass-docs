If updating the [branding](../../installation/branding) configuration, you may want to update these attributes manually without restarting hyperglass. `manage.py` contains a command-line tool to do this easily:

```console
# cd /opt/hyperglass/
# python3 manage.py compile-sass
```

Any style related attributes will be recompiled to CSS.
