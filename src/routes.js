const express = require('express')



const routes = express.Router()

const FuncionarioController = require('./controllers/FuncionarioController')

//funcionario
routes.get('/funcionario', FuncionarioController.index)
routes.post('/funcionario', FuncionarioController.create)
routes.put('/funcionario/:id_funcionario', FuncionarioController.update)
routes.delete('/funcionario/:id_funcionario', FuncionarioController.delete)

module.exports = routes