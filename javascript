em javascript temos como voce vai escrever o codigo precisamos de lógica e algo que e só tem na linguagem,

console. 
https://developer.mozilla.org/pt-BR/docs/Web/API/console

primeiro os operadores

operador || indica o valor lógico or ou, em português, ou. Ele produz um valor verdadeiro se qualquer um dos valores dados à ele for verdadeiro.
O operador && representa o valor lógico and ou, em português, e. Ele é um operador binário, e seu resultado é apenas verdadeiro se ambos os valores dados à ele forem verdadeiros.

Alguns valores são criados digitando seu nome (true, null) ou valores (13, "abc"). Você pode combinar e transformar valores com operadores. 
Nós vimos operadores binários para operações aritméticas (+, -, *, /, e %), 
um para concatenação de String (+), comparação (==, !=, ===, !==, <, >, <=, >=) e lógica (&&, ||),
assim como vários operadores unários (- para negativar um número,
! para negar uma lógica, typeof para encontrar o tipo do valor) e o operador ternario (?:) para retornar um de dois valores, baseando-se em um terceiro valor.

Para números muito grandes ou pequenos, você pode usar a notação científica adicionando um “e” (de “expoente”) seguido do valor do expoente:

2.998e8 = 2.988 . 10.8


Variáveis 
var "" = "" assim funciona as variaveis com algumas regras Nomes de variáveis ​​podem ser quase qualquer palavra, menos as reservadas para palavras-chave (como var).
Não pode haver espaços incluídos. Dígitos numéricos também podem fazer parte dos nomes de variáveis ​​- catch22é um nome válido,
por exemplo - mas um nome não pode iniciar com um dígito numérico.
O nome de uma variável não pode incluir pontuação, exceto pelos caracteres $ e _.
voce também pode usar vaŕiaveis com operadores e mudar o valor dela 
var luigisDebt = 140;
luigisDebt = luigisDebt - 35;
console.log(luigisDebt);
// 105

let voce pode declarar uma variavel mutavel onde voce podera mudar ela depois
let age = 10 
age =15

const voce declara algo imutavel
const tempo = 16
tempo = 12 = error




Funções 
console.log Esta não é uma variável simples, mas na verdade uma expressão que retorna o campo logdo valor contido na variável console.
Por exemplo, temos a função Math.max, que pega dois números e retorna o maior entre eles:

console.log(Math.max(2, 4));

onsole também e tudo que vai para o console, caso voce tenha uma variavel como let x; ela será undefned mas se voce colocar console.log(typeoff x) vai retornar o tipo de variavel que e o x

 
