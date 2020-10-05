
let id = document.getElementById('dni');
let cancelar = document.getElementById('cancelar');
let result = document.getElementById('resultado');
let conta = 0;
let contaCancelar = 0;
function calcularDNI() {

    let valor = id.value;
    let tamano = valor.length;
    let arrayLetras = ['T', 'R', 'W', 'A', 'G', 'M', 'Y', 'F', 'P', 'D', 'X', 'B', 'N', 'J', 'Z', 'S', 'Q', 'V', 'H', 'L', 'C', 'K', 'E'];
    let resultado;
    let numMaxDNI = 8;
    let numeroDivisor = 23;




    if (tamano === numMaxDNI) {
        resultado = (valor % numeroDivisor);
        if (resultado > 0) {
            if (conta > 0) {
                result.style.visibility = 'visible';
                cancelar.style.visibility = 'visible';
            }

            let total = valor + "-" + arrayLetras[resultado];
            result.innerHTML = total;
            cancelar.src = 'img/cancelar.png';

        } else {
            alert("Introduce un dni de 8 digitos sin la letra (;");
            id.value = "";
        }
    }

}


function borrarDNI() {
    conta++;
    let DNI = document.getElementById('dni');

    DNI.value = "";
    result.style.visibility = 'hidden';
    cancelar.style.visibility = 'hidden';






}



