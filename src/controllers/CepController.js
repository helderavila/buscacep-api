const axios = require('axios')
const Cep = require('../models/Cep')

module.exports = {
  async store(req, res) {
    const { cod } =  req.body; //Recuperando o cep no json

    const response = await axios.get(`https://viacep.com.br/ws/${cod}/json/`) 

    const { logradouro, complemento, bairro, localidade, uf } = response.data;

    const info = await Cep.create({
      cep: cod,
      logradouro,
      complemento,
      bairro,
      localidade,
      uf
    })
    return res.json(info)
  }
}
