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

<!-- 
#   logo:
#     favicons: ui/images/favicons/
#     path: ui/images/hyperglass-dark.png
#     width: 384
#   peering_db:
#     enable: true
#   site_name: hyperglass
#   terms:
#     enable: true
#   text:
#     bgp_aspath: BGP AS Path
#     bgp_community: BGP Community
#     bgp_route: BGP Route
#     error404:
#       button: Home
#       subtitle: '{uri} isn''t a thing'
#       title: Error
#     error500:
#       button: Home
#       subtitle: Something Went Wrong
#       title: Error
#     error504:
#       message: Unable to reach {target}
#     info: Help
#     peeringdb: PeeringDB
#     ping: Ping
#     query_location: Location
#     query_target: Target
#     query_type: Query Type
#     subtitle: AS{primary_asn}
#     terms: Terms
#     title: hyperglass
#     title_mode: logo_only
#     traceroute: Traceroute
#     vrf: Routing Table
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


