import React from "react";
import TodoItem from "./TodoItem";

const TodoList = ({ todos, toggleTodo, deleteTodo, editTodo }) => (
  <ol>
    <>
      {todos.length > 0 ? (
        <ol>
          {todos.map((todo, index) => (
            <TodoItem
              key={index}
              index={index}
              todo={todo}
              toggleTodo={toggleTodo}
              deleteTodo={deleteTodo}
              editTodo={editTodo}
            />
          ))}
        </ol>
      ) : (
        <p style={{ textAlign: "center" }}>
          No available todos
        </p>
      )}
    </>
  </ol>
);

export default TodoList;
