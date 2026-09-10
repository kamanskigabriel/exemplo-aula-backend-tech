import carro from "../model/carro.js"

// INSERT INTO carros(id, marca, ano, createdAt, updatedAt) VALUES ("Fiat", 1998)

class RepositoryCarro {

    async Find() {
        const carros = await carro.findAll()
        return carros
    }

    async findByid(id) {
        const carrodetalhes = await carro.findByPk(id)
        return carrodetalhes
    }

    async Create(id, marca, ano) {
        const create = await carro.create({ marca, ano })
        return create
    }
    async Update(id, marma, ano) {
        const updated = await carro.findByPk(id)
        if(!updated){
            throw new Error("Sem carro")
        }
        updated.marca = marca
        updated.ano = ano


       await updated.save()
    }

    async Delete(id) {
        const deleted = await carro.findByPk(id)
        if (!deleted)
            throw new Error("Carrinho não acado bruh")
        await deleted.destroy()
        return deleted
    }
}
export default new RepositoryCarro