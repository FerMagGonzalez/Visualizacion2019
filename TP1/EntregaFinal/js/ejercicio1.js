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
    matriz[f][c] = Math.floor((Math.random() * 10000) + 1);
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


//máximo contenido en filas pares y mínimo en filas impares
let maxPar = matriz[0][0];
let minImpar = matriz[0][0];
//tomo la fila 0 como par aunque es la primer fila.
for (var f = 0; f < matriz.length; f++) {
  if (f % 2 == 0){
    for (var c = 0; c < matriz[f].length; c++) {
      if (matriz[f][c] > maxPar) {
        maxPar = matriz[f][c];
        fMax = f;
        cMax = c;
      }
    }
  }
  else{
    for (var c = 0; c < matriz[f].length; c++) {
      if (matriz[f][c] < minImpar) {
        minImpar = matriz[f][c];
        fMin = f;
        cMin = c;
      }
    }
  }
}
//Muestro por consola el inciso 1.b
console.log("El valor máximo de las filas pares (" + fMax +","+ cMax + ") es: " + maxPar +
            " y el valor minimo de las filas impares (" + fMin +","+ cMin + ") es: " + minImpar);


// El valor promedio de cada fila guardado en un arreglo.
let promedio = new Array(100);
for (var f = 0; f < matriz.length; f++) {
  let prom = 0;
  for (var c = 0; c < matriz[f].length; c++) {
    prom = prom + matriz[f][c];
  }
  promedio[f] = (prom / matriz[f].length);
}
//Muestro la matriz por consola
console.table(promedio);