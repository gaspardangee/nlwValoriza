import express from "express"

//
const app = express()


/*
Métodos

    * GET => Buscar uma informação
    * POST => Inserir (Criar) uma informação
    * PUT => Alterar uma informação
    * DELETE => Remover uma informação
    * PATCH => Alterar uma informação uma informação específica
*/
app.get("/test", (request, response) => {
    //request => Tudo que entra
    //response => Tudo que sai
    return response.send("Olá NLW")
})

app.post("/test-post", (request, response) => {
    return response.send("Heeeei")
})

//http://localhost:3030
app.listen(3030, () => console.log("Server is running NLW!"))
