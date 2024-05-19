import "./App.css";
import "bootstrap/dist/css/bootstrap.css";
import Form from "./components/Form";
import TodolistContext from "./context/TodoListContext";
import List from "./components/List";
import { useRef, useState } from "react";

function App() {
  const [inputValues, setInputValue] = useState("");
  const [lists, setList] = useState([]);
  const [isEditMode, setEditMode] = useState(false);
  const [editList, setEditList] = useState("");
  const forFoucs = useRef();

  return (
    <div className="App container-fluid min-vh-100  bg-info-subtle bg-opacity-50">
      <h1 className="App-title p-2 bg-danger rounded text-white fs-3 text-center my-2">
        Todo-List
      </h1>

      <TodolistContext.Provider
        value={{
          inputValues,
          setInputValue,
          lists,
          setList,
          isEditMode,
          setEditMode,
          editList,
          setEditList,
          forFoucs,
        }}
      >
        <Form />
        <List />
      </TodolistContext.Provider>
    </div>
  );
}

export default App;
