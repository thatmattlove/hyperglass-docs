From `hyperglass/hyperglass/configuration/configuration.toml`

`[features]`

## Rate Limiting

hyperglass supports configurable rate limiting of both site loads and queries. By default, users are able to reach the site up to 60 times per minute, and submit up to 5 queries per minute. When the site limit is reached, users are directed to a separate error page until the timer expires. When the query limit is reached, an error message is displayed, and no further queries are allowed until the timer expires. Both of these limits are configurabale in `configuration.toml`. See [here](configuration/features/#rate-limiting) for more information.

hyperglass uses [Flask-Limiter](https://github.com/alisaifee/flask-limiter) to handle application rate limiting, and a Redis database as the backend storage mechanism. Redis is used so that the Flask-Limiter state can be tracked across multiple WSGI workers.

`[features.rate_limit]`

| Key Name   | Type    | Default Value | Function                                                                    |
| ---------- | ------- | ------------- | --------------------------------------------------------------------------- |
| `redis_id` | Integer | `1`           | Sets the Redis database ID where the back-end rate-limiting data is stored. |


#### By Query
`[features.rate_limit.query]`

Configuration paramters for rate limiting the number of queries per visitor.

| Key Name  | Type    | Default Value                                                                         | Function                                                                                                                                                   |
| --------- | ------- | ------------------------------------------------------------------------------------- | ---------------------------------------------------------------------------------------------------------------------------------------------------------- |
| `rate`    | Integer | `5`                                                                                   | Sets the number of queries per `period` allowed from the remote IP address of the request.                                                                 |
| `period`  | String  | `"minute"`                                                                            | Sets the time period to which `rate` applies.                                                                                                              |
| `message` | String  | `"Query limit of {rate} per minute reached. Please wait one {period} and try again."` | Message presented to the user when the query limit is reached. `{rate_limit_query}` will be formatted as the `[features.rate_limit.query.rate]` parameter. |

#### By Site Site Visit
`[features.rate_limit.site]`

Configuration parameters for rate limiting the number of site visits per visitor.

| Key Name   | Type    | Default Value                                                                | Function                                                                                   |
| ---------- | ------- | ---------------------------------------------------------------------------- | ------------------------------------------------------------------------------------------ |
| `rate`     | Integer | `60`                                                                         | Sets the number of queries per `period` allowed from the remote IP address of the request. |
| `period`   | String  | `"minute"`                                                                   | Sets the time period to which `rate` applies.                                              |
| `title`    | String  | `"Limit Reached"`                                                            | Title text on Rate Limit error page.                                                       |
| `subtitle` | String  | `"You have accessed this site more than {rate} times in the last {period}."` | Subtitle text on Rate Limit error page.                                                    |
| `button` | String  | `"Try Again"` | Button text on Rate Limit error page.                                                    |



## Caching

hyperglass supports caching the application's responses for a configurable period of time to reduce the number of lookups passed back to routers for repetitive/common lookups. By default, all application responses (including error messages), are cached for 2 minutes in the local file system.

To accomplish this, hyperglass makes use of a Redis database, with a stringified combination of location name, query type, and target as a key, and the output and status code as values. If a lookup matching the exact key is found, the cached value will be returned. If not, a standard lookup is performed (and that data is subsequently cached).

`[features.cache]`

| Key Name    | Type    | Default Value                                         | Function                                                                 |
| ----------- | ------- | ----------------------------------------------------- | ------------------------------------------------------------------------ |
| `redis_id`  | Integer | `0`                                                   | Sets the Redis database ID where the back-end responses are cached.      |
| `timeout`   | Integer | `120`                                                 | Sets the number of **seconds** to cache the back-end response.           |
| `show_text` | Boolean | `true`                                                | If `true`, a message will be displayed at the bottom of the results box. |
| `text`      | String  | `"Results will be cached for {seconds / 60} minutes"` | Sets the caching message text if `show_text` is `true`.                  |



## Maximum Prefix Length
`[features.max_prefix]`

If enabled, the prefix length of BGP Route queries must be shorter than the `max_prefix_length_ipv4` and `max_prefix_length_ipv6` parameters. For example, a BGP Route query for `192.0.2.0/25` would result in the following error message:

<img src="assets/max_prefix_error.png" style="width: 70%"></img>


| Key Name | Type    | Default Value | Function                                                            |
| -------- | ------- | ------------- | ------------------------------------------------------------------- |
| `enable` | Boolean | `false`       | Enables/disables `max_prefix` feature.                              |
| `ipv4`   | Integer | `24`          | Sets the maxiumum prefix length allowed for IPv4 BGP Route queries. |
| `ipv6`   | Integer | `64`          | Sets the maxiumum prefix length allowed for IPv6 BGP Route queries. |
| `message`   | String | `"Prefix length must be smaller than /{m}. <b>{i}</b> is too specific."`          | Sets the error message displayed to users when the maximum prefix length is queried. |


## BGP Route
`[features.bgp_route]`

| Key Name | Type    | Default Value | Function                                      |
| -------- | ------- | ------------- | --------------------------------------------- |
| `enable` | Boolean | `true`        | Enables or disables the BGP Route query type. |

## BGP Community
`[features.bgp_community]`

| Key Name | Type    | Default Value | Function                                      |
| -------- | ------- | ------------- | --------------------------------------------- |
| `enable` | Boolean | `true`        | Enables or disables the BGP Community query type. |


#### Regex
`[features.bgp_community.regex]`

Override the default regex patterns for validating BGP Community input.

| Key Name      | Type   | Default Value                                   | Function                         |
| ------------- | ------ | ----------------------------------------------- | -------------------------------- |
| `decimal`     | String | `"^[0-9]{1,10}$"`                               | Decimal/32 bit community format. |
| `extended_as` | String | `"^([0-9]{0,5})\:([0-9]{1,5})$"`                | Extended community format        |
| `large`       | String | `"^([0-9]{1,10})\:([0-9]{1,10})\:[0-9]{1,10}$"` | Large community format           |

## BGP AS Path
`[features.bgp_aspath]`

| Key Name | Type    | Default Value | Function                                      |
| -------- | ------- | ------------- | --------------------------------------------- |
| `enable` | Boolean | `true`        | Enables or disables the BGP AS Path query type. |

#### Regex
`[features.bgp_aspath.regex]`

| Key Name  | Type   | Default Value                                                     | Function                                                                                                              |
| --------- | ------ | ----------------------------------------------------------------- | --------------------------------------------------------------------------------------------------------------------- |
| `mode`    | String | `"asplain"`                                                       | Sets the [AS Path type](https://tools.ietf.org/html/rfc539) used **network-wide**. Options are `asplain`, `asdot`.    |
| `asplain` | String | `"^(\^|^\_)(\d+\_|\d+\$|\d+\(\_\.\+\_\))+$"`                      | Regex pattern used to validate `asplain` formatted AS numbers in an AS_PATH. Only used if `mode` is set to `asplain.` |
| `asdot`   | String | `"^(\^|^\_)((\d+\.\d+)\_|(\d+\.\d+)\$|(\d+\.\d+)\(\_\.\+\_\))+$"` | Regex pattern used to validate `asdot` formatted AS numbers in an AS_PATH. Only used if `mode` is set to `asdot.`     |


!!! warning "AS_PATH Format"
    This pattern will be used to validate AS_PATH queries to your routers, so it should match how your routers are actually configured.

## Ping
`[features.ping]`

| Key Name | Type    | Default Value | Function                                      |
| -------- | ------- | ------------- | --------------------------------------------- |
| `enable` | Boolean | `true`        | Enables or disables the Ping query type. |

## Traceroute
`[features.traceroute]`

| Key Name | Type    | Default Value | Function                                      |
| -------- | ------- | ------------- | --------------------------------------------- |
| `enable` | Boolean | `true`        | Enables or disables the Traceroute query type. |

## Example

```toml
[features]

[features.rate_limit]
redis_id = 1

[features.rate_limit.query]
rate = 5
title = "Query Limit Reached"
message = "Query limit of {rate} per minute reached. Please wait one {period} and try again."
button = "Try Again"

[features.rate_limit.site]
rate = 60
title = "Limit Reached"
subtitle = "You have accessed this site more than {rate} times in the last {period}."

[features.cache]
timeout = 120
redis_id = 0
show_text = true
text = "Results will be cached for {seconds / 60} minutes"

[features.bgp_route]
enable = true

[features.bgp_community]
enable = true

[features.bgp_community.regex]
decimal = "^[0-9]{1,10}$"
extended_as = "^([0-9]{0,5})\:([0-9]{1,5})$"
large = "^([0-9]{1,10})\:([0-9]{1,10})\:[0-9]{1,10}$"

[features.bgp_aspath]
enable = true

[features.bgp_aspath.regex]
mode = "asplain"
asplain = "^(\^|^\_)(\d+\_|\d+\$|\d+\(\_\.\+\_\))+$"
asdot = "^(\^|^\_)((\d+\.\d+)\_|(\d+\.\d+)\$|(\d+\.\d+)\(\_\.\+\_\))+$"

[features.ping]
enable = true

[features.traceroute]
enable = true

[features.max_prefix]
enable = false
ipv4 = 24
ipv6 = 64
message = "Prefix length must be smaller than /{m}. <b>{i}</b> is too specific."
```
