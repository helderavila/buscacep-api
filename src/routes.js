const express = require('express')
const CepController = require('./controllers/CepController')
const routes = express.Router()

routes.get('/', (req, res) => {
  return res.json({ message: `Olá Helder` })
})

routes.post('/cep', CepController.store)

module.exports = routes;