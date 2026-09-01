const arr = [1,2,3,4,5,6,7,9,10,11,12]

// Escribe tu codigo por debajo de esta linea
//* Agregamos apartir del indice 7 el numero 8, sin elimanar nada (0)
arr.splice(7,0,8);
console.log(arr);
console.log(`La longitud del array es: ${arr.length}`);
// TEscribe tu codigo por encima de esta linea

//No tocar esta funcion
export function taskArr(){
  return arr;
}
