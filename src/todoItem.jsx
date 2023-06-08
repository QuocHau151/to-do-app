import React from "react";

export const ToDoItem = ({ id, name, isComplete, onComplete }) => {
  return (
    <div className={isComplete ? "isComplete" : ""}>
      <div className={"check"}>
        <h3 className="name">{name}</h3>
        <button
          onClick={() => {
            onComplete(id);
          }}>
          V
        </button>
      </div>
    </div>
  );
};
