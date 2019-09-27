const { Schema, model } = require('mongoose')

const CepSchema = new Schema({
  cep: {
    type: String,
    required: true,
  },
  logradouro: {
    type: String,
    required: true,
  },
  complemento: String,
  bairro: {
    type: String,
    required: true,
  },
  localidade: {
    type: String,
    required: true,
  },
  uf: {
    type: String,
    require: true,
  },
}, {
  timestamps: true,
}) 

module.exports = model('Cep', CepSchema)
