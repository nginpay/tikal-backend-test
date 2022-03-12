require('dotenv').config();
const { DB_HOST, DB_NAME, DB_USERNAME, DB_PASSWORD } = process.env;

const Pool = require('pg').Pool
const pool = new Pool({
  user: DB_USERNAME,
  host: DB_HOST,
  database: DB_NAME,
  password: DB_PASSWORD,
  port: 5432,
  ssl: false
})


exports.getUsers = (req, res) => {

  const registroAluno = String(req.params.id);
  //console.log(idAluno)

      
    let myQuery = `select alunos.name, 
    (select sum(notas.nota) from notas where notas.ra = alunos.ra)  as total, 
    notas.nota
    from alunos
    inner join notas
    on alunos.ra = notas.ra
    where alunos.ra = '${registroAluno}'` 

    pool.query(myQuery, (error, results) => {
      if (error) {
        throw error
      }

      const arrayQuery = results.rows;

      const notas = arrayQuery.map(function(item){
        const notas = item.nota;
        
        return notas; 
      });
      const totalNotas = notas.length;
      const aluno = arrayQuery[0].name;
      const media = (arrayQuery[0].total)/totalNotas

      let resultadoAluno = "";

      if (media < 4) {
        resultadoAluno = "reprovado"
      } else if (media > 6) {
        resultadoAluno = "Aprovado"
      } else {
        resultadoAluno = "recuperaçao"
      }

  
      const resultado = {
        "ra": registroAluno,
        "aluno": aluno,
        "notas": notas,
        "media": media,
        "resultado": resultadoAluno
        
      }

      res.status(200).json(resultado)
    })
  }