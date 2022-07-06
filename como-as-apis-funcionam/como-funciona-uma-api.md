---
description: Breve explicação de como funciona uma Api.
---

# Como funciona uma api?

Esse gráfico explica bem a relação cliente / api /banco de dados

![Cliente / API / Banco de dados](<../.gitbook/assets/image (1).png>)

Explicando de maneira simples, podemos observar o cliente, que nesse caso é o **front-end,** faz uma requisição para a **Api**, a mesma consulta as informações dentro do nosso **Banco de dados** e os retorna em formato de objeto para o cliente;

Essa é a estrutura padrão de um sistema que utiliza de Api's, em todos os casos, é necessário fazer uma requisição para ela e esperar uma resposta, que poderá ser exibida na interface, por exemplo.

## Entendendo na prática como funciona uma Api.

Bem, vamos pensar na api de uma pizzaria, que está organizada no seguinte esquema:

```
www.pizzaria.com/ -> Essa é a rota "/", ela nos retorna informações sobre a pizzaria

www.pizzaria.com/sabores -> Essa rota envia para gente todos os sabores disponíveis

www.pizzaria.com/tamanhos -> Essa rota nos envia todos os tamanhos disponíveis

www.pizzaria.com/pedirPizza -> Essa rota é a rota que recebe o nosso pedido
```

Nessa pizzaria, teremos quatro rotas, cada uma delas faz uma coisa:

* **Rota /:** Essa rota nos informa o nome da pizzaria, o local, e qualquer outra informação que quisermos sobre a pizzaria;
* **Rota /sabores:** Essa rota nos envia todos os sabores de pizza disponíveis;
* **Rota /tamanhos:** Essa rota nos envia todos os tamanhos de pizza disponíveis;
* **Rota /pedirPizza**: Essa é a rota aonde iremos realmente pedir a pizza! Informando o tamanho, quantidade de sabores, os sabores e nosso endereço.

Ao olhar novamente para o gráfico, percebemos que existem algumas categorias de requisição para API, estas são: _**GET**_, _**POST**_, _**PUT**_ & _**DELETE,**_** ** e cada um deles serve para algo, mas por agora, só explicarei às duas mais importantes, o **GET** e o **POST**;

### As requisições GET e POST:

O conceito geral do GET é literalmente "Buscar" conteúdo, sem passar informações para a API, já o POST é quando nós precisamos passar informações para api conseguir trabalhar, como, por exemplo, nesses casos:

> Quando os dados já estão no banco de dados ou na API, nós realizamos uma requisição de GET, afinal, nós só estamos buscando essas informações que já estão lá dentro, só precisamos pegar elas para apresentar ao nosso site, por exemplo.

> Quando somos nós que precisamos passar os dados para a API, nós realizamos uma requisição do tipo POST, ela precisa que nós enviemos dados para a API realizar o tratamento, guardar, excluir e etc.&#x20;



Para realizarmos nossas requisições utilizaremos a biblioteca Axios, pense nela como a pessoa que vai ligar para sua pizzaria por você!\
Ela pode tanto buscar(GET) os sabores, quanto realmente pedir(POST) a pizza;



Não se deixe assustar, o código pode não ser o mais legível, mas é bem simples de entender.

#### Um exemplo de GET:

```javascript
// Nós queremos saber quais são os sabores de pizza
// Então, realizaremos um GET, para recebermos os sabores

import axios from "Axios"; //Essa é a biblioteca que faz as requisições pra gente!

axios.get("www.pizzaria.com/sabores").then((resposta) => { //Mandamos ele ligar para /sabores

console.log(resposta) //Aqui nós já pegamos todos os sabores! 

/*{"sabores": ["escarola", "portuguesa", "4 queijos", "Filé mignon"]}*/

}).catch((erro) => {

console.log(erro) // Isso aqui só vai rodar se der erro!

// Nesse caso, não aconteceu! :)

});
```

Olha que legal! O axios "ligou" para a pizzaria, perguntou pelos sabores, recebeu e nos informou todos eles:

```json
{"sabores": ["escarola", "portuguesa", "4 queijos", "Filé mignon"]}
```

Isso foi o que ele recebeu, com isso em mãos, nós podemos colocar isso numa página de um site, num aplicativo ou simplesmente usar eles para pedir uma pizza (igual faremos agora):

#### Um exemplo de POST:

```javascript
// Agora o jogo virou, nós usaremos os sabores que recebemos para pedir uma pizza!
// Realizaremos um POST para isso:
// Mas antes, definiremos nosso pedido
import axios from "Axios";

let pedido = {
tamanho: "média",
qntdSabores: 2,
sabores: ["4 queijos", "escarola"],
endereco: "Rua Joãozinho, nº872, Bairro fábrica de software"
}

axios.post("www.pizzaria.com/pedirPizza", pedido).then((resposta) => {
// Pedimos a pizza! Utilizando de nosso pedido, o axios vai ligar para lá
// E mandar nosso pedido!
console.log(resposta);
/*{"status": 200, "msg": "OK! Estamos fazendo sua pizza!"}*/
}).catch((erro) => {
console.log(erro) // Mesma coisa de antes, só vai rodar se der erro!
});
```

Haha! Agora o axios pegou nosso pedido e enviou para a pizzaria, isso foi o que o Axios recebeu após fazer o pedido:

```json
{"status": 200, "msg": "OK! Estamos fazendo sua pizza!"}
// Status 200 significa sucesso!


```

Agora estão fazendo nossa pizza!\
Mas viu que tem algo diferente na nossa resposta? Um status...\
Eles servem para sabermos quando nossa requisição foi feita da maneira correta! Existem muitos códigos de status e estão todos listados aqui:



[https://developer.mozilla.org/pt-BR/docs/Web/HTTP/Status](https://developer.mozilla.org/pt-BR/docs/Web/HTTP/Status)\


## Considerações finais

Lembre-se, isso é uma explicação muito simplificada de como as coisas funcionam, e aqui, só aprendemos a fazer requisições e não a criar uma API, este tópico será abordado nos próximos tópicos;\


