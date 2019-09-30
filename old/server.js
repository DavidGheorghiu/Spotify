var http = require('http')

try {
	http.createServer(function(request, response) {
		response.writeHead(200, {'Content-Type': 'text/plain'});
		response.write('Hello World');
		response.end();
	}).listen(8888);	
	console.log('server started up')
} catch(e) {
	console.log('error starting up server\n', e);
}
