import React, { useState } from 'react';
import {IStackTokens, Stack} from '@fluentui/react';
import './App.css';
import AddTodo from './components/AddTodo';
import TodoList from './components/TodoList';

function App() {

  const [todos, setTodos] = useState([
      {id: 1, name: "Learn React"},
      {id: 2, name: "Learn Typescript"}
    ]);

    const [editingTodoId, setEditingTodoId] = useState(null);
    const [editedTodoText, setEditedTodoText] = useState("");

  const containerStackTokens: IStackTokens = { childrenGap: 25 };

  const addTodo = (todoName: string) => {
    if(todoName !== "") {
      const newId = todos.length + 1;
      const newTodo = [...todos, {id: newId, name: todoName}];
      setTodos(newTodo);
    }
  };

  const deleteTodo = (id: number) => {
    const newTasks = todos.filter((todo) => { return todo.id !== id});
    setTodos(newTasks);
  }

  const editTodo = (id: number, newName: string) => {
    const newTodos = todos.map((todo) =>
      todo.id === id ? { ...todo, name: newName } : todo
    );
    setTodos(newTodos);
    setEditingTodoId(null);
    setEditedTodoText(""); 
  };

  return (
    <div className="wrapped">
      <Stack horizontalAlign='center'>
        <h1>Todo List App Using React</h1>
        
          <Stack style={{width: 300}} tokens={containerStackTokens}>
            <AddTodo addTodo={addTodo} />
            <TodoList 
              todos={todos}
              deleteTodo={deleteTodo}
              editingTodoId={editingTodoId}
              setEditingTodoId={setEditingTodoId}
              editedTodoText={editedTodoText}
              setEditedTodoText={setEditedTodoText}
              editTodo={editTodo}
             />
          </Stack> 
      </Stack>
    </div>
  );
}

export default App;
