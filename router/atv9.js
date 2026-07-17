import express from "express"
const router = express.Router()
app.post("/api/v1/atv9", (req, res) =>{
    const nota = Number(nota)
    const nota2 = Number(nota2)
    const nota3 = Number(nota3)
    const resultado = Number(nota) + Number(nota2) + Number(nota3) / 3
    
    if (nota > 7 ){
        console.log("Bom(a) você foi um aluno estudioso e passou de ano")
    } else if (nota <= 6){
    console.log("Quase na media, estude um pouco mais para passar")
    }else {
        console.log("Você precima estutar muito para passar de ano")
    }
    res.send({message : resultado})
})
export default router