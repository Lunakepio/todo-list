import { useEffect, useRef } from "react";
import { useStore } from "./store";
import { Card } from "./Card";

export const InProgress = () => {
  const { inProgress, addInProgress, drag, dragTarget, setDragTarget } = useStore();

  const onDragOverHandler = (e) => {
    e.preventDefault();
    setDragTarget("inprogress");
    console.log("inprogress", drag)
  }

  const onDropHandler = (e) => {
    e.preventDefault();
    addInProgress(drag)
  }
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
          <Card key={todo.id} text={todo.text} id={index} />
        ))}
      </div>
    </>
  );
};
