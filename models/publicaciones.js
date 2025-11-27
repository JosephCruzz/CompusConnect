"use strict";
const { Model } = require("sequelize");
module.exports = (sequelize, DataTypes) => {
  class Publicaciones extends Model {
    /**
     * Helper method for defining associations.
     * This method is not a part of Sequelize lifecycle.
     * The `models/index` file will call this method automatically.
     */
    static associate(models) {
      // Una publicación pertenece a un usuario
      Publicaciones.belongsTo(models.Usuarios, {
        foreignKey: "idUser",
        as: "usuario",
      });

      // Una publicación tiene muchos comentarios
      Publicaciones.hasMany(models.Comentario, {
        foreignKey: "idPublicacion",
        as: "comentarios",
      });
    }
  }
  Publicaciones.init(
    {
      idUser: DataTypes.INTEGER,
      titulo: DataTypes.STRING,
      contenido: DataTypes.STRING,
      categoria: DataTypes.STRING,
      fecha: DataTypes.DATE,
    },
    {
      sequelize,
      modelName: "Publicaciones",
    }
  );
  return Publicaciones;
};
