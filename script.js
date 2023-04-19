var tela = document.getElementById("digitos"); 
console.log(tela)
function addtela(value){
    tela.value += value;
}

function removetela(){
    tela.value = '';
}

function result(){
    let resultado = eval(tela.value)
    tela.value = resultado;
}