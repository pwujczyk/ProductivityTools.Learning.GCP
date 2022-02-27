async function getName() {
    const { Datastore } = require('@google-cloud/datastore');
    const datastore = new Datastore();
    const query = datastore.createQuery('Names');
    //console.log(datastore);
    const result = await datastore.runQuery(query);
    console.log(result);
}

async function addName() {
    const { Datastore } = require('@google-cloud/datastore');
    const datastore = new Datastore();

    const k = datastore.key('Names')
    console.log(k);
    const entity = {
        key: k,
        data: [
            {
                name: 'Marcin',
            },
        ]
    };
    console.log(entity);
    await datastore.save(entity);

}


//getName()
addName().catch(console.error); 
//getName();