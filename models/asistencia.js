"use strict";
const { Model } = require("sequelize");
module.exports = (sequelize, DataTypes) => {
  class Asistencia extends Model {
    /**
     * Helper method for defining associations.
     * This method is not a part of Sequelize lifecycle.
     * The `models/index` file will call this method automatically.
     */
    static associate(models) {
      // Una asistencia pertenece a un usuario
      Asistencia.belongsTo(models.Usuarios, {
        foreignKey: "idUsuario",
        as: "usuario",
      });

      // Una asistencia pertenece a un evento
      Asistencia.belongsTo(models.Eventos, {
        foreignKey: "idEvento",
        as: "evento",
      });
    }
  }
  Asistencia.init(
    {
      idUsuario: DataTypes.INTEGER,
      idEvento: DataTypes.INTEGER,
    },
    {
      sequelize,
      modelName: "Asistencia",
    }
  );
  return Asistencia;
};
