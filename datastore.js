async function getTask() {
    const { Datastore } = require('@google-cloud/datastore');
    const datastore = new Datastore();
    const query = datastore.createQuery('Names');
    console.log(datastore);
    const result = await datastore.runQuery(query);
    console.log(result);
}

async function addTask(){
    
}

getTask()