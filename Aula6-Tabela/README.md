AULA 06 - TABELAS DE CLASSIFICAÇÃO: OBJETOS
---

Nesta sexta aula da Imersão Dev, vamos criar uma tabela de classificação e aprender o que são objetos no Javascript!

## Conteúdo detalhado desta aula

- Remover o código estático do HTML;
- Criar um objeto no Javascript para cada jogador;
- Criar uma função que receba um objeto como parâmetro para calcular os pontos;
- Exibir o objeto na página HTML;
- Criar uma função para adicionar vitória, outra para adicionar empate e uma última para adicionar derrota;
- Recalcular os pontos quando vitória ou empate for adicionado.


--- 

### Notas sobre conseitos e observações:

**Objeto -**  é uma coleção de dados e funcionalidades, geralmente consistem em diversas variáveis e funções, que são chamadas de propriedades e métodos, comumente chamadas de registro e, ou, estrutura. Usamos dupla chave ```{}``` para passar os paramêtros das propriedades e dos métodos. Para declarar um _objeto_ criamos uma variável com o nome do objeto e atribuímos o conteúdo das chaves entre elas as propriedades, e métodos, seguido de dois pontos e o valor atribuído a ela, podendo ser um numero, uma string, uma variável e etc.  

_Ex:_
~~~javascript
var rafa = { nome: "Rafa" }
~~~
>A anatomia básica do objeto é a seguinte: ```var nomeDoObjeto = { chave: valor }```

Para definir qual valor do objeto queremos usar, o escrevemos junto da variável com um ponto.

_Ex:_
~~~javascript
console.log(rafa.nome);
~~~
>No trecho acima teremos como resposta no console, o valor da chave _nome_ do objeto _rafa_.

**-** _Parâmetro:_ também chamados de argumentos, são valores passados como entradas de funções.

Quando passamos algum argumento, ou parâmetro, para uma função, usamos os parenteses, isso indica como o chamaremos. A partir do primeiro exemplo, poderiamos passar o _objeto_ **rafa** para uma função através dos parenteses, porém ou utilizarmos o parâmetro **jogador**, a função compreende que **jogador** recebera o objeto **rafa**.

_Ex:_
~~~javascript
function calculaPontos(jogador) {
var pontos = jogador.nome;
console.log(pontos);
}
~~~ 
>Através do parâmetro ```jogador.nome``` receberemos, no console, o valor da chave _nome_ do objeto **rafa**, que é a string _Rafa_.


---

**return -** significa retorno. O comando ```return``` irá passar aquilo que foi atribuído, ao que está sendo retornado, para a parte do código que o chamou.

_Ex:_
~~~javascript
rafa.pontos = calculaPontos(rafa);

function calculaPontos(jogador) {
var pontos = jogador.vitorias * 3 + jogador.empates;
return pontos;
~~~
>Na estrutura acima, a variável criada dentro da função ```calculaPontos()``` irá realizar o cálculo de pontos do objeto **rafa**, que na função recebe o argumento **jogador** e irá retornar o resultado para o objeto **rafa** atribuindo ao valor _pontos_, em ```rafa.pontos = calculaPontos(rafa)```. Se executarmos um ```console.log(pontos)```, teremos o resultado do cálculo realizado na função, mesmo que não esteja em seu escopo.


---

**Observações -** No exemplo a seguir, veremos uma série de questões interessantes a sereme pontuadas. Começamos criando uma lista ```var jogadores = [...]``` onde será listado objetos, semelhantes aos vistos anteriormente (na realidade, são os mesmos.. ou quase isso), com isso o laço de repetição ```for```, irá executar procedimentos já vistos em outras aulas, o que trará os pontos que queremos observar.

_Ex:_
~~~javascript
var jogadores = [rafa, paulo];

function exibirJogadores(jogadores) {
  var elemento = "";
	for (var i =0; i < jogadores.length) {
		elemento += "<td>" + jogadores[i].pontos + "</td>"
	    elemento += "<td><button onClick='adicionarVitoria(" + i + ")'>Vitória</button></td>"
	}
}	
~~~
>A variável ```var elemento``` trabalhada dentro ```for``` é declarada fora dele, como vazia, para receber os valores de dentro do laço.

**-** _onClick:_ significa "no clique". É um evento Javascript que cria uma ação que acontecerá quando for clicado no local indicado, como o próprio nome diz. Geralmente usado em botões e é um evento passado direto no código HTML.

No trecho acima temos, também, uma das formas de interpolação, levando em conta o uso da aspas duplas e simples. Geralmente colocamos strings entre aspas duplas e quando trabalhamos o HTML dentro do Javascript o tratamos como string. Porém, no caso temos o elemento ```<buttom>``` com o evento *onClick* ```<buttom onClick"adicionarVitoria()">```. Se colocarmos este trecho dentro de uma string, teremos um problema, pois as aspas que abrem o evento iram fechar as aspas que abrem a string e o mesmo acontecerá com a as aspas que fecham o evento e as aspas que fecham a string. Então para evitar este conflito, substituímos as aspas duplas internas por aspas simples

_Ex:_
~~~javascript
elemento = "<buttom onClick'adicionarVitoria()'>"
~~~

Caso queiramos passar um parâmetro para o evento, devemos usar o mesmo princípio na hora de concatenar o parâmetro.

_Ex:_

**ERRADO**
~~~javascript
elemento += "<td><buttom onClick"adicionarVitoria(" + i + ")">Vitória</button></td>"
~~~
>Aqui utilizamos apenas aspas duplas, causando assim um problema.

**CERTO**
~~~javascript
elemento += "<td><buttom onClick'adicionarVitoria(" + i + ")'>Vitória</button></td>"
~~~
>Aqui usamos aspas simples dentro das aspas duplas, mantendo a estrutura intacta.

**-** _elemento += :_ é uma forma econômica, por assim dizer, de incrementar valores, e ações. Ela também irá trazer o valor atual, atribuído à variável, mais um novo valor, fazendo assim o incremento referido no laço. Portanto ```elemento +=``` é o mesmo que ```elemento = elemento + 1```

**-** _jogadores[i].pontos:_ é exatamente como o parâmetro ```jogador.nome``` visto anteriormente, porém, aqui, ele irá pegar o valor da chave, do objeto, em um _índice_ específico da lista, de acordo com o ```for```.


---

Para saber mais sobre os assuntos tratados nesta aula e para realizar os desafios acesse:

[MDN Web Docs] https://developer.mozilla.org/pt-BR/
[Stack Overflow] https://pt.stackoverflow.com


---

## DESAFIOS

>Os desafios criados pelo Paulo Silveira, pela Rafa Ballerini e pelo Gui Lima, para o projeto desta aula, são bem desafiadores, mesmo que simples. Mesmo que trivíais podem conter, ou não, conteúdos ainda não estutados até o momento da aula, sendo assim, necessário mais pesquisas, estudos, paciência e empenho.

- **Desafio Paulo:** personalziar tabela. ✔️
- **Desafio Gui:** colocar imagem do jogador. ❗
- **Desafio Ballerini:** validar empates, vitórias e derrotas. ❗
- **Desafio bônus - Gui:** zerar placar. ❗
- **Desafio bônus - Ballerini:** adicionar um novo jogador. ❗

#### ✔️- Desafio concluído ❗- Desafio postergado para o remake da Imersão

[CodePen - Aula 06: Tabela de classificação](https://codepen.io/lannyer/pen/abVQqyj?editors=0010) | [Repositório no GitHub](https://github.com/Lannyer/imersaodev3/tree/master/Aula6-Tabela)