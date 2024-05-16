import React, { useState } from "react";
import Box from "@mui/material/Box";
import TextField from "@mui/material/TextField";
import Button from "@mui/material/Button";
import MenuItem from "@mui/material/MenuItem";

const formatDate = (date) => {
  const year = date.getFullYear();
  const month = String(date.getMonth() + 1).padStart(2, "0");
  const day = String(date.getDate()).padStart(2, "0");
  return `${year}-${month}-${day}`;
};

const AddTodoForm = ({ addTodo }) => {
  const [title, setTitle] = useState("");
  const [priority, setPriority] = useState("Low");
  const [dueDate, setDueDate] = useState(formatDate(new Date()));

  const handleSubmit = (e) => {
    e.preventDefault();
    if (!title.trim()) return;
    addTodo(title, priority, dueDate);
    setTitle("");
    setPriority("Low");
    setDueDate("");
  };

  return (
    <Box style={{ marginBottom: "40px" }}>
      <form className="TodoForm" onSubmit={handleSubmit}>
        <Box
          component="form"
          sx={{
            width: 500,
            maxWidth: "100%",
          }}
          noValidate
          autoComplete="off"
        >
          <TextField
            className="todo-input"
            type="text"
            value={title}
            onChange={(e) => setTitle(e.target.value)}
            label="Add a new todo"
            variant="outlined"
            fullWidth
            id="fullWidth"
            margin="normal"
            required
          />
          <TextField
            select
            label="Priority"
            value={priority}
            onChange={(e) => setPriority(e.target.value)}
            variant="outlined"
            fullWidth
            id="priority"
            margin="normal"
          >
            {["Low", "Medium", "High"].map((option) => (
              <MenuItem key={option} value={option}>
                {option}
              </MenuItem>
            ))}
          </TextField>
          <span>Due Date</span>
          <TextField
            type="date"
            value={dueDate}
            onChange={(e) => setDueDate(e.target.value)}
            variant="outlined"
            fullWidth
            id="dueDate"
            margin="normal"
          />
        </Box>
        <Button className="todo-btn" type="submit">
          CREATE
        </Button>
      </form>
    </Box>
  );
};

export default AddTodoForm;
