onload = function(){
	var nom = document.querySelector("input[name=nom]");
	var age = document.querySelector("input[name=age]");
	var prf = document.querySelector("input[name=prf]");
	var xml = new XMLHttpRequest();

	btnSend.onclick = function(){
		var chaine = "/formxml?nom="+nom.value+"&age="+age.value+"&prf="+prf.value;
		xml.open("get", chaine);
		xml.send();
	};

	xml.onload = function(){
		slt.add(new Option(xml.responseText));
	};

};