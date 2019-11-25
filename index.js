const express = require('express')
const path = require('path')
const PORT = process.env.PORT || 5000

var http = require("https");

var options = {
	"method": "GET",
	"hostname": "deezerdevs-deezer.p.rapidapi.com",
	"port": null,
	"path": "/search?q=eminem",
	"headers": {
		"x-rapidapi-host": "deezerdevs-deezer.p.rapidapi.com",
		"x-rapidapi-key": "ed0387ed35msh68081b71c8d3a3cp129c22jsne333d255819e"
	}
};

var req = http.request(options, function (res) {
	var chunks = [];

	res.on("data", function (chunk) {
		chunks.push(chunk);
	});

	res.on("end", function () {
		var body = Buffer.concat(chunks);
		console.log(body.toString());
	});
});

req.end();

express()
  .use(express.static(path.join(__dirname, 'public')))
  .set('views', path.join(__dirname, 'views'))
  .set('view engine', 'ejs')
  .get('/', (req, res) => res.render('pages/index'))
.listen(PORT, () => console.log(`Listening on ${ PORT }`))
 
