function atualizaHtml(var IMC){
	document.getElementById("classeResultado").innerHTML=IMC.textoBase;
	document.getElementById("classeResultado").className=IMC.textoCor;
	document.getElementById("descricaoResultado").innerHTML=IMC.textoDescricao;
	document.getElementById("descricaoResultado").className=IMC.textoCor;
}