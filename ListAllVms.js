const gce=require('@google-cloud/compute')
const compute=new gce({
    projectId: 'pwujczyk1'
})

const zone=compute.zone('us-central1-a')

console.log('getting your vms');
zone.getVMs().then((data)=>{
    data[0].forEach((vm)=>{
        console.log('Found VM called',vm.name);
        console.log('stopping',vm.name,'...');
        vm.stop((err,operation)=>{
            operation.on('complete',(err)=>{
                console.log('Stopped',vm.name);
            })
        })
    });
    console.log('Done');
})