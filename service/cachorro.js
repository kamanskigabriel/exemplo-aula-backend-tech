 export function somar(num1, num2) {
    if (isNaN(num1) || isNaN(num2)) {
        throw new Error("Por favor informar os números")
    }
    return num1 + num2
}
export function div(num1, num2){
    if(isNaN(num1) || isNaN(num2)){
        throw new Error("Por favor informar os números")
    }
    if (num2 == 0){
        throw new Error("Não é possível dividir por zero")
    }

    return num1 / num2
}