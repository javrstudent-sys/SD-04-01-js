const arr = [
    [0,1,2,3,4,5,6,7,8,9],
    [10,11,12,13,14,15,16,17,18,19],
    [20,21,22,23,24,25,26,27,28,29]
  ];
  
  // Type your code below this line!
//* ¿Pueden agregar un solo número a una fila existente?
arr[0].push(10);
//console.log(arr);
//? Lo logre aplicando push al indice 0 del array que corresponde al indice de la primera fila. Intente usar tambien el indice de la columna pero me marca un error de indefinido. Así que aplique push al indice de la fila y funciono correctamente.

//*¿Pueden agregar una fila completa de números?
arr.push([30,31,32,33,34,35,36,37,38,39]);
//console.log(arr);
//? Lo logre aplicando push al array principal y agregando un nuevo array con los elementos de la nueva fila. intente usar un indice "nuevo" para la nueva fila pero me marca un error. Así que aplique push al array principal sin indice y funciono correctamente.

//*¿Puedes eliminar un solo número de una fila específica?
arr[3].push(400); //? primero agreggo un numero a la fila 4 para poder eliminarlo despues.
//console.log(arr);
arr[3].splice(10, 1); //? Elimina el número 40 de la  fila 4
//console.log(arr);
//*¿Pueden invertir una de las filas sin afectar a las demás?
arr[3].reverse();
//? usamos reverse aplicado al indice 3 del array que corresponde a la fila 4. para invertirla
console.log(arr);
  
  // Type your code above this line!