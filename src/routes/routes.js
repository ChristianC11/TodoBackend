import express from 'express'
import cors from 'cors'
import {pool} from "../config/pool_dev.js";


const app = express()
const port = process.env.PORT || 3333
app.use(express.urlencoded({ extended: true }))
app.use(cors())

app.get('/', (req, res) => {
  res.send('Hello World')
  pool.query('SELECT * FROM public.users', (error, result) => {
    if (error) {
      console.log(error)
    }
    console.log(result.rows)
  })
})


pool.on('error', (err, client) => {
  console.error('Error inesperado en la conexión de la base de datos', err);
  process.exit(-1);
});

app.listen(port, () => console.log(`Server listen in port: ${port}`))