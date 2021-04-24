// No cambies los nombres de las funciones.

function deObjetoAmatriz(objeto){
  // Escribe una función que convierta un objeto en una matriz, donde cada elemento representa 
  // un par clave-valor en forma de matriz.
  //Ejemplo: 
  /*objeto({
      D: 1,
      B: 2,
      C: 3
    }) ➞ [["D", 1], ["B", 2], ["C", 3]]*/
  //Escribe tu código aquí
  var matriz = [];
  for (let clave in objeto) {
    const elemento = objeto[clave];
    matriz.push([clave, elemento]);
  }
  return matriz;
}


function numberOfCharacters(string) {
  //La función recibe un string. Recorre el srting y devuelve el caracter con el número de veces que aparece 
  //en formato par clave-valor.
  //Ej: Recibe ---> "adsjfdsfsfjsdjfhacabcsbajda" || Devuelve ---> { a: 5, b: 2, c: 2, d: 4, f: 4, h:1, j: 4, s: 5 } 
  //Escribe tu código aquí
  var a=0,b=0,c=0,d=0,e=0,f=0,g=0,h=0,ii=0,j=0,k=0,l=0,m=0,n=0,ñ=0,o=0,p=0,q=0,r=0,s=0,t=0,u=0,v=0,w=0,x=0,y=0,z=0;
  for (let i = 0; i < string.length; i++) {
    if (string[i] === "a"){
      a = a + 1;
    }else if (string[i] === "b"){
      b = b + 1;
    }else if (string[i] === "c"){
      c = c + 1;
    }else if (string[i] === "d"){
      d = d + 1;
    }else if (string[i] === "e"){
      e = e + 1;
    }else if (string[i] === "f"){
      f = f + 1;
    }else if (string[i] === "g"){
      g = g + 1;
    }else if (string[i] === "h"){
      h = h + 1;
    }else if (string[i] === "i"){
      ii = ii + 1;
    }else if (string[i] === "j"){
      j = j + 1;
    }else if (string[i] === "k"){
      k = k + 1;
    }else if (string[i] === "l"){
      l = l + 1;
    }else if (string[i] === "m"){
      m = m + 1;
    }else if (string[i] === "n"){
      n = n + 1;
    }else if (string[i] === "ñ"){
      ñ = ñ + 1;
    }else if (string[i] === "o"){
      o = o + 1;
    }else if (string[i] === "p"){
      p = p + 1;
    }else if (string[i] === "q"){
      q = q + 1;
    }else if (string[i] === "r"){
      r = r + 1;
    }else if (string[i] === "s"){
      s = s + 1;
    }else if (string[i] === "t"){
      t = t + 1;
    }else if (string[i] === "u"){
      u = u + 1;
    }else if (string[i] === "v"){
      v = v + 1;
    }else if (string[i] === "w"){
      w = w + 1;
    }else if (string[i] === "x"){
      x = x + 1;
    }else if (string[i] === "y"){
      y = y + 1;
    }else if (string[i] === "z"){
      z = z + 1;
    }
  }
  
  let contadorletras = {};
  if (a > 0) {
    contadorletras.a = a;
  }
  if (b > 0){
    contadorletras.b = b;
  }
  if (c > 0){
    contadorletras.c = c;
  }
  if (d > 0){
    contadorletras.d = d;
  }
  if (e > 0){
    contadorletras.e = e;
  }
  if (f > 0){
    contadorletras.f = f;
  }
  if (g > 0){
    contadorletras.g = g;
  }
  if (h > 0){
    contadorletras.h = h;
  }
  if (ii > 0){
    contadorletras.i = ii;
  }
  if (j > 0){
    contadorletras.j = j;
  }
  if (k > 0){
    contadorletras.k = k;
  }
  if (l > 0){
    contadorletras.l = l;
  }
  if (m > 0){
    contadorletras.m = m;
  }
  if (n > 0){
    contadorletras.n = n;
  }
  if (ñ > 0){
    contadorletras.ñ = ñ;
  }
  if (o > 0){
    contadorletras.o = o;
  }
  if (p > 0){
    contadorletras.p = p;
  }
  if (q > 0){
    contadorletras.q = q;
  }
  if (r > 0){
    contadorletras.r = r;
  }
  if (s > 0){
    contadorletras.s = s;
  }
  if (t > 0){
    contadorletras.t = t;
  }
  if (u > 0){
    contadorletras.u = u;
  }
  if (v > 0){
    contadorletras.v = v;
  }
  if (w > 0){
    contadorletras.w = w;
  }
  if (x > 0){
    contadorletras.x = x;
  }
  if (y > 0){
    contadorletras.y = y;
  }
  if (z > 0){
    contadorletras.z = z;
  }
  return contadorletras;
}


function capToFront(s) {
  //Realiza una función que reciba como parámetro un string y mueva todas las letras mayúsculas
  //al principio de la palabra.
  //Ejemplo: soyHENRY -> HENRYsoy
  //Escribe tu código aquí
}


function asAmirror(str) {
  //La función recibe una frase. 
  //Escribe una función que tome la frase recibida y la devuelva de modo tal que se pueda leer de izquierda a derecha 
  //pero con cada una de sus palabras invertidas, como si fuera un espejo.
  //Ej: Recibe ---> "The Henry Challenge is close!" || Devuelve ---> "ehT yrneH egnellahC si !esolc"
  //Escribe tu código aquí
} 


function capicua(numero){
  //Escribe una función, la cual recibe un número y determina si es o no capicúa.
  //La misma debe retornar: "Es capicua" si el número se número que se lee igual de 
  //izquierda a derecha que de derecha a izquierda. Caso contrario retorna "No es capicua"
  //Escribe tu código aquí
}


function deleteAbc(cadena){
  //Define una función que elimine las letras "a", "b" y "c" de la cadena dada 
  //y devuelva la versión modificada o la misma cadena, en caso de contener dichas letras.
  //Escribe tu código aquí
}


function sortArray(arr) {
  //La función recibe una matriz de strings. Ordena la matriz en orden creciente de longitudes de cadena
  //Ej: Recibe ---> ["You", "are", "beautiful", "looking"] || Devuelve ---> [“You", "are", "looking", "beautiful"]
  //Escribe tu código aquí
}


function buscoInterseccion(arreglo1, arreglo2){
  //Existen dos arrays, cada uno con 5 números. A partir de ello, escribir una función que permita 
  //retornar un nuevo array con la intersección de ambos elementos. (Ej: [4,2,3] unión [1,3,4] = [3,4].
  //Si no tienen elementos en común, retornar un arreglo vacío.
  //Aclaración: los arreglos no necesariamente tienen la misma longitud
  //Escribe tu código aquí  
}



// No modificar nada debajo de esta línea
// --------------------------------

module.exports = {
   deObjetoAmatriz,
   numberOfCharacters,
   capToFront,
   asAmirror,
   capicua,
   deleteAbc,
   sortArray,
   buscoInterseccion,
};

