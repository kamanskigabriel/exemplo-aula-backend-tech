import express from "express"
import Controllerusuario from "../controller/usuario.js"
import authMiddleware from "../middleware/auth.js"

const router = express.Router()
router.post("/login", Controllerusuario.Login)
//Buscar todos
router.get("/todos", authMiddleware, Controllerusuario.Buscar)
//Buscar um
router.get("/um/:id", Controllerusuario.Detalhe)
//Criar
router.post("/criar", Controllerusuario.Criar)
//Alterar
router.post("/alterar", Controllerusuario.Alterar)
//Deletar
router.post("/delete", Controllerusuario.Delete)

export default router