
let cancelar = document.getElementById('cancelar');
function calcularDNI(){
    let id = document.getElementById('dni');
    let result = document.getElementById('resultado');
    let valor = id.value;
         console.log(valor);
    let tamano = valor.length;
    let arrayLetras= ['T','R','W','A','G','M','Y','F','P','D','X','B','N','J','Z','S','Q','V','H','L','C','K','E'];
    let resultado;
    let numMaxDNI = 8;
    let numeroDivisor = 23;
    if(tamano > numMaxDNI || tamano < numMaxDNI){
        alert('Por favor introduce un codigo de 8 numeros');
        id.value = "";

    }else{
        resultado = (valor % numeroDivisor);

    let total = valor + "-" + arrayLetras[resultado];
    result.innerHTML = total;
    
    cancelar.src = 'img/cancelar.png';
    }
    
}

function borrarDNI(){
    let DNI = document.getElementById('dni');
    DNI.value = "";
    cancelar.hidden();
    


}



