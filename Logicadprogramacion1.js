
let num1 = parseFloat(prompt("Ingresar el primer número:"));
let num2 = parseFloat(prompt("Ingresar el segundo número:"));
let num3 = parseFloat(prompt("Ingresar el tercer número:"));

function ordenarNumeros(a, b, c) {
    let mayor, medio, menor;

    if (a >= b && a >= c) {
        mayor = a;
        if (b >= c) {
            medio = b;
            menor = c;
        } else {
            medio = c;
            menor = b;
        }
    } else if (b >= a && b >= c) {
        mayor = b;
        if (a >= c) {
            medio = a;
            menor = c;
        } else {
            medio = c;
            menor = a;
        }
    } else {
        mayor = c;
        if (a >= b) {
            medio = a;
            menor = b;
        } else {
            medio = b;
            menor = a;
        }
    }

    return { mayor, medio, menor };
}

let { mayor, medio, menor } = ordenarNumeros(num1, num2, num3);

console.log("Números ordenados de mayor a menor:", mayor, medio, menor);
console.log("Números ordenados de menor a mayor:", menor, medio, mayor);

if (num1 === num2 && num2 === num3) {
    console.log("Los números son iguales.");
}
