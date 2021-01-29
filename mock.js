var mocky = require('mocky');

var arr = ['blue', 'green'];
var a = arr[ Math.floor( Math.random() * arr.length ) ] ;

mocky.createServer([{
// simple GET route without request body to match
  url: '/app',
  method: 'get',
  headers: {'Content-type': 'text/json'},
  res: {
    status: 200,
    headers: {
			'Content-type': 'text/html',
			//'Access-Control-Allow-Origin': 'http://localhost:8080'
			'Access-Control-Allow-Origin': '*'
		},
    //body: JSON.stringify({'text': 'blue'})
    //body: JSON.stringify({'text': arr[ Math.floor( Math.random() * arr.length ) ]})
    body: JSON.stringify({'text': 'red'})
  }
}
]).listen(4321);
