eOperadores Lógicos e Aritméticos
|| (OR): Retorna verdadeiro se pelo menos um dos valores for verdadeiro.
&& (AND): Retorna verdadeiro apenas se ambos os valores forem verdadeiros.
Aritméticos: +, -, *, /, % (resto da divisão)
Concatenação de String: +
Comparação: ==, !=, ===, !==, <, >, <=, >=
Unários: - (nega número), ! (nega lógica), typeof (tipo do valor)
Ternário: condição ? valor1 : valor2
Notação Científica
Para números muito grandes ou pequenos: 2.998e8 = 2.998 × 10⁸
Variáveis
var: Declara variável (antigo, evite usar)
let: Variável mutável (você pode mudar o valor depois)
js
let idade = 10;
idade = 15;
const: Valor constante (não pode ser alterado)
js
const tempo = 16;
// tempo = 12; // erro!
Regras de nomes: não pode começar com número, pode usar $ e _.
Funções
Função para somar:
js
function addNums(num1, num2){
  return num1 + num2;
}
console.log(addNums(5, 10)); // 15
Console
console.log(valor): Mostra valor no console
console.log(typeof x): Mostra o tipo da variável x
Strings
"abc".length → Conta letras/caracteres
"abcdef".substring(0, 5) → "abcde"
"abc".toUpperCase() → "ABC"
"a-b-c".split('-') → ["a", "b", "c"]
Arrays
Definição: Estrutura para armazenar vários valores em uma variável.
js
let frutas = ["maçã", "banana", "laranja"];
Acessando valores: Índice começa em 0
js
console.log(frutas[1]); // "banana"
push: Adiciona elemento ao final
js
frutas.push("uva"); // ["maçã", "banana", "laranja", "uva"]
pop: Remove o último elemento e retorna ele
js
let ultima = frutas.pop(); // ultima="uva", frutas=["maçã", "banana", "laranja"]
length: Tamanho do array
js
console.log(frutas.length); // 3
Tipos de Dados e typeof
typeof: Descobre o tipo de dado de uma variável/valor.

js
typeof 42; // "number"
typeof "texto"; // "string"
typeof true; // "boolean"
typeof [1,2,3]; // "object" (array é tipo objeto)
typeof {nome: "Ana"}; // "object"
typeof undefined; // "undefined"
typeof null; // "object" (peculiaridade do JS)
Principais tipos de dados:

number: números (inteiros, decimais)
string: texto
boolean: true/false
object: objetos e arrays
undefined: valor não definido
null: nulo (ausência de valor)
function: funções
Objetos
js
let pessoa = {
  nome: 'cristian',
  idade: 17,
  hobbies: ['jogar','comer']
};
pessoa.email = 'cristian@teste'; // adicionando novo atributo
Estruturas de Controle
if / else if / else
js
if (condicao) {
  // código
} else if (outraCondicao) {
  // código
} else {
  // código
}
Operador Ternário
js
const x = 11;
const color = x > 10 ? 'red' : 'blue'; // "red" se x > 10, senão "blue"
switch
js
const color = 'red';
switch (color) {
  case 'red':
    console.log('color is red');
    break;
  case 'blue':
    console.log('color is blue');
    break;
  default:
    console.log('color is not red or blue');
}
Sem o break, ele executa todos os casos seguintes (fall-through).
Use break para parar a execução após o caso correspondente.
Classes
js
class Person {
  constructor(firstName, lastName) {
    this.firstName = firstName;
    this.lastName = lastName;
  }
  getFullName() {
    return `${this.firstName} ${this.lastName}`;
  }
}
const p1 = new Person('Jon', 'Doe');
console.log(p1.getFullName()); // "Jon Doe"
Herança
js
class Employee extends Person {
  constructor(firstName, lastName, jobTitle) {
    super(firstName, lastName);
    this.jobTitle = jobTitle;
  }
  getJobDescription() {
    return `${this.getFullName()} is a ${this.jobTitle}`;
  }
}
Propriedades e Herança (Protótipo)
Se uma propriedade não existir no objeto, o JS procura no protótipo.
O protótipo pode ser acessado por __proto__ (mas evite usar diretamente).

Conversão de Tipos (Type Casting) em JavaScript
Type casting é o processo de converter um valor de um tipo para outro. Em JavaScript, isso pode acontecer de forma automática (coerção implícita) ou manual (conversão explícita).

Conversão Explícita
Você pode forçar a conversão de tipos usando funções específicas:

Para String:

js
String(123); // "123"
(123).toString(); // "123"
Para Number:

js
Number("123"); // 123
parseInt("123"); // 123
parseFloat("123.45"); // 123.45
Para Boolean:

js
Boolean(1); // true
Boolean(0); // false
Boolean(""); // false
Boolean("abc"); // true
Conversão Implícita
JavaScript pode converter tipos automaticamente em algumas situações:

Concatenação de string:
js
"10" + 2; // "102" (number 2 vira string)
Operação aritmética:
js
"10" - 2; // 8 (string vira número)
"10" * "2"; // 20
Comparação:
js
"5" == 5; // true (conversão implícita)
"5" === 5; // false (sem conversão, compara tipos)
Dicas
Use sempre a conversão explícita quando quiser garantir o tipo do valor.
Prefira o uso de === (estritamente igual) para evitar surpresas com conversão implícita durante comparações.

SLICE - é função que voce coloca depois do array, array.slice que cria uma nova lista onde voce pode colocar em uma nova variável, e os parametros são comeco e fim slice(0, 19) e o 19 nã
entre na nova lista, mas não é obrigatório ter final, se eu quero do 5 ate o fim só colocar (5).

SPLICE - poder deletar uma série de itens a partir do primeiro parametro  então slice(4, 9) vou apagra nove itens a partir do item 4.
