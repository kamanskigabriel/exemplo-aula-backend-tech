import usuario from "../model/usuario.js"

// INSERT INTO carros(id, marca, ano, createdAt, updatedAt) VALUES ("Fiat", 1998)

class RepositoryCarro {

    async Find() {
        const carros = await usuario.findAll()
        return carros
    }

    async findByid(id) {
        const usuariodetalhes = await usuario.findByPk(id)
        return carrodetalhes
    }

    async Create(id, marca, ano) {
        const create = await usuario.create({ marca, ano })
        return create
    }
    async Update(id, marma, ano) {
        const updated = await usuario.findByPk(id)
        if(!updated){
            throw new Error("Sem usuario")
        }
        updated.marca = marca
        updated.ano = ano


       await updated.save()
    }

    async Delete(id) {
        const deleted = await carro.findByPk(id)
        if (!deleted)
            throw new Error("Usuario não acado bruh")
        await deleted.destroy()
        return deleted
    }
    async FindByEmail(email){
        return usuario.findOne({where : {email}})
    }
}

export default new RepositoryCarro