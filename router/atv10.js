import express from "express"
const router = express.Router()
app.post("/api/v1/atv10", (req, res) =>{
    const altura = Number
    const Homen = 72.1 * altura
    const Mulher = 62.1 * altura
    res.send({message: Homen, Mulher })
})
export default router