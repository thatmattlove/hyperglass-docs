hyperglass is maintained as a [Github project](https://github.com/checktheroads/hyperglass) under the BSD 3-Clause Clear License. hyperglass users are encouraged to submit Github issues for feature requests and bug reports.

## License

The intent behind the the [BSD 3-Clause Clear License](https://choosealicense.com/licenses/bsd-3-clause-clear/) is to ensure that anyone can use or modify Hyperglass in any way they wish, as long as credit and copyright notice is provided. If you have any questions about this, or wish to request any special permissions, please contact [matt@allroads.io](mailto:matt@allroads.io).

## Guidelines

### PEP8

hyperglass is arrogantly maintained with a 10/10 [Pylint](https://www.pylint.org/) rating, with minimal exceptions made (and documented in `.pylintrc`). Pull requests will fail in CI if the code is rated below 10/10.

### Code Style

All Python code in hyperglass must pass [Black](https://github.com/python/black) formatting standards. hyperglass is developed in [Atom](https://atom.io/) with automatic Black formatting, but the [`black` Python package](https://pypi.org/project/black/) can also be used. Pull requests will fail in CI if the code is not black-formatted.
