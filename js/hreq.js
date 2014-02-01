var fs    = require("fs")
 ,  url   = require("url")
 ,  path  = require("path")
 ,  hsend = require("./hsend");

module.exports = function(cnfg){
	return(function(request, response){
		console.log(request.method, request.url);
		var parsed = url.parse(request.url, true);
		if(request.url === "/") parsed.pathname = cnfg.index;
		switch(parsed.pathname){
			case "/formget":
				response.writeHead(200, cnfg.mime[".html"]);
				hsend(
					parsed.query,
					path.join(process.cwd(), cnfg.static, "page.html"),
					function(result){
						response.end(result);
					}
				);
				break;
			default:
				fs.createReadStream(path.join(process.cwd(), cnfg.static, parsed.pathname))
					.on("open", function(){
						response.writeHead(200, cnfg.mime[path.extname(parsed.pathname)]);
						this.pipe(response);
					})
					.on("error", function(error){
						response.writeHead(307, cnfg.mime.error);
						response.end();
					});
				break;
		};
	});
};