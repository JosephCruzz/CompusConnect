"use strict";
const { Model } = require("sequelize");
module.exports = (sequelize, DataTypes) => {
  class Comentario extends Model {
    /**
     * Helper method for defining associations.
     * This method is not a part of Sequelize lifecycle.
     * The `models/index` file will call this method automatically.
     */
    static associate(models) {
      // Un comentario pertenece a un usuario
      Comentario.belongsTo(models.Usuarios, {
        foreignKey: "idUser",
        as: "usuario",
      });

      // Un comentario pertenece a una publicación
      Comentario.belongsTo(models.Publicaciones, {
        foreignKey: "idPublicacion",
        as: "publicacion",
      });
    }
  }
  Comentario.init(
    {
      idPublicacion: DataTypes.INTEGER,
      idUser: DataTypes.INTEGER,
      texto: DataTypes.STRING,
    },
    {
      sequelize,
      modelName: "Comentario",
    }
  );
  return Comentario;
};
