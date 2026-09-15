import RepositoryUsuario from '../repository/usuario.js'
import bcrypt from 'bcrypt'
import jwt from 'jsonwebtoken'

const segredo = 'E3f5ie2s7t4u6p8a4d0'

class ServiceUsuario {

    // Core- Regra De Negocio
    async Buscar() {
        return RepositoryUsuario.Find
    }

    async Detalhe(id) {
        if (!id) {
            throw new Error("Favor informar o ID")
        }
        const usuario = await RepositoryUsuario.findByid(id)
        if (!usuario) {
            throw new Error(`ID ${id} do usuario não encontrado`)
        }
        return usuario
    }
    // função ( paramatros, pode haver infinitos parametros, mais tenta deixar 5 a 6 paramatros )
    // da para reduzir parametros com Objetos
    async Criar(email, senha) {
        if (!marca || !ano) {
            throw new Error("Favor informar todos os dados")
        }

        const usuario = await RepositoryUsuario.Create(email, senha)
        return usuario
    }


    async Alterar(id, email, senha) {
        if (!id || !marca || !ano) {
            throw new Error("informa a porra dos dados")

        }
        const alterar = await RepositoryUsuario.Update(id, email, senha)
        return alterar
    }

    async Deletar(id) {
        if (!id) {
            throw new Error({ massage: "informar erro" })
        }
        const usuario = await RepositoryUsuario.Delete(id)
        return id
    }
    async Login(email, senha) {
        if (!email || !senha) {
            throw new Error("Email ou Senha invalido animal")
        }
        const usuario = await RepositoryUsuario.FindByEmail(email)
        if (!usuario) {
            throw new Error("Email ou Senha invalido animal")
        }
        if (
            !(await bcrypt.compare(String(senha), usuario.senha))
        ) {
            throw new Error("Email ou Senha invalido animal")
        }
        return jwt.sign({ id: usuario.id, email},
             segredo, 
             { expiresIn: 60 * 60 }
        )
}
export default new ServiceUsuario()