import React, {useState} from 'react';
import {Stack, Label, IStackTokens} from '@fluentui/react';
import TodoItem from './TodoItem';


function TodoList(props:any) {

    const containerStackTokens: IStackTokens = { childrenGap: 10 };

  return (
    <Stack tokens={containerStackTokens}>
        {props.todos.length > 0 ? props.todos.map((todo:any) => (
            <TodoItem todo={todo} key={todo.id} deleteTodo={props.deleteTodo} editTodo={props.editTodo}/>
        )):
        <Label>List is empty...</Label>}
    </Stack>    
  );
}

export default TodoList
