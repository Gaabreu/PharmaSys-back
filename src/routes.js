const express = require('express')

const routes = express.Router()

const FuncionarioController = require('./controllers/FuncionarioController')


routes.get('/funcionarios', FuncionarioController.index)

module.exports = routes