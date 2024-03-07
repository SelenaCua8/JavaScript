Factorialize a Number
Return the factorial of the provided integer.

If the integer is represented with the letter n, a factorial is the product of all positive integers less than or equal to n.

Factorials are often represented with the shorthand notation n!

For example: 5! = 1 * 2 * 3 * 4 * 5 = 120

Only integers greater than or equal to zero will be supplied to the function.

RESOLUCION:


function factorialize(num) {
  if (num === 0 || num === 1) {
    return 1;
  }

  let result = 1;

  while (num >= 2) {
    result *= num;
    num--;
  }

  return result;
}

let result = factorialize(5);
console.log(result); // Salida: 120

//razonamiento:
/* factorzar un numero es multiplicarlo hasta llegar a ese numero 
ejemplo 5 != 1 * 2 * 3 * 4 * 5 = 120
bueno, ahora lo que hay que hacer es:
si num = 0 return = si num = 1 return = 1;
for (let i = 2, i <= num, i++){
        result =* i
}



o con un while
while (num >= 2){
  result =* num
  num--;
}*/
