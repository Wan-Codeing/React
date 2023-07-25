import {createElement, useState, useCallback} from 'react';

function TodoList(){
    //useState를 활용하여 todolist를 state에 저장
    const [todos, setTodos] = useState([]);
    
    // Todo리스트 추가기능
    const handleAddTodo = useCallback(() => {
        const inputValue = document.getElementById('todoinput');
        const newTodo = {
            text : inputValue.value
        };
        setTodos([...todos, newTodo]);
        inputValue.value="";
    },[todos]);
    // Todo리스트 삭제기능
    const handleDeleteTodo = (index) =>{
        setTodos((todo) => todo.filter((todo) => todo !== todos[index]) );
    }
    
   
    return(
        <div>
            <h2>Todo List</h2>
            <input type="text" id='todoinput'/>
            <button onClick={handleAddTodo}>추가</button>
            <ul>
                {
                    todos.map(
                        (todo,index) => <li key={index} style={{listStyle: "none"}}>{todo.text}<a onClick={() => handleDeleteTodo(index)}> 🍔🍕🍟 </a></li>
                    )
                }
            </ul>
        </div>
    )
}

export default TodoList;