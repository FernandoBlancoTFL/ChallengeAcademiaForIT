const express = require('express');
const router = express.Router();
const { v4: uuidv4 } = require('uuid');

let tasks = [
    {
        id: "1",
        title: "Estudiar Node.js",
        description: "Leer documentación oficial de Node.js",
        completed: false,
        createdAt: new Date("2025-07-01T10:00:00Z")
    },
    {
        id: "2",
        title: "Practicar Express",
        description: "Hacer un CRUD básico con Express",
        completed: false,
        createdAt: new Date("2025-07-02T14:30:00Z")
    },
    {
        id: "3",
        title: "Ver videos de MongoDB",
        description: "Entender cómo conectar MongoDB con Node",
        completed: true,
        createdAt: new Date("2025-07-03T08:45:00Z")
    },
    {
        id: "4",
        title: "Crear proyecto con Express",
        description: "Iniciar estructura de carpetas y endpoints",
        completed: true,
        createdAt: new Date("2025-07-04T12:15:00Z")
    },
    {
        id: "5",
        title: "Configurar Postman",
        description: "Testear rutas GET, POST, PUT y DELETE",
        completed: false,
        createdAt: new Date("2025-07-05T16:00:00Z")
    },
    {
        id: "6",
        title: "Aprender middleware",
        description: "Implementar manejo de errores y logging",
        completed: false,
        createdAt: new Date("2025-07-06T11:20:00Z")
    },
    {
        id: "7",
        title: "Preparar presentación",
        description: "Explicar endpoints de la API en clase",
        completed: false,
        createdAt: new Date("2025-07-07T09:00:00Z")
    },
    {
        id: "8",
        title: "Refactorizar código",
        description: "Separar rutas y controladores en carpetas",
        completed: true,
        createdAt: new Date("2025-07-08T17:45:00Z")
    },
    {
        id: "9",
        title: "Documentar la API",
        description: "Agregar documentación de rutas y ejemplos",
        completed: false,
        createdAt: new Date("2025-07-09T10:30:00Z")
    },
    {
        id: "10",
        title: "Subir proyecto a GitHub",
        description: "Crear repositorio y hacer push",
        completed: false,
        createdAt: new Date("2025-07-10T19:10:00Z")
    }
];

router.get('/', (req, res) => {
    res.json(tasks);
});

router.post('/', (req, res) => {
    const { title, description } = req.body;

    if (!title || !description) {
        return res.status(400).json({ error: 'Título y descripción son requeridos' });
    }

    const newTask = {
        id: uuidv4(),
        title,
        description,
        completed: false,
        createdAt: new Date()
    };

    tasks.push(newTask);
    res.status(201).json(newTask);
});

router.put('/:id', (req, res) => {
    const { id } = req.params;
    const { title, description, completed } = req.body;

    const task = tasks.find(t => t.id === id);
    if (!task) {
        return res.status(404).json({ error: 'Tarea no encontrada' });
    }

    task.title = title !== undefined ? title : task.title;
    task.description = description !== undefined ? description : task.description;
    task.completed = completed !== undefined ? completed : task.completed;

    res.json(task);
});

router.delete('/:id', (req, res) => {
    const { id } = req.params;
    const index = tasks.findIndex(t => t.id === id);

    if (index === -1) {
        return res.status(404).json({ error: 'Tarea no encontrada' });
    }

    const deletedTask = tasks.splice(index, 1);
    res.json(deletedTask[0]);
});

module.exports = router;
