import { useGSAP } from "@gsap/react";
import { useStore } from "./store";
import gsap from "gsap";
import { useCallback, useEffect, useRef, useState } from "react";

export const Card = ({ text, id, currentTodo }) => {
  const {addTodo,  removeTodo, drag, setDrag, dragTarget, removeInProgress, removeDone} = useStore();
  const [currentList, setCurrentList] = useState("todo");
  const cardRef = useRef(null);

  useGSAP(() => {
    gsap.from(cardRef.current, {
      y:50,
      opacity: 0,
      duration: 0.5,
      ease: "power4.inOut",
    });
  }, [])
  

  useEffect(() => {
    console.log(dragTarget);
  }, [dragTarget])

  const onClickHandler = () => {
    gsap.to(cardRef.current, {
      y: 50,
      rotate: 23,
      opacity: 0,
      duration: 0.5,
      ease: "expo.out",
      onComplete: () => {
        switch (currentTodo) {
          case "todo":
            removeTodo(id);
            break;
          case "inprogress":
            removeInProgress(id);
            break;
          case "done":
            removeDone(id);
            break;
          default:
            break;
        }
      },
    });
  };

  const handleOnDrag = (e) => {
    e.preventDefault();
    const cardContent= {
      text: text,
      id: id,
      currentTodo: currentTodo,
    }
      setDrag(cardContent);
  };

  const handleOnDragEnd = (e) => {
    e.preventDefault();
    setDrag(null);
  }

  return (
    <div id={text} className="card" ref={cardRef} draggable onDrag={handleOnDrag} onDragEnd={handleOnDragEnd}>
      <p>{text}</p>
      <button onClick={onClickHandler}>❌</button>
    </div>
  );
};
