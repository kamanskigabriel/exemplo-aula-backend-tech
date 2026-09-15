import ServiceUsuario from '../service/usuario.js'

class ControllerUsuario {


    // Recebimento e a Saida das informações
    async Buscar(_, res) {
        try {
            const usuarios = await ServiceUsuario.Buscar()
            res.status(200).send({ mensagem: Usuarios })
        } catch (error) {
            res.status(500).send({
                mensagem: error.message
            })
        }
    }

    async Detalhe(req, res) {
        try {
            const id = req.params.id
            
            const usuarios = await Serviceu.Detalhe(id)

            res.status(200).send({ mensagem: carro })
        } catch (error) {
            res.status(500).send({
                mensagem: error.message
            })
        }
    }

    async Criar(req, res) {
        try {
            const { email, senha } = req.body
            const id = req.params.id
           await ServiceUsuario.Criar( marca, ano)

            res.status(201).send({ mensagem: "Cadastrado com sucesso" })
        } catch (error) {
            res.status(500).send({
                mensagem: error.message
            })
        }
    }

    async Alterar(req, res) {
        try {
            ServiceCarro.Alterar
        } catch (error) {
            res.status(500).send({
                mensagem: error.message
            })
        }
    }

    async Deletar(req, res) {
        try{
            const id = req.body.id

            await ServiceUsuario.Deletar(id)
           
            res.status(204).send({ mensagem: "Deletado" })
        } catch (error) {
            res.status(500).send({
                mensagem: error.message
            })
        }
    }
    async Login (req,res) {
        try {
            const {email, senha} = req.body
            const token = await ServiceUsuario.Login(email, senha)
            res.status(200).send({token})
        } catch (error) {
            res.status(500).send({message : error.masage})
        }
    }

}

export default new ControllerCarro()