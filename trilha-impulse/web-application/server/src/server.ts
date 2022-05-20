import express from 'express';

const app = express();

// MÉTODOS HTTP: GET, POST, PUT, PATCH, DELETE, ...

/** 

GET = Buscar informações
POST = Cadastrar informações
PUT = Atualizar informações de uma entidade (Por exemplo, imagine uma rota de alteração de perfil ~ nome, e-mail, senha, foto de perfil, ... ~ alterando uma entidade completa)
PATCH = Atualizar uma informação única de uma entidade (Por exemplo, escolher se você quer receber ou não a newsletter de uma plataforma ~ alteração de um valor específico da entidade)
DELETE = Deletar uma informação

Método = (HTTP)
Recurso = O que estamos criando, atualizando, deletando, ...
 
*/

app.post('/feedbacks', (req, res) => {
  return res.send('Hey, what do you need boy?')
})

app.listen(3333, () => {
  console.log('HTTP Server running');
});
