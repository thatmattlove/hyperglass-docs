<style>
.bd-color {
    border-radius: 1px;
    box-shadow: 0 1px 2px 0 rgba(0,0,0,.1), inset 0 0 0 1px rgba(0,0,0,.1);
    display: inline-block;
    float: left;
    height: 16px;
    margin-right: 2px;
    width: 16px;
}
</style>

## Site Parameters

From `hyperglass/hyperglass/configuration/configuration.toml` `[branding]` table.

`[branding]`

| Key Name    | Type   | Default Value  | Function                                                       |
|-------------|--------|----------------|----------------------------------------------------------------|
| `site_name` | String | `"hyperglass"` | HTML `<title>` element that is shown in a browser's title bar. |

### Footer
`[branding.footer]`

| Key Name | Type    | Default Value | Function                                   |
|----------|---------|---------------|--------------------------------------------|
| `enable` | Boolean | `true`        | Enables or disables entire footer element. |

The footer text itself can be customized by adding a [Markdown](https://github.com/adam-p/markdown-here/wiki/Markdown-Cheatsheet) document to `hyperglass/hyperglass/render/templates/info/details/footer.md`. The example file, `footer.md.example`, can be copied to `footer.md` and modified. All Markdown files in this directory are excluded from change control and will not be overwritten when hyperglass is updated.

!!! danger "TOML Front Matter Required"
    The TOML Front Matter in the default example files is **required**, even if no attributes are used. If it is not present, the rendering backend will fail to render the main page.

###  Credit
`[branding.credit]`

| Key Name | Type    | Default Value | Function                                                                               |
|----------|---------|---------------|----------------------------------------------------------------------------------------|
| `enable` | Boolean | `true`        | Enables or disables text below the footer element, which links to the hyperglass repo. |

###  PeeringDB
`[branding.peering_db]`

| Key Name | Type    | Default Value | Function                                                                                                                                                                                                         |
|----------|---------|---------------|------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------|
| `enable` | Boolean | `true`        | Enables or disables the PeeringDB link in the upper right corner. If `true`, the [primary_asn](../configuration/#general-parameters) will be automatically used to create the URL to your ASN's PeeringDB entry. |

### Site Text
`[branding.text]`

| Key Name     | Type   | Default Value        | Function                                     |
|--------------|--------|----------------------|----------------------------------------------|
| `title_mode` | String | `"logo_only"`        | Controls the title section on the main page. |
| `title`      | String | `"hyperglass"`       |                                              |
| `subtitle`   | String | `"AS" + primary_asn` |                                              |

`title_mode` Options:

-   `"all"` Displays Title, and Subtitle text, and logo defined in `logo_path`.
-   `"logo_only"` Hides Title and Subtitle text, displays logo defined in `logo_path`.
-   `"text_only"` Hides logo, displays Title and Subtitle text.
-   `"logo_title"` Displays Title, and logo defined in `logo_path`.

| Key Name            | Type   | Default Value                         | Function                                                                             |
|---------------------|--------|---------------------------------------|--------------------------------------------------------------------------------------|
| `query_type`        | String | `"Query Type"`                        | Placeholder text that appears in the Query Type dropdown.                            |
| `results`           | String | `"Results"`                           | Title text used for the results message box which contains the results of the query. |
| `location`          | String | `"Select Location..."`                | Placeholder text that appears in the Location dropdown.                              |
| `query_placeholder` | String | `"IP, Prefix, Community, or AS Path"` | Placeholder text that appears in the main search box.                                |
| `bgp_route`         | String | `"BGP Route"`                         | Dropdown text used for the BGP Route query type.                                     |
| `bgp_community`     | String | `"BGP Community"`                     | Dropdown text used for the BGP Community query type.                                 |
| `bgp_aspath`        | String | `"BGP AS Path"`                       | Dropdown text used for the BGP AS Path query type.                                   |
| `ping`              | String | `"Ping"`                              | Dropdown text used for the Ping query type.                                          |
| `traceroute`        | String | `"Traceroute"`                        | Dropdown text used for the Traceroute query type.                                    |


#### 404 Error Page Text
`[branding.text.404]`

The 404 error page will be displayed if a user attempts to visit any non-existent URI, e.g. `http://lg.domain.tld/this_isnt_real`

| Key Name   | Type   | Default Value      |
|------------|--------|--------------------|
| `title`    | String | `"Error"`          |
| `subtitle` | String | `"Page Not Found"` |


#### 500 Error Page Text
 `[branding.text.500]`

The 500 error page will be displayed if there is a backend problem or if an exception is raised. If you get this page, you should probably enable debug mode to find out why.

| Key Name   | Type   | Default Value            |
|------------|--------|--------------------------|
| `title`    | String | `"Error"`                |
| `subtitle` | String | `"Something Went Wrong"` |

### Logo & Favicon
`[branding.logo]`

| Key Name   | Type   | Default Value                         | Function                                                                                                                                                                                                                                                                                                       |
|------------|--------|---------------------------------------|----------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------|
| `path`     | String | `"static/images/hyperglass-dark.png"` | Sets the path to the logo file. This file can be any browser-compatible format, such as JPEG, PNG, or SVG.                                                                                                                                                                                                     |
| `width`    | String | `"384"`                               | Sets the width of the logo defined in the `logo_path` parameter. This is helpful if your logo is a dimension that doesn't quite work with the default width.                                                                                                                                                   |
| `favicons` | String | `"static/images/favicon/"`            | Sets the path to the favicons directory (must have a trailing `/`). For full browser and platform comatability, it is recommended to use [RealFaviconGenerator](https://realfavicongenerator.net/) and place all the generated files in `static/custom/images/favicon/` (and update the `favicons` parameter). |

### Colors
`[branding.color]`

| Key Name        | Type   | Default Value                                                     | Function                                                                      |
|-----------------|--------|-------------------------------------------------------------------|-------------------------------------------------------------------------------|
| `background`    | String | <span class="bd-color" style="background-color: #fbfffe;"></span> | Sets the background color of the main page.                                   |
| `button_submit` | String | <span class="bd-color" style="background-color: #40798c;"></span> | Sets color of the submit button.                                              |
| `danger`        | String | <span class="bd-color" style="background-color: #ff3860;"></span> | Sets color of the Bulma "danger" class, which is used for user-facing errors. |
| `progress_bar`  | String | <span class="bd-color" style="background-color: #40798c;"></span> | Sets color of the progress bar while hyperglass processes the query.          |



#### Tag Colors
`[branding.color.tag]`

Tags are used to show attributes for the active query being run.

| Key Name         | Type   | Default Value                                                     | Function                                |
|------------------|--------|-------------------------------------------------------------------|-----------------------------------------|
| `type_title`     | String | <span class="bd-color" style="background-color: #330036;"></span> | Sets title color of the query type tag. |
| `type`           | String | <span class="bd-color" style="background-color: #ff5e5b;"></span> | Sets value color of the query type tag. |
| `location_title` | String | <span class="bd-color" style="background-color: #330036;"></span> | Sets title color of the location tag.   |
| `location`       | String | <span class="bd-color" style="background-color: #40798c;"></span> | Sets value color of the location tag.   |


### Fonts
`[branding.font]`

hyperglass makes use of two font families - a primary family and a monospace family. The primary family is used for all paragraph, title/subtitle, and non-code/preformatted text, and the monospace font is used for any code/preformatted blocks as well as the query results.

The values are passed as a Jinja2 variable to generate `hyperglass/hyperglass/static/sass/hyperglass.scss`, which will be compiled from Sass to CSS.

#### Primary Font
`[branding.font.primary]`

| Key Name | Type   | Default Value                                                  | Function                                     |
|----------|--------|----------------------------------------------------------------|----------------------------------------------|
| `name`   | String | `"Nunito"`                                                     | Sets the web font name for the primary font. |
| `url`    | String | `"https://fonts.googleapis.com/css?family=Nunito:400,600,700"` | Sets the web font URL for the primary font.  |


#### Monospace Font
`[branding.font.mono]`

| Key Name | Type   | Default Value                                         | Function                                                               |
|----------|--------|-------------------------------------------------------|------------------------------------------------------------------------|
| `name`   | String | `"Fira Mono"`                                         | Sets the web font name for the monospace/code/preformatted text font.  |
| `url`    | String | `"https://fonts.googleapis.com/css?family=Fira+Mono"` | Sets the web font URL for the monospace/code/preformatted text font.   |
| `size`   | String | `"0.95em"`                                            | Sets the CSS-valid size for the monospace/code/preformatted text font. |

## Help Dropdown

The text displayed in the [help dropdown](../../screenshots/#help-dropdown) can be easily customized. For each query type, there is a corresponding [Markdown](https://github.com/adam-p/markdown-here/wiki/Markdown-Cheatsheet) example file located at `hyperglass/hyperglass/render/templates/info`:

```
hyperglass/hyperglass/render/templates/info/
├── bgp_aspath.md.example
├── bgp_community.md.example
├── bgp_route.md.example
├── ping.md.example
└── traceroute.md.example
```

Each example file can be renamed to exclude the `.example` file extension, and modified accordingly.

!!! danger "TOML Front Matter Required"
    The TOML Front Matter in the default example files is **required**, even if no attributes are used. If it is not present, the rendering backend will fail to render the main page.

### Detailed Help

Currently, the BGP Community and BGP AS Path query types support an additional detailed help modal. Similar to the above Help Dropdown structure, the detailed help text can be customized by modifying the below files:

```
hyperglass/render/templates/info/details/
├── bgp_aspath.md.example
├── bgp_community.md.example
└── footer.md.example
```

The BGP Community detailed help is intended to display your organizations community structure so your hyperglass users know what communities to query. By default, this is populated with example information and should be changed to include your organization's BGP Community info, or disabled by adding a `hyperglass/hyperglass/render/templates/info/bgp_community.md` file and removing the `{{ info["bgp_community"]["link"] }}` line.

The BGP AS Path detailed help is intended to display your supported AS Path patterns. By default, this is populated with the default AS Path regex pattern, as defined in the [BGP AS Path feature configuration](../features/#bgp-as-path). If you modify the default pattern to include additional allowed query patterns, you should also modify the BGP AS Path detailed help file to reflect your changes.
