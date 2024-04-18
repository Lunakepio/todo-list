import { useEffect, useRef, useCallback } from "react";
import { useStore } from "./store";
import { Card } from "./Card";
import { useDropHandler } from "./useDropHandler";

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
  
  const onDragOverHandler = useCallback((e) => {
    e.preventDefault();
    setDragTarget("done");
  }, [setDragTarget]);  
  
  const onDropHandler = useDropHandler();
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
