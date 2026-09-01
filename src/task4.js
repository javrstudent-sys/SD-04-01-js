const arr = [1,2,3,4,5,5,6,7,8,9,10,11,12,13,14]

// Escribe tu codigo por debajo de esta linea
//* Eliminamos apartir del indice 5, 1 elemento. borrando el 2do 5

console.log(`El array original es: ${arr}, con un 5 duplicado.`);
arr.splice(5,1);
console.log(`El array resultante es: ${arr}, sin duplicados.`);

// TEscribe tu codigo por encima de esta linea

//No tocar esta funcion
export function taskArr(){
  return arr;
}
