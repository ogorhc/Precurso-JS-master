function Exchange(cantEuros,moneda){

    if (moneda == "libras"){
        var cambio = 0.86
    } else if (moneda == "dolares") {
        var cambio = 1.28611
    } else if (moneda == "yenes") {    
        var cambio = 129.852
    } else{
        alert("Introduce una moneda correcta: libras - dolares - yenes.")
    }
    let resultado  = `${cambio} ${moneda} es un 1€.`
    return resultado
}
let euros = parseFloat(prompt("Introduce la cantidad de euros a cambiar: "))
let moneda = prompt("Introduce la moneda de cambio: libras - dolares - yenes: ")
let resultado = Exchange(euros,moneda)
console.log(resultado)