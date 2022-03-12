module.exports = (sequelize, Sequelize) => {
    const Notas = sequelize.define("notas", {
        id: {
            type: Sequelize.INTEGER,
            autoIncrement: true,
            allowNull: false,
            primaryKey: true
          },
          ra: Sequelize.STRING,
          nota: Sequelize.INTEGER
    });
  
    return Notas;
  };
  