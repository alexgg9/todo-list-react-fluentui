import React, { useState } from 'react';
import { Stack,TextField } from "@fluentui/react";
import { FluentProvider, Button } from '@fluentui/react-components';
import { bundleIcon, Add16Filled, Add16Regular } from "@fluentui/react-icons";

function AddTodo(props: any) {

    const [todoName, setTodoName] = useState("");
    const AddIcon = bundleIcon(Add16Filled, Add16Regular);
    const addTodo = () => {
        props.addTodo(todoName);
        setTodoName("");
    }
    const setTodo = (e: any) => {
        setTodoName(e.target.value);
    }

  return (
    <FluentProvider>
    <Stack>
        <Stack horizontal>
            <Stack.Item grow>
                <TextField placeholder="Add new task" value={todoName} onChange={setTodo}/>
            </Stack.Item>
            <Button appearance="primary" icon={<Add16Regular />} shape="square" onClick={addTodo} >Add task</Button>
        </Stack>
    </Stack>
    </FluentProvider>
  )
}

export default AddTodo


    