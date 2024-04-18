import { useEffect, useRef } from "react";
import { useStore } from "./store";
import { Card } from "./Card";

export const Todo = () => {
  const {
    todos,
    setDragTarget,
    drag,
    addTodo,
    removeTodo,
    removeDone,
    removeInProgress,
  } = useStore();
  const todo = useRef();

  const onDragOverHandler = (e) => {
    e.preventDefault();
    setDragTarget("todo");
  };
  
  const handleOnDrop = (e) => {
    e.preventDefault();
    addTodo(drag);
    switch (drag.currentTodo) {
      case "todo":
        removeTodo(drag.id);
        break;
      case "inprogress":
        removeInProgress(drag.id);
        break;
      case "done":
        removeDone(drag.id);
        break;
      default:
        break;
    }
  };

  return (
    <>
      <div
        id="todo"
        ref={todo}
        className="todos todo"
        onDrop={handleOnDrop}
        onDragOver={onDragOverHandler}
      >
        <div className="title">
          <h2>To do</h2>
        </div>
        {todos.map((todo, index) => (
          <Card
            key={todo.id}
            text={todo.text}
            id={index}
            currentTodo={"todo"}
          />
        ))}
      </div>
    </>
  );
};
