---
id: installation
title: Installation
sidebar_label: Installation
---

## Dependencies

### Python

hyperglass is written with as much [asyncio](https://docs.python.org/3.6/library/asyncio.html) support as possible. As such, **Python 3.6 is a minimum requirement**. You can check which version is running on your system by executing `python3 --version` from the command-line.

#### Installing Python 3.6

<!--DOCUSAURUS_CODE_TABS-->
<!--Ubuntu/Debian-->

``` console
$ sudo add-apt-repository ppa:deadsnakes/ppa
$ sudo apt update
$ sudo apt install -y python3.6 python3-pip
```

<!--Centos/RHEL-->

``` console
$ sudo yum -y install https://centos7.iuscommunity.org/ius-release.rpm
$ sudo yum -y install python36u
$ sudo yum -y install python36u-pip
```

<!--END_DOCUSAURUS_CODE_TABS-->

### System Packages

The following packages are also required for hyperglass to run:

* [Redis](https://redis.io/)
* [Yarn Package Manager](https://yarnpkg.com)

#### Installing system dependencies

<!--DOCUSAURUS_CODE_TABS-->
<!--Ubuntu/Debian-->

``` console
$ curl -sS https://dl.yarnpkg.com/debian/pubkey.gpg | sudo apt-key add -
$ echo "deb https://dl.yarnpkg.com/debian/ stable main" | sudo tee /etc/apt/sources.list.d/yarn.list
$ sudo apt update
$ sudo apt install -y yarn redis-server
```

<!--Centos/RHEL-->

``` console
$ curl -s -L https://rpm.nodesource.com/setup_8.x | sudo bash -
$ curl -s -L https://dl.yarnpkg.com/rpm/yarn.repo | sudo tee /etc/yum.repos.d/yarn.repo
$ sudo yum install epel-release
$ sudo yum update
$ sudo yum -y install yarn redis
```

<!--END_DOCUSAURUS_CODE_TABS-->

#### Start Redis

<!--DOCUSAURUS_CODE_TABS-->
<!--Ubuntu/Debian-->

``` console
$ sudo systemctl enable redis-server
$ sudo systemctl restart redis-server
$ redis-cli ping
PONG
```

<!--Centos/RHEL-->

``` console
$ sudo systemctl enable redis
$ sudo systemctl restart redis
$ redis-cli ping
PONG
```

<!--END_DOCUSAURUS_CODE_TABS-->

## Download hyperglass

``` console
$ cd /opt/
$ git clone https://github.com/checktheroads/hyperglass.git
$ cd hyperglass/
```

### Install Python Packages

From `/opt/hyperglass/` :

``` console
$ cd /opt/hyperglass/
$ pip3 install -r requirements.txt
```

