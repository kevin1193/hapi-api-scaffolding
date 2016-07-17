'use strict';

const Hapi = require('hapi');

// Create a server with a host and port
var server = new Hapi.Server();
server.connection({ port: 4000, labels: ['api'] });
var apiServer = server.select('api');
// Add the route
apiServer.route({
    method: 'GET',
    path:'/hello',
    handler: function (request, reply) {
      
        return reply('hello world');
    }
});

// Start the server
apiServer.start((err) => {

    if (err) {
        throw err;
    }
    console.log('Server running at:', apiServer.info.uri);
});
