/**
 * @swagger
 * components:
 *  schemas:
 *    usarios:
 *      type: object
 *      required:
 *        - id
 *        - nombre
 *        - correo
 *        - password
 *        - carrera
 *        - foto
 *      properties:
 *        id:
 *          type: integer
 *          description: The auto-generated id description
 *        nombre:
 *          type: string
 *          description: nombre de usuario
 *        correo:
 *          type: string
 *          description: correo unique
 *        password:
 *          type: string
 *          description: Clave segura del usuario 8 - 15 caracteres
 *        carrera:
 *          type: string
 *          description: Carrera que estudia el usuario
 *        foto:
 *          type: string
 *          description: Imagen de perfil del usuario
 * */

/**
 * @swagger
 * tags:
 *  name: usuarios
 *  description: Los API-Endpoints del Usuario
 * /users/:
 *  post:
 *    summary: Crear un nuevo usuario
 *    tags: [usuarios]
 *    requestBody:
 *      content:
 *        application/x-ww-form-urlencoded
 *          schema:
 *            type: object
 *            properties:
 *              nombre:
 *                type: string
 *                description: Nombre de usuarios
 *              correo:
 *                type: string
 *                description: Correo unico de usuario
 *              password:
 *                type: string
 *                description: Clave encriptada de 8 a 15 caracteres
 *              carrera:
 *                type: string
 *                description: Carrera que estudia el usuario
 *              foto:
 *                type: string
 *                description: Imagen de perfil del usuario
 *              required:
 *                - nombre
 *                - correo
 *                - password
 *                - carrera
 *                - foto
 *            responses:
 *              201:
 *                description: Usuario creado con exito
 *                content:
 *                  application/json:
 *                    schema :
 *                      type: object
 *                      properties:
 *                        status:
 *                          type: string
 *                        data:
 *                          type: array
 *                          items:
 *                            $ref: '#/components/schema/usuarios?
 * */

var express = require("express");
var router = express.Router();

/* GET users listing. */
module.exports = router;
