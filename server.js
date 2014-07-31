var server = require("http").createServer
 ,  cnfg   = require("./json/cnfg")
 ,  hLis   = require("./js/hlis")
 ,  hReq   = require("./js/hreq");

server()
	.on("request", hReq(cnfg))
	.listen(cnfg.port, cnfg.host, hLis(cnfg));


