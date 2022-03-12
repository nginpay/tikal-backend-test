module.exports = app => {
  const tutorials = require("../controllers/tutorial.controller.js");
  const notas = require("../controllers/notas.controller.js");
  const queryController = require('../controllers/query.controller')

  var router = require("express").Router();

  // Retrieve all Tutorials
  router.get("/alunos", tutorials.getAlunos);

  router.get("/aluno/:id", tutorials.getOne);

  router.get("/notas", notas.getNotas);

  router.get('/nota/:id', queryController.getUsers);

  router.post('/notas', notas.addNotas)

  app.use("/api/", router);
};
