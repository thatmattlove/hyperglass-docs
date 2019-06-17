Hyperglass has built in support for [Prometheus](https://prometheus.io/) metrics.

Every successful transaction increments a Prometheus [Counter](https://prometheus.io/docs/concepts/metric_types/#counter) metric which logs the Query Type, Query Target, Location, and the user's source IP. This information can be scraped by a Prometheus server and visualized with [Grafana](https://grafana.com/) or your visualization platform of choice. User-facing errors are also tracked for easy logging.

## Example

This Grafana dashboard model is located at `hyperglass/grafana.json`.

<img src="../assets/grafana.png" style="width: 100%"></img>
