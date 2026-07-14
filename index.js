import express from "express";

const app = express();

app.use(express.json())

// Somar
app.post("/api/v1/somar", (req, res) => {
   const {num1, num2} = req.body
   const resultado = Number(num1) + Number(num2)
  
    res.send({ message : resultado})
    
})
// Subtrair
app.post("/api/v1/sub", (req, res) => {
    const {num1, num2} = req.body
    const resultado = Number(num1) - Number(num2)
    res.send({message: resultado})
})

// Multiplicar
app.post("/api/v1/mult", (req, res) => {
    const {num1, num2} = req.body
    const resultado = Number(num1) * Number (num2)
    res.send({message : resultado})
})

// Dividir
app.post ("/api/v1/div", (req, res) => {
    const {num1, num2} = req.body
    const resultado = Number(num1) / Number(num2)
    res.send({message : resultado})
})
// Dividir com GET
//app.get ("/api/v1/div", (req, res) => {
//    const {num1, num2} = req.query
//    const resultado = Number(num1) / Number(num2)
//    res.send({message : resultado})
//})

    app.listen(3000, () => {
    console.log("serve in port 3000")
})
