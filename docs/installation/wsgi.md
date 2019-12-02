For production builds, you'll want to have a real WSGI front end instead of the built in Flask developer web server. While any WSGI could be used, [Gunicorn](https://gunicorn.org/) is the recommended WSGI and is included with hyperglass by default.

!!! info "Alternative WSGIs"
    If you choose to use a different WSGI, be sure to look closely at `hyperglass/hyperglass/gunicorn_config.py.example` to properly replicate configurations for Prometheus metrics with multiple workers, single-worker Sass compilation, and Redis testing.

## Configure

Migrate the example Gunicorn configuration file:

```console
$ cd /opt/hyperglass/
$ python3 manage.py migrate-gunicorn
```

Open `hyperglass/hyperglass/gunicorn_config.py`, and adjust the parameters to match your local system. For example, make sure the `command` parameter matches the location of your `gunicorn` executable (`which gunicorn`), the `pythonpath` parameter matches the location where hyperglass is installed, and that the `user` parameter matches the user you're running hyperglass as.

!!! warning "Reverse Proxy Required"
    Gunicorn is not designed to be a front-end web server, and therefore requires the use of a reverse proxy of some kind. The Gunicorn development team recommends the use of [NGINX](https://www.nginx.com/), for which [installation instructions have been provided](../reverseproxy).

### Permissions

Gunicorn requires read/write/executable access to the entire `hyperglass/hyperglass` directory in order to read its configuration and execute the python code. If running gunicorn as `www-data`, fix permissions with:

```console
# cd /opt/hyperglass/
# python3 manage.py update-permissions --user <user> --group <group>
```

!!! info "File Ownership"
    If the `--user` and `--group` options are not specified, `www-data` will be used.
