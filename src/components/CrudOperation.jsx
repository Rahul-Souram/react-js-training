import React, { useState } from "react";

const App = () => {
  const [todos, setTodos] = useState([]);
  const [inputValue, setInputValue] = useState("");
  const [editId, setEditId] = useState(null);

  const handleAddTodo = () => {
    if (inputValue.trim()) {
      if (editId !== null) {
        // Update existing todo
        setTodos(
          todos.map((todo) =>
            todo.id === editId ? { ...todo, text: inputValue } : todo
          )
        );
        setEditId(null);
      } else {
        // Add new todo
        setTodos([...todos, { id: Date.now(), text: inputValue }]);
      }
      setInputValue("");
    }
  };

  const handleEditTodo = (id) => {
    const todo = todos.find((todo) => todo.id === id);
    setInputValue(todo.text);
    setEditId(id);
  };

  const handleDeleteTodo = (id) => {
    setTodos(todos.filter((todo) => todo.id !== id));
  };

  const data = [1, 3, 5, 7, 9];

  console.log(data.filter((i) => i !== 5));

  return (
    <div style={{ padding: "20px" }}>
      <h1>Todo List</h1>
      <input
        type="text"
        value={inputValue}
        onChange={(e) => setInputValue(e.target.value)}
        placeholder="Enter todo"
      />
      <button onClick={handleAddTodo}>
        {editId !== null ? "Update Todo" : "Add Todo"}
      </button>
      <ul>
        {todos.map((todo) => (
          <li key={todo.id}>
            <p>{todo.text}</p>
            <button onClick={() => handleEditTodo(todo.id)}>Edit</button>
            <button onClick={() => handleDeleteTodo(todo.id)}>Delete</button>
          </li>
        ))}
      </ul>
    </div>
  );
};

export default App;
