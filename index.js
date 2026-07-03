import express from "express";

const app = express();

//Configurr uma rota de metodo HTTP GET na raiz ("/") do aplicativo
app.get("/api/v1/somar", (req, res) => {
    console.log(req.query)
const num1 = Number(req.query.num1) || 0;
const num2 = Number(req.query.batata) || 0;
const resultado = num1 + num2
    //Retorna uma resposta JSON contendo uma mensagem "Hello World"
   
    res.send({ resultado });
})
//Inicia o servodor Express na  porta 3000 e define uma função de retorno de chamada

app.listen(3000, () => {
    //Exibe uma mensagem no console quando o servidor estiver ativo
    
    console.log("serve is running in port 3000")
});