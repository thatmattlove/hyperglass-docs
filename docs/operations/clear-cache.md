There may be times, for troubleshooting reasons or otherwise, that you need to clear the [hyperglass cache](installation/features/#caching). `manage.py` contains a command-line tool to do this easily:

```console
# cd /opt/hyperglass/
# python3 manage.py clear-cache
```
This will instruct Redis to drop all keys in the cache database.
