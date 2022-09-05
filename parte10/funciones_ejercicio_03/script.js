function division(primerNumero,segundoNumero){
    let resultado = primerNumero/segundoNumero;
    return resultado;
}

do {
    var num1 = prompt("Introduce el primero número: ");
    var num2 = prompt("Introduce el segundo número (Introduce el valor 0 para terminar el proceso): ");
    var resultado = division(num1,num2);
    if (resultado != Infinity){
        alert(`El resultado es ${resultado}.`)
    }
    else{
        alert(`Ha introducido 0 como segundo valor.`)
    }
}while (num2 != 0);
