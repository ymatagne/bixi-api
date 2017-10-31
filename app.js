const express = require('express');
const bodyParser = require('body-parser');
const SSE = require('express-sse');
const sse = new SSE(["array", "containing", "initial", "content", "(optional)"]);
 
const app = express()

app.use(bodyParser.json()); // support json encoded bodies
app.use(bodyParser.urlencoded({ extended: true })); // support encoded bodies

app.get('/bixi', sse.init);

app.post('/api/bixi', function (req, res) {
	console.log(req);
	sse.send(req.body);
	res.send('ok');
})

app.listen(8080, function () {
  console.log('Example app listening on port 3000!')
})
