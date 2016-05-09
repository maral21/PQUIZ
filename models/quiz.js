
//'Quiz' es el nombre de la tabla y los objetos
// question y answer son los campos

module.exports = function(sequelize, DataTypes) {
  return sequelize.define(
    'Quiz',
    { question: DataTypes.STRING,
      answer: DataTypes.STRING 
    });
};