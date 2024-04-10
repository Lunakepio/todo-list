import { useEffect, useRef } from "react";
import { useStore } from "./store";
import { Card } from "./Card";

export const Todo = () => {
  const { todos, setDragTarget } = useStore();
  const todo = useRef();


  
  const handleOnDrop = (e) => {
    e.preventDefault();
  };

 
  const onDragOverHandler = (e) => {
    e.preventDefault();
    setDragTarget("todo");
  };
  return (
    <>
      <div id="todo" ref={todo} className="todos todo" onDrop={handleOnDrop} onDragEnter={onDragOverHandler} >
        <div className="title"><h2>To do</h2></div>
        {todos.map((todo, index) => (
          <Card key={todo.id} text={todo.text} id={index} />
        ))}
      </div>
    </>
  );
};
