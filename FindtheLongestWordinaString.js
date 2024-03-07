Find the Longest Word in a String
Return the length of the longest word in the provided sentence.

Your response should be a number.

SOLUCIÓN:
function findLongestWordLength(str) {
  let longestLength = 0;   // Variable para almacenar la longitud de la palabra más larga
  let currentLength = 0;   // Variable para almacenar la longitud de la palabra actual

  // Recorre cada caracter en la cadena
  for (let i = 0; i < str.length; i++) {
    // Si el caracter actual es un espacio en blanco
    if (str[i] === " ") {
      // Verifica si la longitud de la palabra actual es mayor que la longitud de la palabra más larga
      if (currentLength > longestLength) {
        // Si es así, actualiza la longitud de la palabra más larga
        longestLength = currentLength;
      }
      // Restablece la longitud de la palabra actual a 0
      currentLength = 0;
    } else {
      // Si el caracter actual no es un espacio en blanco, incrementa la longitud de la palabra actual
      currentLength++;
    }
  }

  // Después de recorrer la cadena, verifica una última vez si la longitud de la última palabra es la más larga
  if (currentLength > longestLength) {
    longestLength = currentLength;
  }

  // Devuelve la longitud de la palabra más larga encontrada en la cadena
  return longestLength;
}


//RAZONAMIENTO
/*
tengo la función : findLongestWordLength(str)
declaro minWord y maxWord
hago un bucle for i = 0, i < str.lenght, i++
if 

*/ 
