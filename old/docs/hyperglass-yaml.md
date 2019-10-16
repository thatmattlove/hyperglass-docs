---
id: hyperglass-yaml
title: hyperglass.yaml Reference
sidebar_label: hyperglass.yaml
---

## `general`

### `debug`
* Type: **Boolean**
* Default: `false`

Enable debug mode (this will generate a _lot_ of logs).

### `google_analytics`
* Type: **String**
* Default: `''`

Enables and sets [Google Analytics](https://support.google.com/analytics/answer/1008080) ID.

### `org_name`
* Type: **String**
* Default: `'The Company'`

Sets display name of your organization. This is used as the text title, and in the default terms & conditions text.

### `primary_asn`
* Type: **String**
* Default: `'65001'`

Sets public ASN of your organization. This is combined with 'AS' and used as the default subtitle, and is used to generate the PeeringDB hyperlink.

### `redis_host`
* Type: **String**
* Default: `'localhost'`

Sets the Redis server hostname or IP address, if redis is running on a separate system.

### `redis_port`
* Type: **Integer**
* Default: `6379`

Sets the Redis TCP port.

### `request_timeout`
* Type: **Integer**
* Default: `30`

Sets the front end timeout in seconds. An error will be displayed at the end of this timer.

### `requires_ipv6_cidr`
* Type: **List of Strings**
* Default: `['cisco_ios', 'cisco_nxos']`

Some platforms (namely Cisco IOS) are unable to perform a BGP lookup by IPv6 host address (e.g. 2001:db8::1), but must perform the lookup by prefix (e.g. 2001:db8::/48). `requires_ipv6_cidr` is a list of network operating systems that require this (using Netmiko naming scheme).

If a user attempts to query a device requiring IPv6 lookups in CIDR format with an IPv6 host address, the following message will be displayed:

TODO

## `branding`

### `colors`

:::important
Colors may be defined in multiple standard color formats, such as hex (default), [name](https://www.w3.org/TR/SVG11/types.html#ColorKeywords), [RGB/RGBA strings](https://www.w3.org/wiki/CSS3/Color/RGBA), or [HSL strings](https://www.w3.org/wiki/CSS/Properties/color/HSL).
:::

#### `background`

* Type: **String**
* Default: `'#fbfffe'`

Sets the background color.

#### `danger`

* Type: **String**
* Default: `'#a21024'`

Sets the "danger" color, which is used for error messages.

#### `dark`

* Type: **String**
* Default: `'#383541'`

Sets the dark color.

#### `light`

* Type: **String**
* Default: `'#fbfffe'`

Sets the light color.

#### `primary`

* Type: **String**
* Default: `'#40798c'`

Sets the primary color, which is used for the search button, back button, and to color successful queries.

#### `secondary`

* Type: **String**
* Default: `'#330036'`

Sets the secondary color.

#### `warning`

* Type: **String**
* Default: `'#eec643'`

Sets the warning color, which is used for warning messages.

### `credit`

#### `enable`
* Type: **Boolean**
* Default: `true`

Enables or disables the footer object crediting hyperglass and linking to the GitHub page.

### `font`
hyperglass is currently able to accept any [Google Font](https://fonts.google.com/) name. When rendering front-end assets, hyperglass will download the font in the correct formats and font weights, and serve it along with the rest of the static content.

#### `primary`
* Type: **String**
* Default: `'Nunito'`

Sets the primary font, used for almost all UI text.

#### `mono`
* Type: **String**
* Default: `'Fira Code'`

Sets the monospace font, used for displaying device output in the results box.

### `help_menu`

#### `enable`
* Type: **Boolean**
* Default: `true`

Enables or disables the help menu footer object.

### `logo`

#### `favicons`
* Type: **String**
* Default: `'ui/images/favicons/'`

Sets the path to the favicons directory. For full browser and platform compatibility, it is recommended to use [RealFaviconGenerator](https://realfavicongenerator.net/) and place all the generated files in static/custom/images/favicon/ (and update the favicons parameter).

#### `path`
* Type: **String**
* Default: `'ui/images/hyperglass-dark.png'`

Sets the path to the logo file. This file can be any browser-compatible format, such as JPEG, PNG, or SVG.

#### `width`
* Type: **Integer**
* Default: `384`

Sets the width of the logo defined in the logo `path` parameter. This is helpful if your logo is a dimension that doesn't quite work with the logo container on the page.

### `peeringdb`

#### `enable`

* Type: **Boolean**
* Default: `true`

Enables or disables the PeeringDB link in the footer. If set to `true`, the [`primary_asn`](#primary_asn) from the [`general`](#general) section will be automatically used to create the URL to your ASN's PeeringDB entry.

### `site_title`

* Type: **String**
* Default: `'hyperglass'`

Sets the [`<title>`](https://www.w3schools.com/tags/tag_title.asp) tag in the `<head>` section of the page.

### `terms`

#### `enable`

* Type: **Boolean**
* Default: `true`

Enables or disables the Terms & Conditions popup item in the footer.

### `text`

#### `bgp_aspath`
* Type: **String**
* Default: `'BGP AS Path'`

Sets display text for the BGP AS Path feature.

#### `bgp_community`
* Type: **String**
* Default: `'BGP Community'`

Sets display text for the BGP AS Community feature.

#### `bgp_route`
* Type: **String**
* Default: `'BGP Route'`

Sets display text for the BGP Route feature.

#### `ping`
* Type: **String**
* Default: `'Ping'`

Sets display text for the Ping feature.

#### `traceroute`
* Type: **String**
* Default: `'Traceroute'`

Sets display text for the Traceroute feature.

#### `title_mode`
* Type: **String**
* Default: `'logo_only'`

Sets the "mode" for the title/heading area above the main form. Accepted values are:

* `'logo_only'` - shows only the logo defined in the [`logo`](#logo) section.
* `'text_only'` - shows the `title`, and `subtitle` defined below.
* `'logo_title'` - shows the logo defined in the [`logo`](#logo) section, as well as the `title` defined below.
* `'all'` - shows the logo defined in the [`logo`](#logo) section, and both the `title` and `subtitle` defined below.

#### `title`
* Type: **String**
* Default: `'hyperglass'`

If `title_mode` is set to `text_only` or `all`, this text will be the larger of the two text blocks. If `title_mode` is set to `logo_title`, this text will be the only text displayed, and will be slightly smaller. If `title_mode` is set to `logo_only`, this text will not be shown.

#### `subtitle`
* Type: **String**
* Default: `'AS{primary_asn}'`

If `title_mode` is set to `text_only` or `all`, this text will be the smaller of the two text blocks. If `title_mode` is set to `logo_only` or `logo_title`, this text will not be shown.

#### `terms`
* Type: **String**
* Default: `'Terms'`

Sets the display text for the Terms & Conditions footer item.

#### `peeringdb`
* Type: **String**
* Default: `'PeeringDB'`

Sets the display text for the PeeringDB footer item.

#### `info`
* Type: **String**
* Default: `'Help'`

Sets the display text for the Help footer item.

#### `query_location`
* Type: **String**
* Default: `'Location'`

Sets the display text for the Query Location field.

#### `query_target`
* Type: **String**
* Default: `'Target'`

Sets the display text for the Query Target field.

#### `query_type`
* Type: **String**
* Default: `'Query Type'`

Sets the display text for the Query Type field.

#### `query_vrf`
* Type: **String**
* Default: `'Routing Table'`

Sets the display text for the VRF field.

#### `error404`
Options for the 404 error page, displayed when someone tries to visit a URI that doesn't exist. For example "lg.as65000.net/fake".

##### `button`
* Type: **String**
* Default: `'Home'`

Sets the display text for the button on the 404 error page.

##### `subtitle`
* Type: **String**
* Default: `'{uri} isn't a thing.'`

Sets the subtitle on the 404 error page. `{uri}` maps to the URI that was attempted and not found.

##### `title`
* Type: **String**
* Default: `'Error'`

Sets the title on the 404 error page.

#### `error500`
Options for the 500 error page, displayed when general server errors occur.

##### `button`
* Type: **String**
* Default: `'Home'`

Sets the display text for the button on the 500 error page.

##### `subtitle`
* Type: **String**
* Default: `'Something went wrong.'`

Sets the subtitle on the 500 error page.

##### `title`
* Type: **String**
* Default: `'Error'`

Sets the title on the 500 error page.

<!-- 
# features:
#   bgp_aspath:
#     enable: true
#     regex:
#       asdot: ^(\^|^\_)((\d+\.\d+)\_|(\d+\.\d+)\$|(\d+\.\d+)\(\_\.\+\_\))+$
#       asplain: ^(\^|^\_)(\d+\_|\d+\$|\d+\(\_\.\+\_\))+$
#       mode: asplain
#   bgp_community:
#     enable: true
#     regex:
#       decimal: ^[0-9]{1,10}$
#       extended_as: ^([0-9]{0,5})\:([0-9]{1,5})$
#       large: ^([0-9]{1,10})\:([0-9]{1,10})\:[0-9]{1,10}$
#   bgp_route:
#     enable: true
#   cache:
#     redis_id: 0
#     show_text: true
#     text: Results will be cached for 2 minutes.
#     timeout: 120
#   max_prefix:
#     enable: false
#     ipv4: 24
#     ipv6: 64
#     message: Prefix length must be smaller than /{m}. <b>{i}</b> is too specific.
#   ping:
#     enable: true
#   rate_limit:
#     query:
#       button: Try Again
#       message: Query limit of 5 per minute reached. Please wait one minute and try
#         again.
#       period: minute
#       rate: 5
#       title: Query Limit Reached
#     redis_id: 1
#     site:
#       button: Try Again
#       period: minute
#       rate: 60
#       subtitle: You have accessed this site more than 60 times in the last minute.
#       title: Limit Reached
#   traceroute:
#     enable: true

# messages:
#   acl_denied: '{target} is a member of {denied_network}, which is not allowed.'
#   acl_not_allowed: '{target} is not allowed.'
#   authentication_error: Authentication error occurred.
#   connection_error: 'Error connecting to {device_name}: {error}'
#   directed_cidr: '{query_type} queries can not be in CIDR format.'
#   feature_not_enabled: '{feature} is not enabled for {device_name}.'
#   general: Something went wrong.
#   invalid_field: '{input} is an invalid {field}.'
#   invalid_input: '{target} is not a valid {query_type} target.'
#   max_prefix: Prefix length must be shorter than /{max_length}. {target} is too specific.
#   no_input: '{field} must be specified.'
#   no_matching_vrfs: No VRFs Match
#   no_output: No output.
#   noresponse_error: No response.
#   request_timeout: Request timed out.
#   requires_ipv6_cidr: '{device_name} requires IPv6 BGP lookups to be in CIDR notation.'
#   vrf_not_associated: VRF {vrf_name} is not associated with {device_name}. -->


