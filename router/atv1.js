import express from 'express'
const router = express.Router()

app.get("/api/v1/atv1", (req, res) => {
   const {num1, num2} = req.query
   const resultado = Number(num1) + Number(num2)
  
    res.send({ message : resultado})
})
export default router