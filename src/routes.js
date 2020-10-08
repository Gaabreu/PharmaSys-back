const express = require('express')

const routes = express.Router()

const FuncionarioController = require('./controllers/FuncionarioController')


routes.get('/funcionario', FuncionarioController.index)
routes.post('/funcionario', FuncionarioController.create)
routes.put('/funcionario/:id_funcionario', FuncionarioController.create)
routes.delete('/funcionario/:id_funcionario', FuncionarioController.delete)

module.exports = routes