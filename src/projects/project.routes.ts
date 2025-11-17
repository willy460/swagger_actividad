import { Router, Request, Response } from 'express';

const router = Router();

// Si tienes un archivo de datos, impórtalo
// import { projects } from '../data/data';

// Simulación de datos (reemplaza con tu lógica real)
let projects = [
    { id: 1, name: "Plataforma Educativa", description: "Sistema de cursos online" }
];

/**
 * @swagger
 * /api/v1/projects:
 *   get:
 *     summary: Obtener todos los proyectos
 *     tags: [Projects]
 *     responses:
 *       200:
 *         description: Lista de proyectos
 */
router.get('/', (req: Request, res: Response): void => {
    try {
        res.status(200).json(projects);
    } catch (error) {
        res.status(500).json({ error: 'Error al obtener proyectos' });
    }
});

/**
 * @swagger
 * /api/v1/projects/{id}:
 *   get:
 *     summary: Obtener un proyecto por ID
 *     tags: [Projects]
 *     parameters:
 *       - in: path
 *         name: id
 *         required: true
 *         schema:
 *           type: integer
 *     responses:
 *       200:
 *         description: Proyecto encontrado
 *       404:
 *         description: Proyecto no encontrado
 */
router.get('/:id', (req: Request, res: Response): void => {
    try {
        const projectId = parseInt(req.params.id);
        const project = projects.find(p => p.id === projectId);
        
        if (!project) {
            res.status(404).json({ error: 'Proyecto no encontrado' });
            return;
        }
        
        res.status(200).json(project);
    } catch (error) {
        res.status(500).json({ error: 'Error al obtener el proyecto' });
    }
});

/**
 * @swagger
 * /api/v1/projects:
 *   post:
 *     summary: Crear un nuevo proyecto
 *     tags: [Projects]
 *     requestBody:
 *       required: true
 *       content:
 *         application/json:
 *           schema:
 *             type: object
 *             required:
 *               - name
 *             properties:
 *               name:
 *                 type: string
 *               description:
 *                 type: string
 *     responses:
 *       201:
 *         description: Proyecto creado exitosamente
 */
router.post('/', (req: Request, res: Response): void => {
    try {
        const newProject = {
            id: projects.length + 1,
            ...req.body
        };
        
        projects.push(newProject);
        
        res.status(201).json({
            message: 'Proyecto creado exitosamente',
            project: newProject
        });
    } catch (error) {
        res.status(500).json({ error: 'Error al crear el proyecto' });
    }
});

/**
 * @swagger
 * /api/v1/projects/{id}:
 *   put:
 *     summary: Actualizar un proyecto
 *     tags: [Projects]
 *     parameters:
 *       - in: path
 *         name: id
 *         required: true
 *         schema:
 *           type: integer
 *     requestBody:
 *       required: true
 *       content:
 *         application/json:
 *           schema:
 *             type: object
 *             properties:
 *               name:
 *                 type: string
 *               description:
 *                 type: string
 *     responses:
 *       200:
 *         description: Proyecto actualizado
 *       404:
 *         description: Proyecto no encontrado
 */
router.put('/:id', (req: Request, res: Response): void => {
    try {
        const projectId = parseInt(req.params.id);
        const projectIndex = projects.findIndex(p => p.id === projectId);
        
        if (projectIndex === -1) {
            res.status(404).json({ error: 'Proyecto no encontrado' });
            return;
        }
        
        projects[projectIndex] = {
            ...projects[projectIndex],
            ...req.body,
            id: projectId // Mantener el ID original
        };
        
        res.status(200).json({
            message: 'Proyecto actualizado exitosamente',
            project: projects[projectIndex]
        });
    } catch (error) {
        res.status(500).json({ error: 'Error al actualizar el proyecto' });
    }
});

/**
 * @swagger
 * /api/v1/projects/{id}:
 *   delete:
 *     summary: Eliminar un proyecto
 *     tags: [Projects]
 *     parameters:
 *       - in: path
 *         name: id
 *         required: true
 *         schema:
 *           type: integer
 *     responses:
 *       200:
 *         description: Proyecto eliminado
 *       404:
 *         description: Proyecto no encontrado
 */
router.delete('/:id', (req: Request, res: Response): void => {
    try {
        const projectId = parseInt(req.params.id);
        const projectIndex = projects.findIndex(p => p.id === projectId);
        
        if (projectIndex === -1) {
            res.status(404).json({ error: 'Proyecto no encontrado' });
            return;
        }
        
        projects.splice(projectIndex, 1);
        
        res.status(200).json({
            message: 'Proyecto eliminado exitosamente',
            id: projectId
        });
    } catch (error) {
        res.status(500).json({ error: 'Error al eliminar el proyecto' });
    }
});

export default router;