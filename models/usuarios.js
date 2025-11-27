"use strict";
const { Model } = require("sequelize");
module.exports = (sequelize, DataTypes) => {
  class Usuarios extends Model {
    /**
     * Helper method for defining associations.
     * This method is not a part of Sequelize lifecycle.
     * The `models/index` file will call this method automatically.
     */
    static associate(models) {
      // Un usuario tiene muchas publicaciones
      Usuarios.hasMany(models.Publicaciones, {
        foreignKey: "idUser",
        as: "publicaciones",
      });

      // Un usuario tiene muchos comentarios
      Usuarios.hasMany(models.Comentario, {
        foreignKey: "idUser",
        as: "comentarios",
      });

      // Un usuario puede crear muchos eventos
      Usuarios.hasMany(models.Eventos, {
        foreignKey: "idUser",
        as: "eventos",
      });

      // Un usuario tiene muchas asistencias a eventos
      Usuarios.hasMany(models.Asistencia, {
        foreignKey: "idUsuario",
        as: "asistencias",
      });
    }
  }
  Usuarios.init(
    {
      nombre: DataTypes.STRING,
      correo: DataTypes.STRING,
      password: DataTypes.STRING,
      carrera: DataTypes.STRING,
      foto: DataTypes.STRING,
    },
    {
      sequelize,
      modelName: "Usuarios",
    }
  );
  return Usuarios;
};
