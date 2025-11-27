"use strict";

/** @type {import('sequelize-cli').Migration} */
module.exports = {
  async up(queryInterface, Sequelize) {
    const usuarios = await queryInterface.bulkInsert("Usuarios", [
      {
        nombre: "Juan Perez",
        correo: "juan.perez@example.com",
        password: "password123",
        carrera: "Ingeniería de Sistemas",
        foto: "https://example.com/fotos/juan.jpg",
        createdAt: new Date(),
        updatedAt: new Date(),
      },
      {
        nombre: "Maria Gomez",
        correo: "maria.gomez@example.com",
        password: "password456",
        carrera: "Ingeniería Industrial",
        foto: "https://example.com/fotos/maria.jpg",
        createdAt: new Date(),
        updatedAt: new Date(),
      },
    ]);
    await queryInterface.bulkInsert("Publicaciones", [
      {
        idUser: 1,
        titulo: "Primera Publicación",
        contenido: "Este es el contenido de la primera publicación.",
        categoria: "General",
        fecha: new Date(),
        createdAt: new Date(),
        updatedAt: new Date(),
      },
      {
        idUser: 2,
        titulo: "Segunda Publicación",
        contenido: "Este es el contenido de la segunda publicación.",
        categoria: "Noticias",
        fecha: new Date(),
        createdAt: new Date(),
        updatedAt: new Date(),
      },
    ]);
    await queryInterface.bulkInsert("Eventos", [
      {
        idUser: 1,
        titulo: "Evento de Bienvenida",
        descripcion: "Evento para dar la bienvenida a los nuevos estudiantes.",
        fecha: new Date(),
        lugar: "Auditorio Principal",
        createdAt: new Date(),
        updatedAt: new Date(),
      },
      {
        idUser: 2,
        titulo: "Feria de Empleo",
        descripcion: "Evento para conectar estudiantes con empleadores.",
        fecha: new Date(),
        lugar: "Centro de Convenciones",
        createdAt: new Date(),
        updatedAt: new Date(),
      },
    ]);
    await queryInterface.bulkInsert("Comentarios", [
      {
        idUser: 1,
        idPublicacion: 2,
        texto: "¡Excelente publicación!",
        createdAt: new Date(),
        updatedAt: new Date(),
      },
      {
        idUser: 2,
        idPublicacion: 1,
        texto: "Muy informativo, gracias por compartir.",
        createdAt: new Date(),
        updatedAt: new Date(),
      },
    ]);
    await queryInterface.bulkInsert(
      "Asistencia",
      [
        {
          idUsuario: 1,
          idEvento: 2,
          createdAt: new Date(),
          updatedAt: new Date(),
        },
        {
          idUsuario: 2,
          idEvento: 1,
          createdAt: new Date(),
          updatedAt: new Date(),
        },
      ],
      {}
    );

    return usuarios;
  },

  async down(queryInterface, Sequelize) {
    await queryInterface.bulkDelete("Asistencia", null, {});
    await queryInterface.bulkDelete("Comentarios", null, {});
    await queryInterface.bulkDelete("Eventos", null, {});
    await queryInterface.bulkDelete("Publicaciones", null, {});
    await queryInterface.bulkDelete("Usuarios", null, {});
  },
};
