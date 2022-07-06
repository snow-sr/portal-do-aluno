---
description: >-
  Uma breve explicação de como nós criamos uma api, e exemplos retirados diretos
  de nossa própria api!
---

# Como criar uma api?

Bem, como podemos ver em [Broken link](broken-reference "mention"), descobrimos que uma api pode receber requisições, e que cada uma delas tem um motivo para utilizar, agora, aprenderemos a criar a api que vai receber essas requisições e re-enviar as informações para o cliente!

Esse "Tutorial" vai dispor de bastante código, e código da nossa api inclusive.



## Primeiros passos, abrindo um servidor

Tudo começa em abrir um servidor, afinal, sem um servidor **http** aberto nunca poderemos receber requisições, utilizaremos da biblioteca/micro-framework express para fazer isso!

```javascript
// Vamos primeiramente importar o express
import express from "express";
const app = express(); // Aqui, nós iniciamos o express e criamos uma aplicação!

app.listen(8087, () => { // Estamos literalmente mandando nosso servidor escutar ligações na porta 8087!
console.log("Servidor aberto na porta 8087!") //Pronto! Nosso servidor já está ativo e ouvindo na porta 8087.
})
```

Tudo bem... Já temos um servidor para ouvir as requisições, mas não temos rotas para realmente fazer algo com essas requisições, por isso, entraremos no próximo tópico:&#x20;

## Como criar uma rota!

Bem, primeiro precisamos pensar o que nossa rota vai fazer, para esse exemplo, nossa rota irá simplesmente retornar uma mensagem dizendo quem somos!

```javascript
// Mesmo código de antes
import express from "express";
const app = express(); 

app.get("/", (req, res) => {
  res //Resposta
    .status(200) // Status 200 (OK)
    .send("Olá Mundo! Essa é a API do portal do aluno - ifc araquari"); //Nossa mensagem!
});

// Definimos que na rota "/", receberemos uma requisição (req) e uma resposta (res)
// Usamos o nosso res para devolver ao cliente o status 200 (OK) e uma mensagem
// que no caso foi: "Olá Mundo! Essa é a API do portal do aluno - ifc araquari"

app.listen(8087, () => {
console.log("Servidor aberto na porta 8087!") 
})// Nós sempre precisaremos escutar as requisições em uma porta, por isso
//Nunca remova esse última parte do código!
```

Pronto! Criamos uma rota que já pode ser acessada pelo axios, navegadores, ou testadores de http!\
Quando fizermos uma requisição **GET** na **rota /** receberemos a seguinte resposta:

```json
{"status": 200, "data": "Olá Mundo! Essa é a API do portal do aluno - ifc araquari"}

// Recebemos o status, e na data, recebemos a string com a mensagem
```

Muito simples não? Bem, é assim que criamos uma rota **GET**, podemos passar qualquer coisa como uma resposta para ela, é só utilizarmos `res.send()`, assim enviamos para o nosso cliente qualquer coisa!



Mas agora, como criamos uma rota para receber os dados de um usuário? Uma rota POST nesse caso. Criaremos uma rota que irá retornar a soma de dois números, números estes que serão enviados pelo nosso cliente através de uma requisição POST.

```javascript
// Mesmo código de antes
import express from "express";
const app = express(); 

app.get("/", (req, res) => {
  res
    .status(200)
    .send("Olá Mundo! Essa é a API do portal do aluno - ifc araquari"); 
});

app.post("/soma", (req, res) => {
let valor1 = req.valor1 //Aqui estamos pegando na requisição o valor 1!
let valor2 = req.valor2 //Tudo que passarmos para a requisição estára dentro de req!

res.status(200).send(valor1 + valor2) //Estamos enviando o resultado aqui!
})

// Definimos essa rota como "/soma" e estamos recebendo os parametros de REQUISIÇÃO
// e RESPOSTA;


app.listen(8087, () => {
console.log("Servidor aberto na porta 8087!") 
})

```

Ok! Quando fizermos uma requisição para a nossa api, na rota **/soma** receberemos como resposta a soma dos dois números que lhe enviamos!

Se isso não for mágico, eu não sei o que é!



## Considerações finais:

Bem, espero que você tenha entendido todos os conceitos de como uma api funciona, e como criar uma API, estes conceitos são importantes para que você saiba integrar o nosso front-end com o nosso back-end!



Não se preocupe se não tiver entendido bulhufas disso aqui, a prática traz a perfeição...

\
Falando em prática, o nosso próximo tópico fala sobre como usar desses ensinamentos para demonstrar resultados no Vue.js!

Talvez este exemplo mais prático te deixe mais próximo às ideias aqui apresentadas;



