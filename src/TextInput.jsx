import { useRef } from "react";
import { useStore } from "./store";

export const TextInput = () => {
  const { addTodo } = useStore();
  
  const input = useRef();
  
  const onClickHandler = () => {
    if(!input.current.value) return;
    const newTodo = {
      id : crypto.randomUUID(),
      text : input.current.value,
      currentTodo: "todo",
    }
    addTodo(newTodo);
    input.current.value = "";
  }
  return (
    <>
    <div className="input">
      <input ref={input} type="text" placeholder="insert text here" />
      <button onClick={onClickHandler}>+</button>
    </div>
    </>
  );
}