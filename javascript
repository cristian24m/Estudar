em javascript temos como voce vai escrever o codigo precisamos de lógica e algo que e só tem na linguagem,


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

console. 
https://developer.mozilla.org/pt-BR/docs/Web/API/console
console.log Esta não é uma variável simples, mas na verdade uma expressão que retorna o campo logdo valor contido na variável console.
Por exemplo, temos a função Math.max, que pega dois números e retorna o maior entre eles:

console.log(Math.max(2, 4));

onsole também e tudo que vai para o console, caso voce tenha uma variavel como let x; ela será undefned mas se voce colocar console.log(typeoff x) vai retornar o tipo de variavel que e o x

. 
.lenth lembra quantas letras tem 
.sbstring(0, 5) somente ira aparecer as primeiras 5 letras
.toUpperCase deixa maiusculo
.split ('') ele vai deixar tudo entre"" 


bloco 
normalmente uma estrutura nomeada e que seus dados ficam dentro de uma chave
cristian{
age:17;
name:'cristian';
hobiees[jogar,comer]
}
cristian.email = 'cristian@teste'; //assim eu adiciono algo a um bloco

IF
Else if 
Else
dentro de um if voce pode colocar outro if mas o melhor é usar &&

quando voce vai declarar uma variavel voce pode usar outra de condição
const x = 11;
const color = x > 10 ? 'red' : 'blue'; 
red true, blue false

No caso do `switch`, o uso do `break` não está relacionado a loops, mas sim ao controle do fluxo de execução dentro da estrutura `switch`. Vamos entender por que o `break` é necessário e como ele funciona nesse contexto.
O que é o `switch`
O `switch` é uma estrutura de controle condicional que avalia uma expressão (neste caso, a variável `color`) e executa o código correspondente ao caso (`case`) que combina com o valor da expressão.

### **Por que usar o `break` no `switch`?**
O `break` é usado para **interromper a execução do `switch`** após encontrar um caso correspondente. Sem o `break`, o código continuará executando os casos subsequentes, mesmo que eles não correspondam ao valor da expressão.

---

### **O `switch` é um loop?**
Não, o `switch` **não é um loop**. Ele não repete a execução de código como um `for` ou `while`. Em vez disso, ele avalia a expressão uma única vez e executa o caso correspondente. O `break` é necessário para evitar que o fluxo "caia" nos outros casos.

---

### **O que acontece sem o `break`?**
Se você omitir o `break`, o código continuará executando os casos subsequentes, mesmo que eles não correspondam ao valor da expressão. Isso é chamado de **"fall-through"**.

#### Exemplo sem `break`:
```javascript
const color = 'red';

switch (color) {
    case 'red':
        console.log('color is red');
    case 'blue':
        console.log('color is blue');
    default:
        console.log('color is not red or blue');
}
```

**Saída:**
```
color is red
color is blue
color is not red or blue
```

Aqui, o código executa todos os casos após o primeiro correspondente (`case 'red'`), porque não há `break` para interromper o fluxo.

---

### **Exemplo com `break`:**
```javascript
const color = 'red';

switch (color) {
    case 'red':
        console.log('color is red');
        break; // Interrompe o fluxo após este caso
    case 'blue':
        console.log('color is blue');
        break;
    default:
        console.log('color is not red or blue');
}
```

**Saída:**
```
color is red
```

Com o `break`, o código para de executar assim que encontra o caso correspondente.

---

### **Quando o `break` não é necessário?**
Se você quiser que vários casos compartilhem o mesmo bloco de código, pode omitir o `break`. Isso é útil em situações específicas.

#### Exemplo:
```javascript
const day = 'saturday';

switch (day) {
    case 'saturday':
    case 'sunday':
        console.log('It is the weekend!');
        break;
    default:
        console.log('It is a weekday.');
}
```

**Saída:**
```
It is the weekend!
```

Aqui, tanto `case 'saturday'` quanto `case 'sunday'` executam o mesmo bloco de código.

---

### **Resumo:**
- O `switch` **não é um loop**, mas o `break` é necessário para evitar que o código continue executando os casos subsequentes.
- Sem o `break`, o `switch` executa todos os casos após o primeiro correspondente (fall-through).
- Use o `break` para interromper o fluxo após o caso correspondente.
- Em situações específicas, você pode omitir o `break` para agrupar casos que compartilham o mesmo código.

Código semelhante encontrado com 1 tipo de licença


O trecho de código define uma função chamada `addNums` que realiza a soma de dois números e, em seguida, demonstra seu uso ao exibir o resultado no console.

### Explicação detalhada:

1. **Definição da função `addNums`:**
   ```javascript
   function addNums(num1, num2){
       return num1 + num2;
   }
   ```
   - A função `addNums` é declarada utilizando a palavra-chave `function`.
   - Ela aceita dois parâmetros, `num1` e `num2`, que representam os números que serão somados.
   - O corpo da função contém a instrução `return num1 + num2;`, que calcula a soma dos dois números e retorna o resultado para quem chamou a função.

2. **Chamada da função e exibição do resultado:**
   ```javascript
   console.log(addNums(5, 10));
   ```
   - A função `addNums` é chamada com os argumentos `5` e `10`. Esses valores são atribuídos aos parâmetros `num1` e `num2`, respectivamente.
   - A soma de `5` e `10` é calculada dentro da função, resultando em `15`.
   - O valor retornado pela função (`15`) é passado como argumento para o método `console.log`, que exibe o resultado no console.

### Resultado:
Quando o código é executado, o console exibirá:
```
15
```

### Contexto e utilidade:
- Este exemplo demonstra como criar e usar uma função simples para realizar operações matemáticas.
- Funções como `addNums` são úteis para encapsular lógica reutilizável, permitindo que o mesmo código seja usado em diferentes partes de um programa sem repetição.
- Embora este exemplo seja básico, ele pode ser expandido para incluir validações ou manipulações mais complexas, dependendo das necessidades do programa.


Uma **class** (classe) em JavaScript é uma estrutura que permite criar objetos com propriedades e métodos. Ela é uma forma mais moderna e legível de definir **funções construtoras** e herança, introduzida no ES6 (ECMAScript 2015). Classes são usadas para organizar e reutilizar código, especialmente em projetos maiores.

---

### Estrutura básica de uma classe:

```javascript
class Person {
    constructor(firstName, lastName) {
        this.firstName = firstName; // Propriedade 'firstName'
        this.lastName = lastName;   // Propriedade 'lastName'
    }

    // Método da classe
    getFullName() {
        return `${this.firstName} ${this.lastName}`;
    }
}

// Criando uma instância da classe
const person1 = new Person('Jon', 'Doe');
console.log(person1.getFullName()); // Saída: "Jon Doe"
```

---

### Explicação detalhada:

1. **Definição da classe:**
   ```javascript
   class Person {
       constructor(firstName, lastName) {
           this.firstName = firstName;
           this.lastName = lastName;
       }
   }
   ```
   - A palavra-chave `class` é usada para definir uma classe.
   - O método especial `constructor` é chamado automaticamente quando uma nova instância da classe é criada. Ele é usado para inicializar as propriedades do objeto.

2. **Propriedades:**
   - As propriedades, como `firstName` e `lastName`, são definidas dentro do `constructor` e associadas ao objeto com `this`.

3. **Métodos:**
   ```javascript
   getFullName() {
       return `${this.firstName} ${this.lastName}`;
   }
   ```
   - Métodos são funções definidas dentro da classe que podem ser chamadas em instâncias da classe.
   - No exemplo, `getFullName` retorna o nome completo da pessoa.

4. **Criando uma instância:**
   ```javascript
   const person1 = new Person('Jon', 'Doe');
   ```
   - A palavra-chave `new` é usada para criar uma nova instância da classe `Person`.
   - Os argumentos `'Jon'` e `'Doe'` são passados para o `constructor` e inicializam as propriedades `firstName` e `lastName`.

5. **Chamando métodos:**
   ```javascript
   console.log(person1.getFullName());
   ```
   - O método `getFullName` é chamado na instância `person1`, retornando o nome completo.

---

### Herança com classes:
Classes também suportam herança, permitindo que uma classe herde propriedades e métodos de outra.

```javascript
class Employee extends Person {
    constructor(firstName, lastName, jobTitle) {
        super(firstName, lastName); // Chama o constructor da classe pai
        this.jobTitle = jobTitle;  // Propriedade adicional
    }

    getJobDescription() {
        return `${this.getFullName()} is a ${this.jobTitle}`;
    }
}

const employee1 = new Employee('Jane', 'Smith', 'Developer');
console.log(employee1.getJobDescription()); // Saída: "Jane Smith is a Developer"
```

- **`extends`**: Define que a classe `Employee` herda de `Person`.
- **`super`**: Chama o `constructor` da classe pai (`Person`) para inicializar as propriedades herdadas.

---

### Vantagens de usar classes:
1. **Organização:** Facilita a estruturação de código orientado a objetos.
2. **Reutilização:** Permite criar objetos com a mesma estrutura e comportamento.
3. **Herança:** Facilita a criação de hierarquias de classes.
4. **Legibilidade:** A sintaxe é mais clara e intuitiva em comparação com funções construtoras.


[[Protótipo]]

Quando lemos uma propriedade de object, e ela está ausente, o JavaScript a retira automaticamente do protótipo. Em programação, isso é chamado de "herança prototípica". E em breve estudaremos muitos exemplos dessa herança, bem como recursos mais interessantes da linguagem desenvolvidos com base nela.

A propriedade [[Prototype]]é interna e oculta, mas há muitas maneiras de defini-la.

Uma delas é usar o nome especial __proto__
