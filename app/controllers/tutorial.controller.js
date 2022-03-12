const db = require("../models");
const Alunos = db.alunos;

exports.getAlunos = async (req, res) => {
  const retorno = await Alunos.findAll()
  res.json(retorno)
}

// Find a single Tutorial with an id
exports.getOne = async (req, res) => {
  const id = req.params.id;
  const retorno = await Alunos.findOne({where: {ra: id}})
  res.json(retorno)

};