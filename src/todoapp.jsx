import React, { useEffect, useState } from "react";
import { ToDoItem } from "./todoItem";

export default function ToDolist({ toDolist, onAdd, onComplete }) {
  const [value, setValue] = useState("");

  const listDoing = toDolist.filter((e) => !e.isComplete);
  const listDone = toDolist.filter((e) => e.isComplete);
  const _onAdd = (e) => {
    onAdd(value.trim());
    setValue("");
  };
  const onKeyUp = (e) => {
    if (e.key === "Enter") _onAdd();
  };

  return (
    <>
      <div className="abc">
        <input
          onKeyUp={onKeyUp}
          value={value}
          onChange={(e) => setValue(e.target.value)}
          type="text"
          placeholder="Công việc"
        />
        <button onClick={_onAdd} disabled={!value.trim()}>
          Thêm
        </button>
      </div>

      <div className="congviec">
        <div className="doing">
          <h1>Công Việc Chưa Hoàn Thành</h1>
          {listDoing.map((e) => (
            <ToDoItem onComplete={onComplete} key={e.id} {...e} />
          ))}
        </div>
        <div className="done">
          <h1>Công Việc Đã Hoàn Thành</h1>
          {listDone.map((e) => (
            <ToDoItem key={e.id} {...e} />
          ))}
        </div>
      </div>
    </>
  );
}
