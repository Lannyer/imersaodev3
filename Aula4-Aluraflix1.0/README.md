AULA 04 - ALURAFLIX 1.0: ARRAY & LISTA 
---

No nosso dia-a-dia é normal trabalharmos com quantidades grandes de dados. Pense em uma lista de nomes de estudantes em uma escola, ou de todos os filmes do gênero "terror" em uma plataforma. Não é prático criarmos uma variável para cada informação, então utilizamos muitas estruturas de dados para fazer isso.

## Conteúdo detalhado desta aula

- Criar uma primeira array de filmes usando a sintaxe [];
- Utilizar o método filmes.push("Nome Do Filme") para inserir um novo elemento na lista (ou seja, um novo filme na array);
- Descobrir a quantidade de elementos em uma array com o método array.length;
- Selecionar elementos de uma array utilizando a sintaxe array[número], lembrando sempre que o primeiro índice começa com zero, ou seja, array[0] para o primeiro elemento;
- Utilizar a instrução for para iterar, ou seja, percorrer todos os elementos de uma array;
- Criar uma array com imagens de pôsters de alguns filmes que gostamos;
- Montar a lógica do programa que vai iterar esta array de filmes e exibir cada um deles na tela, integrando o for do JavaScript com document.write().


--- 

### Notas sobre conseitos e observações:

**Array -** é um objeto global usa para para construção de "listas". É uma forma de guardar diversos elementos em uma variável. Para criar um array, declaramos uma variável seguido de um colchete, onde declaramos os elementos.

_Ex:_
~~~javascript
var listaFilmes["Aliens","Avatar","Transformer","Terminator"]
//     índice      0        1           2             3
//     posição     1º       2º          3º            4º
~~~
>O **Índice** é a posição dos elementos do _array_, o primeiro índice é SEMPRE 0 (zero).

---

**listaFilmes.push -** o método ```push``` serve para inserir elementos no _array_.

_Ex:_
~~~javascript
var listaFilmes["Aliens","Avatar","Transformer","Terminator"]

listaFilmes.push("Superman");
listaFilmes.push("X-Men");
listaFilmes.push("Scream");
~~~

---

**listaFilmes.length -** é a proprieda de comprimento do _array_. Ele mostra o tamanho da lista inscrita no arrei.

_Ex:_
~~~javascript
var listaFilmes["Aliens","Avatar","Transformer","Terminator"]

console.log(listaFilmes.length);
~~~
>Neste ```console.log``` veremos o número de elementos no _array_, que neste caso é 4.

---

**for -** é uma das possíveis estruturas de repetição. A sintaxe do _for_ é composta de: laço (valor inicial; condição; expressão final) { expreção a ser repetido}

_Ex:_
~~~javascript
for (var indice = 0; indice < listaFilmes.length; indice++) {
  document.write("<p>" + listaFilmes[indice] + "</p>");
}
~~~
>Aqui será escrito todos os elementos do _array_ até que ele atinja o tamnaho total da lista.

**-** _incremento_: é o acrescimo de valores, comumente usado em laços de repetição. Uma forma de ser feito é somando 1 ao que se quer incrementar ```variavel + 1```, acrescentando assim uma unidade ao elemento sempre que o laço se repetir. A forma mais comum de se usar um incremento é com o uso de dois sinais de masi junto do elemento que se quer incrementar ```variavel++```. 

**-** _iterar_: é a repetição de uma sequência de instruções.

---

**document.write -** serve para imprimir na tela o que se deseja. Pode ser usado para gerar código HTML a aprtir do javascript.

_Ex:_
~~~javascript
document.write("<p>lorem ipsum</p>")
~~~
>A sintaxe acima, irá imprimir o texto dentro da tag HTML aplicando suas propriedades.


---

Para saber mais sobre os assuntos tratados nesta aula e para realizar os desafios acesse:

[MDN Web Docs] https://developer.mozilla.org/pt-BR/
[Stack Overflow] https://pt.stackoverflow.com


---

## DESAFIOS

>Os desafios criados pelo Paulo Silveira, pela Rafa Ballerini e pelo Gui Lima, para o projeto desta aula, são bem desafiadores, mesmo que simples. Mesmo que trivíais podem conter, ou não, conteúdos ainda não estutados até o momento da aula, sendo assim, necessário mais pesquisas, estudos, paciência e empenho.

- **Desafio Paulo:** pesquisar outras formas de iteração. ✔️
- **Desafio Gui:** inserir imagem via submit.✔️
- **Desafio Ballerini:** condição para evitar filme repetido. ❗

#### ✔️- Desafio concluído ❗- Desafio postergado para o remake da Imersão

[CodePen - Aula 04 pt.1: Listas & Laços](https://codepen.io/lannyer/pen/MWOgLRp?editors=0010) | [CodePen - Aula 04 pt.2: Aluraflix 1.0](https://codepen.io/lannyer/pen/OJOLqWy?editors=0010) | [Repositório no GitHub](https://github.com/Lannyer/imersaodev3/tree/master/Aula4-Aluraflix1.0) | [Veja a página funcional aqui.](https://lannyer.github.io/imersaodev3/aula4-Aluraflix1.0)