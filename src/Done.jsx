import { useEffect, useRef } from "react";
import { useStore } from "./store";
import { Card } from "./Card";

export const Done = () => {
  const {
    done,
    setDragTarget,
    drag,
    addDone,
    removeTodo,
    removeDone,
    removeInProgress,
  } = useStore();
  const todo = useRef();

  const onDragOverHandler = (e) => {
    e.preventDefault();
    setDragTarget("done");
  };

  const onDropHandler = (e) => {
    e.preventDefault();
    addDone(drag);
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
      <div id="done" className="todos done" onDragOver={onDragOverHandler} onDrop={onDropHandler}>
        <div className="title"><h2>Done</h2></div>
        {done.map((todo, index) => (
          <Card key={todo.id} text={todo.text} id={index} currentTodo={"done"} />
        ))}
      </div>
    </>
  );
};
