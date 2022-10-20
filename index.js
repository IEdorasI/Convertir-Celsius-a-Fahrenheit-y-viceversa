let valor;
let resultado;  


function convertir (){
    valor = prompt('Ingresa un valor en °F o °C: ');
    const faren = /\d\°F$/gi
    const cent = /\d\°C$/gi
    const comprobacion = faren.test(valor);
    const comprobacion2 = cent.test(valor);
    if (comprobacion === true ){
        resultado = (parseInt(valor) - 32) / 1.8
        alert(resultado);
    } else if (comprobacion2 === true){
        resultado = parseInt(valor) * 1.8 + 32;
        alert(resultado);
    }else {
        alert ('Ingresa un valor aceptado')
    }
}