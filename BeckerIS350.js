// creating your first web server
var http = require ('http');
var fs = require ('fs');
var url = require ('url');
const PORT = process.env.PORT || 5000; 

http.createServer(function(req, res) {
	var q = url.parse(req.url, true);
	varfilename = "." + q.pathname;

	if (filename == './') {
		filename = './index';
	}

	filename = filename + ".html";
	console.log('loading:...' + filename);

	fs.readFile(filename, funciton(err, data) {
		if (err){
			res.writeHead(404, {'Content-Type': 'tet/html'});
			return res.end("404: Page Not Found");
		}

		res.writeHead(200, {'Content-Type': 'text/hrml'});
		res.write(data);
		return.res.end();
	});
}).listen(PORT);

console.log("Serve listening on assigned PORT...")

//CREATE TABLE `ecommerce`.`product` ( `ProductID` INT NOT NULL ,
// `ImageURL` TEXT NOT NULL , 
//`Price` DECIMAL NOT NULL , 
//`Description` VARCHAR(500) NOT NULL ,
// `InventoryAmount` INT NOT NULL , 
//`DateCreated` DATETIME NOT NULL , 
//`DateUpdated` DATETIME NOT NULL ) ENGINE = MyISAM; 