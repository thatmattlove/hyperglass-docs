---
id: production
title: Running hyperglass in Production
sidebar_label: Production
---

## Web Server

hyperglass uses [Sanic](https://github.com/huge-success/sanic) as the web framework. Sanic has [multiple options](https://sanic.readthedocs.io/en/latest/sanic/deploying.html) for deploying in production environments. Included at `/opt/hyperglass/hyperglass/web.py` is the built-in worker option, which spins up as many workers as there are CPU cores on the hyperglass server. This should be sufficient for most builds, but please [open an issue](https://github.com/checktheroads/hyperglass/issues) if you run into any problems.

### Starting hyperglass

To start hyperglass using the provided worker method, execute the Sanic module from `/opt/hyperglass/` :

``` 
$ cd /opt/hyperglass/
$ python3 -m sanic hyperglass.web.app
```

### Running hyperglass as a system service

More than likely, you'll want to run Hyperglass as a service so that it automatically starts on server boot. Any service manager can be used, however `systemd` examples are included as a reference:

<!--DOCUSAURUS_CODE_TABS-->
<!--Ubuntu/Debian-->

``` 
# hyperglass.service
[Unit]
Description=hyperglass
After=network.target
Requires=redis-server.service

[Service]
User=www-data
Group=www-data
WorkingDirectory=/opt/hyperglass
ExecStart=/usr/bin/python3 -m sanic hyperglass.web.app

[Install]
WantedBy=multi-user.target
```

<!--Centos/RHEL-->

``` 
# hyperglass.service
[Unit]
Description=hyperglass
After=network.target
Requires=redis.service

[Service]
User=www-data
Group=www-data
WorkingDirectory=/opt/hyperglass
ExecStart=/usr/bin/python3 -m sanic hyperglass.web.app

[Install]
WantedBy=multi-user.target
```

<!--END_DOCUSAURUS_CODE_TABS-->

Most Linux distributions using `systemd` keep their service files at `/etc/systemd/system/` . If your distribution does not keep its service files here, please consult your distribution's documentation.

After creating the service file, enable and start the service:

``` console
$ sudo systemctl enable hyperglass
$ sudo systemctl restart hyperglass
```

## Reverse Proxy

It is strongly recommended to use a reverse proxy such as [NGINX](https://www.nginx.com/) or [Caddy](https://caddyserver.com/) for both security and performance. Examples are included below:

<!--DOCUSAURUS_CODE_TABS-->
<!--NGINX (HTTP)-->

``` 
geo $not_prometheus_hosts {
  default 1;
  192.0.2.1/32 0;
}
server {
  listen 80;
  listen [::]:80 ipv6only=on;

  client_max_body_size 1024;

  server_name lg.domain.tld;

  location /metrics {
    if ($not_prometheus_hosts) {
      rewrite /metrics /getyourownmetrics;
    }
    try_files $uri @proxy_to_app;
  }

  location /static/ {
    alias /opt/hyperglass/hyperglass/static/;
  }

  location / {
      try_files $uri @proxy_to_app;
  }

  location @proxy_to_app {
    proxy_set_header X-Real-IP $remote_addr;
    proxy_set_header X-Forwarded-For $proxy_add_x_forwarded_for;
    proxy_set_header X-Forwarded-Proto $scheme;
    proxy_set_header Host $http_host;
    proxy_redirect off;
    proxy_pass http://[::1]:8001;
  }

}
```

<!--NGINX (HTTPS)-->

``` 
geo $not_prometheus_hosts {
  default 1;
  192.0.2.1/32 0;
}
server {
  listen 80;
  listen [::]:80;
  server_name lg.domain.tld;
  return 301 https://$host$request_uri;
}
server {

  listen [::]:443 ssl ipv6only=on;
  listen 443 ssl;
  ssl_certificate <path to certificate>;
  ssl_certificate_key <path to private key>;

  client_max_body_size 1024;

  server_name lg.domain.tld;

  location /metrics {
    if ($not_prometheus_hosts) {
      rewrite /metrics /getyourownmetrics;
    }
    try_files $uri @proxy_to_app;
  }

  location /static/ {
    alias /opt/hyperglass/hyperglass/static/;
  }

  location / {
      try_files $uri @proxy_to_app;
  }

  location @proxy_to_app {
    proxy_set_header X-Real-IP $remote_addr;
    proxy_set_header X-Forwarded-For $proxy_add_x_forwarded_for;
    proxy_set_header X-Forwarded-Proto $scheme;
    proxy_set_header Host $http_host;
    proxy_redirect off;
    proxy_pass http://[::1]:8001;
  }

}
```

<!--END_DOCUSAURUS_CODE_TABS-->

### Prometheus Metrics

The `/metrics` block will ensure that hosts defined in the `geo $not_prometheus_hosts` directive are allowed to reach the `/metrics` URI, which exposes [Prometheus metrics](/metrics), but that any other hosts will have the a request for `/metrics` rewritten to `/getyourownmetrics` , which will render the 404 error page.

## SSL

[Let's Encrypt](https://letsencrypt.org/) provides automatic (and free) SSL certificate generation and renewal. There are a number of guides available on how to integrate Let's Encrypt with Nginx (or your reverse proxy of choice). Some examples:

* Digital Ocean: [How To Secure Nginx with Let's Encrypt on Ubuntu 18.04](https://www.digitalocean.com/community/tutorials/how-to-secure-nginx-with-let-s-encrypt-on-ubuntu-18-04)
* Digital Ocean: [How To Secure Nginx with Let's Encrypt on CentOS 7](https://www.digitalocean.com/community/tutorials/how-to-secure-nginx-with-let-s-encrypt-on-centos-7)
* NGINX: [Using Free Let’s Encrypt SSL/TLS Certificates with NGINX](https://www.nginx.com/blog/using-free-ssltls-certificates-from-lets-encrypt-with-nginx/)

