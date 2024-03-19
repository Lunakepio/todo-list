import { useEffect, useRef } from "react";
import { useStore } from "./store";
import { Card } from "./Card";

export const Done = () => {
  const { done } = useStore();

  return (
    <>
      <div id="done" className="todos done">
        <div className="title"><h2>Done</h2></div>
        {done.map((todo, index) => (
          <Card key={todo.id} text={todo.text} id={index} />
        ))}
      </div>
    </>
  );
};
