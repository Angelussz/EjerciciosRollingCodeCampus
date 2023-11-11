"use strict"
// Ejercici 6
let numeroComparar1 = parseInt(
  prompt("Ingrese un número para comparar entre 2")
);
let numeroComparar2 = parseInt(
  prompt("Ingrese un número para comparar entre 2")
);
if (numeroComparar1 > numeroComparar2)
  document.write("Número mayor " + numeroComparar1);
else document.write("<br> Número mayor: " + numeroComparar2);
// Ejercicio 7
let numeroMayor1 = parseInt(prompt("Ingrese un número para comparar entre 3"));
let numeroMayor2 = parseInt(prompt("Ingrese un número para comparar entre 3"));
let numeroMayor3 = parseInt(prompt("Ingrese un número para comparar entre 3"));
if (numeroMayor1 < numeroMayor2) numeroMayor1 = numeroMayor2;
if (numeroMayor1 < numeroMayor3) numeroMayor1 = numeroMayor3;
document.write("<br> Número mayor de tres es: " + numeroMayor1);
// Ejercico 8
let numeroDivisible = parseInt(
  prompt("Ingrese un número para ver si es divisible entre 2")
);
if (numeroDivisible % 2 === 0)
  document.write("<br> El " + numeroDivisible + " es divisible por 2");
else document.write("<br> El " + numeroDivisible + " no es divisible por 2");
// Ejercicio 9
let frase = prompt("Ingrese una frase");
let vocales = "";
for (const letra of frase) {
  if (
    letra === "a" ||
    letra === "e" ||
    letra === "i" ||
    letra === "o" ||
    letra === "u"
  ) {
    vocales += letra;
  }
}
document.write("<br> La frase "+ frase + " se simplifica a estas vocales " + vocales);

// Ejercicio 10
let numeroDivisibleEntreNumeros = parseInt(
  prompt("Ingrese un número para comprobar si es divisible por 2,3,5 o 7")
);
if (numeroDivisibleEntreNumeros % 2 === 0) {
  document.write(
    "<br> El " + numeroDivisibleEntreNumeros + " es divisible por 2"
  );
} else {
  if (numeroDivisibleEntreNumeros % 3 === 0) {
    document.write(
      "<br> El " + numeroDivisibleEntreNumeros + " es divisible por 3"
    );
  } else {
    if (numeroDivisibleEntreNumeros % 5 === 0) {
      document.write(
        "<br> El " + numeroDivisibleEntreNumeros + " es divisible por 5"
      );
    } else {
      if (numeroDivisibleEntreNumeros % 7 === 0) {
        document.write(
          "<br> El " + numeroDivisibleEntreNumeros + " es divisible por 7"
        );
      }
    }
  }
}
// Ejercicio 11
let numeroDivisibleEntreNumeros2 = parseInt(
  prompt("Ingrese un número para comprobar si es divisible por 2,3,5 o 7")
);
const divisibles = [];
if (numeroDivisibleEntreNumeros2 % 2 === 0) {
  divisibles.push(2);
}

if (numeroDivisibleEntreNumeros2 % 3 === 0) {
  divisibles.push(3);
}

if (numeroDivisibleEntreNumeros2 % 5 === 0) {
  divisibles.push(5);
}

if (numeroDivisibleEntreNumeros2 % 7 === 0) {
  divisibles.push(7);
}
document.write(
  "<br> El " +
    numeroDivisibleEntreNumeros2 +
    " es divisible "
);
if (divisibles.length === 1) {
  document.write(
    "por " +
      divisibles[0]
  );
} else {
    document.write(
        "por " +
          divisibles[0]
      );
  for (let i = 1; i < divisibles.length; i++) {
    if (i === divisibles.length - 1) document.write(" y por " + divisibles[i]);
    else document.write(",por " + divisibles[i]);
  }
}
