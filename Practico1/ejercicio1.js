//***********************Ejercicio 1*************************
//Declaración del array de 100 posiciones
let matriz = new Array(100);

//Bucle para meter en cada posición otros array de 100
for(var i=0; i<matriz.length; i++) {
    matriz[i] = new Array(100);
}

//Bucle para meter los valores aleatorios
for (var f = 0; f < matriz.length; f++) {
  for (var c = 0; c < matriz[f].length; c++) {
    matriz[f][c] = Math.floor((Math.random() * 1000) + 1);
  }
}
//Muestro la matriz por consola
console.table(matriz);


//El valor máximo de toda la matriz
let max = matriz[0][0];
for (var f = 0; f < matriz.length; f++) {
  for (var c = 0; c < matriz[f].length; c++) {
    posibleMax = matriz[f][c];
    if (posibleMax > max) {
      max = posibleMax;
    }
  }
}
//Muestro por consola el inciso 1.a
console.log("El valor máximo de toda la matriz es: " + max);


//máximo contenido en filas pares  y mínimo en filas impares
let maxPar
