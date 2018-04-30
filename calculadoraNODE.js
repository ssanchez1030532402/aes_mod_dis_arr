var http = require("http");
var url = require("url");
var port = 2999;

http.createServer(function(request, response) {
 

     response.writeHead(200, {"Content-Type": "text/plain"});

     var params = url.parse(request.url, true).query;
     var inputN1 = params.number1;
     var inputN2 = params.number2;

     var numInput1 = new Number(inputN1);
     var numInput2 = new Number(inputN2);

     var urlOperation =  request.url;


     if (urlOperation.slice(12,15)=="add") {
          console.log("Add...");
     var numOutput = new Number(numInput1 + numInput2).toFixed(0);
}


    if (urlOperation.slice(12,15)=="mul") {
          console.log("mul...");
     var numOutput = new Number(numInput1 * numInput2).toFixed(0);
}


    if (urlOperation.slice(12,15)=="div") {
          console.log("divÂ...");
     var numOutput = new Number(numInput1 / numInput2).toFixed(0);
}

    if (urlOperation.slice(12,15)=="sub") {
          console.log("sub...");
     var numOutput = new Number(numInput1 - numInput2).toFixed(0);
}
   
     response.write(numOutput);

     response.end();
 

}).listen(port);
 

console.log("Random Number Generator Running...");


console.log('El servidor esta corriendo por el puerto: '+port);



