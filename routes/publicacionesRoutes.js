const express = require("express");
const router = express.Router();
const publicacionesController = require("../controllers/publicaciones");

/**
 * @swagger
 * components:
 *   schemas:
 *     Publicacion:
 *       type: object
 *       required:
 *         - idUser
 *         - titulo
 *         - contenido
 *         - categoria
 *       properties:
 *         id:
 *           type: integer
 *           description: ID autogenerado de la publicación
 *         idUser:
 *           type: integer
 *           description: ID del usuario que crea la publicación
 *         titulo:
 *           type: string
 *           description: Título de la publicación
 *         contenido:
 *           type: string
 *           description: Contenido de la publicación
 *         categoria:
 *           type: string
 *           description: Categoría de la publicación
 *         fecha:
 *           type: string
 *           format: date-time
 *           description: Fecha de creación de la publicación
 *         createdAt:
 *           type: string
 *           format: date-time
 *         updatedAt:
 *           type: string
 *           format: date-time
 *         usuario:
 *           type: object
 *           properties:
 *             id:
 *               type: integer
 *             nombre:
 *               type: string
 *             correo:
 *               type: string
 *             carrera:
 *               type: string
 *             foto:
 *               type: string
 *       example:
 *         id: 1
 *         idUser: 1
 *         titulo: "Título de ejemplo"
 *         contenido: "Contenido de la publicación"
 *         categoria: "tecnologia"
 *         fecha: "2025-11-26T10:00:00.000Z"
 *         createdAt: "2025-11-26T10:00:00.000Z"
 *         updatedAt: "2025-11-26T10:00:00.000Z"
 *         usuario:
 *           id: 1
 *           nombre: "Juan Pérez"
 *           correo: "juan@example.com"
 *           carrera: "Ingeniería en Sistemas"
 *           foto: "foto.jpg"
 */

/**
 * @swagger
 * tags:
 *   name: Publicaciones
 *   description: API para gestión de publicaciones
 */

/**
 * @swagger
 * /publicaciones:
 *   post:
 *     summary: Crear una nueva publicación
 *     tags: [Publicaciones]
 *     requestBody:
 *       required: true
 *       content:
 *         application/json:
 *           schema:
 *             type: object
 *             required:
 *               - idUser
 *               - titulo
 *               - contenido
 *               - categoria
 *             properties:
 *               idUser:
 *                 type: integer
 *                 description: ID del usuario que crea la publicación
 *               titulo:
 *                 type: string
 *                 description: Título de la publicación
 *               contenido:
 *                 type: string
 *                 description: Contenido de la publicación
 *               categoria:
 *                 type: string
 *                 description: Categoría de la publicación
 *             example:
 *               idUser: 1
 *               titulo: "Nueva publicación"
 *               contenido: "Este es el contenido de mi publicación"
 *               categoria: "tecnologia"
 *     responses:
 *       201:
 *         description: Publicación creada exitosamente
 *         content:
 *           application/json:
 *             schema:
 *               $ref: '#/components/schemas/Publicacion'
 *       400:
 *         description: Datos inválidos o campos faltantes
 *         content:
 *           application/json:
 *             schema:
 *               type: object
 *               properties:
 *                 message:
 *                   type: string
 *             example:
 *               message: "Todos los campos son requeridos: idUser, titulo, contenido, categoria"
 *       404:
 *         description: Usuario no encontrado
 *         content:
 *           application/json:
 *             schema:
 *               type: object
 *               properties:
 *                 message:
 *                   type: string
 *             example:
 *               message: "Usuario no encontrado"
 *       500:
 *         description: Error del servidor
 *         content:
 *           application/json:
 *             schema:
 *               type: object
 *               properties:
 *                 error:
 *                   type: string
 */
router.post("/", publicacionesController.createPublicacion);

module.exports = router;
