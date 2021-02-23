import express from 'express';
const app = express(); 

//cria o servidor (fica ouvindo a porta)
app.listen(3333, () => console.log("Server is Running"));