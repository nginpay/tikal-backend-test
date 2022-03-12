module.exports = (sequelize, Sequelize) => {
  const Alunos = sequelize.define("alunos", {
    id: {
      type: Sequelize.INTEGER,
      autoIncrement: true,
      allowNull: false,
      primaryKey: true
    },
    ra: Sequelize.STRING,
    name: Sequelize.STRING
});
  return Alunos;
};
