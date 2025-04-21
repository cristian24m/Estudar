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


