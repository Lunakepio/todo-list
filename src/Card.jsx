import { useGSAP } from "@gsap/react";
import { useStore } from "./store";
import gsap from "gsap";
import { useRef, useState } from "react";

export const Card = ({ text, id }) => {
  const {addTodo,  removeTodo, dragTarget, addInProgress, addDone} = useStore();
  const [currentList, setCurrentList] = useState("todo");
  const cardRef = useRef(null);

  useGSAP(() => {
    gsap.fromTo(
      cardRef.current,
      { y: 50, opacity: 0 },
      { y: 0, opacity: 1, duration: 0.5, ease: "expo.out" }
    );
  }, []);

  const onClickHandler = () => {
    gsap.to(cardRef.current, {
      y: 50,
      rotate: 23,
      opacity: 0,
      duration: 0.5,
      ease: "expo.out",
      onComplete: () => removeTodo(id),
    });
  };

  const handleOnDragStart = (e) => {
    console.log(dragTarget)
  };

  const handleOnDragEnd = (e) => {
    e.preventDefault();
    if(dragTarget === "inprogress" && currentList !== "inprogress") {
        removeTodo(id);
        addInProgress({id: id, text: text});
        setCurrentList("inprogress");
      
    }
    console.log(dragTarget, currentList)
  };


  return (
    <div id={text} className="card" ref={cardRef} draggable onDrag={handleOnDragStart} onDragEnd={handleOnDragEnd}>
      <p>{text}</p>
      <button onClick={onClickHandler}>❌</button>
    </div>
  );
};
