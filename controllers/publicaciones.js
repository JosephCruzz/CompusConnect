const { Publicaciones, Usuarios, Comentario } = require("../models/");

// Obtener todas las publicaciones
exports.getAllPublicaciones = async (req, res) => {
  try {
    const publicaciones = await Publicaciones.findAll({
      include: [
        {
          model: Usuarios,
          as: "usuario",
          attributes: ["id", "nombre", "correo", "carrera", "foto"],
        },
        {
          model: Comentario,
          as: "comentarios",
          include: [
            {
              model: Usuarios,
              as: "usuario",
              attributes: ["id", "nombre", "foto"],
            },
          ],
        },
      ],
      order: [["fecha", "DESC"]],
    });
    res.status(200).json(publicaciones);
  } catch (error) {
    res.status(500).json({ error: error.message });
  }
};

// Obtener una publicación por ID
exports.getPublicacionById = async (req, res) => {
  try {
    const { id } = req.params;
    const publicacion = await Publicaciones.findByPk(id, {
      include: [
        {
          model: Usuarios,
          as: "usuario",
          attributes: ["id", "nombre", "correo", "carrera", "foto"],
        },
        {
          model: Comentario,
          as: "comentarios",
          include: [
            {
              model: Usuarios,
              as: "usuario",
              attributes: ["id", "nombre", "foto"],
            },
          ],
        },
      ],
    });

    if (!publicacion) {
      return res.status(404).json({ message: "Publicación no encontrada" });
    }

    res.status(200).json(publicacion);
  } catch (error) {
    res.status(500).json({ error: error.message });
  }
};

// Crear una nueva publicación
exports.createPublicacion = async (req, res) => {
  try {
    const { idUser, titulo, contenido, categoria } = req.body;

    // Validar campos requeridos
    if (!idUser || !titulo || !contenido || !categoria) {
      return res.status(400).json({
        message:
          "Todos los campos son requeridos: idUser, titulo, contenido, categoria",
      });
    }

    // Verificar que el usuario existe
    const usuario = await Usuarios.findByPk(idUser);
    if (!usuario) {
      return res.status(404).json({ message: "Usuario no encontrado" });
    }

    const nuevaPublicacion = await Publicaciones.create({
      idUser,
      titulo,
      contenido,
      categoria,
      fecha: new Date(),
    });

    // Obtener la publicación con sus relaciones
    const publicacion = await Publicaciones.findByPk(nuevaPublicacion.id, {
      include: [
        {
          model: Usuarios,
          as: "usuario",
          attributes: ["id", "nombre", "correo", "carrera", "foto"],
        },
      ],
    });

    res.status(201).json(publicacion);
  } catch (error) {
    res.status(500).json({ error: error.message });
  }
};

// Actualizar una publicación
exports.updatePublicacion = async (req, res) => {
  try {
    const { id } = req.params;
    const { titulo, contenido, categoria } = req.body;

    const publicacion = await Publicaciones.findByPk(id);

    if (!publicacion) {
      return res.status(404).json({ message: "Publicación no encontrada" });
    }

    await publicacion.update({
      titulo: titulo || publicacion.titulo,
      contenido: contenido || publicacion.contenido,
      categoria: categoria || publicacion.categoria,
    });

    // Obtener la publicación actualizada con sus relaciones
    const publicacionActualizada = await Publicaciones.findByPk(id, {
      include: [
        {
          model: Usuarios,
          as: "usuario",
          attributes: ["id", "nombre", "correo", "carrera", "foto"],
        },
        {
          model: Comentario,
          as: "comentarios",
        },
      ],
    });

    res.status(200).json(publicacionActualizada);
  } catch (error) {
    res.status(500).json({ error: error.message });
  }
};

// Eliminar una publicación
exports.deletePublicacion = async (req, res) => {
  try {
    const { id } = req.params;

    const publicacion = await Publicaciones.findByPk(id);

    if (!publicacion) {
      return res.status(404).json({ message: "Publicación no encontrada" });
    }

    await publicacion.destroy();

    res.status(200).json({ message: "Publicación eliminada exitosamente" });
  } catch (error) {
    res.status(500).json({ error: error.message });
  }
};

// Obtener publicaciones por categoría
exports.getPublicacionesByCategoria = async (req, res) => {
  try {
    const { categoria } = req.params;

    const publicaciones = await Publicaciones.findAll({
      where: { categoria },
      include: [
        {
          model: Usuarios,
          as: "usuario",
          attributes: ["id", "nombre", "correo", "carrera", "foto"],
        },
        {
          model: Comentario,
          as: "comentarios",
        },
      ],
      order: [["fecha", "DESC"]],
    });

    res.status(200).json(publicaciones);
  } catch (error) {
    res.status(500).json({ error: error.message });
  }
};

// Obtener publicaciones de un usuario
exports.getPublicacionesByUser = async (req, res) => {
  try {
    const { idUser } = req.params;

    const usuario = await Usuarios.findByPk(idUser);
    if (!usuario) {
      return res.status(404).json({ message: "Usuario no encontrado" });
    }

    const publicaciones = await Publicaciones.findAll({
      where: { idUser },
      include: [
        {
          model: Usuarios,
          as: "usuario",
          attributes: ["id", "nombre", "correo", "carrera", "foto"],
        },
        {
          model: Comentario,
          as: "comentarios",
        },
      ],
      order: [["fecha", "DESC"]],
    });

    res.status(200).json(publicaciones);
  } catch (error) {
    res.status(500).json({ error: error.message });
  }
};
