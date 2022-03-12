const db = require("../models");
const Notas = db.notas;
const Alunos = db.alunos;


exports.getNotas = async (req, res) => {
  const retorno = await Notas.findAll()
  res.json(retorno)
}

// Find a single Tutorial with an id
exports.getOne = async (req, res) => {
  const id = req.params.id;
  const retorno = await Notas.findOne({where: {id}})
  res.json(retorno)

};


// Find a single Tutorial with an id
exports.addNotas = async (req, res) => {
  if(!req.body.ra){
    
    const registroAluno = ("000000" + Math.floor(Math.random() * 999999)).slice(-6);
    const aluno = req.body.aluno;
    const arrayNotas = req.body.notas

    const novoAluno = await Alunos.create({
      ra: registroAluno,
      name: aluno
    })

    const notas = arrayNotas.map(function(item){
    const arraynotas = item.nota;
      return ({ra: novoAluno.ra, nota: arraynotas}); 
    });

    (async ()=>{
      await Notas.bulkCreate(notas)
      return res.status(201).json({msg: `Cadastro realizado com sucesso. RA do aluno: ${registroAluno}`})
    })()

  }else{
    const arrayNotas = req.body.notas
    const notas2 = arrayNotas.map(function(item){
      const arraynotas = item.nota;
        return arraynotas; 
      });
      
    const updateNotas = await Notas.update({ notas2 },{ where: { ra: req.body.ra } })
    return res.status(200).json({msg: "notas atualizadas com sucesso"})
  }
  

};