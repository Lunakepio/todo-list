import { useEffect, useRef } from "react";
import { useStore } from "./store";
import { Card } from "./Card";
import { useDropHandler } from "./lib/useDropHandler";

export const InProgress = () => {
  const {
    inProgress,
    addInProgress,
    removeInProgress,
    removeDone,
    drag,
    dragTarget,
    setDragTarget,
    removeTodo,
  } = useStore();

  const onDragOverHandler = (e) => {
    e.preventDefault();
    setDragTarget("inprogress");
  };

 const onDropHandler = useDropHandler();
  return (
    <>
      <div
        id="inprogress"
        className="todos inprogress"
        onDragOver={onDragOverHandler}
        onDrop={onDropHandler}
      >
        <div className="title">
          <h2>In Progress</h2>
        </div>
        {inProgress.map((todo, index) => (
          <Card
            key={todo.id}
            text={todo.text}
            id={index}
            currentTodo={"inprogress"}
          />
        ))}
      </div>
    </>
  );
};
