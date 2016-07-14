var fs = require("fs");

var rawBuffer = fs.readFileSync(process.argv[2]);

var stringBuffer = rawBuffer.toString();

var arrayStrBuffer = stringBuffer.split("\n");

console.log(arrayStrBuffer.length - 1);