Operadores
Lógicos

|| (OR): Retorna verdadeiro se pelo menos um valor for verdadeiro.

&& (AND): Retorna verdadeiro somente se ambos forem verdadeiros.

! (NOT): Inverte o valor lógico.

Aritméticos

+ (adição)

- (subtração)

* (multiplicação)

/ (divisão)

% (resto da divisão)

** (exponenciação)

Comparação

== : compara valores (com coerção de tipo).

=== : compara valores e tipos (mais seguro).

!= : diferente (com coerção).

!== : diferente (sem coerção).

<, >, <=, >=.

Outros

Unários:

-x → inverte número.

typeof x → retorna o tipo.

Ternário:

const idade = 18;
const status = idade >= 18 ? "Adulto" : "Menor";

🔢 Notação Científica

Representa números muito grandes ou pequenos:

const c = 2.998e8; // 2.998 × 10^8

📦 Variáveis

var → antigo, escopo de função, sofre hoisting. Evite usar.

let → escopo de bloco, valor pode ser alterado.

const → escopo de bloco, valor constante.

Exemplo:

let idade = 10;
idade = 15;

const tempo = 16;
// tempo = 12; // Erro!

Regras de nomes

Não pode começar com número.

Pode usar _ e $.

Use camelCase para boas práticas.

🛠 Funções
Declarada
function addNums(a, b) {
  return a + b;
}

Função Anônima / Expressão
const subtrair = function(a, b) {
  return a - b;
};

Arrow Function
const multiplicar = (a, b) => a * b;

Dicas

Arrow functions não possuem this próprio.

Funções podem ser passadas como parâmetros (higher-order functions).

🖥 Console

console.log(valor) → imprime valor.

console.error("erro") → mostra erro.

console.table(obj) → imprime em tabela.

🔤 Strings
"abc".length;             // 3
"abcdef".substring(0, 5); // "abcde"
"abc".toUpperCase();      // "ABC"
"a-b-c".split('-');       // ["a","b","c"]
" teste ".trim();         // "teste"
"JS".includes("J");       // true

📚 Arrays
Criação
let frutas = ["maçã", "banana", "laranja"];

Métodos Principais

push → adiciona ao fim.

pop → remove último.

shift → remove primeiro.

unshift → adiciona no início.

length → tamanho.

Slice / Splice

slice(inicio, fim) → retorna cópia parcial (não altera original).

splice(inicio, qtd, ...itens) → altera o array (remove/adiciona).

Concat
let novo = arr1.concat(arr2);

Iteração
frutas.forEach(f => console.log(f));
let maiusculas = frutas.map(f => f.toUpperCase());
let filtradas = frutas.filter(f => f.startsWith("m"));
let temBanana = frutas.includes("banana");

🏷 Tipos de Dados

number

string

boolean

object

undefined

null

function

symbol (único e imutável)

bigint (números grandes)

Exemplo:

typeof 42;         // "number"
typeof [1,2,3];    // "object"
typeof null;       // "object" (peculiaridade)

🧑 Objetos
let pessoa = {
  nome: "Cristian",
  idade: 17,
  hobbies: ["jogar","comer"]
};
pessoa.email = "cristian@teste";


Acesso:

pessoa.nome;      // "Cristian"
pessoa["idade"];  // 17

🔁 Estruturas de Controle
Condicionais
if (x > 10) {
  ...
} else if (x > 5) {
  ...
} else {
  ...
}

Switch
switch(cor) {
  case "red": console.log("Vermelho"); break;
  case "blue": console.log("Azul"); break;
  default: console.log("Outra cor");
}

Loops
for (let i = 0; i < 5; i++) {}
while (condicao) {}
do {} while (condicao);
for (let item of array) {}
for (let chave in objeto) {}

🏗 Classes e Herança
class Person {
  constructor(nome, sobrenome) {
    this.nome = nome;
    this.sobrenome = sobrenome;
  }
  getFullName() {
    return `${this.nome} ${this.sobrenome}`;
  }
}

class Employee extends Person {
  constructor(nome, sobrenome, cargo) {
    super(nome, sobrenome);
    this.cargo = cargo;
  }
  getJobDescription() {
    return `${this.getFullName()} é ${this.cargo}`;
  }
}

🔄 Conversão de Tipos
Explícita
String(123);     // "123"
Number("123");   // 123
Boolean("");     // false

Implícita
"10" + 2;   // "102"
"10" - 2;   // 8
"5" == 5;   // true
"5" === 5;  // false

📝 Dicas Gerais

Prefira === em vez de ==.

Use const sempre que possível.

Arrays e objetos são mutáveis mesmo quando declarados com const.

Evite var.

Use template strings:

`Olá, ${nome}!`
