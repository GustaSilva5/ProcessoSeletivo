// String a ser invertida
const str = "Exemplo de string para ser invertida";

// Variável para armazenar a string invertida
let strInvertida = "";

// Loop para percorrer a string de trás para frente
for (let i = str.length - 1; i >= 0; i--) {
  strInvertida += str[i];
}

// Imprime a string original e a invertida
console.log(`String original: ${str}`);
console.log(`String invertida: ${strInvertida}`);
