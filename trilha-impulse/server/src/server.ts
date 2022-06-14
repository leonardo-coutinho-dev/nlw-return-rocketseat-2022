import express from 'express';
import cors from 'cors';
import { routes } from './routes';


const app = express();

app.use(cors());
app.use(express.json());
app.use(routes);

app.listen(process.env.PORT || 3333, () => {
  console.log('HTTP Server running');
});

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