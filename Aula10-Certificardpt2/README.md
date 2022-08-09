## AULA 10 - CERTIFICARD 2.0 & PORTFÓLIO
---

Nesta décima e última aula da Imersão Dev, você vai evoluir seu portfólio com temas claro e escuro e ainda colocar no ar para que todas as pessoas possam acessar!

## Conteúdo detalhado desta aula

- Utilizaremos o Figma para transformar o design em código;
- Estruturamos o nosso portfólio com HTML, aprendendo todas as tags necessárias pra isso;
- Estilizamos o nosso portfólio com CSS, conhecendo os seletores, propriedades e valores necessários para isso;
- Criamos o tema claro e escuro para o nosso portfólio;
- Fazemos a lógica em Javascript para alterar entre os temas;


---

### Notas sobre conseitos e observações:

**Element.classList -** é uma propriedade que retorna uma lista com os nomes das classe de um elemento(_TAG_), e **[DOMTokenLists](https://developer.mozilla.org/en-US/docs/Web/API/DOMTokenList)** ~(seja lá o que isso for)~, que não pode escrever nada no nosso código, como as funções e métodos que vimos anteriormente.

Mesmo que ele seja somente leitua, ainda podemos fazer modificações associando um **DOMTokenList** ~(mesmo sem fazer ideia doque isso seja)~, usando métodos como o ```toggle()``` utilizado no nosso exemplo.

~~~javascript
function mudaTema() {
      document.body.classList.toggle("dark");
    }
~~~
> O ```document.body``` se refere ao escopo de onde as auterações definidas pelo ```classList.toggle()``` iram agir, como vimos anteriormente, sendo ```body``` se referindo a todo o corpo demarcado pelo elemento ```body```no _HTML_ e document se refere à todo o documento _HTML_. como explicado pela Ballerini, poderia haver um _window_ antes do _document_ ficando  ```window.document.body```, representando toda a janela, mas é ocultado por motivos óbvios.

**-** _toggle():_ _toogle_ significa interruptor. Ele "liga e desliga" um elemento quando ativado. É um método do ```classList``` e um **DOMTokeList**
 ~(o que caralhos é um DOMTokenList)~. 

Ele funciona removendo um _token_ existente da lista de nomes de classes retornando falso. Se o token não existe, ele adiciona e retorna verdadeiro. Ligando e desligando as propriedades da classe de um elemento. Como o botão "_Tema escuro_" que ativa o conjunto de propriedades da classe ```dark```, através da propriedade ```body.classList```.

Uma _string_ representa o _token_ que desejamos togglar ~(isso existe?)~.
 > [O que é um DOMTolkenLit?](https://www.w3schools.com/jsref/dom_obj_html_domtokenlist.asp)
 Traduzi e ainda não entendi.

---

**css -** Cascade Stylesheet, oui folha de estilo em cascata. É o que define o estilo visual do documento _HTML_, ou _XML_, através de elementos. Atualmente o _CSS3_ passa pelo processo de padronização, oq tornará o _CSS2_ obsoleto e foi anunciado, entre 2021 e 2022, a construção da sua quarta versão.

Ele pode ser declarado direto no documento html pela tag ```style``` ou anexada como um documento externo. Inserimos o link para o arquivo _CSS_ no ```head```da página.

_Ex:_

Declarado direto no _HTML_:

~~~html
<html>
	<head>
		<style>
			body {
				background-color: blue;
      }
			h1 {
				color: red;
				padding: 60px;
			} 
		</style>
    </head>
    <body>
        <h1>Hostinger Tutoriais</h1>
        <p>Este é o nosso parágrafo.</p>
    </body>
</html>
~~~

_Ex:_

Inserção do aqruivo _CSS_ no _HTML_:

~~~html
<head>
  <link rel="stylesheet" type="text/css" href="./styles.css" media="screen" />
  <title>Aula 09: Certificard 1.0 - 3ª & 4ª Imersão Dev</title>
</head>
~~~

E declaração no arquivo **styles.css**:

~~~css
	body {
	background-color: blue;
}
h1 {
	color: red;
	padding: 60px;
} 
~~~

---

**flex box -** _flexbox_ vem de "Flexible Box" e quer dizer "caixa flexível". É uma forma mais eficiente para criar layouts, alinha e distribuir espaços, até mesmo quando as dimenções dos itens alihados são desconhecidas e, até mesmo, dinâmicas. _Flexbox_ não se limita apenas a uma única propriedade, mas sim a um módulo completo.

**-** _align-self:_ ele define o alinhamento individual de um _flex item_ dentro do container. Ele passa por cima do que for atribuído no ```align-items``` do container. 
	**-**_flex-end:_ alinha o item ao _cross end_. _Cross end_ é a "seção final" de um _flex conainer_.

**-** _justify-content:_ faz o alinhamento dos _flex items_ de acordo com a direção do container. Porém a propriedade não funciona caso os itens não ocupem todo o container.
	**-** _space-between:_ cria um espaçamento igual entre os elementos, mantendo o primeiro e último grudados no ínicio e no final, respectivamente.

_Ex:_

Trecho em _HTML_.
~~~html
    <header class="cabecalho">

      <div class="tema">
        <button onclick="mudaTema()">Tema Escuro</button>
      </div>

    </header>
 ~~~

Trecho em _CSS_
 ~~~css
.cabecalho {
  display: flex;
  justify-content: space-between;
}
.tema button {
  align-self: flex-end;
  font-size: 16px;
  font-weight: 400;
  padding: 8px 16px;
  background: #ecf4ff;
  border-radius: 100px;
}
~~~
>Trecho do projeto feito em aula.

Vema mais sobre _Flexbox_ em:
[Flexbox 101.](https://www.alura.com.br/artigos/css-guia-do-flexbox)
[Um manual mais completo de Flexbox.](https://origamid.com/projetos/flexbox-guia-completo/)
[Aula da Rafa Ballerini pt. 01.](https://youtu.be/KbjLtEgmZ_E)
[Aula da Rafa Ballerini pt. 02.](https://youtu.be/hjz6ezV9_uc)


---

Para saber mais sobre os assuntos tratados nesta aula e para realizar os desafios acesse:

[MDN Web Docs] https://developer.mozilla.org/pt-BR/
[Stack Overflow] https://pt.stackoverflow.com


---

## DESAFIOS

>Os desafios criados pelo Paulo Silveira, pela Rafa Ballerini e pelo Gui Lima, para o projeto desta aula, são bem desafiadores, mesmo que simples. Mesmo que trivíais podem conter, ou não, conteúdos ainda não estutados até o momento da aula, sendo assim, necessário mais pesquisas, estudos, paciência e empenho.

- **Desafio:** criar área para badges, certificados, socialmidia, etc. ✔️
- **Desafio:** trocar botão "tema escuro" para "tema claro" quando tema escuro estiver ativo. ❗

#### ✔️- Desafio concluído ❗- Desafio postergado para o remake da Imersão

[CodePen - Aula 10 : Portfólio pt.2](https://codepen.io/lannyer/pen/gOXqPYR) | [Repositório no GitHub](https://github.com/Lannyer/imersaodev3/tree/master/Aula10-Certificardpt2)