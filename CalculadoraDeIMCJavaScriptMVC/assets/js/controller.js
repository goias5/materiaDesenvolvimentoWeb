function calculaIMC(){
	var altura=document.getElementById("altura").value;
    var peso=document.getElementById("peso").value;
	//Chama a classe modelo do javascript, incluindo no controller, para poder então utilizar suas funções
	include("model.js");
	//Chama as funções do modelo para obter os resultados de IMC em número e em classe de IMC
    var resultado = returnIMCNumber(altura, peso);
    resultado = resultado.toFixed(2);
	var IMC = returnIMCString(resultado);
	
	//Chama a classe view do javascript, incluindo no controller, para poder então utilizar suas funções
	include("view.js");
	
	//Chama a função correspondente na view, para então exibir na tela os resultados desejados
	atualizaIMC(resultado);
	atualizaHtml(IMC);
}

function include(src) {
		var script = document.createElement('script');
		script.type = 'text/javascript';
		script.src = src;
		document.getElementsByTagName('head')[0].appendChild(script);
}