import {deleteTask, insertTask, selectAllTasks, updateTask} from "../models/tasks.js";


export const getTasks = async (req, res) => {
    try {
        const tasks = await selectAllTasks()
        res.status(200).send(tasks)
    } catch (e) {
        res.status(500).send({
        status: 'error',
        message: e.toString(),
        stack: e.stack
        })
    }
}

export const createTask = async (req, res) => {
    try {
        const task = req.body
        await insertTask(task)
        res.status(200).send({
            status: 'ok',
            message: 'Task created'
        })
    } catch (e) {
        res.status(500).send({
            status: 'error',
            message: e.toString(),
            stack: e.stack
        })
    }
}

export const updateTaskById = async (req, res) => {
    try {
        const id = req.params.id
        const task = req.body.task
        await updateTask(id, task)
        res.status(200).send({
            status: 'ok',
            message: 'Task updated'
        })
    } catch (e) {
        res.status(500).send({
            status: 'error',
            message: e.toString(),
            stack: e.stack
        })
    }
}

export const deleteTaskLogical = async (req, res) => {
    try {
        const id = req.params.id
        await deleteTask(id)
        res.status(200).send({
            status: 'ok',
            message: 'Task deleted'
        })
    } catch (e) {
        res.status(500).send({
            status: 'error',
            message: e.toString(),
            stack: e.stack
        })
    }
}