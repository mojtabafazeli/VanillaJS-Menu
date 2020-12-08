var express = require('express');
var app = express();

app.use(express.static(__dirname));
var server = app.listen(process.env.PORT || 8081, () => {
	console.log('server is listening on port', process.env.PORT);
});
