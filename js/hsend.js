var fs = require("fs");

module.exports = function(json, page, callback){
	var datas = "";
	fs.createReadStream(page)
		.on("data", function(data){
			datas += data.toString();
		})
		.on("end", function(){
			for(var key in json){
				var regex = new RegExp("{{"+key.toUpperCase()+"}}", "g");
				datas = datas.replace(regex, json[key]);
			};
			callback(datas);
		})
		.on("error", function(error){
			callback(error);
		});
};