const gce=require('@google-cloud/compute')({
    projectId: 'pwujczyk1'
})

const zone=gce.zone('us-central1-a')

console.log('getting your vms');
zone.getVMs().then((data)=>{
    data[0].forEach((vm)=>{
        console.log('Found VM called',vm.name);
    });
    console.log('Done');
})