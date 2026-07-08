import express from "express";

const app = express();

// Somar
app.get("/api/v1/somar", (req, res) => {
   const {num1, num2} = req.query
   const resultado = Number(num1) + Number(num2)
  
    res.send({ message : resultado})
    
})
// Subtrair

// Multiplicar

// Dividir

    app.listen(3000, () => {
    console.log("serve in port 3000")
})