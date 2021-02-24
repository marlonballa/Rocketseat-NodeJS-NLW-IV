import 'reflect-metadata';
import express from "express";
import './database/';
const app = express();
/* Get -> buscar,
   Post -> salvar, 
   Put -> Alterar, 
   Delete -> deletar, 
   Patch -> Alteração específica */

   /* 1º Recurso
      2º Request/Response */
app.use(router);
//cria o servidor (fica ouvindo a porta)
app.listen(3333, () => console.log("Server is Running"));
