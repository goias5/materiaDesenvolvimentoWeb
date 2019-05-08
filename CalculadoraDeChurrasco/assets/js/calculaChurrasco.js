var numeroDePessoas = 0;
var guardanapos = false;
var carneBranca = false;
const texto1 = "Digite o número de pessoas:";
const texto2 = "O churrasco terá guardanapos?";
const texto3 = "O churrasco terá carne branca?";

function calculaChurrasco(){
    var titulo = document.getElementById("tituloCalculadora");
    var botao = document.getElementById("comecar");
    var questionador = document.getElementById("questionador");
    var input = document.getElementById("entrada");
    var proximo = document.getElementById("proximo")
	comecaCalculo(titulo, botao, questionador, input, proximo);
}

function comecaCalculo(titulo, botao, questionador, input, proximo){
	titulo.innerHTML="Passo 1 de 4";
	botao.style.visibility="hidden";
	questionador.className="text-danger font-weight-bold";
	input.className="visible";
    proximo.className="btn btn-warning visible";
}

function armazenaCampo(){
    var titulo = document.getElementById("tituloCalculadora");
    titulo.innerHTML="Passo 2 de 4";
	var entrada = document.getElementById("entrada");
	var valor = entrada.value;
	var questionador = document.getElementById("questionador");
	var texto = questionador.innerHTML;
	if(texto == texto1){
		numeroDePessoas = valor;
		questionador.innerHTML=texto2;
		entrada.className="invisible";
        entrada.style.display="none";
        var proximo = document.getElementById("proximo");
        proximo.className="invisible";
        proximo.style.displaye="none";
        var nao = document.getElementById("Nao");
        var sim = document.getElementById("Sim");
        nao.className="btn btn-danger";
        sim.className="btn btn-success";
	}
	else{
		//erro
	}
}

function clicouSim(){
	var questionador = document.getElementById("questionador");
	var texto = questionador.innerHTML;
	if(texto == texto2){
		guardanapos = true;
		questionador.innerHTML=texto3;
        var titulo = document.getElementById("tituloCalculadora");
        titulo.innerHTML="Passo 3 de 4";
	}
	else if(texto == texto3){
		carneBranca = true;
		var nao = document.getElementById("Nao");
        var sim = document.getElementById("Sim");
        nao.className="btn btn-danger invisible";
        sim.className="btn btn-success invisible";
        var titulo = document.getElementById("tituloCalculadora");
        titulo.innerHTML="Churrasco Pronto!";
		exibeValorChurrasco();
	}
}

function clicouNao(){
	var questionador = document.getElementById("questionador");
	var texto = questionador.innerHTML;
	if(texto == texto2){
		guardanapos = false;
		questionador.innerHTML=texto3;
        var titulo = document.getElementById("tituloCalculadora");
        titulo.innerHTML="Passo 3 de 4";
        
	}
	else if(texto == texto3){
		carneBranca = false;
		var nao = document.getElementById("Nao");
        var sim = document.getElementById("Sim");
        nao.className="btn btn-danger invisible";
        sim.className="btn btn-success invisible";
        var titulo = document.getElementById("tituloCalculadora");
        titulo.innerHTML="Churrasco Pronto!";
		exibeValorChurrasco();
	}
}

function exibeValorChurrasco(){
	var questionador = document.getElementById("questionador");	
	var nao = document.getElementById("Nao");
    var sim = document.getElementById("Sim");
	var guardanaposText = document.getElementById("guardanapos");
	var carneVermelhaText = document.getElementById("carne-vermelha");
	var carneBrancaText = document.getElementById("carne-branca");
	var pacotesDeGuardanapos = calculaGuardanapos();
	var carneVermelha = calculaCarneVermelha();
	var carneBrancaQtd = calculaCarneBranca();
	var custoTotal = calculaCustoTotal(pacotesDeGuardanapos, carneVermelha, carneBrancaQtd);
	nao.className="invisible";
	sim.className="invisible";
	questionador.innerHTML="O custo médio total do churrasco ficou em R$"+custoTotal+",00";
	guardanaposText.innerHTML="Será necessário "+pacotesDeGuardanapos+" pacotes de guardanapos";
	carneVermelhaText.innerHTML="Serão necessários "+carneVermelha+" kilos de carne vermelha";
	carneBrancaText.innerHTML="Serão necessários "+carneBrancaQtd+" kilos de carne branca";
	guardanaposText.className="text-danger font-weight-bold";
	carneVermelhaText.className="text-danger font-weight-bold";
	carneBrancaText.className="text-danger font-weight-bold";
    reload = document.getElementById("reload");
    reload.className="btn btn-warning";
}

function calculaGuardanapos(){
	if(numeroDePessoas>0 && numeroDePessoas<10){
		return 1;
	}
	else if(numeroDePessoas>10){
		return (numeroDePessoas/10)+1;
	}
	else{
		return 0;
	}
}

function calculaCarneVermelha(){
	if(carneBranca == false){
		return numeroDePessoas;
	}
	else{
		return (numeroDePessoas/2);
	}
}

function calculaCarneBranca(){
	if(carneBranca == false){
		return 0;
	}
	else{
		return (numeroDePessoas/2);
	}
}

function calculaCustoTotal(guardanapos, carneV, carneB){
	return (guardanapos*2)+(carneV*18)+(carneB*10);
}

function reloadFunc(){
	location.reload();
}