import express from "express"
const router = express.Router()
app.post("/api/v1/atv5", (req, res) =>{
    const km = req.body
    const milhas = Number(km) * 1.60934
    res.send({message : km})
})
export default router