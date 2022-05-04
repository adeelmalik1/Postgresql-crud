import React, {useState} from 'react';
import { useLocation, useNavigate } from 'react-router-dom';

const EditTodo = ()=> {
    const {state} = useLocation();
    const navigate = useNavigate();
    const {id, item} =state;
    const [description, setDescription] = useState(item);
    const onSubmitHandler = async (e)=> {
          e.preventDefault();
          const body = {description};
          try{
          const response = await fetch(`http://localhost:5000/todos/${id}`,
          {
            method: "PUT",
            headers: { "Content-Type": "application/json" },
            body: JSON.stringify(body)
          }
          ); 
          }catch(err){
              console.log(err.message)
          }
        navigate('/')
    }
    return(
        <React.Fragment>
             <form onSubmit={onSubmitHandler}>
                <div className="inputField">
                    <input onChange={(e)=> setDescription(e.target.value)} type="text" value={description}/>
                    <button>Add</button>
                </div>
                </form>
        </React.Fragment>
    )
}
export default EditTodo;