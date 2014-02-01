
module.exports = function(cnfg){
	return(function(){
		console.log("\nServer listen at http://"+cnfg.host+":"+cnfg.port+".....\n");
	});
};

