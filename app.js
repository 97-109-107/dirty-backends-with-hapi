var Hapi = require('hapi');
var server = new Hapi.Server();

server.connection({ port: 3000 });
server.start(function () {
    console.log('Server running at:', server.info.uri);
});

server.route({
    method: 'GET',
    path: '/',
    handler: function (request, reply) {
        reply('Hello, world!');
    }
});

server.route({
    method: 'GET',
    path: '/api/disco',
    handler: function (request, reply) {
      return reply.file('./sample.json');
    }
});

server.route({
  method: 'POST',
  path: '/api/testpost',
  handler: function (request, reply) {
    console.log(request.payload);
    reply(request.payload);
  }
});

