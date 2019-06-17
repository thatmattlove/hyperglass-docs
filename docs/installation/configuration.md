hyperglass configuration files are stored in `hyperglass/hyperglass/configuration/`, in [TOML](https://github.com/toml-lang/toml) format.

```console
hyperglass/configuration/
├── commands.toml
├── configuration.toml
└── devices.toml
```

## Site Parameters

Global hyperglass parameters

| Key Name             | Type    | Default Value                 | Function                                               |
| -------------------- | ------- | ----------------------------- | ------------------------------------------------------ |
| `debug`              | Boolean | `false`                       | Enables hyperglass & Flask debugging.                  |
| `requires_ipv6_cidr` | Array   | `["cisco_ios", "cisco_nxos"]` | See [Requires IPv6 CIDR](#requires-ipv6-cidr) section. |
| `blacklist`          | Array   | See Example                   | See [Blacklist](#blacklist) section.                   |

!!! warning "Logging"
    Enabling debug mode will produce a large amount of log output, as every configuration parameter and backend transaction is logged to stdout.

### Requires IPv6 CIDR

Some platforms (namely Cisco IOS) are unable to perform a BGP lookup by IPv6 host address (e.g. 2001:db8::1), but must perform the lookup by prefix (e.g. 2001:db8::/48). `requires_ipv6_cidr` is a list (TOML array) of network operating systems that require this (in Netmiko format).

If a user attempts to query a device requiring IPv6 lookups in CIDR format with an IPv6 host address, the following message will be displayed:

<img src="../assets/requires_ipv6_cidr.png" style="width: 70%"></img>

### Blacklist

The blacklist is a simple TOML array (list) of host IPs or prefixes that you do not want end users to be able to query. For example, if you have one or more hosts/subnets you wish to prevent users from looking up (or any contained host or prefix), add them to the list.

##### Example

```toml
blacklist = [
"198.18.0.0/15",
"2001:db8::/32",
"10.0.0.0/8",
"192.168.0.0/16",
"172.16.0.0/12"
]
```

When users attempt to query a matching host/prefix, they will receive the following error message by default:

<img src="../assets/blacklist_error.png" style="width: 70%"></img>

## Site Parameters

`[general]`

| Key Name           | Type   | Default Value | Function                                                                                 |
| ------------------ | ------ | ------------- | ---------------------------------------------------------------------------------------- |
| `primary_asn`      | String | `"65000"`     | Your network's _primary_ ASN.                                                            |
| `google_analytics` | String | `""`          | [Google Analytics](https://support.google.com/analytics/answer/1008080?hl=en) ID number. |

## Commands

hyperglass allows complete customization of what commands are send to devices via SSH/Netmiko. These commands are defined in `hyperglass/hyperglass/configuration/commands.toml` and are excluded from change control, so any modifications made are not overwritten when hyperglass is updated.

Commands are separated first by network operating system, then by IP protocol:

| Table     | Function                      | Commands                        |
| --------- | ----------------------------- | ------------------------------- |
| **dual**  | Protocol agnostic commands    | `bgp_community` `bgp_aspath`    |
| **ipv4**  | IPv4-specific commands        | `bgp_route` `ping` `traceroute` |
| **ipv6**  | IPv6-specific commands        | `bgp_route` `ping` `traceroute` |

#### Variables

The following variables can be used in the command definitions.

- `{target}` Maps to search box input.
- `{src_addr_ipv4}` Maps to [src_addr_ipv4](../devices/#routers)
- `{src_addr_ipv6}` Maps to [src_addr_ipv6](../devices/#routers)

For `cisco_ios`, the default commands configuration is:

```toml
[[cisco_ios]]

[cisco_ios.dual]
bgp_community = "show bgp all community {target}"
bgp_aspath = 'show bgp all quote-regexp "{target}"'

[cisco_ios.ipv4]
bgp_route = "show bgp ipv4 unicast {target} | exclude pathid:|Epoch"
ping = "ping {target} repeat 5 source {source}"
traceroute = "traceroute {target} timeout 1 probe 2 source {source}"

[cisco_ios.ipv6]
bgp_route = "show bgp ipv6 unicast {target} | exclude pathid:|Epoch"
ping = "ping ipv6 {target} repeat 5 source {source}"
traceroute = "traceroute ipv6 {target} timeout 1 probe 2 source {source}"
```

`{source}` and `{target}` are formatted as the configured `src_addr_ipv4`/`src_addr_ipv6` parameters in [`devices.toml`](../devices) and query target, respectively.
