AULA 07 - SUPERTRUNFO PT.1: LÓGICA DO JOGO
---

Nesta sétima aula da Imersão Dev, vamos criar um jogo de cartas chamado Trunfo! 

## Conteúdo detalhado desta aula:

- Criar as cartas do jogo e definir seus atributos;
- Desenvolver uma função para sortear uma carta para o jogador e outra para a máquina;
- Exibindo os atributos das cartas na tela para o jogador;
- Obter o atribudo escolhido pelo jogador e comparar com a carta da máquina;
- Comparar o atributo de ambas as cartas e definir um vencedor.


--- 

### Notas sobre conseitos e observações:

**referência -** Quando criamos um objeto, declaramos nele nossas chaves e seus respectivos valores, porém, existem situações onde precisamos declarar outras chaves dentro ads chaves do objeto. Fazemos isso colocando-os entre chaves, como se fosse um objeto dentro de outro objeto, sendo quase um subatributo.

_Ex:_
~~~javascript
var carta1 = {
  nome: "Bulbassauro",
  atributos: {
    ataque: 7,
    defesa: 8,
    magia: 6
  }
};
~~~
>No exemplo acima a chave **atributos** recebe, também as chaves **ataque**, **defesa** e **magia**.

---

**grafo de referências -** usado para acessar as funções e atributos do nosso objeto, quando estes atributos estão dentro de outros atributos.

_Ex:_
~~~javascript
var carta1 = {
  nome: "Bulbassauro",
  atributos: {
    ataque: 7,
    defesa: 8,
    magia: 6
  }
};
console.log(carta1.atributos.ataque)/ 
~~~
>No exemplo acima acessaremos o atributo _ataque_ dentro do atributo _atributos_ do objeto **carta1**. o resultado será _7_.

---

**while -** é outro laço de repetição que possui uma sintaxe semelhante ao ```if```. Definiremos uma condição como em um ```if```, mas diferente dele, que será executado apenas uma vez, ela irá realziar a repetição "enquanto"  a condição não for atingida, assim como no ```for```.

_Ex:_
~~~javascript
function sortearCarta() {
  var numeroCartaMaquina = parseInt(Math.random() * 4);
  cartaMaquina = cartas[numeroCartaMaquina];

  var numeroCartaJogadore = parseInt(Math.random() * 4);
	while (numeroCartaMaquina == numeroCartaJogadore) {
    numeroCartaJogadore = parseInt(Math.random() * 4);
	}
}
~~~
>Este laço irá comparará os valores das variáveis ```numeroCartaMaquina``` e ```numeroCartaJogadore```, que serão sorteadas fora do laço, e irá ser executada repetidamente e somente quando a condição ```numeroCartaMaquina == numeroCartaJogadore``` for falsa, é que sairemos do ```while()``` e ele parará de ser executado.

---

**sintaxe highlight -** quando usamos API's e editores de código, eles trazem destaques para as sintaxes das linguaguens escritas neles se destacam, trazendo cores específicas para cada recurso da linguagem.

--- 

**getElementByName() -** semelhante ao ```getEelementById``` porém irá puxar os elementos pelo atributo HTML ```name```.

_Ex:_
~~~javascript
function exibirOpcoes() {
  var opcoes = document.getElementById("opcoes");
  var opcoesTexto = "";
  
  for (var atributo in cartaJogadore.atributos) {
    opcoesTexto += "<input type='radio' name='atributo' value='" + atributo + "'>" + atributo;
  }
  opcoes.innerHTML = opcoesTexto;
}
document.getElementByName("atributo"); 
~~~
>No trecho acima o ```getElementByName()``` está puxando o atributo HTMl ```name="atributo"``` passado junto à estrutura HTML para a variável ```opcoesTexto```. Ele tem como função gerar rádios de seleção que irão receber os valores do obejto **atributos**.

**-** _in:_ preposição "em" no inglês, usamos dentro do for (e outros laçoes?) para indicar que a condição irá ser exacuta em uma varredura "em cada" atributo de uma lista.

_Ex:_
~~~javascript
for (var atributo in cartaJogadore.atributos) {...}
~~~
>Este ```for``` com o comando ```in```, irá percorrer os obejtos atribuídos à variaável ```cartaJogadore``` buscando os valores do objeto **atributo** e usaremos isso para imprimir as cahves do objeto **atributos** na tela, através do HTML passado na variável ```opcoesTexto```.

---

**checked -** significa marcado, ou checado. Usamos esta propriedade como condição para checkboxes e rádios, para quando estão marcados. Podemos definir o estado, amrcado ou não, através dos parâmetros ```true``` ou ```false```.

_Ex:_
~~~javascript
function obetemAtributoSelecionado() {
  var radioAtributos = document.getElementsByName("atributo");
  
  for (var i = 0; i < radioAtributos.length; i++){
    if (radioAtributos[i].checked == true) {
      return radioAtributos[i].value
    }
  }
}
~~~
>O ```checked``` neste caso está sendo usado para condcionar se a opção escolhida está marcada ou não, caso ela esteja, retornaremos seu valor no índice selecionado em ```radioAtributos[i].value```

**-** _false_ ou _true:_ são propriedades que indicam se algo é falso ou verdadeiro. No exemplo acima condiciona que, se o rádio marcado estiver marcado, ou sej, for verdadeiro, o ```if``` será executado.

--- 

**Observações -** quando escreveos uma lista a declaramos como uma variável e, entre colchetes, atribuímos diversos valores e parâmetros, chamados de _chaves_ e seus respectivos _valores_.  

_Ex:_
~~~javascript
var umaListaGenerica = [chave1: "valor", chave2: "outro valor", etc: "etc"];
~~~

Porém nem sempre aquilo que está entre colchetes representa uma lista, podendo ser, também um objeto, como é possível ver no exemplo abaixo.

_Ex:_
~~~javascript
function jogar() {
var atributoSelecionado = obtemAtributoSelecionado();
console.log(atributoSelecionado)
console.log(cartaJogador.atributos[atributoSelecionado])
}
~~~
>Aqui não acessaremos a enésima posição, ou seja, o enésimo índice, desse obejo, ao invés disso, passaremos uam chave apra ele.

**-** _Escopo:_ podemos ver no projeto, que as variáveis ```var cartaMaquina``` e ```var cartaJogadore``` estão declaradas no escopo global do código, podendo, assim, serem usadas por todas as  estruturas do código. 

**-** _Lista de objetos:_ para este projeto declaramos um objeto para cada carta separadamente, como podemos ver a seguir.

_Ex:_
~~~javascript
var carta1 = {
  nome: "Bulbassauro",
  atributos: {
    ataque: 7,
    defesa: 8,
    magia: 6
  }
};
var carta2 = {
  nome: "Darth Vader",
  atributos: {
    ataque: 9,
    defesa: 8,
    magia: 2
  }
};
~~~

Porém a uma segunda forma de declararmos estes objetos e este mêtodo é em uma lsita de objetos. Para isso declaramos a lista normalmente ```var lista []```, e passamos os objetos, se parados por vírgula como em uma lsita comum, da mesma forma que os declaramos individualmente, mas sem a partícula ```var```.

_Ex:_
~~~javascript
var cartas = [ carta1 = {nome: "Bulbassauro", atributos: {ataque: 7, defesa: 8, magia: 6}}, 
              carta2 = {nome: "Darth Vader", atributos: {ataque: 9, defesa: 8, magia: 2}} ];
~~~

Para acessar os objetos e suas chaves fazemos como se estivessem declarados individualmente, a não ser que queiramos englobar todos os objetos da lista, aí então usamos o nome da lista declarada.

Podemos visualizar isso através do console:

_Ex:_
~~~javascript
console.log(cartas);
~~~

Ao inputarmos a lista **cartas** no ```console.log``` o resultado no console será o seguinte:

_Ex:_
~~~javascript
// [object Array] (2)
[// [object Object] 
{
  "nome": "Bulbassauro",
	  "atributos": {
	  "ataque": 7,
	  "defesa": 8,
	  "magia": 6
  }
},// [object Object] 
{
  "nome": "Darth Vader",
  "atributos": {
	  "ataque": 9,
	  "defesa": 8,
	  "magia": 2
  }
}]
~~~
>Aqui vemos listado os objetos dentro do array, visualizando, assim, a lista completa, com todos os objetos e suas chaves e valores.

Pdemos acessar, também, os objetos e suas chaves inputando os nomes dos objetos e através de grafos de referências como no exemplo abaixo:

~~~javascript
console.log(carta1);
console.log(carta1.atributos.magia);
~~~

~~~javascript
// [object Object]
{
  "nome": "Bulbassauro",
	  "atributos": {
	  "ataque": 7,
	  "defesa": 8,
	  "magia": 6
	}
}

"6"
~~~
>Nesse exemplo vemos o objeto _carta1_ completo e o valor da chave do atributo _atributos_, que no caso é _6_.


---

Para saber mais sobre os assuntos tratados nesta aula e para realizar os desafios acesse:

[MDN Web Docs] https://developer.mozilla.org/pt-BR/
[Stack Overflow] https://pt.stackoverflow.com


---

## DESAFIOS

>Os desafios criados pelo Paulo Silveira, pela Rafa Ballerini e pelo Gui Lima, para o projeto desta aula, são bem desafiadores, mesmo que simples. Mesmo que trivíais podem conter, ou não, conteúdos ainda não estutados até o momento da aula, sendo assim, necessário mais pesquisas, estudos, paciência e empenho.

- **Desafio Paulo:** corrigir problema quando joga sem selecionar atributo. 
- **Desafio Gui:** acrescentar cartas. ❕
- **Desafio Ballerini:** imagem do personagem escolhido. ❗

#### ✔️- Desafio concluído ❗- Desafio postergado para o remake da Imersão

[CodePen - Aula 07: Supertrunfo pt.1](https://codepen.io/lannyer/pen/ZEawbZV) | [Repositório no GitHub](https://github.com/Lannyer/imersaodev3/tree/master/Aula7-SuperTrunfopt1) | [Veja a página funcional aqui.]()