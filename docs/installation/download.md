#### System Requirements

!!! warning "Compatibility"
    To date, hyperglass has only been installed tested on Ubuntu Linux 18.04, and was developed on macOS 10.14. Installation instructions are specific to Ubuntu 18.04. Installation instructions for additional operating systems are forthcoming (contributions welcome!).

#### OS Dependencies

##### Python
Due to the extensive use of Python's [f-string](https://docs.python.org/3/reference/lexical_analysis.html#f-strings) feature (introduced in Python 3.6) within hyperglass, **Python 3.6 is a minimum requirement**. Ubuntu 18.04 comes pre-installed with Python 3.6, but if you are running a previous Ubuntu version, you can install Python 3.6 and PyPi 3 on your system:

```console
# add-apt-repository ppa:deadsnakes/ppa
# apt update
# apt install -y python3.6 python3-pip
```

##### Redis
[Redis](https://redis.io/) must be installed and running prior to starting hyperglass. Redis is used to cache hyperglass query output, as well as store rate-limiting data for the [Rate Limiting](../features/#rate-limiting) feature.

```console
# apt install -y redis
# systemctl status redis-server
```

#### Clone the hyperglass repository

```console
$ cd /opt/
$ git clone https://github.com/checktheroads/hyperglass
```
