import { useEffect, useRef } from "react";
import { useStore } from "./store";
import { Card } from "./Card";

export const InProgress = () => {
  const { inProgress, addInProgress, dragTarget, setDragTarget } = useStore();

  const handleOnDrop = (e) => {
    e.preventDefault();
  };

  const onDragOverHandler = (e) => {
    e.preventDefault();
    setDragTarget("inprogress");
  };
  return (
    <>
      <div
        id="inprogress"
        className="todos inprogress"
        onDrop={handleOnDrop}
        onDragOver={onDragOverHandler}
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
