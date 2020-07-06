<img src="assets/hyperglass-dark.png" width=300/>

# Version 1.0

**These docs are for the original release of hyperglass (now called v0)**.

Following the positive response hyperglass v0, version 1.0 of hyperglass has been in development for nearly a year, with an active, but quiet, public beta since March 2020. Version 1.0 features significant backend performance and security improvements, a brand new even more modern UI, built-in support for more Network Operating Systems, and much more.

**If you're considering hyperglass for your network, or are still using v0, please check out the [v1.0.0 repository](https://github.com/checktheroads/hyperglass) or the [new docs site](https://hyperglass.io)**.

# What is hyperglass?

**hyperglass** is an open source looking glass application to provide customers, peers, and partners of network operators with unattended visibility into the operator's network.

# Yet Another Looking Glass?

Many of the more popular open source looking glass applications are written in PHP or Perl, languages infrequently used by many network engineers today. With the widespread adoption of network operations tooling such as [Netmiko](https://github.com/ktbyers/netmiko), [Netbox](https://github.com/digitalocean/netbox), and [NAPALM](https://github.com/napalm-automation/napalm), Python is most often the language of choice for network operators. hyperglass is built completely on Python 3 and utilizes user-friendly configuration files to provide a highly customizable, easy to deploy looking glass app.

hyperglass was created with the lofty goal of benefiting the internet community at-large, by providing an easier and more familiar way for operators to provide looking glass services to their customers, peers, and partners.

# Application Stack

| Function                          | Component |
| --------------------------------- | --------- |
| Front End Framework               | Bulma     |
| Front End Application             | Flask     |
| Back End Application              | Python 3  |
| Device Connection Handling (SSH)  | Netmiko   |
| Device Connection Handling (REST) | Requests  |
| Configuration Format              | TOML      |

# Get Started

See the [installation guide](installation/download) to get started.
