function MayorMenor(PrimerNumero,SegundoNumero){
    if (PrimerNumero > SegundoNumero){
        return true
    }
    else {
        return false
    }
}
let num1 = parseInt(prompt("Introduce el primer número: "))
let num2 = parseInt(prompt("Introduce el segundo número: "))
let respuesta = MayorMenor(num1, num2)

if(respuesta == true){
    console.log(`El primer número ${num1} es mayor que el segundo número ${num2}.`)
}
else {
    console.log(`El segundo número ${num2} es mayor que el primer número ${num1}.`)
}