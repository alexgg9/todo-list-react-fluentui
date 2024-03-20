import React, { useState } from 'react';
import { Stack, Label, IconButton, Dialog, DialogType, DialogFooter, PrimaryButton, DefaultButton, TextField } from '@fluentui/react';



interface TodoItemProps {
    todo: { id: number, name: string };
    deleteTodo: (id: number) => void;
    editTodo: (id: number, newName: string) => void;
}

const TodoItem: React.FC<TodoItemProps> = (props) => {
    const [isEditing, setIsEditing] = useState(false);
    const [editedTodoName, setEditedTodoName] = useState(props.todo.name);
    const [openDeleteModal, setOpenDeleteModal] = useState(false);

    const handleEditClick = () => {
        setIsEditing(true);
    };

    const handleSaveEdit = () => {
        props.editTodo(props.todo.id, editedTodoName);
        setIsEditing(false);
    };

    const handleCancelEdit = () => {
        setEditedTodoName(props.todo.name);
        setIsEditing(false);
    };

    const handleDeleteClick = () => {
        setOpenDeleteModal(true);
    };

    return (
        <Stack>
            <Stack horizontal verticalAlign="center" horizontalAlign="space-between">
                {isEditing ? (
                    <TextField
                        value={editedTodoName}
                        onChange={(e, newValue) => setEditedTodoName(newValue || "")}
                        onBlur={handleSaveEdit}
                        onKeyDown={(e) => {
                            if (e.key === 'Enter') {
                                handleSaveEdit();
                            } else if (e.key === 'Escape') {
                                handleCancelEdit();
                            }
                        }}
                    />
                ) : (
                    <Label onClick={() => setIsEditing(true)}>{props.todo.name}</Label>
                )}
                <Stack horizontal>
                    <IconButton iconProps={{ iconName: 'Edit' }} onClick={handleEditClick} />
                    <IconButton iconProps={{ iconName: 'Delete' }} onClick={handleDeleteClick} />
                </Stack>
            </Stack>
            <Dialog
                hidden={!openDeleteModal}
                dialogContentProps={{
                    type: DialogType.normal,
                    title: "Delete Task",
                    subText: "Are you sure you want to delete this task?"
                }}
                modalProps={{
                    isBlocking: true,
                }}
            >
                <DialogFooter>
                    <PrimaryButton text="Yes" onClick={() => { props.deleteTodo(props.todo.id); setOpenDeleteModal(false); }} />
                    <DefaultButton text="No" onClick={() => setOpenDeleteModal(false)} />
                </DialogFooter>
            </Dialog>
        </Stack>
    );
}

export default TodoItem;
