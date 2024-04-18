import { useCallback } from 'react';
import { useStore } from './store';

export const useDropHandler = () => {
  const { addDone, removeTodo, removeInProgress, removeDone, drag, dragTarget, addTodo, addInProgress } = useStore();

  const onDropHandler = useCallback((e) => {
    e.preventDefault();
    switch(dragTarget) {
      case "todo":
        addTodo(drag);
        break;
      case "inprogress":
        addInProgress(drag);
        break;
      case "done":
        addDone(drag);
        break;
      default:
        break;
    }
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
  }, [addDone, drag, removeTodo, removeInProgress, removeDone]);

  return onDropHandler;
}
