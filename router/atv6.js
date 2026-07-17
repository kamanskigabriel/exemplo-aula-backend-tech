import express from "express"
const router = express.Router()
app.post("/api/v1/atv6", (req, res) =>{
     const tempo = req.body
    const resultado1 = Number(tempo)
    const resultado2 = Number(tempo) / 60
    const resultado3 = Number(tempo) / 3600
    req.send({message: resultado1, resultado2, resultado3 })
})
export default router