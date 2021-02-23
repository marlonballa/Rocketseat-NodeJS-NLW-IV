import express, { response } from "express";
const app = express();
/* Get -> buscar,
   Post -> salvar, 
   Put -> Alterar, 
   Delete -> deletar, 
   Patch -> Alteração específica */

   /* 1º Recurso
      2º Request/Response */
app.get("/", (request, response) => {
    return response.send("Hello Word! NLW 04");
})

app.post("/", (request, response) => {
    return response.json({message: "Dados salvos com sucesso :)"})
})

//cria o servidor (fica ouvindo a porta)
app.listen(3333, () => console.log("Server is Running"));
