import express from "express"
import ControllerCarro from "../controller/carro.js"

const router = express.Router()

//Buscar todos
router.get("/todos", ControllerCarro.Buscar)
//Buscar um
router.get("/um/:id", ControllerCarro.Detalhe)
//Criar
router.post("/criar", ControllerCarro.Criar)
//Alterar
router.post("/alterar", ControllerCarro.Alterar)
//Deletar
// router.post("/delete", ControllerCarro.Delete)

export default router