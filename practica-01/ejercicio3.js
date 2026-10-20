let num = parseInt(prompt("Ingrese un número para calcular su tabla:"));

console.log("--- Tabla de multiplicar del " + num + " ---");

for (let i = 1; i <= 10; i++) {
    let resultado = num * i;
    console.log(num + " x " + i + " = " + resultado);
}