import express from 'express';
import nodemailer from 'nodemailer';
import { prisma } from './prisma';


const app = express();

app.use(express.json());

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

const transport = nodemailer.createTransport({
  host: "smtp.mailtrap.io",
  port: 2525,
  auth: {
    user: "2c68297fa4fe33",
    pass: "44b9386435b54d"
  }
});

app.post('/feedbacks', async (req, res) => {
  const { type, comment, screenshot } = req.body;
  const feedback = await prisma.feedback.create({
    data: {
      type,
      comment,
      screenshot,
    }
  })
  await transport.sendMail({
    from: 'Equipe Feedget <oi@feedget.com>',
    to: 'Leonardo Coutinho dos Santos <web.dev.trabalho@gmail.com>',
    subject: 'Novo feedback',
    html: [
      `<div style="font-family: sans-serif; font-size: 16px; color: #111;">`,
      `<p>Tipo do feedback: ${type}</p>`,
      `<p>Comentário: ${comment}</p>`,
      `</div>`
    ].join('\n')
  })
  return res.status(201).json({ data: feedback })
});

app.listen(3333, () => {
  console.log('HTTP Server running');
});
