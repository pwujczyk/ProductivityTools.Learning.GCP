# ProductivityTools.Learning.GCP

## ListAllVms.js

```cmd
gcloud compute instances list

NAME: learning-cloud-demo
ZONE: us-central1-a
MACHINE_TYPE: e2-micro
PREEMPTIBLE:
INTERNAL_IP: 10.128.0.7
EXTERNAL_IP: 34.134.20.45
STATUS: RUNNING

node .\ListAllVms.js
getting your vms
Found VM called learning-cloud-demo
stopping learning-cloud-demo ...
Done
Stopped learning-cloud-demo
```

Latency between data center in the same city <1ms
Latency between Data centers USA and Taiwan ~200ms

Zone - we can imagine as single building, Two services in the same zone will be toghether impacted
Region - Like a city - services can be not impacted by power outage, but might be impacted by tornado
