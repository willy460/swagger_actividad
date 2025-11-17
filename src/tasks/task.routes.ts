import { Router, Request, Response } from 'express';
const router = Router();

// Importa tu controlador o lógica de tareas
// import { taskController } from '../controllers/task.controller';

/**
 * @swagger
 * /api/v1/tasks:
 *   get:
 *     summary: Obtener todas las tareas
 *     tags: [Tasks]
 *     responses:
 *       200:
 *         description: Lista de tareas
 */
router.get('/', (req: Request, res: Response) => {
    try {
        // Tu lógica aquí
        res.status(200).json({ message: 'Lista de tareas' });
    } catch (error) {
        res.status(500).json({ error: 'Error al obtener tareas' });
    }
});

/**
 * @swagger
 * /api/v1/tasks/{id}:
 *   get:
 *     summary: Obtener una tarea por ID
 *     tags: [Tasks]
 *     parameters:
 *       - in: path
 *         name: id
 *         required: true
 *         schema:
 *           type: string
 *     responses:
 *       200:
 *         description: Tarea encontrada
 *       404:
 *         description: Tarea no encontrada
 */
router.get('/:id', (req: Request, res: Response) => {
    try {
        const { id } = req.params;
        // Tu lógica para buscar la tarea
        
        // Si no se encuentra la tarea:
        // return res.status(404).json({ error: 'Tarea no encontrada' });
        
        res.status(200).json({ message: `Tarea con ID: ${id}` });
    } catch (error) {
        res.status(500).json({ error: 'Error al obtener la tarea' });
    }
});

/**
 * @swagger
 * /api/v1/tasks:
 *   post:
 *     summary: Crear una nueva tarea
 *     tags: [Tasks]
 *     requestBody:
 *       required: true
 *       content:
 *         application/json:
 *           schema:
 *             type: object
 *             properties:
 *               title:
 *                 type: string
 *               description:
 *                 type: string
 *               status:
 *                 type: string
 *     responses:
 *       201:
 *         description: Tarea creada exitosamente
 */
router.post('/', (req: Request, res: Response) => {
    try {
        const taskData = req.body;
        // Tu lógica para crear la tarea
        
        res.status(201).json({ 
            message: 'Tarea creada exitosamente',
            data: taskData 
        });
    } catch (error) {
        res.status(500).json({ error: 'Error al crear la tarea' });
    }
});

/**
 * @swagger
 * /api/v1/tasks/{id}:
 *   put:
 *     summary: Actualizar una tarea
 *     tags: [Tasks]
 *     parameters:
 *       - in: path
 *         name: id
 *         required: true
 *         schema:
 *           type: string
 *     requestBody:
 *       required: true
 *       content:
 *         application/json:
 *           schema:
 *             type: object
 *     responses:
 *       200:
 *         description: Tarea actualizada
 *       404:
 *         description: Tarea no encontrada
 */
router.put('/:id', (req: Request, res: Response) => {
    try {
        const { id } = req.params;
        const updateData = req.body;
        
        // Tu lógica para actualizar la tarea
        
        res.status(200).json({ 
            message: 'Tarea actualizada exitosamente',
            id,
            data: updateData 
        });
    } catch (error) {
        res.status(500).json({ error: 'Error al actualizar la tarea' });
    }
});

/**
 * @swagger
 * /api/v1/tasks/{id}:
 *   delete:
 *     summary: Eliminar una tarea
 *     tags: [Tasks]
 *     parameters:
 *       - in: path
 *         name: id
 *         required: true
 *         schema:
 *           type: string
 *     responses:
 *       200:
 *         description: Tarea eliminada
 *       404:
 *         description: Tarea no encontrada
 */
router.delete('/:id', (req: Request, res: Response) => {
    try {
        const { id } = req.params;
        
        // Tu lógica para eliminar la tarea
        
        res.status(200).json({ 
            message: 'Tarea eliminada exitosamente',
            id 
        });
    } catch (error) {
        res.status(500).json({ error: 'Error al eliminar la tarea' });
    }
});

export default router;