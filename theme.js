var theme = document.querySelector(".theme");
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
var body = document.querySelector("body");

theme.addEventListener("click",function(){
    if(theme.value=="white"){
        theme.value="dark";
        theme.textContent="White Theme 🌞";
        theme.classList.remove("theme");
        theme.classList.add("themeDark");
        body.style.backgroundColor="rgb(27, 24, 24)";
        body.style.color="white";
        um.classList.remove("whiteNum");
        um.classList.add("darkNum");
        dois.classList.remove("whiteNum");
        dois.classList.add("darkNum");
        tres.classList.remove("whiteNum");
        tres.classList.add("darkNum");
        quatro.classList.remove("whiteNum");
        quatro.classList.add("darkNum");
        cinco.classList.remove("whiteNum");
        cinco.classList.add("darkNum");
        seis.classList.remove("whiteNum");
        seis.classList.add("darkNum");
        sete.classList.remove("whiteNum");
        sete.classList.add("darkNum");
        oito.classList.remove("whiteNum");
        oito.classList.add("darkNum");
        nove.classList.remove("whiteNum");
        nove.classList.add("darkNum");
        zero.classList.remove("whiteNum");
        zero.classList.add("darkZero");
        btnLimpar.classList.remove("whiteOp");
        btnLimpar.classList.add("darkOp");
        btnSub.classList.remove("whiteOp");
        btnSub.classList.add("darkOp");
        btnDiv.classList.remove("whiteOp");
        btnDiv.classList.add("darkOp");
        btnMult.classList.remove("whiteOp");
        btnMult.classList.add("darkOp");
        apagar.classList.remove("whiteOp");
        apagar.classList.add("darkOp");
        btnIgual.classList.add("darkMaior");
        btnSum.classList.remove("whiteOp");
        btnSum.classList.add("darkMaior");
        resultado.classList.remove("whiteInput");
        resultado.classList.add("darkInput");
    }else if(theme.value=="dark"){
        theme.textContent="Dark Themes 🌕";
        theme.value="white";
        theme.classList.remove("themeDark");
        theme.classList.add("theme");
        body.style.backgroundColor="white"
        body.style.color="rgb(27, 24, 24)";
        um.classList.remove("darkNum");
        um.classList.add("whiteNum");
        dois.classList.remove("darkNum");
        dois.classList.add("whiteNum");
        tres.classList.remove("darkNum");
        tres.classList.add("whiteNum");
        quatro.classList.remove("darkNum");
        quatro.classList.add("whiteNum");
        cinco.classList.remove("darkNum");
        cinco.classList.add("whiteNum");
        seis.classList.remove("darkNum");
        seis.classList.add("whiteNum");
        sete.classList.remove("darkNum");
        sete.classList.add("whiteNum");
        oito.classList.remove("darkNum");
        oito.classList.add("whiteNum");
        nove.classList.remove("darkNum");
        nove.classList.add("whiteNum");
        zero.classList.remove("darkZero");
        zero.classList.add("whiteNum");
        btnLimpar.classList.remove("darkOp");
        btnLimpar.classList.add("whiteOp");
        btnSub.classList.remove("darkOp");
        btnSub.classList.add("whiteOp");
        btnDiv.classList.remove("darkOp");
        btnDiv.classList.add("whiteOp");
        btnMult.classList.remove("darkOp");
        btnMult.classList.add("whiteOp");
        apagar.classList.remove("darkOp");
        apagar.classList.add("whiteOp");
        btnIgual.classList.remove("darkMaior");
        btnSum.classList.remove("darkMaior");
        btnSum.classList.add("whiteOp");
        resultado.classList.remove("darkInput");
        resultado.classList.add("whiteInput");
    }
});