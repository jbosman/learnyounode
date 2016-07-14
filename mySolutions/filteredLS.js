var fs = require("fs");

var regEx = new RegExp("\\." + process.argv[3] + "$");

fs.readdir( process.argv[2], function(err, list) {
	for (var i = 0; i < list.length; i++) {
		if( regEx.test(list[i]) )
			console.log(list[i]);
	}
});



