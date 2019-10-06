---
id: hyperglass-yaml
title: hyperglass.yaml Reference
sidebar_label: hyperglass.yaml
---

## General
`general:`

| Parameter            | Type    | Default Value                 | Function                                                                                               |
|----------------------|---------|-------------------------------|--------------------------------------------------------------------------------------------------------|
| `debug`              | Boolean | `False`                       | Enable debug mode (this will generate a _lot_ of logs)                                                 |
| `google_analytics`   | String  | `''`                          | Enables and sets [Google Analytics](https://support.google.com/analytics/answer/1008080) ID            |
| `org_name`           | String  | `'The Company'`               | Sets display name of your organization. This is used as the text title, and in the default terms text. |
| `primary_asn`        | String  | `'65001'`                     | Sets public ASN of your organization. This is combined with 'AS' and used as the default subtitle.     |
| `redis_host`         | String  | `'localhost'`                 | Sets the Redis server hostname or IP address, if redis is running on a separate server.                |
| `redis_port`         | Integer | `6379`                        | Sets the Redis TCP port                                                                                |
| `request_timeout`    | Integer | `30`                          | Sets the front end timeout in seconds. An error will be displayed at the end of this timer.            |
| `requires_ipv6_cidr` | List    | `['cisco_ios', 'cisco_nxos']` | See [Requires IPv6 CIDR](#requires-ipv6-cidr) section                                                  |

### Requires IPv6 CIDR

Some platforms (namely Cisco IOS) are unable to perform a BGP lookup by IPv6 host address (e.g. 2001:db8::1), but must perform the lookup by prefix (e.g. 2001:db8::/48). `requires_ipv6_cidr` is a list of network operating systems that require this (using Netmiko naming scheme).

If a user attempts to query a device requiring IPv6 lookups in CIDR format with an IPv6 host address, the following message will be displayed:

TODO

