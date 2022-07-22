/*Botoes e inputs do index.html*/
var btnLimpar = document.querySelector(".botaoLimpar");
var btnSub = document.querySelector(".botaoSubtracao");
var btnDiv = document.querySelector(".botaoDivisao");
var btnMult = document.querySelector(".botaoMultiplicacao");
var btnSum = document.querySelector(".botaoSoma");
var btnIgual = document.querySelector(".botaoIgual");
var um = document.querySelector(".botaoUm");
var dois = document.querySelector(".botaoDois");
var tres = document.querySelector(".botaoTres");
var quatro = document.querySelector(".botaoQuatro");
var cinco = document.querySelector(".botaoCinco");
var seis = document.querySelector(".botaoSeis");
var sete = document.querySelector(".botaoSete");
var oito = document.querySelector(".botaoOito");
var nove = document.querySelector(".botaoNove");
var zero = document.querySelector(".botaoZero");
var apagar = document.querySelector(".botaoApagar")
var resultado = document.querySelector(".inputResultado");

/*Funcões de cálculos*/
function sum(number1,number2){
    return parseInt(number1)+parseInt(number2);
}
function mult(number1,number2){
    return number1*number2;
}
function sub(number1,number2){
    return number1-number2;
}
function div(number1,number2){
    return number1/number2;
}
function limpar(){
    return "";
}
/*Funções de checagem*/
function checaOperador(){
    if(resultado.value.includes("/")){
        return true;
    }else if(resultado.value.includes("*")){
        return true;
    }else if(resultado.value.includes("-")){
        return true;
    }else if(resultado.value.includes("+")){
        return true;
    }else if(resultado.value==""){
        return true;
    }else{
        return false;
    }
}
function chegaIgualdade(){
    if(resultado.value.includes("=")){
        resultado.value=limpar();
        return true;
    }
}
function quebraNumeros(){
    if(resultado.value.includes("/")){
        let aux = resultado.value.split("/");
        return div(aux[0],aux[1]);
    }else if(resultado.value.includes("*")){
        let aux = resultado.value.split("*");
        return mult(aux[0],aux[1]);
    }else if(resultado.value.includes("-")){
        let aux = resultado.value.split("-");
        return sub(aux[0],aux[1]);
    }else if(resultado.value.includes("+")){
        let aux = resultado.value.split("+");
        return sum(aux[0],aux[1]);
    }
    return "ERROR!";
}

/*Funcoes dos botoes*/
btnLimpar.addEventListener("click",function(){
    resultado.value=limpar();
});

um.addEventListener("click",function(){
    chegaIgualdade();
    resultado.value+="1";
});
dois.addEventListener("click",function(){
    chegaIgualdade();
    resultado.value+="2";
});
tres.addEventListener("click",function(){
    chegaIgualdade();
    resultado.value+="3";
});
quatro.addEventListener("click",function(){
    chegaIgualdade();
    resultado.value+="4";
});
cinco.addEventListener("click",function(){
    chegaIgualdade();
    resultado.value+="5";
});
seis.addEventListener("click",function(){
    chegaIgualdade();
    resultado.value+="6";
});
sete.addEventListener("click",function(){
    chegaIgualdade();
    resultado.value+="7";
});
oito.addEventListener("click",function(){
    chegaIgualdade();
    resultado.value+="8";
});
nove.addEventListener("click",function(){
    chegaIgualdade();
    resultado.value+="9";
});
zero.addEventListener("click",function(){
    chegaIgualdade();
    resultado.value+="0";
});
apagar.addEventListener("click",function(){
    if(chegaIgualdade()){
        return;
    }
    resultado.value = resultado.value.substring(0,resultado.value.length-1);
});

btnSub.addEventListener("click",function(){
    if(chegaIgualdade()){
        return;
    }
    if(checaOperador()){
        return;
    }
    resultado.value+="-";
});
btnSum.addEventListener("click",function(){
    if(chegaIgualdade()){
        return;
    }
    if(checaOperador()){
        return;
    }
    resultado.value+="+";
});
btnDiv.addEventListener("click",function(){
    if(chegaIgualdade()){
        return;
    }
    if(checaOperador()){
        return;
    }
    resultado.value+="/";
});
btnMult.addEventListener("click",function(){
    if(chegaIgualdade()){
        return;
    }
    if(checaOperador()){
        return;
    }
    resultado.value+="*";
});
btnIgual.addEventListener("click",function(){
    if(chegaIgualdade()){
        return;
    }
    resultado.value= "=" + quebraNumeros();
});