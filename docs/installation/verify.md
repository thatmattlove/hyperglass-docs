At this stage, Hyperglass should be able to start up with the built-in Flask development server. This will be enough to verify that the application itself can run, and provie a means to test branding customizations, router connectivity, etc., prior to placing a production-grade WSGI & web server in front of Hyperglass.

```console
$ cd /opt/hyperglass/
$ python3 manage.py dev-server
```

You should now be able to access hyperglass by loading the name or IP on port 5000 in a web browser, for example: `http://localhost:5000`


!!! danger "Flask Development Server"
    The Flask development server is **not** suited for production use, as it is designed to handle one session at a time. Using the development server will simply verify that the application and dependencies have been correctly installed and that hyperglass is working. Production deployment will be covered in the next sections.
