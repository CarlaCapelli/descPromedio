//EJERCICIO 1 10% DE DESCUENTO

let precio: number = 450.5;
let descuento: number = precio * 0.1;
let precioFinal: number = precio - descuento;
console.log("El precio con descuento es de $" + precioFinal);

//EJERCICIO2

let tiempo: number = 0;
let suma: number = 0;
let promedio: number = 0;
for (let i: number = 0; i < 4; i++) {
  // tiempo = Number(prompt("Tiempo de vuelta"));
  suma = suma + tiempo;
  console.log(tiempo);
}
promedio = suma / 4;

console.log(" el tiempo total es " + suma);
console.log("el promedio es de " + promedio);
