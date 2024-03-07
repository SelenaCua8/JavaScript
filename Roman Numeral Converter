Convert the given number into a roman numeral.

function convertToRoman(num) {
let romans = ['M','CM','D','CD','C', 'XC', 'L', 'XL', 'X', 'IX', 'V', 'IV','I'];
let values = [1000,900,500,400,100,90,50,40,10,9,5,4,1];
let res ='';

values.forEach((value, i) =>{
  while(num >= value){
    res = res + romans[i];
    num = num - value;
  }
})
  

 return res;
}

convertToRoman(36);

/*
1- creo un arreglo de los numeros romanos
2- crear un arreglo con los numeros normales
3- iterar los romanos por cada romano, i(indice) de romanos
4- while(n >= value){
  n=n-value
  res = res + romans[i]
}
*/
