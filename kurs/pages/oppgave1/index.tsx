import React, { useState } from 'react'


function index() {
      const [todos, setTodos] = useState(["jobbe","rydde"]);

      const [todoInput, setTodoInput] = useState("");

      const delete_item = (index: number) => {
        setTodos(oldValues => {
          return oldValues.filter((_, i) => i !== index)
        })
      }
    


  return (
    <div className='min-h-screen bg-zinc-700'>
        <h1 className='text-4xl font-bold text-center text-white'>todo app</h1>
        <div className='flex items-center justify-center'>
            <input type="text" name="todo" value={todoInput} onChange={(e) => setTodoInput(e.target.value)} />
            <button className='mx-5 bg-zinc-600 text-white hover:bg-blue-400 font-bold py-2 px-4 mt-3 rounded duration-500' onClick={() => setTodos([...todos, todoInput, ])}>legg til</button>
        </div>
        {todos.map((todo, i)=>
            <div className='flex items-center justify-center'>
                <p className='text-white text-center mx-5'>{todo}</p>
                <button onClick={() => delete_item(i)} className="bg-zinc-600 text-white hover:bg-blue-400 font-bold py-2 px-4 mt-3 rounded duration-500 ">delete</button>
            </div>
        )}

    </div>
  )
}

export default index