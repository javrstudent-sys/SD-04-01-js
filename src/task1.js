const arr = []

// Escribe tu codigo por debajo de esta linea
//* Usamos el ciclo for para agregar los numeros del 1 al 20 con push(i)
for (let i = 1; i <= 20; i++) {
  arr.push(i);
}
console.log(arr);
console.log(`La longitud del array es: ${arr.length}`);
// Escribe tu codigo por encima de esta linea

//No tocar esta funcion
export function taskArr() {
  return arr;
}
