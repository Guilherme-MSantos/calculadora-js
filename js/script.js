var valor;
var resultado;
function botao(num){
    valor = document.calc.visor.value += num;
}
//* RESETAR O VISOR 
function reseta(){
    document.calc.visor.value = '';
}
//* EFETUAR O CALCULO 
function calcula(){
    resultado = eval(valor);
    document.calc.visor.value = resultado.toLocaleString('pt-BR');
}
 