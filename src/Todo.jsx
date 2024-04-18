import { useEffect, useRef } from "react";
import { useStore } from "./store";
import { Card } from "./Card";
import { useDropHandler } from "./useDropHandler";

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
  
  const onDropHandler = useDropHandler();

  return (
    <>
      <div
        id="todo"
        ref={todo}
        className="todos todo"
        onDrop={onDropHandler}
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
