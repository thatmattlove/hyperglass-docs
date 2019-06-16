To upgrade hyperglass, assuming the default installation directories and recommendations are used, perform the following steps:

```console
# cd /opt/hyperglass/
# systemctl stop hyperglass
# git fetch
# git reset --hard origin/master
# python3 manage.py update-permissions
# systemctl restart hyperglass
```
