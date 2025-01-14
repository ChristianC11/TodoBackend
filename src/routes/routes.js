import express from 'express'
import cors from 'cors'
import {pool} from "../config/pool_dev.js";
import {createTask, getTasks, updateTaskById} from "../controllers/tasks.js";
import {deleteTask} from "../models/tasks.js";


const app = express()
const port = process.env.PORT || 3333
app.use(express.urlencoded({ extended: true }))
app.use(cors())

pool.on('error', (err, client) => {
  console.error('Error inesperado en la conexión de la base de datos', err);
  process.exit(-1);
});


app.get('/', (req, res) => {
  res.send('Hello World')
})

app.get('/tasks', async (req, res) => {
  await getTasks(req, res)
})

app.post('/tasks', async (req, res) => {
  await createTask(req, res)
})

app.put('/tasks/:id', async (req, res) => {
  await updateTaskById(req, res)
})

app.delete('/tasks/:id', async (req, res) => {
  await deleteTask(req, res)
})



app.listen(port, () => console.log(`Server listen in port: ${port}`))