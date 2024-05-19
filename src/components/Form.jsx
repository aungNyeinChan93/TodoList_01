import React from "react";
import { useContext } from "react";
import TodolistContext from "../context/TodoListContext";

const Form = () => {
  const {
    inputValues,
    setInputValue,
    lists,
    setList,
    isEditMode,
    setEditMode,
    editList,
    forFoucs,
  } = useContext(TodolistContext);

  function formHandler(e) {
    e.preventDefault();
    if (inputValues !== "") {
      setList([...lists, { id: Math.random().toString(), item: inputValues }]);
      setInputValue("");
    }
  }

  // update function
  function editFromHandler(e) {
    e.preventDefault();
    if (inputValues !== "") {
      setList(
        lists.map((list) => {
          if (list.id === editList) {
            return { ...list, item: inputValues };
          }
          return list;
        })
      );
      setInputValue("");
      setEditMode(false);
    }
  }

  return (
    <div className="Form Form-container container-fluid ">
      {isEditMode ? (
        <form
          className=" d-flex justify-content-center align-items-center"
          onSubmit={editFromHandler}
        >
          <input
            ref={forFoucs}
            value={inputValues}
            onChange={(e) => setInputValue(e.target.value)}
            type="text"
            placeholder="Enter Your List"
            className="form-control form-control-lg"
          />
          <button type="submit" className="btn btn-danger px-4 py-2 ms-3">
            Update
          </button>
        </form>
      ) : (
        <form
          className=" d-flex justify-content-center align-items-center"
          onSubmit={formHandler}
        >
          <input
            value={inputValues}
            onChange={(e) => setInputValue(e.target.value)}
            type="text"
            placeholder="Enter Your List"
            className="form-control form-control-lg"
          />
          <button type="submit" className="btn btn-danger px-4 py-2 ms-3">
            Submit
          </button>
        </form>
      )}
    </div>
  );
};

export default Form;
