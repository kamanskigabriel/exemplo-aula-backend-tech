import jwt from 'jsonwebtoken'

const segredo = 'E3f5ie2s7t4u6p8a4d0'

export default async function authMiddleware(req, res, next) {
    console.log("aqui porra")
    try {
    const token = req.headers['authorization']
        console.log(token)
    if (!token){
        throw new Error()
    }


console.log(decode)
next()

    } catch (error) {
        res.status(403).send({message : "Usuario ou senha invalido  "})
    }
}