import pool from "../config/pool_dev.js";

//CRUD
//Create
//Read
//Update
//Delete
export const selectAllTasks = async () =>{
    try{
        const query = `SELECT * FROM TASKS`
        const result = pool.query(query)
        return result.rows
    }catch (e) {
        console.error(e)
        throw new Error(e)
    }
}

export const insertTask = async (task) =>{
    try {
        const query = `INSERT INTO TASKS (TASK) VALUES ($1)`
        const result = pool.query(query, [task])
    }catch (e) {
        console.error(e)
        throw new Error(e)
    }
}

export const updateTask = async (id, task) => {
    try {
        const query = `UPDATE TASKS SET TASK = $1 WHERE ID = $2`
        const result = pool.query(query, [task, id])
    } catch (e) {
        console.error(e)
        throw new Error(e)
    }

}


export const deleteTask = async (id, task) => {
    try {
        const query = `UPDATE TASKS SET TASK = $1 WHERE ID = $2`
        const result = pool.query(query, [task, id])
    } catch (e) {
        console.error(e)
        throw new Error(e)
    }
}

