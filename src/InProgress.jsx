import { useEffect, useRef } from "react";
import { useStore } from "./store";
import { Card } from "./Card";

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

  const onDropHandler = (e) => {
    e.preventDefault();
    addInProgress(drag);
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
