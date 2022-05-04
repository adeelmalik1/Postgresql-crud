const express = require("express");
const app = express();
const cors = require('cors');
const pool = require('./db.js');

//middlerware

app.use(cors());
app.use(express.json()); //req.body

//create todo

app.post("/todos", async (req,res)=> {
    try{
      const {description} =req.body;
      const newTodo = await pool.query(
        "INSERT INTO todo (description) VALUES ($1) RETURNING *",
        [description]
      );

      res.json(newTodo.rows[0]);
    } catch(err) {
      console.log(err.message)
    }
})

//get all todos

app.get("/todos", async (req, res)=> {
  try{
    const allTodos = await pool.query(
      "SELECT * FROM todo"
    )
    res.json(allTodos.rows)
  } catch(err) {
    console.log(err.message)
  }
})
app.listen(5000, ()=> {
    console.log(`Server is runnig on port 5000`)
})

// get unique todo

app.get("/todos/:id", async (req, res)=> {
  try {
    const {id} = req.params;
    const singleTodo = await pool.query("SELECT * FROM todo WHERE todo_id = $1", [id])
    res.json(singleTodo.rows[0])
  } catch(err){
    console.log(err.message)
  }
})

// update todo

app.put("/todos/:id", async(req, res)=> {

  try{
    const {id} = req.params;
    const {description} = req.body;
    const updatedTodo = await pool.query("UPDATE todo SET description = $1 WHERE todo_id = $2", [description, id])
    res.json(updatedTodo.rows[0])
  } catch(err){
    console.log(err.message)
  }
})


// delete todo 

app.delete("/todos/:id", async (req, res)=> {
  try{
    const {id} = req.params;
    const updatedTodo = pool.query("DELETE FROM todo WHERE todo_id = $1", [id])
    res.json("todo has deleted")
  } catch(err){
    console.log(err.message)
  }
})