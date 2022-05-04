import React, { useState } from 'react';

const InputTodo = ({ getTodo }) => {

  const [description, setDescription] = useState("");

  const onSubmitForm = async e => {
    e.preventDefault();
    try {
      const body = { description };
      const response = await fetch("http://localhost:5000/todos", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify(body)
      });
      setDescription('')
      getTodo();
    } catch (err) {
      console.error(err.message);
    }
  };
  return (
    <React.Fragment>
      <form onSubmit={onSubmitForm}>
        <div className="inputField">
          <input type="text" value={description} onChange={(e) => setDescription(e.target.value)} />
          <button>Add</button>
        </div>
      </form>
    </React.Fragment>
  )
}

export default InputTodo;