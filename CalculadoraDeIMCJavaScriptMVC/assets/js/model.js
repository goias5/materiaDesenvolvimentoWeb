function returnIMCString(resultado){
    if (resultado >= 40) {
        return new IMCCompleto("Obesidade grau 3", "text-danger", "Você está gordo igual uma baleia! Emagreça, ou você pode morrer cedo! Vá urgentemente a um cardiologista!");
    } else if (resultado >= 35 && resultado < 40) {
        return new IMCCompleto("Obesidade grau 2", "text-danger", "Você está parecendo um elefante! Faça exercícios ou sua obesidade ainda pode te causar problemas de saúde!");
    } else if (resultado >= 30 && resultado < 35) {
        return new IMCCompleto("Obesidade grau 1", "text-warning", "Você está parecendo um botijãozinho! Faça exercícios e melhore sua saúde, com uma dieta mais adequada!");
    } else if (resultado >= 25 && resultado < 30) {
        return new IMCCompleto("Sobrepeso", "text-warning", "Você está um pouco acima do peso de acordo com os padrões do IMC. Cuide bem da sua dieta e faça atividades físicas.!");
    } else if (resultado > 18.5 && resultado < 25) {
        return new IMCCompleto("Normal", "text-primary", "Você está com um IMC considerado normal. Nunca se esqueça de cuidar da saúde, com uma alimentação saudável.");
    } else {
        return new IMCCompleto("Desnutrição", "text-danger", "Você está com um IMC abaixo do normal. Cuidado, pode significar desnutrição, anorexia e outros problemas de saúde.");
    }
}
	
function returnIMCNumber(altura, peso){
    return peso/(altura*altura);
}
	
function IMCCompleto(textoBase, textoCor, textoDescricao) {
    this.textoBase = textoBase;
    this.textoCor = textoCor;
    this.textoDescricao = textoDescricao;
}
