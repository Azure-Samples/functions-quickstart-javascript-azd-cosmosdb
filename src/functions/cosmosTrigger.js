const { app } = require('@azure/functions');

app.cosmosDB('cosmos_trigger', {
    connection: 'COSMOS_CONNECTION',
    databaseName: '%COSMOS_DATABASE_NAME%',
    containerName: '%COSMOS_CONTAINER_NAME%',
    leaseContainerName: 'leases',
    createLeaseContainerIfNotExists: true,
    handler: (documents, context) => {
        if (documents && documents.length > 0) {
            context.log(`Documents modified: ${documents.length}`);
            context.log(`First document Id: ${documents[0].id}`);
        }
    }
});
