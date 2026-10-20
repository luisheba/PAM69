let total = 0;

for (let i = 1; i <= 5; i++) {
    let tamano = parseFloat(prompt("Ingrese el tamaño en MB del archivo " + i + ":"));
    total = total + tamano;
}

let promedio = total / 5;

console.log("Total: " + total + " MB");
console.log("Promedio: " + promedio + " MB");