"use strict";
const { Model } = require("sequelize");
module.exports = (sequelize, DataTypes) => {
  class Eventos extends Model {
    /**
     * Helper method for defining associations.
     * This method is not a part of Sequelize lifecycle.
     * The `models/index` file will call this method automatically.
     */
    static associate(models) {
      // Un evento pertenece a un usuario (creador)
      Eventos.belongsTo(models.Usuarios, {
        foreignKey: "idUser",
        as: "usuario",
      });

      // Un evento tiene muchas asistencias
      Eventos.hasMany(models.Asistencia, {
        foreignKey: "idEvento",
        as: "asistencias",
      });
    }
  }
  Eventos.init(
    {
      idUser: DataTypes.INTEGER,
      titulo: DataTypes.STRING,
      descripcion: DataTypes.STRING,
      fecha: DataTypes.DATE,
      lugar: DataTypes.STRING,
      tipo_evento: DataTypes.STRING,
    },
    {
      sequelize,
      modelName: "Eventos",
    }
  );
  return Eventos;
};
