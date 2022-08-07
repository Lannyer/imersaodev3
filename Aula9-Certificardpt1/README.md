AULA 09 - CERTIFICARD: FIGMA, HTML & CSS
---

Nesta nona aula da Imersão Dev, desscobriremos como usar o Figma para um layout em código HTML e CSS para o nosso portfólio!

## Conteúdo detalhado desta aula

- Aprendemos a mexer no Figma e transformar o design em código;
- Entendemos melhor como funciona HTML e CSS;
- Estruturamos o nosso portfólio com HTML, aprendendo todas as tags necessárias pra isso;
- Estilizamos o nosso portfólio com CSS, conhecendo os seletores, propriedades e valores necessários para isso.


--- 

### Notas sobre conseitos e observações:

**google fonts -** 
Google Fonts é uma biblioteca com mais de 800 fontes livres licenciadas, um diretório web interativo para navegar na biblioteca, e APIs para usar convenientemente as fontes através de CSS e Android.

~~~html
<style>
@import url('https://fonts.googleapis.com/css2?family=Montserrat:wght@300;400;600;700&display=swap'); 
</style>
~~~


---

**box-shadow -** é uma propriedade do CSS usado para criar o popular _drop shadow_, ou apesanas... sombra. É possível especificar mais de um elemento ao mesmo tempo os separando por vírgula. 

A propriedade de sombra é descrita pelo deslocamento nos eixos X e Y, ou _offset_, em relação ao elemento que recebe a prorpiedade, pelo desfoque, a cor e pelo seu raio de propagação.

~~~css
.container {
box-shadow: (0px 5px 4px 2px rgba(0, 0, 0, 0.25) );
}
~~~
> No exmeplo acima: offset-x: 0px, offset-y: 5px, desfoque: 4px, propagação: 2px | cor e alfa: preto em RGBa (0,0,0, 0.25)
Canal alfa se refere a opacidade, quanto maior, mais opaco. Ou seja o valor máximo é completamente opaco e o valor mínimo é completamente transparente.

Veja as especifidades da propriedade [box-shadow](https://developer.mozilla.org/pt-BR/docs/Web/CSS/box-shadow).


---

**flex box -** Lorem ipsum.

**-** _display: flex:_

~~~html
<style>
.container {
display: flex;
}
</style>
~~~

**-** _flex-direction: column:_

~~~html
<style>
.container {
flex-direction: column;
}
</style>
~~~ 

---

**main -** o elemento ```main```define o conteúdo principal dentro do ```body```.
O documento não pode ter mais de um elemento ```main```por documento.
Elementos pertencentes a categoria de conteúdo de fluxo tipicamente contém texto ou conteúdo embutido.
>**Obs:**O elemento <main> não pode ser filho dos elementos <article>, <aside>, <footer>, <header>, ou <nav>.

Sua lista de regras pode ser encontrado clicando [aqui](https://developer.mozilla.org/en-US/docs/Web/HTML/Element/main).

_EX:_

~~~html
<main class="projetos">
	<style>
	.projetos {

	}
	</style>
</main>
~~~ 

---

Para saber mais sobre os assuntos tratados nesta aula e para realizar os desafios acesse:

[MDN Web Docs] https://developer.mozilla.org/pt-BR/
[Stack Overflow] https://pt.stackoverflow.com

---

DESAFIOS
---

>Os desafios podem, ou não, conter conteúdos ainda não estutados até o momento desta aula, sendo, assim, necessário pesquisa e estudos.
Os desafios criados pelo Paulo Silveira, pela Rafa Ballerini e pelo Gui Lima, para o projeto desta aula, são bem desafiadores, mesmo que simples. Mesmo que trivíais podem conter, ou não, conteúdos ainda não estutados até o momento da aula, sendo assim, necessário mais pesquisas, estudos, paciência e empenho.

- **Desafio Paulo:** personalizar o projeto com outros links de redes sociais, currcículos, etc. ✔️
- **Desafio Ballerini:** terminar projeto do Figma. ✔️
- **Desafio bônus - Paulo:** realizar novos projetos e aprimorar os anteriores. ❗

#### ✔️- Desafio concluído ❗- Desafio postergado para o remake da Imersão

[CodePen - Aula 09 : Portfólio pt.1](https://codepen.io/lannyer/pen/KKyJdOx) | [Repositório no GitHub](https://github.com/Lannyer/imersaodev3/tree/master/Aula9-Certificardpt1)