import express from "express";
import bancoDeDados from "./repository/index.js";

const app = express();
//buscar
app.get("/api/pessoa/:id", (req, res) => {
    const id = req.params.id
    const pessoa = bancoDeDados.find(it => it.id == id)
    if(!pessoa) {
      return  res.send({message: "Pessoa não encontrada"})
    }
    res.send({ pessoa })
})

//criar
app.get("/api/pessoa", (req, res) => {
    const {id, name} = req.query
    if (id == null || name == null){
    return    res.send({message : "Informar o ID do nome"})
    }

    bancoDeDados.push({id, name})
//    console.log(bancoDeDados)
    console.log
    res.send({ message: "Pessoa feita cum susseso"})
})
    console.log("servidor escutando na porta 3000")
});