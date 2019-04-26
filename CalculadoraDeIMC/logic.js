function calculaIMC(){
    var altura=document.getElementById("altura").value;
    var peso=document.getElementById("peso").value;
    var resultado=peso/(altura*altura);
    document.getElementById("resultado").innerHTML=resultado;
    if(resultado >= 40 ){
        document.getElementById("classeResultado").innerHTML="Obesidade grau 3";
        document.getElementById("descricaoResultado").innerHTML="Você está gordo igual uma baleia! Emagreça, ou você pode morrer cedo! Vá urgentemente a um cardiologista!";
    }
    else if(resultado>=35 && resultado <40){
        document.getElementById("classeResultado").innerHTML="Obesidade grau 2";
        document.getElementById("descricaoResultado").innerHTML="Você está parecendo um elefante! Faça exercícios ou sua obesidade ainda pode te causar problemas de saúde!";
    }
    else if(resultado>=30 && resultado<35){
        document.getElementById("classeResultado").innerHTML="Obesidade grau 1";
        document.getElementById("descricaoResultado").innerHTML="Você está parecendo um botijãozinho! Faça exercícios e melhore sua saúde, com uma dieta mais adequada!";
    }
    else if(resultado>=25 && resultado<30){
        document.getElementById("classeResultado").innerHTML="Sobrepeso";
        document.getElementById("descricaoResultado").innerHTML="Você está um pouco acima do peso de acordo com os padrões do IMC. Cuide bem da sua dieta e faça atividades físicas.";
    }
    else if(resultado>18.5 && resultado<25){
        document.getElementById("classeResultado").innerHTML="Normal";
        document.getElementById("descricaoResultado").innerHTML="Você está com um IMC considerado normal. Nunca se esqueça de cuidar da saúde, com uma alimentação saudável.";
    }
    else{
        document.getElementById("classeResultado").innerHTML="Desnutrição";
        document.getElementById("descricaoResultado").innerHTML="Você está com um IMC abaixo do normal. Cuidado, pode significar desnutrição, anorexia e outros problemas de saúde.";
    }
}