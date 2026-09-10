import RepositoryCarro from '../repository/carro.js'


class ServiceCarro {

    // Core- Regra De Negocio
    async Buscar() {
        return RepositoryCarro.Find
    }

    async Detalhe(id) {
        if (!id) {
            throw new Error("Favor informar o ID")
        }
        const carro = await RepositoryCarro.findByid(id)
        if (!carro) {
            throw new Error(`ID ${id} do carro não encontrado`)
        }
        return carro
    }
    // função ( paramatros, pode haver infinitos parametros, mais tenta deixar 5 a 6 paramatros )
    // da para reduzir parametros com Objetos
   async Criar(marca, ano) {
            if ( !marca || !ano) {
                throw new Error("Favor informar todos os dados")
            }

           const carro = await RepositoryCarro.Create(marca, ano)
            return carro
    }


    async Alterar(id, marca, ano) {
        if (!id||!marca||!ano){
            throw new Error ("informa a porra dos dados")

        }
        const alterar = await RepositoryCarro.Update(id, marca, ano)
        return alterar
     }

    async Deletar(id) { 
    if (!id){
        throw new Error ({ massage : "informar erro"})
    }
    const carro = await RepositoryCarro.Delete(id)
    return id
    }
}
export default new ServiceCarro()