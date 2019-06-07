function calculaIMC(){
	var altura=document.getElementById("altura").value;
    var peso=document.getElementById("peso").value;
	
	//Chama a classe modelo do javascript, incluindo no controller, para poder então utilizar suas funções
	document.write(unescape("%3Cscript src='model.js' type='text/javascript'%3E%3C/script%3E"));
	
	//Chama as funções do modelo para obter os resultados de IMC em número e em classe de IMC
    var resultado = returnIMCNumber(altura, peso)
	var IMC = returnIMCString(resultado);
	
	//Chama a classe view do javascript, incluindo no controller, para poder então utilizar suas funções
	document.write(unescape("%3Cscript src='view.js' type='text/javascript'%3E%3C/script%3E"));
	
	//Chama a função correspondente na view, para então exibir na tela os resultados desejados
	atualizaHTML(IMC);
}