import express from "express"
const router = express.Router()
app.post("/api/v1/atv7", (req, res) => {
    const Km = req.body
    const metros = Number(Km) * 100
    const cm = Number(Km) * 100000
    res.send({message : Km, metros, cm })
})
export default router