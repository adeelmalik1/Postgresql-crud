import React, { useState, useEffect } from 'react';
import { useNavigate } from 'react-router-dom';
import InputTodo from './InputTodo';

const List = () => {
  const navigate = useNavigate();
  const [list, setList] = useState([]);

  const getTodo = async () => {
    console.log("adee")
    try {
      const response = await fetch(`http://localhost:5000/todos`)

      const data = await response.json();
      setList(data);
    } catch (err) {
      console.log(err.message)
    }

  }

  useEffect(() => {
    getTodo();
  }, [])
  const handleDelete = async (id) => {
    console.log(id)
    const response = await fetch(`http://localhost:5000/todos/${id}`, {
      method: "DELETE",
    })
    response && getTodo();
  }
  const handleUpdate = async (id, item) => {


    navigate('/edit', { state: { id, item } })
  }
  return (
    <React.Fragment>
      <InputTodo getTodo={getTodo} />
      <div className='todoContainer'>
        {!list ?
          <h3>Loading..</h3> :
          <div className='listItems'>
            {list?.map((item) => {
              return (
                  <ul key={item.todo_id}>
                    <li>
                      <h3>{item.description}</h3>
                      <div className='btn'>
                        <button onClick={() => handleUpdate(item.todo_id, item.description)} className='btn-1'>Edit</button>
                        <button onClick={() => handleDelete(item.todo_id)} className='btn-2'>Delete</button>
                      </div>
                    </li>
                  </ul>
              )
            })}
          </div>
        }
      </div>
    </React.Fragment>
  )
}

export default List;