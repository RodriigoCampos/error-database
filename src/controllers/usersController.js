const AppError = require("../utils/appError")

class UsersController {
    /*
    Um controle pode ter no máximo 5 funções não precisa necessariamente ter todos os métodos listados
    mas não pode nunca passar desses 5 métodos.

    index: GET para listar vários registros
    show: GET para exibir um registro especifico 
    create: POST para criar um registro 
    update: PUT para atualizar um registro 
    delete: DELETE para remover um registro
    */

    create(request, response) {
        const { name, email, password } = request.body

        if(!name) {
            throw new AppError("Nome é obrigatório!")
        }

        response.json({ name, email, password })
    }
    
}

module.exports = UsersController