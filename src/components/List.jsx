import React, { Fragment, useContext } from "react";
import TodolistContext from "../context/TodoListContext";

const List = () => {
  const { lists, setList, setEditMode, setEditList, setInputValue, } =
    useContext(TodolistContext);

  function deleteFunction(id) {
    // delete action ~~only return different id
    setList(lists.filter((list) => list.id !== id));
    setInputValue("");
    setEditMode(false);
  }
  function EditFunction(list) {
    setEditMode(true);
    setEditList(list.id);
    setInputValue(list.item);
    //   forFoucs.current.focus()
  }
  return (
    <Fragment>
      <div className="List List-container  ">
        <ul className="list-group ">
          {lists.map((list, index) => {
            return (
              <li
                className=" list-group-item w-50 mx-auto mt-2 p-3 shadow-sm  shadow-sm rounded d-flex justify-content-between align-items-center"
                key={list.id}
              >
                <div>{list.item}</div>
                <div className="btn-group ">
                  <button
                    className="btn btn-warning "
                    style={{ width: "100px" }}
                    onClick={() => EditFunction(list)}
                  >
                    Edit
                  </button>
                  <button
                    className="btn btn-danger "
                    style={{ width: "100px" }}
                    onClick={() => deleteFunction(list.id)}
                  >
                    Delete
                  </button>
                </div>
              </li>
            );
          })}
        </ul>
      </div>
    </Fragment>
  );
};

export default List;
