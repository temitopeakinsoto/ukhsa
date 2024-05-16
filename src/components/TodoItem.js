

import React, { useState } from "react";
import ListItem from "@mui/material/ListItem";
import ListItemText from "@mui/material/ListItemText";
import ListItemSecondaryAction from "@mui/material/ListItemSecondaryAction";
import Checkbox from "@mui/material/Checkbox";
import IconButton from "@mui/material/IconButton";
import DeleteIcon from "@mui/icons-material/Delete";
import EditIcon from "@mui/icons-material/Edit";

const TodoItem = ({ todo, toggleTodo, deleteTodo, editTodo }) => {
  const [isEditing, setIsEditing] = useState(false);
  const [newTitle, setNewTitle] = useState(todo.title);

  const handleEdit = () => {
    setIsEditing(true);
  };

  const handleSave = () => {
    if (newTitle.trim()) {
      editTodo(todo.id, newTitle);
      setIsEditing(false);
    }
  };

  const handleUpdate = () => {
    handleSave();
  };

  const handleCancel = () => {
    setNewTitle(todo.title);
    setIsEditing(false);
  };

  return (
    <ListItem>
      <Checkbox checked={todo.completed} onChange={() => toggleTodo(todo.id)} />
      {isEditing ? (
        <>
          <input
            type="text"
            value={newTitle}
            onChange={(e) => setNewTitle(e.target.value)}
          />
          <button onClick={handleUpdate}>Update</button>
          <button onClick={handleCancel}>Cancel</button>
        </>
      ) : (
        <ListItemText
          primary={todo.title}
          style={{ textDecoration: todo.completed ? "line-through" : "none" }}
        />
      )}
      <ListItemSecondaryAction>
        <IconButton edge="end" aria-label="edit" onClick={handleEdit}>
          <EditIcon />
        </IconButton>
        <IconButton
          edge="end"
          aria-label="delete"
          onClick={() => deleteTodo(todo.id)}
        >
          <DeleteIcon color="error" />
        </IconButton>
      </ListItemSecondaryAction>
    </ListItem>
  );
};

export default TodoItem;

